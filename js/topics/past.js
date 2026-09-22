/**
 * Прошедшее время topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "perfect_system",
    "cat": "perfect",
    "word": "Pretérito Perfecto",
    "base": "perfecto",
    "gender": "haber + participio",
    "tr": "событие уже произошло, но связано с настоящим",
    "table": {
      "headers": [
        "Лицо",
        "haber",
        "Пример"
      ],
      "rows": [
        [
          "yo",
          "he",
          "he hablado"
        ],
        [
          "tú",
          "has",
          "has comido"
        ],
        [
          "él / ella / usted",
          "ha",
          "ha vivido"
        ],
        [
          "nosotros",
          "hemos",
          "hemos trabajado"
        ],
        [
          "vosotros",
          "habéis",
          "habéis leído"
        ],
        [
          "ellos / ustedes",
          "han",
          "han hecho"
        ]
      ]
    },
    "examples": [
      [
        "Hoy he hablado con Ana.",
        "Сегодня я поговорила с Аной."
      ],
      [
        "Ya han hecho la tarea.",
        "Они уже сделали задание."
      ]
    ],
    "meta": {
      "categoryTitle": "Pretérito Perfecto",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "indefinite_system",
    "cat": "indefinite",
    "word": "Pretérito Indefinido",
    "base": "indefinido",
    "gender": "окончания правильных глаголов",
    "tr": "завершённое действие в завершённом периоде",
    "table": {
      "headers": [
        "Лицо",
        "hablar · -ar",
        "comer · -er",
        "vivir · -ir"
      ],
      "rows": [
        [
          "yo",
          "hablé",
          "comí",
          "viví"
        ],
        [
          "tú",
          "hablaste",
          "comiste",
          "viviste"
        ],
        [
          "él / ella / usted",
          "habló",
          "comió",
          "vivió"
        ],
        [
          "nosotros",
          "hablamos",
          "comimos",
          "vivimos"
        ],
        [
          "vosotros",
          "hablasteis",
          "comisteis",
          "vivisteis"
        ],
        [
          "ellos / ustedes",
          "hablaron",
          "comieron",
          "vivieron"
        ]
      ]
    },
    "examples": [
      [
        "Ayer hablé con Ana.",
        "Вчера я поговорила с Аной."
      ],
      [
        "El año pasado vivimos en Madrid.",
        "В прошлом году мы жили в Мадриде."
      ]
    ],
    "meta": {
      "categoryTitle": "Pretérito Indefinido",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "fui",
    "cat": "indefinite",
    "word": "fui",
    "gender": "yo · ir / ser",
    "tr": "я пошёл, поехал; я был",
    "ru": [
      "я пошла",
      "я пошел",
      "я поехала",
      "я поехал",
      "я была",
      "я был"
    ],
    "answers": [
      "fui"
    ],
    "examples": [
      [
        "Ayer fui al trabajo.",
        "Вчера я ездила на работу."
      ],
      [
        "Fui feliz allí.",
        "Я была там счастлива."
      ]
    ],
    "cloze": "Ayer ___ al trabajo.",
    "clozeAnswers": [
      "fui"
    ],
    "meta": {
      "categoryTitle": "Pretérito Indefinido",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "tuve",
    "cat": "indefinite",
    "word": "tuve",
    "gender": "yo · tener",
    "tr": "у меня было; я имел(а)",
    "ru": [
      "у меня было",
      "я имела",
      "я имел"
    ],
    "answers": [
      "tuve"
    ],
    "examples": [
      [
        "Ayer tuve mucho trabajo.",
        "Вчера у меня было много работы."
      ],
      [
        "Tuve una buena idea.",
        "У меня появилась хорошая идея."
      ]
    ],
    "cloze": "Ayer ___ mucho trabajo.",
    "clozeAnswers": [
      "tuve"
    ],
    "meta": {
      "categoryTitle": "Pretérito Indefinido",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "hice",
    "cat": "indefinite",
    "word": "hice",
    "gender": "yo · hacer",
    "tr": "я сделал(а)",
    "ru": [
      "я сделала",
      "я сделал"
    ],
    "answers": [
      "hice"
    ],
    "examples": [
      [
        "Hice la tarea por la tarde.",
        "Я сделала задание вечером."
      ],
      [
        "Ayer hice una reserva.",
        "Вчера я забронировала столик."
      ]
    ],
    "cloze": "Ayer ___ una reserva.",
    "clozeAnswers": [
      "hice"
    ],
    "meta": {
      "categoryTitle": "Pretérito Indefinido",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "hoy_marker",
    "cat": "markers",
    "word": "hoy / esta semana / ya / todavía no",
    "gender": "часто с Pretérito Perfecto",
    "tr": "сегодня / на этой неделе / уже / ещё не",
    "ru": [
      "сегодня на этой неделе уже ещё не",
      "сегодня",
      "на этой неделе",
      "уже",
      "ещё не"
    ],
    "answers": [
      "hoy esta semana ya todavía no",
      "hoy",
      "esta semana",
      "ya",
      "todavía no",
      "todavia no"
    ],
    "examples": [
      [
        "Hoy he trabajado mucho.",
        "Сегодня я много работала."
      ],
      [
        "Todavía no he comido.",
        "Я ещё не ела."
      ]
    ],
    "cloze": "___ no he comido.",
    "clozeAnswers": [
      "todavía",
      "todavia"
    ],
    "meta": {
      "categoryTitle": "Маркеры времени",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "ayer_marker",
    "cat": "markers",
    "word": "ayer / anoche",
    "gender": "обычно с Pretérito Indefinido",
    "tr": "вчера / вчера вечером",
    "ru": [
      "вчера вчера вечером",
      "вчера",
      "вчера вечером"
    ],
    "answers": [
      "ayer anoche",
      "ayer",
      "anoche"
    ],
    "examples": [
      [
        "Ayer fui al cine.",
        "Вчера я ходила в кино."
      ],
      [
        "Anoche cenamos juntos.",
        "Вчера вечером мы ужинали вместе."
      ]
    ],
    "cloze": "___ fui al cine.",
    "clozeAnswers": [
      "ayer"
    ],
    "meta": {
      "categoryTitle": "Маркеры времени",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "past_period",
    "cat": "markers",
    "word": "la semana pasada / el año pasado",
    "gender": "завершённый период",
    "tr": "на прошлой неделе / в прошлом году",
    "ru": [
      "на прошлой неделе в прошлом году",
      "на прошлой неделе",
      "в прошлом году"
    ],
    "answers": [
      "la semana pasada el año pasado",
      "la semana pasada",
      "el año pasado"
    ],
    "examples": [
      [
        "La semana pasada estuve enferma.",
        "На прошлой неделе я болела."
      ],
      [
        "El año pasado viajamos a España.",
        "В прошлом году мы ездили в Испанию."
      ]
    ],
    "cloze": "___ viajamos a España.",
    "clozeAnswers": [
      "el año pasado"
    ],
    "meta": {
      "categoryTitle": "Маркеры времени",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_past_he_hablado_es",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Вспомни",
    "q": "Переведи на испанский: я поговорил(а), говорил(а).",
    "a": [
      "he hablado"
    ],
    "e": "Правильный вариант: he hablado."
  },
  {
    "id": "study_past_he_hablado_ru",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Узнай",
    "q": "Переведи на русский: he hablado.",
    "a": [
      "я поговорила",
      "я поговорил",
      "я говорила",
      "я говорил",
      "я поговорил(а), говорил(а)"
    ],
    "e": "he hablado — я поговорил(а), говорил(а)."
  },
  {
    "id": "study_past_he_hablado_ctx",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сегодня я поговорила с Аной.»: Hoy ___ hablado con Ana.",
    "a": [
      "he"
    ],
    "e": "Hoy he hablado con Ana. — Сегодня я поговорила с Аной."
  },
  {
    "id": "study_past_has_comido_es",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ты поел(а), ел(а).",
    "a": [
      "has comido"
    ],
    "e": "Правильный вариант: has comido."
  },
  {
    "id": "study_past_has_comido_ru",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Узнай",
    "q": "Переведи на русский: has comido.",
    "a": [
      "ты поела",
      "ты поел",
      "ты ела",
      "ты ел",
      "ты поел(а), ел(а)"
    ],
    "e": "has comido — ты поел(а), ел(а)."
  },
  {
    "id": "study_past_has_comido_ctx",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ты уже поела?»: ¿___ comido ya?",
    "a": [
      "has"
    ],
    "e": "¿Has comido ya? — Ты уже поела?"
  },
  {
    "id": "study_past_ha_vivido_es",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Вспомни",
    "q": "Переведи на испанский: он или она пожил(а), жил(а).",
    "a": [
      "ha vivido"
    ],
    "e": "Правильный вариант: ha vivido."
  },
  {
    "id": "study_past_ha_vivido_ru",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Узнай",
    "q": "Переведи на русский: ha vivido.",
    "a": [
      "он жил",
      "она жила",
      "он пожил",
      "она пожила",
      "он или она пожил(а), жил(а)"
    ],
    "e": "ha vivido — он или она пожил(а), жил(а)."
  },
  {
    "id": "study_past_ha_vivido_ctx",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Она жила в Мадриде.»: Ella ___ vivido en Madrid.",
    "a": [
      "ha"
    ],
    "e": "Ella ha vivido en Madrid. — Она жила в Мадриде."
  },
  {
    "id": "study_past_hemos_trabajado_es",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мы поработали, работали.",
    "a": [
      "hemos trabajado"
    ],
    "e": "Правильный вариант: hemos trabajado."
  },
  {
    "id": "study_past_hemos_trabajado_ru",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Узнай",
    "q": "Переведи на русский: hemos trabajado.",
    "a": [
      "мы поработали",
      "мы работали",
      "мы поработали, работали"
    ],
    "e": "hemos trabajado — мы поработали, работали."
  },
  {
    "id": "study_past_hemos_trabajado_ctx",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «На этой неделе мы много работали.»: Esta semana ___ trabajado mucho.",
    "a": [
      "hemos"
    ],
    "e": "Esta semana hemos trabajado mucho. — На этой неделе мы много работали."
  },
  {
    "id": "study_past_habeis_leido_es",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вы прочитали, читали.",
    "a": [
      "habéis leído",
      "habeis leido"
    ],
    "e": "Правильный вариант: habéis leído."
  },
  {
    "id": "study_past_habeis_leido_ru",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Узнай",
    "q": "Переведи на русский: habéis leído.",
    "a": [
      "вы прочитали",
      "вы читали",
      "вы прочитали, читали"
    ],
    "e": "habéis leído — вы прочитали, читали."
  },
  {
    "id": "study_past_habeis_leido_ctx",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вы читали эту книгу?»: ¿___ leído este libro?",
    "a": [
      "habéis",
      "habeis"
    ],
    "e": "¿Habéis leído este libro? — Вы читали эту книгу?"
  },
  {
    "id": "study_past_han_hecho_es",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Вспомни",
    "q": "Переведи на испанский: они сделали.",
    "a": [
      "han hecho"
    ],
    "e": "Правильный вариант: han hecho."
  },
  {
    "id": "study_past_han_hecho_ru",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "Узнай",
    "q": "Переведи на русский: han hecho.",
    "a": [
      "они сделали",
      "вы сделали"
    ],
    "e": "han hecho — они сделали."
  },
  {
    "id": "study_past_han_hecho_ctx",
    "topic": "past",
    "foodCat": "perfect",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Они уже сделали задание.»: Ya ___ hecho la tarea.",
    "a": [
      "han"
    ],
    "e": "Ya han hecho la tarea. — Они уже сделали задание."
  },
  {
    "id": "study_past_hable_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: я поговорил(а).",
    "a": [
      "hablé",
      "hable"
    ],
    "e": "Правильный вариант: hablé."
  },
  {
    "id": "study_past_hable_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: hablé.",
    "a": [
      "я поговорила",
      "я поговорил",
      "я поговорил(а)"
    ],
    "e": "hablé — я поговорил(а)."
  },
  {
    "id": "study_past_hable_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вчера я поговорила с Аной.»: Ayer ___ con Ana.",
    "a": [
      "hablé",
      "hable"
    ],
    "e": "Ayer hablé con Ana. — Вчера я поговорила с Аной."
  },
  {
    "id": "study_past_comiste_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ты поел(а).",
    "a": [
      "comiste"
    ],
    "e": "Правильный вариант: comiste."
  },
  {
    "id": "study_past_comiste_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: comiste.",
    "a": [
      "ты поела",
      "ты поел",
      "ты поел(а)"
    ],
    "e": "comiste — ты поел(а)."
  },
  {
    "id": "study_past_comiste_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Что ты ела вчера?»: ¿Qué ___ ayer?",
    "a": [
      "comiste"
    ],
    "e": "¿Qué comiste ayer? — Что ты ела вчера?"
  },
  {
    "id": "study_past_vivio_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: он или она жил(а).",
    "a": [
      "vivió",
      "vivio"
    ],
    "e": "Правильный вариант: vivió."
  },
  {
    "id": "study_past_vivio_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: vivió.",
    "a": [
      "он жил",
      "она жила",
      "он или она жил(а)"
    ],
    "e": "vivió — он или она жил(а)."
  },
  {
    "id": "study_past_vivio_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Она жила в Севилье.»: Ella ___ en Sevilla.",
    "a": [
      "vivió",
      "vivio"
    ],
    "e": "Ella vivió en Sevilla. — Она жила в Севилье."
  },
  {
    "id": "study_past_trabajamos_past_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мы поработали, работали.",
    "a": [
      "trabajamos"
    ],
    "e": "Правильный вариант: trabajamos."
  },
  {
    "id": "study_past_trabajamos_past_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: trabajamos.",
    "a": [
      "мы поработали",
      "мы работали",
      "мы поработали, работали"
    ],
    "e": "trabajamos — мы поработали, работали."
  },
  {
    "id": "study_past_trabajamos_past_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вчера мы работали допоздна.»: Ayer ___ hasta tarde.",
    "a": [
      "trabajamos"
    ],
    "e": "Ayer trabajamos hasta tarde. — Вчера мы работали допоздна."
  },
  {
    "id": "study_past_leisteis_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вы прочитали.",
    "a": [
      "leísteis",
      "leisteis"
    ],
    "e": "Правильный вариант: leísteis."
  },
  {
    "id": "study_past_leisteis_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: leísteis.",
    "a": [
      "вы прочитали",
      "вы читали"
    ],
    "e": "leísteis — вы прочитали."
  },
  {
    "id": "study_past_leisteis_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вы прочитали сообщение?»: ¿___ el mensaje?",
    "a": [
      "leísteis",
      "leisteis"
    ],
    "e": "¿Leísteis el mensaje? — Вы прочитали сообщение?"
  },
  {
    "id": "study_past_hicieron_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: они сделали.",
    "a": [
      "hicieron"
    ],
    "e": "Правильный вариант: hicieron."
  },
  {
    "id": "study_past_hicieron_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: hicieron.",
    "a": [
      "они сделали",
      "вы сделали"
    ],
    "e": "hicieron — они сделали."
  },
  {
    "id": "study_past_hicieron_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Они приготовили ужин.»: Ellos ___ la cena.",
    "a": [
      "hicieron"
    ],
    "e": "Ellos hicieron la cena. — Они приготовили ужин."
  },
  {
    "id": "study_past_fui_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: я пошёл, поехал; я был.",
    "a": [
      "fui"
    ],
    "e": "Правильный вариант: fui."
  },
  {
    "id": "study_past_fui_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: fui.",
    "a": [
      "я пошла",
      "я пошел",
      "я поехала",
      "я поехал",
      "я была",
      "я был",
      "я пошёл, поехал; я был"
    ],
    "e": "fui — я пошёл, поехал; я был."
  },
  {
    "id": "study_past_fui_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вчера я ездила на работу.»: Ayer ___ al trabajo.",
    "a": [
      "fui"
    ],
    "e": "Ayer fui al trabajo. — Вчера я ездила на работу."
  },
  {
    "id": "study_past_tuve_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: у меня было; я имел(а).",
    "a": [
      "tuve"
    ],
    "e": "Правильный вариант: tuve."
  },
  {
    "id": "study_past_tuve_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: tuve.",
    "a": [
      "у меня было",
      "я имела",
      "я имел",
      "у меня было; я имел(а)"
    ],
    "e": "tuve — у меня было; я имел(а)."
  },
  {
    "id": "study_past_tuve_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вчера у меня было много работы.»: Ayer ___ mucho trabajo.",
    "a": [
      "tuve"
    ],
    "e": "Ayer tuve mucho trabajo. — Вчера у меня было много работы."
  },
  {
    "id": "study_past_hice_es",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Вспомни",
    "q": "Переведи на испанский: я сделал(а).",
    "a": [
      "hice"
    ],
    "e": "Правильный вариант: hice."
  },
  {
    "id": "study_past_hice_ru",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "Узнай",
    "q": "Переведи на русский: hice.",
    "a": [
      "я сделала",
      "я сделал",
      "я сделал(а)"
    ],
    "e": "hice — я сделал(а)."
  },
  {
    "id": "study_past_hice_ctx",
    "topic": "past",
    "foodCat": "indefinite",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я сделала задание вечером.»: Ayer ___ una reserva.",
    "a": [
      "hice"
    ],
    "e": "Hice la tarea por la tarde. — Я сделала задание вечером."
  },
  {
    "id": "study_past_hoy_marker_es",
    "topic": "past",
    "foodCat": "markers",
    "skill": "Вспомни",
    "q": "Переведи на испанский: сегодня / на этой неделе / уже / ещё не.",
    "a": [
      "hoy esta semana ya todavía no",
      "hoy",
      "esta semana",
      "ya",
      "todavía no",
      "todavia no"
    ],
    "e": "Правильный вариант: hoy / esta semana / ya / todavía no."
  },
  {
    "id": "study_past_hoy_marker_ru",
    "topic": "past",
    "foodCat": "markers",
    "skill": "Узнай",
    "q": "Переведи на русский: hoy / esta semana / ya / todavía no.",
    "a": [
      "сегодня на этой неделе уже ещё не",
      "сегодня",
      "на этой неделе",
      "уже",
      "ещё не",
      "сегодня / на этой неделе / уже / ещё не"
    ],
    "e": "hoy / esta semana / ya / todavía no — сегодня / на этой неделе / уже / ещё не."
  },
  {
    "id": "study_past_hoy_marker_ctx",
    "topic": "past",
    "foodCat": "markers",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сегодня я много работала.»: ___ no he comido.",
    "a": [
      "todavía",
      "todavia"
    ],
    "e": "Hoy he trabajado mucho. — Сегодня я много работала."
  },
  {
    "id": "study_past_ayer_marker_es",
    "topic": "past",
    "foodCat": "markers",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вчера / вчера вечером.",
    "a": [
      "ayer anoche",
      "ayer",
      "anoche"
    ],
    "e": "Правильный вариант: ayer / anoche."
  },
  {
    "id": "study_past_ayer_marker_ru",
    "topic": "past",
    "foodCat": "markers",
    "skill": "Узнай",
    "q": "Переведи на русский: ayer / anoche.",
    "a": [
      "вчера вчера вечером",
      "вчера",
      "вчера вечером",
      "вчера / вчера вечером"
    ],
    "e": "ayer / anoche — вчера / вчера вечером."
  },
  {
    "id": "study_past_ayer_marker_ctx",
    "topic": "past",
    "foodCat": "markers",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вчера я ходила в кино.»: ___ fui al cine.",
    "a": [
      "ayer"
    ],
    "e": "Ayer fui al cine. — Вчера я ходила в кино."
  },
  {
    "id": "study_past_past_period_es",
    "topic": "past",
    "foodCat": "markers",
    "skill": "Вспомни",
    "q": "Переведи на испанский: на прошлой неделе / в прошлом году.",
    "a": [
      "la semana pasada el año pasado",
      "la semana pasada",
      "el año pasado"
    ],
    "e": "Правильный вариант: la semana pasada / el año pasado."
  },
  {
    "id": "study_past_past_period_ru",
    "topic": "past",
    "foodCat": "markers",
    "skill": "Узнай",
    "q": "Переведи на русский: la semana pasada / el año pasado.",
    "a": [
      "на прошлой неделе в прошлом году",
      "на прошлой неделе",
      "в прошлом году",
      "на прошлой неделе / в прошлом году"
    ],
    "e": "la semana pasada / el año pasado — на прошлой неделе / в прошлом году."
  },
  {
    "id": "study_past_past_period_ctx",
    "topic": "past",
    "foodCat": "markers",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «На прошлой неделе я болела.»: ___ viajamos a España.",
    "a": [
      "el año pasado"
    ],
    "e": "La semana pasada estuve enferma. — На прошлой неделе я болела."
  },
  {
    "id": "choice_past_he_hablado",
    "topic": "past",
    "foodCat": "perfect",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я поговорил(а), говорил(а).",
    "a": [
      "he hablado"
    ],
    "options": [
      "he hablado",
      "has comido",
      "ha vivido",
      "hemos trabajado"
    ],
    "e": "he hablado — я поговорил(а), говорил(а)."
  },
  {
    "id": "choice_past_has_comido",
    "topic": "past",
    "foodCat": "perfect",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ты поел(а), ел(а).",
    "a": [
      "has comido"
    ],
    "options": [
      "has comido",
      "ha vivido",
      "hemos trabajado",
      "habéis leído"
    ],
    "e": "has comido — ты поел(а), ел(а)."
  },
  {
    "id": "choice_past_ha_vivido",
    "topic": "past",
    "foodCat": "perfect",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: он или она пожил(а), жил(а).",
    "a": [
      "ha vivido"
    ],
    "options": [
      "ha vivido",
      "hemos trabajado",
      "habéis leído",
      "han hecho"
    ],
    "e": "ha vivido — он или она пожил(а), жил(а)."
  },
  {
    "id": "choice_past_hemos_trabajado",
    "topic": "past",
    "foodCat": "perfect",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мы поработали, работали.",
    "a": [
      "hemos trabajado"
    ],
    "options": [
      "hemos trabajado",
      "habéis leído",
      "han hecho",
      "he hablado"
    ],
    "e": "hemos trabajado — мы поработали, работали."
  },
  {
    "id": "choice_past_habeis_leido",
    "topic": "past",
    "foodCat": "perfect",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вы прочитали, читали.",
    "a": [
      "habéis leído"
    ],
    "options": [
      "habéis leído",
      "han hecho",
      "he hablado",
      "has comido"
    ],
    "e": "habéis leído — вы прочитали, читали."
  },
  {
    "id": "choice_past_han_hecho",
    "topic": "past",
    "foodCat": "perfect",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: они сделали.",
    "a": [
      "han hecho"
    ],
    "options": [
      "han hecho",
      "he hablado",
      "has comido",
      "ha vivido"
    ],
    "e": "han hecho — они сделали."
  },
  {
    "id": "choice_past_hable",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я поговорил(а).",
    "a": [
      "hablé"
    ],
    "options": [
      "hablé",
      "tuve",
      "hice",
      "comiste"
    ],
    "e": "hablé — я поговорил(а)."
  },
  {
    "id": "choice_past_comiste",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ты поел(а).",
    "a": [
      "comiste"
    ],
    "options": [
      "comiste",
      "hice",
      "hablé",
      "vivió"
    ],
    "e": "comiste — ты поел(а)."
  },
  {
    "id": "choice_past_vivio",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: он или она жил(а).",
    "a": [
      "vivió"
    ],
    "options": [
      "vivió",
      "hablé",
      "comiste",
      "trabajamos"
    ],
    "e": "vivió — он или она жил(а)."
  },
  {
    "id": "choice_past_trabajamos_past",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мы поработали, работали.",
    "a": [
      "trabajamos"
    ],
    "options": [
      "trabajamos",
      "comiste",
      "vivió",
      "leísteis"
    ],
    "e": "trabajamos — мы поработали, работали."
  },
  {
    "id": "choice_past_leisteis",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вы прочитали.",
    "a": [
      "leísteis"
    ],
    "options": [
      "leísteis",
      "vivió",
      "trabajamos",
      "hicieron"
    ],
    "e": "leísteis — вы прочитали."
  },
  {
    "id": "choice_past_hicieron",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: они сделали.",
    "a": [
      "hicieron"
    ],
    "options": [
      "hicieron",
      "trabajamos",
      "leísteis",
      "fui"
    ],
    "e": "hicieron — они сделали."
  },
  {
    "id": "choice_past_fui",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я пошёл, поехал; я был.",
    "a": [
      "fui"
    ],
    "options": [
      "fui",
      "leísteis",
      "hicieron",
      "tuve"
    ],
    "e": "fui — я пошёл, поехал; я был."
  },
  {
    "id": "choice_past_tuve",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: у меня было; я имел(а).",
    "a": [
      "tuve"
    ],
    "options": [
      "tuve",
      "hicieron",
      "fui",
      "hice"
    ],
    "e": "tuve — у меня было; я имел(а)."
  },
  {
    "id": "choice_past_hice",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я сделал(а).",
    "a": [
      "hice"
    ],
    "options": [
      "hice",
      "fui",
      "tuve",
      "hablé"
    ],
    "e": "hice — я сделал(а)."
  },
  {
    "id": "choice_past_hoy_marker",
    "topic": "past",
    "foodCat": "markers",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сегодня / на этой неделе / уже / ещё не.",
    "a": [
      "hoy / esta semana / ya / todavía no"
    ],
    "options": [
      "hoy / esta semana / ya / todavía no",
      "ayer / anoche",
      "la semana pasada / el año pasado",
      "he hablado"
    ],
    "e": "hoy / esta semana / ya / todavía no — сегодня / на этой неделе / уже / ещё не."
  },
  {
    "id": "choice_past_ayer_marker",
    "topic": "past",
    "foodCat": "markers",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вчера / вчера вечером.",
    "a": [
      "ayer / anoche"
    ],
    "options": [
      "ayer / anoche",
      "la semana pasada / el año pasado",
      "he hablado",
      "has comido"
    ],
    "e": "ayer / anoche — вчера / вчера вечером."
  },
  {
    "id": "choice_past_past_period",
    "topic": "past",
    "foodCat": "markers",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: на прошлой неделе / в прошлом году.",
    "a": [
      "la semana pasada / el año pasado"
    ],
    "options": [
      "la semana pasada / el año pasado",
      "he hablado",
      "has comido",
      "ha vivido"
    ],
    "e": "la semana pasada / el año pasado — на прошлой неделе / в прошлом году."
  },
  {
    "id": "audio_past_he_hablado",
    "topic": "past",
    "foodCat": "perfect",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hoy he hablado con Ana.",
    "a": [
      "Hoy he hablado con Ana."
    ],
    "e": "Сегодня я поговорила с Аной."
  },
  {
    "id": "audio_past_has_comido",
    "topic": "past",
    "foodCat": "perfect",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Has comido ya?",
    "a": [
      "¿Has comido ya?"
    ],
    "e": "Ты уже поела?"
  },
  {
    "id": "audio_past_ha_vivido",
    "topic": "past",
    "foodCat": "perfect",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ella ha vivido en Madrid.",
    "a": [
      "Ella ha vivido en Madrid."
    ],
    "e": "Она жила в Мадриде."
  },
  {
    "id": "audio_past_hemos_trabajado",
    "topic": "past",
    "foodCat": "perfect",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Esta semana hemos trabajado mucho.",
    "a": [
      "Esta semana hemos trabajado mucho."
    ],
    "e": "На этой неделе мы много работали."
  },
  {
    "id": "audio_past_habeis_leido",
    "topic": "past",
    "foodCat": "perfect",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Habéis leído este libro?",
    "a": [
      "¿Habéis leído este libro?"
    ],
    "e": "Вы читали эту книгу?"
  },
  {
    "id": "audio_past_han_hecho",
    "topic": "past",
    "foodCat": "perfect",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ya han hecho la tarea.",
    "a": [
      "Ya han hecho la tarea."
    ],
    "e": "Они уже сделали задание."
  },
  {
    "id": "audio_past_hable",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ayer hablé con Ana.",
    "a": [
      "Ayer hablé con Ana."
    ],
    "e": "Вчера я поговорила с Аной."
  },
  {
    "id": "audio_past_comiste",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Qué comiste ayer?",
    "a": [
      "¿Qué comiste ayer?"
    ],
    "e": "Что ты ела вчера?"
  },
  {
    "id": "audio_past_vivio",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ella vivió en Sevilla.",
    "a": [
      "Ella vivió en Sevilla."
    ],
    "e": "Она жила в Севилье."
  },
  {
    "id": "audio_past_trabajamos_past",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ayer trabajamos hasta tarde.",
    "a": [
      "Ayer trabajamos hasta tarde."
    ],
    "e": "Вчера мы работали допоздна."
  },
  {
    "id": "audio_past_leisteis",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Leísteis el mensaje?",
    "a": [
      "¿Leísteis el mensaje?"
    ],
    "e": "Вы прочитали сообщение?"
  },
  {
    "id": "audio_past_hicieron",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ellos hicieron la cena.",
    "a": [
      "Ellos hicieron la cena."
    ],
    "e": "Они приготовили ужин."
  },
  {
    "id": "audio_past_fui",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ayer fui al trabajo.",
    "a": [
      "Ayer fui al trabajo."
    ],
    "e": "Вчера я ездила на работу."
  },
  {
    "id": "audio_past_tuve",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ayer tuve mucho trabajo.",
    "a": [
      "Ayer tuve mucho trabajo."
    ],
    "e": "Вчера у меня было много работы."
  },
  {
    "id": "audio_past_hice",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hice la tarea por la tarde.",
    "a": [
      "Hice la tarea por la tarde."
    ],
    "e": "Я сделала задание вечером."
  },
  {
    "id": "audio_past_hoy_marker",
    "topic": "past",
    "foodCat": "markers",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hoy he trabajado mucho.",
    "a": [
      "Hoy he trabajado mucho."
    ],
    "e": "Сегодня я много работала."
  },
  {
    "id": "audio_past_ayer_marker",
    "topic": "past",
    "foodCat": "markers",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ayer fui al cine.",
    "a": [
      "Ayer fui al cine."
    ],
    "e": "Вчера я ходила в кино."
  },
  {
    "id": "audio_past_past_period",
    "topic": "past",
    "foodCat": "markers",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La semana pasada estuve enferma.",
    "a": [
      "La semana pasada estuve enferma."
    ],
    "e": "На прошлой неделе я болела."
  },
  {
    "id": "order_p_today",
    "topic": "past",
    "foodCat": "perfect",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Сегодня я много работала»",
    "tokens": [
      "Hoy",
      "he",
      "trabajado",
      "mucho."
    ],
    "a": [
      "Hoy he trabajado mucho."
    ],
    "e": "Незавершённый период hoy часто требует Perfecto."
  },
  {
    "id": "order_p_yesterday",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Вчера я ходила в кино»",
    "tokens": [
      "Ayer",
      "fui",
      "al",
      "cine."
    ],
    "a": [
      "Ayer fui al cine."
    ],
    "e": "Ayer указывает на завершённое прошлое."
  },
  {
    "id": "order_p_week",
    "topic": "past",
    "foodCat": "perfect",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «На этой неделе мы много выучили»",
    "tokens": [
      "Esta",
      "semana",
      "hemos",
      "aprendido",
      "mucho."
    ],
    "a": [
      "Esta semana hemos aprendido mucho."
    ],
    "e": "Esta semana ещё связана с настоящим."
  },
  {
    "id": "correct_p_aux",
    "topic": "past",
    "foodCat": "perfect",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Hoy hablado con Ana.",
    "a": [
      "Hoy he hablado con Ana."
    ],
    "e": "Perfecto строится с haber + причастие."
  },
  {
    "id": "correct_p_double",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Ayer he fui al cine.",
    "a": [
      "Ayer fui al cine."
    ],
    "e": "Fui уже является готовой формой Indefinido."
  },
  {
    "id": "correct_p_irregular",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Ellos hacieron la cena.",
    "a": [
      "Ellos hicieron la cena."
    ],
    "e": "Неправильная форма hacer — hicieron."
  },
  {
    "id": "dialogue_p_today_reply",
    "topic": "past",
    "foodCat": "perfect",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Qué has hecho hoy? — Сегодня я работала.",
    "a": [
      "Hoy he trabajado.",
      "He trabajado hoy."
    ],
    "e": "Hoy обычно связывает действие с настоящим."
  },
  {
    "id": "forms_haber_perfect",
    "topic": "past",
    "foodCat": "perfect",
    "type": "forms",
    "skill": "Таблица спряжения",
    "q": "Заполни формы haber для Pretérito Perfecto.",
    "formLabels": [
      "yo",
      "tú",
      "él / ella",
      "nosotros",
      "vosotros",
      "ellos"
    ],
    "a": [
      "he|has|ha|hemos|habéis|han",
      "he|has|ha|hemos|habeis|han"
    ],
    "displayAnswer": "he · has · ha · hemos · habéis · han",
    "e": "Заполняй формы слева направо по лицам."
  },
  {
    "id": "forms_hablar_indef",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "forms",
    "skill": "Таблица спряжения",
    "q": "Проспрягай hablar в Pretérito Indefinido.",
    "formLabels": [
      "yo",
      "tú",
      "él / ella",
      "nosotros",
      "vosotros",
      "ellos"
    ],
    "a": [
      "hablé|hablaste|habló|hablamos|hablasteis|hablaron",
      "hable|hablaste|hablo|hablamos|hablasteis|hablaron"
    ],
    "displayAnswer": "hablé · hablaste · habló · hablamos · hablasteis · hablaron",
    "e": "Заполняй формы слева направо по лицам."
  },
  {
    "id": "compare_past_ayer",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: Ayer ___ al cine.",
    "options": [
      "he ido",
      "fui",
      "voy"
    ],
    "a": [
      "fui"
    ],
    "e": "Ayer — завершённый период, поэтому здесь Indefinido."
  },
  {
    "id": "match_haber",
    "topic": "past",
    "foodCat": "perfect",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини местоимения с формами haber для Pretérito Perfecto.",
    "pairs": [
      [
        "yo",
        "he"
      ],
      [
        "tú",
        "has"
      ],
      [
        "él / ella",
        "ha"
      ],
      [
        "nosotros",
        "hemos"
      ],
      [
        "vosotros",
        "habéis"
      ],
      [
        "ellos",
        "han"
      ]
    ],
    "a": [
      "he | has | ha | hemos | habéis | han"
    ],
    "displayAnswer": "yo — he · tú — has · él / ella — ha · nosotros — hemos · vosotros — habéis · ellos — han",
    "e": "После этих форм ставится причастие: he trabajado, has comido."
  },
  {
    "id": "context_choice_today_worked",
    "topic": "past",
    "foodCat": "perfect",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Hoy yo ___ trabajado desde casa.",
    "options": [
      "he",
      "has",
      "ha",
      "han"
    ],
    "a": [
      "he"
    ],
    "e": "Для yo в Pretérito Perfecto используется he."
  },
  {
    "id": "context_choice_yesterday_went",
    "topic": "past",
    "foodCat": "indefinite",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Ayer Laura ___ al cine después del trabajo.",
    "options": [
      "fui",
      "fue",
      "va",
      "ir"
    ],
    "a": [
      "fue"
    ],
    "e": "Ayer требует завершённую форму; для Laura — fue."
  },
  {
    "id": "sort_auto_past_0",
    "topic": "past",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Прошедшее время» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "perfect",
        "title": "Pretérito Perfecto"
      },
      {
        "id": "indefinite",
        "title": "Pretérito Indefinido"
      },
      {
        "id": "markers",
        "title": "Маркеры времени"
      }
    ],
    "sortTokens": [
      {
        "id": "past_0_perfect_he_hablado",
        "text": "he hablado",
        "category": "perfect"
      },
      {
        "id": "past_0_perfect_has_comido",
        "text": "has comido",
        "category": "perfect"
      },
      {
        "id": "past_0_perfect_ha_vivido",
        "text": "ha vivido",
        "category": "perfect"
      },
      {
        "id": "past_0_indefinite_hable",
        "text": "hablé",
        "category": "indefinite"
      },
      {
        "id": "past_0_indefinite_comiste",
        "text": "comiste",
        "category": "indefinite"
      },
      {
        "id": "past_0_indefinite_vivio",
        "text": "vivió",
        "category": "indefinite"
      },
      {
        "id": "past_0_markers_hoy_marker",
        "text": "hoy / esta semana / ya / todavía no",
        "category": "markers"
      },
      {
        "id": "past_0_markers_ayer_marker",
        "text": "ayer / anoche",
        "category": "markers"
      },
      {
        "id": "past_0_markers_past_period",
        "text": "la semana pasada / el año pasado",
        "category": "markers"
      }
    ],
    "a": [
      "perfect | perfect | perfect | indefinite | indefinite | indefinite | markers | markers | markers"
    ],
    "displayAnswer": "Pretérito Perfecto: he hablado, has comido, ha vivido · Pretérito Indefinido: hablé, comiste, vivió · Маркеры времени: hoy / esta semana / ya / todavía no, ayer / anoche, la semana pasada / el año pasado",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const pastTopic = {
  id: "past",
  title: "Прошедшее время",
  icon: "↶",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
