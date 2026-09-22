/**
 * Pure answer-checking engine for Español Trainer.
 *
 * No DOM, storage or global state.
 */

/**
 * @typedef {Object} AnswerResult
 * @property {boolean} correct
 * @property {boolean} exact
 * @property {boolean} near
 * @property {string} userAnswer
 * @property {string[]} acceptedAnswers
 * @property {string} displayAnswer
 * @property {string} feedback
 */

const ARTICLES = new Set([
  "el",
  "la",
  "los",
  "las",
  "un",
  "una",
  "unos",
  "unas"
]);

/**
 * Strict normalization:
 * - lower case;
 * - punctuation/symbols ignored;
 * - whitespace normalized;
 * - Spanish accents and ñ preserved.
 */
export function normalizeExact(value) {
  return String(value == null ? "" : value)
    .toLowerCase()
    .normalize("NFC")
    .replace(/['’‘ʼ`´]+/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Lenient normalization used only for "near" answers.
 *
 * á/é/í/ó/ú/ü may be omitted, but ñ remains a distinct letter:
 * café -> cafe is near
 * año  -> ano is NOT near
 */
export function normalizeNear(value) {
  return String(value == null ? "" : value)
    .toLowerCase()
    .replace(/ñ/g, "\uE000")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\uE000/g, "ñ")
    .replace(/['’‘ʼ`´]+/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Expands accepted variants separated by slash or comma.
 * Arrays are supported as well.
 */
export function splitAnswerVariants(answers) {
  const source = Array.isArray(answers) ? answers : [answers];
  const result = [];

  source.forEach(function (answer) {
    const raw = String(answer == null ? "" : answer).trim();
    if (!raw) return;

    raw
      .split(/[,/]+/)
      .map(function (part) { return part.trim(); })
      .filter(Boolean)
      .forEach(function (part) { result.push(part); });
  });

  return Array.from(new Set(result));
}

function stripLeadingArticle(value) {
  const words = value.split(" ");
  if (words.length > 1 && ARTICLES.has(words[0])) words.shift();
  return words.join(" ");
}

function normalized(value, normalizer, options) {
  const settings = options || {};
  let result = normalizer(value);

  if (settings.articlesOptional) {
    result = stripLeadingArticle(result);
  }

  return result;
}

function compareScalar(userAnswer, acceptedAnswers, options) {
  const accepted = splitAnswerVariants(acceptedAnswers);
  const userVariants = splitAnswerVariants(userAnswer);

  if (!userVariants.length || !accepted.length) {
    return { exact: false, near: false };
  }

  const exactAccepted = new Set(
    accepted
      .map(function (answer) {
        return normalized(answer, normalizeExact, options);
      })
      .filter(Boolean)
  );

  const exact = userVariants.every(function (answer) {
    const value = normalized(answer, normalizeExact, options);
    return value && exactAccepted.has(value);
  });

  if (exact) {
    return { exact: true, near: false };
  }

  const nearAccepted = new Set(
    accepted
      .map(function (answer) {
        return normalized(answer, normalizeNear, options);
      })
      .filter(Boolean)
  );

  const near = userVariants.every(function (answer) {
    const value = normalized(answer, normalizeNear, options);
    return value && nearAccepted.has(value);
  });

  return { exact: false, near: near };
}

function splitStructured(value) {
  if (Array.isArray(value)) {
    return value.map(function (part) {
      return String(part == null ? "" : part).trim();
    });
  }

  return String(value == null ? "" : value)
    .split("|")
    .map(function (part) { return part.trim(); });
}

function compareStructured(userAnswer, expectedGroups, options) {
  const userParts = splitStructured(userAnswer);

  if (userParts.length !== expectedGroups.length) {
    return { exact: false, near: false };
  }

  const comparisons = expectedGroups.map(function (accepted, index) {
    return compareScalar(userParts[index], accepted, options);
  });

  const exact = comparisons.every(function (result) {
    return result.exact;
  });

  const near = !exact && comparisons.every(function (result) {
    return result.exact || result.near;
  });

  return { exact: exact, near: near };
}

function normalizePicture(value, normalizer) {
  return normalized(value, normalizer, { articlesOptional: true })
    .split(" ")
    .filter(function (word) {
      return word && word !== "y" && word !== "e";
    })
    .sort()
    .join(" ");
}

function comparePicturePart(userAnswer, acceptedAnswers) {
  const accepted = splitAnswerVariants(acceptedAnswers);
  const exactUser = normalizePicture(userAnswer, normalizeExact);

  const exact = Boolean(exactUser) && accepted.some(function (answer) {
    return exactUser === normalizePicture(answer, normalizeExact);
  });

  if (exact) {
    return { exact: true, near: false };
  }

  const nearUser = normalizePicture(userAnswer, normalizeNear);
  const near = Boolean(nearUser) && accepted.some(function (answer) {
    return nearUser === normalizePicture(answer, normalizeNear);
  });

  return { exact: false, near: near };
}

function feedbackFor(item, exact, near) {
  if (exact) {
    return item.sessionReview
      ? "Верно! Повторение закреплено."
      : "Верно! Отличная работа.";
  }

  if (near) {
    return "Почти верно — проверь ударение или написание.";
  }

  return "Пока не совпало.";
}

function displayAnswerFor(item, acceptedAnswers) {
  if (item.displayAnswer != null && String(item.displayAnswer).trim()) {
    return String(item.displayAnswer);
  }

  return acceptedAnswers.join(" / ");
}

function resultFor(item, userAnswer, acceptedAnswers, exact, near) {
  return {
    // Near remains a separate, non-correct state so legacy progress semantics
    // are preserved: only exact answers increment the correct streak.
    correct: exact,
    exact: exact,
    near: near,
    userAnswer: String(userAnswer == null ? "" : userAnswer),
    acceptedAnswers: acceptedAnswers.slice(),
    displayAnswer: displayAnswerFor(item, acceptedAnswers),
    feedback: feedbackFor(item, exact, near)
  };
}

function articlesOptional(item) {
  return item.articlesOptional === true || item.allowArticleOmission === true;
}

export function checkText(item, userAnswer) {
  const acceptedAnswers = splitAnswerVariants(item.a || item.answers || []);
  const comparison = compareScalar(userAnswer, acceptedAnswers, {
    articlesOptional: articlesOptional(item)
  });

  return resultFor(
    item,
    userAnswer,
    acceptedAnswers,
    comparison.exact,
    comparison.near
  );
}

export function checkChoice(item, userAnswer) {
  return checkText(item, userAnswer);
}

export function checkMatch(item, userAnswer) {
  const pairs = Array.isArray(item.pairs) ? item.pairs : [];

  if (!pairs.length) {
    return checkText(item, userAnswer);
  }

  const expectedGroups = pairs.map(function (pair) {
    if (!Array.isArray(pair)) return [];
    return splitAnswerVariants(pair[1]);
  });

  const comparison = compareStructured(userAnswer, expectedGroups, {
    articlesOptional: articlesOptional(item)
  });

  const acceptedAnswers = expectedGroups.map(function (answers) {
    return answers.join(" / ");
  });

  return resultFor(
    item,
    userAnswer,
    acceptedAnswers,
    comparison.exact,
    comparison.near
  );
}

export function checkCloze(item, userAnswer) {
  if (Array.isArray(item.blanks) && item.blanks.length) {
    const expectedGroups = item.blanks.map(function (blank) {
      return splitAnswerVariants(blank);
    });

    const comparison = compareStructured(userAnswer, expectedGroups, {
      articlesOptional: articlesOptional(item)
    });

    const acceptedAnswers = expectedGroups.map(function (answers) {
      return answers.join(" / ");
    });

    return resultFor(
      item,
      userAnswer,
      acceptedAnswers,
      comparison.exact,
      comparison.near
    );
  }

  return checkText(item, userAnswer);
}

export function checkPictureLabel(item, userAnswer) {
  const labels = Array.isArray(item.pictureLabels) ? item.pictureLabels : [];
  const userParts = splitStructured(userAnswer);

  const expectedGroups = labels.map(function (label) {
    return splitAnswerVariants(
      label && (label.answers || label.reveal)
        ? (label.answers || label.reveal)
        : []
    );
  });

  const acceptedAnswers = expectedGroups.map(function (answers) {
    return answers.join(" / ");
  });

  if (!labels.length || userParts.length !== labels.length) {
    return resultFor(
      item,
      userAnswer,
      acceptedAnswers,
      false,
      false
    );
  }

  const comparisons = labels.map(function (label, index) {
    return comparePicturePart(
      userParts[index],
      label.answers || label.reveal || []
    );
  });

  const exact = comparisons.every(function (result) {
    return result.exact;
  });

  const near = !exact && comparisons.every(function (result) {
    return result.exact || result.near;
  });

  return resultFor(
    item,
    userAnswer,
    acceptedAnswers,
    exact,
    near
  );
}

/**
 * Main public checker.
 *
 * Result contract:
 * {
 *   correct,
 *   exact,
 *   near,
 *   userAnswer,
 *   acceptedAnswers,
 *   displayAnswer,
 *   feedback
 * }
 */
export function checkAnswer(item, userAnswer) {
  if (!item || typeof item !== "object" || Array.isArray(item)) {
    throw new TypeError("[Answers] Exercise must be an object.");
  }

  switch (item.type || "text") {
    case "choice":
    case "context-choice":
      return checkChoice(item, userAnswer);

    case "match":
      return checkMatch(item, userAnswer);

    case "cloze":
    case "cloze-passage":
      return checkCloze(item, userAnswer);

    case "picture-label":
      return checkPictureLabel(item, userAnswer);

    // Legacy scalar exercise types (text/audio/order/forms/color-prompt/etc.)
    // continue to use the same pure scalar matcher until their own modules move.
    default:
      return checkText(item, userAnswer);
  }
}
