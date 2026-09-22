/**
 * Предлоги topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "a",
    "cat": "basic",
    "word": "a",
    "base": "a",
    "gender": "простой предлог",
    "tr": "в, к; направление",
    "ru": [
      "в",
      "к"
    ],
    "answers": [
      "a"
    ],
    "art": null,
    "examples": [
      [
        "Voy a Madrid.",
        "Я еду в Мадрид."
      ],
      [
        "Escribo a Ana.",
        "Я пишу Ане."
      ]
    ],
    "cloze": "Voy ___ Madrid.",
    "clozeAnswers": [
      "a"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "al",
    "cat": "basic",
    "word": "al",
    "base": "al",
    "gender": "a + el",
    "tr": "в, к + мужской артикль",
    "ru": [
      "в",
      "к"
    ],
    "answers": [
      "al"
    ],
    "art": null,
    "examples": [
      [
        "Voy al trabajo.",
        "Я иду на работу."
      ],
      [
        "Vamos al cine.",
        "Мы идём в кино."
      ]
    ],
    "cloze": "Vamos ___ cine.",
    "clozeAnswers": [
      "al"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "de",
    "cat": "basic",
    "word": "de",
    "base": "de",
    "gender": "простой предлог",
    "tr": "из, от, о; принадлежность",
    "ru": [
      "из",
      "от",
      "о"
    ],
    "answers": [
      "de"
    ],
    "art": null,
    "examples": [
      [
        "Soy de Rusia.",
        "Я из России."
      ],
      [
        "La mesa es de madera.",
        "Стол сделан из дерева."
      ]
    ],
    "cloze": "Soy ___ Rusia.",
    "clozeAnswers": [
      "de"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "del",
    "cat": "basic",
    "word": "del",
    "base": "del",
    "gender": "de + el",
    "tr": "из, от + мужской артикль",
    "ru": [
      "из",
      "от"
    ],
    "answers": [
      "del"
    ],
    "art": null,
    "examples": [
      [
        "Vengo del trabajo.",
        "Я возвращаюсь с работы."
      ],
      [
        "Es la puerta del banco.",
        "Это дверь банка."
      ]
    ],
    "cloze": "Vengo ___ trabajo.",
    "clozeAnswers": [
      "del"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "en",
    "cat": "basic",
    "word": "en",
    "base": "en",
    "gender": "простой предлог",
    "tr": "в, на; местонахождение",
    "ru": [
      "в",
      "на"
    ],
    "answers": [
      "en"
    ],
    "art": null,
    "examples": [
      [
        "Vivo en Madrid.",
        "Я живу в Мадриде."
      ],
      [
        "El libro está en la mesa.",
        "Книга лежит на столе."
      ]
    ],
    "cloze": "Vivo ___ Madrid.",
    "clozeAnswers": [
      "en"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "con",
    "cat": "basic",
    "word": "con",
    "base": "con",
    "gender": "простой предлог",
    "tr": "с, вместе с",
    "ru": [
      "с",
      "вместе с"
    ],
    "answers": [
      "con"
    ],
    "art": null,
    "examples": [
      [
        "Bebo café con leche.",
        "Я пью кофе с молоком."
      ],
      [
        "Hablo con Marta.",
        "Я разговариваю с Мартой."
      ]
    ],
    "cloze": "Hablo ___ Marta.",
    "clozeAnswers": [
      "con"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "sin",
    "cat": "basic",
    "word": "sin",
    "base": "sin",
    "gender": "простой предлог",
    "tr": "без",
    "ru": [
      "без"
    ],
    "answers": [
      "sin"
    ],
    "art": null,
    "examples": [
      [
        "Tomo té sin azúcar.",
        "Я пью чай без сахара."
      ],
      [
        "Salgo sin paraguas.",
        "Я выхожу без зонта."
      ]
    ],
    "cloze": "Tomo té ___ azúcar.",
    "clozeAnswers": [
      "sin"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "para",
    "cat": "basic",
    "word": "para",
    "base": "para",
    "gender": "цель, адресат, срок",
    "tr": "для, чтобы, к сроку",
    "ru": [
      "для",
      "чтобы",
      "к сроку"
    ],
    "answers": [
      "para"
    ],
    "art": null,
    "examples": [
      [
        "Este regalo es para ti.",
        "Этот подарок для тебя."
      ],
      [
        "Necesito el informe para el lunes.",
        "Мне нужен отчёт к понедельнику."
      ]
    ],
    "cloze": "Este regalo es ___ ti.",
    "clozeAnswers": [
      "para"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "por",
    "cat": "basic",
    "word": "por",
    "base": "por",
    "gender": "причина, путь, обмен",
    "tr": "из-за, по, через, за",
    "ru": [
      "из-за",
      "по",
      "через",
      "за"
    ],
    "answers": [
      "por"
    ],
    "art": null,
    "examples": [
      [
        "Paseamos por el parque.",
        "Мы гуляем по парку."
      ],
      [
        "Gracias por tu ayuda.",
        "Спасибо за твою помощь."
      ]
    ],
    "cloze": "Gracias ___ tu ayuda.",
    "clozeAnswers": [
      "por"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "sobre",
    "cat": "place",
    "word": "sobre",
    "base": "sobre",
    "gender": "место или тема",
    "tr": "на, над; о чём-либо",
    "ru": [
      "на",
      "над",
      "о"
    ],
    "answers": [
      "sobre"
    ],
    "art": null,
    "examples": [
      [
        "El móvil está sobre la mesa.",
        "Телефон лежит на столе."
      ],
      [
        "Leo un libro sobre arte.",
        "Я читаю книгу об искусстве."
      ]
    ],
    "cloze": "El móvil está ___ la mesa.",
    "clozeAnswers": [
      "sobre"
    ],
    "meta": {
      "categoryTitle": "Место",
      "categoryOrder": 2,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "debajo",
    "cat": "compound",
    "word": "debajo de",
    "base": "debajo de",
    "gender": "составной предлог",
    "tr": "под",
    "ru": [
      "под"
    ],
    "answers": [
      "debajo de"
    ],
    "art": null,
    "examples": [
      [
        "El gato está debajo de la mesa.",
        "Кот находится под столом."
      ],
      [
        "Los zapatos están debajo de la cama.",
        "Туфли находятся под кроватью."
      ]
    ],
    "cloze": "El gato está ___ la mesa.",
    "clozeAnswers": [
      "debajo de"
    ],
    "meta": {
      "categoryTitle": "Составные",
      "categoryOrder": 3,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "delante",
    "cat": "compound",
    "word": "delante de",
    "base": "delante de",
    "gender": "составной предлог",
    "tr": "перед",
    "ru": [
      "перед"
    ],
    "answers": [
      "delante de"
    ],
    "art": null,
    "examples": [
      [
        "El coche está delante de la casa.",
        "Машина стоит перед домом."
      ],
      [
        "Espero delante del cine.",
        "Я жду перед кинотеатром."
      ]
    ],
    "cloze": "El coche está ___ la casa.",
    "clozeAnswers": [
      "delante de"
    ],
    "meta": {
      "categoryTitle": "Составные",
      "categoryOrder": 3,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "detras",
    "cat": "compound",
    "word": "detrás de",
    "base": "detrás de",
    "gender": "составной предлог",
    "tr": "за, позади",
    "ru": [
      "за",
      "позади"
    ],
    "answers": [
      "detrás de",
      "detras de"
    ],
    "art": null,
    "examples": [
      [
        "El jardín está detrás de la casa.",
        "Сад находится за домом."
      ],
      [
        "La mochila está detrás de la puerta.",
        "Рюкзак находится за дверью."
      ]
    ],
    "cloze": "El jardín está ___ la casa.",
    "clozeAnswers": [
      "detrás de",
      "detras de"
    ],
    "meta": {
      "categoryTitle": "Составные",
      "categoryOrder": 3,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "cerca",
    "cat": "compound",
    "word": "cerca de",
    "base": "cerca de",
    "gender": "составной предлог",
    "tr": "рядом с, недалеко от",
    "ru": [
      "рядом с",
      "недалеко от"
    ],
    "answers": [
      "cerca de"
    ],
    "art": null,
    "examples": [
      [
        "Vivo cerca del metro.",
        "Я живу рядом с метро."
      ],
      [
        "La farmacia está cerca de casa.",
        "Аптека находится недалеко от дома."
      ]
    ],
    "cloze": "Vivo ___ metro.",
    "clozeAnswers": [
      "cerca del"
    ],
    "meta": {
      "categoryTitle": "Составные",
      "categoryOrder": 3,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "lejos",
    "cat": "compound",
    "word": "lejos de",
    "base": "lejos de",
    "gender": "составной предлог",
    "tr": "далеко от",
    "ru": [
      "далеко от"
    ],
    "answers": [
      "lejos de"
    ],
    "art": null,
    "examples": [
      [
        "El aeropuerto está lejos del centro.",
        "Аэропорт находится далеко от центра."
      ],
      [
        "Vivimos lejos de la escuela.",
        "Мы живём далеко от школы."
      ]
    ],
    "cloze": "Vivimos ___ la escuela.",
    "clozeAnswers": [
      "lejos de"
    ],
    "meta": {
      "categoryTitle": "Составные",
      "categoryOrder": 3,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "entre",
    "cat": "place",
    "word": "entre",
    "base": "entre",
    "gender": "простой предлог",
    "tr": "между, среди",
    "ru": [
      "между",
      "среди"
    ],
    "answers": [
      "entre"
    ],
    "art": null,
    "examples": [
      [
        "El banco está entre la farmacia y el cine.",
        "Банк находится между аптекой и кинотеатром."
      ],
      [
        "Estoy entre amigos.",
        "Я среди друзей."
      ]
    ],
    "cloze": "El banco está ___ la farmacia y el cine.",
    "clozeAnswers": [
      "entre"
    ],
    "meta": {
      "categoryTitle": "Место",
      "categoryOrder": 2,
      "allCategoryTitle": "Все предлоги"
    }
  },
  {
    "id": "junto",
    "cat": "compound",
    "word": "junto a",
    "base": "junto a",
    "gender": "составной предлог",
    "tr": "рядом с, возле",
    "ru": [
      "рядом с",
      "возле"
    ],
    "answers": [
      "junto a"
    ],
    "art": null,
    "examples": [
      [
        "La parada está junto al banco.",
        "Остановка находится рядом с банком."
      ],
      [
        "Siéntate junto a mí.",
        "Сядь рядом со мной."
      ]
    ],
    "cloze": "La parada está ___ banco.",
    "clozeAnswers": [
      "junto al"
    ],
    "meta": {
      "categoryTitle": "Составные",
      "categoryOrder": 3,
      "allCategoryTitle": "Все предлоги"
    }
  }
];

const EXERCISES = [
  {
    "id": "pr1",
    "topic": "prepositions",
    "skill": "Предлог",
    "q": "Вставь подходящий предлог: Voy ___ trabajo.",
    "a": [
      "al",
      "a el"
    ],
    "e": "После ir направление выражают через a. A + el объединяются в al."
  },
  {
    "id": "pr2",
    "topic": "prepositions",
    "skill": "Предлог",
    "q": "Вставь подходящий предлог: Vivo ___ Madrid.",
    "a": [
      "en"
    ],
    "e": "Местонахождение обычно выражают предлогом en."
  },
  {
    "id": "pr3",
    "topic": "prepositions",
    "skill": "Предлог",
    "q": "Вставь подходящий предлог: Quedamos ___ amigos.",
    "a": [
      "con",
      "con los"
    ],
    "e": "Con означает «с»."
  },
  {
    "id": "pr4",
    "topic": "prepositions",
    "skill": "Предлог",
    "q": "Вставь подходящий предлог: Soy ___ Rusia.",
    "a": [
      "de"
    ],
    "e": "De выражает происхождение: «из»."
  },
  {
    "id": "pr5",
    "topic": "prepositions",
    "skill": "Предлог",
    "q": "Вставь подходящий предлог: Este regalo es ___ ti.",
    "a": [
      "para"
    ],
    "e": "Para показывает адресата или назначение."
  },
  {
    "id": "pr6",
    "topic": "prepositions",
    "skill": "Предлог",
    "q": "Вставь подходящий предлог: Gracias ___ tu ayuda.",
    "a": [
      "por"
    ],
    "e": "Por здесь выражает причину благодарности."
  },
  {
    "id": "pr7",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: Я иду в кино.",
    "a": [
      "Voy al cine",
      "Yo voy al cine"
    ]
  },
  {
    "id": "pr8",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: Я отдыхаю дома.",
    "a": [
      "Descanso en casa",
      "Yo descanso en casa"
    ]
  },
  {
    "id": "pr9",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: Я иду на море.",
    "a": [
      "Voy al mar",
      "Yo voy al mar"
    ]
  },
  {
    "id": "pr10",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: Я работаю с Анной.",
    "a": [
      "Trabajo con Ana",
      "Yo trabajo con Ana"
    ]
  },
  {
    "id": "pr11",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: Книга Марии.",
    "a": [
      "El libro de María",
      "Libro de María"
    ]
  },
  {
    "id": "pr12",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: По вечерам.",
    "a": [
      "Por las noches"
    ]
  },
  {
    "id": "pr13",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: В марте.",
    "a": [
      "En marzo"
    ]
  },
  {
    "id": "pr14",
    "topic": "prepositions",
    "skill": "Перевод",
    "q": "Переведи на испанский: Для моих друзей.",
    "a": [
      "Para mis amigos",
      "Para mis amigas"
    ]
  },
  {
    "id": "pr15",
    "topic": "prepositions",
    "skill": "Значение",
    "q": "Какой испанский предлог обычно выражает направление к месту?",
    "a": [
      "a"
    ]
  },
  {
    "id": "pr16",
    "topic": "prepositions",
    "skill": "Значение",
    "q": "Какой испанский предлог обычно выражает местонахождение?",
    "a": [
      "en"
    ]
  },
  {
    "id": "pr17",
    "topic": "prepositions",
    "skill": "Значение",
    "q": "Какой испанский предлог означает совместность?",
    "a": [
      "con"
    ]
  },
  {
    "id": "pr18",
    "topic": "prepositions",
    "skill": "Значение",
    "q": "Какой испанский предлог может означать происхождение или принадлежность?",
    "a": [
      "de"
    ]
  },
  {
    "id": "pr19",
    "topic": "prepositions",
    "skill": "Значение",
    "q": "Какой испанский предлог используют для цели или адресата?",
    "a": [
      "para"
    ]
  },
  {
    "id": "pr20",
    "topic": "prepositions",
    "skill": "Значение",
    "q": "Какой испанский предлог часто используют для причины или способа?",
    "a": [
      "por"
    ]
  },
  {
    "id": "study_prepositions_a_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: в, к; направление.",
    "a": [
      "a"
    ],
    "e": "Правильный вариант: a."
  },
  {
    "id": "study_prepositions_a_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: a.",
    "a": [
      "в",
      "к",
      "в, к; направление"
    ],
    "e": "a — в, к; направление."
  },
  {
    "id": "study_prepositions_a_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я еду в Мадрид.»: Voy ___ Madrid.",
    "a": [
      "a"
    ],
    "e": "Voy a Madrid. — Я еду в Мадрид."
  },
  {
    "id": "study_prepositions_al_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: в, к + мужской артикль.",
    "a": [
      "al"
    ],
    "e": "Правильный вариант: al."
  },
  {
    "id": "study_prepositions_al_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: al.",
    "a": [
      "в",
      "к",
      "в, к + мужской артикль"
    ],
    "e": "al — в, к + мужской артикль."
  },
  {
    "id": "study_prepositions_al_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я иду на работу.»: Vamos ___ cine.",
    "a": [
      "al"
    ],
    "e": "Voy al trabajo. — Я иду на работу."
  },
  {
    "id": "study_prepositions_de_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: из, от, о; принадлежность.",
    "a": [
      "de"
    ],
    "e": "Правильный вариант: de."
  },
  {
    "id": "study_prepositions_de_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: de.",
    "a": [
      "из",
      "от",
      "о",
      "из, от, о; принадлежность"
    ],
    "e": "de — из, от, о; принадлежность."
  },
  {
    "id": "study_prepositions_de_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я из России.»: Soy ___ Rusia.",
    "a": [
      "de"
    ],
    "e": "Soy de Rusia. — Я из России."
  },
  {
    "id": "study_prepositions_del_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: из, от + мужской артикль.",
    "a": [
      "del"
    ],
    "e": "Правильный вариант: del."
  },
  {
    "id": "study_prepositions_del_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: del.",
    "a": [
      "из",
      "от",
      "из, от + мужской артикль"
    ],
    "e": "del — из, от + мужской артикль."
  },
  {
    "id": "study_prepositions_del_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я возвращаюсь с работы.»: Vengo ___ trabajo.",
    "a": [
      "del"
    ],
    "e": "Vengo del trabajo. — Я возвращаюсь с работы."
  },
  {
    "id": "study_prepositions_en_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: в, на; местонахождение.",
    "a": [
      "en"
    ],
    "e": "Правильный вариант: en."
  },
  {
    "id": "study_prepositions_en_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: en.",
    "a": [
      "в",
      "на",
      "в, на; местонахождение"
    ],
    "e": "en — в, на; местонахождение."
  },
  {
    "id": "study_prepositions_en_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я живу в Мадриде.»: Vivo ___ Madrid.",
    "a": [
      "en"
    ],
    "e": "Vivo en Madrid. — Я живу в Мадриде."
  },
  {
    "id": "study_prepositions_con_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: с, вместе с.",
    "a": [
      "con"
    ],
    "e": "Правильный вариант: con."
  },
  {
    "id": "study_prepositions_con_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: con.",
    "a": [
      "с",
      "вместе с",
      "с, вместе с"
    ],
    "e": "con — с, вместе с."
  },
  {
    "id": "study_prepositions_con_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пью кофе с молоком.»: Hablo ___ Marta.",
    "a": [
      "con"
    ],
    "e": "Bebo café con leche. — Я пью кофе с молоком."
  },
  {
    "id": "study_prepositions_sin_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: без.",
    "a": [
      "sin"
    ],
    "e": "Правильный вариант: sin."
  },
  {
    "id": "study_prepositions_sin_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: sin.",
    "a": [
      "без"
    ],
    "e": "sin — без."
  },
  {
    "id": "study_prepositions_sin_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пью чай без сахара.»: Tomo té ___ azúcar.",
    "a": [
      "sin"
    ],
    "e": "Tomo té sin azúcar. — Я пью чай без сахара."
  },
  {
    "id": "study_prepositions_para_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: для, чтобы, к сроку.",
    "a": [
      "para"
    ],
    "e": "Правильный вариант: para."
  },
  {
    "id": "study_prepositions_para_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: para.",
    "a": [
      "для",
      "чтобы",
      "к сроку",
      "для, чтобы, к сроку"
    ],
    "e": "para — для, чтобы, к сроку."
  },
  {
    "id": "study_prepositions_para_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Этот подарок для тебя.»: Este regalo es ___ ti.",
    "a": [
      "para"
    ],
    "e": "Este regalo es para ti. — Этот подарок для тебя."
  },
  {
    "id": "study_prepositions_por_es",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: из-за, по, через, за.",
    "a": [
      "por"
    ],
    "e": "Правильный вариант: por."
  },
  {
    "id": "study_prepositions_por_ru",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: por.",
    "a": [
      "из-за",
      "по",
      "через",
      "за",
      "из-за, по, через, за"
    ],
    "e": "por — из-за, по, через, за."
  },
  {
    "id": "study_prepositions_por_ctx",
    "topic": "prepositions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы гуляем по парку.»: Gracias ___ tu ayuda.",
    "a": [
      "por"
    ],
    "e": "Paseamos por el parque. — Мы гуляем по парку."
  },
  {
    "id": "study_prepositions_sobre_es",
    "topic": "prepositions",
    "foodCat": "place",
    "skill": "Вспомни",
    "q": "Переведи на испанский: на, над; о чём-либо.",
    "a": [
      "sobre"
    ],
    "e": "Правильный вариант: sobre."
  },
  {
    "id": "study_prepositions_sobre_ru",
    "topic": "prepositions",
    "foodCat": "place",
    "skill": "Узнай",
    "q": "Переведи на русский: sobre.",
    "a": [
      "на",
      "над",
      "о",
      "на, над; о чём-либо"
    ],
    "e": "sobre — на, над; о чём-либо."
  },
  {
    "id": "study_prepositions_sobre_ctx",
    "topic": "prepositions",
    "foodCat": "place",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Телефон лежит на столе.»: El móvil está ___ la mesa.",
    "a": [
      "sobre"
    ],
    "e": "El móvil está sobre la mesa. — Телефон лежит на столе."
  },
  {
    "id": "study_prepositions_debajo_es",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Вспомни",
    "q": "Переведи на испанский: под.",
    "a": [
      "debajo de"
    ],
    "e": "Правильный вариант: debajo de."
  },
  {
    "id": "study_prepositions_debajo_ru",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Узнай",
    "q": "Переведи на русский: debajo de.",
    "a": [
      "под"
    ],
    "e": "debajo de — под."
  },
  {
    "id": "study_prepositions_debajo_ctx",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Кот находится под столом.»: El gato está ___ la mesa.",
    "a": [
      "debajo de"
    ],
    "e": "El gato está debajo de la mesa. — Кот находится под столом."
  },
  {
    "id": "study_prepositions_delante_es",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Вспомни",
    "q": "Переведи на испанский: перед.",
    "a": [
      "delante de"
    ],
    "e": "Правильный вариант: delante de."
  },
  {
    "id": "study_prepositions_delante_ru",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Узнай",
    "q": "Переведи на русский: delante de.",
    "a": [
      "перед"
    ],
    "e": "delante de — перед."
  },
  {
    "id": "study_prepositions_delante_ctx",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Машина стоит перед домом.»: El coche está ___ la casa.",
    "a": [
      "delante de"
    ],
    "e": "El coche está delante de la casa. — Машина стоит перед домом."
  },
  {
    "id": "study_prepositions_detras_es",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Вспомни",
    "q": "Переведи на испанский: за, позади.",
    "a": [
      "detrás de",
      "detras de"
    ],
    "e": "Правильный вариант: detrás de."
  },
  {
    "id": "study_prepositions_detras_ru",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Узнай",
    "q": "Переведи на русский: detrás de.",
    "a": [
      "за",
      "позади",
      "за, позади"
    ],
    "e": "detrás de — за, позади."
  },
  {
    "id": "study_prepositions_detras_ctx",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сад находится за домом.»: El jardín está ___ la casa.",
    "a": [
      "detrás de",
      "detras de"
    ],
    "e": "El jardín está detrás de la casa. — Сад находится за домом."
  },
  {
    "id": "study_prepositions_cerca_es",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Вспомни",
    "q": "Переведи на испанский: рядом с, недалеко от.",
    "a": [
      "cerca de"
    ],
    "e": "Правильный вариант: cerca de."
  },
  {
    "id": "study_prepositions_cerca_ru",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Узнай",
    "q": "Переведи на русский: cerca de.",
    "a": [
      "рядом с",
      "недалеко от",
      "рядом с, недалеко от"
    ],
    "e": "cerca de — рядом с, недалеко от."
  },
  {
    "id": "study_prepositions_cerca_ctx",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я живу рядом с метро.»: Vivo ___ metro.",
    "a": [
      "cerca del"
    ],
    "e": "Vivo cerca del metro. — Я живу рядом с метро."
  },
  {
    "id": "study_prepositions_lejos_es",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Вспомни",
    "q": "Переведи на испанский: далеко от.",
    "a": [
      "lejos de"
    ],
    "e": "Правильный вариант: lejos de."
  },
  {
    "id": "study_prepositions_lejos_ru",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Узнай",
    "q": "Переведи на русский: lejos de.",
    "a": [
      "далеко от"
    ],
    "e": "lejos de — далеко от."
  },
  {
    "id": "study_prepositions_lejos_ctx",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Аэропорт находится далеко от центра.»: Vivimos ___ la escuela.",
    "a": [
      "lejos de"
    ],
    "e": "El aeropuerto está lejos del centro. — Аэропорт находится далеко от центра."
  },
  {
    "id": "study_prepositions_entre_es",
    "topic": "prepositions",
    "foodCat": "place",
    "skill": "Вспомни",
    "q": "Переведи на испанский: между, среди.",
    "a": [
      "entre"
    ],
    "e": "Правильный вариант: entre."
  },
  {
    "id": "study_prepositions_entre_ru",
    "topic": "prepositions",
    "foodCat": "place",
    "skill": "Узнай",
    "q": "Переведи на русский: entre.",
    "a": [
      "между",
      "среди",
      "между, среди"
    ],
    "e": "entre — между, среди."
  },
  {
    "id": "study_prepositions_entre_ctx",
    "topic": "prepositions",
    "foodCat": "place",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Банк находится между аптекой и кинотеатром.»: El banco está ___ la farmacia y el cine.",
    "a": [
      "entre"
    ],
    "e": "El banco está entre la farmacia y el cine. — Банк находится между аптекой и кинотеатром."
  },
  {
    "id": "study_prepositions_junto_es",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Вспомни",
    "q": "Переведи на испанский: рядом с, возле.",
    "a": [
      "junto a"
    ],
    "e": "Правильный вариант: junto a."
  },
  {
    "id": "study_prepositions_junto_ru",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "Узнай",
    "q": "Переведи на русский: junto a.",
    "a": [
      "рядом с",
      "возле",
      "рядом с, возле"
    ],
    "e": "junto a — рядом с, возле."
  },
  {
    "id": "study_prepositions_junto_ctx",
    "topic": "prepositions",
    "foodCat": "compound",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Остановка находится рядом с банком.»: La parada está ___ banco.",
    "a": [
      "junto al"
    ],
    "e": "La parada está junto al banco. — Остановка находится рядом с банком."
  },
  {
    "id": "choice_prepositions_a",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: в, к; направление.",
    "a": [
      "a"
    ],
    "options": [
      "a",
      "al",
      "de",
      "del"
    ],
    "e": "a — в, к; направление."
  },
  {
    "id": "choice_prepositions_al",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: в, к + мужской артикль.",
    "a": [
      "al"
    ],
    "options": [
      "al",
      "de",
      "del",
      "en"
    ],
    "e": "al — в, к + мужской артикль."
  },
  {
    "id": "choice_prepositions_de",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: из, от, о; принадлежность.",
    "a": [
      "de"
    ],
    "options": [
      "de",
      "del",
      "en",
      "con"
    ],
    "e": "de — из, от, о; принадлежность."
  },
  {
    "id": "choice_prepositions_del",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: из, от + мужской артикль.",
    "a": [
      "del"
    ],
    "options": [
      "del",
      "en",
      "con",
      "sin"
    ],
    "e": "del — из, от + мужской артикль."
  },
  {
    "id": "choice_prepositions_en",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: в, на; местонахождение.",
    "a": [
      "en"
    ],
    "options": [
      "en",
      "con",
      "sin",
      "para"
    ],
    "e": "en — в, на; местонахождение."
  },
  {
    "id": "choice_prepositions_con",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: с, вместе с.",
    "a": [
      "con"
    ],
    "options": [
      "con",
      "sin",
      "para",
      "por"
    ],
    "e": "con — с, вместе с."
  },
  {
    "id": "choice_prepositions_sin",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: без.",
    "a": [
      "sin"
    ],
    "options": [
      "sin",
      "para",
      "por",
      "a"
    ],
    "e": "sin — без."
  },
  {
    "id": "choice_prepositions_para",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: для, чтобы, к сроку.",
    "a": [
      "para"
    ],
    "options": [
      "para",
      "por",
      "a",
      "al"
    ],
    "e": "para — для, чтобы, к сроку."
  },
  {
    "id": "choice_prepositions_por",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: из-за, по, через, за.",
    "a": [
      "por"
    ],
    "options": [
      "por",
      "a",
      "al",
      "de"
    ],
    "e": "por — из-за, по, через, за."
  },
  {
    "id": "choice_prepositions_sobre",
    "topic": "prepositions",
    "foodCat": "place",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: на, над; о чём-либо.",
    "a": [
      "sobre"
    ],
    "options": [
      "sobre",
      "debajo de",
      "delante de",
      "detrás de"
    ],
    "e": "sobre — на, над; о чём-либо."
  },
  {
    "id": "choice_prepositions_debajo",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: под.",
    "a": [
      "debajo de"
    ],
    "options": [
      "debajo de",
      "delante de",
      "detrás de",
      "cerca de"
    ],
    "e": "debajo de — под."
  },
  {
    "id": "choice_prepositions_delante",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: перед.",
    "a": [
      "delante de"
    ],
    "options": [
      "delante de",
      "detrás de",
      "cerca de",
      "lejos de"
    ],
    "e": "delante de — перед."
  },
  {
    "id": "choice_prepositions_detras",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: за, позади.",
    "a": [
      "detrás de"
    ],
    "options": [
      "detrás de",
      "cerca de",
      "lejos de",
      "junto a"
    ],
    "e": "detrás de — за, позади."
  },
  {
    "id": "choice_prepositions_cerca",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рядом с, недалеко от.",
    "a": [
      "cerca de"
    ],
    "options": [
      "cerca de",
      "lejos de",
      "junto a",
      "debajo de"
    ],
    "e": "cerca de — рядом с, недалеко от."
  },
  {
    "id": "choice_prepositions_lejos",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: далеко от.",
    "a": [
      "lejos de"
    ],
    "options": [
      "lejos de",
      "junto a",
      "debajo de",
      "delante de"
    ],
    "e": "lejos de — далеко от."
  },
  {
    "id": "choice_prepositions_entre",
    "topic": "prepositions",
    "foodCat": "place",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: между, среди.",
    "a": [
      "entre"
    ],
    "options": [
      "entre",
      "junto a",
      "a",
      "al"
    ],
    "e": "entre — между, среди."
  },
  {
    "id": "choice_prepositions_junto",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рядом с, возле.",
    "a": [
      "junto a"
    ],
    "options": [
      "junto a",
      "delante de",
      "detrás de",
      "cerca de"
    ],
    "e": "junto a — рядом с, возле."
  },
  {
    "id": "audio_prepositions_a",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Voy a Madrid.",
    "a": [
      "Voy a Madrid."
    ],
    "e": "Я еду в Мадрид."
  },
  {
    "id": "audio_prepositions_al",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Voy al trabajo.",
    "a": [
      "Voy al trabajo."
    ],
    "e": "Я иду на работу."
  },
  {
    "id": "audio_prepositions_de",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Soy de Rusia.",
    "a": [
      "Soy de Rusia."
    ],
    "e": "Я из России."
  },
  {
    "id": "audio_prepositions_del",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vengo del trabajo.",
    "a": [
      "Vengo del trabajo."
    ],
    "e": "Я возвращаюсь с работы."
  },
  {
    "id": "audio_prepositions_en",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vivo en Madrid.",
    "a": [
      "Vivo en Madrid."
    ],
    "e": "Я живу в Мадриде."
  },
  {
    "id": "audio_prepositions_con",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Bebo café con leche.",
    "a": [
      "Bebo café con leche."
    ],
    "e": "Я пью кофе с молоком."
  },
  {
    "id": "audio_prepositions_sin",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tomo té sin azúcar.",
    "a": [
      "Tomo té sin azúcar."
    ],
    "e": "Я пью чай без сахара."
  },
  {
    "id": "audio_prepositions_para",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Este regalo es para ti.",
    "a": [
      "Este regalo es para ti."
    ],
    "e": "Этот подарок для тебя."
  },
  {
    "id": "audio_prepositions_por",
    "topic": "prepositions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Paseamos por el parque.",
    "a": [
      "Paseamos por el parque."
    ],
    "e": "Мы гуляем по парку."
  },
  {
    "id": "audio_prepositions_sobre",
    "topic": "prepositions",
    "foodCat": "place",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El móvil está sobre la mesa.",
    "a": [
      "El móvil está sobre la mesa."
    ],
    "e": "Телефон лежит на столе."
  },
  {
    "id": "audio_prepositions_debajo",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El gato está debajo de la mesa.",
    "a": [
      "El gato está debajo de la mesa."
    ],
    "e": "Кот находится под столом."
  },
  {
    "id": "audio_prepositions_delante",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El coche está delante de la casa.",
    "a": [
      "El coche está delante de la casa."
    ],
    "e": "Машина стоит перед домом."
  },
  {
    "id": "audio_prepositions_detras",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El jardín está detrás de la casa.",
    "a": [
      "El jardín está detrás de la casa."
    ],
    "e": "Сад находится за домом."
  },
  {
    "id": "audio_prepositions_cerca",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vivo cerca del metro.",
    "a": [
      "Vivo cerca del metro."
    ],
    "e": "Я живу рядом с метро."
  },
  {
    "id": "audio_prepositions_lejos",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El aeropuerto está lejos del centro.",
    "a": [
      "El aeropuerto está lejos del centro."
    ],
    "e": "Аэропорт находится далеко от центра."
  },
  {
    "id": "audio_prepositions_entre",
    "topic": "prepositions",
    "foodCat": "place",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El banco está entre la farmacia y el cine.",
    "a": [
      "El banco está entre la farmacia y el cine."
    ],
    "e": "Банк находится между аптекой и кинотеатром."
  },
  {
    "id": "audio_prepositions_junto",
    "topic": "prepositions",
    "foodCat": "compound",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La parada está junto al banco.",
    "a": [
      "La parada está junto al banco."
    ],
    "e": "Остановка находится рядом с банком."
  },
  {
    "id": "compare_por_para",
    "topic": "prepositions",
    "foodCat": "purpose",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери предлог: Este regalo es ___ ti.",
    "options": [
      "por",
      "para",
      "de"
    ],
    "a": [
      "para"
    ],
    "e": "Получатель — одно из основных значений para."
  },
  {
    "id": "sort_auto_prepositions_0",
    "topic": "prepositions",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Предлоги» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "basic",
        "title": "Основные"
      },
      {
        "id": "place",
        "title": "Место"
      },
      {
        "id": "compound",
        "title": "Составные"
      }
    ],
    "sortTokens": [
      {
        "id": "prepositions_0_basic_a",
        "text": "a",
        "category": "basic"
      },
      {
        "id": "prepositions_0_basic_al",
        "text": "al",
        "category": "basic"
      },
      {
        "id": "prepositions_0_basic_de",
        "text": "de",
        "category": "basic"
      },
      {
        "id": "prepositions_0_place_sobre",
        "text": "sobre",
        "category": "place"
      },
      {
        "id": "prepositions_0_place_entre",
        "text": "entre",
        "category": "place"
      },
      {
        "id": "prepositions_0_compound_debajo",
        "text": "debajo de",
        "category": "compound"
      },
      {
        "id": "prepositions_0_compound_delante",
        "text": "delante de",
        "category": "compound"
      },
      {
        "id": "prepositions_0_compound_detras",
        "text": "detrás de",
        "category": "compound"
      }
    ],
    "a": [
      "basic | basic | basic | place | place | compound | compound | compound"
    ],
    "displayAnswer": "Основные: a, al, de · Место: sobre, entre · Составные: debajo de, delante de, detrás de",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const prepositionsTopic = {
  id: "prepositions",
  title: "Предлоги",
  icon: "⌁",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
