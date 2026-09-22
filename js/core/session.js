/**
 * Session and exercise-queue engine for Español Trainer.
 *
 * No DOM access and no mutable application globals.
 * Topic data comes from Topic Registry; legacy pools are accepted only as a
 * temporary fallback until every topic is migrated.
 */

import {
  getTopic,
  getTopics
} from "./topic-registry.js";

const TEST_TYPES = new Set([
  "choice",
  "context-choice",
  "match",
  "cloze",
  "cloze-passage",
  "category-sort",
  "ser-estar-hay",
  "audio_story_quiz"
]);

function uniqueExercises(items) {
  const result = [];
  const seen = new Set();

  (items || []).forEach(function (item) {
    if (!item || typeof item !== "object") return;

    const id = String(item.id || "").trim();
    if (!id || seen.has(id)) return;

    seen.add(id);
    result.push(item);
  });

  return result;
}

function registeredExercises() {
  return getTopics().flatMap(function (topic) {
    return topic.exercises || [];
  });
}

/**
 * Builds an exercise pool for a topic/mode.
 *
 * Registered topics use Topic Registry as the primary source.
 * legacyExercises is a temporary fallback for topics not migrated yet.
 */
export function buildExercisePool({
  topicId = "all",
  mode = "all",
  categoryId = "all",
  customExercises = [],
  legacyExercises = [],
  stats = {}
} = {}) {
  let items;

  if (topicId === "custom" || mode === "custom") {
    items = customExercises.slice();
  } else if (topicId === "all") {
    items = uniqueExercises(
      legacyExercises
        .concat(registeredExercises())
        .concat(customExercises)
    );
  } else {
    const registered = getTopic(topicId);

    if (registered) {
      const topicCustom = customExercises.filter(function (item) {
        return item && item.topic === topicId;
      });

      const legacyTopicExercises = legacyExercises.filter(function (item) {
        return item && item.topic === topicId;
      });

      items = uniqueExercises(
        registered.exercises
          .concat(legacyTopicExercises)
          .concat(topicCustom)
      );
    } else {
      items = legacyExercises.filter(function (item) {
        return item && item.topic === topicId;
      });
    }
  }

  if (categoryId && categoryId !== "all") {
    items = items.filter(function (item) {
      return item.foodCat === categoryId || item.category === categoryId;
    });
  }

  if (mode === "pictures") {
    items = items.filter(function (item) {
      return item.type === "picture-label" || item.type === "color-prompt";
    });
  } else if (mode === "mistakes") {
    items = items.filter(function (item) {
      const row = stats[item.id] || stats[item.originalId];
      return row && Number(row.wrong) > 0;
    });
  } else if (mode === "tests") {
    items = items.filter(function (item) {
      return TEST_TYPES.has(item.type);
    });
  } else if (mode === "audio") {
    items = items.filter(function (item) {
      return item.type === "audio" || item.type === "audio_story_quiz";
    });
  }

  return uniqueExercises(items);
}

function shuffle(items, random) {
  const copy = items.slice();

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    const temp = copy[index];
    copy[index] = copy[other];
    copy[other] = temp;
  }

  return copy;
}

