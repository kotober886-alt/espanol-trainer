/**
 * Разговорные конструкции topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "hay",
    "cat": "presence",
    "word": "hay",
    "gender": "безличная форма",
    "tr": "есть, имеется, находятся",
    "ru": [
      "есть",
      "имеется",
      "находятся"
    ],
    "answers": [
      "hay"
    ],
    "examples": [
      [
        "En mi barrio hay un parque.",
        "В моём районе есть парк."
      ],
      [
        "Hay dos libros en la mesa.",
        "На столе лежат две книги."
      ]
    ],
    "cloze": "En mi barrio ___ un parque.",
    "clozeAnswers": [
      "hay"
    ],
    "meta": {
      "categoryTitle": "Наличие и место",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "estar_location",
    "cat": "presence",
    "word": "estar + место",
    "gender": "местонахождение известного объекта",
    "tr": "находиться где-либо",
    "ru": [
      "находиться",
      "находиться где-либо"
    ],
    "answers": [
      "estar",
      "estar en"
    ],
    "examples": [
      [
        "La farmacia está cerca.",
        "Аптека находится рядом."
      ],
      [
        "Los libros están en la mesa.",
        "Книги находятся на столе."
      ]
    ],
    "cloze": "La farmacia ___ cerca.",
    "clozeAnswers": [
      "está",
      "esta"
    ],
    "meta": {
      "categoryTitle": "Наличие и место",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "tener",
    "cat": "presence",
    "word": "tener",
    "gender": "личная конструкция",
    "tr": "иметь; у кого-то есть",
    "ru": [
      "иметь",
      "у кого-то есть",
      "у кого то есть"
    ],
    "answers": [
      "tener"
    ],
    "examples": [
      [
        "Tengo una hermana.",
        "У меня есть сестра."
      ],
      [
        "Tenemos poco tiempo.",
        "У нас мало времени."
      ]
    ],
    "cloze": "Yo ___ una hermana.",
    "clozeAnswers": [
      "tengo"
    ],
    "meta": {
      "categoryTitle": "Наличие и место",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "ir_a",
    "cat": "plans",
    "word": "ir a + infinitivo",
    "gender": "ближайшее будущее",
    "tr": "собираться что-то сделать",
    "ru": [
      "собираться что-то сделать",
      "собираться сделать",
      "собираюсь сделать"
    ],
    "answers": [
      "ir a",
      "ir a + infinitivo",
      "ir a infinitivo"
    ],
    "examples": [
      [
        "Voy a estudiar esta noche.",
        "Сегодня вечером я собираюсь заниматься."
      ],
      [
        "Vamos a viajar en verano.",
        "Летом мы собираемся путешествовать."
      ]
    ],
    "cloze": "Esta noche voy ___ estudiar.",
    "clozeAnswers": [
      "a"
    ],
    "meta": {
      "categoryTitle": "Планы",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "querer_inf",
    "cat": "plans",
    "word": "querer + infinitivo",
    "gender": "желание",
    "tr": "хотеть что-то сделать",
    "ru": [
      "хотеть что-то сделать",
      "хотеть сделать"
    ],
    "answers": [
      "querer",
      "querer + infinitivo",
      "querer infinitivo"
    ],
    "examples": [
      [
        "Quiero aprender español.",
        "Я хочу выучить испанский."
      ],
      [
        "Queremos descansar.",
        "Мы хотим отдохнуть."
      ]
    ],
    "cloze": "Yo ___ aprender español.",
    "clozeAnswers": [
      "quiero"
    ],
    "meta": {
      "categoryTitle": "Планы",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "pensar_inf",
    "cat": "plans",
    "word": "pensar + infinitivo",
    "gender": "намерение",
    "tr": "планировать, намереваться",
    "ru": [
      "планировать",
      "намереваться"
    ],
    "answers": [
      "pensar",
      "pensar + infinitivo",
      "pensar infinitivo"
    ],
    "examples": [
      [
        "Pienso viajar en otoño.",
        "Я планирую путешествовать осенью."
      ],
      [
        "Pensamos cambiar de trabajo.",
        "Мы намерены сменить работу."
      ]
    ],
    "cloze": "Yo ___ viajar en otoño.",
    "clozeAnswers": [
      "pienso"
    ],
    "meta": {
      "categoryTitle": "Планы",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "tener_que",
    "cat": "obligation",
    "word": "tener que + infinitivo",
    "gender": "личная необходимость",
    "tr": "нужно, должен",
    "ru": [
      "нужно",
      "должен",
      "должна"
    ],
    "answers": [
      "tener que",
      "tener que + infinitivo",
      "tener que infinitivo"
    ],
    "examples": [
      [
        "Tengo que trabajar mañana.",
        "Мне нужно работать завтра."
      ],
      [
        "Tenemos que salir temprano.",
        "Нам нужно выйти рано."
      ]
    ],
    "cloze": "Tengo ___ trabajar mañana.",
    "clozeAnswers": [
      "que"
    ],
    "meta": {
      "categoryTitle": "Необходимость",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "hay_que",
    "cat": "obligation",
    "word": "hay que + infinitivo",
    "gender": "общая необходимость",
    "tr": "нужно, надо вообще",
    "ru": [
      "нужно",
      "надо",
      "нужно вообще"
    ],
    "answers": [
      "hay que",
      "hay que + infinitivo",
      "hay que infinitivo"
    ],
    "examples": [
      [
        "Hay que practicar cada día.",
        "Нужно заниматься каждый день."
      ],
      [
        "Hay que comprar pan.",
        "Надо купить хлеб."
      ]
    ],
    "cloze": "___ practicar cada día.",
    "clozeAnswers": [
      "hay que"
    ],
    "meta": {
      "categoryTitle": "Необходимость",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "deber",
    "cat": "obligation",
    "word": "deber + infinitivo",
    "gender": "совет или обязанность",
    "tr": "следует, должен",
    "ru": [
      "следует",
      "должен",
      "должна"
    ],
    "answers": [
      "deber",
      "deber + infinitivo",
      "deber infinitivo"
    ],
    "examples": [
      [
        "Debes descansar más.",
        "Тебе следует больше отдыхать."
      ],
      [
        "Debemos llegar a tiempo.",
        "Мы должны прийти вовремя."
      ]
    ],
    "cloze": "Tú ___ descansar más.",
    "clozeAnswers": [
      "debes"
    ],
    "meta": {
      "categoryTitle": "Необходимость",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "poder",
    "cat": "ability",
    "word": "poder + infinitivo",
    "gender": "возможность или разрешение",
    "tr": "мочь",
    "ru": [
      "мочь",
      "можно"
    ],
    "answers": [
      "poder",
      "poder + infinitivo",
      "poder infinitivo"
    ],
    "examples": [
      [
        "Puedo ayudarte.",
        "Я могу тебе помочь."
      ],
      [
        "¿Podemos entrar?",
        "Мы можем войти?"
      ]
    ],
    "cloze": "Yo ___ ayudarte.",
    "clozeAnswers": [
      "puedo"
    ],
    "meta": {
      "categoryTitle": "Возможность",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "necesitar",
    "cat": "ability",
    "word": "necesitar + infinitivo",
    "gender": "необходимость",
    "tr": "нуждаться; необходимо сделать",
    "ru": [
      "нуждаться",
      "необходимо сделать"
    ],
    "answers": [
      "necesitar",
      "necesitar + infinitivo",
      "necesitar infinitivo"
    ],
    "examples": [
      [
        "Necesito comprar comida.",
        "Мне нужно купить продукты."
      ],
      [
        "Necesitamos hablar.",
        "Нам необходимо поговорить."
      ]
    ],
    "cloze": "Yo ___ comprar comida.",
    "clozeAnswers": [
      "necesito"
    ],
    "meta": {
      "categoryTitle": "Возможность",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "acabar_de",
    "cat": "action",
    "word": "acabar de + infinitivo",
    "gender": "только что завершённое действие",
    "tr": "только что сделать",
    "ru": [
      "только что сделать",
      "только что"
    ],
    "answers": [
      "acabar de",
      "acabar de + infinitivo",
      "acabar de infinitivo"
    ],
    "examples": [
      [
        "Acabo de llegar.",
        "Я только что пришла."
      ],
      [
        "Acabamos de comer.",
        "Мы только что поели."
      ]
    ],
    "cloze": "Yo ___ de llegar.",
    "clozeAnswers": [
      "acabo"
    ],
    "meta": {
      "categoryTitle": "Этап действия",
      "categoryOrder": 5,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "volver_a",
    "cat": "action",
    "word": "volver a + infinitivo",
    "gender": "повтор действия",
    "tr": "сделать снова",
    "ru": [
      "сделать снова",
      "снова"
    ],
    "answers": [
      "volver a",
      "volver a + infinitivo",
      "volver a infinitivo"
    ],
    "examples": [
      [
        "Vuelvo a leer el mensaje.",
        "Я снова читаю сообщение."
      ],
      [
        "Volvemos a intentarlo.",
        "Мы пробуем снова."
      ]
    ],
    "cloze": "Yo ___ a leer el mensaje.",
    "clozeAnswers": [
      "vuelvo"
    ],
    "meta": {
      "categoryTitle": "Этап действия",
      "categoryOrder": 5,
      "allCategoryTitle": "Все"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_constructions_hay_es",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "Вспомни",
    "q": "Переведи на испанский: есть, имеется, находятся.",
    "a": [
      "hay"
    ],
    "e": "Правильный вариант: hay."
  },
  {
    "id": "study_constructions_hay_ru",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "Узнай",
    "q": "Переведи на русский: hay.",
    "a": [
      "есть",
      "имеется",
      "находятся",
      "есть, имеется, находятся"
    ],
    "e": "hay — есть, имеется, находятся."
  },
  {
    "id": "study_constructions_hay_ctx",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В моём районе есть парк.»: En mi barrio ___ un parque.",
    "a": [
      "hay"
    ],
    "e": "En mi barrio hay un parque. — В моём районе есть парк."
  },
  {
    "id": "study_constructions_estar_location_es",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "Конструкция",
    "q": "Какой испанский глагол используют для местонахождения уже известного предмета?",
    "a": [
      "estar",
      "estar en"
    ],
    "e": "La farmacia está cerca. — Аптека находится рядом."
  },
  {
    "id": "study_constructions_estar_location_ru",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "Конструкция",
    "q": "Что выражает estar, когда после него указано место?",
    "a": [
      "находиться",
      "находиться где-либо"
    ],
    "e": "estar + место — находиться где-либо."
  },
  {
    "id": "study_constructions_estar_location_ctx",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Аптека находится рядом.»: La farmacia ___ cerca.",
    "a": [
      "está",
      "esta"
    ],
    "e": "La farmacia está cerca. — Аптека находится рядом."
  },
  {
    "id": "study_constructions_tener_es",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "Вспомни",
    "q": "Переведи на испанский: иметь; у кого-то есть.",
    "a": [
      "tener"
    ],
    "e": "Правильный вариант: tener."
  },
  {
    "id": "study_constructions_tener_ru",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "Узнай",
    "q": "Переведи на русский: tener.",
    "a": [
      "иметь",
      "у кого-то есть",
      "у кого то есть",
      "иметь; у кого-то есть"
    ],
    "e": "tener — иметь; у кого-то есть."
  },
  {
    "id": "study_constructions_tener_ctx",
    "topic": "constructions",
    "foodCat": "presence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У меня есть сестра.»: Yo ___ una hermana.",
    "a": [
      "tengo"
    ],
    "e": "Tengo una hermana. — У меня есть сестра."
  },
  {
    "id": "study_constructions_ir_a_es",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "Конструкция",
    "q": "Какая испанская конструкция означает «собираться что-то сделать»?",
    "a": [
      "ir a",
      "ir a + infinitivo",
      "ir a infinitivo"
    ],
    "e": "Voy a estudiar esta noche. — Сегодня вечером я собираюсь заниматься."
  },
  {
    "id": "study_constructions_ir_a_ru",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "Конструкция",
    "q": "Что означает конструкция ir a + infinitivo?",
    "a": [
      "собираться что-то сделать",
      "собираться сделать",
      "собираюсь сделать"
    ],
    "e": "ir a + infinitivo — собираться что-то сделать."
  },
  {
    "id": "study_constructions_ir_a_ctx",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сегодня вечером я собираюсь заниматься.»: Esta noche voy ___ estudiar.",
    "a": [
      "a"
    ],
    "e": "Voy a estudiar esta noche. — Сегодня вечером я собираюсь заниматься."
  },
  {
    "id": "study_constructions_querer_inf_es",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "Конструкция",
    "q": "Какая испанская конструкция означает «хотеть что-то сделать»?",
    "a": [
      "querer",
      "querer + infinitivo",
      "querer infinitivo"
    ],
    "e": "Quiero aprender español. — Я хочу выучить испанский."
  },
  {
    "id": "study_constructions_querer_inf_ru",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "Конструкция",
    "q": "Что означает конструкция querer + infinitivo?",
    "a": [
      "хотеть что-то сделать",
      "хотеть сделать"
    ],
    "e": "querer + infinitivo — хотеть что-то сделать."
  },
  {
    "id": "study_constructions_querer_inf_ctx",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я хочу выучить испанский.»: Yo ___ aprender español.",
    "a": [
      "quiero"
    ],
    "e": "Quiero aprender español. — Я хочу выучить испанский."
  },
  {
    "id": "study_constructions_pensar_inf_es",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "Конструкция",
    "q": "Какая испанская конструкция передаёт намерение или план?",
    "a": [
      "pensar",
      "pensar + infinitivo",
      "pensar infinitivo"
    ],
    "e": "Pienso viajar en otoño. — Я планирую путешествовать осенью."
  },
  {
    "id": "study_constructions_pensar_inf_ru",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "Конструкция",
    "q": "Что означает конструкция pensar + infinitivo?",
    "a": [
      "планировать",
      "намереваться",
      "планировать, намереваться"
    ],
    "e": "pensar + infinitivo — планировать, намереваться."
  },
  {
    "id": "study_constructions_pensar_inf_ctx",
    "topic": "constructions",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я планирую путешествовать осенью.»: Yo ___ viajar en otoño.",
    "a": [
      "pienso"
    ],
    "e": "Pienso viajar en otoño. — Я планирую путешествовать осенью."
  },
  {
    "id": "study_constructions_tener_que_es",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "Конструкция",
    "q": "Какая испанская конструкция выражает личную необходимость: «мне нужно / я должна»?",
    "a": [
      "tener que",
      "tener que + infinitivo",
      "tener que infinitivo"
    ],
    "e": "Tengo que trabajar mañana. — Мне нужно работать завтра."
  },
  {
    "id": "study_constructions_tener_que_ru",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "Конструкция",
    "q": "Что означает конструкция tener que + infinitivo?",
    "a": [
      "нужно",
      "должен",
      "должна",
      "нужно, должен"
    ],
    "e": "tener que + infinitivo — нужно, должен."
  },
  {
    "id": "study_constructions_tener_que_ctx",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне нужно работать завтра.»: Tengo ___ trabajar mañana.",
    "a": [
      "que"
    ],
    "e": "Tengo que trabajar mañana. — Мне нужно работать завтра."
  },
  {
    "id": "study_constructions_hay_que_es",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "Конструкция",
    "q": "Какая испанская конструкция выражает общую необходимость: «нужно / надо»?",
    "a": [
      "hay que",
      "hay que + infinitivo",
      "hay que infinitivo"
    ],
    "e": "Hay que practicar cada día. — Нужно заниматься каждый день."
  },
  {
    "id": "study_constructions_hay_que_ru",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "Конструкция",
    "q": "Что означает конструкция hay que + infinitivo?",
    "a": [
      "нужно",
      "надо",
      "нужно вообще",
      "нужно, надо вообще"
    ],
    "e": "hay que + infinitivo — нужно, надо вообще."
  },
  {
    "id": "study_constructions_hay_que_ctx",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Нужно заниматься каждый день.»: ___ practicar cada día.",
    "a": [
      "hay que"
    ],
    "e": "Hay que practicar cada día. — Нужно заниматься каждый день."
  },
  {
    "id": "study_constructions_deber_es",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "Конструкция",
    "q": "Какой испанский глагол перед инфинитивом выражает совет или обязанность?",
    "a": [
      "deber",
      "deber + infinitivo",
      "deber infinitivo"
    ],
    "e": "Debes descansar más. — Тебе следует больше отдыхать."
  },
  {
    "id": "study_constructions_deber_ru",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "Конструкция",
    "q": "Что означает конструкция deber + infinitivo?",
    "a": [
      "следует",
      "должен",
      "должна",
      "следует, должен"
    ],
    "e": "deber + infinitivo — следует, должен."
  },
  {
    "id": "study_constructions_deber_ctx",
    "topic": "constructions",
    "foodCat": "obligation",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Тебе следует больше отдыхать.»: Tú ___ descansar más.",
    "a": [
      "debes"
    ],
    "e": "Debes descansar más. — Тебе следует больше отдыхать."
  },
  {
    "id": "study_constructions_poder_es",
    "topic": "constructions",
    "foodCat": "ability",
    "skill": "Конструкция",
    "q": "Какой испанский глагол перед инфинитивом выражает возможность или разрешение?",
    "a": [
      "poder",
      "poder + infinitivo",
      "poder infinitivo"
    ],
    "e": "Puedo ayudarte. — Я могу тебе помочь."
  },
  {
    "id": "study_constructions_poder_ru",
    "topic": "constructions",
    "foodCat": "ability",
    "skill": "Конструкция",
    "q": "Что означает конструкция poder + infinitivo?",
    "a": [
      "мочь",
      "можно"
    ],
    "e": "poder + infinitivo — мочь."
  },
  {
    "id": "study_constructions_poder_ctx",
    "topic": "constructions",
    "foodCat": "ability",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я могу тебе помочь.»: Yo ___ ayudarte.",
    "a": [
      "puedo"
    ],
    "e": "Puedo ayudarte. — Я могу тебе помочь."
  },
  {
    "id": "study_constructions_necesitar_es",
    "topic": "constructions",
    "foodCat": "ability",
    "skill": "Конструкция",
    "q": "Какой испанский глагол перед инфинитивом означает необходимость?",
    "a": [
      "necesitar",
      "necesitar + infinitivo",
      "necesitar infinitivo"
    ],
    "e": "Necesito comprar comida. — Мне нужно купить продукты."
  },
  {
    "id": "study_constructions_necesitar_ru",
    "topic": "constructions",
    "foodCat": "ability",
    "skill": "Конструкция",
    "q": "Что означает конструкция necesitar + infinitivo?",
    "a": [
      "нуждаться",
      "необходимо сделать",
      "нуждаться; необходимо сделать"
    ],
    "e": "necesitar + infinitivo — нуждаться; необходимо сделать."
  },
  {
    "id": "study_constructions_necesitar_ctx",
    "topic": "constructions",
    "foodCat": "ability",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне нужно купить продукты.»: Yo ___ comprar comida.",
    "a": [
      "necesito"
    ],
    "e": "Necesito comprar comida. — Мне нужно купить продукты."
  },
  {
    "id": "study_constructions_acabar_de_es",
    "topic": "constructions",
    "foodCat": "action",
    "skill": "Конструкция",
    "q": "Какая испанская конструкция означает «только что что-то сделать»?",
    "a": [
      "acabar de",
      "acabar de + infinitivo",
      "acabar de infinitivo"
    ],
    "e": "Acabo de llegar. — Я только что пришла."
  },
  {
    "id": "study_constructions_acabar_de_ru",
    "topic": "constructions",
    "foodCat": "action",
    "skill": "Конструкция",
    "q": "Что означает конструкция acabar de + infinitivo?",
    "a": [
      "только что сделать",
      "только что"
    ],
    "e": "acabar de + infinitivo — только что сделать."
  },
  {
    "id": "study_constructions_acabar_de_ctx",
    "topic": "constructions",
    "foodCat": "action",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я только что пришла.»: Yo ___ de llegar.",
    "a": [
      "acabo"
    ],
    "e": "Acabo de llegar. — Я только что пришла."
  },
  {
    "id": "study_constructions_volver_a_es",
    "topic": "constructions",
    "foodCat": "action",
    "skill": "Конструкция",
    "q": "Какая испанская конструкция означает «сделать что-то снова»?",
    "a": [
      "volver a",
      "volver a + infinitivo",
      "volver a infinitivo"
    ],
    "e": "Vuelvo a leer el mensaje. — Я снова читаю сообщение."
  },
  {
    "id": "study_constructions_volver_a_ru",
    "topic": "constructions",
    "foodCat": "action",
    "skill": "Конструкция",
    "q": "Что означает конструкция volver a + infinitivo?",
    "a": [
      "сделать снова",
      "снова"
    ],
    "e": "volver a + infinitivo — сделать снова."
  },
  {
    "id": "study_constructions_volver_a_ctx",
    "topic": "constructions",
    "foodCat": "action",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я снова читаю сообщение.»: Yo ___ a leer el mensaje.",
    "a": [
      "vuelvo"
    ],
    "e": "Vuelvo a leer el mensaje. — Я снова читаю сообщение."
  },
  {
    "id": "choice_constructions_hay",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: есть, имеется, находятся.",
    "a": [
      "hay"
    ],
    "options": [
      "hay",
      "tener"
    ],
    "e": "hay — есть, имеется, находятся."
  },
  {
    "id": "choice_constructions_tener",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: иметь; у кого-то есть.",
    "a": [
      "tener"
    ],
    "options": [
      "tener",
      "hay"
    ],
    "e": "tener — иметь; у кого-то есть."
  },
  {
    "id": "audio_constructions_hay",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En mi barrio hay un parque.",
    "a": [
      "En mi barrio hay un parque."
    ],
    "e": "В моём районе есть парк."
  },
  {
    "id": "audio_constructions_estar_location",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La farmacia está cerca.",
    "a": [
      "La farmacia está cerca."
    ],
    "e": "Аптека находится рядом."
  },
  {
    "id": "audio_constructions_tener",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tengo una hermana.",
    "a": [
      "Tengo una hermana."
    ],
    "e": "У меня есть сестра."
  },
  {
    "id": "audio_constructions_ir_a",
    "topic": "constructions",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Voy a estudiar esta noche.",
    "a": [
      "Voy a estudiar esta noche."
    ],
    "e": "Сегодня вечером я собираюсь заниматься."
  },
  {
    "id": "audio_constructions_querer_inf",
    "topic": "constructions",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero aprender español.",
    "a": [
      "Quiero aprender español."
    ],
    "e": "Я хочу выучить испанский."
  },
  {
    "id": "audio_constructions_pensar_inf",
    "topic": "constructions",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pienso viajar en otoño.",
    "a": [
      "Pienso viajar en otoño."
    ],
    "e": "Я планирую путешествовать осенью."
  },
  {
    "id": "audio_constructions_tener_que",
    "topic": "constructions",
    "foodCat": "obligation",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tengo que trabajar mañana.",
    "a": [
      "Tengo que trabajar mañana."
    ],
    "e": "Мне нужно работать завтра."
  },
  {
    "id": "audio_constructions_hay_que",
    "topic": "constructions",
    "foodCat": "obligation",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hay que practicar cada día.",
    "a": [
      "Hay que practicar cada día."
    ],
    "e": "Нужно заниматься каждый день."
  },
  {
    "id": "audio_constructions_deber",
    "topic": "constructions",
    "foodCat": "obligation",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Debes descansar más.",
    "a": [
      "Debes descansar más."
    ],
    "e": "Тебе следует больше отдыхать."
  },
  {
    "id": "audio_constructions_poder",
    "topic": "constructions",
    "foodCat": "ability",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Puedo ayudarte.",
    "a": [
      "Puedo ayudarte."
    ],
    "e": "Я могу тебе помочь."
  },
  {
    "id": "audio_constructions_necesitar",
    "topic": "constructions",
    "foodCat": "ability",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito comprar comida.",
    "a": [
      "Necesito comprar comida."
    ],
    "e": "Мне нужно купить продукты."
  },
  {
    "id": "audio_constructions_acabar_de",
    "topic": "constructions",
    "foodCat": "action",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Acabo de llegar.",
    "a": [
      "Acabo de llegar."
    ],
    "e": "Я только что пришла."
  },
  {
    "id": "audio_constructions_volver_a",
    "topic": "constructions",
    "foodCat": "action",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vuelvo a leer el mensaje.",
    "a": [
      "Vuelvo a leer el mensaje."
    ],
    "e": "Я снова читаю сообщение."
  },
  {
    "id": "order_c_hay",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «В моём районе есть парк»",
    "tokens": [
      "En",
      "mi",
      "barrio",
      "hay",
      "un",
      "parque."
    ],
    "a": [
      "En mi barrio hay un parque."
    ],
    "e": "Hay сообщает о наличии объекта."
  },
  {
    "id": "order_c_plan",
    "topic": "constructions",
    "foodCat": "plans",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Я собираюсь работать завтра»",
    "tokens": [
      "Voy",
      "a",
      "trabajar",
      "mañana."
    ],
    "a": [
      "Voy a trabajar mañana."
    ],
    "e": "ir a + infinitivo"
  },
  {
    "id": "order_c_need",
    "topic": "constructions",
    "foodCat": "obligation",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Мне нужно купить хлеб»",
    "tokens": [
      "Tengo",
      "que",
      "comprar",
      "pan."
    ],
    "a": [
      "Tengo que comprar pan."
    ],
    "e": "tener que + infinitivo"
  },
  {
    "id": "correct_c_location",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Hay la farmacia cerca.",
    "a": [
      "La farmacia está cerca."
    ],
    "e": "Hay — наличие, estar — место известного объекта."
  },
  {
    "id": "correct_c_tener",
    "topic": "constructions",
    "foodCat": "obligation",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Tengo trabajar mañana.",
    "a": [
      "Tengo que trabajar mañana."
    ],
    "e": "После tener необходимо que."
  },
  {
    "id": "dialogue_c_evening",
    "topic": "constructions",
    "foodCat": "plans",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Qué vas a hacer esta noche? — Я собираюсь читать.",
    "a": [
      "Voy a leer."
    ],
    "e": "ir a + infinitivo выражает план."
  },
  {
    "id": "dialogue_c_help",
    "topic": "constructions",
    "foodCat": "ability",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Puedes ayudarme? — Да, могу.",
    "a": [
      "Sí, puedo.",
      "Si, puedo."
    ],
    "e": "Краткий естественный ответ — Sí, puedo."
  },
  {
    "id": "compare_hay_estar",
    "topic": "constructions",
    "foodCat": "presence",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: En mi barrio ___ un parque.",
    "options": [
      "hay",
      "está",
      "tiene"
    ],
    "a": [
      "hay"
    ],
    "e": "Неопределённый новый объект вводится через hay."
  },
  {
    "id": "sort_auto_constructions_0",
    "topic": "constructions",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Разговорные конструкции» по подходящим колонкам. Набор 1 из 2.",
    "sortColumns": [
      {
        "id": "presence",
        "title": "Наличие и место"
      },
      {
        "id": "plans",
        "title": "Планы"
      },
      {
        "id": "obligation",
        "title": "Необходимость"
      }
    ],
    "sortTokens": [
      {
        "id": "constructions_0_presence_hay",
        "text": "hay",
        "category": "presence"
      },
      {
        "id": "constructions_0_presence_estar_location",
        "text": "estar + место",
        "category": "presence"
      },
      {
        "id": "constructions_0_presence_tener",
        "text": "tener",
        "category": "presence"
      },
      {
        "id": "constructions_0_plans_ir_a",
        "text": "ir a + infinitivo",
        "category": "plans"
      },
      {
        "id": "constructions_0_plans_querer_inf",
        "text": "querer + infinitivo",
        "category": "plans"
      },
      {
        "id": "constructions_0_plans_pensar_inf",
        "text": "pensar + infinitivo",
        "category": "plans"
      },
      {
        "id": "constructions_0_obligation_tener_que",
        "text": "tener que + infinitivo",
        "category": "obligation"
      },
      {
        "id": "constructions_0_obligation_hay_que",
        "text": "hay que + infinitivo",
        "category": "obligation"
      },
      {
        "id": "constructions_0_obligation_deber",
        "text": "deber + infinitivo",
        "category": "obligation"
      }
    ],
    "a": [
      "presence | presence | presence | plans | plans | plans | obligation | obligation | obligation"
    ],
    "displayAnswer": "Наличие и место: hay, estar + место, tener · Планы: ir a + infinitivo, querer + infinitivo, pensar + infinitivo · Необходимость: tener que + infinitivo, hay que + infinitivo, deber + infinitivo",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  },
  {
    "id": "sort_auto_constructions_1",
    "topic": "constructions",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Разговорные конструкции» по подходящим колонкам. Набор 2 из 2.",
    "sortColumns": [
      {
        "id": "ability",
        "title": "Возможность"
      },
      {
        "id": "action",
        "title": "Этап действия"
      }
    ],
    "sortTokens": [
      {
        "id": "constructions_1_ability_necesitar",
        "text": "necesitar + infinitivo",
        "category": "ability"
      },
      {
        "id": "constructions_1_ability_poder",
        "text": "poder + infinitivo",
        "category": "ability"
      },
      {
        "id": "constructions_1_action_volver_a",
        "text": "volver a + infinitivo",
        "category": "action"
      },
      {
        "id": "constructions_1_action_acabar_de",
        "text": "acabar de + infinitivo",
        "category": "action"
      }
    ],
    "a": [
      "ability | ability | action | action"
    ],
    "displayAnswer": "Возможность: necesitar + infinitivo, poder + infinitivo · Этап действия: volver a + infinitivo, acabar de + infinitivo",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const constructionsTopic = {
  id: "constructions",
  title: "Разговорные конструкции",
  icon: "▣",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
