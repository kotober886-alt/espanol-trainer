/**
 * Вопросы topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "que",
    "cat": "basic",
    "word": "¿qué?",
    "gender": "вопросительное слово",
    "tr": "что? какой? (перед существительным)",
    "ru": [
      "что",
      "какой",
      "какая",
      "какое"
    ],
    "answers": [
      "qué",
      "que"
    ],
    "examples": [
      [
        "¿Qué haces?",
        "Что ты делаешь?"
      ],
      [
        "¿Qué libro lees?",
        "Какую книгу ты читаешь?"
      ]
    ],
    "cloze": "¿___ haces?",
    "clozeAnswers": [
      "qué",
      "que"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "quien",
    "cat": "basic",
    "word": "¿quién? / ¿quiénes?",
    "gender": "о людях",
    "tr": "кто? кто во множественном числе?",
    "ru": [
      "кто"
    ],
    "answers": [
      "quién",
      "quien",
      "quiénes",
      "quienes"
    ],
    "examples": [
      [
        "¿Quién trabaja aquí?",
        "Кто здесь работает?"
      ],
      [
        "¿Quiénes son ellos?",
        "Кто они?"
      ]
    ],
    "cloze": "¿___ trabaja aquí?",
    "clozeAnswers": [
      "quién",
      "quien"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "cual",
    "cat": "basic",
    "word": "¿cuál? / ¿cuáles?",
    "gender": "выбор из вариантов",
    "tr": "который? какой из вариантов?",
    "ru": [
      "который",
      "какой из вариантов",
      "какой"
    ],
    "answers": [
      "cuál",
      "cual",
      "cuáles",
      "cuales"
    ],
    "examples": [
      [
        "¿Cuál prefieres?",
        "Какой ты предпочитаешь?"
      ],
      [
        "¿Cuáles son tus zapatos?",
        "Какие туфли твои?"
      ]
    ],
    "cloze": "¿___ prefieres?",
    "clozeAnswers": [
      "cuál",
      "cual"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "cuanto",
    "cat": "basic",
    "word": "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?",
    "gender": "согласуется с существительным",
    "tr": "сколько?",
    "ru": [
      "сколько"
    ],
    "answers": [
      "cuánto",
      "cuanto",
      "cuánta",
      "cuanta",
      "cuántos",
      "cuantos",
      "cuántas",
      "cuantas"
    ],
    "examples": [
      [
        "¿Cuánto cuesta?",
        "Сколько это стоит?"
      ],
      [
        "¿Cuántas personas vienen?",
        "Сколько человек придёт?"
      ]
    ],
    "cloze": "¿___ cuesta?",
    "clozeAnswers": [
      "cuánto",
      "cuanto"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "donde",
    "cat": "place",
    "word": "¿dónde?",
    "gender": "местонахождение",
    "tr": "где?",
    "ru": [
      "где"
    ],
    "answers": [
      "dónde",
      "donde"
    ],
    "examples": [
      [
        "¿Dónde vives?",
        "Где ты живёшь?"
      ],
      [
        "¿Dónde está la farmacia?",
        "Где находится аптека?"
      ]
    ],
    "cloze": "¿___ vives?",
    "clozeAnswers": [
      "dónde",
      "donde"
    ],
    "meta": {
      "categoryTitle": "Место",
      "categoryOrder": 2,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "adonde",
    "cat": "place",
    "word": "¿adónde?",
    "gender": "направление движения",
    "tr": "куда?",
    "ru": [
      "куда"
    ],
    "answers": [
      "adónde",
      "adonde",
      "a dónde",
      "a donde"
    ],
    "examples": [
      [
        "¿Adónde vas?",
        "Куда ты идёшь?"
      ],
      [
        "¿Adónde viajáis en verano?",
        "Куда вы едете летом?"
      ]
    ],
    "cloze": "¿___ vas?",
    "clozeAnswers": [
      "adónde",
      "adonde",
      "a dónde",
      "a donde"
    ],
    "meta": {
      "categoryTitle": "Место",
      "categoryOrder": 2,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "de_donde",
    "cat": "place",
    "word": "¿de dónde?",
    "gender": "происхождение или исходная точка",
    "tr": "откуда?",
    "ru": [
      "откуда"
    ],
    "answers": [
      "de dónde",
      "de donde"
    ],
    "examples": [
      [
        "¿De dónde eres?",
        "Откуда ты?"
      ],
      [
        "¿De dónde viene este autobús?",
        "Откуда едет этот автобус?"
      ]
    ],
    "cloze": "¿___ eres?",
    "clozeAnswers": [
      "de dónde",
      "de donde"
    ],
    "meta": {
      "categoryTitle": "Место",
      "categoryOrder": 2,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "cuando",
    "cat": "time",
    "word": "¿cuándo?",
    "gender": "время",
    "tr": "когда?",
    "ru": [
      "когда"
    ],
    "answers": [
      "cuándo",
      "cuando"
    ],
    "examples": [
      [
        "¿Cuándo trabajas?",
        "Когда ты работаешь?"
      ],
      [
        "¿Cuándo es tu cumpleaños?",
        "Когда твой день рождения?"
      ]
    ],
    "cloze": "¿___ es tu cumpleaños?",
    "clozeAnswers": [
      "cuándo",
      "cuando"
    ],
    "meta": {
      "categoryTitle": "Время и способ",
      "categoryOrder": 3,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "como",
    "cat": "time",
    "word": "¿cómo?",
    "gender": "способ или состояние",
    "tr": "как?",
    "ru": [
      "как"
    ],
    "answers": [
      "cómo",
      "como"
    ],
    "examples": [
      [
        "¿Cómo estás?",
        "Как ты?"
      ],
      [
        "¿Cómo vas al trabajo?",
        "Как ты добираешься на работу?"
      ]
    ],
    "cloze": "¿___ estás?",
    "clozeAnswers": [
      "cómo",
      "como"
    ],
    "meta": {
      "categoryTitle": "Время и способ",
      "categoryOrder": 3,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "por_que",
    "cat": "reason",
    "word": "¿por qué?",
    "gender": "причина",
    "tr": "почему?",
    "ru": [
      "почему"
    ],
    "answers": [
      "por qué",
      "por que"
    ],
    "examples": [
      [
        "¿Por qué estudias español?",
        "Почему ты учишь испанский?"
      ],
      [
        "¿Por qué llegas tarde?",
        "Почему ты опаздываешь?"
      ]
    ],
    "cloze": "¿___ estudias español?",
    "clozeAnswers": [
      "por qué",
      "por que"
    ],
    "meta": {
      "categoryTitle": "Причина и цель",
      "categoryOrder": 4,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "para_que",
    "cat": "reason",
    "word": "¿para qué?",
    "gender": "цель",
    "tr": "зачем? для чего?",
    "ru": [
      "зачем",
      "для чего"
    ],
    "answers": [
      "para qué",
      "para que"
    ],
    "examples": [
      [
        "¿Para qué necesitas esto?",
        "Зачем тебе это нужно?"
      ],
      [
        "¿Para qué aprendes español?",
        "Для чего ты учишь испанский?"
      ]
    ],
    "cloze": "¿___ necesitas esto?",
    "clozeAnswers": [
      "para qué",
      "para que"
    ],
    "meta": {
      "categoryTitle": "Причина и цель",
      "categoryOrder": 4,
      "allCategoryTitle": "Все вопросы"
    }
  },
  {
    "id": "con_quien",
    "cat": "basic",
    "word": "¿con quién?",
    "gender": "вопрос с предлогом",
    "tr": "с кем?",
    "ru": [
      "с кем"
    ],
    "answers": [
      "con quién",
      "con quien"
    ],
    "examples": [
      [
        "¿Con quién quedas hoy?",
        "С кем ты сегодня встречаешься?"
      ],
      [
        "¿Con quién vives?",
        "С кем ты живёшь?"
      ]
    ],
    "cloze": "¿___ quedas hoy?",
    "clozeAnswers": [
      "con quién",
      "con quien"
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все вопросы"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_questions_que_es",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: что? какой? (перед существительным).",
    "a": [
      "qué",
      "que"
    ],
    "e": "Правильный вариант: ¿qué?."
  },
  {
    "id": "study_questions_que_ru",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿qué?.",
    "a": [
      "что",
      "какой",
      "какая",
      "какое",
      "что? какой? (перед существительным)"
    ],
    "e": "¿qué? — что? какой? (перед существительным)."
  },
  {
    "id": "study_questions_que_ctx",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Что ты делаешь?»: ¿___ haces?",
    "a": [
      "qué",
      "que"
    ],
    "e": "¿Qué haces? — Что ты делаешь?"
  },
  {
    "id": "study_questions_quien_es",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кто? кто во множественном числе?.",
    "a": [
      "quién",
      "quien",
      "quiénes",
      "quienes"
    ],
    "e": "Правильный вариант: ¿quién? / ¿quiénes?."
  },
  {
    "id": "study_questions_quien_ru",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿quién? / ¿quiénes?.",
    "a": [
      "кто",
      "кто? кто во множественном числе?"
    ],
    "e": "¿quién? / ¿quiénes? — кто? кто во множественном числе?."
  },
  {
    "id": "study_questions_quien_ctx",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Кто здесь работает?»: ¿___ trabaja aquí?",
    "a": [
      "quién",
      "quien"
    ],
    "e": "¿Quién trabaja aquí? — Кто здесь работает?"
  },
  {
    "id": "study_questions_cual_es",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: который? какой из вариантов?.",
    "a": [
      "cuál",
      "cual",
      "cuáles",
      "cuales"
    ],
    "e": "Правильный вариант: ¿cuál? / ¿cuáles?."
  },
  {
    "id": "study_questions_cual_ru",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿cuál? / ¿cuáles?.",
    "a": [
      "который",
      "какой из вариантов",
      "какой",
      "который? какой из вариантов?"
    ],
    "e": "¿cuál? / ¿cuáles? — который? какой из вариантов?."
  },
  {
    "id": "study_questions_cual_ctx",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Какой ты предпочитаешь?»: ¿___ prefieres?",
    "a": [
      "cuál",
      "cual"
    ],
    "e": "¿Cuál prefieres? — Какой ты предпочитаешь?"
  },
  {
    "id": "study_questions_cuanto_es",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: сколько?.",
    "a": [
      "cuánto",
      "cuanto",
      "cuánta",
      "cuanta",
      "cuántos",
      "cuantos",
      "cuántas",
      "cuantas"
    ],
    "e": "Правильный вариант: ¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?."
  },
  {
    "id": "study_questions_cuanto_ru",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?.",
    "a": [
      "сколько",
      "сколько?"
    ],
    "e": "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas? — сколько?."
  },
  {
    "id": "study_questions_cuanto_ctx",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сколько это стоит?»: ¿___ cuesta?",
    "a": [
      "cuánto",
      "cuanto"
    ],
    "e": "¿Cuánto cuesta? — Сколько это стоит?"
  },
  {
    "id": "study_questions_donde_es",
    "topic": "questions",
    "foodCat": "place",
    "skill": "Вспомни",
    "q": "Переведи на испанский: где?.",
    "a": [
      "dónde",
      "donde"
    ],
    "e": "Правильный вариант: ¿dónde?."
  },
  {
    "id": "study_questions_donde_ru",
    "topic": "questions",
    "foodCat": "place",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿dónde?.",
    "a": [
      "где",
      "где?"
    ],
    "e": "¿dónde? — где?."
  },
  {
    "id": "study_questions_donde_ctx",
    "topic": "questions",
    "foodCat": "place",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Где ты живёшь?»: ¿___ vives?",
    "a": [
      "dónde",
      "donde"
    ],
    "e": "¿Dónde vives? — Где ты живёшь?"
  },
  {
    "id": "study_questions_adonde_es",
    "topic": "questions",
    "foodCat": "place",
    "skill": "Вспомни",
    "q": "Переведи на испанский: куда?.",
    "a": [
      "adónde",
      "adonde",
      "a dónde",
      "a donde"
    ],
    "e": "Правильный вариант: ¿adónde?."
  },
  {
    "id": "study_questions_adonde_ru",
    "topic": "questions",
    "foodCat": "place",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿adónde?.",
    "a": [
      "куда",
      "куда?"
    ],
    "e": "¿adónde? — куда?."
  },
  {
    "id": "study_questions_adonde_ctx",
    "topic": "questions",
    "foodCat": "place",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Куда ты идёшь?»: ¿___ vas?",
    "a": [
      "adónde",
      "adonde",
      "a dónde",
      "a donde"
    ],
    "e": "¿Adónde vas? — Куда ты идёшь?"
  },
  {
    "id": "study_questions_de_donde_es",
    "topic": "questions",
    "foodCat": "place",
    "skill": "Вспомни",
    "q": "Переведи на испанский: откуда?.",
    "a": [
      "de dónde",
      "de donde"
    ],
    "e": "Правильный вариант: ¿de dónde?."
  },
  {
    "id": "study_questions_de_donde_ru",
    "topic": "questions",
    "foodCat": "place",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿de dónde?.",
    "a": [
      "откуда",
      "откуда?"
    ],
    "e": "¿de dónde? — откуда?."
  },
  {
    "id": "study_questions_de_donde_ctx",
    "topic": "questions",
    "foodCat": "place",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Откуда ты?»: ¿___ eres?",
    "a": [
      "de dónde",
      "de donde"
    ],
    "e": "¿De dónde eres? — Откуда ты?"
  },
  {
    "id": "study_questions_cuando_es",
    "topic": "questions",
    "foodCat": "time",
    "skill": "Вспомни",
    "q": "Переведи на испанский: когда?.",
    "a": [
      "cuándo",
      "cuando"
    ],
    "e": "Правильный вариант: ¿cuándo?."
  },
  {
    "id": "study_questions_cuando_ru",
    "topic": "questions",
    "foodCat": "time",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿cuándo?.",
    "a": [
      "когда",
      "когда?"
    ],
    "e": "¿cuándo? — когда?."
  },
  {
    "id": "study_questions_cuando_ctx",
    "topic": "questions",
    "foodCat": "time",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Когда ты работаешь?»: ¿___ es tu cumpleaños?",
    "a": [
      "cuándo",
      "cuando"
    ],
    "e": "¿Cuándo trabajas? — Когда ты работаешь?"
  },
  {
    "id": "study_questions_como_es",
    "topic": "questions",
    "foodCat": "time",
    "skill": "Вспомни",
    "q": "Переведи на испанский: как?.",
    "a": [
      "cómo",
      "como"
    ],
    "e": "Правильный вариант: ¿cómo?."
  },
  {
    "id": "study_questions_como_ru",
    "topic": "questions",
    "foodCat": "time",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿cómo?.",
    "a": [
      "как",
      "как?"
    ],
    "e": "¿cómo? — как?."
  },
  {
    "id": "study_questions_como_ctx",
    "topic": "questions",
    "foodCat": "time",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Как ты?»: ¿___ estás?",
    "a": [
      "cómo",
      "como"
    ],
    "e": "¿Cómo estás? — Как ты?"
  },
  {
    "id": "study_questions_por_que_es",
    "topic": "questions",
    "foodCat": "reason",
    "skill": "Вспомни",
    "q": "Переведи на испанский: почему?.",
    "a": [
      "por qué",
      "por que"
    ],
    "e": "Правильный вариант: ¿por qué?."
  },
  {
    "id": "study_questions_por_que_ru",
    "topic": "questions",
    "foodCat": "reason",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿por qué?.",
    "a": [
      "почему",
      "почему?"
    ],
    "e": "¿por qué? — почему?."
  },
  {
    "id": "study_questions_por_que_ctx",
    "topic": "questions",
    "foodCat": "reason",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Почему ты учишь испанский?»: ¿___ estudias español?",
    "a": [
      "por qué",
      "por que"
    ],
    "e": "¿Por qué estudias español? — Почему ты учишь испанский?"
  },
  {
    "id": "study_questions_para_que_es",
    "topic": "questions",
    "foodCat": "reason",
    "skill": "Вспомни",
    "q": "Переведи на испанский: зачем? для чего?.",
    "a": [
      "para qué",
      "para que"
    ],
    "e": "Правильный вариант: ¿para qué?."
  },
  {
    "id": "study_questions_para_que_ru",
    "topic": "questions",
    "foodCat": "reason",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿para qué?.",
    "a": [
      "зачем",
      "для чего",
      "зачем? для чего?"
    ],
    "e": "¿para qué? — зачем? для чего?."
  },
  {
    "id": "study_questions_para_que_ctx",
    "topic": "questions",
    "foodCat": "reason",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Зачем тебе это нужно?»: ¿___ necesitas esto?",
    "a": [
      "para qué",
      "para que"
    ],
    "e": "¿Para qué necesitas esto? — Зачем тебе это нужно?"
  },
  {
    "id": "study_questions_con_quien_es",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Вспомни",
    "q": "Переведи на испанский: с кем?.",
    "a": [
      "con quién",
      "con quien"
    ],
    "e": "Правильный вариант: ¿con quién?."
  },
  {
    "id": "study_questions_con_quien_ru",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿con quién?.",
    "a": [
      "с кем",
      "с кем?"
    ],
    "e": "¿con quién? — с кем?."
  },
  {
    "id": "study_questions_con_quien_ctx",
    "topic": "questions",
    "foodCat": "basic",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «С кем ты сегодня встречаешься?»: ¿___ quedas hoy?",
    "a": [
      "con quién",
      "con quien"
    ],
    "e": "¿Con quién quedas hoy? — С кем ты сегодня встречаешься?"
  },
  {
    "id": "choice_questions_que",
    "topic": "questions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: что? какой? (перед существительным).",
    "a": [
      "¿qué?"
    ],
    "options": [
      "¿qué?",
      "¿quién? / ¿quiénes?",
      "¿cuál? / ¿cuáles?",
      "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?"
    ],
    "e": "¿qué? — что? какой? (перед существительным)."
  },
  {
    "id": "choice_questions_quien",
    "topic": "questions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кто? кто во множественном числе?.",
    "a": [
      "¿quién? / ¿quiénes?"
    ],
    "options": [
      "¿quién? / ¿quiénes?",
      "¿cuál? / ¿cuáles?",
      "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?",
      "¿con quién?"
    ],
    "e": "¿quién? / ¿quiénes? — кто? кто во множественном числе?."
  },
  {
    "id": "choice_questions_cual",
    "topic": "questions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: который? какой из вариантов?.",
    "a": [
      "¿cuál? / ¿cuáles?"
    ],
    "options": [
      "¿cuál? / ¿cuáles?",
      "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?",
      "¿con quién?",
      "¿qué?"
    ],
    "e": "¿cuál? / ¿cuáles? — который? какой из вариантов?."
  },
  {
    "id": "choice_questions_cuanto",
    "topic": "questions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сколько?.",
    "a": [
      "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?"
    ],
    "options": [
      "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?",
      "¿con quién?",
      "¿qué?",
      "¿quién? / ¿quiénes?"
    ],
    "e": "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas? — сколько?."
  },
  {
    "id": "choice_questions_donde",
    "topic": "questions",
    "foodCat": "place",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: где?.",
    "a": [
      "¿dónde?"
    ],
    "options": [
      "¿dónde?",
      "¿adónde?",
      "¿de dónde?",
      "¿cuándo?"
    ],
    "e": "¿dónde? — где?."
  },
  {
    "id": "choice_questions_adonde",
    "topic": "questions",
    "foodCat": "place",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: куда?.",
    "a": [
      "¿adónde?"
    ],
    "options": [
      "¿adónde?",
      "¿de dónde?",
      "¿cuándo?",
      "¿cómo?"
    ],
    "e": "¿adónde? — куда?."
  },
  {
    "id": "choice_questions_de_donde",
    "topic": "questions",
    "foodCat": "place",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: откуда?.",
    "a": [
      "¿de dónde?"
    ],
    "options": [
      "¿de dónde?",
      "¿cuándo?",
      "¿cómo?",
      "¿por qué?"
    ],
    "e": "¿de dónde? — откуда?."
  },
  {
    "id": "choice_questions_cuando",
    "topic": "questions",
    "foodCat": "time",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: когда?.",
    "a": [
      "¿cuándo?"
    ],
    "options": [
      "¿cuándo?",
      "¿cómo?",
      "¿por qué?",
      "¿para qué?"
    ],
    "e": "¿cuándo? — когда?."
  },
  {
    "id": "choice_questions_como",
    "topic": "questions",
    "foodCat": "time",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: как?.",
    "a": [
      "¿cómo?"
    ],
    "options": [
      "¿cómo?",
      "¿por qué?",
      "¿para qué?",
      "¿con quién?"
    ],
    "e": "¿cómo? — как?."
  },
  {
    "id": "choice_questions_por_que",
    "topic": "questions",
    "foodCat": "reason",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: почему?.",
    "a": [
      "¿por qué?"
    ],
    "options": [
      "¿por qué?",
      "¿para qué?",
      "¿con quién?",
      "¿qué?"
    ],
    "e": "¿por qué? — почему?."
  },
  {
    "id": "choice_questions_para_que",
    "topic": "questions",
    "foodCat": "reason",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: зачем? для чего?.",
    "a": [
      "¿para qué?"
    ],
    "options": [
      "¿para qué?",
      "¿con quién?",
      "¿qué?",
      "¿quién? / ¿quiénes?"
    ],
    "e": "¿para qué? — зачем? для чего?."
  },
  {
    "id": "choice_questions_con_quien",
    "topic": "questions",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: с кем?.",
    "a": [
      "¿con quién?"
    ],
    "options": [
      "¿con quién?",
      "¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?",
      "¿qué?",
      "¿quién? / ¿quiénes?"
    ],
    "e": "¿con quién? — с кем?."
  },
  {
    "id": "audio_questions_que",
    "topic": "questions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Qué haces?",
    "a": [
      "¿Qué haces?"
    ],
    "e": "Что ты делаешь?"
  },
  {
    "id": "audio_questions_quien",
    "topic": "questions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Quién trabaja aquí?",
    "a": [
      "¿Quién trabaja aquí?"
    ],
    "e": "Кто здесь работает?"
  },
  {
    "id": "audio_questions_cual",
    "topic": "questions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Cuál prefieres?",
    "a": [
      "¿Cuál prefieres?"
    ],
    "e": "Какой ты предпочитаешь?"
  },
  {
    "id": "audio_questions_cuanto",
    "topic": "questions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Cuánto cuesta?",
    "a": [
      "¿Cuánto cuesta?"
    ],
    "e": "Сколько это стоит?"
  },
  {
    "id": "audio_questions_donde",
    "topic": "questions",
    "foodCat": "place",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Dónde vives?",
    "a": [
      "¿Dónde vives?"
    ],
    "e": "Где ты живёшь?"
  },
  {
    "id": "audio_questions_adonde",
    "topic": "questions",
    "foodCat": "place",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Adónde vas?",
    "a": [
      "¿Adónde vas?"
    ],
    "e": "Куда ты идёшь?"
  },
  {
    "id": "audio_questions_de_donde",
    "topic": "questions",
    "foodCat": "place",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿De dónde eres?",
    "a": [
      "¿De dónde eres?"
    ],
    "e": "Откуда ты?"
  },
  {
    "id": "audio_questions_cuando",
    "topic": "questions",
    "foodCat": "time",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Cuándo trabajas?",
    "a": [
      "¿Cuándo trabajas?"
    ],
    "e": "Когда ты работаешь?"
  },
  {
    "id": "audio_questions_como",
    "topic": "questions",
    "foodCat": "time",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Cómo estás?",
    "a": [
      "¿Cómo estás?"
    ],
    "e": "Как ты?"
  },
  {
    "id": "audio_questions_por_que",
    "topic": "questions",
    "foodCat": "reason",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Por qué estudias español?",
    "a": [
      "¿Por qué estudias español?"
    ],
    "e": "Почему ты учишь испанский?"
  },
  {
    "id": "audio_questions_para_que",
    "topic": "questions",
    "foodCat": "reason",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Para qué necesitas esto?",
    "a": [
      "¿Para qué necesitas esto?"
    ],
    "e": "Зачем тебе это нужно?"
  },
  {
    "id": "audio_questions_con_quien",
    "topic": "questions",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Con quién quedas hoy?",
    "a": [
      "¿Con quién quedas hoy?"
    ],
    "e": "С кем ты сегодня встречаешься?"
  },
  {
    "id": "order_q_where",
    "topic": "questions",
    "foodCat": "place",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери вопрос: «Где ты работаешь?»",
    "tokens": [
      "¿Dónde",
      "trabajas?"
    ],
    "a": [
      "¿Dónde trabajas?"
    ],
    "e": "Dónde ставится в начале вопроса."
  },
  {
    "id": "order_q_why",
    "topic": "questions",
    "foodCat": "reason",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери вопрос: «Почему ты учишь испанский?»",
    "tokens": [
      "¿Por",
      "qué",
      "estudias",
      "español?"
    ],
    "a": [
      "¿Por qué estudias español?"
    ],
    "e": "В вопросе por qué пишется раздельно."
  },
  {
    "id": "order_q_with",
    "topic": "questions",
    "foodCat": "basic",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери вопрос: «С кем ты живёшь?»",
    "tokens": [
      "¿Con",
      "quién",
      "vives?"
    ],
    "a": [
      "¿Con quién vives?"
    ],
    "e": "Предлог con стоит перед quién."
  },
  {
    "id": "correct_q_accent",
    "topic": "questions",
    "foodCat": "place",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: ¿Donde vives.",
    "a": [
      "¿Dónde vives?"
    ],
    "e": "В вопросительном dónde нужно ударение."
  },
  {
    "id": "correct_q_spacing",
    "topic": "questions",
    "foodCat": "reason",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: ¿Porqué estudias español?",
    "a": [
      "¿Por qué estudias español?"
    ],
    "e": "Вопросительное por qué пишется раздельно."
  },
  {
    "id": "dialogue_q_reason",
    "topic": "questions",
    "foodCat": "reason",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Закончи диалог: — ¿Por qué estudias español? — Потому что я живу в Мадриде.",
    "a": [
      "Porque vivo en Madrid."
    ],
    "e": "Porque отвечает на вопрос por qué."
  },
  {
    "id": "dialogue_q_destination",
    "topic": "questions",
    "foodCat": "place",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Закончи диалог: — ¿Adónde vas? — Я иду на работу.",
    "a": [
      "Voy al trabajo."
    ],
    "e": "Для направления используется a; a + el = al."
  },
  {
    "id": "compare_porque_question",
    "topic": "questions",
    "foodCat": "reason",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: ¿___ estudias español?",
    "options": [
      "Porque",
      "Por qué",
      "Porqué"
    ],
    "a": [
      "Por qué"
    ],
    "e": "Вопросительное por qué пишется раздельно."
  },
  {
    "id": "sort_auto_questions_0",
    "topic": "questions",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Вопросы» по подходящим колонкам.",
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
        "id": "time",
        "title": "Время и способ"
      },
      {
        "id": "reason",
        "title": "Причина и цель"
      }
    ],
    "sortTokens": [
      {
        "id": "questions_0_basic_que",
        "text": "¿qué?",
        "category": "basic"
      },
      {
        "id": "questions_0_basic_quien",
        "text": "¿quién? / ¿quiénes?",
        "category": "basic"
      },
      {
        "id": "questions_0_basic_cual",
        "text": "¿cuál? / ¿cuáles?",
        "category": "basic"
      },
      {
        "id": "questions_0_place_donde",
        "text": "¿dónde?",
        "category": "place"
      },
      {
        "id": "questions_0_place_adonde",
        "text": "¿adónde?",
        "category": "place"
      },
      {
        "id": "questions_0_place_de_donde",
        "text": "¿de dónde?",
        "category": "place"
      },
      {
        "id": "questions_0_time_cuando",
        "text": "¿cuándo?",
        "category": "time"
      },
      {
        "id": "questions_0_time_como",
        "text": "¿cómo?",
        "category": "time"
      },
      {
        "id": "questions_0_reason_por_que",
        "text": "¿por qué?",
        "category": "reason"
      },
      {
        "id": "questions_0_reason_para_que",
        "text": "¿para qué?",
        "category": "reason"
      }
    ],
    "a": [
      "basic | basic | basic | place | place | place | time | time | reason | reason"
    ],
    "displayAnswer": "Основные: ¿qué?, ¿quién? / ¿quiénes?, ¿cuál? / ¿cuáles? · Место: ¿dónde?, ¿adónde?, ¿de dónde? · Время и способ: ¿cuándo?, ¿cómo? · Причина и цель: ¿por qué?, ¿para qué?",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const questionsTopic = {
  id: "questions",
  title: "Вопросы",
  icon: "?",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
