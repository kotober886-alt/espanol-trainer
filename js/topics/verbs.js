/**
 * Основные глаголы topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "ser",
    "cat": "core",
    "word": "ser",
    "base": "ser",
    "gender": "неправильный",
    "tr": "быть, являться",
    "ru": [
      "быть",
      "являться"
    ],
    "answers": [
      "ser"
    ],
    "art": null,
    "examples": [
      [
        "Soy diseñadora.",
        "Я дизайнер."
      ],
      [
        "Madrid es una ciudad grande.",
        "Мадрид — большой город."
      ]
    ],
    "cloze": "Madrid ___ una ciudad grande.",
    "clozeAnswers": [
      "es"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "soy"
        ],
        [
          "tú",
          "eres"
        ],
        [
          "él / ella / usted",
          "es"
        ],
        [
          "nosotros / nosotras",
          "somos"
        ],
        [
          "vosotros / vosotras",
          "sois"
        ],
        [
          "ellos / ellas / ustedes",
          "son"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "estar",
    "cat": "core",
    "word": "estar",
    "base": "estar",
    "gender": "неправильный",
    "tr": "быть, находиться",
    "ru": [
      "быть",
      "находиться"
    ],
    "answers": [
      "estar"
    ],
    "art": null,
    "examples": [
      [
        "Estoy en casa.",
        "Я дома."
      ],
      [
        "Estamos un poco cansados.",
        "Мы немного устали."
      ]
    ],
    "cloze": "Ahora ___ en casa.",
    "clozeAnswers": [
      "estoy"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "estoy"
        ],
        [
          "tú",
          "estás"
        ],
        [
          "él / ella / usted",
          "está"
        ],
        [
          "nosotros / nosotras",
          "estamos"
        ],
        [
          "vosotros / vosotras",
          "estáis"
        ],
        [
          "ellos / ellas / ustedes",
          "están"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "tener",
    "cat": "core",
    "word": "tener",
    "base": "tener",
    "gender": "неправильный",
    "tr": "иметь",
    "ru": [
      "иметь",
      "иметь у себя"
    ],
    "answers": [
      "tener"
    ],
    "art": null,
    "examples": [
      [
        "Tengo un gato.",
        "У меня есть кот."
      ],
      [
        "Ella tiene tiempo libre.",
        "У неё есть свободное время."
      ]
    ],
    "cloze": "Yo ___ un gato.",
    "clozeAnswers": [
      "tengo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "tengo"
        ],
        [
          "tú",
          "tienes"
        ],
        [
          "él / ella / usted",
          "tiene"
        ],
        [
          "nosotros / nosotras",
          "tenemos"
        ],
        [
          "vosotros / vosotras",
          "tenéis"
        ],
        [
          "ellos / ellas / ustedes",
          "tienen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "hacer",
    "cat": "core",
    "word": "hacer",
    "base": "hacer",
    "gender": "неправильный",
    "tr": "делать",
    "ru": [
      "делать"
    ],
    "answers": [
      "hacer"
    ],
    "art": null,
    "examples": [
      [
        "Hago deporte los lunes.",
        "Я занимаюсь спортом по понедельникам."
      ],
      [
        "¿Qué haces hoy?",
        "Что ты делаешь сегодня?"
      ]
    ],
    "cloze": "¿Qué ___ hoy?",
    "clozeAnswers": [
      "haces"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "hago"
        ],
        [
          "tú",
          "haces"
        ],
        [
          "él / ella / usted",
          "hace"
        ],
        [
          "nosotros / nosotras",
          "hacemos"
        ],
        [
          "vosotros / vosotras",
          "hacéis"
        ],
        [
          "ellos / ellas / ustedes",
          "hacen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "ir",
    "cat": "core",
    "word": "ir",
    "base": "ir",
    "gender": "неправильный",
    "tr": "идти, ехать",
    "ru": [
      "идти",
      "ехать"
    ],
    "answers": [
      "ir"
    ],
    "art": null,
    "examples": [
      [
        "Voy al trabajo en metro.",
        "Я еду на работу на метро."
      ],
      [
        "Vamos al cine esta noche.",
        "Сегодня вечером мы идём в кино."
      ]
    ],
    "cloze": "Yo ___ al trabajo.",
    "clozeAnswers": [
      "voy"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "voy"
        ],
        [
          "tú",
          "vas"
        ],
        [
          "él / ella / usted",
          "va"
        ],
        [
          "nosotros / nosotras",
          "vamos"
        ],
        [
          "vosotros / vosotras",
          "vais"
        ],
        [
          "ellos / ellas / ustedes",
          "van"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "venir",
    "cat": "core",
    "word": "venir",
    "base": "venir",
    "gender": "неправильный",
    "tr": "приходить, приезжать",
    "ru": [
      "приходить",
      "приезжать"
    ],
    "answers": [
      "venir"
    ],
    "art": null,
    "examples": [
      [
        "Vengo de Madrid.",
        "Я приезжаю из Мадрида."
      ],
      [
        "¿Vienes conmigo?",
        "Ты идёшь со мной?"
      ]
    ],
    "cloze": "¿___ conmigo?",
    "clozeAnswers": [
      "vienes"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "vengo"
        ],
        [
          "tú",
          "vienes"
        ],
        [
          "él / ella / usted",
          "viene"
        ],
        [
          "nosotros / nosotras",
          "venimos"
        ],
        [
          "vosotros / vosotras",
          "venís"
        ],
        [
          "ellos / ellas / ustedes",
          "vienen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "querer",
    "cat": "core",
    "word": "querer",
    "base": "querer",
    "gender": "неправильный",
    "tr": "хотеть, любить",
    "ru": [
      "хотеть",
      "любить"
    ],
    "answers": [
      "querer"
    ],
    "art": null,
    "examples": [
      [
        "Quiero un café.",
        "Я хочу кофе."
      ],
      [
        "Queremos viajar por España.",
        "Мы хотим путешествовать по Испании."
      ]
    ],
    "cloze": "Yo ___ un café.",
    "clozeAnswers": [
      "quiero"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "quiero"
        ],
        [
          "tú",
          "quieres"
        ],
        [
          "él / ella / usted",
          "quiere"
        ],
        [
          "nosotros / nosotras",
          "queremos"
        ],
        [
          "vosotros / vosotras",
          "queréis"
        ],
        [
          "ellos / ellas / ustedes",
          "quieren"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "poder",
    "cat": "core",
    "word": "poder",
    "base": "poder",
    "gender": "неправильный",
    "tr": "мочь",
    "ru": [
      "мочь"
    ],
    "answers": [
      "poder"
    ],
    "art": null,
    "examples": [
      [
        "Puedo ayudarte.",
        "Я могу тебе помочь."
      ],
      [
        "Hoy no podemos ir.",
        "Сегодня мы не можем пойти."
      ]
    ],
    "cloze": "Yo ___ ayudarte.",
    "clozeAnswers": [
      "puedo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "puedo"
        ],
        [
          "tú",
          "puedes"
        ],
        [
          "él / ella / usted",
          "puede"
        ],
        [
          "nosotros / nosotras",
          "podemos"
        ],
        [
          "vosotros / vosotras",
          "podéis"
        ],
        [
          "ellos / ellas / ustedes",
          "pueden"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "deber",
    "cat": "core",
    "word": "deber",
    "base": "deber",
    "gender": "глагол на -er",
    "tr": "быть должным, следует",
    "ru": [
      "быть должным",
      "следует",
      "должен"
    ],
    "answers": [
      "deber"
    ],
    "art": null,
    "examples": [
      [
        "Debo trabajar mañana.",
        "Завтра я должна работать."
      ],
      [
        "Debes descansar más.",
        "Тебе следует больше отдыхать."
      ]
    ],
    "cloze": "Tú ___ descansar más.",
    "clozeAnswers": [
      "debes"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "debo"
        ],
        [
          "tú",
          "debes"
        ],
        [
          "él / ella / usted",
          "debe"
        ],
        [
          "nosotros / nosotras",
          "debemos"
        ],
        [
          "vosotros / vosotras",
          "debéis"
        ],
        [
          "ellos / ellas / ustedes",
          "deben"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "saber",
    "cat": "core",
    "word": "saber",
    "base": "saber",
    "gender": "неправильный",
    "tr": "знать, уметь",
    "ru": [
      "знать",
      "уметь"
    ],
    "answers": [
      "saber"
    ],
    "art": null,
    "examples": [
      [
        "Sé la respuesta.",
        "Я знаю ответ."
      ],
      [
        "Sabemos nadar.",
        "Мы умеем плавать."
      ]
    ],
    "cloze": "Yo ___ la respuesta.",
    "clozeAnswers": [
      "sé",
      "se"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "sé"
        ],
        [
          "tú",
          "sabes"
        ],
        [
          "él / ella / usted",
          "sabe"
        ],
        [
          "nosotros / nosotras",
          "sabemos"
        ],
        [
          "vosotros / vosotras",
          "sabéis"
        ],
        [
          "ellos / ellas / ustedes",
          "saben"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Самые нужные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "comer",
    "cat": "food",
    "word": "comer",
    "base": "comer",
    "gender": "глагол на -er",
    "tr": "есть, кушать",
    "ru": [
      "есть",
      "кушать"
    ],
    "answers": [
      "comer"
    ],
    "art": null,
    "examples": [
      [
        "Como a las dos.",
        "Я ем в два часа."
      ],
      [
        "Comemos juntos los domingos.",
        "По воскресеньям мы едим вместе."
      ]
    ],
    "cloze": "Nosotros ___ juntos.",
    "clozeAnswers": [
      "comemos"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "como"
        ],
        [
          "tú",
          "comes"
        ],
        [
          "él / ella / usted",
          "come"
        ],
        [
          "nosotros / nosotras",
          "comemos"
        ],
        [
          "vosotros / vosotras",
          "coméis"
        ],
        [
          "ellos / ellas / ustedes",
          "comen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "beber",
    "cat": "food",
    "word": "beber",
    "base": "beber",
    "gender": "глагол на -er",
    "tr": "пить",
    "ru": [
      "пить"
    ],
    "answers": [
      "beber"
    ],
    "art": null,
    "examples": [
      [
        "Bebo mucha agua.",
        "Я пью много воды."
      ],
      [
        "Ellos beben café con leche.",
        "Они пьют кофе с молоком."
      ]
    ],
    "cloze": "Yo ___ mucha agua.",
    "clozeAnswers": [
      "bebo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "bebo"
        ],
        [
          "tú",
          "bebes"
        ],
        [
          "él / ella / usted",
          "bebe"
        ],
        [
          "nosotros / nosotras",
          "bebemos"
        ],
        [
          "vosotros / vosotras",
          "bebéis"
        ],
        [
          "ellos / ellas / ustedes",
          "beben"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "tomar",
    "cat": "food",
    "word": "tomar",
    "base": "tomar",
    "gender": "глагол на -ar",
    "tr": "брать; пить, принимать",
    "ru": [
      "брать",
      "пить",
      "принимать"
    ],
    "answers": [
      "tomar"
    ],
    "art": null,
    "examples": [
      [
        "Tomo café por la mañana.",
        "Я пью кофе по утрам."
      ],
      [
        "Toma este medicamento después de comer.",
        "Прими это лекарство после еды."
      ]
    ],
    "cloze": "Yo ___ café por la mañana.",
    "clozeAnswers": [
      "tomo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "tomo"
        ],
        [
          "tú",
          "tomas"
        ],
        [
          "él / ella / usted",
          "toma"
        ],
        [
          "nosotros / nosotras",
          "tomamos"
        ],
        [
          "vosotros / vosotras",
          "tomáis"
        ],
        [
          "ellos / ellas / ustedes",
          "toman"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "desayunar",
    "cat": "food",
    "word": "desayunar",
    "base": "desayunar",
    "gender": "глагол на -ar",
    "tr": "завтракать",
    "ru": [
      "завтракать"
    ],
    "answers": [
      "desayunar"
    ],
    "art": null,
    "examples": [
      [
        "Desayuno yogur y fruta.",
        "Я ем йогурт и фрукты на завтрак."
      ],
      [
        "Desayunamos antes de salir.",
        "Мы завтракаем перед выходом."
      ]
    ],
    "cloze": "Yo ___ yogur y fruta.",
    "clozeAnswers": [
      "desayuno"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "desayuno"
        ],
        [
          "tú",
          "desayunas"
        ],
        [
          "él / ella / usted",
          "desayuna"
        ],
        [
          "nosotros / nosotras",
          "desayunamos"
        ],
        [
          "vosotros / vosotras",
          "desayunáis"
        ],
        [
          "ellos / ellas / ustedes",
          "desayunan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "almorzar",
    "cat": "food",
    "word": "almorzar",
    "base": "almorzar",
    "gender": "o → ue",
    "tr": "обедать",
    "ru": [
      "обедать"
    ],
    "answers": [
      "almorzar"
    ],
    "art": null,
    "examples": [
      [
        "Almuerzo con mis compañeros.",
        "Я обедаю с коллегами."
      ],
      [
        "Hoy almorzamos en casa.",
        "Сегодня мы обедаем дома."
      ]
    ],
    "cloze": "Yo ___ con mis compañeros.",
    "clozeAnswers": [
      "almuerzo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "almuerzo"
        ],
        [
          "tú",
          "almuerzas"
        ],
        [
          "él / ella / usted",
          "almuerza"
        ],
        [
          "nosotros / nosotras",
          "almorzamos"
        ],
        [
          "vosotros / vosotras",
          "almorzáis"
        ],
        [
          "ellos / ellas / ustedes",
          "almuerzan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "cenar",
    "cat": "food",
    "word": "cenar",
    "base": "cenar",
    "gender": "глагол на -ar",
    "tr": "ужинать",
    "ru": [
      "ужинать"
    ],
    "answers": [
      "cenar"
    ],
    "art": null,
    "examples": [
      [
        "Ceno a las ocho.",
        "Я ужинаю в восемь."
      ],
      [
        "¿Cenamos juntos hoy?",
        "Мы сегодня ужинаем вместе?"
      ]
    ],
    "cloze": "Yo ___ a las ocho.",
    "clozeAnswers": [
      "ceno"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "ceno"
        ],
        [
          "tú",
          "cenas"
        ],
        [
          "él / ella / usted",
          "cena"
        ],
        [
          "nosotros / nosotras",
          "cenamos"
        ],
        [
          "vosotros / vosotras",
          "cenáis"
        ],
        [
          "ellos / ellas / ustedes",
          "cenan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "cocinar",
    "cat": "food",
    "word": "cocinar",
    "base": "cocinar",
    "gender": "глагол на -ar",
    "tr": "готовить еду",
    "ru": [
      "готовить",
      "готовить еду"
    ],
    "answers": [
      "cocinar"
    ],
    "art": null,
    "examples": [
      [
        "Cocino pasta para la cena.",
        "Я готовлю пасту на ужин."
      ],
      [
        "Mi novio cocina muy bien.",
        "Мой парень очень хорошо готовит."
      ]
    ],
    "cloze": "Yo ___ pasta para la cena.",
    "clozeAnswers": [
      "cocino"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "cocino"
        ],
        [
          "tú",
          "cocinas"
        ],
        [
          "él / ella / usted",
          "cocina"
        ],
        [
          "nosotros / nosotras",
          "cocinamos"
        ],
        [
          "vosotros / vosotras",
          "cocináis"
        ],
        [
          "ellos / ellas / ustedes",
          "cocinan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "preparar",
    "cat": "food",
    "word": "preparar",
    "base": "preparar",
    "gender": "глагол на -ar",
    "tr": "готовить, подготавливать",
    "ru": [
      "готовить",
      "подготавливать"
    ],
    "answers": [
      "preparar"
    ],
    "art": null,
    "examples": [
      [
        "Preparo el desayuno.",
        "Я готовлю завтрак."
      ],
      [
        "Preparamos todo por la noche.",
        "Мы готовим всё вечером."
      ]
    ],
    "cloze": "Yo ___ el desayuno.",
    "clozeAnswers": [
      "preparo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "preparo"
        ],
        [
          "tú",
          "preparas"
        ],
        [
          "él / ella / usted",
          "prepara"
        ],
        [
          "nosotros / nosotras",
          "preparamos"
        ],
        [
          "vosotros / vosotras",
          "preparáis"
        ],
        [
          "ellos / ellas / ustedes",
          "preparan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "pedir",
    "cat": "food",
    "word": "pedir",
    "base": "pedir",
    "gender": "e → i",
    "tr": "просить, заказывать",
    "ru": [
      "просить",
      "заказывать"
    ],
    "answers": [
      "pedir"
    ],
    "art": null,
    "examples": [
      [
        "Pido una ensalada.",
        "Я заказываю салат."
      ],
      [
        "Pedimos la cuenta, por favor.",
        "Мы просим счёт."
      ]
    ],
    "cloze": "Yo ___ una ensalada.",
    "clozeAnswers": [
      "pido"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "pido"
        ],
        [
          "tú",
          "pides"
        ],
        [
          "él / ella / usted",
          "pide"
        ],
        [
          "nosotros / nosotras",
          "pedimos"
        ],
        [
          "vosotros / vosotras",
          "pedís"
        ],
        [
          "ellos / ellas / ustedes",
          "piden"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "probar",
    "cat": "food",
    "word": "probar",
    "base": "probar",
    "gender": "o → ue",
    "tr": "пробовать",
    "ru": [
      "пробовать",
      "попробовать"
    ],
    "answers": [
      "probar"
    ],
    "art": null,
    "examples": [
      [
        "Pruebo un postre nuevo.",
        "Я пробую новый десерт."
      ],
      [
        "¿Quieres probar la sopa?",
        "Хочешь попробовать суп?"
      ]
    ],
    "cloze": "Yo ___ un postre nuevo.",
    "clozeAnswers": [
      "pruebo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "pruebo"
        ],
        [
          "tú",
          "pruebas"
        ],
        [
          "él / ella / usted",
          "prueba"
        ],
        [
          "nosotros / nosotras",
          "probamos"
        ],
        [
          "vosotros / vosotras",
          "probáis"
        ],
        [
          "ellos / ellas / ustedes",
          "prueban"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Еда и напитки",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "vivir",
    "cat": "routine",
    "word": "vivir",
    "base": "vivir",
    "gender": "глагол на -ir",
    "tr": "жить",
    "ru": [
      "жить"
    ],
    "answers": [
      "vivir"
    ],
    "art": null,
    "examples": [
      [
        "Vivo en Madrid.",
        "Я живу в Мадриде."
      ],
      [
        "Mis padres viven cerca.",
        "Мои родители живут рядом."
      ]
    ],
    "cloze": "Yo ___ en Madrid.",
    "clozeAnswers": [
      "vivo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "vivo"
        ],
        [
          "tú",
          "vives"
        ],
        [
          "él / ella / usted",
          "vive"
        ],
        [
          "nosotros / nosotras",
          "vivimos"
        ],
        [
          "vosotros / vosotras",
          "vivís"
        ],
        [
          "ellos / ellas / ustedes",
          "viven"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "dormir",
    "cat": "routine",
    "word": "dormir",
    "base": "dormir",
    "gender": "o → ue",
    "tr": "спать",
    "ru": [
      "спать"
    ],
    "answers": [
      "dormir"
    ],
    "art": null,
    "examples": [
      [
        "Duermo ocho horas.",
        "Я сплю восемь часов."
      ],
      [
        "El gato duerme en el sofá.",
        "Кот спит на диване."
      ]
    ],
    "cloze": "Yo ___ ocho horas.",
    "clozeAnswers": [
      "duermo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "duermo"
        ],
        [
          "tú",
          "duermes"
        ],
        [
          "él / ella / usted",
          "duerme"
        ],
        [
          "nosotros / nosotras",
          "dormimos"
        ],
        [
          "vosotros / vosotras",
          "dormís"
        ],
        [
          "ellos / ellas / ustedes",
          "duermen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "despertarse",
    "cat": "routine",
    "word": "despertarse",
    "base": "despertarse",
    "gender": "e → ie · возвратный",
    "tr": "просыпаться",
    "ru": [
      "просыпаться"
    ],
    "answers": [
      "despertarse"
    ],
    "art": null,
    "examples": [
      [
        "Me despierto a las siete.",
        "Я просыпаюсь в семь."
      ],
      [
        "Los domingos nos despertamos tarde.",
        "По воскресеньям мы просыпаемся поздно."
      ]
    ],
    "cloze": "Me ___ a las siete.",
    "clozeAnswers": [
      "despierto"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "me despierto"
        ],
        [
          "tú",
          "te despiertas"
        ],
        [
          "él / ella / usted",
          "se despierta"
        ],
        [
          "nosotros / nosotras",
          "nos despertamos"
        ],
        [
          "vosotros / vosotras",
          "os despertáis"
        ],
        [
          "ellos / ellas / ustedes",
          "se despiertan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "levantarse",
    "cat": "routine",
    "word": "levantarse",
    "base": "levantarse",
    "gender": "возвратный",
    "tr": "вставать, подниматься",
    "ru": [
      "вставать",
      "подниматься"
    ],
    "answers": [
      "levantarse"
    ],
    "art": null,
    "examples": [
      [
        "Me levanto temprano.",
        "Я встаю рано."
      ],
      [
        "Ella se levanta a las ocho.",
        "Она встаёт в восемь."
      ]
    ],
    "cloze": "Me ___ temprano.",
    "clozeAnswers": [
      "levanto"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "me levanto"
        ],
        [
          "tú",
          "te levantas"
        ],
        [
          "él / ella / usted",
          "se levanta"
        ],
        [
          "nosotros / nosotras",
          "nos levantamos"
        ],
        [
          "vosotros / vosotras",
          "os levantáis"
        ],
        [
          "ellos / ellas / ustedes",
          "se levantan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "acostarse",
    "cat": "routine",
    "word": "acostarse",
    "base": "acostarse",
    "gender": "o → ue · возвратный",
    "tr": "ложиться спать",
    "ru": [
      "ложиться",
      "ложиться спать"
    ],
    "answers": [
      "acostarse"
    ],
    "art": null,
    "examples": [
      [
        "Me acuesto antes de medianoche.",
        "Я ложусь до полуночи."
      ],
      [
        "Los niños se acuestan temprano.",
        "Дети ложатся рано."
      ]
    ],
    "cloze": "Me ___ antes de medianoche.",
    "clozeAnswers": [
      "acuesto"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "me acuesto"
        ],
        [
          "tú",
          "te acuestas"
        ],
        [
          "él / ella / usted",
          "se acuesta"
        ],
        [
          "nosotros / nosotras",
          "nos acostamos"
        ],
        [
          "vosotros / vosotras",
          "os acostáis"
        ],
        [
          "ellos / ellas / ustedes",
          "se acuestan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "ducharse",
    "cat": "routine",
    "word": "ducharse",
    "base": "ducharse",
    "gender": "возвратный",
    "tr": "принимать душ",
    "ru": [
      "принимать душ",
      "мыться в душе"
    ],
    "answers": [
      "ducharse"
    ],
    "art": null,
    "examples": [
      [
        "Me ducho por la mañana.",
        "Я принимаю душ утром."
      ],
      [
        "Se ducha después del gimnasio.",
        "Он принимает душ после спортзала."
      ]
    ],
    "cloze": "Me ___ por la mañana.",
    "clozeAnswers": [
      "ducho"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "me ducho"
        ],
        [
          "tú",
          "te duchas"
        ],
        [
          "él / ella / usted",
          "se ducha"
        ],
        [
          "nosotros / nosotras",
          "nos duchamos"
        ],
        [
          "vosotros / vosotras",
          "os ducháis"
        ],
        [
          "ellos / ellas / ustedes",
          "se duchan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "vestirse",
    "cat": "routine",
    "word": "vestirse",
    "base": "vestirse",
    "gender": "e → i · возвратный",
    "tr": "одеваться",
    "ru": [
      "одеваться"
    ],
    "answers": [
      "vestirse"
    ],
    "art": null,
    "examples": [
      [
        "Me visto rápido.",
        "Я быстро одеваюсь."
      ],
      [
        "Ella se viste para el trabajo.",
        "Она одевается на работу."
      ]
    ],
    "cloze": "Me ___ rápido.",
    "clozeAnswers": [
      "visto"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "me visto"
        ],
        [
          "tú",
          "te vistes"
        ],
        [
          "él / ella / usted",
          "se viste"
        ],
        [
          "nosotros / nosotras",
          "nos vestimos"
        ],
        [
          "vosotros / vosotras",
          "os vestís"
        ],
        [
          "ellos / ellas / ustedes",
          "se visten"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "descansar",
    "cat": "routine",
    "word": "descansar",
    "base": "descansar",
    "gender": "глагол на -ar",
    "tr": "отдыхать",
    "ru": [
      "отдыхать"
    ],
    "answers": [
      "descansar"
    ],
    "art": null,
    "examples": [
      [
        "Descanso en casa por la noche.",
        "Вечером я отдыхаю дома."
      ],
      [
        "Necesitamos descansar un poco.",
        "Нам нужно немного отдохнуть."
      ]
    ],
    "cloze": "Yo ___ en casa.",
    "clozeAnswers": [
      "descanso"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "descanso"
        ],
        [
          "tú",
          "descansas"
        ],
        [
          "él / ella / usted",
          "descansa"
        ],
        [
          "nosotros / nosotras",
          "descansamos"
        ],
        [
          "vosotros / vosotras",
          "descansáis"
        ],
        [
          "ellos / ellas / ustedes",
          "descansan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Распорядок дня",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "limpiar",
    "cat": "home",
    "word": "limpiar",
    "base": "limpiar",
    "gender": "глагол на -ar",
    "tr": "убирать, чистить",
    "ru": [
      "убирать",
      "чистить"
    ],
    "answers": [
      "limpiar"
    ],
    "art": null,
    "examples": [
      [
        "Limpio la cocina.",
        "Я убираю кухню."
      ],
      [
        "Limpiamos el piso los sábados.",
        "Мы убираем квартиру по субботам."
      ]
    ],
    "cloze": "Yo ___ la cocina.",
    "clozeAnswers": [
      "limpio"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "limpio"
        ],
        [
          "tú",
          "limpias"
        ],
        [
          "él / ella / usted",
          "limpia"
        ],
        [
          "nosotros / nosotras",
          "limpiamos"
        ],
        [
          "vosotros / vosotras",
          "limpiáis"
        ],
        [
          "ellos / ellas / ustedes",
          "limpian"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "lavar",
    "cat": "home",
    "word": "lavar",
    "base": "lavar",
    "gender": "глагол на -ar",
    "tr": "мыть, стирать",
    "ru": [
      "мыть",
      "стирать"
    ],
    "answers": [
      "lavar"
    ],
    "art": null,
    "examples": [
      [
        "Lavo los platos después de cenar.",
        "Я мою посуду после ужина."
      ],
      [
        "Hoy lavamos la ropa.",
        "Сегодня мы стираем одежду."
      ]
    ],
    "cloze": "Yo ___ los platos.",
    "clozeAnswers": [
      "lavo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "lavo"
        ],
        [
          "tú",
          "lavas"
        ],
        [
          "él / ella / usted",
          "lava"
        ],
        [
          "nosotros / nosotras",
          "lavamos"
        ],
        [
          "vosotros / vosotras",
          "laváis"
        ],
        [
          "ellos / ellas / ustedes",
          "lavan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "ordenar",
    "cat": "home",
    "word": "ordenar",
    "base": "ordenar",
    "gender": "глагол на -ar",
    "tr": "наводить порядок, упорядочивать",
    "ru": [
      "наводить порядок",
      "упорядочивать"
    ],
    "answers": [
      "ordenar"
    ],
    "art": null,
    "examples": [
      [
        "Ordeno mi habitación.",
        "Я навожу порядок в комнате."
      ],
      [
        "Tenemos que ordenar el armario.",
        "Нам нужно разобрать шкаф."
      ]
    ],
    "cloze": "Yo ___ mi habitación.",
    "clozeAnswers": [
      "ordeno"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "ordeno"
        ],
        [
          "tú",
          "ordenas"
        ],
        [
          "él / ella / usted",
          "ordena"
        ],
        [
          "nosotros / nosotras",
          "ordenamos"
        ],
        [
          "vosotros / vosotras",
          "ordenáis"
        ],
        [
          "ellos / ellas / ustedes",
          "ordenan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "guardar",
    "cat": "home",
    "word": "guardar",
    "base": "guardar",
    "gender": "глагол на -ar",
    "tr": "класть на место, хранить",
    "ru": [
      "класть на место",
      "хранить",
      "сохранять"
    ],
    "answers": [
      "guardar"
    ],
    "art": null,
    "examples": [
      [
        "Guardo la ropa en el armario.",
        "Я убираю одежду в шкаф."
      ],
      [
        "¿Dónde guardas las llaves?",
        "Где ты хранишь ключи?"
      ]
    ],
    "cloze": "Yo ___ la ropa en el armario.",
    "clozeAnswers": [
      "guardo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "guardo"
        ],
        [
          "tú",
          "guardas"
        ],
        [
          "él / ella / usted",
          "guarda"
        ],
        [
          "nosotros / nosotras",
          "guardamos"
        ],
        [
          "vosotros / vosotras",
          "guardáis"
        ],
        [
          "ellos / ellas / ustedes",
          "guardan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "abrir",
    "cat": "home",
    "word": "abrir",
    "base": "abrir",
    "gender": "глагол на -ir",
    "tr": "открывать",
    "ru": [
      "открывать",
      "открыть"
    ],
    "answers": [
      "abrir"
    ],
    "art": null,
    "examples": [
      [
        "Abro la ventana.",
        "Я открываю окно."
      ],
      [
        "La tienda abre a las nueve.",
        "Магазин открывается в девять."
      ]
    ],
    "cloze": "Yo ___ la ventana.",
    "clozeAnswers": [
      "abro"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "abro"
        ],
        [
          "tú",
          "abres"
        ],
        [
          "él / ella / usted",
          "abre"
        ],
        [
          "nosotros / nosotras",
          "abrimos"
        ],
        [
          "vosotros / vosotras",
          "abrís"
        ],
        [
          "ellos / ellas / ustedes",
          "abren"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "cerrar",
    "cat": "home",
    "word": "cerrar",
    "base": "cerrar",
    "gender": "e → ie",
    "tr": "закрывать",
    "ru": [
      "закрывать",
      "закрыть"
    ],
    "answers": [
      "cerrar"
    ],
    "art": null,
    "examples": [
      [
        "Cierro la puerta.",
        "Я закрываю дверь."
      ],
      [
        "El supermercado cierra tarde.",
        "Супермаркет закрывается поздно."
      ]
    ],
    "cloze": "Yo ___ la puerta.",
    "clozeAnswers": [
      "cierro"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "cierro"
        ],
        [
          "tú",
          "cierras"
        ],
        [
          "él / ella / usted",
          "cierra"
        ],
        [
          "nosotros / nosotras",
          "cerramos"
        ],
        [
          "vosotros / vosotras",
          "cerráis"
        ],
        [
          "ellos / ellas / ustedes",
          "cierran"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "poner",
    "cat": "home",
    "word": "poner",
    "base": "poner",
    "gender": "неправильный",
    "tr": "класть, ставить, надевать",
    "ru": [
      "класть",
      "ставить",
      "надевать"
    ],
    "answers": [
      "poner"
    ],
    "art": null,
    "examples": [
      [
        "Pongo el teléfono sobre la mesa.",
        "Я кладу телефон на стол."
      ],
      [
        "Ponemos la mesa antes de cenar.",
        "Мы накрываем на стол перед ужином."
      ]
    ],
    "cloze": "Yo ___ el teléfono sobre la mesa.",
    "clozeAnswers": [
      "pongo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "pongo"
        ],
        [
          "tú",
          "pones"
        ],
        [
          "él / ella / usted",
          "pone"
        ],
        [
          "nosotros / nosotras",
          "ponemos"
        ],
        [
          "vosotros / vosotras",
          "ponéis"
        ],
        [
          "ellos / ellas / ustedes",
          "ponen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "quitar",
    "cat": "home",
    "word": "quitar",
    "base": "quitar",
    "gender": "глагол на -ar",
    "tr": "убирать, снимать",
    "ru": [
      "убирать",
      "снимать"
    ],
    "answers": [
      "quitar"
    ],
    "art": null,
    "examples": [
      [
        "Quito los platos de la mesa.",
        "Я убираю тарелки со стола."
      ],
      [
        "Se quita el abrigo en casa.",
        "Дома она снимает пальто."
      ]
    ],
    "cloze": "Yo ___ los platos de la mesa.",
    "clozeAnswers": [
      "quito"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "quito"
        ],
        [
          "tú",
          "quitas"
        ],
        [
          "él / ella / usted",
          "quita"
        ],
        [
          "nosotros / nosotras",
          "quitamos"
        ],
        [
          "vosotros / vosotras",
          "quitáis"
        ],
        [
          "ellos / ellas / ustedes",
          "quitan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "arreglar",
    "cat": "home",
    "word": "arreglar",
    "base": "arreglar",
    "gender": "глагол на -ar",
    "tr": "чинить, приводить в порядок",
    "ru": [
      "чинить",
      "приводить в порядок",
      "исправлять"
    ],
    "answers": [
      "arreglar"
    ],
    "art": null,
    "examples": [
      [
        "Arreglo mi habitación.",
        "Я привожу комнату в порядок."
      ],
      [
        "Tenemos que arreglar la lámpara.",
        "Нам нужно починить лампу."
      ]
    ],
    "cloze": "Yo ___ mi habitación.",
    "clozeAnswers": [
      "arreglo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "arreglo"
        ],
        [
          "tú",
          "arreglas"
        ],
        [
          "él / ella / usted",
          "arregla"
        ],
        [
          "nosotros / nosotras",
          "arreglamos"
        ],
        [
          "vosotros / vosotras",
          "arregláis"
        ],
        [
          "ellos / ellas / ustedes",
          "arreglan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Дом",
      "categoryOrder": 4,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "trabajar",
    "cat": "work",
    "word": "trabajar",
    "base": "trabajar",
    "gender": "глагол на -ar",
    "tr": "работать",
    "ru": [
      "работать"
    ],
    "answers": [
      "trabajar"
    ],
    "art": null,
    "examples": [
      [
        "Trabajo en una empresa grande.",
        "Я работаю в большой компании."
      ],
      [
        "Mi amiga trabaja desde casa.",
        "Моя подруга работает из дома."
      ]
    ],
    "cloze": "Mi amiga ___ desde casa.",
    "clozeAnswers": [
      "trabaja"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "trabajo"
        ],
        [
          "tú",
          "trabajas"
        ],
        [
          "él / ella / usted",
          "trabaja"
        ],
        [
          "nosotros / nosotras",
          "trabajamos"
        ],
        [
          "vosotros / vosotras",
          "trabajáis"
        ],
        [
          "ellos / ellas / ustedes",
          "trabajan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "estudiar",
    "cat": "work",
    "word": "estudiar",
    "base": "estudiar",
    "gender": "глагол на -ar",
    "tr": "учиться, изучать",
    "ru": [
      "учиться",
      "изучать"
    ],
    "answers": [
      "estudiar"
    ],
    "art": null,
    "examples": [
      [
        "Estudio español todos los días.",
        "Я учу испанский каждый день."
      ],
      [
        "Ella estudia diseño.",
        "Она изучает дизайн."
      ]
    ],
    "cloze": "Yo ___ español todos los días.",
    "clozeAnswers": [
      "estudio"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "estudio"
        ],
        [
          "tú",
          "estudias"
        ],
        [
          "él / ella / usted",
          "estudia"
        ],
        [
          "nosotros / nosotras",
          "estudiamos"
        ],
        [
          "vosotros / vosotras",
          "estudiáis"
        ],
        [
          "ellos / ellas / ustedes",
          "estudian"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "aprender",
    "cat": "work",
    "word": "aprender",
    "base": "aprender",
    "gender": "глагол на -er",
    "tr": "учить, узнавать новое",
    "ru": [
      "учить",
      "изучать",
      "узнавать новое"
    ],
    "answers": [
      "aprender"
    ],
    "art": null,
    "examples": [
      [
        "Aprendo palabras nuevas.",
        "Я учу новые слова."
      ],
      [
        "Aprendemos con la práctica.",
        "Мы учимся на практике."
      ]
    ],
    "cloze": "Yo ___ palabras nuevas.",
    "clozeAnswers": [
      "aprendo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "aprendo"
        ],
        [
          "tú",
          "aprendes"
        ],
        [
          "él / ella / usted",
          "aprende"
        ],
        [
          "nosotros / nosotras",
          "aprendemos"
        ],
        [
          "vosotros / vosotras",
          "aprendéis"
        ],
        [
          "ellos / ellas / ustedes",
          "aprenden"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "enseñar",
    "cat": "work",
    "word": "enseñar",
    "base": "enseñar",
    "gender": "глагол на -ar",
    "tr": "учить кого-то, показывать",
    "ru": [
      "обучать",
      "учить кого-то",
      "показывать"
    ],
    "answers": [
      "enseñar"
    ],
    "art": null,
    "examples": [
      [
        "Enseño el diseño a mi compañera.",
        "Я показываю дизайн коллеге."
      ],
      [
        "Mi profesor enseña español.",
        "Мой преподаватель учит испанскому."
      ]
    ],
    "cloze": "Yo ___ el diseño a mi compañera.",
    "clozeAnswers": [
      "enseño"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "enseño"
        ],
        [
          "tú",
          "enseñas"
        ],
        [
          "él / ella / usted",
          "enseña"
        ],
        [
          "nosotros / nosotras",
          "enseñamos"
        ],
        [
          "vosotros / vosotras",
          "enseñáis"
        ],
        [
          "ellos / ellas / ustedes",
          "enseñan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "leer",
    "cat": "work",
    "word": "leer",
    "base": "leer",
    "gender": "глагол на -er",
    "tr": "читать",
    "ru": [
      "читать"
    ],
    "answers": [
      "leer"
    ],
    "art": null,
    "examples": [
      [
        "Leo antes de dormir.",
        "Я читаю перед сном."
      ],
      [
        "Él lee las noticias.",
        "Он читает новости."
      ]
    ],
    "cloze": "Él ___ las noticias.",
    "clozeAnswers": [
      "lee"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "leo"
        ],
        [
          "tú",
          "lees"
        ],
        [
          "él / ella / usted",
          "lee"
        ],
        [
          "nosotros / nosotras",
          "leemos"
        ],
        [
          "vosotros / vosotras",
          "leéis"
        ],
        [
          "ellos / ellas / ustedes",
          "leen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "escribir",
    "cat": "work",
    "word": "escribir",
    "base": "escribir",
    "gender": "глагол на -ir",
    "tr": "писать",
    "ru": [
      "писать"
    ],
    "answers": [
      "escribir"
    ],
    "art": null,
    "examples": [
      [
        "Escribo un mensaje.",
        "Я пишу сообщение."
      ],
      [
        "Ella escribe historias cortas.",
        "Она пишет короткие истории."
      ]
    ],
    "cloze": "Yo ___ un mensaje.",
    "clozeAnswers": [
      "escribo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "escribo"
        ],
        [
          "tú",
          "escribes"
        ],
        [
          "él / ella / usted",
          "escribe"
        ],
        [
          "nosotros / nosotras",
          "escribimos"
        ],
        [
          "vosotros / vosotras",
          "escribís"
        ],
        [
          "ellos / ellas / ustedes",
          "escriben"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "empezar",
    "cat": "work",
    "word": "empezar",
    "base": "empezar",
    "gender": "e → ie",
    "tr": "начинать",
    "ru": [
      "начинать",
      "начать"
    ],
    "answers": [
      "empezar"
    ],
    "art": null,
    "examples": [
      [
        "Empiezo a trabajar a las nueve.",
        "Я начинаю работать в девять."
      ],
      [
        "La clase empieza pronto.",
        "Урок скоро начинается."
      ]
    ],
    "cloze": "Yo ___ a trabajar a las nueve.",
    "clozeAnswers": [
      "empiezo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "empiezo"
        ],
        [
          "tú",
          "empiezas"
        ],
        [
          "él / ella / usted",
          "empieza"
        ],
        [
          "nosotros / nosotras",
          "empezamos"
        ],
        [
          "vosotros / vosotras",
          "empezáis"
        ],
        [
          "ellos / ellas / ustedes",
          "empiezan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "terminar",
    "cat": "work",
    "word": "terminar",
    "base": "terminar",
    "gender": "глагол на -ar",
    "tr": "заканчивать",
    "ru": [
      "заканчивать",
      "закончить"
    ],
    "answers": [
      "terminar"
    ],
    "art": null,
    "examples": [
      [
        "Termino el trabajo a las seis.",
        "Я заканчиваю работу в шесть."
      ],
      [
        "Terminamos este proyecto mañana.",
        "Мы заканчиваем этот проект завтра."
      ]
    ],
    "cloze": "Yo ___ el trabajo a las seis.",
    "clozeAnswers": [
      "termino"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "termino"
        ],
        [
          "tú",
          "terminas"
        ],
        [
          "él / ella / usted",
          "termina"
        ],
        [
          "nosotros / nosotras",
          "terminamos"
        ],
        [
          "vosotros / vosotras",
          "termináis"
        ],
        [
          "ellos / ellas / ustedes",
          "terminan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "planear",
    "cat": "work",
    "word": "planear",
    "base": "planear",
    "gender": "глагол на -ar",
    "tr": "планировать",
    "ru": [
      "планировать"
    ],
    "answers": [
      "planear",
      "planificar"
    ],
    "art": null,
    "examples": [
      [
        "Planeo la semana el domingo.",
        "В воскресенье я планирую неделю."
      ],
      [
        "Planeamos un viaje corto.",
        "Мы планируем короткую поездку."
      ]
    ],
    "cloze": "Yo ___ la semana el domingo.",
    "clozeAnswers": [
      "planeo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "planeo"
        ],
        [
          "tú",
          "planeas"
        ],
        [
          "él / ella / usted",
          "planea"
        ],
        [
          "nosotros / nosotras",
          "planeamos"
        ],
        [
          "vosotros / vosotras",
          "planeáis"
        ],
        [
          "ellos / ellas / ustedes",
          "planean"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "organizar",
    "cat": "work",
    "word": "organizar",
    "base": "organizar",
    "gender": "глагол на -ar",
    "tr": "организовывать",
    "ru": [
      "организовывать",
      "организовать"
    ],
    "answers": [
      "organizar"
    ],
    "art": null,
    "examples": [
      [
        "Organizo mis tareas por la mañana.",
        "Утром я организую свои задачи."
      ],
      [
        "Ella organiza una reunión.",
        "Она организует встречу."
      ]
    ],
    "cloze": "Yo ___ mis tareas por la mañana.",
    "clozeAnswers": [
      "organizo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "organizo"
        ],
        [
          "tú",
          "organizas"
        ],
        [
          "él / ella / usted",
          "organiza"
        ],
        [
          "nosotros / nosotras",
          "organizamos"
        ],
        [
          "vosotros / vosotras",
          "organizáis"
        ],
        [
          "ellos / ellas / ustedes",
          "organizan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "enviar",
    "cat": "work",
    "word": "enviar",
    "base": "enviar",
    "gender": "í в формах",
    "tr": "отправлять",
    "ru": [
      "отправлять",
      "посылать"
    ],
    "answers": [
      "enviar"
    ],
    "art": null,
    "examples": [
      [
        "Envío el archivo por correo.",
        "Я отправляю файл по почте."
      ],
      [
        "Te envío la foto esta noche.",
        "Я отправлю тебе фотографию вечером."
      ]
    ],
    "cloze": "Yo ___ el archivo por correo.",
    "clozeAnswers": [
      "envío",
      "envio"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "envío"
        ],
        [
          "tú",
          "envías"
        ],
        [
          "él / ella / usted",
          "envía"
        ],
        [
          "nosotros / nosotras",
          "enviamos"
        ],
        [
          "vosotros / vosotras",
          "enviáis"
        ],
        [
          "ellos / ellas / ustedes",
          "envían"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "recibir",
    "cat": "work",
    "word": "recibir",
    "base": "recibir",
    "gender": "глагол на -ir",
    "tr": "получать, принимать",
    "ru": [
      "получать",
      "принимать"
    ],
    "answers": [
      "recibir"
    ],
    "art": null,
    "examples": [
      [
        "Recibo muchos mensajes.",
        "Я получаю много сообщений."
      ],
      [
        "Recibimos el pedido mañana.",
        "Мы получаем заказ завтра."
      ]
    ],
    "cloze": "Yo ___ muchos mensajes.",
    "clozeAnswers": [
      "recibo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "recibo"
        ],
        [
          "tú",
          "recibes"
        ],
        [
          "él / ella / usted",
          "recibe"
        ],
        [
          "nosotros / nosotras",
          "recibimos"
        ],
        [
          "vosotros / vosotras",
          "recibís"
        ],
        [
          "ellos / ellas / ustedes",
          "reciben"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Работа и учёба",
      "categoryOrder": 5,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "comprar",
    "cat": "shopping",
    "word": "comprar",
    "base": "comprar",
    "gender": "глагол на -ar",
    "tr": "покупать",
    "ru": [
      "покупать",
      "купить"
    ],
    "answers": [
      "comprar"
    ],
    "art": null,
    "examples": [
      [
        "Compro comida después del trabajo.",
        "Я покупаю продукты после работы."
      ],
      [
        "Compramos pan y leche.",
        "Мы покупаем хлеб и молоко."
      ]
    ],
    "cloze": "Yo ___ comida después del trabajo.",
    "clozeAnswers": [
      "compro"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "compro"
        ],
        [
          "tú",
          "compras"
        ],
        [
          "él / ella / usted",
          "compra"
        ],
        [
          "nosotros / nosotras",
          "compramos"
        ],
        [
          "vosotros / vosotras",
          "compráis"
        ],
        [
          "ellos / ellas / ustedes",
          "compran"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "pagar",
    "cat": "shopping",
    "word": "pagar",
    "base": "pagar",
    "gender": "глагол на -ar",
    "tr": "платить",
    "ru": [
      "платить",
      "оплачивать"
    ],
    "answers": [
      "pagar"
    ],
    "art": null,
    "examples": [
      [
        "Pago con tarjeta.",
        "Я плачу картой."
      ],
      [
        "¿Pagamos la cuenta juntos?",
        "Мы оплачиваем счёт вместе?"
      ]
    ],
    "cloze": "Yo ___ con tarjeta.",
    "clozeAnswers": [
      "pago"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "pago"
        ],
        [
          "tú",
          "pagas"
        ],
        [
          "él / ella / usted",
          "paga"
        ],
        [
          "nosotros / nosotras",
          "pagamos"
        ],
        [
          "vosotros / vosotras",
          "pagáis"
        ],
        [
          "ellos / ellas / ustedes",
          "pagan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "costar",
    "cat": "shopping",
    "word": "costar",
    "base": "costar",
    "gender": "o → ue",
    "tr": "стоить",
    "ru": [
      "стоить"
    ],
    "answers": [
      "costar"
    ],
    "art": null,
    "examples": [
      [
        "Este vestido cuesta cincuenta euros.",
        "Это платье стоит пятьдесят евро."
      ],
      [
        "¿Cuánto cuestan los zapatos?",
        "Сколько стоят туфли?"
      ]
    ],
    "cloze": "Este vestido ___ cincuenta euros.",
    "clozeAnswers": [
      "cuesta"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "cuesto"
        ],
        [
          "tú",
          "cuestas"
        ],
        [
          "él / ella / usted",
          "cuesta"
        ],
        [
          "nosotros / nosotras",
          "costamos"
        ],
        [
          "vosotros / vosotras",
          "costáis"
        ],
        [
          "ellos / ellas / ustedes",
          "cuestan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "elegir",
    "cat": "shopping",
    "word": "elegir",
    "base": "elegir",
    "gender": "e → i",
    "tr": "выбирать",
    "ru": [
      "выбирать",
      "выбрать"
    ],
    "answers": [
      "elegir"
    ],
    "art": null,
    "examples": [
      [
        "Elijo la opción más sencilla.",
        "Я выбираю самый простой вариант."
      ],
      [
        "Ella elige un bolso negro.",
        "Она выбирает чёрную сумку."
      ]
    ],
    "cloze": "Yo ___ la opción más sencilla.",
    "clozeAnswers": [
      "elijo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "elijo"
        ],
        [
          "tú",
          "eliges"
        ],
        [
          "él / ella / usted",
          "elige"
        ],
        [
          "nosotros / nosotras",
          "elegimos"
        ],
        [
          "vosotros / vosotras",
          "elegís"
        ],
        [
          "ellos / ellas / ustedes",
          "eligen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "llevar",
    "cat": "shopping",
    "word": "llevar",
    "base": "llevar",
    "gender": "глагол на -ar",
    "tr": "нести, брать с собой, носить",
    "ru": [
      "нести",
      "брать с собой",
      "носить"
    ],
    "answers": [
      "llevar"
    ],
    "art": null,
    "examples": [
      [
        "Llevo agua en el bolso.",
        "Я ношу воду в сумке."
      ],
      [
        "Ella lleva un vestido azul.",
        "На ней синее платье."
      ]
    ],
    "cloze": "Yo ___ agua en el bolso.",
    "clozeAnswers": [
      "llevo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "llevo"
        ],
        [
          "tú",
          "llevas"
        ],
        [
          "él / ella / usted",
          "lleva"
        ],
        [
          "nosotros / nosotras",
          "llevamos"
        ],
        [
          "vosotros / vosotras",
          "lleváis"
        ],
        [
          "ellos / ellas / ustedes",
          "llevan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "traer",
    "cat": "shopping",
    "word": "traer",
    "base": "traer",
    "gender": "неправильный",
    "tr": "приносить, привозить",
    "ru": [
      "приносить",
      "привозить"
    ],
    "answers": [
      "traer"
    ],
    "art": null,
    "examples": [
      [
        "Traigo postre para todos.",
        "Я приношу десерт для всех."
      ],
      [
        "¿Puedes traer agua?",
        "Можешь принести воды?"
      ]
    ],
    "cloze": "Yo ___ postre para todos.",
    "clozeAnswers": [
      "traigo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "traigo"
        ],
        [
          "tú",
          "traes"
        ],
        [
          "él / ella / usted",
          "trae"
        ],
        [
          "nosotros / nosotras",
          "traemos"
        ],
        [
          "vosotros / vosotras",
          "traéis"
        ],
        [
          "ellos / ellas / ustedes",
          "traen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "buscar",
    "cat": "shopping",
    "word": "buscar",
    "base": "buscar",
    "gender": "глагол на -ar",
    "tr": "искать",
    "ru": [
      "искать"
    ],
    "answers": [
      "buscar"
    ],
    "art": null,
    "examples": [
      [
        "Busco mis llaves.",
        "Я ищу свои ключи."
      ],
      [
        "Estamos buscando un regalo.",
        "Мы ищем подарок."
      ]
    ],
    "cloze": "Yo ___ mis llaves.",
    "clozeAnswers": [
      "busco"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "busco"
        ],
        [
          "tú",
          "buscas"
        ],
        [
          "él / ella / usted",
          "busca"
        ],
        [
          "nosotros / nosotras",
          "buscamos"
        ],
        [
          "vosotros / vosotras",
          "buscáis"
        ],
        [
          "ellos / ellas / ustedes",
          "buscan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "encontrar",
    "cat": "shopping",
    "word": "encontrar",
    "base": "encontrar",
    "gender": "o → ue",
    "tr": "находить, встречать",
    "ru": [
      "находить",
      "встречать"
    ],
    "answers": [
      "encontrar"
    ],
    "art": null,
    "examples": [
      [
        "Encuentro las llaves en la mesa.",
        "Я нахожу ключи на столе."
      ],
      [
        "No encontramos esta tienda.",
        "Мы не можем найти этот магазин."
      ]
    ],
    "cloze": "Yo ___ las llaves en la mesa.",
    "clozeAnswers": [
      "encuentro"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "encuentro"
        ],
        [
          "tú",
          "encuentras"
        ],
        [
          "él / ella / usted",
          "encuentra"
        ],
        [
          "nosotros / nosotras",
          "encontramos"
        ],
        [
          "vosotros / vosotras",
          "encontráis"
        ],
        [
          "ellos / ellas / ustedes",
          "encuentran"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "necesitar",
    "cat": "shopping",
    "word": "necesitar",
    "base": "necesitar",
    "gender": "глагол на -ar",
    "tr": "нуждаться; нуждаться в чём-то",
    "ru": [
      "нуждаться",
      "нужно"
    ],
    "answers": [
      "necesitar"
    ],
    "art": null,
    "examples": [
      [
        "Necesito comprar pan.",
        "Мне нужно купить хлеб."
      ],
      [
        "Necesitamos más tiempo.",
        "Нам нужно больше времени."
      ]
    ],
    "cloze": "Yo ___ comprar pan.",
    "clozeAnswers": [
      "necesito"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "necesito"
        ],
        [
          "tú",
          "necesitas"
        ],
        [
          "él / ella / usted",
          "necesita"
        ],
        [
          "nosotros / nosotras",
          "necesitamos"
        ],
        [
          "vosotros / vosotras",
          "necesitáis"
        ],
        [
          "ellos / ellas / ustedes",
          "necesitan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Покупки и дела",
      "categoryOrder": 6,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "hablar",
    "cat": "communication",
    "word": "hablar",
    "base": "hablar",
    "gender": "глагол на -ar",
    "tr": "говорить, разговаривать",
    "ru": [
      "говорить",
      "разговаривать"
    ],
    "answers": [
      "hablar"
    ],
    "art": null,
    "examples": [
      [
        "Hablo un poco de español.",
        "Я немного говорю по-испански."
      ],
      [
        "Hablamos del trabajo.",
        "Мы говорим о работе."
      ]
    ],
    "cloze": "Yo ___ español.",
    "clozeAnswers": [
      "hablo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "hablo"
        ],
        [
          "tú",
          "hablas"
        ],
        [
          "él / ella / usted",
          "habla"
        ],
        [
          "nosotros / nosotras",
          "hablamos"
        ],
        [
          "vosotros / vosotras",
          "habláis"
        ],
        [
          "ellos / ellas / ustedes",
          "hablan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "decir",
    "cat": "communication",
    "word": "decir",
    "base": "decir",
    "gender": "неправильный",
    "tr": "говорить, сказать",
    "ru": [
      "говорить",
      "сказать"
    ],
    "answers": [
      "decir"
    ],
    "art": null,
    "examples": [
      [
        "Digo la verdad.",
        "Я говорю правду."
      ],
      [
        "¿Qué dices?",
        "Что ты говоришь?"
      ]
    ],
    "cloze": "Yo ___ la verdad.",
    "clozeAnswers": [
      "digo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "digo"
        ],
        [
          "tú",
          "dices"
        ],
        [
          "él / ella / usted",
          "dice"
        ],
        [
          "nosotros / nosotras",
          "decimos"
        ],
        [
          "vosotros / vosotras",
          "decís"
        ],
        [
          "ellos / ellas / ustedes",
          "dicen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "preguntar",
    "cat": "communication",
    "word": "preguntar",
    "base": "preguntar",
    "gender": "глагол на -ar",
    "tr": "спрашивать",
    "ru": [
      "спрашивать",
      "задать вопрос"
    ],
    "answers": [
      "preguntar"
    ],
    "art": null,
    "examples": [
      [
        "Pregunto la dirección.",
        "Я спрашиваю дорогу."
      ],
      [
        "Ella pregunta por el precio.",
        "Она спрашивает о цене."
      ]
    ],
    "cloze": "Yo ___ la dirección.",
    "clozeAnswers": [
      "pregunto"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "pregunto"
        ],
        [
          "tú",
          "preguntas"
        ],
        [
          "él / ella / usted",
          "pregunta"
        ],
        [
          "nosotros / nosotras",
          "preguntamos"
        ],
        [
          "vosotros / vosotras",
          "preguntáis"
        ],
        [
          "ellos / ellas / ustedes",
          "preguntan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "responder",
    "cat": "communication",
    "word": "responder",
    "base": "responder",
    "gender": "глагол на -er",
    "tr": "отвечать",
    "ru": [
      "отвечать"
    ],
    "answers": [
      "responder",
      "contestar"
    ],
    "art": null,
    "examples": [
      [
        "Respondo al mensaje.",
        "Я отвечаю на сообщение."
      ],
      [
        "Él responde con calma.",
        "Он отвечает спокойно."
      ]
    ],
    "cloze": "Yo ___ al mensaje.",
    "clozeAnswers": [
      "respondo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "respondo"
        ],
        [
          "tú",
          "respondes"
        ],
        [
          "él / ella / usted",
          "responde"
        ],
        [
          "nosotros / nosotras",
          "respondemos"
        ],
        [
          "vosotros / vosotras",
          "respondéis"
        ],
        [
          "ellos / ellas / ustedes",
          "responden"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "escuchar",
    "cat": "communication",
    "word": "escuchar",
    "base": "escuchar",
    "gender": "глагол на -ar",
    "tr": "слушать",
    "ru": [
      "слушать"
    ],
    "answers": [
      "escuchar"
    ],
    "art": null,
    "examples": [
      [
        "Escucho música en el metro.",
        "Я слушаю музыку в метро."
      ],
      [
        "¿Me escuchas?",
        "Ты меня слушаешь?"
      ]
    ],
    "cloze": "Yo ___ música en el metro.",
    "clozeAnswers": [
      "escucho"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "escucho"
        ],
        [
          "tú",
          "escuchas"
        ],
        [
          "él / ella / usted",
          "escucha"
        ],
        [
          "nosotros / nosotras",
          "escuchamos"
        ],
        [
          "vosotros / vosotras",
          "escucháis"
        ],
        [
          "ellos / ellas / ustedes",
          "escuchan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "mirar",
    "cat": "communication",
    "word": "mirar",
    "base": "mirar",
    "gender": "глагол на -ar",
    "tr": "смотреть на что-то",
    "ru": [
      "смотреть",
      "смотреть на"
    ],
    "answers": [
      "mirar"
    ],
    "art": null,
    "examples": [
      [
        "Miro una serie por la noche.",
        "Вечером я смотрю сериал."
      ],
      [
        "Mira esta foto.",
        "Посмотри на эту фотографию."
      ]
    ],
    "cloze": "Yo ___ una serie por la noche.",
    "clozeAnswers": [
      "miro"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "miro"
        ],
        [
          "tú",
          "miras"
        ],
        [
          "él / ella / usted",
          "mira"
        ],
        [
          "nosotros / nosotras",
          "miramos"
        ],
        [
          "vosotros / vosotras",
          "miráis"
        ],
        [
          "ellos / ellas / ustedes",
          "miran"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "ver",
    "cat": "communication",
    "word": "ver",
    "base": "ver",
    "gender": "неправильный",
    "tr": "видеть, смотреть",
    "ru": [
      "видеть",
      "смотреть"
    ],
    "answers": [
      "ver"
    ],
    "art": null,
    "examples": [
      [
        "Veo a mis amigos el sábado.",
        "Я вижусь с друзьями в субботу."
      ],
      [
        "Vemos una película en casa.",
        "Мы смотрим фильм дома."
      ]
    ],
    "cloze": "Yo ___ a mis amigos el sábado.",
    "clozeAnswers": [
      "veo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "veo"
        ],
        [
          "tú",
          "ves"
        ],
        [
          "él / ella / usted",
          "ve"
        ],
        [
          "nosotros / nosotras",
          "vemos"
        ],
        [
          "vosotros / vosotras",
          "veis"
        ],
        [
          "ellos / ellas / ustedes",
          "ven"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "llamar",
    "cat": "communication",
    "word": "llamar",
    "base": "llamar",
    "gender": "глагол на -ar",
    "tr": "звонить, называть",
    "ru": [
      "звонить",
      "называть"
    ],
    "answers": [
      "llamar"
    ],
    "art": null,
    "examples": [
      [
        "Llamo a mi madre por la tarde.",
        "Я звоню маме вечером."
      ],
      [
        "Te llamamos mañana.",
        "Мы позвоним тебе завтра."
      ]
    ],
    "cloze": "Yo ___ a mi madre por la tarde.",
    "clozeAnswers": [
      "llamo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "llamo"
        ],
        [
          "tú",
          "llamas"
        ],
        [
          "él / ella / usted",
          "llama"
        ],
        [
          "nosotros / nosotras",
          "llamamos"
        ],
        [
          "vosotros / vosotras",
          "llamáis"
        ],
        [
          "ellos / ellas / ustedes",
          "llaman"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "explicar",
    "cat": "communication",
    "word": "explicar",
    "base": "explicar",
    "gender": "глагол на -ar",
    "tr": "объяснять",
    "ru": [
      "объяснять"
    ],
    "answers": [
      "explicar"
    ],
    "art": null,
    "examples": [
      [
        "Explico el problema.",
        "Я объясняю проблему."
      ],
      [
        "La profesora explica la regla.",
        "Преподавательница объясняет правило."
      ]
    ],
    "cloze": "Yo ___ el problema.",
    "clozeAnswers": [
      "explico"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "explico"
        ],
        [
          "tú",
          "explicas"
        ],
        [
          "él / ella / usted",
          "explica"
        ],
        [
          "nosotros / nosotras",
          "explicamos"
        ],
        [
          "vosotros / vosotras",
          "explicáis"
        ],
        [
          "ellos / ellas / ustedes",
          "explican"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Общение",
      "categoryOrder": 7,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "salir",
    "cat": "movement",
    "word": "salir",
    "base": "salir",
    "gender": "неправильный",
    "tr": "выходить, уезжать",
    "ru": [
      "выходить",
      "уезжать"
    ],
    "answers": [
      "salir"
    ],
    "art": null,
    "examples": [
      [
        "Salgo de casa a las ocho.",
        "Я выхожу из дома в восемь."
      ],
      [
        "Salimos con amigos el viernes.",
        "В пятницу мы встречаемся с друзьями."
      ]
    ],
    "cloze": "Yo ___ de casa a las ocho.",
    "clozeAnswers": [
      "salgo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "salgo"
        ],
        [
          "tú",
          "sales"
        ],
        [
          "él / ella / usted",
          "sale"
        ],
        [
          "nosotros / nosotras",
          "salimos"
        ],
        [
          "vosotros / vosotras",
          "salís"
        ],
        [
          "ellos / ellas / ustedes",
          "salen"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Передвижение",
      "categoryOrder": 8,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "llegar",
    "cat": "movement",
    "word": "llegar",
    "base": "llegar",
    "gender": "глагол на -ar",
    "tr": "приходить, приезжать, прибывать",
    "ru": [
      "приходить",
      "приезжать",
      "прибывать"
    ],
    "answers": [
      "llegar"
    ],
    "art": null,
    "examples": [
      [
        "Llego al trabajo a las nueve.",
        "Я приезжаю на работу в девять."
      ],
      [
        "El autobús llega tarde.",
        "Автобус приезжает поздно."
      ]
    ],
    "cloze": "Yo ___ al trabajo a las nueve.",
    "clozeAnswers": [
      "llego"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "llego"
        ],
        [
          "tú",
          "llegas"
        ],
        [
          "él / ella / usted",
          "llega"
        ],
        [
          "nosotros / nosotras",
          "llegamos"
        ],
        [
          "vosotros / vosotras",
          "llegáis"
        ],
        [
          "ellos / ellas / ustedes",
          "llegan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Передвижение",
      "categoryOrder": 8,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "volver",
    "cat": "movement",
    "word": "volver",
    "base": "volver",
    "gender": "o → ue",
    "tr": "возвращаться",
    "ru": [
      "возвращаться",
      "вернуться"
    ],
    "answers": [
      "volver"
    ],
    "art": null,
    "examples": [
      [
        "Vuelvo a casa por la noche.",
        "Я возвращаюсь домой вечером."
      ],
      [
        "Volvemos el domingo.",
        "Мы возвращаемся в воскресенье."
      ]
    ],
    "cloze": "Yo ___ a casa por la noche.",
    "clozeAnswers": [
      "vuelvo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "vuelvo"
        ],
        [
          "tú",
          "vuelves"
        ],
        [
          "él / ella / usted",
          "vuelve"
        ],
        [
          "nosotros / nosotras",
          "volvemos"
        ],
        [
          "vosotros / vosotras",
          "volvéis"
        ],
        [
          "ellos / ellas / ustedes",
          "vuelven"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Передвижение",
      "categoryOrder": 8,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "caminar",
    "cat": "movement",
    "word": "caminar",
    "base": "caminar",
    "gender": "глагол на -ar",
    "tr": "ходить пешком, гулять",
    "ru": [
      "ходить пешком",
      "гулять"
    ],
    "answers": [
      "caminar"
    ],
    "art": null,
    "examples": [
      [
        "Camino hasta el metro.",
        "Я иду пешком до метро."
      ],
      [
        "Caminamos por el parque.",
        "Мы гуляем по парку."
      ]
    ],
    "cloze": "Yo ___ hasta el metro.",
    "clozeAnswers": [
      "camino"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "camino"
        ],
        [
          "tú",
          "caminas"
        ],
        [
          "él / ella / usted",
          "camina"
        ],
        [
          "nosotros / nosotras",
          "caminamos"
        ],
        [
          "vosotros / vosotras",
          "camináis"
        ],
        [
          "ellos / ellas / ustedes",
          "caminan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Передвижение",
      "categoryOrder": 8,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "subir",
    "cat": "movement",
    "word": "subir",
    "base": "subir",
    "gender": "глагол на -ir",
    "tr": "подниматься, загружать",
    "ru": [
      "подниматься",
      "загружать"
    ],
    "answers": [
      "subir"
    ],
    "art": null,
    "examples": [
      [
        "Subo por las escaleras.",
        "Я поднимаюсь по лестнице."
      ],
      [
        "Subimos las fotos a la nube.",
        "Мы загружаем фотографии в облако."
      ]
    ],
    "cloze": "Yo ___ por las escaleras.",
    "clozeAnswers": [
      "subo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "subo"
        ],
        [
          "tú",
          "subes"
        ],
        [
          "él / ella / usted",
          "sube"
        ],
        [
          "nosotros / nosotras",
          "subimos"
        ],
        [
          "vosotros / vosotras",
          "subís"
        ],
        [
          "ellos / ellas / ustedes",
          "suben"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Передвижение",
      "categoryOrder": 8,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "bajar",
    "cat": "movement",
    "word": "bajar",
    "base": "bajar",
    "gender": "глагол на -ar",
    "tr": "спускаться, выходить из транспорта",
    "ru": [
      "спускаться",
      "выходить"
    ],
    "answers": [
      "bajar"
    ],
    "art": null,
    "examples": [
      [
        "Bajo en la próxima parada.",
        "Я выхожу на следующей остановке."
      ],
      [
        "Bajamos las escaleras.",
        "Мы спускаемся по лестнице."
      ]
    ],
    "cloze": "Yo ___ en la próxima parada.",
    "clozeAnswers": [
      "bajo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "bajo"
        ],
        [
          "tú",
          "bajas"
        ],
        [
          "él / ella / usted",
          "baja"
        ],
        [
          "nosotros / nosotras",
          "bajamos"
        ],
        [
          "vosotros / vosotras",
          "bajáis"
        ],
        [
          "ellos / ellas / ustedes",
          "bajan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Передвижение",
      "categoryOrder": 8,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "recordar",
    "cat": "plans",
    "word": "recordar",
    "base": "recordar",
    "gender": "o → ue",
    "tr": "помнить, вспоминать",
    "ru": [
      "помнить",
      "вспоминать"
    ],
    "answers": [
      "recordar"
    ],
    "art": null,
    "examples": [
      [
        "Recuerdo esta palabra.",
        "Я помню это слово."
      ],
      [
        "¿Recuerdas su nombre?",
        "Ты помнишь его имя?"
      ]
    ],
    "cloze": "Yo ___ esta palabra.",
    "clozeAnswers": [
      "recuerdo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "recuerdo"
        ],
        [
          "tú",
          "recuerdas"
        ],
        [
          "él / ella / usted",
          "recuerda"
        ],
        [
          "nosotros / nosotras",
          "recordamos"
        ],
        [
          "vosotros / vosotras",
          "recordáis"
        ],
        [
          "ellos / ellas / ustedes",
          "recuerdan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Планы и решения",
      "categoryOrder": 9,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "olvidar",
    "cat": "plans",
    "word": "olvidar",
    "base": "olvidar",
    "gender": "глагол на -ar",
    "tr": "забывать",
    "ru": [
      "забывать",
      "забыть"
    ],
    "answers": [
      "olvidar"
    ],
    "art": null,
    "examples": [
      [
        "Olvido las llaves a veces.",
        "Иногда я забываю ключи."
      ],
      [
        "No olvidamos tu cumpleaños.",
        "Мы не забываем твой день рождения."
      ]
    ],
    "cloze": "Yo ___ las llaves a veces.",
    "clozeAnswers": [
      "olvido"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "olvido"
        ],
        [
          "tú",
          "olvidas"
        ],
        [
          "él / ella / usted",
          "olvida"
        ],
        [
          "nosotros / nosotras",
          "olvidamos"
        ],
        [
          "vosotros / vosotras",
          "olvidáis"
        ],
        [
          "ellos / ellas / ustedes",
          "olvidan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Планы и решения",
      "categoryOrder": 9,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "decidir",
    "cat": "plans",
    "word": "decidir",
    "base": "decidir",
    "gender": "глагол на -ir",
    "tr": "решать, принимать решение",
    "ru": [
      "решать",
      "принимать решение"
    ],
    "answers": [
      "decidir"
    ],
    "art": null,
    "examples": [
      [
        "Decido trabajar desde casa.",
        "Я решаю работать из дома."
      ],
      [
        "Decidimos ir mañana.",
        "Мы решаем пойти завтра."
      ]
    ],
    "cloze": "Yo ___ trabajar desde casa.",
    "clozeAnswers": [
      "decido"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "decido"
        ],
        [
          "tú",
          "decides"
        ],
        [
          "él / ella / usted",
          "decide"
        ],
        [
          "nosotros / nosotras",
          "decidimos"
        ],
        [
          "vosotros / vosotras",
          "decidís"
        ],
        [
          "ellos / ellas / ustedes",
          "deciden"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Планы и решения",
      "categoryOrder": 9,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "intentar",
    "cat": "plans",
    "word": "intentar",
    "base": "intentar",
    "gender": "глагол на -ar",
    "tr": "пытаться, стараться",
    "ru": [
      "пытаться",
      "стараться"
    ],
    "answers": [
      "intentar"
    ],
    "art": null,
    "examples": [
      [
        "Intento hablar español.",
        "Я стараюсь говорить по-испански."
      ],
      [
        "Intentamos llegar temprano.",
        "Мы пытаемся прийти рано."
      ]
    ],
    "cloze": "Yo ___ hablar español.",
    "clozeAnswers": [
      "intento"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "intento"
        ],
        [
          "tú",
          "intentas"
        ],
        [
          "él / ella / usted",
          "intenta"
        ],
        [
          "nosotros / nosotras",
          "intentamos"
        ],
        [
          "vosotros / vosotras",
          "intentáis"
        ],
        [
          "ellos / ellas / ustedes",
          "intentan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Планы и решения",
      "categoryOrder": 9,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "quedar",
    "cat": "plans",
    "word": "quedar",
    "base": "quedar",
    "gender": "глагол на -ar",
    "tr": "договариваться о встрече; оставаться",
    "ru": [
      "договариваться о встрече",
      "оставаться",
      "встречаться"
    ],
    "answers": [
      "quedar"
    ],
    "art": null,
    "examples": [
      [
        "Quedo con una amiga el sábado.",
        "В субботу я встречаюсь с подругой."
      ],
      [
        "Nos quedan dos días.",
        "У нас остаётся два дня."
      ]
    ],
    "cloze": "Yo ___ con una amiga el sábado.",
    "clozeAnswers": [
      "quedo"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "quedo"
        ],
        [
          "tú",
          "quedas"
        ],
        [
          "él / ella / usted",
          "queda"
        ],
        [
          "nosotros / nosotras",
          "quedamos"
        ],
        [
          "vosotros / vosotras",
          "quedáis"
        ],
        [
          "ellos / ellas / ustedes",
          "quedan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Планы и решения",
      "categoryOrder": 9,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "esperar",
    "cat": "plans",
    "word": "esperar",
    "base": "esperar",
    "gender": "глагол на -ar",
    "tr": "ждать, надеяться",
    "ru": [
      "ждать",
      "надеяться"
    ],
    "answers": [
      "esperar"
    ],
    "art": null,
    "examples": [
      [
        "Espero el autobús.",
        "Я жду автобус."
      ],
      [
        "Esperamos viajar en verano.",
        "Мы надеемся поехать летом."
      ]
    ],
    "cloze": "Yo ___ el autobús.",
    "clozeAnswers": [
      "espero"
    ],
    "table": {
      "headers": [
        "Лицо",
        "Форма в Presente"
      ],
      "rows": [
        [
          "yo",
          "espero"
        ],
        [
          "tú",
          "esperas"
        ],
        [
          "él / ella / usted",
          "espera"
        ],
        [
          "nosotros / nosotras",
          "esperamos"
        ],
        [
          "vosotros / vosotras",
          "esperáis"
        ],
        [
          "ellos / ellas / ustedes",
          "esperan"
        ]
      ]
    },
    "meta": {
      "categoryTitle": "Планы и решения",
      "categoryOrder": 9,
      "allCategoryTitle": "Все глаголы"
    }
  }
];

const EXERCISES = [
  {
    "id": "v1",
    "topic": "verbs",
    "skill": "Значение глагола",
    "q": "Как по-испански «быть» в значении постоянного признака?",
    "a": [
      "ser"
    ],
    "e": "Ser используют для происхождения, профессии, характера и других устойчивых признаков."
  },
  {
    "id": "v2",
    "topic": "verbs",
    "skill": "Значение глагола",
    "q": "Как по-испански «быть, находиться» в значении состояния или места?",
    "a": [
      "estar"
    ],
    "e": "Estar используют для состояния и местонахождения."
  },
  {
    "id": "v3",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: иметь.",
    "a": [
      "tener"
    ]
  },
  {
    "id": "v4",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: идти, ехать.",
    "a": [
      "ir"
    ]
  },
  {
    "id": "v5",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: делать.",
    "a": [
      "hacer"
    ]
  },
  {
    "id": "v6",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: жить.",
    "a": [
      "vivir"
    ]
  },
  {
    "id": "v7",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: работать.",
    "a": [
      "trabajar"
    ]
  },
  {
    "id": "v8",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: читать.",
    "a": [
      "leer"
    ]
  },
  {
    "id": "v9",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: слушать.",
    "a": [
      "escuchar"
    ]
  },
  {
    "id": "v10",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: говорить.",
    "a": [
      "hablar"
    ]
  },
  {
    "id": "v11",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: отдыхать.",
    "a": [
      "descansar"
    ]
  },
  {
    "id": "v12",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: пить.",
    "a": [
      "beber"
    ]
  },
  {
    "id": "v13",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: учить, изучать.",
    "a": [
      "aprender",
      "estudiar"
    ],
    "e": "Aprender — усваивать и учиться; estudiar — заниматься изучением предмета."
  },
  {
    "id": "v14",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: встречаться, договариваться о встрече.",
    "a": [
      "quedar",
      "quedarse"
    ],
    "e": "Quedar — договориться или встретиться; quedarse — остаться."
  },
  {
    "id": "v15",
    "topic": "verbs",
    "skill": "Перевод",
    "q": "Переведи на испанский: возвращаться, становиться.",
    "a": [
      "volver",
      "volverse"
    ],
    "e": "Volver — возвращаться; volverse — становиться, превращаться."
  },
  {
    "id": "study_verbs_ser_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: быть, являться.",
    "a": [
      "ser"
    ],
    "e": "Правильный вариант: ser."
  },
  {
    "id": "study_verbs_ser_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: ser.",
    "a": [
      "быть",
      "являться",
      "быть, являться"
    ],
    "e": "ser — быть, являться."
  },
  {
    "id": "study_verbs_ser_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я дизайнер.»: Madrid ___ una ciudad grande.",
    "a": [
      "es"
    ],
    "e": "Soy diseñadora. — Я дизайнер."
  },
  {
    "id": "study_verbs_estar_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: быть, находиться.",
    "a": [
      "estar"
    ],
    "e": "Правильный вариант: estar."
  },
  {
    "id": "study_verbs_estar_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: estar.",
    "a": [
      "быть",
      "находиться",
      "быть, находиться"
    ],
    "e": "estar — быть, находиться."
  },
  {
    "id": "study_verbs_estar_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я дома.»: Ahora ___ en casa.",
    "a": [
      "estoy"
    ],
    "e": "Estoy en casa. — Я дома."
  },
  {
    "id": "study_verbs_tener_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: иметь.",
    "a": [
      "tener"
    ],
    "e": "Правильный вариант: tener."
  },
  {
    "id": "study_verbs_tener_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: tener.",
    "a": [
      "иметь",
      "иметь у себя"
    ],
    "e": "tener — иметь."
  },
  {
    "id": "study_verbs_tener_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У меня есть кот.»: Yo ___ un gato.",
    "a": [
      "tengo"
    ],
    "e": "Tengo un gato. — У меня есть кот."
  },
  {
    "id": "study_verbs_hacer_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: делать.",
    "a": [
      "hacer"
    ],
    "e": "Правильный вариант: hacer."
  },
  {
    "id": "study_verbs_hacer_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: hacer.",
    "a": [
      "делать"
    ],
    "e": "hacer — делать."
  },
  {
    "id": "study_verbs_hacer_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я занимаюсь спортом по понедельникам.»: ¿Qué ___ hoy?",
    "a": [
      "haces"
    ],
    "e": "Hago deporte los lunes. — Я занимаюсь спортом по понедельникам."
  },
  {
    "id": "study_verbs_ir_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: идти, ехать.",
    "a": [
      "ir"
    ],
    "e": "Правильный вариант: ir."
  },
  {
    "id": "study_verbs_ir_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: ir.",
    "a": [
      "идти",
      "ехать",
      "идти, ехать"
    ],
    "e": "ir — идти, ехать."
  },
  {
    "id": "study_verbs_ir_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я еду на работу на метро.»: Yo ___ al trabajo.",
    "a": [
      "voy"
    ],
    "e": "Voy al trabajo en metro. — Я еду на работу на метро."
  },
  {
    "id": "study_verbs_venir_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: приходить, приезжать.",
    "a": [
      "venir"
    ],
    "e": "Правильный вариант: venir."
  },
  {
    "id": "study_verbs_venir_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: venir.",
    "a": [
      "приходить",
      "приезжать",
      "приходить, приезжать"
    ],
    "e": "venir — приходить, приезжать."
  },
  {
    "id": "study_verbs_venir_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я приезжаю из Мадрида.»: ¿___ conmigo?",
    "a": [
      "vienes"
    ],
    "e": "Vengo de Madrid. — Я приезжаю из Мадрида."
  },
  {
    "id": "study_verbs_querer_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: хотеть, любить.",
    "a": [
      "querer"
    ],
    "e": "Правильный вариант: querer."
  },
  {
    "id": "study_verbs_querer_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: querer.",
    "a": [
      "хотеть",
      "любить",
      "хотеть, любить"
    ],
    "e": "querer — хотеть, любить."
  },
  {
    "id": "study_verbs_querer_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я хочу кофе.»: Yo ___ un café.",
    "a": [
      "quiero"
    ],
    "e": "Quiero un café. — Я хочу кофе."
  },
  {
    "id": "study_verbs_poder_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мочь.",
    "a": [
      "poder"
    ],
    "e": "Правильный вариант: poder."
  },
  {
    "id": "study_verbs_poder_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: poder.",
    "a": [
      "мочь"
    ],
    "e": "poder — мочь."
  },
  {
    "id": "study_verbs_poder_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я могу тебе помочь.»: Yo ___ ayudarte.",
    "a": [
      "puedo"
    ],
    "e": "Puedo ayudarte. — Я могу тебе помочь."
  },
  {
    "id": "study_verbs_deber_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: быть должным, следует.",
    "a": [
      "deber"
    ],
    "e": "Правильный вариант: deber."
  },
  {
    "id": "study_verbs_deber_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: deber.",
    "a": [
      "быть должным",
      "следует",
      "должен",
      "быть должным, следует"
    ],
    "e": "deber — быть должным, следует."
  },
  {
    "id": "study_verbs_deber_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Завтра я должна работать.»: Tú ___ descansar más.",
    "a": [
      "debes"
    ],
    "e": "Debo trabajar mañana. — Завтра я должна работать."
  },
  {
    "id": "study_verbs_saber_es",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Вспомни",
    "q": "Переведи на испанский: знать, уметь.",
    "a": [
      "saber"
    ],
    "e": "Правильный вариант: saber."
  },
  {
    "id": "study_verbs_saber_ru",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "Узнай",
    "q": "Переведи на русский: saber.",
    "a": [
      "знать",
      "уметь",
      "знать, уметь"
    ],
    "e": "saber — знать, уметь."
  },
  {
    "id": "study_verbs_saber_ctx",
    "topic": "verbs",
    "foodCat": "core",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я знаю ответ.»: Yo ___ la respuesta.",
    "a": [
      "sé",
      "se"
    ],
    "e": "Sé la respuesta. — Я знаю ответ."
  },
  {
    "id": "study_verbs_comer_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: есть, кушать.",
    "a": [
      "comer"
    ],
    "e": "Правильный вариант: comer."
  },
  {
    "id": "study_verbs_comer_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: comer.",
    "a": [
      "есть",
      "кушать",
      "есть, кушать"
    ],
    "e": "comer — есть, кушать."
  },
  {
    "id": "study_verbs_comer_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ем в два часа.»: Nosotros ___ juntos.",
    "a": [
      "comemos"
    ],
    "e": "Como a las dos. — Я ем в два часа."
  },
  {
    "id": "study_verbs_beber_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: пить.",
    "a": [
      "beber"
    ],
    "e": "Правильный вариант: beber."
  },
  {
    "id": "study_verbs_beber_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: beber.",
    "a": [
      "пить"
    ],
    "e": "beber — пить."
  },
  {
    "id": "study_verbs_beber_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пью много воды.»: Yo ___ mucha agua.",
    "a": [
      "bebo"
    ],
    "e": "Bebo mucha agua. — Я пью много воды."
  },
  {
    "id": "study_verbs_tomar_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: брать; пить, принимать.",
    "a": [
      "tomar"
    ],
    "e": "Правильный вариант: tomar."
  },
  {
    "id": "study_verbs_tomar_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: tomar.",
    "a": [
      "брать",
      "пить",
      "принимать",
      "брать; пить, принимать"
    ],
    "e": "tomar — брать; пить, принимать."
  },
  {
    "id": "study_verbs_tomar_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пью кофе по утрам.»: Yo ___ café por la mañana.",
    "a": [
      "tomo"
    ],
    "e": "Tomo café por la mañana. — Я пью кофе по утрам."
  },
  {
    "id": "study_verbs_desayunar_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: завтракать.",
    "a": [
      "desayunar"
    ],
    "e": "Правильный вариант: desayunar."
  },
  {
    "id": "study_verbs_desayunar_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: desayunar.",
    "a": [
      "завтракать"
    ],
    "e": "desayunar — завтракать."
  },
  {
    "id": "study_verbs_desayunar_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ем йогурт и фрукты на завтрак.»: Yo ___ yogur y fruta.",
    "a": [
      "desayuno"
    ],
    "e": "Desayuno yogur y fruta. — Я ем йогурт и фрукты на завтрак."
  },
  {
    "id": "study_verbs_almorzar_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: обедать.",
    "a": [
      "almorzar"
    ],
    "e": "Правильный вариант: almorzar."
  },
  {
    "id": "study_verbs_almorzar_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: almorzar.",
    "a": [
      "обедать"
    ],
    "e": "almorzar — обедать."
  },
  {
    "id": "study_verbs_almorzar_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я обедаю с коллегами.»: Yo ___ con mis compañeros.",
    "a": [
      "almuerzo"
    ],
    "e": "Almuerzo con mis compañeros. — Я обедаю с коллегами."
  },
  {
    "id": "study_verbs_cenar_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ужинать.",
    "a": [
      "cenar"
    ],
    "e": "Правильный вариант: cenar."
  },
  {
    "id": "study_verbs_cenar_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: cenar.",
    "a": [
      "ужинать"
    ],
    "e": "cenar — ужинать."
  },
  {
    "id": "study_verbs_cenar_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ужинаю в восемь.»: Yo ___ a las ocho.",
    "a": [
      "ceno"
    ],
    "e": "Ceno a las ocho. — Я ужинаю в восемь."
  },
  {
    "id": "study_verbs_cocinar_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: готовить еду.",
    "a": [
      "cocinar"
    ],
    "e": "Правильный вариант: cocinar."
  },
  {
    "id": "study_verbs_cocinar_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: cocinar.",
    "a": [
      "готовить",
      "готовить еду"
    ],
    "e": "cocinar — готовить еду."
  },
  {
    "id": "study_verbs_cocinar_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я готовлю пасту на ужин.»: Yo ___ pasta para la cena.",
    "a": [
      "cocino"
    ],
    "e": "Cocino pasta para la cena. — Я готовлю пасту на ужин."
  },
  {
    "id": "study_verbs_preparar_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: готовить, подготавливать.",
    "a": [
      "preparar"
    ],
    "e": "Правильный вариант: preparar."
  },
  {
    "id": "study_verbs_preparar_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: preparar.",
    "a": [
      "готовить",
      "подготавливать",
      "готовить, подготавливать"
    ],
    "e": "preparar — готовить, подготавливать."
  },
  {
    "id": "study_verbs_preparar_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я готовлю завтрак.»: Yo ___ el desayuno.",
    "a": [
      "preparo"
    ],
    "e": "Preparo el desayuno. — Я готовлю завтрак."
  },
  {
    "id": "study_verbs_pedir_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: просить, заказывать.",
    "a": [
      "pedir"
    ],
    "e": "Правильный вариант: pedir."
  },
  {
    "id": "study_verbs_pedir_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: pedir.",
    "a": [
      "просить",
      "заказывать",
      "просить, заказывать"
    ],
    "e": "pedir — просить, заказывать."
  },
  {
    "id": "study_verbs_pedir_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я заказываю салат.»: Yo ___ una ensalada.",
    "a": [
      "pido"
    ],
    "e": "Pido una ensalada. — Я заказываю салат."
  },
  {
    "id": "study_verbs_probar_es",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Вспомни",
    "q": "Переведи на испанский: пробовать.",
    "a": [
      "probar"
    ],
    "e": "Правильный вариант: probar."
  },
  {
    "id": "study_verbs_probar_ru",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "Узнай",
    "q": "Переведи на русский: probar.",
    "a": [
      "пробовать",
      "попробовать"
    ],
    "e": "probar — пробовать."
  },
  {
    "id": "study_verbs_probar_ctx",
    "topic": "verbs",
    "foodCat": "food",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пробую новый десерт.»: Yo ___ un postre nuevo.",
    "a": [
      "pruebo"
    ],
    "e": "Pruebo un postre nuevo. — Я пробую новый десерт."
  },
  {
    "id": "study_verbs_vivir_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: жить.",
    "a": [
      "vivir"
    ],
    "e": "Правильный вариант: vivir."
  },
  {
    "id": "study_verbs_vivir_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: vivir.",
    "a": [
      "жить"
    ],
    "e": "vivir — жить."
  },
  {
    "id": "study_verbs_vivir_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я живу в Мадриде.»: Yo ___ en Madrid.",
    "a": [
      "vivo"
    ],
    "e": "Vivo en Madrid. — Я живу в Мадриде."
  },
  {
    "id": "study_verbs_dormir_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: спать.",
    "a": [
      "dormir"
    ],
    "e": "Правильный вариант: dormir."
  },
  {
    "id": "study_verbs_dormir_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: dormir.",
    "a": [
      "спать"
    ],
    "e": "dormir — спать."
  },
  {
    "id": "study_verbs_dormir_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я сплю восемь часов.»: Yo ___ ocho horas.",
    "a": [
      "duermo"
    ],
    "e": "Duermo ocho horas. — Я сплю восемь часов."
  },
  {
    "id": "study_verbs_despertarse_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: просыпаться.",
    "a": [
      "despertarse"
    ],
    "e": "Правильный вариант: despertarse."
  },
  {
    "id": "study_verbs_despertarse_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: despertarse.",
    "a": [
      "просыпаться"
    ],
    "e": "despertarse — просыпаться."
  },
  {
    "id": "study_verbs_despertarse_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я просыпаюсь в семь.»: Me ___ a las siete.",
    "a": [
      "despierto"
    ],
    "e": "Me despierto a las siete. — Я просыпаюсь в семь."
  },
  {
    "id": "study_verbs_levantarse_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вставать, подниматься.",
    "a": [
      "levantarse"
    ],
    "e": "Правильный вариант: levantarse."
  },
  {
    "id": "study_verbs_levantarse_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: levantarse.",
    "a": [
      "вставать",
      "подниматься",
      "вставать, подниматься"
    ],
    "e": "levantarse — вставать, подниматься."
  },
  {
    "id": "study_verbs_levantarse_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я встаю рано.»: Me ___ temprano.",
    "a": [
      "levanto"
    ],
    "e": "Me levanto temprano. — Я встаю рано."
  },
  {
    "id": "study_verbs_acostarse_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ложиться спать.",
    "a": [
      "acostarse"
    ],
    "e": "Правильный вариант: acostarse."
  },
  {
    "id": "study_verbs_acostarse_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: acostarse.",
    "a": [
      "ложиться",
      "ложиться спать"
    ],
    "e": "acostarse — ложиться спать."
  },
  {
    "id": "study_verbs_acostarse_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ложусь до полуночи.»: Me ___ antes de medianoche.",
    "a": [
      "acuesto"
    ],
    "e": "Me acuesto antes de medianoche. — Я ложусь до полуночи."
  },
  {
    "id": "study_verbs_ducharse_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: принимать душ.",
    "a": [
      "ducharse"
    ],
    "e": "Правильный вариант: ducharse."
  },
  {
    "id": "study_verbs_ducharse_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: ducharse.",
    "a": [
      "принимать душ",
      "мыться в душе"
    ],
    "e": "ducharse — принимать душ."
  },
  {
    "id": "study_verbs_ducharse_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я принимаю душ утром.»: Me ___ por la mañana.",
    "a": [
      "ducho"
    ],
    "e": "Me ducho por la mañana. — Я принимаю душ утром."
  },
  {
    "id": "study_verbs_vestirse_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: одеваться.",
    "a": [
      "vestirse"
    ],
    "e": "Правильный вариант: vestirse."
  },
  {
    "id": "study_verbs_vestirse_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: vestirse.",
    "a": [
      "одеваться"
    ],
    "e": "vestirse — одеваться."
  },
  {
    "id": "study_verbs_vestirse_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я быстро одеваюсь.»: Me ___ rápido.",
    "a": [
      "visto"
    ],
    "e": "Me visto rápido. — Я быстро одеваюсь."
  },
  {
    "id": "study_verbs_descansar_es",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Вспомни",
    "q": "Переведи на испанский: отдыхать.",
    "a": [
      "descansar"
    ],
    "e": "Правильный вариант: descansar."
  },
  {
    "id": "study_verbs_descansar_ru",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "Узнай",
    "q": "Переведи на русский: descansar.",
    "a": [
      "отдыхать"
    ],
    "e": "descansar — отдыхать."
  },
  {
    "id": "study_verbs_descansar_ctx",
    "topic": "verbs",
    "foodCat": "routine",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вечером я отдыхаю дома.»: Yo ___ en casa.",
    "a": [
      "descanso"
    ],
    "e": "Descanso en casa por la noche. — Вечером я отдыхаю дома."
  },
  {
    "id": "study_verbs_limpiar_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: убирать, чистить.",
    "a": [
      "limpiar"
    ],
    "e": "Правильный вариант: limpiar."
  },
  {
    "id": "study_verbs_limpiar_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: limpiar.",
    "a": [
      "убирать",
      "чистить",
      "убирать, чистить"
    ],
    "e": "limpiar — убирать, чистить."
  },
  {
    "id": "study_verbs_limpiar_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я убираю кухню.»: Yo ___ la cocina.",
    "a": [
      "limpio"
    ],
    "e": "Limpio la cocina. — Я убираю кухню."
  },
  {
    "id": "study_verbs_lavar_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мыть, стирать.",
    "a": [
      "lavar"
    ],
    "e": "Правильный вариант: lavar."
  },
  {
    "id": "study_verbs_lavar_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: lavar.",
    "a": [
      "мыть",
      "стирать",
      "мыть, стирать"
    ],
    "e": "lavar — мыть, стирать."
  },
  {
    "id": "study_verbs_lavar_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я мою посуду после ужина.»: Yo ___ los platos.",
    "a": [
      "lavo"
    ],
    "e": "Lavo los platos después de cenar. — Я мою посуду после ужина."
  },
  {
    "id": "study_verbs_ordenar_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: наводить порядок, упорядочивать.",
    "a": [
      "ordenar"
    ],
    "e": "Правильный вариант: ordenar."
  },
  {
    "id": "study_verbs_ordenar_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: ordenar.",
    "a": [
      "наводить порядок",
      "упорядочивать",
      "наводить порядок, упорядочивать"
    ],
    "e": "ordenar — наводить порядок, упорядочивать."
  },
  {
    "id": "study_verbs_ordenar_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я навожу порядок в комнате.»: Yo ___ mi habitación.",
    "a": [
      "ordeno"
    ],
    "e": "Ordeno mi habitación. — Я навожу порядок в комнате."
  },
  {
    "id": "study_verbs_guardar_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: класть на место, хранить.",
    "a": [
      "guardar"
    ],
    "e": "Правильный вариант: guardar."
  },
  {
    "id": "study_verbs_guardar_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: guardar.",
    "a": [
      "класть на место",
      "хранить",
      "сохранять",
      "класть на место, хранить"
    ],
    "e": "guardar — класть на место, хранить."
  },
  {
    "id": "study_verbs_guardar_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я убираю одежду в шкаф.»: Yo ___ la ropa en el armario.",
    "a": [
      "guardo"
    ],
    "e": "Guardo la ropa en el armario. — Я убираю одежду в шкаф."
  },
  {
    "id": "study_verbs_abrir_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: открывать.",
    "a": [
      "abrir"
    ],
    "e": "Правильный вариант: abrir."
  },
  {
    "id": "study_verbs_abrir_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: abrir.",
    "a": [
      "открывать",
      "открыть"
    ],
    "e": "abrir — открывать."
  },
  {
    "id": "study_verbs_abrir_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я открываю окно.»: Yo ___ la ventana.",
    "a": [
      "abro"
    ],
    "e": "Abro la ventana. — Я открываю окно."
  },
  {
    "id": "study_verbs_cerrar_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: закрывать.",
    "a": [
      "cerrar"
    ],
    "e": "Правильный вариант: cerrar."
  },
  {
    "id": "study_verbs_cerrar_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: cerrar.",
    "a": [
      "закрывать",
      "закрыть"
    ],
    "e": "cerrar — закрывать."
  },
  {
    "id": "study_verbs_cerrar_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я закрываю дверь.»: Yo ___ la puerta.",
    "a": [
      "cierro"
    ],
    "e": "Cierro la puerta. — Я закрываю дверь."
  },
  {
    "id": "study_verbs_poner_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: класть, ставить, надевать.",
    "a": [
      "poner"
    ],
    "e": "Правильный вариант: poner."
  },
  {
    "id": "study_verbs_poner_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: poner.",
    "a": [
      "класть",
      "ставить",
      "надевать",
      "класть, ставить, надевать"
    ],
    "e": "poner — класть, ставить, надевать."
  },
  {
    "id": "study_verbs_poner_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я кладу телефон на стол.»: Yo ___ el teléfono sobre la mesa.",
    "a": [
      "pongo"
    ],
    "e": "Pongo el teléfono sobre la mesa. — Я кладу телефон на стол."
  },
  {
    "id": "study_verbs_quitar_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: убирать, снимать.",
    "a": [
      "quitar"
    ],
    "e": "Правильный вариант: quitar."
  },
  {
    "id": "study_verbs_quitar_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: quitar.",
    "a": [
      "убирать",
      "снимать",
      "убирать, снимать"
    ],
    "e": "quitar — убирать, снимать."
  },
  {
    "id": "study_verbs_quitar_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я убираю тарелки со стола.»: Yo ___ los platos de la mesa.",
    "a": [
      "quito"
    ],
    "e": "Quito los platos de la mesa. — Я убираю тарелки со стола."
  },
  {
    "id": "study_verbs_arreglar_es",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Вспомни",
    "q": "Переведи на испанский: чинить, приводить в порядок.",
    "a": [
      "arreglar"
    ],
    "e": "Правильный вариант: arreglar."
  },
  {
    "id": "study_verbs_arreglar_ru",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "Узнай",
    "q": "Переведи на русский: arreglar.",
    "a": [
      "чинить",
      "приводить в порядок",
      "исправлять",
      "чинить, приводить в порядок"
    ],
    "e": "arreglar — чинить, приводить в порядок."
  },
  {
    "id": "study_verbs_arreglar_ctx",
    "topic": "verbs",
    "foodCat": "home",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я привожу комнату в порядок.»: Yo ___ mi habitación.",
    "a": [
      "arreglo"
    ],
    "e": "Arreglo mi habitación. — Я привожу комнату в порядок."
  },
  {
    "id": "study_verbs_trabajar_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: работать.",
    "a": [
      "trabajar"
    ],
    "e": "Правильный вариант: trabajar."
  },
  {
    "id": "study_verbs_trabajar_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: trabajar.",
    "a": [
      "работать"
    ],
    "e": "trabajar — работать."
  },
  {
    "id": "study_verbs_trabajar_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я работаю в большой компании.»: Mi amiga ___ desde casa.",
    "a": [
      "trabaja"
    ],
    "e": "Trabajo en una empresa grande. — Я работаю в большой компании."
  },
  {
    "id": "study_verbs_estudiar_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: учиться, изучать.",
    "a": [
      "estudiar"
    ],
    "e": "Правильный вариант: estudiar."
  },
  {
    "id": "study_verbs_estudiar_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: estudiar.",
    "a": [
      "учиться",
      "изучать",
      "учиться, изучать"
    ],
    "e": "estudiar — учиться, изучать."
  },
  {
    "id": "study_verbs_estudiar_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я учу испанский каждый день.»: Yo ___ español todos los días.",
    "a": [
      "estudio"
    ],
    "e": "Estudio español todos los días. — Я учу испанский каждый день."
  },
  {
    "id": "study_verbs_aprender_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: учить, узнавать новое.",
    "a": [
      "aprender"
    ],
    "e": "Правильный вариант: aprender."
  },
  {
    "id": "study_verbs_aprender_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: aprender.",
    "a": [
      "учить",
      "изучать",
      "узнавать новое",
      "учить, узнавать новое"
    ],
    "e": "aprender — учить, узнавать новое."
  },
  {
    "id": "study_verbs_aprender_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я учу новые слова.»: Yo ___ palabras nuevas.",
    "a": [
      "aprendo"
    ],
    "e": "Aprendo palabras nuevas. — Я учу новые слова."
  },
  {
    "id": "study_verbs_enseñar_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: учить кого-то, показывать.",
    "a": [
      "enseñar"
    ],
    "e": "Правильный вариант: enseñar."
  },
  {
    "id": "study_verbs_enseñar_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: enseñar.",
    "a": [
      "обучать",
      "учить кого-то",
      "показывать",
      "учить кого-то, показывать"
    ],
    "e": "enseñar — учить кого-то, показывать."
  },
  {
    "id": "study_verbs_enseñar_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я показываю дизайн коллеге.»: Yo ___ el diseño a mi compañera.",
    "a": [
      "enseño"
    ],
    "e": "Enseño el diseño a mi compañera. — Я показываю дизайн коллеге."
  },
  {
    "id": "study_verbs_leer_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: читать.",
    "a": [
      "leer"
    ],
    "e": "Правильный вариант: leer."
  },
  {
    "id": "study_verbs_leer_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: leer.",
    "a": [
      "читать"
    ],
    "e": "leer — читать."
  },
  {
    "id": "study_verbs_leer_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я читаю перед сном.»: Él ___ las noticias.",
    "a": [
      "lee"
    ],
    "e": "Leo antes de dormir. — Я читаю перед сном."
  },
  {
    "id": "study_verbs_escribir_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: писать.",
    "a": [
      "escribir"
    ],
    "e": "Правильный вариант: escribir."
  },
  {
    "id": "study_verbs_escribir_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: escribir.",
    "a": [
      "писать"
    ],
    "e": "escribir — писать."
  },
  {
    "id": "study_verbs_escribir_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пишу сообщение.»: Yo ___ un mensaje.",
    "a": [
      "escribo"
    ],
    "e": "Escribo un mensaje. — Я пишу сообщение."
  },
  {
    "id": "study_verbs_empezar_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: начинать.",
    "a": [
      "empezar"
    ],
    "e": "Правильный вариант: empezar."
  },
  {
    "id": "study_verbs_empezar_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: empezar.",
    "a": [
      "начинать",
      "начать"
    ],
    "e": "empezar — начинать."
  },
  {
    "id": "study_verbs_empezar_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я начинаю работать в девять.»: Yo ___ a trabajar a las nueve.",
    "a": [
      "empiezo"
    ],
    "e": "Empiezo a trabajar a las nueve. — Я начинаю работать в девять."
  },
  {
    "id": "study_verbs_terminar_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: заканчивать.",
    "a": [
      "terminar"
    ],
    "e": "Правильный вариант: terminar."
  },
  {
    "id": "study_verbs_terminar_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: terminar.",
    "a": [
      "заканчивать",
      "закончить"
    ],
    "e": "terminar — заканчивать."
  },
  {
    "id": "study_verbs_terminar_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я заканчиваю работу в шесть.»: Yo ___ el trabajo a las seis.",
    "a": [
      "termino"
    ],
    "e": "Termino el trabajo a las seis. — Я заканчиваю работу в шесть."
  },
  {
    "id": "study_verbs_planear_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: планировать.",
    "a": [
      "planear",
      "planificar"
    ],
    "e": "Правильный вариант: planear."
  },
  {
    "id": "study_verbs_planear_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: planear.",
    "a": [
      "планировать"
    ],
    "e": "planear — планировать."
  },
  {
    "id": "study_verbs_planear_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В воскресенье я планирую неделю.»: Yo ___ la semana el domingo.",
    "a": [
      "planeo"
    ],
    "e": "Planeo la semana el domingo. — В воскресенье я планирую неделю."
  },
  {
    "id": "study_verbs_organizar_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: организовывать.",
    "a": [
      "organizar"
    ],
    "e": "Правильный вариант: organizar."
  },
  {
    "id": "study_verbs_organizar_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: organizar.",
    "a": [
      "организовывать",
      "организовать"
    ],
    "e": "organizar — организовывать."
  },
  {
    "id": "study_verbs_organizar_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Утром я организую свои задачи.»: Yo ___ mis tareas por la mañana.",
    "a": [
      "organizo"
    ],
    "e": "Organizo mis tareas por la mañana. — Утром я организую свои задачи."
  },
  {
    "id": "study_verbs_enviar_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: отправлять.",
    "a": [
      "enviar"
    ],
    "e": "Правильный вариант: enviar."
  },
  {
    "id": "study_verbs_enviar_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: enviar.",
    "a": [
      "отправлять",
      "посылать"
    ],
    "e": "enviar — отправлять."
  },
  {
    "id": "study_verbs_enviar_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я отправляю файл по почте.»: Yo ___ el archivo por correo.",
    "a": [
      "envío",
      "envio"
    ],
    "e": "Envío el archivo por correo. — Я отправляю файл по почте."
  },
  {
    "id": "study_verbs_recibir_es",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Вспомни",
    "q": "Переведи на испанский: получать, принимать.",
    "a": [
      "recibir"
    ],
    "e": "Правильный вариант: recibir."
  },
  {
    "id": "study_verbs_recibir_ru",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "Узнай",
    "q": "Переведи на русский: recibir.",
    "a": [
      "получать",
      "принимать",
      "получать, принимать"
    ],
    "e": "recibir — получать, принимать."
  },
  {
    "id": "study_verbs_recibir_ctx",
    "topic": "verbs",
    "foodCat": "work",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я получаю много сообщений.»: Yo ___ muchos mensajes.",
    "a": [
      "recibo"
    ],
    "e": "Recibo muchos mensajes. — Я получаю много сообщений."
  },
  {
    "id": "study_verbs_comprar_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: покупать.",
    "a": [
      "comprar"
    ],
    "e": "Правильный вариант: comprar."
  },
  {
    "id": "study_verbs_comprar_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: comprar.",
    "a": [
      "покупать",
      "купить"
    ],
    "e": "comprar — покупать."
  },
  {
    "id": "study_verbs_comprar_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я покупаю продукты после работы.»: Yo ___ comida después del trabajo.",
    "a": [
      "compro"
    ],
    "e": "Compro comida después del trabajo. — Я покупаю продукты после работы."
  },
  {
    "id": "study_verbs_pagar_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: платить.",
    "a": [
      "pagar"
    ],
    "e": "Правильный вариант: pagar."
  },
  {
    "id": "study_verbs_pagar_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: pagar.",
    "a": [
      "платить",
      "оплачивать"
    ],
    "e": "pagar — платить."
  },
  {
    "id": "study_verbs_pagar_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я плачу картой.»: Yo ___ con tarjeta.",
    "a": [
      "pago"
    ],
    "e": "Pago con tarjeta. — Я плачу картой."
  },
  {
    "id": "study_verbs_costar_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: стоить.",
    "a": [
      "costar"
    ],
    "e": "Правильный вариант: costar."
  },
  {
    "id": "study_verbs_costar_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: costar.",
    "a": [
      "стоить"
    ],
    "e": "costar — стоить."
  },
  {
    "id": "study_verbs_costar_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Это платье стоит пятьдесят евро.»: Este vestido ___ cincuenta euros.",
    "a": [
      "cuesta"
    ],
    "e": "Este vestido cuesta cincuenta euros. — Это платье стоит пятьдесят евро."
  },
  {
    "id": "study_verbs_elegir_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: выбирать.",
    "a": [
      "elegir"
    ],
    "e": "Правильный вариант: elegir."
  },
  {
    "id": "study_verbs_elegir_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: elegir.",
    "a": [
      "выбирать",
      "выбрать"
    ],
    "e": "elegir — выбирать."
  },
  {
    "id": "study_verbs_elegir_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я выбираю самый простой вариант.»: Yo ___ la opción más sencilla.",
    "a": [
      "elijo"
    ],
    "e": "Elijo la opción más sencilla. — Я выбираю самый простой вариант."
  },
  {
    "id": "study_verbs_llevar_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: нести, брать с собой, носить.",
    "a": [
      "llevar"
    ],
    "e": "Правильный вариант: llevar."
  },
  {
    "id": "study_verbs_llevar_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: llevar.",
    "a": [
      "нести",
      "брать с собой",
      "носить",
      "нести, брать с собой, носить"
    ],
    "e": "llevar — нести, брать с собой, носить."
  },
  {
    "id": "study_verbs_llevar_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ношу воду в сумке.»: Yo ___ agua en el bolso.",
    "a": [
      "llevo"
    ],
    "e": "Llevo agua en el bolso. — Я ношу воду в сумке."
  },
  {
    "id": "study_verbs_traer_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: приносить, привозить.",
    "a": [
      "traer"
    ],
    "e": "Правильный вариант: traer."
  },
  {
    "id": "study_verbs_traer_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: traer.",
    "a": [
      "приносить",
      "привозить",
      "приносить, привозить"
    ],
    "e": "traer — приносить, привозить."
  },
  {
    "id": "study_verbs_traer_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я приношу десерт для всех.»: Yo ___ postre para todos.",
    "a": [
      "traigo"
    ],
    "e": "Traigo postre para todos. — Я приношу десерт для всех."
  },
  {
    "id": "study_verbs_buscar_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: искать.",
    "a": [
      "buscar"
    ],
    "e": "Правильный вариант: buscar."
  },
  {
    "id": "study_verbs_buscar_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: buscar.",
    "a": [
      "искать"
    ],
    "e": "buscar — искать."
  },
  {
    "id": "study_verbs_buscar_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ищу свои ключи.»: Yo ___ mis llaves.",
    "a": [
      "busco"
    ],
    "e": "Busco mis llaves. — Я ищу свои ключи."
  },
  {
    "id": "study_verbs_encontrar_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: находить, встречать.",
    "a": [
      "encontrar"
    ],
    "e": "Правильный вариант: encontrar."
  },
  {
    "id": "study_verbs_encontrar_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: encontrar.",
    "a": [
      "находить",
      "встречать",
      "находить, встречать"
    ],
    "e": "encontrar — находить, встречать."
  },
  {
    "id": "study_verbs_encontrar_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я нахожу ключи на столе.»: Yo ___ las llaves en la mesa.",
    "a": [
      "encuentro"
    ],
    "e": "Encuentro las llaves en la mesa. — Я нахожу ключи на столе."
  },
  {
    "id": "study_verbs_necesitar_es",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Вспомни",
    "q": "Переведи на испанский: нуждаться; нуждаться в чём-то.",
    "a": [
      "necesitar"
    ],
    "e": "Правильный вариант: necesitar."
  },
  {
    "id": "study_verbs_necesitar_ru",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "Узнай",
    "q": "Переведи на русский: necesitar.",
    "a": [
      "нуждаться",
      "нужно",
      "нуждаться; нуждаться в чём-то"
    ],
    "e": "necesitar — нуждаться; нуждаться в чём-то."
  },
  {
    "id": "study_verbs_necesitar_ctx",
    "topic": "verbs",
    "foodCat": "shopping",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мне нужно купить хлеб.»: Yo ___ comprar pan.",
    "a": [
      "necesito"
    ],
    "e": "Necesito comprar pan. — Мне нужно купить хлеб."
  },
  {
    "id": "study_verbs_hablar_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: говорить, разговаривать.",
    "a": [
      "hablar"
    ],
    "e": "Правильный вариант: hablar."
  },
  {
    "id": "study_verbs_hablar_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: hablar.",
    "a": [
      "говорить",
      "разговаривать",
      "говорить, разговаривать"
    ],
    "e": "hablar — говорить, разговаривать."
  },
  {
    "id": "study_verbs_hablar_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я немного говорю по-испански.»: Yo ___ español.",
    "a": [
      "hablo"
    ],
    "e": "Hablo un poco de español. — Я немного говорю по-испански."
  },
  {
    "id": "study_verbs_decir_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: говорить, сказать.",
    "a": [
      "decir"
    ],
    "e": "Правильный вариант: decir."
  },
  {
    "id": "study_verbs_decir_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: decir.",
    "a": [
      "говорить",
      "сказать",
      "говорить, сказать"
    ],
    "e": "decir — говорить, сказать."
  },
  {
    "id": "study_verbs_decir_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я говорю правду.»: Yo ___ la verdad.",
    "a": [
      "digo"
    ],
    "e": "Digo la verdad. — Я говорю правду."
  },
  {
    "id": "study_verbs_preguntar_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: спрашивать.",
    "a": [
      "preguntar"
    ],
    "e": "Правильный вариант: preguntar."
  },
  {
    "id": "study_verbs_preguntar_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: preguntar.",
    "a": [
      "спрашивать",
      "задать вопрос"
    ],
    "e": "preguntar — спрашивать."
  },
  {
    "id": "study_verbs_preguntar_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я спрашиваю дорогу.»: Yo ___ la dirección.",
    "a": [
      "pregunto"
    ],
    "e": "Pregunto la dirección. — Я спрашиваю дорогу."
  },
  {
    "id": "study_verbs_responder_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: отвечать.",
    "a": [
      "responder",
      "contestar"
    ],
    "e": "Правильный вариант: responder."
  },
  {
    "id": "study_verbs_responder_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: responder.",
    "a": [
      "отвечать"
    ],
    "e": "responder — отвечать."
  },
  {
    "id": "study_verbs_responder_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я отвечаю на сообщение.»: Yo ___ al mensaje.",
    "a": [
      "respondo"
    ],
    "e": "Respondo al mensaje. — Я отвечаю на сообщение."
  },
  {
    "id": "study_verbs_escuchar_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: слушать.",
    "a": [
      "escuchar"
    ],
    "e": "Правильный вариант: escuchar."
  },
  {
    "id": "study_verbs_escuchar_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: escuchar.",
    "a": [
      "слушать"
    ],
    "e": "escuchar — слушать."
  },
  {
    "id": "study_verbs_escuchar_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я слушаю музыку в метро.»: Yo ___ música en el metro.",
    "a": [
      "escucho"
    ],
    "e": "Escucho música en el metro. — Я слушаю музыку в метро."
  },
  {
    "id": "study_verbs_mirar_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: смотреть на что-то.",
    "a": [
      "mirar"
    ],
    "e": "Правильный вариант: mirar."
  },
  {
    "id": "study_verbs_mirar_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: mirar.",
    "a": [
      "смотреть",
      "смотреть на",
      "смотреть на что-то"
    ],
    "e": "mirar — смотреть на что-то."
  },
  {
    "id": "study_verbs_mirar_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вечером я смотрю сериал.»: Yo ___ una serie por la noche.",
    "a": [
      "miro"
    ],
    "e": "Miro una serie por la noche. — Вечером я смотрю сериал."
  },
  {
    "id": "study_verbs_ver_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: видеть, смотреть.",
    "a": [
      "ver"
    ],
    "e": "Правильный вариант: ver."
  },
  {
    "id": "study_verbs_ver_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: ver.",
    "a": [
      "видеть",
      "смотреть",
      "видеть, смотреть"
    ],
    "e": "ver — видеть, смотреть."
  },
  {
    "id": "study_verbs_ver_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я вижусь с друзьями в субботу.»: Yo ___ a mis amigos el sábado.",
    "a": [
      "veo"
    ],
    "e": "Veo a mis amigos el sábado. — Я вижусь с друзьями в субботу."
  },
  {
    "id": "study_verbs_llamar_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: звонить, называть.",
    "a": [
      "llamar"
    ],
    "e": "Правильный вариант: llamar."
  },
  {
    "id": "study_verbs_llamar_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: llamar.",
    "a": [
      "звонить",
      "называть",
      "звонить, называть"
    ],
    "e": "llamar — звонить, называть."
  },
  {
    "id": "study_verbs_llamar_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я звоню маме вечером.»: Yo ___ a mi madre por la tarde.",
    "a": [
      "llamo"
    ],
    "e": "Llamo a mi madre por la tarde. — Я звоню маме вечером."
  },
  {
    "id": "study_verbs_explicar_es",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Вспомни",
    "q": "Переведи на испанский: объяснять.",
    "a": [
      "explicar"
    ],
    "e": "Правильный вариант: explicar."
  },
  {
    "id": "study_verbs_explicar_ru",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "Узнай",
    "q": "Переведи на русский: explicar.",
    "a": [
      "объяснять"
    ],
    "e": "explicar — объяснять."
  },
  {
    "id": "study_verbs_explicar_ctx",
    "topic": "verbs",
    "foodCat": "communication",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я объясняю проблему.»: Yo ___ el problema.",
    "a": [
      "explico"
    ],
    "e": "Explico el problema. — Я объясняю проблему."
  },
  {
    "id": "study_verbs_salir_es",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: выходить, уезжать.",
    "a": [
      "salir"
    ],
    "e": "Правильный вариант: salir."
  },
  {
    "id": "study_verbs_salir_ru",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Узнай",
    "q": "Переведи на русский: salir.",
    "a": [
      "выходить",
      "уезжать",
      "выходить, уезжать"
    ],
    "e": "salir — выходить, уезжать."
  },
  {
    "id": "study_verbs_salir_ctx",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я выхожу из дома в восемь.»: Yo ___ de casa a las ocho.",
    "a": [
      "salgo"
    ],
    "e": "Salgo de casa a las ocho. — Я выхожу из дома в восемь."
  },
  {
    "id": "study_verbs_llegar_es",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: приходить, приезжать, прибывать.",
    "a": [
      "llegar"
    ],
    "e": "Правильный вариант: llegar."
  },
  {
    "id": "study_verbs_llegar_ru",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Узнай",
    "q": "Переведи на русский: llegar.",
    "a": [
      "приходить",
      "приезжать",
      "прибывать",
      "приходить, приезжать, прибывать"
    ],
    "e": "llegar — приходить, приезжать, прибывать."
  },
  {
    "id": "study_verbs_llegar_ctx",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я приезжаю на работу в девять.»: Yo ___ al trabajo a las nueve.",
    "a": [
      "llego"
    ],
    "e": "Llego al trabajo a las nueve. — Я приезжаю на работу в девять."
  },
  {
    "id": "study_verbs_volver_es",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: возвращаться.",
    "a": [
      "volver"
    ],
    "e": "Правильный вариант: volver."
  },
  {
    "id": "study_verbs_volver_ru",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Узнай",
    "q": "Переведи на русский: volver.",
    "a": [
      "возвращаться",
      "вернуться"
    ],
    "e": "volver — возвращаться."
  },
  {
    "id": "study_verbs_volver_ctx",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я возвращаюсь домой вечером.»: Yo ___ a casa por la noche.",
    "a": [
      "vuelvo"
    ],
    "e": "Vuelvo a casa por la noche. — Я возвращаюсь домой вечером."
  },
  {
    "id": "study_verbs_caminar_es",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ходить пешком, гулять.",
    "a": [
      "caminar"
    ],
    "e": "Правильный вариант: caminar."
  },
  {
    "id": "study_verbs_caminar_ru",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Узнай",
    "q": "Переведи на русский: caminar.",
    "a": [
      "ходить пешком",
      "гулять",
      "ходить пешком, гулять"
    ],
    "e": "caminar — ходить пешком, гулять."
  },
  {
    "id": "study_verbs_caminar_ctx",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я иду пешком до метро.»: Yo ___ hasta el metro.",
    "a": [
      "camino"
    ],
    "e": "Camino hasta el metro. — Я иду пешком до метро."
  },
  {
    "id": "study_verbs_subir_es",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: подниматься, загружать.",
    "a": [
      "subir"
    ],
    "e": "Правильный вариант: subir."
  },
  {
    "id": "study_verbs_subir_ru",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Узнай",
    "q": "Переведи на русский: subir.",
    "a": [
      "подниматься",
      "загружать",
      "подниматься, загружать"
    ],
    "e": "subir — подниматься, загружать."
  },
  {
    "id": "study_verbs_subir_ctx",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я поднимаюсь по лестнице.»: Yo ___ por las escaleras.",
    "a": [
      "subo"
    ],
    "e": "Subo por las escaleras. — Я поднимаюсь по лестнице."
  },
  {
    "id": "study_verbs_bajar_es",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: спускаться, выходить из транспорта.",
    "a": [
      "bajar"
    ],
    "e": "Правильный вариант: bajar."
  },
  {
    "id": "study_verbs_bajar_ru",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "Узнай",
    "q": "Переведи на русский: bajar.",
    "a": [
      "спускаться",
      "выходить",
      "спускаться, выходить из транспорта"
    ],
    "e": "bajar — спускаться, выходить из транспорта."
  },
  {
    "id": "study_verbs_bajar_ctx",
    "topic": "verbs",
    "foodCat": "movement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я выхожу на следующей остановке.»: Yo ___ en la próxima parada.",
    "a": [
      "bajo"
    ],
    "e": "Bajo en la próxima parada. — Я выхожу на следующей остановке."
  },
  {
    "id": "study_verbs_recordar_es",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Вспомни",
    "q": "Переведи на испанский: помнить, вспоминать.",
    "a": [
      "recordar"
    ],
    "e": "Правильный вариант: recordar."
  },
  {
    "id": "study_verbs_recordar_ru",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Узнай",
    "q": "Переведи на русский: recordar.",
    "a": [
      "помнить",
      "вспоминать",
      "помнить, вспоминать"
    ],
    "e": "recordar — помнить, вспоминать."
  },
  {
    "id": "study_verbs_recordar_ctx",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я помню это слово.»: Yo ___ esta palabra.",
    "a": [
      "recuerdo"
    ],
    "e": "Recuerdo esta palabra. — Я помню это слово."
  },
  {
    "id": "study_verbs_olvidar_es",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Вспомни",
    "q": "Переведи на испанский: забывать.",
    "a": [
      "olvidar"
    ],
    "e": "Правильный вариант: olvidar."
  },
  {
    "id": "study_verbs_olvidar_ru",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Узнай",
    "q": "Переведи на русский: olvidar.",
    "a": [
      "забывать",
      "забыть"
    ],
    "e": "olvidar — забывать."
  },
  {
    "id": "study_verbs_olvidar_ctx",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Иногда я забываю ключи.»: Yo ___ las llaves a veces.",
    "a": [
      "olvido"
    ],
    "e": "Olvido las llaves a veces. — Иногда я забываю ключи."
  },
  {
    "id": "study_verbs_decidir_es",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Вспомни",
    "q": "Переведи на испанский: решать, принимать решение.",
    "a": [
      "decidir"
    ],
    "e": "Правильный вариант: decidir."
  },
  {
    "id": "study_verbs_decidir_ru",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Узнай",
    "q": "Переведи на русский: decidir.",
    "a": [
      "решать",
      "принимать решение",
      "решать, принимать решение"
    ],
    "e": "decidir — решать, принимать решение."
  },
  {
    "id": "study_verbs_decidir_ctx",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я решаю работать из дома.»: Yo ___ trabajar desde casa.",
    "a": [
      "decido"
    ],
    "e": "Decido trabajar desde casa. — Я решаю работать из дома."
  },
  {
    "id": "study_verbs_intentar_es",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Вспомни",
    "q": "Переведи на испанский: пытаться, стараться.",
    "a": [
      "intentar"
    ],
    "e": "Правильный вариант: intentar."
  },
  {
    "id": "study_verbs_intentar_ru",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Узнай",
    "q": "Переведи на русский: intentar.",
    "a": [
      "пытаться",
      "стараться",
      "пытаться, стараться"
    ],
    "e": "intentar — пытаться, стараться."
  },
  {
    "id": "study_verbs_intentar_ctx",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я стараюсь говорить по-испански.»: Yo ___ hablar español.",
    "a": [
      "intento"
    ],
    "e": "Intento hablar español. — Я стараюсь говорить по-испански."
  },
  {
    "id": "study_verbs_quedar_es",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Вспомни",
    "q": "Переведи на испанский: договариваться о встрече; оставаться.",
    "a": [
      "quedar"
    ],
    "e": "Правильный вариант: quedar."
  },
  {
    "id": "study_verbs_quedar_ru",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Узнай",
    "q": "Переведи на русский: quedar.",
    "a": [
      "договариваться о встрече",
      "оставаться",
      "встречаться",
      "договариваться о встрече; оставаться"
    ],
    "e": "quedar — договариваться о встрече; оставаться."
  },
  {
    "id": "study_verbs_quedar_ctx",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В субботу я встречаюсь с подругой.»: Yo ___ con una amiga el sábado.",
    "a": [
      "quedo"
    ],
    "e": "Quedo con una amiga el sábado. — В субботу я встречаюсь с подругой."
  },
  {
    "id": "study_verbs_esperar_es",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ждать, надеяться.",
    "a": [
      "esperar"
    ],
    "e": "Правильный вариант: esperar."
  },
  {
    "id": "study_verbs_esperar_ru",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "Узнай",
    "q": "Переведи на русский: esperar.",
    "a": [
      "ждать",
      "надеяться",
      "ждать, надеяться"
    ],
    "e": "esperar — ждать, надеяться."
  },
  {
    "id": "study_verbs_esperar_ctx",
    "topic": "verbs",
    "foodCat": "plans",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я жду автобус.»: Yo ___ el autobús.",
    "a": [
      "espero"
    ],
    "e": "Espero el autobús. — Я жду автобус."
  },
  {
    "id": "choice_verbs_ser",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: быть, являться.",
    "a": [
      "ser"
    ],
    "options": [
      "ser",
      "estar",
      "tener",
      "hacer"
    ],
    "e": "ser — быть, являться."
  },
  {
    "id": "choice_verbs_estar",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: быть, находиться.",
    "a": [
      "estar"
    ],
    "options": [
      "estar",
      "tener",
      "hacer",
      "ir"
    ],
    "e": "estar — быть, находиться."
  },
  {
    "id": "choice_verbs_tener",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: иметь.",
    "a": [
      "tener"
    ],
    "options": [
      "tener",
      "hacer",
      "ir",
      "venir"
    ],
    "e": "tener — иметь."
  },
  {
    "id": "choice_verbs_hacer",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: делать.",
    "a": [
      "hacer"
    ],
    "options": [
      "hacer",
      "ir",
      "venir",
      "querer"
    ],
    "e": "hacer — делать."
  },
  {
    "id": "choice_verbs_ir",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: идти, ехать.",
    "a": [
      "ir"
    ],
    "options": [
      "ir",
      "venir",
      "querer",
      "poder"
    ],
    "e": "ir — идти, ехать."
  },
  {
    "id": "choice_verbs_venir",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: приходить, приезжать.",
    "a": [
      "venir"
    ],
    "options": [
      "venir",
      "querer",
      "poder",
      "deber"
    ],
    "e": "venir — приходить, приезжать."
  },
  {
    "id": "choice_verbs_querer",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: хотеть, любить.",
    "a": [
      "querer"
    ],
    "options": [
      "querer",
      "poder",
      "deber",
      "saber"
    ],
    "e": "querer — хотеть, любить."
  },
  {
    "id": "choice_verbs_poder",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мочь.",
    "a": [
      "poder"
    ],
    "options": [
      "poder",
      "deber",
      "saber",
      "ser"
    ],
    "e": "poder — мочь."
  },
  {
    "id": "choice_verbs_deber",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: быть должным, следует.",
    "a": [
      "deber"
    ],
    "options": [
      "deber",
      "saber",
      "ser",
      "estar"
    ],
    "e": "deber — быть должным, следует."
  },
  {
    "id": "choice_verbs_saber",
    "topic": "verbs",
    "foodCat": "core",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: знать, уметь.",
    "a": [
      "saber"
    ],
    "options": [
      "saber",
      "ser",
      "estar",
      "tener"
    ],
    "e": "saber — знать, уметь."
  },
  {
    "id": "choice_verbs_comer",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: есть, кушать.",
    "a": [
      "comer"
    ],
    "options": [
      "comer",
      "tomar",
      "desayunar",
      "almorzar"
    ],
    "e": "comer — есть, кушать."
  },
  {
    "id": "choice_verbs_beber",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пить.",
    "a": [
      "beber"
    ],
    "options": [
      "beber",
      "desayunar",
      "almorzar",
      "cenar"
    ],
    "e": "beber — пить."
  },
  {
    "id": "choice_verbs_tomar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: брать; пить, принимать.",
    "a": [
      "tomar"
    ],
    "options": [
      "tomar",
      "almorzar",
      "cenar",
      "cocinar"
    ],
    "e": "tomar — брать; пить, принимать."
  },
  {
    "id": "choice_verbs_desayunar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: завтракать.",
    "a": [
      "desayunar"
    ],
    "options": [
      "desayunar",
      "cenar",
      "cocinar",
      "preparar"
    ],
    "e": "desayunar — завтракать."
  },
  {
    "id": "choice_verbs_almorzar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: обедать.",
    "a": [
      "almorzar"
    ],
    "options": [
      "almorzar",
      "cocinar",
      "preparar",
      "pedir"
    ],
    "e": "almorzar — обедать."
  },
  {
    "id": "choice_verbs_cenar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ужинать.",
    "a": [
      "cenar"
    ],
    "options": [
      "cenar",
      "preparar",
      "pedir",
      "probar"
    ],
    "e": "cenar — ужинать."
  },
  {
    "id": "choice_verbs_cocinar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: готовить еду.",
    "a": [
      "cocinar"
    ],
    "options": [
      "cocinar",
      "pedir",
      "probar",
      "comer"
    ],
    "e": "cocinar — готовить еду."
  },
  {
    "id": "choice_verbs_preparar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: готовить, подготавливать.",
    "a": [
      "preparar"
    ],
    "options": [
      "preparar",
      "probar",
      "comer",
      "beber"
    ],
    "e": "preparar — готовить, подготавливать."
  },
  {
    "id": "choice_verbs_pedir",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: просить, заказывать.",
    "a": [
      "pedir"
    ],
    "options": [
      "pedir",
      "comer",
      "beber",
      "tomar"
    ],
    "e": "pedir — просить, заказывать."
  },
  {
    "id": "choice_verbs_probar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пробовать.",
    "a": [
      "probar"
    ],
    "options": [
      "probar",
      "beber",
      "tomar",
      "desayunar"
    ],
    "e": "probar — пробовать."
  },
  {
    "id": "choice_verbs_vivir",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: жить.",
    "a": [
      "vivir"
    ],
    "options": [
      "vivir",
      "descansar",
      "dormir",
      "despertarse"
    ],
    "e": "vivir — жить."
  },
  {
    "id": "choice_verbs_dormir",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: спать.",
    "a": [
      "dormir"
    ],
    "options": [
      "dormir",
      "vivir",
      "despertarse",
      "levantarse"
    ],
    "e": "dormir — спать."
  },
  {
    "id": "choice_verbs_despertarse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: просыпаться.",
    "a": [
      "despertarse"
    ],
    "options": [
      "despertarse",
      "dormir",
      "levantarse",
      "acostarse"
    ],
    "e": "despertarse — просыпаться."
  },
  {
    "id": "choice_verbs_levantarse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вставать, подниматься.",
    "a": [
      "levantarse"
    ],
    "options": [
      "levantarse",
      "despertarse",
      "acostarse",
      "ducharse"
    ],
    "e": "levantarse — вставать, подниматься."
  },
  {
    "id": "choice_verbs_acostarse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ложиться спать.",
    "a": [
      "acostarse"
    ],
    "options": [
      "acostarse",
      "levantarse",
      "ducharse",
      "vestirse"
    ],
    "e": "acostarse — ложиться спать."
  },
  {
    "id": "choice_verbs_ducharse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: принимать душ.",
    "a": [
      "ducharse"
    ],
    "options": [
      "ducharse",
      "acostarse",
      "vestirse",
      "descansar"
    ],
    "e": "ducharse — принимать душ."
  },
  {
    "id": "choice_verbs_vestirse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: одеваться.",
    "a": [
      "vestirse"
    ],
    "options": [
      "vestirse",
      "ducharse",
      "descansar",
      "vivir"
    ],
    "e": "vestirse — одеваться."
  },
  {
    "id": "choice_verbs_descansar",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: отдыхать.",
    "a": [
      "descansar"
    ],
    "options": [
      "descansar",
      "vestirse",
      "vivir",
      "dormir"
    ],
    "e": "descansar — отдыхать."
  },
  {
    "id": "choice_verbs_limpiar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: убирать, чистить.",
    "a": [
      "limpiar"
    ],
    "options": [
      "limpiar",
      "cerrar",
      "poner",
      "quitar"
    ],
    "e": "limpiar — убирать, чистить."
  },
  {
    "id": "choice_verbs_lavar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мыть, стирать.",
    "a": [
      "lavar"
    ],
    "options": [
      "lavar",
      "poner",
      "quitar",
      "arreglar"
    ],
    "e": "lavar — мыть, стирать."
  },
  {
    "id": "choice_verbs_ordenar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: наводить порядок, упорядочивать.",
    "a": [
      "ordenar"
    ],
    "options": [
      "ordenar",
      "quitar",
      "arreglar",
      "limpiar"
    ],
    "e": "ordenar — наводить порядок, упорядочивать."
  },
  {
    "id": "choice_verbs_guardar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: класть на место, хранить.",
    "a": [
      "guardar"
    ],
    "options": [
      "guardar",
      "arreglar",
      "limpiar",
      "lavar"
    ],
    "e": "guardar — класть на место, хранить."
  },
  {
    "id": "choice_verbs_abrir",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: открывать.",
    "a": [
      "abrir"
    ],
    "options": [
      "abrir",
      "limpiar",
      "lavar",
      "ordenar"
    ],
    "e": "abrir — открывать."
  },
  {
    "id": "choice_verbs_cerrar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: закрывать.",
    "a": [
      "cerrar"
    ],
    "options": [
      "cerrar",
      "lavar",
      "ordenar",
      "guardar"
    ],
    "e": "cerrar — закрывать."
  },
  {
    "id": "choice_verbs_poner",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: класть, ставить, надевать.",
    "a": [
      "poner"
    ],
    "options": [
      "poner",
      "ordenar",
      "guardar",
      "abrir"
    ],
    "e": "poner — класть, ставить, надевать."
  },
  {
    "id": "choice_verbs_quitar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: убирать, снимать.",
    "a": [
      "quitar"
    ],
    "options": [
      "quitar",
      "guardar",
      "abrir",
      "cerrar"
    ],
    "e": "quitar — убирать, снимать."
  },
  {
    "id": "choice_verbs_arreglar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чинить, приводить в порядок.",
    "a": [
      "arreglar"
    ],
    "options": [
      "arreglar",
      "abrir",
      "cerrar",
      "poner"
    ],
    "e": "arreglar — чинить, приводить в порядок."
  },
  {
    "id": "choice_verbs_trabajar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: работать.",
    "a": [
      "trabajar"
    ],
    "options": [
      "trabajar",
      "escribir",
      "empezar",
      "terminar"
    ],
    "e": "trabajar — работать."
  },
  {
    "id": "choice_verbs_estudiar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: учиться, изучать.",
    "a": [
      "estudiar"
    ],
    "options": [
      "estudiar",
      "empezar",
      "terminar",
      "planear"
    ],
    "e": "estudiar — учиться, изучать."
  },
  {
    "id": "choice_verbs_aprender",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: учить, узнавать новое.",
    "a": [
      "aprender"
    ],
    "options": [
      "aprender",
      "terminar",
      "planear",
      "organizar"
    ],
    "e": "aprender — учить, узнавать новое."
  },
  {
    "id": "choice_verbs_enseñar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: учить кого-то, показывать.",
    "a": [
      "enseñar"
    ],
    "options": [
      "enseñar",
      "planear",
      "organizar",
      "enviar"
    ],
    "e": "enseñar — учить кого-то, показывать."
  },
  {
    "id": "choice_verbs_leer",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: читать.",
    "a": [
      "leer"
    ],
    "options": [
      "leer",
      "organizar",
      "enviar",
      "recibir"
    ],
    "e": "leer — читать."
  },
  {
    "id": "choice_verbs_escribir",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: писать.",
    "a": [
      "escribir"
    ],
    "options": [
      "escribir",
      "enviar",
      "recibir",
      "trabajar"
    ],
    "e": "escribir — писать."
  },
  {
    "id": "choice_verbs_empezar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: начинать.",
    "a": [
      "empezar"
    ],
    "options": [
      "empezar",
      "recibir",
      "trabajar",
      "estudiar"
    ],
    "e": "empezar — начинать."
  },
  {
    "id": "choice_verbs_terminar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: заканчивать.",
    "a": [
      "terminar"
    ],
    "options": [
      "terminar",
      "trabajar",
      "estudiar",
      "aprender"
    ],
    "e": "terminar — заканчивать."
  },
  {
    "id": "choice_verbs_planear",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: планировать.",
    "a": [
      "planear"
    ],
    "options": [
      "planear",
      "estudiar",
      "aprender",
      "enseñar"
    ],
    "e": "planear — планировать."
  },
  {
    "id": "choice_verbs_organizar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: организовывать.",
    "a": [
      "organizar"
    ],
    "options": [
      "organizar",
      "aprender",
      "enseñar",
      "leer"
    ],
    "e": "organizar — организовывать."
  },
  {
    "id": "choice_verbs_enviar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: отправлять.",
    "a": [
      "enviar"
    ],
    "options": [
      "enviar",
      "enseñar",
      "leer",
      "escribir"
    ],
    "e": "enviar — отправлять."
  },
  {
    "id": "choice_verbs_recibir",
    "topic": "verbs",
    "foodCat": "work",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: получать, принимать.",
    "a": [
      "recibir"
    ],
    "options": [
      "recibir",
      "leer",
      "escribir",
      "empezar"
    ],
    "e": "recibir — получать, принимать."
  },
  {
    "id": "choice_verbs_comprar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: покупать.",
    "a": [
      "comprar"
    ],
    "options": [
      "comprar",
      "costar",
      "elegir",
      "llevar"
    ],
    "e": "comprar — покупать."
  },
  {
    "id": "choice_verbs_pagar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: платить.",
    "a": [
      "pagar"
    ],
    "options": [
      "pagar",
      "elegir",
      "llevar",
      "traer"
    ],
    "e": "pagar — платить."
  },
  {
    "id": "choice_verbs_costar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: стоить.",
    "a": [
      "costar"
    ],
    "options": [
      "costar",
      "llevar",
      "traer",
      "buscar"
    ],
    "e": "costar — стоить."
  },
  {
    "id": "choice_verbs_elegir",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: выбирать.",
    "a": [
      "elegir"
    ],
    "options": [
      "elegir",
      "traer",
      "buscar",
      "encontrar"
    ],
    "e": "elegir — выбирать."
  },
  {
    "id": "choice_verbs_llevar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: нести, брать с собой, носить.",
    "a": [
      "llevar"
    ],
    "options": [
      "llevar",
      "buscar",
      "encontrar",
      "necesitar"
    ],
    "e": "llevar — нести, брать с собой, носить."
  },
  {
    "id": "choice_verbs_traer",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: приносить, привозить.",
    "a": [
      "traer"
    ],
    "options": [
      "traer",
      "encontrar",
      "necesitar",
      "comprar"
    ],
    "e": "traer — приносить, привозить."
  },
  {
    "id": "choice_verbs_buscar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: искать.",
    "a": [
      "buscar"
    ],
    "options": [
      "buscar",
      "necesitar",
      "comprar",
      "pagar"
    ],
    "e": "buscar — искать."
  },
  {
    "id": "choice_verbs_encontrar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: находить, встречать.",
    "a": [
      "encontrar"
    ],
    "options": [
      "encontrar",
      "comprar",
      "pagar",
      "costar"
    ],
    "e": "encontrar — находить, встречать."
  },
  {
    "id": "choice_verbs_necesitar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: нуждаться; нуждаться в чём-то.",
    "a": [
      "necesitar"
    ],
    "options": [
      "necesitar",
      "pagar",
      "costar",
      "elegir"
    ],
    "e": "necesitar — нуждаться; нуждаться в чём-то."
  },
  {
    "id": "choice_verbs_hablar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: говорить, разговаривать.",
    "a": [
      "hablar"
    ],
    "options": [
      "hablar",
      "responder",
      "escuchar",
      "mirar"
    ],
    "e": "hablar — говорить, разговаривать."
  },
  {
    "id": "choice_verbs_decir",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: говорить, сказать.",
    "a": [
      "decir"
    ],
    "options": [
      "decir",
      "escuchar",
      "mirar",
      "ver"
    ],
    "e": "decir — говорить, сказать."
  },
  {
    "id": "choice_verbs_preguntar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: спрашивать.",
    "a": [
      "preguntar"
    ],
    "options": [
      "preguntar",
      "mirar",
      "ver",
      "llamar"
    ],
    "e": "preguntar — спрашивать."
  },
  {
    "id": "choice_verbs_responder",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: отвечать.",
    "a": [
      "responder"
    ],
    "options": [
      "responder",
      "ver",
      "llamar",
      "explicar"
    ],
    "e": "responder — отвечать."
  },
  {
    "id": "choice_verbs_escuchar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: слушать.",
    "a": [
      "escuchar"
    ],
    "options": [
      "escuchar",
      "llamar",
      "explicar",
      "hablar"
    ],
    "e": "escuchar — слушать."
  },
  {
    "id": "choice_verbs_mirar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: смотреть на что-то.",
    "a": [
      "mirar"
    ],
    "options": [
      "mirar",
      "explicar",
      "hablar",
      "decir"
    ],
    "e": "mirar — смотреть на что-то."
  },
  {
    "id": "choice_verbs_ver",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: видеть, смотреть.",
    "a": [
      "ver"
    ],
    "options": [
      "ver",
      "hablar",
      "decir",
      "preguntar"
    ],
    "e": "ver — видеть, смотреть."
  },
  {
    "id": "choice_verbs_llamar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: звонить, называть.",
    "a": [
      "llamar"
    ],
    "options": [
      "llamar",
      "decir",
      "preguntar",
      "responder"
    ],
    "e": "llamar — звонить, называть."
  },
  {
    "id": "choice_verbs_explicar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: объяснять.",
    "a": [
      "explicar"
    ],
    "options": [
      "explicar",
      "preguntar",
      "responder",
      "escuchar"
    ],
    "e": "explicar — объяснять."
  },
  {
    "id": "choice_verbs_salir",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: выходить, уезжать.",
    "a": [
      "salir"
    ],
    "options": [
      "salir",
      "caminar",
      "subir",
      "bajar"
    ],
    "e": "salir — выходить, уезжать."
  },
  {
    "id": "choice_verbs_llegar",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: приходить, приезжать, прибывать.",
    "a": [
      "llegar"
    ],
    "options": [
      "llegar",
      "subir",
      "bajar",
      "salir"
    ],
    "e": "llegar — приходить, приезжать, прибывать."
  },
  {
    "id": "choice_verbs_volver",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: возвращаться.",
    "a": [
      "volver"
    ],
    "options": [
      "volver",
      "bajar",
      "salir",
      "llegar"
    ],
    "e": "volver — возвращаться."
  },
  {
    "id": "choice_verbs_caminar",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ходить пешком, гулять.",
    "a": [
      "caminar"
    ],
    "options": [
      "caminar",
      "salir",
      "llegar",
      "volver"
    ],
    "e": "caminar — ходить пешком, гулять."
  },
  {
    "id": "choice_verbs_subir",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: подниматься, загружать.",
    "a": [
      "subir"
    ],
    "options": [
      "subir",
      "llegar",
      "volver",
      "caminar"
    ],
    "e": "subir — подниматься, загружать."
  },
  {
    "id": "choice_verbs_bajar",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: спускаться, выходить из транспорта.",
    "a": [
      "bajar"
    ],
    "options": [
      "bajar",
      "volver",
      "caminar",
      "subir"
    ],
    "e": "bajar — спускаться, выходить из транспорта."
  },
  {
    "id": "choice_verbs_recordar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: помнить, вспоминать.",
    "a": [
      "recordar"
    ],
    "options": [
      "recordar",
      "quedar",
      "esperar",
      "olvidar"
    ],
    "e": "recordar — помнить, вспоминать."
  },
  {
    "id": "choice_verbs_olvidar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: забывать.",
    "a": [
      "olvidar"
    ],
    "options": [
      "olvidar",
      "esperar",
      "recordar",
      "decidir"
    ],
    "e": "olvidar — забывать."
  },
  {
    "id": "choice_verbs_decidir",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: решать, принимать решение.",
    "a": [
      "decidir"
    ],
    "options": [
      "decidir",
      "recordar",
      "olvidar",
      "intentar"
    ],
    "e": "decidir — решать, принимать решение."
  },
  {
    "id": "choice_verbs_intentar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пытаться, стараться.",
    "a": [
      "intentar"
    ],
    "options": [
      "intentar",
      "olvidar",
      "decidir",
      "quedar"
    ],
    "e": "intentar — пытаться, стараться."
  },
  {
    "id": "choice_verbs_quedar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: договариваться о встрече; оставаться.",
    "a": [
      "quedar"
    ],
    "options": [
      "quedar",
      "decidir",
      "intentar",
      "esperar"
    ],
    "e": "quedar — договариваться о встрече; оставаться."
  },
  {
    "id": "choice_verbs_esperar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ждать, надеяться.",
    "a": [
      "esperar"
    ],
    "options": [
      "esperar",
      "intentar",
      "quedar",
      "recordar"
    ],
    "e": "esperar — ждать, надеяться."
  },
  {
    "id": "audio_verbs_ser",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Soy diseñadora.",
    "a": [
      "Soy diseñadora."
    ],
    "e": "Я дизайнер."
  },
  {
    "id": "audio_verbs_estar",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estoy en casa.",
    "a": [
      "Estoy en casa."
    ],
    "e": "Я дома."
  },
  {
    "id": "audio_verbs_tener",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tengo un gato.",
    "a": [
      "Tengo un gato."
    ],
    "e": "У меня есть кот."
  },
  {
    "id": "audio_verbs_hacer",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hago deporte los lunes.",
    "a": [
      "Hago deporte los lunes."
    ],
    "e": "Я занимаюсь спортом по понедельникам."
  },
  {
    "id": "audio_verbs_ir",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Voy al trabajo en metro.",
    "a": [
      "Voy al trabajo en metro."
    ],
    "e": "Я еду на работу на метро."
  },
  {
    "id": "audio_verbs_venir",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vengo de Madrid.",
    "a": [
      "Vengo de Madrid."
    ],
    "e": "Я приезжаю из Мадрида."
  },
  {
    "id": "audio_verbs_querer",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero un café.",
    "a": [
      "Quiero un café."
    ],
    "e": "Я хочу кофе."
  },
  {
    "id": "audio_verbs_poder",
    "topic": "verbs",
    "foodCat": "core",
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
    "id": "audio_verbs_deber",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Debo trabajar mañana.",
    "a": [
      "Debo trabajar mañana."
    ],
    "e": "Завтра я должна работать."
  },
  {
    "id": "audio_verbs_saber",
    "topic": "verbs",
    "foodCat": "core",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Sé la respuesta.",
    "a": [
      "Sé la respuesta."
    ],
    "e": "Я знаю ответ."
  },
  {
    "id": "audio_verbs_comer",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Como a las dos.",
    "a": [
      "Como a las dos."
    ],
    "e": "Я ем в два часа."
  },
  {
    "id": "audio_verbs_beber",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Bebo mucha agua.",
    "a": [
      "Bebo mucha agua."
    ],
    "e": "Я пью много воды."
  },
  {
    "id": "audio_verbs_tomar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tomo café por la mañana.",
    "a": [
      "Tomo café por la mañana."
    ],
    "e": "Я пью кофе по утрам."
  },
  {
    "id": "audio_verbs_desayunar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Desayuno yogur y fruta.",
    "a": [
      "Desayuno yogur y fruta."
    ],
    "e": "Я ем йогурт и фрукты на завтрак."
  },
  {
    "id": "audio_verbs_almorzar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Almuerzo con mis compañeros.",
    "a": [
      "Almuerzo con mis compañeros."
    ],
    "e": "Я обедаю с коллегами."
  },
  {
    "id": "audio_verbs_cenar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ceno a las ocho.",
    "a": [
      "Ceno a las ocho."
    ],
    "e": "Я ужинаю в восемь."
  },
  {
    "id": "audio_verbs_cocinar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cocino pasta para la cena.",
    "a": [
      "Cocino pasta para la cena."
    ],
    "e": "Я готовлю пасту на ужин."
  },
  {
    "id": "audio_verbs_preparar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Preparo el desayuno.",
    "a": [
      "Preparo el desayuno."
    ],
    "e": "Я готовлю завтрак."
  },
  {
    "id": "audio_verbs_pedir",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pido una ensalada.",
    "a": [
      "Pido una ensalada."
    ],
    "e": "Я заказываю салат."
  },
  {
    "id": "audio_verbs_probar",
    "topic": "verbs",
    "foodCat": "food",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pruebo un postre nuevo.",
    "a": [
      "Pruebo un postre nuevo."
    ],
    "e": "Я пробую новый десерт."
  },
  {
    "id": "audio_verbs_vivir",
    "topic": "verbs",
    "foodCat": "routine",
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
    "id": "audio_verbs_dormir",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Duermo ocho horas.",
    "a": [
      "Duermo ocho horas."
    ],
    "e": "Я сплю восемь часов."
  },
  {
    "id": "audio_verbs_despertarse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me despierto a las siete.",
    "a": [
      "Me despierto a las siete."
    ],
    "e": "Я просыпаюсь в семь."
  },
  {
    "id": "audio_verbs_levantarse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me levanto temprano.",
    "a": [
      "Me levanto temprano."
    ],
    "e": "Я встаю рано."
  },
  {
    "id": "audio_verbs_acostarse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me acuesto antes de medianoche.",
    "a": [
      "Me acuesto antes de medianoche."
    ],
    "e": "Я ложусь до полуночи."
  },
  {
    "id": "audio_verbs_ducharse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me ducho por la mañana.",
    "a": [
      "Me ducho por la mañana."
    ],
    "e": "Я принимаю душ утром."
  },
  {
    "id": "audio_verbs_vestirse",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me visto rápido.",
    "a": [
      "Me visto rápido."
    ],
    "e": "Я быстро одеваюсь."
  },
  {
    "id": "audio_verbs_descansar",
    "topic": "verbs",
    "foodCat": "routine",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Descanso en casa por la noche.",
    "a": [
      "Descanso en casa por la noche."
    ],
    "e": "Вечером я отдыхаю дома."
  },
  {
    "id": "audio_verbs_limpiar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Limpio la cocina.",
    "a": [
      "Limpio la cocina."
    ],
    "e": "Я убираю кухню."
  },
  {
    "id": "audio_verbs_lavar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lavo los platos después de cenar.",
    "a": [
      "Lavo los platos después de cenar."
    ],
    "e": "Я мою посуду после ужина."
  },
  {
    "id": "audio_verbs_ordenar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ordeno mi habitación.",
    "a": [
      "Ordeno mi habitación."
    ],
    "e": "Я навожу порядок в комнате."
  },
  {
    "id": "audio_verbs_guardar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Guardo la ropa en el armario.",
    "a": [
      "Guardo la ropa en el armario."
    ],
    "e": "Я убираю одежду в шкаф."
  },
  {
    "id": "audio_verbs_abrir",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Abro la ventana.",
    "a": [
      "Abro la ventana."
    ],
    "e": "Я открываю окно."
  },
  {
    "id": "audio_verbs_cerrar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cierro la puerta.",
    "a": [
      "Cierro la puerta."
    ],
    "e": "Я закрываю дверь."
  },
  {
    "id": "audio_verbs_poner",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pongo el teléfono sobre la mesa.",
    "a": [
      "Pongo el teléfono sobre la mesa."
    ],
    "e": "Я кладу телефон на стол."
  },
  {
    "id": "audio_verbs_quitar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quito los platos de la mesa.",
    "a": [
      "Quito los platos de la mesa."
    ],
    "e": "Я убираю тарелки со стола."
  },
  {
    "id": "audio_verbs_arreglar",
    "topic": "verbs",
    "foodCat": "home",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Arreglo mi habitación.",
    "a": [
      "Arreglo mi habitación."
    ],
    "e": "Я привожу комнату в порядок."
  },
  {
    "id": "audio_verbs_trabajar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Trabajo en una empresa grande.",
    "a": [
      "Trabajo en una empresa grande."
    ],
    "e": "Я работаю в большой компании."
  },
  {
    "id": "audio_verbs_estudiar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estudio español todos los días.",
    "a": [
      "Estudio español todos los días."
    ],
    "e": "Я учу испанский каждый день."
  },
  {
    "id": "audio_verbs_aprender",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Aprendo palabras nuevas.",
    "a": [
      "Aprendo palabras nuevas."
    ],
    "e": "Я учу новые слова."
  },
  {
    "id": "audio_verbs_enseñar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Enseño el diseño a mi compañera.",
    "a": [
      "Enseño el diseño a mi compañera."
    ],
    "e": "Я показываю дизайн коллеге."
  },
  {
    "id": "audio_verbs_leer",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Leo antes de dormir.",
    "a": [
      "Leo antes de dormir."
    ],
    "e": "Я читаю перед сном."
  },
  {
    "id": "audio_verbs_escribir",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Escribo un mensaje.",
    "a": [
      "Escribo un mensaje."
    ],
    "e": "Я пишу сообщение."
  },
  {
    "id": "audio_verbs_empezar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Empiezo a trabajar a las nueve.",
    "a": [
      "Empiezo a trabajar a las nueve."
    ],
    "e": "Я начинаю работать в девять."
  },
  {
    "id": "audio_verbs_terminar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Termino el trabajo a las seis.",
    "a": [
      "Termino el trabajo a las seis."
    ],
    "e": "Я заканчиваю работу в шесть."
  },
  {
    "id": "audio_verbs_planear",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Planeo la semana el domingo.",
    "a": [
      "Planeo la semana el domingo."
    ],
    "e": "В воскресенье я планирую неделю."
  },
  {
    "id": "audio_verbs_organizar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Organizo mis tareas por la mañana.",
    "a": [
      "Organizo mis tareas por la mañana."
    ],
    "e": "Утром я организую свои задачи."
  },
  {
    "id": "audio_verbs_enviar",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Envío el archivo por correo.",
    "a": [
      "Envío el archivo por correo."
    ],
    "e": "Я отправляю файл по почте."
  },
  {
    "id": "audio_verbs_recibir",
    "topic": "verbs",
    "foodCat": "work",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Recibo muchos mensajes.",
    "a": [
      "Recibo muchos mensajes."
    ],
    "e": "Я получаю много сообщений."
  },
  {
    "id": "audio_verbs_comprar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Compro comida después del trabajo.",
    "a": [
      "Compro comida después del trabajo."
    ],
    "e": "Я покупаю продукты после работы."
  },
  {
    "id": "audio_verbs_pagar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pago con tarjeta.",
    "a": [
      "Pago con tarjeta."
    ],
    "e": "Я плачу картой."
  },
  {
    "id": "audio_verbs_costar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Este vestido cuesta cincuenta euros.",
    "a": [
      "Este vestido cuesta cincuenta euros."
    ],
    "e": "Это платье стоит пятьдесят евро."
  },
  {
    "id": "audio_verbs_elegir",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Elijo la opción más sencilla.",
    "a": [
      "Elijo la opción más sencilla."
    ],
    "e": "Я выбираю самый простой вариант."
  },
  {
    "id": "audio_verbs_llevar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo agua en el bolso.",
    "a": [
      "Llevo agua en el bolso."
    ],
    "e": "Я ношу воду в сумке."
  },
  {
    "id": "audio_verbs_traer",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Traigo postre para todos.",
    "a": [
      "Traigo postre para todos."
    ],
    "e": "Я приношу десерт для всех."
  },
  {
    "id": "audio_verbs_buscar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Busco mis llaves.",
    "a": [
      "Busco mis llaves."
    ],
    "e": "Я ищу свои ключи."
  },
  {
    "id": "audio_verbs_encontrar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Encuentro las llaves en la mesa.",
    "a": [
      "Encuentro las llaves en la mesa."
    ],
    "e": "Я нахожу ключи на столе."
  },
  {
    "id": "audio_verbs_necesitar",
    "topic": "verbs",
    "foodCat": "shopping",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito comprar pan.",
    "a": [
      "Necesito comprar pan."
    ],
    "e": "Мне нужно купить хлеб."
  },
  {
    "id": "audio_verbs_hablar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hablo un poco de español.",
    "a": [
      "Hablo un poco de español."
    ],
    "e": "Я немного говорю по-испански."
  },
  {
    "id": "audio_verbs_decir",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Digo la verdad.",
    "a": [
      "Digo la verdad."
    ],
    "e": "Я говорю правду."
  },
  {
    "id": "audio_verbs_preguntar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pregunto la dirección.",
    "a": [
      "Pregunto la dirección."
    ],
    "e": "Я спрашиваю дорогу."
  },
  {
    "id": "audio_verbs_responder",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Respondo al mensaje.",
    "a": [
      "Respondo al mensaje."
    ],
    "e": "Я отвечаю на сообщение."
  },
  {
    "id": "audio_verbs_escuchar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Escucho música en el metro.",
    "a": [
      "Escucho música en el metro."
    ],
    "e": "Я слушаю музыку в метро."
  },
  {
    "id": "audio_verbs_mirar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Miro una serie por la noche.",
    "a": [
      "Miro una serie por la noche."
    ],
    "e": "Вечером я смотрю сериал."
  },
  {
    "id": "audio_verbs_ver",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Veo a mis amigos el sábado.",
    "a": [
      "Veo a mis amigos el sábado."
    ],
    "e": "Я вижусь с друзьями в субботу."
  },
  {
    "id": "audio_verbs_llamar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llamo a mi madre por la tarde.",
    "a": [
      "Llamo a mi madre por la tarde."
    ],
    "e": "Я звоню маме вечером."
  },
  {
    "id": "audio_verbs_explicar",
    "topic": "verbs",
    "foodCat": "communication",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Explico el problema.",
    "a": [
      "Explico el problema."
    ],
    "e": "Я объясняю проблему."
  },
  {
    "id": "audio_verbs_salir",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Salgo de casa a las ocho.",
    "a": [
      "Salgo de casa a las ocho."
    ],
    "e": "Я выхожу из дома в восемь."
  },
  {
    "id": "audio_verbs_llegar",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llego al trabajo a las nueve.",
    "a": [
      "Llego al trabajo a las nueve."
    ],
    "e": "Я приезжаю на работу в девять."
  },
  {
    "id": "audio_verbs_volver",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vuelvo a casa por la noche.",
    "a": [
      "Vuelvo a casa por la noche."
    ],
    "e": "Я возвращаюсь домой вечером."
  },
  {
    "id": "audio_verbs_caminar",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Camino hasta el metro.",
    "a": [
      "Camino hasta el metro."
    ],
    "e": "Я иду пешком до метро."
  },
  {
    "id": "audio_verbs_subir",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Subo por las escaleras.",
    "a": [
      "Subo por las escaleras."
    ],
    "e": "Я поднимаюсь по лестнице."
  },
  {
    "id": "audio_verbs_bajar",
    "topic": "verbs",
    "foodCat": "movement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Bajo en la próxima parada.",
    "a": [
      "Bajo en la próxima parada."
    ],
    "e": "Я выхожу на следующей остановке."
  },
  {
    "id": "audio_verbs_recordar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Recuerdo esta palabra.",
    "a": [
      "Recuerdo esta palabra."
    ],
    "e": "Я помню это слово."
  },
  {
    "id": "audio_verbs_olvidar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Olvido las llaves a veces.",
    "a": [
      "Olvido las llaves a veces."
    ],
    "e": "Иногда я забываю ключи."
  },
  {
    "id": "audio_verbs_decidir",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Decido trabajar desde casa.",
    "a": [
      "Decido trabajar desde casa."
    ],
    "e": "Я решаю работать из дома."
  },
  {
    "id": "audio_verbs_intentar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Intento hablar español.",
    "a": [
      "Intento hablar español."
    ],
    "e": "Я стараюсь говорить по-испански."
  },
  {
    "id": "audio_verbs_quedar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quedo con una amiga el sábado.",
    "a": [
      "Quedo con una amiga el sábado."
    ],
    "e": "В субботу я встречаюсь с подругой."
  },
  {
    "id": "audio_verbs_esperar",
    "topic": "verbs",
    "foodCat": "plans",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Espero el autobús.",
    "a": [
      "Espero el autobús."
    ],
    "e": "Я жду автобус."
  },
  {
    "id": "match_tener",
    "topic": "verbs",
    "foodCat": "core",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини местоимения с формами tener.",
    "pairs": [
      [
        "yo",
        "tengo"
      ],
      [
        "tú",
        "tienes"
      ],
      [
        "él / ella",
        "tiene"
      ],
      [
        "nosotros",
        "tenemos"
      ],
      [
        "vosotros",
        "tenéis"
      ],
      [
        "ellos",
        "tienen"
      ]
    ],
    "a": [
      "tengo | tienes | tiene | tenemos | tenéis | tienen"
    ],
    "displayAnswer": "yo — tengo · tú — tienes · él / ella — tiene · nosotros — tenemos · vosotros — tenéis · ellos — tienen",
    "e": "Tener — неправильный глагол: yo tengo, но nosotros tenemos."
  },
  {
    "id": "match_ser",
    "topic": "verbs",
    "foodCat": "core",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини местоимения с формами ser.",
    "pairs": [
      [
        "yo",
        "soy"
      ],
      [
        "tú",
        "eres"
      ],
      [
        "él / ella",
        "es"
      ],
      [
        "nosotros",
        "somos"
      ],
      [
        "vosotros",
        "sois"
      ],
      [
        "ellos",
        "son"
      ]
    ],
    "a": [
      "soy | eres | es | somos | sois | son"
    ],
    "displayAnswer": "yo — soy · tú — eres · él / ella — es · nosotros — somos · vosotros — sois · ellos — son",
    "e": "Все формы ser нужно запомнить."
  },
  {
    "id": "context_choice_nos_beber",
    "topic": "verbs",
    "foodCat": "food",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Después del gimnasio nosotros ___ mucha agua.",
    "options": [
      "bebo",
      "bebes",
      "bebemos",
      "beber"
    ],
    "a": [
      "bebemos"
    ],
    "e": "С nosotros используется bebemos."
  },
  {
    "id": "context_choice_sister_dentist",
    "topic": "verbs",
    "foodCat": "core",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Mi hermana ___ dentista y trabaja en una clínica privada.",
    "options": [
      "es",
      "está",
      "hay",
      "son"
    ],
    "a": [
      "es"
    ],
    "e": "Профессия указывается с ser и без артикля."
  },
  {
    "id": "ser_estar_hay_capital",
    "topic": "verbs",
    "foodCat": "core",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Madrid ___ la capital de España.",
    "a": [
      "es"
    ],
    "displayAnswer": "es",
    "e": "Постоянная характеристика и определение требуют ser."
  },
  {
    "id": "ser_estar_hay_friends_home",
    "topic": "verbs",
    "foodCat": "core",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Mis amigos ___ en casa ahora.",
    "a": [
      "están",
      "estan"
    ],
    "displayAnswer": "están",
    "e": "Местонахождение людей сейчас: están."
  },
  {
    "id": "ser_estar_hay_students",
    "topic": "verbs",
    "foodCat": "core",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Nosotros ___ estudiantes de español.",
    "a": [
      "somos"
    ],
    "displayAnswer": "somos",
    "e": "Кто мы по статусу — ser: somos."
  },
  {
    "id": "ser_estar_hay_tired_today",
    "topic": "verbs",
    "foodCat": "core",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Hoy yo ___ cansada después del trabajo.",
    "a": [
      "estoy"
    ],
    "displayAnswer": "estoy",
    "e": "Временное состояние yo: estoy."
  },
  {
    "id": "ser_estar_hay_from_mexico",
    "topic": "verbs",
    "foodCat": "core",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Ana y Luis ___ de México.",
    "a": [
      "son"
    ],
    "displayAnswer": "son",
    "e": "Происхождение выражается ser."
  }
];

export const verbsTopic = {
  id: "verbs",
  title: "Основные глаголы",
  icon: "⚡",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
