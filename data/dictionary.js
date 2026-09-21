// Extracted data module from the former inline dictionary section in index.html.
// Stage 1 of index.html refactor: vocabulary metadata moved out of the HTML shell.

export const TOPICS = [
  { id: "verbs", title: "Основные глаголы" },
  { id: "present", title: "Presente" },
  { id: "pronouns", title: "Местоимения" },
  { id: "questions", title: "Вопросы" },
  { id: "constructions", title: "Разговорные конструкции" },
  { id: "gustar", title: "Gustar и похожие" },
  { id: "agreement", title: "Артикли и согласование" },
  { id: "prepositions", title: "Предлоги" },
  { id: "connectors", title: "Связки и конструкции" },
  { id: "past", title: "Прошедшее время" },
  { id: "routine", title: "Распорядок дня" },
  { id: "calendar", title: "Дни и времена года" },
  { id: "city", title: "Город и район" },
  { id: "home", title: "Мой дом" },
  { id: "chores", title: "Домашние дела" },
  { id: "colors", title: "Цвета" },
  { id: "foods", title: "Продукты питания" },
  { id: "clothes", title: "Одежда и аксессуары" },
  { id: "activities", title: "Занятия и увлечения" }
];

// Vocabulary arrays are being migrated in batches from the former inline block.
export const dictionaries = {
  verbs: [],
  foods: [],
  clothes: [],
  activities: []
};
