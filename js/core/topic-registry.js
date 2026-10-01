import { CONTEXT_FILL_EXERCISES } from "../../data/exercises.js";

/**
 * Unified topic registry for Español Trainer.
 *
 * Every topic exports one object with:
 * id, title, icon, studyItems, exercises.
 */

/**
 * @typedef {Object} StudyItem
 * @property {string} id
 */

/**
 * @typedef {Object} Exercise
 * @property {string} id
 */

/**
 * @typedef {Object} Topic
 * @property {string} id
 * @property {string} title
 * @property {string} icon
 * @property {StudyItem[]} studyItems
 * @property {Exercise[]} exercises
 */

/** @type {Map<string, Topic>} */
const topics = new Map();

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateUniqueIds(items, sourceName) {
  const ids = new Set();

  items.forEach(function (item, index) {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      throw new TypeError(
        "[TopicRegistry] " + sourceName + "[" + index + "] должен быть объектом."
      );
    }

    if (!isNonEmptyString(item.id)) {
      throw new TypeError(
        "[TopicRegistry] " + sourceName + "[" + index + "] должен иметь непустой id."
      );
    }

    if (ids.has(item.id)) {
      throw new Error(
        '[TopicRegistry] Дублирующийся id "' + item.id + '" в ' + sourceName + "."
      );
    }

    ids.add(item.id);
  });
}

function validateTopic(topic) {
  if (!topic || typeof topic !== "object" || Array.isArray(topic)) {
    throw new TypeError("[TopicRegistry] Topic должен быть объектом.");
  }

  if (!isNonEmptyString(topic.id)) {
    throw new TypeError("[TopicRegistry] Topic.id должен быть непустой строкой.");
  }

  if (!isNonEmptyString(topic.title)) {
    throw new TypeError(
      '[TopicRegistry] Тема "' + topic.id + '" должна иметь непустой title.'
    );
  }

  if (!isNonEmptyString(topic.icon)) {
    throw new TypeError(
      '[TopicRegistry] Тема "' + topic.id + '" должна иметь непустой icon.'
    );
  }

  if (!Array.isArray(topic.studyItems)) {
    throw new TypeError(
      '[TopicRegistry] "' + topic.id + '".studyItems должен быть массивом.'
    );
  }

  if (!Array.isArray(topic.exercises)) {
    throw new TypeError(
      '[TopicRegistry] "' + topic.id + '".exercises должен быть массивом.'
    );
  }

  validateUniqueIds(topic.studyItems, topic.id + ".studyItems");
  validateUniqueIds(topic.exercises, topic.id + ".exercises");
}

function normalizeSupplementalExercise(exercise) {
  const source = exercise || {};
  const answerSource = source.a != null
    ? source.a
    : source.answers != null
      ? source.answers
      : source.answer;
  const answers = Array.isArray(answerSource)
    ? answerSource.slice()
    : answerSource == null || String(answerSource).trim() === ""
      ? []
      : [String(answerSource)];
  const sentence = String(source.sentence || "").trim();
  const translation = String(source.translation || "").trim();
  const question = source.q || (sentence
    ? (translation
      ? "Вставь пропущенную часть по переводу «" + translation + "»: " + sentence
      : sentence)
    : "");

  return {
    ...source,
    q: question,
    a: answers,
    e: source.e || source.hint || "",
    skill: source.skill || "В контексте"
  };
}

function supplementalExercisesFor(topicId) {
  return CONTEXT_FILL_EXERCISES
    .filter(function (exercise) { return exercise && exercise.topic === topicId; })
    .map(normalizeSupplementalExercise);
}

export function registerTopic(topic) {
  validateTopic(topic);

  const id = topic.id.trim();

  if (topics.has(id)) {
    throw new Error(
      '[TopicRegistry] Тема "' + id + '" уже зарегистрирована.'
    );
  }

  const exercises = topic.exercises.concat(supplementalExercisesFor(id));
  validateUniqueIds(exercises, id + ".exercises");

  const normalizedTopic = {
    ...topic,
    id: id,
    title: topic.title.trim(),
    icon: topic.icon.trim(),
    studyItems: topic.studyItems.slice(),
    exercises: exercises
  };

  topics.set(id, normalizedTopic);
  return normalizedTopic;
}

export function registerTopics(topicList) {
  if (!Array.isArray(topicList)) {
    throw new TypeError("[TopicRegistry] registerTopics ожидает массив.");
  }

  return topicList.map(registerTopic);
}

export function getTopic(id) {
  if (!isNonEmptyString(id)) return null;
  return topics.get(id.trim()) || null;
}

export function hasTopic(id) {
  return getTopic(id) !== null;
}

export function getTopics() {
  return Array.from(topics.values());
}

export function getStudyItems(topicId) {
  const topic = getTopic(topicId);
  return topic ? topic.studyItems.slice() : [];
}

export function getExercises(topicId) {
  const topic = getTopic(topicId);
  return topic ? topic.exercises.slice() : [];
}

export function getAllExercises() {
  return getTopics().flatMap(function (topic) {
    return topic.exercises;
  });
}

export function getTopicCount() {
  return topics.size;
}
