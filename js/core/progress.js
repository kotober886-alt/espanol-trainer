/**
 * Бизнес-логика прогресса Español Trainer.
 */

import { load, save } from "./storage.js";

export const SUCCESS_STREAK_THRESHOLD = 3;

const SUCCESS_REPLIES = ["¡Bien!", "¡Muy bien!"];
const TRIUMPH_REPLIES = ["¡Genial!", "¡De maravilla!", "¡Sigue así!"];
const CONFUSED_REPLIES = ["¡Casi!", "¡Tú puedes!"];

export function getProgressReaction({
  correct,
  previousStreak = 0,
  streak = 0
} = {}) {
  const resolvedStreak = Math.max(0, Number(streak) || 0);
  const resolvedPrevious = Math.max(0, Number(previousStreak) || 0);

  if (!correct) {
    return {
      type: "confused",
      message: CONFUSED_REPLIES[resolvedPrevious % CONFUSED_REPLIES.length],
      streak: resolvedStreak
    };
  }

  if (resolvedStreak >= SUCCESS_STREAK_THRESHOLD) {
    return {
      type: "triumph",
      message: TRIUMPH_REPLIES[(resolvedStreak - SUCCESS_STREAK_THRESHOLD) % TRIUMPH_REPLIES.length],
      streak: resolvedStreak
    };
  }

  return {
    type: "success",
    message: SUCCESS_REPLIES[Math.max(0, resolvedStreak - 1) % SUCCESS_REPLIES.length],
    streak: resolvedStreak
  };
}

export function getStats() {
  return { ...load().progress.stats };
}

export function getExerciseStats(exerciseId) {
  if (!exerciseId) return null;
  const row = load().progress.stats[exerciseId];
  return row ? { ...row } : null;
}

export function getStreak() {
  return load().progress.streak;
}

export function getLastResult() {
  const result = load().progress.lastResult;
  return result ? { ...result } : null;
}

export function recordAnswer({
  exerciseId,
  originalId = null,
  topic = null,
  correct,
  firstAttempt = true
}) {
  if (!firstAttempt) {
    return { recorded: false, streak: getStreak() };
  }

  const statsId = originalId || exerciseId;
  if (!statsId) {
    throw new Error("[Progress] exerciseId is required.");
  }

  const state = load();
  const previousStreak = Math.max(0, Number(state.progress.streak) || 0);
  const previous = state.progress.stats[statsId] || { tries: 0, correct: 0, wrong: 0 };

  const row = {
    ...previous,
    tries: (Number(previous.tries) || 0) + 1,
    correct: (Number(previous.correct) || 0) + (correct ? 1 : 0),
    wrong: (Number(previous.wrong) || 0) + (correct ? 0 : 1),
    lastCorrect: Boolean(correct),
    lastAnsweredAt: new Date().toISOString()
  };

  if (topic) row.topic = topic;

  state.progress.stats[statsId] = row;
  state.progress.streak = correct ? state.progress.streak + 1 : 0;

  save(state);

  return {
    recorded: true,
    id: statsId,
    row: { ...row },
    correct: Boolean(correct),
    previousStreak,
    streak: state.progress.streak,
    reaction: getProgressReaction({
      correct: Boolean(correct),
      previousStreak,
      streak: state.progress.streak
    })
  };
}

export function recordSkip({ exerciseId, originalId = null, topic = null, firstAttempt = true }) {
  return recordAnswer({
    exerciseId,
    originalId,
    topic,
    correct: false,
    firstAttempt
  });
}

export function recordSessionResult({ answered = null, correct = null, wrong = null, accuracy = null } = {}) {
  const state = load();
  let resolvedAccuracy = Number(accuracy);

  if (!Number.isFinite(resolvedAccuracy)) {
    const answeredNumber = Math.max(0, Number(answered) || 0);
    const correctNumber = Math.max(0, Number(correct) || 0);
    resolvedAccuracy = answeredNumber > 0 ? (correctNumber / answeredNumber) * 100 : 0;
  }

  state.progress.lastResult = {
    accuracy: Math.max(0, Math.min(100, resolvedAccuracy)),
    answered: answered == null ? null : Math.max(0, Number(answered) || 0),
    correct: correct == null ? null : Math.max(0, Number(correct) || 0),
    wrong: wrong == null ? null : Math.max(0, Number(wrong) || 0),
    completedAt: new Date().toISOString()
  };

  save(state);
  return { ...state.progress.lastResult };
}

export function getTopicStats(topicId, exercises = []) {
  const state = load();
  const exerciseIds = new Set(
    exercises.flatMap(function (exercise) {
      if (!exercise) return [];
      return [exercise.id, exercise.originalId].filter(Boolean);
    })
  );

  const rows = Object.entries(state.progress.stats).filter(function ([id, row]) {
    return row.topic === topicId || exerciseIds.has(id);
  });

  const result = rows.reduce(
    function (summary, [, row]) {
      summary.tries += Number(row.tries) || 0;
      summary.correct += Number(row.correct) || 0;
      summary.wrong += Number(row.wrong) || 0;
      return summary;
    },
    { tries: 0, correct: 0, wrong: 0 }
  );

  return {
    ...result,
    accuracy: result.tries > 0 ? Math.round((result.correct / result.tries) * 100) : 0
  };
}

export function getMistakes({ topicId = null, exercises = [] } = {}) {
  const state = load();
  const exerciseIds = new Set(
    exercises.flatMap(function (exercise) {
      if (!exercise) return [];
      return [exercise.id, exercise.originalId].filter(Boolean);
    })
  );

  return Object.entries(state.progress.stats)
    .filter(function ([id, row]) {
      if ((Number(row.wrong) || 0) <= 0) return false;
      if (!topicId) return true;
      return row.topic === topicId || exerciseIds.has(id);
    })
    .map(function ([id, row]) {
      return { id, ...row };
    });
}

export function getMascotState({
  context = "time",
  accuracy = null,
  streak = null,
  date = new Date()
} = {}) {
  const state = load();
  const resolvedStreak = streak === null ? state.progress.streak : Math.max(0, Number(streak) || 0);

  let resolvedAccuracy = accuracy;
  if (resolvedAccuracy === null && state.progress.lastResult) {
    resolvedAccuracy = state.progress.lastResult.accuracy;
  }

  if ((context === "result" || context === "stored") && resolvedAccuracy !== null && Number(resolvedAccuracy) < 60) {
    return "low";
  }

  if ((context === "training" || context === "result" || context === "stored") && resolvedStreak >= SUCCESS_STREAK_THRESHOLD) {
    return "success";
  }

  const hour = date.getHours();
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 21) return "day";
  if (hour >= 21) return "evening";
  return "night";
}