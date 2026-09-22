/**
 * Gustar и похожие topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "attitude_scale",
    "cat": "positive",
    "word": "От «обожаю» до «ненавижу»",
    "base": "шкала отношения",
    "gender": "быстрая шкала",
    "tr": "выбери выражение по силе отношения",
    "table": {
      "headers": [
        "Отношение",
        "Испанский",
        "Значение"
      ],
      "rows": [
        [
          "очень положительное",
          "me encanta / me fascina",
          "обожаю / я в восторге"
        ],
        [
          "положительное",
          "me gusta",
          "мне нравится"
        ],
        [
          "нейтральное",
          "me interesa",
          "мне интересно"
        ],
        [
          "безразличное",
          "me da igual / no me importa",
          "мне всё равно"
        ],
        [
          "отрицательное",
          "no me gusta / me molesta",
          "не нравится / раздражает"
        ],
        [
          "очень отрицательное",
          "no lo soporto / lo odio",
          "не выношу / ненавижу"
        ]
      ]
    },
    "examples": [
      [
        "Me encanta viajar, pero me da igual el destino.",
        "Я обожаю путешествовать, но направление мне неважно."
      ],
      [
        "No soporto el ruido; lo odio.",
        "Я не выношу шум; я его ненавижу."
      ]
    ],
    "meta": {
      "categoryTitle": "Нравится",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "gustar_system",
    "cat": "positive",
    "word": "gustar",
    "base": "gustar",
    "gender": "конструкция типа gustar",
    "tr": "нравиться",
    "table": {
      "headers": [
        "Кому",
        "Один предмет / действие",
        "Несколько предметов"
      ],
      "rows": [
        [
          "мне",
          "me gusta",
          "me gustan"
        ],
        [
          "тебе",
          "te gusta",
          "te gustan"
        ],
        [
          "ему / ей / Вам",
          "le gusta",
          "le gustan"
        ],
        [
          "нам",
          "nos gusta",
          "nos gustan"
        ],
        [
          "вам · vosotros",
          "os gusta",
          "os gustan"
        ],
        [
          "им / Вам",
          "les gusta",
          "les gustan"
        ]
      ]
    },
    "examples": [
      [
        "Me gusta el café, pero me gustan más los postres.",
        "Мне нравится кофе, но десерты нравятся больше."
      ],
      [
        "A ellos les gusta viajar y les gustan los viajes largos.",
        "Им нравится путешествовать и нравятся долгие поездки."
      ]
    ],
    "meta": {
      "categoryTitle": "Нравится",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "encantar_system",
    "cat": "positive",
    "word": "encantar",
    "base": "encantar",
    "gender": "конструкция типа gustar",
    "tr": "очень нравиться, обожать",
    "table": {
      "headers": [
        "Кому",
        "Один предмет / действие",
        "Несколько предметов"
      ],
      "rows": [
        [
          "мне",
          "me encanta",
          "me encantan"
        ],
        [
          "тебе",
          "te encanta",
          "te encantan"
        ],
        [
          "ему / ей / Вам",
          "le encanta",
          "le encantan"
        ],
        [
          "нам",
          "nos encanta",
          "nos encantan"
        ],
        [
          "вам · vosotros",
          "os encanta",
          "os encantan"
        ],
        [
          "им / Вам",
          "les encanta",
          "les encantan"
        ]
      ]
    },
    "examples": [
      [
        "Me encanta esta canción.",
        "Я обожаю эту песню."
      ],
      [
        "Nos encantan los viajes.",
        "Мы обожаем путешествия."
      ]
    ],
    "meta": {
      "categoryTitle": "Нравится",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "fascinar_system",
    "cat": "positive",
    "word": "fascinar",
    "base": "fascinar",
    "gender": "конструкция типа gustar",
    "tr": "восхищать, очень увлекать",
    "table": {
      "headers": [
        "Кому",
        "Один предмет / действие",
        "Несколько предметов"
      ],
      "rows": [
        [
          "мне",
          "me fascina",
          "me fascinan"
        ],
        [
          "тебе",
          "te fascina",
          "te fascinan"
        ],
        [
          "ему / ей / Вам",
          "le fascina",
          "le fascinan"
        ],
        [
          "нам",
          "nos fascina",
          "nos fascinan"
        ],
        [
          "вам · vosotros",
          "os fascina",
          "os fascinan"
        ],
        [
          "им / Вам",
          "les fascina",
          "les fascinan"
        ]
      ]
    },
    "examples": [
      [
        "Me fascina la fotografía.",
        "Я в восторге от фотографии."
      ],
      [
        "Les fascinan otras culturas.",
        "Их восхищают другие культуры."
      ]
    ],
    "meta": {
      "categoryTitle": "Нравится",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "preferir_system",
    "cat": "positive",
    "word": "preferir",
    "base": "preferir",
    "gender": "обычный глагол · e → ie",
    "tr": "предпочитать",
    "table": {
      "headers": [
        "Лицо",
        "Форма"
      ],
      "rows": [
        [
          "yo",
          "prefiero"
        ],
        [
          "tú",
          "prefieres"
        ],
        [
          "él / ella / usted",
          "prefiere"
        ],
        [
          "nosotros / nosotras",
          "preferimos"
        ],
        [
          "vosotros / vosotras",
          "preferís"
        ],
        [
          "ellos / ellas / ustedes",
          "prefieren"
        ]
      ]
    },
    "examples": [
      [
        "Prefiero el té al café.",
        "Я предпочитаю чай кофе."
      ],
      [
        "Preferimos viajar en tren.",
        "Мы предпочитаем путешествовать на поезде."
      ]
    ],
    "meta": {
      "categoryTitle": "Нравится",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "interesar_system",
    "cat": "neutral",
    "word": "interesar",
    "base": "interesar",
    "gender": "конструкция типа gustar",
    "tr": "интересовать",
    "table": {
      "headers": [
        "Кому",
        "Один предмет / действие",
        "Несколько предметов"
      ],
      "rows": [
        [
          "мне",
          "me interesa",
          "me interesan"
        ],
        [
          "тебе",
          "te interesa",
          "te interesan"
        ],
        [
          "ему / ей / Вам",
          "le interesa",
          "le interesan"
        ],
        [
          "нам",
          "nos interesa",
          "nos interesan"
        ],
        [
          "вам · vosotros",
          "os interesa",
          "os interesan"
        ],
        [
          "им / Вам",
          "les interesa",
          "les interesan"
        ]
      ]
    },
    "examples": [
      [
        "Me interesa el arte.",
        "Меня интересует искусство."
      ],
      [
        "Le interesan los idiomas.",
        "Его интересуют языки."
      ]
    ],
    "meta": {
      "categoryTitle": "Интерес / безразличие",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "importar_system",
    "cat": "neutral",
    "word": "importar",
    "base": "importar",
    "gender": "конструкция типа gustar",
    "tr": "иметь значение, быть важным",
    "table": {
      "headers": [
        "Кому",
        "Один предмет / действие",
        "Несколько предметов"
      ],
      "rows": [
        [
          "мне",
          "me importa",
          "me importan"
        ],
        [
          "тебе",
          "te importa",
          "te importan"
        ],
        [
          "ему / ей / Вам",
          "le importa",
          "le importan"
        ],
        [
          "нам",
          "nos importa",
          "nos importan"
        ],
        [
          "вам · vosotros",
          "os importa",
          "os importan"
        ],
        [
          "им / Вам",
          "les importa",
          "les importan"
        ]
      ]
    },
    "examples": [
      [
        "Me importa tu opinión.",
        "Мне важно твоё мнение."
      ],
      [
        "No le importan los comentarios.",
        "Ему безразличны комментарии."
      ]
    ],
    "meta": {
      "categoryTitle": "Интерес / безразличие",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "dar_igual_system",
    "cat": "neutral",
    "word": "dar igual",
    "base": "dar igual",
    "gender": "конструкция типа gustar",
    "tr": "быть безразличным; быть всё равно",
    "table": {
      "headers": [
        "Кому",
        "Один вопрос / действие",
        "Несколько вещей"
      ],
      "rows": [
        [
          "мне",
          "me da igual",
          "me dan igual"
        ],
        [
          "тебе",
          "te da igual",
          "te dan igual"
        ],
        [
          "ему / ей / Вам",
          "le da igual",
          "le dan igual"
        ],
        [
          "нам",
          "nos da igual",
          "nos dan igual"
        ],
        [
          "вам · vosotros",
          "os da igual",
          "os dan igual"
        ],
        [
          "им / Вам",
          "les da igual",
          "les dan igual"
        ]
      ]
    },
    "examples": [
      [
        "Me da igual el color.",
        "Мне безразличен цвет."
      ],
      [
        "Me dan igual las marcas.",
        "Мне безразличны бренды."
      ]
    ],
    "meta": {
      "categoryTitle": "Интерес / безразличие",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "molestar_system",
    "cat": "negative",
    "word": "molestar",
    "base": "molestar",
    "gender": "конструкция типа gustar",
    "tr": "мешать, раздражать",
    "table": {
      "headers": [
        "Кому",
        "Один предмет / действие",
        "Несколько предметов"
      ],
      "rows": [
        [
          "мне",
          "me molesta",
          "me molestan"
        ],
        [
          "тебе",
          "te molesta",
          "te molestan"
        ],
        [
          "ему / ей / Вам",
          "le molesta",
          "le molestan"
        ],
        [
          "нам",
          "nos molesta",
          "nos molestan"
        ],
        [
          "вам · vosotros",
          "os molesta",
          "os molestan"
        ],
        [
          "им / Вам",
          "les molesta",
          "les molestan"
        ]
      ]
    },
    "examples": [
      [
        "Me molesta el ruido.",
        "Мне мешает шум."
      ],
      [
        "¿Te molestan las luces?",
        "Тебя раздражает свет?"
      ]
    ],
    "meta": {
      "categoryTitle": "Не нравится",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "aburrir_system",
    "cat": "negative",
    "word": "aburrir",
    "base": "aburrir",
    "gender": "конструкция типа gustar",
    "tr": "наводить скуку, быть скучным",
    "table": {
      "headers": [
        "Кому",
        "Один предмет / действие",
        "Несколько предметов"
      ],
      "rows": [
        [
          "мне",
          "me aburre",
          "me aburren"
        ],
        [
          "тебе",
          "te aburre",
          "te aburren"
        ],
        [
          "ему / ей / Вам",
          "le aburre",
          "le aburren"
        ],
        [
          "нам",
          "nos aburre",
          "nos aburren"
        ],
        [
          "вам · vosotros",
          "os aburre",
          "os aburren"
        ],
        [
          "им / Вам",
          "les aburre",
          "les aburren"
        ]
      ]
    },
    "examples": [
      [
        "Me aburre esta película.",
        "Этот фильм мне скучен."
      ],
      [
        "Nos aburren las reuniones largas.",
        "Долгие собрания навевают на нас скуку."
      ]
    ],
    "meta": {
      "categoryTitle": "Не нравится",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "odiar_system",
    "cat": "negative",
    "word": "odiar",
    "base": "odiar",
    "gender": "обычный глагол",
    "tr": "ненавидеть",
    "table": {
      "headers": [
        "Лицо",
        "Форма"
      ],
      "rows": [
        [
          "yo",
          "odio"
        ],
        [
          "tú",
          "odias"
        ],
        [
          "él / ella / usted",
          "odia"
        ],
        [
          "nosotros / nosotras",
          "odiamos"
        ],
        [
          "vosotros / vosotras",
          "odiáis"
        ],
        [
          "ellos / ellas / ustedes",
          "odian"
        ]
      ]
    },
    "examples": [
      [
        "Odio levantarme temprano.",
        "Я ненавижу рано вставать."
      ],
      [
        "Ella odia el ruido.",
        "Она ненавидит шум."
      ]
    ],
    "meta": {
      "categoryTitle": "Не нравится",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "detestar_system",
    "cat": "negative",
    "word": "detestar",
    "base": "detestar",
    "gender": "обычный глагол",
    "tr": "терпеть не мочь, ненавидеть",
    "table": {
      "headers": [
        "Лицо",
        "Форма"
      ],
      "rows": [
        [
          "yo",
          "detesto"
        ],
        [
          "tú",
          "detestas"
        ],
        [
          "él / ella / usted",
          "detesta"
        ],
        [
          "nosotros / nosotras",
          "detestamos"
        ],
        [
          "vosotros / vosotras",
          "detestáis"
        ],
        [
          "ellos / ellas / ustedes",
          "detestan"
        ]
      ]
    },
    "examples": [
      [
        "Detesto esperar.",
        "Я терпеть не могу ждать."
      ],
      [
        "Detestamos la comida fría.",
        "Мы терпеть не можем холодную еду."
      ]
    ],
    "meta": {
      "categoryTitle": "Не нравится",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "no_soportar_system",
    "cat": "negative",
    "word": "no soportar",
    "base": "soportar",
    "gender": "обычный глагол с отрицанием",
    "tr": "не выносить, не терпеть",
    "table": {
      "headers": [
        "Лицо",
        "Форма"
      ],
      "rows": [
        [
          "yo",
          "no soporto"
        ],
        [
          "tú",
          "no soportas"
        ],
        [
          "él / ella / usted",
          "no soporta"
        ],
        [
          "nosotros / nosotras",
          "no soportamos"
        ],
        [
          "vosotros / vosotras",
          "no soportáis"
        ],
        [
          "ellos / ellas / ustedes",
          "no soportan"
        ]
      ]
    },
    "examples": [
      [
        "No soporto el calor.",
        "Я не выношу жару."
      ],
      [
        "No soportamos las mentiras.",
        "Мы не терпим ложь."
      ]
    ],
    "meta": {
      "categoryTitle": "Не нравится",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "doler_system",
    "cat": "sensation",
    "word": "doler",
    "base": "doler",
    "gender": "конструкция типа gustar",
    "tr": "болеть, причинять боль",
    "table": {
      "headers": [
        "Кому",
        "Одна часть тела",
        "Несколько частей тела"
      ],
      "rows": [
        [
          "мне",
          "me duele",
          "me duelen"
        ],
        [
          "тебе",
          "te duele",
          "te duelen"
        ],
        [
          "ему / ей / Вам",
          "le duele",
          "le duelen"
        ],
        [
          "нам",
          "nos duele",
          "nos duelen"
        ],
        [
          "вам · vosotros",
          "os duele",
          "os duelen"
        ],
        [
          "им / Вам",
          "les duele",
          "les duelen"
        ]
      ]
    },
    "examples": [
      [
        "Me duele la cabeza.",
        "У меня болит голова."
      ],
      [
        "Me duelen los ojos.",
        "У меня болят глаза."
      ]
    ],
    "meta": {
      "categoryTitle": "Ощущения / люди",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "caer_bien_system",
    "cat": "sensation",
    "word": "caer bien",
    "base": "caer bien",
    "gender": "о симпатии к людям",
    "tr": "нравиться как человек",
    "table": {
      "headers": [
        "Кому",
        "Один человек",
        "Несколько людей"
      ],
      "rows": [
        [
          "мне",
          "me cae bien",
          "me caen bien"
        ],
        [
          "тебе",
          "te cae bien",
          "te caen bien"
        ],
        [
          "ему / ей / Вам",
          "le cae bien",
          "le caen bien"
        ],
        [
          "нам",
          "nos cae bien",
          "nos caen bien"
        ],
        [
          "вам · vosotros",
          "os cae bien",
          "os caen bien"
        ],
        [
          "им / Вам",
          "les cae bien",
          "les caen bien"
        ]
      ]
    },
    "examples": [
      [
        "Me cae bien tu amiga.",
        "Мне нравится твоя подруга как человек."
      ],
      [
        "Nos caen bien los vecinos.",
        "Нам симпатичны соседи."
      ]
    ],
    "meta": {
      "categoryTitle": "Ощущения / люди",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "caer_mal_system",
    "cat": "sensation",
    "word": "caer mal",
    "base": "caer mal",
    "gender": "об антипатии к людям",
    "tr": "не нравиться как человек",
    "table": {
      "headers": [
        "Кому",
        "Один человек",
        "Несколько людей"
      ],
      "rows": [
        [
          "мне",
          "me cae mal",
          "me caen mal"
        ],
        [
          "тебе",
          "te cae mal",
          "te caen mal"
        ],
        [
          "ему / ей / Вам",
          "le cae mal",
          "le caen mal"
        ],
        [
          "нам",
          "nos cae mal",
          "nos caen mal"
        ],
        [
          "вам · vosotros",
          "os cae mal",
          "os caen mal"
        ],
        [
          "им / Вам",
          "les cae mal",
          "les caen mal"
        ]
      ]
    },
    "examples": [
      [
        "Me cae mal ese compañero.",
        "Мне неприятен этот коллега."
      ],
      [
        "Les caen mal los vecinos.",
        "Им не нравятся соседи."
      ]
    ],
    "meta": {
      "categoryTitle": "Ощущения / люди",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_gustar_me_gusta_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мне нравится.",
    "a": [
      "me gusta"
    ],
    "e": "Правильный вариант: me gusta."
  },
  {
    "id": "study_gustar_me_gusta_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: me gusta.",
    "a": [
      "мне нравится"
    ],
    "e": "me gusta — мне нравится."
  },
  {
    "id": "study_gustar_me_gusta_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне нравится кофе.»: ___ el café.",
    "a": [
      "me gusta"
    ],
    "e": "Me gusta el café. — Мне нравится кофе."
  },
  {
    "id": "study_gustar_te_gusta_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тебе нравится.",
    "a": [
      "te gusta"
    ],
    "e": "Правильный вариант: te gusta."
  },
  {
    "id": "study_gustar_te_gusta_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: te gusta.",
    "a": [
      "тебе нравится"
    ],
    "e": "te gusta — тебе нравится."
  },
  {
    "id": "study_gustar_te_gusta_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Тебе нравится Мадрид?»: ¿___ Madrid?",
    "a": [
      "te gusta"
    ],
    "e": "¿Te gusta Madrid? — Тебе нравится Мадрид?"
  },
  {
    "id": "study_gustar_le_gusta_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ему, ей или Вам нравится.",
    "a": [
      "le gusta"
    ],
    "e": "Правильный вариант: le gusta."
  },
  {
    "id": "study_gustar_le_gusta_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: le gusta.",
    "a": [
      "ему нравится",
      "ей нравится",
      "вам нравится",
      "ему, ей или Вам нравится"
    ],
    "e": "le gusta — ему, ей или Вам нравится."
  },
  {
    "id": "study_gustar_le_gusta_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ей нравится танцевать.»: A ella ___ bailar.",
    "a": [
      "le gusta"
    ],
    "e": "A ella le gusta bailar. — Ей нравится танцевать."
  },
  {
    "id": "study_gustar_nos_gusta_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: нам нравится.",
    "a": [
      "nos gusta"
    ],
    "e": "Правильный вариант: nos gusta."
  },
  {
    "id": "study_gustar_nos_gusta_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: nos gusta.",
    "a": [
      "нам нравится"
    ],
    "e": "nos gusta — нам нравится."
  },
  {
    "id": "study_gustar_nos_gusta_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Нам нравится путешествовать.»: ___ viajar.",
    "a": [
      "nos gusta"
    ],
    "e": "Nos gusta viajar. — Нам нравится путешествовать."
  },
  {
    "id": "study_gustar_os_gusta_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вам нравится.",
    "a": [
      "os gusta"
    ],
    "e": "Правильный вариант: os gusta."
  },
  {
    "id": "study_gustar_os_gusta_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: os gusta.",
    "a": [
      "вам нравится"
    ],
    "e": "os gusta — вам нравится."
  },
  {
    "id": "study_gustar_os_gusta_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вам нравится музыка?»: ¿___ la música?",
    "a": [
      "os gusta"
    ],
    "e": "¿Os gusta la música? — Вам нравится музыка?"
  },
  {
    "id": "study_gustar_les_gusta_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: им или вам нравится.",
    "a": [
      "les gusta"
    ],
    "e": "Правильный вариант: les gusta."
  },
  {
    "id": "study_gustar_les_gusta_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: les gusta.",
    "a": [
      "им нравится",
      "вам нравится",
      "им или вам нравится"
    ],
    "e": "les gusta — им или вам нравится."
  },
  {
    "id": "study_gustar_les_gusta_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Им нравится спорт.»: A ellos ___ el deporte.",
    "a": [
      "les gusta"
    ],
    "e": "A ellos les gusta el deporte. — Им нравится спорт."
  },
  {
    "id": "study_gustar_me_gustan_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мне нравятся.",
    "a": [
      "me gustan"
    ],
    "e": "Правильный вариант: me gustan."
  },
  {
    "id": "study_gustar_me_gustan_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: me gustan.",
    "a": [
      "мне нравятся"
    ],
    "e": "me gustan — мне нравятся."
  },
  {
    "id": "study_gustar_me_gustan_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне нравятся книги.»: ___ los libros.",
    "a": [
      "me gustan"
    ],
    "e": "Me gustan los libros. — Мне нравятся книги."
  },
  {
    "id": "study_gustar_no_me_gusta_es",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мне не нравится.",
    "a": [
      "no me gusta"
    ],
    "e": "Правильный вариант: no me gusta."
  },
  {
    "id": "study_gustar_no_me_gusta_ru",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Узнай",
    "q": "Переведи на русский: no me gusta.",
    "a": [
      "мне не нравится"
    ],
    "e": "no me gusta — мне не нравится."
  },
  {
    "id": "study_gustar_no_me_gusta_ctx",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне не нравится рано вставать.»: ___ madrugar.",
    "a": [
      "no me gusta"
    ],
    "e": "No me gusta madrugar. — Мне не нравится рано вставать."
  },
  {
    "id": "study_gustar_encantar_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: очень нравиться, обожать.",
    "a": [
      "encantar"
    ],
    "e": "Правильный вариант: encantar."
  },
  {
    "id": "study_gustar_encantar_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: encantar.",
    "a": [
      "очень нравиться",
      "обожать",
      "очень нравиться, обожать"
    ],
    "e": "encantar — очень нравиться, обожать."
  },
  {
    "id": "study_gustar_encantar_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне очень нравится эта песня.»: Me ___ esta canción.",
    "a": [
      "encanta"
    ],
    "e": "Me encanta esta canción. — Мне очень нравится эта песня."
  },
  {
    "id": "study_gustar_fascinar_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: восхищать, очень увлекать.",
    "a": [
      "fascinar"
    ],
    "e": "Правильный вариант: fascinar."
  },
  {
    "id": "study_gustar_fascinar_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: fascinar.",
    "a": [
      "восхищать",
      "очень увлекать",
      "восхищать, очень увлекать"
    ],
    "e": "fascinar — восхищать, очень увлекать."
  },
  {
    "id": "study_gustar_fascinar_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я в восторге от фотографии.»: Me ___ la fotografía.",
    "a": [
      "fascina"
    ],
    "e": "Me fascina la fotografía. — Я в восторге от фотографии."
  },
  {
    "id": "study_gustar_preferir_es",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Вспомни",
    "q": "Переведи на испанский: предпочитать.",
    "a": [
      "preferir"
    ],
    "e": "Правильный вариант: preferir."
  },
  {
    "id": "study_gustar_preferir_ru",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "Узнай",
    "q": "Переведи на русский: preferir.",
    "a": [
      "предпочитать"
    ],
    "e": "preferir — предпочитать."
  },
  {
    "id": "study_gustar_preferir_ctx",
    "topic": "gustar",
    "foodCat": "positive",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я предпочитаю чай кофе.»: Yo ___ el té.",
    "a": [
      "prefiero"
    ],
    "e": "Prefiero el té al café. — Я предпочитаю чай кофе."
  },
  {
    "id": "study_gustar_interesar_es",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "Вспомни",
    "q": "Переведи на испанский: интересовать.",
    "a": [
      "interesar"
    ],
    "e": "Правильный вариант: interesar."
  },
  {
    "id": "study_gustar_interesar_ru",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "Узнай",
    "q": "Переведи на русский: interesar.",
    "a": [
      "интересовать"
    ],
    "e": "interesar — интересовать."
  },
  {
    "id": "study_gustar_interesar_ctx",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Меня интересует искусство.»: Me ___ el arte.",
    "a": [
      "interesa"
    ],
    "e": "Me interesa el arte. — Меня интересует искусство."
  },
  {
    "id": "study_gustar_importar_es",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "Вспомни",
    "q": "Переведи на испанский: иметь значение, быть важным.",
    "a": [
      "importar"
    ],
    "e": "Правильный вариант: importar."
  },
  {
    "id": "study_gustar_importar_ru",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "Узнай",
    "q": "Переведи на русский: importar.",
    "a": [
      "иметь значение",
      "быть важным",
      "иметь значение, быть важным"
    ],
    "e": "importar — иметь значение, быть важным."
  },
  {
    "id": "study_gustar_importar_ctx",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне важно твоё мнение.»: Me ___ tu opinión.",
    "a": [
      "importa"
    ],
    "e": "Me importa tu opinión. — Мне важно твоё мнение."
  },
  {
    "id": "study_gustar_dar_igual_es",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "Вспомни",
    "q": "Переведи на испанский: быть безразличным; мне всё равно.",
    "a": [
      "dar igual",
      "me da igual"
    ],
    "e": "Правильный вариант: dar igual."
  },
  {
    "id": "study_gustar_dar_igual_ru",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "Узнай",
    "q": "Переведи на русский: dar igual.",
    "a": [
      "быть безразличным",
      "мне всё равно",
      "мне все равно",
      "быть безразличным; мне всё равно"
    ],
    "e": "dar igual — быть безразличным; мне всё равно."
  },
  {
    "id": "study_gustar_dar_igual_ctx",
    "topic": "gustar",
    "foodCat": "neutral",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне безразличен цвет.»: Me ___ el color.",
    "a": [
      "da igual"
    ],
    "e": "Me da igual el color. — Мне безразличен цвет."
  },
  {
    "id": "study_gustar_molestar_es",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мешать, раздражать.",
    "a": [
      "molestar"
    ],
    "e": "Правильный вариант: molestar."
  },
  {
    "id": "study_gustar_molestar_ru",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Узнай",
    "q": "Переведи на русский: molestar.",
    "a": [
      "мешать",
      "раздражать",
      "мешать, раздражать"
    ],
    "e": "molestar — мешать, раздражать."
  },
  {
    "id": "study_gustar_molestar_ctx",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне мешает шум.»: Me ___ el ruido.",
    "a": [
      "molesta"
    ],
    "e": "Me molesta el ruido. — Мне мешает шум."
  },
  {
    "id": "study_gustar_aburrir_es",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Вспомни",
    "q": "Переведи на испанский: наводить скуку, быть скучным.",
    "a": [
      "aburrir"
    ],
    "e": "Правильный вариант: aburrir."
  },
  {
    "id": "study_gustar_aburrir_ru",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Узнай",
    "q": "Переведи на русский: aburrir.",
    "a": [
      "наводить скуку",
      "быть скучным",
      "наводить скуку, быть скучным"
    ],
    "e": "aburrir — наводить скуку, быть скучным."
  },
  {
    "id": "study_gustar_aburrir_ctx",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Этот фильм мне скучен.»: Me ___ esta película.",
    "a": [
      "aburre"
    ],
    "e": "Me aburre esta película. — Этот фильм мне скучен."
  },
  {
    "id": "study_gustar_odiar_es",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ненавидеть.",
    "a": [
      "odiar"
    ],
    "e": "Правильный вариант: odiar."
  },
  {
    "id": "study_gustar_odiar_ru",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Узнай",
    "q": "Переведи на русский: odiar.",
    "a": [
      "ненавидеть"
    ],
    "e": "odiar — ненавидеть."
  },
  {
    "id": "study_gustar_odiar_ctx",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ненавижу рано вставать.»: Yo ___ levantarme temprano.",
    "a": [
      "odio"
    ],
    "e": "Odio levantarme temprano. — Я ненавижу рано вставать."
  },
  {
    "id": "study_gustar_detestar_es",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Вспомни",
    "q": "Переведи на испанский: терпеть не мочь, ненавидеть.",
    "a": [
      "detestar"
    ],
    "e": "Правильный вариант: detestar."
  },
  {
    "id": "study_gustar_detestar_ru",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Узнай",
    "q": "Переведи на русский: detestar.",
    "a": [
      "терпеть не мочь",
      "ненавидеть",
      "терпеть не мочь, ненавидеть"
    ],
    "e": "detestar — терпеть не мочь, ненавидеть."
  },
  {
    "id": "study_gustar_detestar_ctx",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я терпеть не могу ждать.»: Yo ___ esperar.",
    "a": [
      "detesto"
    ],
    "e": "Detesto esperar. — Я терпеть не могу ждать."
  },
  {
    "id": "study_gustar_no_soportar_es",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Вспомни",
    "q": "Переведи на испанский: не выносить, не терпеть.",
    "a": [
      "no soportar"
    ],
    "e": "Правильный вариант: no soportar."
  },
  {
    "id": "study_gustar_no_soportar_ru",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "Узнай",
    "q": "Переведи на русский: no soportar.",
    "a": [
      "не выносить",
      "не терпеть",
      "не выносить, не терпеть"
    ],
    "e": "no soportar — не выносить, не терпеть."
  },
  {
    "id": "study_gustar_no_soportar_ctx",
    "topic": "gustar",
    "foodCat": "negative",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я не выношу жару.»: Yo ___ el calor.",
    "a": [
      "no soporto"
    ],
    "e": "No soporto el calor. — Я не выношу жару."
  },
  {
    "id": "study_gustar_doler_es",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "Вспомни",
    "q": "Переведи на испанский: болеть, причинять боль.",
    "a": [
      "doler"
    ],
    "e": "Правильный вариант: doler."
  },
  {
    "id": "study_gustar_doler_ru",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "Узнай",
    "q": "Переведи на русский: doler.",
    "a": [
      "болеть",
      "причинять боль",
      "болеть, причинять боль"
    ],
    "e": "doler — болеть, причинять боль."
  },
  {
    "id": "study_gustar_doler_ctx",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У меня болит голова.»: Me ___ la cabeza.",
    "a": [
      "duele"
    ],
    "e": "Me duele la cabeza. — У меня болит голова."
  },
  {
    "id": "study_gustar_caer_bien_es",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "Вспомни",
    "q": "Переведи на испанский: нравиться как человек.",
    "a": [
      "caer bien"
    ],
    "e": "Правильный вариант: caer bien."
  },
  {
    "id": "study_gustar_caer_bien_ru",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "Узнай",
    "q": "Переведи на русский: caer bien.",
    "a": [
      "нравиться как человек",
      "симпатизировать"
    ],
    "e": "caer bien — нравиться как человек."
  },
  {
    "id": "study_gustar_caer_bien_ctx",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне нравится твоя подруга как человек.»: Me ___ tu amiga.",
    "a": [
      "cae bien"
    ],
    "e": "Me cae bien tu amiga. — Мне нравится твоя подруга как человек."
  },
  {
    "id": "study_gustar_caer_mal_es",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "Вспомни",
    "q": "Переведи на испанский: не нравиться как человек.",
    "a": [
      "caer mal"
    ],
    "e": "Правильный вариант: caer mal."
  },
  {
    "id": "study_gustar_caer_mal_ru",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "Узнай",
    "q": "Переведи на русский: caer mal.",
    "a": [
      "не нравиться как человек",
      "быть неприятным"
    ],
    "e": "caer mal — не нравиться как человек."
  },
  {
    "id": "study_gustar_caer_mal_ctx",
    "topic": "gustar",
    "foodCat": "sensation",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне неприятен этот коллега.»: Me ___ ese compañero.",
    "a": [
      "cae mal"
    ],
    "e": "Me cae mal ese compañero. — Мне неприятен этот коллега."
  },
  {
    "id": "choice_gustar_me_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне нравится.",
    "a": [
      "me gusta"
    ],
    "options": [
      "me gusta",
      "te gusta",
      "le gusta",
      "nos gusta"
    ],
    "e": "me gusta — мне нравится."
  },
  {
    "id": "choice_gustar_te_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тебе нравится.",
    "a": [
      "te gusta"
    ],
    "options": [
      "te gusta",
      "le gusta",
      "nos gusta",
      "os gusta"
    ],
    "e": "te gusta — тебе нравится."
  },
  {
    "id": "choice_gustar_le_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ему, ей или Вам нравится.",
    "a": [
      "le gusta"
    ],
    "options": [
      "le gusta",
      "nos gusta",
      "os gusta",
      "les gusta"
    ],
    "e": "le gusta — ему, ей или Вам нравится."
  },
  {
    "id": "choice_gustar_nos_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: нам нравится.",
    "a": [
      "nos gusta"
    ],
    "options": [
      "nos gusta",
      "os gusta",
      "les gusta",
      "me gustan"
    ],
    "e": "nos gusta — нам нравится."
  },
  {
    "id": "choice_gustar_os_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вам нравится.",
    "a": [
      "os gusta"
    ],
    "options": [
      "os gusta",
      "les gusta",
      "me gustan",
      "encantar"
    ],
    "e": "os gusta — вам нравится."
  },
  {
    "id": "choice_gustar_les_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: им или вам нравится.",
    "a": [
      "les gusta"
    ],
    "options": [
      "les gusta",
      "me gustan",
      "encantar",
      "fascinar"
    ],
    "e": "les gusta — им или вам нравится."
  },
  {
    "id": "choice_gustar_me_gustan",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне нравятся.",
    "a": [
      "me gustan"
    ],
    "options": [
      "me gustan",
      "encantar",
      "fascinar",
      "preferir"
    ],
    "e": "me gustan — мне нравятся."
  },
  {
    "id": "choice_gustar_no_me_gusta",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне не нравится.",
    "a": [
      "no me gusta"
    ],
    "options": [
      "no me gusta",
      "odiar",
      "detestar",
      "no soportar"
    ],
    "e": "no me gusta — мне не нравится."
  },
  {
    "id": "choice_gustar_encantar",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: очень нравиться, обожать.",
    "a": [
      "encantar"
    ],
    "options": [
      "encantar",
      "preferir",
      "me gusta",
      "te gusta"
    ],
    "e": "encantar — очень нравиться, обожать."
  },
  {
    "id": "choice_gustar_fascinar",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: восхищать, очень увлекать.",
    "a": [
      "fascinar"
    ],
    "options": [
      "fascinar",
      "me gusta",
      "te gusta",
      "le gusta"
    ],
    "e": "fascinar — восхищать, очень увлекать."
  },
  {
    "id": "choice_gustar_preferir",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: предпочитать.",
    "a": [
      "preferir"
    ],
    "options": [
      "preferir",
      "te gusta",
      "le gusta",
      "nos gusta"
    ],
    "e": "preferir — предпочитать."
  },
  {
    "id": "choice_gustar_interesar",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: интересовать.",
    "a": [
      "interesar"
    ],
    "options": [
      "interesar",
      "importar",
      "dar igual",
      "molestar"
    ],
    "e": "interesar — интересовать."
  },
  {
    "id": "choice_gustar_importar",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: иметь значение, быть важным.",
    "a": [
      "importar"
    ],
    "options": [
      "importar",
      "dar igual",
      "molestar",
      "aburrir"
    ],
    "e": "importar — иметь значение, быть важным."
  },
  {
    "id": "choice_gustar_dar_igual",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: быть безразличным; мне всё равно.",
    "a": [
      "dar igual"
    ],
    "options": [
      "dar igual",
      "molestar",
      "aburrir",
      "odiar"
    ],
    "e": "dar igual — быть безразличным; мне всё равно."
  },
  {
    "id": "choice_gustar_molestar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мешать, раздражать.",
    "a": [
      "molestar"
    ],
    "options": [
      "molestar",
      "no soportar",
      "no me gusta",
      "aburrir"
    ],
    "e": "molestar — мешать, раздражать."
  },
  {
    "id": "choice_gustar_aburrir",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: наводить скуку, быть скучным.",
    "a": [
      "aburrir"
    ],
    "options": [
      "aburrir",
      "no me gusta",
      "molestar",
      "odiar"
    ],
    "e": "aburrir — наводить скуку, быть скучным."
  },
  {
    "id": "choice_gustar_odiar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ненавидеть.",
    "a": [
      "odiar"
    ],
    "options": [
      "odiar",
      "molestar",
      "aburrir",
      "detestar"
    ],
    "e": "odiar — ненавидеть."
  },
  {
    "id": "choice_gustar_detestar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: терпеть не мочь, ненавидеть.",
    "a": [
      "detestar"
    ],
    "options": [
      "detestar",
      "aburrir",
      "odiar",
      "no soportar"
    ],
    "e": "detestar — терпеть не мочь, ненавидеть."
  },
  {
    "id": "choice_gustar_no_soportar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: не выносить, не терпеть.",
    "a": [
      "no soportar"
    ],
    "options": [
      "no soportar",
      "odiar",
      "detestar",
      "no me gusta"
    ],
    "e": "no soportar — не выносить, не терпеть."
  },
  {
    "id": "choice_gustar_doler",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: болеть, причинять боль.",
    "a": [
      "doler"
    ],
    "options": [
      "doler",
      "caer bien",
      "caer mal",
      "me gusta"
    ],
    "e": "doler — болеть, причинять боль."
  },
  {
    "id": "choice_gustar_caer_bien",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: нравиться как человек.",
    "a": [
      "caer bien"
    ],
    "options": [
      "caer bien",
      "caer mal",
      "me gusta",
      "te gusta"
    ],
    "e": "caer bien — нравиться как человек."
  },
  {
    "id": "choice_gustar_caer_mal",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: не нравиться как человек.",
    "a": [
      "caer mal"
    ],
    "options": [
      "caer mal",
      "me gusta",
      "te gusta",
      "le gusta"
    ],
    "e": "caer mal — не нравиться как человек."
  },
  {
    "id": "audio_gustar_me_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta el café.",
    "a": [
      "Me gusta el café."
    ],
    "e": "Мне нравится кофе."
  },
  {
    "id": "audio_gustar_te_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Te gusta Madrid?",
    "a": [
      "¿Te gusta Madrid?"
    ],
    "e": "Тебе нравится Мадрид?"
  },
  {
    "id": "audio_gustar_le_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "A ella le gusta bailar.",
    "a": [
      "A ella le gusta bailar."
    ],
    "e": "Ей нравится танцевать."
  },
  {
    "id": "audio_gustar_nos_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nos gusta viajar.",
    "a": [
      "Nos gusta viajar."
    ],
    "e": "Нам нравится путешествовать."
  },
  {
    "id": "audio_gustar_os_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Os gusta la música?",
    "a": [
      "¿Os gusta la música?"
    ],
    "e": "Вам нравится музыка?"
  },
  {
    "id": "audio_gustar_les_gusta",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "A ellos les gusta el deporte.",
    "a": [
      "A ellos les gusta el deporte."
    ],
    "e": "Им нравится спорт."
  },
  {
    "id": "audio_gustar_me_gustan",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gustan los libros.",
    "a": [
      "Me gustan los libros."
    ],
    "e": "Мне нравятся книги."
  },
  {
    "id": "audio_gustar_no_me_gusta",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No me gusta madrugar.",
    "a": [
      "No me gusta madrugar."
    ],
    "e": "Мне не нравится рано вставать."
  },
  {
    "id": "audio_gustar_encantar",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me encanta esta canción.",
    "a": [
      "Me encanta esta canción."
    ],
    "e": "Мне очень нравится эта песня."
  },
  {
    "id": "audio_gustar_fascinar",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me fascina la fotografía.",
    "a": [
      "Me fascina la fotografía."
    ],
    "e": "Я в восторге от фотографии."
  },
  {
    "id": "audio_gustar_preferir",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Prefiero el té al café.",
    "a": [
      "Prefiero el té al café."
    ],
    "e": "Я предпочитаю чай кофе."
  },
  {
    "id": "audio_gustar_interesar",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me interesa el arte.",
    "a": [
      "Me interesa el arte."
    ],
    "e": "Меня интересует искусство."
  },
  {
    "id": "audio_gustar_importar",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me importa tu opinión.",
    "a": [
      "Me importa tu opinión."
    ],
    "e": "Мне важно твоё мнение."
  },
  {
    "id": "audio_gustar_dar_igual",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me da igual el color.",
    "a": [
      "Me da igual el color."
    ],
    "e": "Мне безразличен цвет."
  },
  {
    "id": "audio_gustar_molestar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me molesta el ruido.",
    "a": [
      "Me molesta el ruido."
    ],
    "e": "Мне мешает шум."
  },
  {
    "id": "audio_gustar_aburrir",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me aburre esta película.",
    "a": [
      "Me aburre esta película."
    ],
    "e": "Этот фильм мне скучен."
  },
  {
    "id": "audio_gustar_odiar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Odio levantarme temprano.",
    "a": [
      "Odio levantarme temprano."
    ],
    "e": "Я ненавижу рано вставать."
  },
  {
    "id": "audio_gustar_detestar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Detesto esperar.",
    "a": [
      "Detesto esperar."
    ],
    "e": "Я терпеть не могу ждать."
  },
  {
    "id": "audio_gustar_no_soportar",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No soporto el calor.",
    "a": [
      "No soporto el calor."
    ],
    "e": "Я не выношу жару."
  },
  {
    "id": "audio_gustar_doler",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me duele la cabeza.",
    "a": [
      "Me duele la cabeza."
    ],
    "e": "У меня болит голова."
  },
  {
    "id": "audio_gustar_caer_bien",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me cae bien tu amiga.",
    "a": [
      "Me cae bien tu amiga."
    ],
    "e": "Мне нравится твоя подруга как человек."
  },
  {
    "id": "audio_gustar_caer_mal",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me cae mal ese compañero.",
    "a": [
      "Me cae mal ese compañero."
    ],
    "e": "Мне неприятен этот коллега."
  },
  {
    "id": "dialogue_g_coffee",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Te gusta el café? — Да, мне нравится.",
    "a": [
      "Sí, me gusta.",
      "Si, me gusta."
    ],
    "e": "В ответе меняется te на me."
  },
  {
    "id": "dialogue_g_hobby",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Qué te gusta hacer? — Мне нравится читать.",
    "a": [
      "Me gusta leer."
    ],
    "e": "После gusta можно поставить инфинитив."
  },
  {
    "id": "dialogue_g_indifferent",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Te importa el color? — Нет, мне всё равно.",
    "a": [
      "No, me da igual.",
      "No me importa.",
      "No, no me importa."
    ],
    "e": "Me da igual и no me importa выражают безразличие."
  },
  {
    "id": "dialogue_g_hate",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Qué odias? — Я ненавижу рано вставать.",
    "a": [
      "Odio levantarme temprano."
    ],
    "e": "Odiar — обычный глагол: yo odio."
  },
  {
    "id": "dialogue_g_person",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿Te cae bien Ana? — Да, она мне нравится.",
    "a": [
      "Sí, me cae bien.",
      "Si, me cae bien."
    ],
    "e": "О симпатии к человеку говорят caer bien."
  },
  {
    "id": "compare_gusta_indifference",
    "topic": "gustar",
    "foodCat": "neutral",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери естественный вариант: «Мне всё равно, какой цвет».",
    "options": [
      "Me da igual el color.",
      "Yo soy igual el color.",
      "Me gusto el color."
    ],
    "a": [
      "Me da igual el color."
    ],
    "e": "Me da igual — естественный разговорный способ сказать «мне всё равно»."
  },
  {
    "id": "compare_gusta_person",
    "topic": "gustar",
    "foodCat": "sensation",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери вариант о симпатии к человеку: Ana ___.",
    "options": [
      "me cae bien",
      "me gusta bien",
      "me interesa bien"
    ],
    "a": [
      "me cae bien"
    ],
    "e": "Caer bien используют, когда человек приятен или симпатичен."
  },
  {
    "id": "context_choice_pedro_games",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "A Pedro le ___ los videojuegos de estrategia.",
    "options": [
      "gusta",
      "gustan",
      "gusto",
      "gustas"
    ],
    "a": [
      "gustan"
    ],
    "e": "Los videojuegos — множественное число, поэтому gustan."
  },
  {
    "id": "context_choice_noise_bothers",
    "topic": "gustar",
    "foodCat": "negative",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Me ___ el ruido de la calle cuando trabajo.",
    "options": [
      "molesta",
      "molestan",
      "molesto",
      "molestar"
    ],
    "a": [
      "molesta"
    ],
    "e": "El ruido — единственное число, поэтому molesta."
  },
  {
    "id": "context_choice_prefer_tea",
    "topic": "gustar",
    "foodCat": "positive",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Cuando desayuno, yo ___ el té al café.",
    "options": [
      "preferir",
      "prefiero",
      "prefieres",
      "preferimos"
    ],
    "a": [
      "prefiero"
    ],
    "e": "Для yo форма preferir — prefiero."
  },
  {
    "id": "sort_auto_gustar_0",
    "topic": "gustar",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Gustar и похожие» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "positive",
        "title": "Нравится"
      },
      {
        "id": "neutral",
        "title": "Интерес / безразличие"
      },
      {
        "id": "negative",
        "title": "Не нравится"
      },
      {
        "id": "sensation",
        "title": "Ощущения / люди"
      }
    ],
    "sortTokens": [
      {
        "id": "gustar_0_positive_me_gusta",
        "text": "me gusta",
        "category": "positive"
      },
      {
        "id": "gustar_0_positive_te_gusta",
        "text": "te gusta",
        "category": "positive"
      },
      {
        "id": "gustar_0_positive_le_gusta",
        "text": "le gusta",
        "category": "positive"
      },
      {
        "id": "gustar_0_neutral_interesar",
        "text": "interesar",
        "category": "neutral"
      },
      {
        "id": "gustar_0_neutral_importar",
        "text": "importar",
        "category": "neutral"
      },
      {
        "id": "gustar_0_neutral_dar_igual",
        "text": "dar igual",
        "category": "neutral"
      },
      {
        "id": "gustar_0_negative_no_me_gusta",
        "text": "no me gusta",
        "category": "negative"
      },
      {
        "id": "gustar_0_negative_molestar",
        "text": "molestar",
        "category": "negative"
      },
      {
        "id": "gustar_0_negative_aburrir",
        "text": "aburrir",
        "category": "negative"
      },
      {
        "id": "gustar_0_sensation_doler",
        "text": "doler",
        "category": "sensation"
      },
      {
        "id": "gustar_0_sensation_caer_bien",
        "text": "caer bien",
        "category": "sensation"
      },
      {
        "id": "gustar_0_sensation_caer_mal",
        "text": "caer mal",
        "category": "sensation"
      }
    ],
    "a": [
      "positive | positive | positive | neutral | neutral | neutral | negative | negative | negative | sensation | sensation | sensation"
    ],
    "displayAnswer": "Нравится: me gusta, te gusta, le gusta · Интерес / безразличие: interesar, importar, dar igual · Не нравится: no me gusta, molestar, aburrir · Ощущения / люди: doler, caer bien, caer mal",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const gustarTopic = {
  id: "gustar",
  title: "Gustar и похожие",
  icon: "♡",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