function normalizeQuestion(value) {
  return String(value == null ? "" : value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function exerciseConcept(item) {
  let id = String(
    item.originalId || item.reviewOf || item.id || ""
  ).replace(/__(?:review|session_review)$/, "");

  id = id
    .replace(/^(choice|audio)_/, "")
    .replace(/^study_/, "");

  const aliases = {
    foods: "food",
    clothes: "clothes",
    colors: "color",
    activities: "activity",
    pronouns: "pronoun"
  };

  const topic = String(item.topic || "");
  const prefix = (aliases[topic] || topic) + "_";

  if (topic && id.indexOf(topic + "_") === 0) {
    id = id.slice(topic.length + 1);
  }

  if (prefix !== "_" && id.indexOf(prefix) === 0) {
    id = id.slice(prefix.length);
  }

  id = id.replace(/_(es|ru|ctx|poss|verb_\d+)$/, " ");

  return topic + ":" + id.trim();
}

function exerciseDirection(item) {
  const question = String(item.q || "").toLowerCase();

  if (
    question.indexOf("на русский") >= 0 ||
    question.indexOf("узнай") >= 0
  ) {
    return "to-ru";
  }

  if (
    question.indexOf("на испанский") >= 0 ||
    question.indexOf("вспомни") >= 0
  ) {
    return "to-es";
  }

  return item.type || "text";
}

/**
 * Creates a diverse queue without mutating the source array.
 */
export function buildQueue(
  exercises,
  {
    size = null,
    topicId = "all",
    random = Math.random
  } = {}
) {
  const pool = shuffle(
    uniqueExercises(exercises),
    random
  );

  const requestedSize = Number(size);
  const target =
    Number.isFinite(requestedSize) && requestedSize > 0
      ? Math.min(Math.floor(requestedSize), pool.length)
      : pool.length;

  const result = [];

  while (pool.length && result.length < target) {
    const recent = result.slice(-9);

    const recentConcepts =
      recent.map(exerciseConcept);

    const recentQuestions =
      recent
        .slice(-12)
        .map(function (item) {
          return normalizeQuestion(item.q);
        });

    const recentTypes =
      recent
        .slice(-2)
        .map(function (item) {
          return item.type || "text";
        });

    const recentTopics =
      recent
        .slice(-2)
        .map(function (item) {
          return item.topic;
        });

    const previous =
      result[result.length - 1];

    let bestScore = -Infinity;
    let candidates = [];

    pool.forEach(function (item, poolIndex) {
      let score = random() * 8;

      const concept =
        exerciseConcept(item);

      const conceptDistance =
        recentConcepts.lastIndexOf(concept);

      if (conceptDistance < 0) {
        score += 130;
      } else {
        score += conceptDistance * 12;
      }

      if (
        recentQuestions.indexOf(
          normalizeQuestion(item.q)
        ) < 0
      ) {
        score += 80;
      } else {
        score -= 180;
      }

      if (
        recentTypes.indexOf(
          item.type || "text"
        ) < 0
      ) {
        score += 24;
      }

      if (
        topicId === "all" &&
        recentTopics.indexOf(item.topic) < 0
      ) {
        score += 22;
      }

      if (
        !previous ||
        exerciseDirection(previous) !==
          exerciseDirection(item)
      ) {
        score += 18;
      }

      if (score > bestScore + 0.01) {
        bestScore = score;
        candidates = [poolIndex];
      } else if (
        Math.abs(score - bestScore) < 0.01
      ) {
        candidates.push(poolIndex);
      }
    });

    const chosen =
      candidates[
        Math.floor(random() * candidates.length)
      ];

    result.push(
      pool.splice(chosen, 1)[0]
    );
  }

  return result;
}

function statsIdFor(item) {
  if (!item) return "";
  return String(
    item.originalId ||
    item.reviewOf ||
    item.id ||
    ""
  );
}

/**
 * Creates one isolated active-session controller.
 */
export function createSession(options = {}) {
  const topicId =
    options.topicId || "all";

  const mode =
    options.mode || "all";

  const pool = Array.isArray(options.pool)
    ? options.pool.slice()
    : buildExercisePool(options);

  const queue = buildQueue(pool, {
    size: options.size,
    topicId: topicId,
    random:
      typeof options.random === "function"
        ? options.random
        : Math.random
  });

  const initialCount = queue.length;

  let index = 0;
  let active = queue.length > 0;

  const seen = new Set();
  const history = [];
  const wrongIds = [];
  const mistakes = [];

  let answered = 0;
  let correct = 0;
  let wrong = 0;

  function getCurrent() {
    return queue[index] || null;
  }

  function getSummary() {
    const accuracy =
      answered > 0
        ? (correct / answered) * 100
        : 0;

    return {
      topicId: topicId,
      mode: mode,
      total: initialCount,
      answered: answered,
      correct: correct,
      wrong: wrong,
      wrongIds: wrongIds.slice(),
      mistakes: mistakes.slice(),
      accuracy: accuracy,
      reviewCount: 0,
      queueLength: initialCount,
      history: history.slice()
    };
  }

  function recordResult({
    correct: isCorrect,
    skipped = false,
    answerResult = null
  } = {}) {
    const item = getCurrent();

    if (!item) {
      return {
        recorded: false,
        counted: false,
        scheduledReview: false,
        summary: getSummary()
      };
    }

    const statsId =
      statsIdFor(item);

    if (!statsId || seen.has(statsId)) {
      return {
        recorded: false,
        counted: false,
        scheduledReview: false,
        summary: getSummary()
      };
    }

    seen.add(statsId);
    answered += 1;

    if (isCorrect) {
      correct += 1;
    } else {
      wrong += 1;

      if (wrongIds.indexOf(statsId) < 0) {
        wrongIds.push(statsId);
        mistakes.push(item);
      }
    }

    history.push({
      itemId: item.id,
      statsId: statsId,
      correct: Boolean(isCorrect),
      skipped: Boolean(skipped),
      review: false,
      answerResult: answerResult,
      index: index
    });

    return {
      recorded: true,
      counted: true,
      scheduledReview: false,
      summary: getSummary()
    };
  }

  function next() {
    if (!queue.length) {
      active = false;

      return {
        finished: true,
        index: 0,
        current: null
      };
    }

    if (index >= queue.length - 1) {
      active = false;

      return {
        finished: true,
        index: index,
        current: getCurrent()
      };
    }

    index += 1;

    return {
      finished: false,
      index: index,
      current: getCurrent()
    };
  }

  function previous() {
    if (!queue.length) {
      return {
        index: 0,
        current: null
      };
    }

    index = Math.max(
      0,
      index - 1
    );

    return {
      index: index,
      current: getCurrent()
    };
  }

  function isFinished() {
    return !active;
  }

  function stop() {
    active = false;
  }

  function getState() {
    return {
      active: active,
      topicId: topicId,
      mode: mode,
      index: index,
      current: getCurrent(),
      queue: queue.slice(),
      mistakes: mistakes.slice(),
      summary: getSummary()
    };
  }

  return Object.freeze({
    getCurrent: getCurrent,
    getQueue: function () {
      return queue.slice();
    },
    getIndex: function () {
      return index;
    },
    getState: getState,
    recordResult: recordResult,
    next: next,
    previous: previous,
    isFinished: isFinished,
    getSummary: getSummary,
    getMistakes: function () {
      return mistakes.slice();
    },
    stop: stop
  });
}
