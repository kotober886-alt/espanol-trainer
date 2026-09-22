/**
 * Время, числа и цены topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "que_hora",
    "cat": "time",
    "word": "¿Qué hora es?",
    "gender": "вопрос",
    "tr": "Который час?",
    "ru": [
      "который час",
      "сколько времени"
    ],
    "answers": [
      "qué hora es",
      "que hora es"
    ],
    "examples": [
      [
        "¿Qué hora es? — Son las tres.",
        "Который час? — Три часа."
      ],
      [
        "Perdona, ¿qué hora es?",
        "Извини, который час?"
      ]
    ],
    "cloze": "¿___ hora es?",
    "clozeAnswers": [
      "qué",
      "que"
    ],
    "meta": {
      "categoryTitle": "Время",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "time_system",
    "cat": "time",
    "word": "Es la una / Son las dos",
    "base": "время",
    "gender": "время и расписание",
    "tr": "как назвать время и сказать, во сколько что-то происходит",
    "table": {
      "headers": [
        "Ситуация",
        "Форма",
        "Пример"
      ],
      "rows": [
        [
          "сейчас час",
          "Es la una",
          "Es la una de la tarde."
        ],
        [
          "сейчас два и больше",
          "Son las…",
          "Son las cinco y media."
        ],
        [
          "в один час",
          "a la una",
          "Comemos a la una."
        ],
        [
          "в два и больше",
          "a las…",
          "Trabajo a las nueve."
        ]
      ]
    },
    "examples": [
      [
        "¿Qué hora es? — Son las tres.",
        "Который час? — Три часа."
      ],
      [
        "La clase empieza a la una.",
        "Занятие начинается в час."
      ]
    ],
    "meta": {
      "categoryTitle": "Время",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "que_fecha",
    "cat": "dates",
    "word": "¿Qué fecha es hoy?",
    "gender": "вопрос о дате",
    "tr": "Какое сегодня число?",
    "ru": [
      "какое сегодня число",
      "какая сегодня дата"
    ],
    "answers": [
      "qué fecha es hoy",
      "que fecha es hoy"
    ],
    "examples": [
      [
        "¿Qué fecha es hoy? — Es 15 de septiembre.",
        "Какое сегодня число? — 15 сентября."
      ],
      [
        "No recuerdo qué fecha es hoy.",
        "Я не помню, какое сегодня число."
      ]
    ],
    "cloze": "¿Qué ___ es hoy?",
    "clozeAnswers": [
      "fecha"
    ],
    "meta": {
      "categoryTitle": "Даты",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "date_pattern",
    "cat": "dates",
    "word": "el 15 de septiembre",
    "gender": "день + de + месяц",
    "tr": "15 сентября",
    "ru": [
      "15 сентября",
      "пятнадцатое сентября"
    ],
    "answers": [
      "el 15 de septiembre",
      "15 de septiembre"
    ],
    "examples": [
      [
        "Mi cita es el 15 de septiembre.",
        "Моя встреча — 15 сентября."
      ],
      [
        "Viajo el 3 de mayo.",
        "Я уезжаю 3 мая."
      ]
    ],
    "cloze": "Mi cita es el 15 ___ septiembre.",
    "clozeAnswers": [
      "de"
    ],
    "meta": {
      "categoryTitle": "Даты",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "year",
    "cat": "dates",
    "word": "en 2026",
    "gender": "год с предлогом en",
    "tr": "в 2026 году",
    "ru": [
      "в 2026 году",
      "в 2026"
    ],
    "answers": [
      "en 2026"
    ],
    "examples": [
      [
        "Vivimos en 2026.",
        "Мы живём в 2026 году."
      ],
      [
        "Empecé el curso en 2026.",
        "Я начала курс в 2026 году."
      ]
    ],
    "cloze": "Empecé el curso ___ 2026.",
    "clozeAnswers": [
      "en"
    ],
    "meta": {
      "categoryTitle": "Даты",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "price_system",
    "cat": "prices",
    "word": "¿Cuánto cuesta / cuestan?",
    "base": "цена",
    "gender": "единственное и множественное число",
    "tr": "сколько стоит / сколько стоят",
    "table": {
      "headers": [
        "Предмет",
        "Форма",
        "Пример"
      ],
      "rows": [
        [
          "один",
          "¿Cuánto cuesta?",
          "¿Cuánto cuesta esta camiseta?"
        ],
        [
          "несколько",
          "¿Cuánto cuestan?",
          "¿Cuánto cuestan estos zapatos?"
        ]
      ]
    },
    "examples": [
      [
        "¿Cuánto cuesta el billete?",
        "Сколько стоит билет?"
      ],
      [
        "Las entradas cuestan veinte euros.",
        "Билеты стоят двадцать евро."
      ]
    ],
    "meta": {
      "categoryTitle": "Цены",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "euros",
    "cat": "prices",
    "word": "euros / céntimos",
    "gender": "деньги",
    "tr": "евро / центы",
    "ru": [
      "евро центы",
      "евро",
      "центы"
    ],
    "answers": [
      "euros céntimos",
      "euros",
      "céntimos",
      "centimos"
    ],
    "examples": [
      [
        "Cuesta diez euros.",
        "Это стоит десять евро."
      ],
      [
        "Son dos euros con cincuenta céntimos.",
        "Это два евро пятьдесят центов."
      ]
    ],
    "cloze": "Cuesta diez ___.",
    "clozeAnswers": [
      "euros"
    ],
    "meta": {
      "categoryTitle": "Цены",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "muy",
    "cat": "quantity",
    "word": "muy + прилагательное / наречие",
    "gender": "не изменяется",
    "tr": "очень",
    "ru": [
      "очень"
    ],
    "answers": [
      "muy"
    ],
    "examples": [
      [
        "El libro es muy interesante.",
        "Книга очень интересная."
      ],
      [
        "Habla muy rápido.",
        "Она говорит очень быстро."
      ]
    ],
    "cloze": "El libro es ___ interesante.",
    "clozeAnswers": [
      "muy"
    ],
    "meta": {
      "categoryTitle": "Количество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "mucho_system",
    "cat": "quantity",
    "word": "mucho / mucha / muchos / muchas",
    "base": "mucho",
    "gender": "согласуется с существительным",
    "tr": "много",
    "table": {
      "headers": [
        "Род и число",
        "Форма",
        "Пример"
      ],
      "rows": [
        [
          "муж. · ед.",
          "mucho",
          "mucho trabajo"
        ],
        [
          "жен. · ед.",
          "mucha",
          "mucha agua"
        ],
        [
          "муж. · мн.",
          "muchos",
          "muchos parques"
        ],
        [
          "жен. · мн.",
          "muchas",
          "muchas cosas"
        ]
      ]
    },
    "examples": [
      [
        "Tengo mucho trabajo.",
        "У меня много работы."
      ],
      [
        "Hay muchas tiendas.",
        "Здесь много магазинов."
      ]
    ],
    "meta": {
      "categoryTitle": "Количество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "poco",
    "cat": "quantity",
    "word": "poco / poca / pocos / pocas",
    "gender": "согласуется с существительным",
    "tr": "мало, немного",
    "ru": [
      "мало",
      "немного"
    ],
    "answers": [
      "poco",
      "poca",
      "pocos",
      "pocas"
    ],
    "examples": [
      [
        "Tengo poco tiempo.",
        "У меня мало времени."
      ],
      [
        "Hay pocas personas.",
        "Здесь мало людей."
      ]
    ],
    "cloze": "Tengo ___ tiempo.",
    "clozeAnswers": [
      "poco"
    ],
    "meta": {
      "categoryTitle": "Количество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "bastante",
    "cat": "quantity",
    "word": "bastante / bastantes",
    "gender": "достаточно, довольно",
    "tr": "достаточно; довольно",
    "ru": [
      "достаточно",
      "довольно"
    ],
    "answers": [
      "bastante",
      "bastantes"
    ],
    "examples": [
      [
        "Tenemos bastante comida.",
        "У нас достаточно еды."
      ],
      [
        "Es bastante fácil.",
        "Это довольно легко."
      ]
    ],
    "cloze": "Tenemos ___ comida.",
    "clozeAnswers": [
      "bastante"
    ],
    "meta": {
      "categoryTitle": "Количество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "demasiado",
    "cat": "quantity",
    "word": "demasiado / demasiada / demasiados / demasiadas",
    "gender": "избыточное количество",
    "tr": "слишком много",
    "ru": [
      "слишком много"
    ],
    "answers": [
      "demasiado",
      "demasiada",
      "demasiados",
      "demasiadas"
    ],
    "examples": [
      [
        "Hay demasiado ruido.",
        "Здесь слишком много шума."
      ],
      [
        "Tengo demasiadas tareas.",
        "У меня слишком много заданий."
      ]
    ],
    "cloze": "Hay ___ ruido.",
    "clozeAnswers": [
      "demasiado"
    ],
    "meta": {
      "categoryTitle": "Количество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_practical_que_hora_es",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Вспомни",
    "q": "Переведи на испанский: Который час?.",
    "a": [
      "qué hora es",
      "que hora es"
    ],
    "e": "Правильный вариант: ¿Qué hora es?."
  },
  {
    "id": "study_practical_que_hora_ru",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿Qué hora es?.",
    "a": [
      "который час",
      "сколько времени",
      "Который час?"
    ],
    "e": "¿Qué hora es? — Который час?."
  },
  {
    "id": "study_practical_que_hora_ctx",
    "topic": "practical",
    "foodCat": "time",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Который час? — Три часа.»: ¿___ hora es?",
    "a": [
      "qué",
      "que"
    ],
    "e": "¿Qué hora es? — Son las tres. — Который час? — Три часа."
  },
  {
    "id": "study_practical_es_la_una_es",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Вспомни",
    "q": "Переведи на испанский: Сейчас час..",
    "a": [
      "es la una"
    ],
    "e": "Правильный вариант: Es la una.."
  },
  {
    "id": "study_practical_es_la_una_ru",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Узнай",
    "q": "Переведи на русский: Es la una..",
    "a": [
      "сейчас час",
      "один час",
      "час",
      "Сейчас час."
    ],
    "e": "Es la una. — Сейчас час.."
  },
  {
    "id": "study_practical_es_la_una_ctx",
    "topic": "practical",
    "foodCat": "time",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сейчас час дня.»: ___ la una.",
    "a": [
      "es"
    ],
    "e": "Es la una de la tarde. — Сейчас час дня."
  },
  {
    "id": "study_practical_son_las_es",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Вспомни",
    "q": "Переведи на испанский: Сейчас … часа..",
    "a": [
      "son las"
    ],
    "e": "Правильный вариант: Son las…."
  },
  {
    "id": "study_practical_son_las_ru",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Узнай",
    "q": "Переведи на русский: Son las….",
    "a": [
      "сейчас часа",
      "сейчас часов",
      "Сейчас … часа."
    ],
    "e": "Son las… — Сейчас … часа.."
  },
  {
    "id": "study_practical_son_las_ctx",
    "topic": "practical",
    "foodCat": "time",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сейчас половина шестого.»: ___ las cinco.",
    "a": [
      "son"
    ],
    "e": "Son las cinco y media. — Сейчас половина шестого."
  },
  {
    "id": "study_practical_a_las_es",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Вспомни",
    "q": "Переведи на испанский: в час / в два часа.",
    "a": [
      "a la una",
      "a las dos",
      "a la",
      "a las"
    ],
    "e": "Правильный вариант: a la una / a las dos."
  },
  {
    "id": "study_practical_a_las_ru",
    "topic": "practical",
    "foodCat": "time",
    "skill": "Узнай",
    "q": "Переведи на русский: a la una / a las dos.",
    "a": [
      "в час",
      "в два часа",
      "в час / в два часа"
    ],
    "e": "a la una / a las dos — в час / в два часа."
  },
  {
    "id": "study_practical_a_las_ctx",
    "topic": "practical",
    "foodCat": "time",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я начинаю работать в девять.»: Trabajo ___ nueve.",
    "a": [
      "a las"
    ],
    "e": "Trabajo a las nueve. — Я начинаю работать в девять."
  },
  {
    "id": "study_practical_que_fecha_es",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "Вспомни",
    "q": "Переведи на испанский: Какое сегодня число?.",
    "a": [
      "qué fecha es hoy",
      "que fecha es hoy"
    ],
    "e": "Правильный вариант: ¿Qué fecha es hoy?."
  },
  {
    "id": "study_practical_que_fecha_ru",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿Qué fecha es hoy?.",
    "a": [
      "какое сегодня число",
      "какая сегодня дата",
      "Какое сегодня число?"
    ],
    "e": "¿Qué fecha es hoy? — Какое сегодня число?."
  },
  {
    "id": "study_practical_que_fecha_ctx",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Какое сегодня число? — 15 сентября.»: ¿Qué ___ es hoy?",
    "a": [
      "fecha"
    ],
    "e": "¿Qué fecha es hoy? — Es 15 de septiembre. — Какое сегодня число? — 15 сентября."
  },
  {
    "id": "study_practical_date_pattern_es",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "Вспомни",
    "q": "Переведи на испанский: 15 сентября.",
    "a": [
      "el 15 de septiembre",
      "15 de septiembre"
    ],
    "e": "Правильный вариант: el 15 de septiembre."
  },
  {
    "id": "study_practical_date_pattern_ru",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "Узнай",
    "q": "Переведи на русский: el 15 de septiembre.",
    "a": [
      "15 сентября",
      "пятнадцатое сентября"
    ],
    "e": "el 15 de septiembre — 15 сентября."
  },
  {
    "id": "study_practical_date_pattern_ctx",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Моя встреча — 15 сентября.»: Mi cita es el 15 ___ septiembre.",
    "a": [
      "de"
    ],
    "e": "Mi cita es el 15 de septiembre. — Моя встреча — 15 сентября."
  },
  {
    "id": "study_practical_year_es",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "Вспомни",
    "q": "Переведи на испанский: в 2026 году.",
    "a": [
      "en 2026"
    ],
    "e": "Правильный вариант: en 2026."
  },
  {
    "id": "study_practical_year_ru",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "Узнай",
    "q": "Переведи на русский: en 2026.",
    "a": [
      "в 2026 году",
      "в 2026"
    ],
    "e": "en 2026 — в 2026 году."
  },
  {
    "id": "study_practical_year_ctx",
    "topic": "practical",
    "foodCat": "dates",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы живём в 2026 году.»: Empecé el curso ___ 2026.",
    "a": [
      "en"
    ],
    "e": "Vivimos en 2026. — Мы живём в 2026 году."
  },
  {
    "id": "study_practical_cuanto_cuesta_es",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "Вспомни",
    "q": "Переведи на испанский: Сколько это стоит?.",
    "a": [
      "cuánto cuesta",
      "cuanto cuesta"
    ],
    "e": "Правильный вариант: ¿Cuánto cuesta?."
  },
  {
    "id": "study_practical_cuanto_cuesta_ru",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿Cuánto cuesta?.",
    "a": [
      "сколько это стоит",
      "сколько стоит",
      "Сколько это стоит?"
    ],
    "e": "¿Cuánto cuesta? — Сколько это стоит?."
  },
  {
    "id": "study_practical_cuanto_cuesta_ctx",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сколько стоит эта футболка?»: ¿Cuánto ___ esta camiseta?",
    "a": [
      "cuesta"
    ],
    "e": "¿Cuánto cuesta esta camiseta? — Сколько стоит эта футболка?"
  },
  {
    "id": "study_practical_cuanto_cuestan_es",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "Вспомни",
    "q": "Переведи на испанский: Сколько они стоят?.",
    "a": [
      "cuánto cuestan",
      "cuanto cuestan"
    ],
    "e": "Правильный вариант: ¿Cuánto cuestan?."
  },
  {
    "id": "study_practical_cuanto_cuestan_ru",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "Узнай",
    "q": "Переведи на русский: ¿Cuánto cuestan?.",
    "a": [
      "сколько они стоят",
      "сколько стоят",
      "Сколько они стоят?"
    ],
    "e": "¿Cuánto cuestan? — Сколько они стоят?."
  },
  {
    "id": "study_practical_cuanto_cuestan_ctx",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сколько стоят эти туфли?»: ¿Cuánto ___ estos zapatos?",
    "a": [
      "cuestan"
    ],
    "e": "¿Cuánto cuestan estos zapatos? — Сколько стоят эти туфли?"
  },
  {
    "id": "study_practical_euros_es",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "Вспомни",
    "q": "Переведи на испанский: евро / центы.",
    "a": [
      "euros céntimos",
      "euros",
      "céntimos",
      "centimos"
    ],
    "e": "Правильный вариант: euros / céntimos."
  },
  {
    "id": "study_practical_euros_ru",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "Узнай",
    "q": "Переведи на русский: euros / céntimos.",
    "a": [
      "евро центы",
      "евро",
      "центы",
      "евро / центы"
    ],
    "e": "euros / céntimos — евро / центы."
  },
  {
    "id": "study_practical_euros_ctx",
    "topic": "practical",
    "foodCat": "prices",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Это стоит десять евро.»: Cuesta diez ___.",
    "a": [
      "euros"
    ],
    "e": "Cuesta diez euros. — Это стоит десять евро."
  },
  {
    "id": "study_practical_muy_es",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Полезное слово",
    "q": "Как сказать по-испански «очень» перед прилагательным или наречием?",
    "a": [
      "muy"
    ],
    "e": "El libro es muy interesante. — Книга очень интересная."
  },
  {
    "id": "study_practical_muy_ru",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Полезное слово",
    "q": "Что означает слово muy?",
    "a": [
      "очень"
    ],
    "e": "muy + прилагательное / наречие — очень."
  },
  {
    "id": "study_practical_muy_ctx",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Книга очень интересная.»: El libro es ___ interesante.",
    "a": [
      "muy"
    ],
    "e": "El libro es muy interesante. — Книга очень интересная."
  },
  {
    "id": "study_practical_mucho_es",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Вспомни",
    "q": "Переведи на испанский: много.",
    "a": [
      "mucho",
      "mucha"
    ],
    "e": "Правильный вариант: mucho / mucha."
  },
  {
    "id": "study_practical_mucho_ru",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Узнай",
    "q": "Переведи на русский: mucho / mucha.",
    "a": [
      "много"
    ],
    "e": "mucho / mucha — много."
  },
  {
    "id": "study_practical_mucho_ctx",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У меня много работы.»: Tengo ___ trabajo.",
    "a": [
      "mucho"
    ],
    "e": "Tengo mucho trabajo. — У меня много работы."
  },
  {
    "id": "study_practical_muchos_es",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Вспомни",
    "q": "Переведи на испанский: много, многие.",
    "a": [
      "muchos",
      "muchas"
    ],
    "e": "Правильный вариант: muchos / muchas."
  },
  {
    "id": "study_practical_muchos_ru",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Узнай",
    "q": "Переведи на русский: muchos / muchas.",
    "a": [
      "много",
      "многие",
      "много, многие"
    ],
    "e": "muchos / muchas — много, многие."
  },
  {
    "id": "study_practical_muchos_ctx",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Здесь много парков.»: Hay ___ parques.",
    "a": [
      "muchos"
    ],
    "e": "Hay muchos parques. — Здесь много парков."
  },
  {
    "id": "study_practical_poco_es",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мало, немного.",
    "a": [
      "poco",
      "poca",
      "pocos",
      "pocas"
    ],
    "e": "Правильный вариант: poco / poca / pocos / pocas."
  },
  {
    "id": "study_practical_poco_ru",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Узнай",
    "q": "Переведи на русский: poco / poca / pocos / pocas.",
    "a": [
      "мало",
      "немного",
      "мало, немного"
    ],
    "e": "poco / poca / pocos / pocas — мало, немного."
  },
  {
    "id": "study_practical_poco_ctx",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У меня мало времени.»: Tengo ___ tiempo.",
    "a": [
      "poco"
    ],
    "e": "Tengo poco tiempo. — У меня мало времени."
  },
  {
    "id": "study_practical_bastante_es",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Вспомни",
    "q": "Переведи на испанский: достаточно; довольно.",
    "a": [
      "bastante",
      "bastantes"
    ],
    "e": "Правильный вариант: bastante / bastantes."
  },
  {
    "id": "study_practical_bastante_ru",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Узнай",
    "q": "Переведи на русский: bastante / bastantes.",
    "a": [
      "достаточно",
      "довольно",
      "достаточно; довольно"
    ],
    "e": "bastante / bastantes — достаточно; довольно."
  },
  {
    "id": "study_practical_bastante_ctx",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У нас достаточно еды.»: Tenemos ___ comida.",
    "a": [
      "bastante"
    ],
    "e": "Tenemos bastante comida. — У нас достаточно еды."
  },
  {
    "id": "study_practical_demasiado_es",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Вспомни",
    "q": "Переведи на испанский: слишком много.",
    "a": [
      "demasiado",
      "demasiada",
      "demasiados",
      "demasiadas"
    ],
    "e": "Правильный вариант: demasiado / demasiada / demasiados / demasiadas."
  },
  {
    "id": "study_practical_demasiado_ru",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "Узнай",
    "q": "Переведи на русский: demasiado / demasiada / demasiados / demasiadas.",
    "a": [
      "слишком много"
    ],
    "e": "demasiado / demasiada / demasiados / demasiadas — слишком много."
  },
  {
    "id": "study_practical_demasiado_ctx",
    "topic": "practical",
    "foodCat": "quantity",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Здесь слишком много шума.»: Hay ___ ruido.",
    "a": [
      "demasiado"
    ],
    "e": "Hay demasiado ruido. — Здесь слишком много шума."
  },
  {
    "id": "choice_practical_que_hora",
    "topic": "practical",
    "foodCat": "time",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Который час?.",
    "a": [
      "¿Qué hora es?"
    ],
    "options": [
      "¿Qué hora es?",
      "Es la una.",
      "Son las…",
      "a la una / a las dos"
    ],
    "e": "¿Qué hora es? — Который час?."
  },
  {
    "id": "choice_practical_es_la_una",
    "topic": "practical",
    "foodCat": "time",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Сейчас час..",
    "a": [
      "Es la una."
    ],
    "options": [
      "Es la una.",
      "Son las…",
      "a la una / a las dos",
      "¿Qué hora es?"
    ],
    "e": "Es la una. — Сейчас час.."
  },
  {
    "id": "choice_practical_son_las",
    "topic": "practical",
    "foodCat": "time",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Сейчас … часа..",
    "a": [
      "Son las…"
    ],
    "options": [
      "Son las…",
      "a la una / a las dos",
      "¿Qué hora es?",
      "Es la una."
    ],
    "e": "Son las… — Сейчас … часа.."
  },
  {
    "id": "choice_practical_a_las",
    "topic": "practical",
    "foodCat": "time",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: в час / в два часа.",
    "a": [
      "a la una / a las dos"
    ],
    "options": [
      "a la una / a las dos",
      "¿Qué hora es?",
      "Es la una.",
      "Son las…"
    ],
    "e": "a la una / a las dos — в час / в два часа."
  },
  {
    "id": "choice_practical_que_fecha",
    "topic": "practical",
    "foodCat": "dates",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Какое сегодня число?.",
    "a": [
      "¿Qué fecha es hoy?"
    ],
    "options": [
      "¿Qué fecha es hoy?",
      "el 15 de septiembre",
      "en 2026",
      "¿Cuánto cuesta?"
    ],
    "e": "¿Qué fecha es hoy? — Какое сегодня число?."
  },
  {
    "id": "choice_practical_date_pattern",
    "topic": "practical",
    "foodCat": "dates",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: 15 сентября.",
    "a": [
      "el 15 de septiembre"
    ],
    "options": [
      "el 15 de septiembre",
      "en 2026",
      "¿Cuánto cuesta?",
      "¿Cuánto cuestan?"
    ],
    "e": "el 15 de septiembre — 15 сентября."
  },
  {
    "id": "choice_practical_year",
    "topic": "practical",
    "foodCat": "dates",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: в 2026 году.",
    "a": [
      "en 2026"
    ],
    "options": [
      "en 2026",
      "¿Cuánto cuesta?",
      "¿Cuánto cuestan?",
      "euros / céntimos"
    ],
    "e": "en 2026 — в 2026 году."
  },
  {
    "id": "choice_practical_cuanto_cuesta",
    "topic": "practical",
    "foodCat": "prices",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Сколько это стоит?.",
    "a": [
      "¿Cuánto cuesta?"
    ],
    "options": [
      "¿Cuánto cuesta?",
      "¿Cuánto cuestan?",
      "euros / céntimos",
      "mucho / mucha"
    ],
    "e": "¿Cuánto cuesta? — Сколько это стоит?."
  },
  {
    "id": "choice_practical_cuanto_cuestan",
    "topic": "practical",
    "foodCat": "prices",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Сколько они стоят?.",
    "a": [
      "¿Cuánto cuestan?"
    ],
    "options": [
      "¿Cuánto cuestan?",
      "euros / céntimos",
      "mucho / mucha",
      "muchos / muchas"
    ],
    "e": "¿Cuánto cuestan? — Сколько они стоят?."
  },
  {
    "id": "choice_practical_euros",
    "topic": "practical",
    "foodCat": "prices",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: евро / центы.",
    "a": [
      "euros / céntimos"
    ],
    "options": [
      "euros / céntimos",
      "mucho / mucha",
      "muchos / muchas",
      "poco / poca / pocos / pocas"
    ],
    "e": "euros / céntimos — евро / центы."
  },
  {
    "id": "choice_practical_mucho",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: много.",
    "a": [
      "mucho / mucha"
    ],
    "options": [
      "mucho / mucha",
      "demasiado / demasiada / demasiados / demasiadas",
      "muchos / muchas",
      "poco / poca / pocos / pocas"
    ],
    "e": "mucho / mucha — много."
  },
  {
    "id": "choice_practical_muchos",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: много, многие.",
    "a": [
      "muchos / muchas"
    ],
    "options": [
      "muchos / muchas",
      "mucho / mucha",
      "poco / poca / pocos / pocas",
      "bastante / bastantes"
    ],
    "e": "muchos / muchas — много, многие."
  },
  {
    "id": "choice_practical_poco",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мало, немного.",
    "a": [
      "poco / poca / pocos / pocas"
    ],
    "options": [
      "poco / poca / pocos / pocas",
      "muchos / muchas",
      "bastante / bastantes",
      "demasiado / demasiada / demasiados / demasiadas"
    ],
    "e": "poco / poca / pocos / pocas — мало, немного."
  },
  {
    "id": "choice_practical_bastante",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: достаточно; довольно.",
    "a": [
      "bastante / bastantes"
    ],
    "options": [
      "bastante / bastantes",
      "poco / poca / pocos / pocas",
      "demasiado / demasiada / demasiados / demasiadas",
      "mucho / mucha"
    ],
    "e": "bastante / bastantes — достаточно; довольно."
  },
  {
    "id": "choice_practical_demasiado",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: слишком много.",
    "a": [
      "demasiado / demasiada / demasiados / demasiadas"
    ],
    "options": [
      "demasiado / demasiada / demasiados / demasiadas",
      "bastante / bastantes",
      "mucho / mucha",
      "muchos / muchas"
    ],
    "e": "demasiado / demasiada / demasiados / demasiadas — слишком много."
  },
  {
    "id": "audio_practical_que_hora",
    "topic": "practical",
    "foodCat": "time",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Qué hora es? — Son las tres.",
    "a": [
      "¿Qué hora es? — Son las tres."
    ],
    "e": "Который час? — Три часа."
  },
  {
    "id": "audio_practical_es_la_una",
    "topic": "practical",
    "foodCat": "time",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Es la una de la tarde.",
    "a": [
      "Es la una de la tarde."
    ],
    "e": "Сейчас час дня."
  },
  {
    "id": "audio_practical_son_las",
    "topic": "practical",
    "foodCat": "time",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Son las cinco y media.",
    "a": [
      "Son las cinco y media."
    ],
    "e": "Сейчас половина шестого."
  },
  {
    "id": "audio_practical_a_las",
    "topic": "practical",
    "foodCat": "time",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Trabajo a las nueve.",
    "a": [
      "Trabajo a las nueve."
    ],
    "e": "Я начинаю работать в девять."
  },
  {
    "id": "audio_practical_que_fecha",
    "topic": "practical",
    "foodCat": "dates",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Qué fecha es hoy? — Es 15 de septiembre.",
    "a": [
      "¿Qué fecha es hoy? — Es 15 de septiembre."
    ],
    "e": "Какое сегодня число? — 15 сентября."
  },
  {
    "id": "audio_practical_date_pattern",
    "topic": "practical",
    "foodCat": "dates",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Mi cita es el 15 de septiembre.",
    "a": [
      "Mi cita es el 15 de septiembre."
    ],
    "e": "Моя встреча — 15 сентября."
  },
  {
    "id": "audio_practical_year",
    "topic": "practical",
    "foodCat": "dates",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vivimos en 2026.",
    "a": [
      "Vivimos en 2026."
    ],
    "e": "Мы живём в 2026 году."
  },
  {
    "id": "audio_practical_cuanto_cuesta",
    "topic": "practical",
    "foodCat": "prices",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Cuánto cuesta esta camiseta?",
    "a": [
      "¿Cuánto cuesta esta camiseta?"
    ],
    "e": "Сколько стоит эта футболка?"
  },
  {
    "id": "audio_practical_cuanto_cuestan",
    "topic": "practical",
    "foodCat": "prices",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Cuánto cuestan estos zapatos?",
    "a": [
      "¿Cuánto cuestan estos zapatos?"
    ],
    "e": "Сколько стоят эти туфли?"
  },
  {
    "id": "audio_practical_euros",
    "topic": "practical",
    "foodCat": "prices",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cuesta diez euros.",
    "a": [
      "Cuesta diez euros."
    ],
    "e": "Это стоит десять евро."
  },
  {
    "id": "audio_practical_muy",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El libro es muy interesante.",
    "a": [
      "El libro es muy interesante."
    ],
    "e": "Книга очень интересная."
  },
  {
    "id": "audio_practical_mucho",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tengo mucho trabajo.",
    "a": [
      "Tengo mucho trabajo."
    ],
    "e": "У меня много работы."
  },
  {
    "id": "audio_practical_muchos",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hay muchos parques.",
    "a": [
      "Hay muchos parques."
    ],
    "e": "Здесь много парков."
  },
  {
    "id": "audio_practical_poco",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tengo poco tiempo.",
    "a": [
      "Tengo poco tiempo."
    ],
    "e": "У меня мало времени."
  },
  {
    "id": "audio_practical_bastante",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tenemos bastante comida.",
    "a": [
      "Tenemos bastante comida."
    ],
    "e": "У нас достаточно еды."
  },
  {
    "id": "audio_practical_demasiado",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hay demasiado ruido.",
    "a": [
      "Hay demasiado ruido."
    ],
    "e": "Здесь слишком много шума."
  },
  {
    "id": "order_pr_time",
    "topic": "practical",
    "foodCat": "time",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Сейчас половина шестого»",
    "tokens": [
      "Son",
      "las",
      "cinco",
      "y",
      "media."
    ],
    "a": [
      "Son las cinco y media."
    ],
    "e": "Для времени после часа используется y media."
  },
  {
    "id": "order_pr_price",
    "topic": "practical",
    "foodCat": "prices",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери вопрос: «Сколько стоят эти туфли?»",
    "tokens": [
      "¿Cuánto",
      "cuestan",
      "estos",
      "zapatos?"
    ],
    "a": [
      "¿Cuánto cuestan estos zapatos?"
    ],
    "e": "Cuestan согласуется с множественным числом."
  },
  {
    "id": "correct_pr_clock",
    "topic": "practical",
    "foodCat": "time",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Es las tres.",
    "a": [
      "Son las tres."
    ],
    "e": "Для двух часов и больше используется son las."
  },
  {
    "id": "correct_pr_amount",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Tengo muy trabajo.",
    "a": [
      "Tengo mucho trabajo."
    ],
    "e": "Muy ставится перед признаком, mucho — с существительным."
  },
  {
    "id": "dialogue_pr_time_reply",
    "topic": "practical",
    "foodCat": "time",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Qué hora es? — Сейчас три часа.",
    "a": [
      "Son las tres."
    ],
    "e": "Для трёх часов используется son las."
  },
  {
    "id": "dialogue_pr_cost_reply",
    "topic": "practical",
    "foodCat": "prices",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Cuánto cuesta? — Это стоит десять евро.",
    "a": [
      "Cuesta diez euros."
    ],
    "e": "Подлежащее можно не повторять."
  },
  {
    "id": "compare_muy_mucho_noun",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: Tengo ___ trabajo.",
    "options": [
      "muy",
      "mucho",
      "muchos"
    ],
    "a": [
      "mucho"
    ],
    "e": "С существительным trabajo используется mucho."
  },
  {
    "id": "compare_muy_mucho_adj",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: Es ___ interesante.",
    "options": [
      "muy",
      "mucho",
      "mucha"
    ],
    "a": [
      "muy"
    ],
    "e": "Перед прилагательным используется muy."
  },
  {
    "id": "ser_estar_hay_birthday_march",
    "topic": "practical",
    "foodCat": "dates",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Mi cumpleaños ___ en marzo.",
    "a": [
      "es"
    ],
    "displayAnswer": "es",
    "e": "Дата события оформляется с ser."
  },
  {
    "id": "sort_auto_practical_0",
    "topic": "practical",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Время, числа и цены» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "time",
        "title": "Время"
      },
      {
        "id": "dates",
        "title": "Даты"
      },
      {
        "id": "prices",
        "title": "Цены"
      },
      {
        "id": "quantity",
        "title": "Количество"
      }
    ],
    "sortTokens": [
      {
        "id": "practical_0_time_que_hora",
        "text": "¿Qué hora es?",
        "category": "time"
      },
      {
        "id": "practical_0_time_es_la_una",
        "text": "Es la una.",
        "category": "time"
      },
      {
        "id": "practical_0_time_son_las",
        "text": "Son las…",
        "category": "time"
      },
      {
        "id": "practical_0_dates_que_fecha",
        "text": "¿Qué fecha es hoy?",
        "category": "dates"
      },
      {
        "id": "practical_0_dates_date_pattern",
        "text": "el 15 de septiembre",
        "category": "dates"
      },
      {
        "id": "practical_0_dates_year",
        "text": "en 2026",
        "category": "dates"
      },
      {
        "id": "practical_0_prices_cuanto_cuesta",
        "text": "¿Cuánto cuesta?",
        "category": "prices"
      },
      {
        "id": "practical_0_prices_cuanto_cuestan",
        "text": "¿Cuánto cuestan?",
        "category": "prices"
      },
      {
        "id": "practical_0_prices_euros",
        "text": "euros / céntimos",
        "category": "prices"
      },
      {
        "id": "practical_0_quantity_muy",
        "text": "muy + прилагательное / наречие",
        "category": "quantity"
      },
      {
        "id": "practical_0_quantity_mucho",
        "text": "mucho / mucha",
        "category": "quantity"
      },
      {
        "id": "practical_0_quantity_muchos",
        "text": "muchos / muchas",
        "category": "quantity"
      }
    ],
    "a": [
      "time | time | time | dates | dates | dates | prices | prices | prices | quantity | quantity | quantity"
    ],
    "displayAnswer": "Время: ¿Qué hora es?, Es la una., Son las… · Даты: ¿Qué fecha es hoy?, el 15 de septiembre, en 2026 · Цены: ¿Cuánto cuesta?, ¿Cuánto cuestan?, euros / céntimos · Количество: muy + прилагательное / наречие, mucho / mucha, muchos / muchas",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  },
  {
    "id": "audio_story_practical_hotel_1",
    "topic": "practical",
    "foodCat": "prices",
    "type": "audio_story_quiz",
    "theme": "hotel",
    "skill": "Аудирование · Правда / Ложь",
    "title": "Аудирование: En la recepción del hotel",
    "image": "assets/images/stories/story_hotel.webp",
    "imageAlt": "Рыжий кот на ресепшн отеля рядом с карточкой-ключом",
    "q": "Прослушай разговор на ресепшн и отметь: правда или ложь.",
    "audioText": "Buenas tardes. Tengo una reserva a nombre de Elena Gómez por tres noches. ¿El desayuno está incluido en el precio? Sí, se sirve de ocho a diez y media en la primera planta. Aquí tiene su tarjeta, la habitación está en el cuarto piso.",
    "statements": [
      {"id":"s1","text":"Бронь оформлена на имя Elena Gómez на три ночи.","isTrue":true,"explanation":"В аудио: «una reserva a nombre de Elena Gómez por tres noches»."},
      {"id":"s2","text":"Завтрак не входит в стоимость.","isTrue":false,"explanation":"На вопрос о включённом завтраке отвечают «Sí», то есть завтрак включён."},
      {"id":"s3","text":"Завтрак подают с восьми до половины одиннадцатого.","isTrue":true,"explanation":"В аудио: «se sirve de ocho a diez y media»."},
      {"id":"s4","text":"Номер находится на первом этаже.","isTrue":false,"explanation":"Номер находится на четвёртом этаже: «la habitación está en el cuarto piso»."}
    ]
  },
  {
    "id": "order_practical_reserve_table",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Я хочу заказать столик на двоих»",
    "tokens": ["Quiero","reservar","una","mesa","para","dos.","somos","por"],
    "a": ["Quiero reservar una mesa para dos."],
    "e": "После quiero используется инфинитив reservar; para dos — «на двоих»."
  },
  {
    "id": "order_practical_no_understand",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Мы не понимаем по-испански»",
    "tokens": ["Nosotros","no","entendemos","español.","habla","bien"],
    "a": ["Nosotros no entendemos español."],
    "e": "С nosotros форма entender в Presente — entendemos; отрицание no ставится перед глаголом."
  },
  {
    "id": "order_practical_blue_shirt_price",
    "topic": "practical",
    "foodCat": "prices",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Сколько стоит эта синяя рубашка?»",
    "tokens": ["¿Cuánto","cuesta","esta","camisa","azul?","paga","este"],
    "a": ["¿Cuánto cuesta esta camisa azul?"],
    "e": "Camisa — женский род: esta camisa; один предмет — cuesta."
  },
  {
    "id": "order_practical_speak_slower",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Можете говорить помедленнее, пожалуйста?»",
    "tokens": ["¿Puede","hablar","más","despacio,","por","favor?","puedo","habla"],
    "a": ["¿Puede hablar más despacio, por favor?"],
    "e": "После puede используется инфинитив hablar; por favor ставится как вежливая просьба."
  },
  {
    "id": "order_practical_hotel_room",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Я хотела бы номер на две ночи»",
    "tokens": ["Quisiera","una","habitación","para","dos","noches.","tengo","por"],
    "a": ["Quisiera una habitación para dos noches."],
    "e": "Quisiera — вежливое «я хотела бы»; para dos noches — на две ночи."
  },
  {
    "id": "fill_practical_gift_para",
    "topic": "practical",
    "foodCat": "prices",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Este regalo es ____ ti.",
    "options": ["para","por","de","con"],
    "a": ["para"],
    "e": "Para используется для адресата или получателя: подарок для тебя."
  },
  {
    "id": "fill_practical_problem_gender",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Tengo un ____ importante que resolver.",
    "options": ["problema","duda","pregunta","situación"],
    "a": ["problema"],
    "e": "El problema — мужского рода, хотя слово оканчивается на -a: un problema importante."
  },
  {
    "id": "fill_practical_because_tired",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Hoy no puedo salir ____ estoy muy cansado.",
    "options": ["porque","por qué","para","pero"],
    "a": ["porque"],
    "e": "Porque без ударения и пробела вводит причину: «потому что я очень устал»."
  },
  {
    "id": "fill_practical_hotel_purpose",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Vamos al hotel ____ dejar las maletas.",
    "options": ["para","por","porque","de"],
    "a": ["para"],
    "e": "Para + infinitivo выражает цель: идём в отель, чтобы оставить чемоданы."
  },
  {
    "id": "fill_practical_walk_por",
    "topic": "practical",
    "foodCat": "quantity",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Caminamos ____ el centro durante una hora.",
    "options": ["por","para","a","con"],
    "a": ["por"],
    "e": "Por используется для движения по пространству: caminar por el centro."
  }
];

export const practicalTopic = {
  id: "practical",
  title: "Время, числа и цены",
  icon: "#",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
