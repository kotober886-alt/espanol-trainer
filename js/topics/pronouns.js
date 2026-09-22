/**
 * Местоимения topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "yo",
    "cat": "singular",
    "word": "yo",
    "nav": "yo · я",
    "gender": "1-е лицо · ед. число",
    "tr": "я",
    "ru": [
      "я"
    ],
    "answers": [
      "yo"
    ],
    "possessive": {
      "short": "mi / mis",
      "meaning": "мой, моя, моё / мои",
      "full": "mío / mía / míos / mías",
      "fullExample": "mío — мой; mía — моя; míos / mías — мои.",
      "prompt": "«мой / моя / моё / мои» перед существительным",
      "answers": [
        "mi",
        "mis"
      ],
      "example": "mi libro · mis cosas"
    },
    "conjugations": [
      [
        "ser",
        "soy"
      ],
      [
        "estar",
        "estoy"
      ],
      [
        "tener",
        "tengo"
      ],
      [
        "ir",
        "voy"
      ],
      [
        "hacer",
        "hago"
      ]
    ],
    "examples": [
      [
        "Yo vivo en Madrid.",
        "Я живу в Мадриде."
      ],
      [
        "Este es mi libro.",
        "Это моя книга."
      ]
    ],
    "meta": {
      "categoryTitle": "Единственное число",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "tu",
    "cat": "singular",
    "word": "tú",
    "nav": "tú · ты",
    "gender": "2-е лицо · ед. число",
    "tr": "ты",
    "ru": [
      "ты"
    ],
    "answers": [
      "tú",
      "tu"
    ],
    "possessive": {
      "short": "tu / tus",
      "meaning": "твой, твоя, твоё / твои",
      "full": "tuyo / tuya / tuyos / tuyas",
      "fullExample": "tuyo — твой; tuya — твоя; tuyos / tuyas — твои.",
      "prompt": "«твой / твоя / твоё / твои» перед существительным",
      "answers": [
        "tu",
        "tus"
      ],
      "example": "tu café · tus libros"
    },
    "conjugations": [
      [
        "ser",
        "eres"
      ],
      [
        "estar",
        "estás"
      ],
      [
        "tener",
        "tienes"
      ],
      [
        "ir",
        "vas"
      ],
      [
        "hacer",
        "haces"
      ]
    ],
    "examples": [
      [
        "Tú trabajas mucho.",
        "Ты много работаешь."
      ],
      [
        "Este es tu café.",
        "Это твой кофе."
      ]
    ],
    "meta": {
      "categoryTitle": "Единственное число",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "el_ella",
    "cat": "singular",
    "word": "él / ella / usted",
    "nav": "él / ella · он / она",
    "gender": "3-е лицо · ед. число",
    "tr": "он / она / Вы",
    "ru": [
      "он",
      "она",
      "вы",
      "он она",
      "он или она"
    ],
    "answers": [
      "él",
      "el",
      "ella",
      "usted"
    ],
    "possessive": {
      "short": "su / sus",
      "meaning": "его, её, Ваш / их",
      "full": "suyo / suya / suyos / suyas",
      "fullExample": "suyo — его / её / Ваш; suya — его / её / Ваша; suyos / suyas — его / её / Ваши.",
      "prompt": "«его / её / Ваш / их» перед существительным",
      "answers": [
        "su",
        "sus"
      ],
      "example": "su casa · sus amigos",
      "note": "Кому принадлежит предмет, обычно понятно из контекста."
    },
    "conjugations": [
      [
        "ser",
        "es"
      ],
      [
        "estar",
        "está"
      ],
      [
        "tener",
        "tiene"
      ],
      [
        "ir",
        "va"
      ],
      [
        "hacer",
        "hace"
      ]
    ],
    "examples": [
      [
        "Ella lee en casa.",
        "Она читает дома."
      ],
      [
        "Su hermana trabaja aquí.",
        "Его / её сестра работает здесь."
      ]
    ],
    "meta": {
      "categoryTitle": "Единственное число",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "nosotros",
    "cat": "plural",
    "word": "nosotros / nosotras",
    "nav": "nosotros · мы",
    "gender": "1-е лицо · мн. число",
    "tr": "мы",
    "ru": [
      "мы"
    ],
    "answers": [
      "nosotros",
      "nosotras"
    ],
    "possessive": {
      "short": "nuestro / nuestra / nuestros / nuestras",
      "meaning": "наш / наша / наши",
      "full": "nuestro / nuestra / nuestros / nuestras",
      "fullExample": "nuestro — наш; nuestra — наша; nuestros / nuestras — наши.",
      "prompt": "«наш / наша / наши» перед существительным",
      "answers": [
        "nuestro",
        "nuestra",
        "nuestros",
        "nuestras"
      ],
      "example": "nuestro barrio · nuestra casa"
    },
    "conjugations": [
      [
        "ser",
        "somos"
      ],
      [
        "estar",
        "estamos"
      ],
      [
        "tener",
        "tenemos"
      ],
      [
        "ir",
        "vamos"
      ],
      [
        "hacer",
        "hacemos"
      ]
    ],
    "examples": [
      [
        "Nosotros aprendemos español.",
        "Мы учим испанский."
      ],
      [
        "Nuestra casa es pequeña.",
        "Наш дом маленький."
      ]
    ],
    "meta": {
      "categoryTitle": "Множественное число",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "vosotros",
    "cat": "plural",
    "word": "vosotros / vosotras",
    "nav": "vosotros · вы",
    "gender": "2-е лицо · мн. число",
    "tr": "вы (неформально, Испания)",
    "ru": [
      "вы",
      "вы неформально"
    ],
    "answers": [
      "vosotros",
      "vosotras"
    ],
    "possessive": {
      "short": "vuestro / vuestra / vuestros / vuestras",
      "meaning": "ваш / ваша / ваши",
      "full": "vuestro / vuestra / vuestros / vuestras",
      "fullExample": "vuestro — ваш; vuestra — ваша; vuestros / vuestras — ваши.",
      "prompt": "«ваш / ваша / ваши» перед существительным",
      "answers": [
        "vuestro",
        "vuestra",
        "vuestros",
        "vuestras"
      ],
      "example": "vuestro profesor · vuestra ciudad"
    },
    "conjugations": [
      [
        "ser",
        "sois"
      ],
      [
        "estar",
        "estáis"
      ],
      [
        "tener",
        "tenéis"
      ],
      [
        "ir",
        "vais"
      ],
      [
        "hacer",
        "hacéis"
      ]
    ],
    "examples": [
      [
        "Vosotros vivís cerca.",
        "Вы живёте рядом."
      ],
      [
        "Vuestra profesora habla español.",
        "Ваша преподавательница говорит по-испански."
      ]
    ],
    "meta": {
      "categoryTitle": "Множественное число",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "ellos",
    "cat": "plural",
    "word": "ellos / ellas / ustedes",
    "nav": "ellos / ellas · они",
    "gender": "3-е лицо · мн. число",
    "tr": "они / вы",
    "ru": [
      "они",
      "вы",
      "они или вы"
    ],
    "answers": [
      "ellos",
      "ellas",
      "ustedes"
    ],
    "possessive": {
      "short": "su / sus",
      "meaning": "их / ваш, ваша, ваши",
      "full": "suyo / suya / suyos / suyas",
      "fullExample": "suyo — их / Ваш; suya — их / Ваша; suyos / suyas — их / Ваши.",
      "prompt": "«их / ваш / ваша / ваши» перед существительным",
      "answers": [
        "su",
        "sus"
      ],
      "example": "su amigo · sus cosas",
      "note": "Ustedes — вежливое «вы», а в Латинской Америке также обычное множественное «вы»."
    },
    "conjugations": [
      [
        "ser",
        "son"
      ],
      [
        "estar",
        "están"
      ],
      [
        "tener",
        "tienen"
      ],
      [
        "ir",
        "van"
      ],
      [
        "hacer",
        "hacen"
      ]
    ],
    "examples": [
      [
        "Ellos van al gimnasio.",
        "Они ходят в спортзал."
      ],
      [
        "Sus amigos viven aquí.",
        "Их друзья живут здесь."
      ]
    ],
    "meta": {
      "categoryTitle": "Множественное число",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "gustar_indirect_pronouns",
    "cat": "gustar",
    "word": "me / te / le / nos / os / les",
    "nav": "me / te / le… · кому",
    "gender": "косвенные местоимения",
    "tr": "кому нравится, интересно, мешает или безразлично",
    "table": {
      "headers": [
        "Кому",
        "Краткая форма",
        "С уточнением"
      ],
      "rows": [
        [
          "мне",
          "me",
          "a mí"
        ],
        [
          "тебе",
          "te",
          "a ti"
        ],
        [
          "ему / ей / Вам",
          "le",
          "a él / a ella / a usted"
        ],
        [
          "нам",
          "nos",
          "a nosotros / a nosotras"
        ],
        [
          "вам · vosotros",
          "os",
          "a vosotros / a vosotras"
        ],
        [
          "им / Вам",
          "les",
          "a ellos / a ellas / a ustedes"
        ]
      ]
    },
    "examples": [
      [
        "A mí me gusta el té, pero a ella le gusta el café.",
        "Мне нравится чай, а ей нравится кофе."
      ],
      [
        "¿A ti te interesan los idiomas?",
        "Тебе интересны языки?"
      ]
    ],
    "meta": {
      "categoryTitle": "С gustar: кому и сколько",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "gustar_singular_plural",
    "cat": "gustar",
    "word": "gusta / gustan",
    "nav": "gusta / gustan · сколько",
    "gender": "согласование с тем, что нравится",
    "tr": "gusta — один предмет или действие; gustan — несколько предметов",
    "table": {
      "headers": [
        "Что нравится",
        "Форма",
        "Пример"
      ],
      "rows": [
        [
          "один предмет",
          "gusta",
          "Me gusta el café."
        ],
        [
          "действие",
          "gusta",
          "Me gusta leer."
        ],
        [
          "несколько предметов",
          "gustan",
          "Me gustan los libros."
        ]
      ]
    },
    "examples": [
      [
        "Le gusta esta película, pero le gustan más los libros.",
        "Ей нравится этот фильм, но книги нравятся больше."
      ],
      [
        "Nos gusta viajar y nos gustan los viajes largos.",
        "Нам нравится путешествовать и нравятся долгие поездки."
      ]
    ],
    "meta": {
      "categoryTitle": "С gustar: кому и сколько",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  }
];

const EXERCISES = [
  {
    "id": "pronoun_yo_es",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Личное местоимение",
    "q": "Переведи на испанский: я.",
    "a": [
      "yo"
    ],
    "e": "yo — я."
  },
  {
    "id": "pronoun_yo_ru",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Узнай местоимение",
    "q": "Переведи на русский: yo.",
    "a": [
      "я"
    ],
    "e": "yo — я."
  },
  {
    "id": "pronoun_yo_poss",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Притяжательная форма",
    "q": "Переведи на испанский «мой / моя / моё / мои» перед существительным.",
    "a": [
      "mi",
      "mis"
    ],
    "e": "mi / mis — мой, моя, моё / мои. Пример: mi libro · mis cosas."
  },
  {
    "id": "pronoun_yo_verb_0",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол ser в Presente для «yo».",
    "a": [
      "soy"
    ],
    "e": "yo + ser → soy."
  },
  {
    "id": "pronoun_yo_verb_1",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол tener в Presente для «yo».",
    "a": [
      "tengo"
    ],
    "e": "yo + tener → tengo."
  },
  {
    "id": "pronoun_tu_es",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Личное местоимение",
    "q": "Переведи на испанский: ты.",
    "a": [
      "tú",
      "tu"
    ],
    "e": "tú — ты."
  },
  {
    "id": "pronoun_tu_ru",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Узнай местоимение",
    "q": "Переведи на русский: tú.",
    "a": [
      "ты"
    ],
    "e": "tú — ты."
  },
  {
    "id": "pronoun_tu_poss",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Притяжательная форма",
    "q": "Переведи на испанский «твой / твоя / твоё / твои» перед существительным.",
    "a": [
      "tu",
      "tus"
    ],
    "e": "tu / tus — твой, твоя, твоё / твои. Пример: tu café · tus libros."
  },
  {
    "id": "pronoun_tu_verb_0",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол ser в Presente для «tú».",
    "a": [
      "eres"
    ],
    "e": "tú + ser → eres."
  },
  {
    "id": "pronoun_tu_verb_1",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол tener в Presente для «tú».",
    "a": [
      "tienes"
    ],
    "e": "tú + tener → tienes."
  },
  {
    "id": "pronoun_el_ella_es",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Личное местоимение",
    "q": "Переведи на испанский: он / она / Вы.",
    "a": [
      "él",
      "el",
      "ella",
      "usted"
    ],
    "e": "él / ella / usted — он / она / Вы."
  },
  {
    "id": "pronoun_el_ella_ru",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Узнай местоимение",
    "q": "Переведи на русский: él / ella / usted.",
    "a": [
      "он",
      "она",
      "вы",
      "он она",
      "он или она",
      "он / она / Вы"
    ],
    "e": "él / ella / usted — он / она / Вы."
  },
  {
    "id": "pronoun_el_ella_poss",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Притяжательная форма",
    "q": "Переведи на испанский «его / её / Ваш / их» перед существительным.",
    "a": [
      "su",
      "sus"
    ],
    "e": "su / sus — его, её, Ваш / их. Пример: su casa · sus amigos."
  },
  {
    "id": "pronoun_el_ella_verb_0",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол ser в Presente для «él / ella / usted».",
    "a": [
      "es"
    ],
    "e": "él / ella / usted + ser → es."
  },
  {
    "id": "pronoun_el_ella_verb_1",
    "topic": "pronouns",
    "foodCat": "singular",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол tener в Presente для «él / ella / usted».",
    "a": [
      "tiene"
    ],
    "e": "él / ella / usted + tener → tiene."
  },
  {
    "id": "pronoun_nosotros_es",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Личное местоимение",
    "q": "Переведи на испанский: мы.",
    "a": [
      "nosotros",
      "nosotras"
    ],
    "e": "nosotros / nosotras — мы."
  },
  {
    "id": "pronoun_nosotros_ru",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Узнай местоимение",
    "q": "Переведи на русский: nosotros / nosotras.",
    "a": [
      "мы"
    ],
    "e": "nosotros / nosotras — мы."
  },
  {
    "id": "pronoun_nosotros_poss",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Притяжательная форма",
    "q": "Переведи на испанский «наш / наша / наши» перед существительным.",
    "a": [
      "nuestro",
      "nuestra",
      "nuestros",
      "nuestras"
    ],
    "e": "nuestro / nuestra / nuestros / nuestras — наш / наша / наши. Пример: nuestro barrio · nuestra casa."
  },
  {
    "id": "pronoun_nosotros_verb_0",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол ser в Presente для «nosotros / nosotras».",
    "a": [
      "somos"
    ],
    "e": "nosotros / nosotras + ser → somos."
  },
  {
    "id": "pronoun_nosotros_verb_1",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол tener в Presente для «nosotros / nosotras».",
    "a": [
      "tenemos"
    ],
    "e": "nosotros / nosotras + tener → tenemos."
  },
  {
    "id": "pronoun_vosotros_es",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Личное местоимение",
    "q": "Переведи на испанский: вы (неформально, Испания).",
    "a": [
      "vosotros",
      "vosotras"
    ],
    "e": "vosotros / vosotras — вы (неформально, Испания)."
  },
  {
    "id": "pronoun_vosotros_ru",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Узнай местоимение",
    "q": "Переведи на русский: vosotros / vosotras.",
    "a": [
      "вы",
      "вы неформально",
      "вы (неформально, Испания)"
    ],
    "e": "vosotros / vosotras — вы (неформально, Испания)."
  },
  {
    "id": "pronoun_vosotros_poss",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Притяжательная форма",
    "q": "Переведи на испанский «ваш / ваша / ваши» перед существительным.",
    "a": [
      "vuestro",
      "vuestra",
      "vuestros",
      "vuestras"
    ],
    "e": "vuestro / vuestra / vuestros / vuestras — ваш / ваша / ваши. Пример: vuestro profesor · vuestra ciudad."
  },
  {
    "id": "pronoun_vosotros_verb_0",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол ser в Presente для «vosotros / vosotras».",
    "a": [
      "sois"
    ],
    "e": "vosotros / vosotras + ser → sois."
  },
  {
    "id": "pronoun_vosotros_verb_1",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол tener в Presente для «vosotros / vosotras».",
    "a": [
      "tenéis"
    ],
    "e": "vosotros / vosotras + tener → tenéis."
  },
  {
    "id": "pronoun_ellos_es",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Личное местоимение",
    "q": "Переведи на испанский: они / вы.",
    "a": [
      "ellos",
      "ellas",
      "ustedes"
    ],
    "e": "ellos / ellas / ustedes — они / вы."
  },
  {
    "id": "pronoun_ellos_ru",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Узнай местоимение",
    "q": "Переведи на русский: ellos / ellas / ustedes.",
    "a": [
      "они",
      "вы",
      "они или вы",
      "они / вы"
    ],
    "e": "ellos / ellas / ustedes — они / вы."
  },
  {
    "id": "pronoun_ellos_poss",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Притяжательная форма",
    "q": "Переведи на испанский «их / ваш / ваша / ваши» перед существительным.",
    "a": [
      "su",
      "sus"
    ],
    "e": "su / sus — их / ваш, ваша, ваши. Пример: su amigo · sus cosas."
  },
  {
    "id": "pronoun_ellos_verb_0",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол ser в Presente для «ellos / ellas / ustedes».",
    "a": [
      "son"
    ],
    "e": "ellos / ellas / ustedes + ser → son."
  },
  {
    "id": "pronoun_ellos_verb_1",
    "topic": "pronouns",
    "foodCat": "plural",
    "skill": "Спряжение Presente",
    "q": "Поставь глагол tener в Presente для «ellos / ellas / ustedes».",
    "a": [
      "tienen"
    ],
    "e": "ellos / ellas / ustedes + tener → tienen."
  },
  {
    "id": "choice_pronouns_yo",
    "topic": "pronouns",
    "foodCat": "singular",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я.",
    "a": [
      "yo"
    ],
    "options": [
      "yo",
      "tú",
      "él / ella / usted",
      "nosotros / nosotras"
    ],
    "e": "yo — я."
  },
  {
    "id": "choice_pronouns_tu",
    "topic": "pronouns",
    "foodCat": "singular",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ты.",
    "a": [
      "tú"
    ],
    "options": [
      "tú",
      "él / ella / usted",
      "nosotros / nosotras",
      "vosotros / vosotras"
    ],
    "e": "tú — ты."
  },
  {
    "id": "choice_pronouns_el_ella",
    "topic": "pronouns",
    "foodCat": "singular",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: он / она / Вы.",
    "a": [
      "él / ella / usted"
    ],
    "options": [
      "él / ella / usted",
      "nosotros / nosotras",
      "vosotros / vosotras",
      "ellos / ellas / ustedes"
    ],
    "e": "él / ella / usted — он / она / Вы."
  },
  {
    "id": "choice_pronouns_nosotros",
    "topic": "pronouns",
    "foodCat": "plural",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мы.",
    "a": [
      "nosotros / nosotras"
    ],
    "options": [
      "nosotros / nosotras",
      "vosotros / vosotras",
      "ellos / ellas / ustedes",
      "yo"
    ],
    "e": "nosotros / nosotras — мы."
  },
  {
    "id": "choice_pronouns_vosotros",
    "topic": "pronouns",
    "foodCat": "plural",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вы (неформально, Испания).",
    "a": [
      "vosotros / vosotras"
    ],
    "options": [
      "vosotros / vosotras",
      "ellos / ellas / ustedes",
      "yo",
      "tú"
    ],
    "e": "vosotros / vosotras — вы (неформально, Испания)."
  },
  {
    "id": "choice_pronouns_ellos",
    "topic": "pronouns",
    "foodCat": "plural",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: они / вы.",
    "a": [
      "ellos / ellas / ustedes"
    ],
    "options": [
      "ellos / ellas / ustedes",
      "yo",
      "tú",
      "él / ella / usted"
    ],
    "e": "ellos / ellas / ustedes — они / вы."
  },
  {
    "id": "audio_pronouns_yo",
    "topic": "pronouns",
    "foodCat": "singular",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Yo vivo en Madrid.",
    "a": [
      "Yo vivo en Madrid."
    ],
    "e": "Я живу в Мадриде."
  },
  {
    "id": "audio_pronouns_tu",
    "topic": "pronouns",
    "foodCat": "singular",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tú trabajas mucho.",
    "a": [
      "Tú trabajas mucho."
    ],
    "e": "Ты много работаешь."
  },
  {
    "id": "audio_pronouns_el_ella",
    "topic": "pronouns",
    "foodCat": "singular",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ella lee en casa.",
    "a": [
      "Ella lee en casa."
    ],
    "e": "Она читает дома."
  },
  {
    "id": "audio_pronouns_nosotros",
    "topic": "pronouns",
    "foodCat": "plural",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nosotros aprendemos español.",
    "a": [
      "Nosotros aprendemos español."
    ],
    "e": "Мы учим испанский."
  },
  {
    "id": "audio_pronouns_vosotros",
    "topic": "pronouns",
    "foodCat": "plural",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vosotros vivís cerca.",
    "a": [
      "Vosotros vivís cerca."
    ],
    "e": "Вы живёте рядом."
  },
  {
    "id": "audio_pronouns_ellos",
    "topic": "pronouns",
    "foodCat": "plural",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ellos van al gimnasio.",
    "a": [
      "Ellos van al gimnasio."
    ],
    "e": "Они ходят в спортзал."
  },
  {
    "id": "order_g_books",
    "topic": "pronouns",
    "foodCat": "gustar",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Мне нравятся книги»",
    "tokens": [
      "Me",
      "gustan",
      "los",
      "libros."
    ],
    "a": [
      "Me gustan los libros."
    ],
    "e": "С множественным объектом используется gustan."
  },
  {
    "id": "order_g_ella",
    "topic": "pronouns",
    "foodCat": "gustar",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Ей нравится танцевать»",
    "tokens": [
      "A",
      "ella",
      "le",
      "gusta",
      "bailar."
    ],
    "a": [
      "A ella le gusta bailar."
    ],
    "e": "A ella уточняет, к кому относится le."
  },
  {
    "id": "correct_g_number",
    "topic": "pronouns",
    "foodCat": "gustar",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Me gusto los libros.",
    "a": [
      "Me gustan los libros."
    ],
    "e": "Los libros — множественное число, поэтому gustan."
  },
  {
    "id": "correct_g_pronoun",
    "topic": "pronouns",
    "foodCat": "gustar",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: A ella la gusta bailar.",
    "a": [
      "A ella le gusta bailar."
    ],
    "e": "С gustar используется косвенное местоимение le."
  },
  {
    "id": "forms_possessives",
    "topic": "pronouns",
    "foodCat": "all",
    "type": "forms",
    "skill": "Таблица спряжения",
    "q": "Заполни притяжательные формы перед существительным.",
    "formLabels": [
      "yo",
      "tú",
      "él / ella",
      "nosotros",
      "vosotros",
      "ellos"
    ],
    "a": [
      "mi|tu|su|nuestro|vuestro|su"
    ],
    "displayAnswer": "mi · tu · su · nuestro · vuestro · su",
    "e": "Заполняй формы слева направо по лицам."
  },
  {
    "id": "forms_gustar_persons",
    "topic": "pronouns",
    "foodCat": "gustar",
    "type": "forms",
    "skill": "Таблица спряжения",
    "q": "Заполни формы «кому нравится» с gusta.",
    "formLabels": [
      "yo",
      "tú",
      "él / ella",
      "nosotros",
      "vosotros",
      "ellos"
    ],
    "a": [
      "me gusta|te gusta|le gusta|nos gusta|os gusta|les gusta"
    ],
    "displayAnswer": "me gusta · te gusta · le gusta · nos gusta · os gusta · les gusta",
    "e": "Заполняй формы слева направо по лицам."
  },
  {
    "id": "compare_gusta_gustan",
    "topic": "pronouns",
    "foodCat": "gustar",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: Me ___ los libros.",
    "options": [
      "gusta",
      "gustan",
      "gusto"
    ],
    "a": [
      "gustan"
    ],
    "e": "Los libros — множественное число."
  },
  {
    "id": "match_gustar",
    "topic": "pronouns",
    "foodCat": "gustar",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини человека с формой «кому нравится».",
    "pairs": [
      [
        "a mí",
        "me gusta"
      ],
      [
        "a ti",
        "te gusta"
      ],
      [
        "a él / ella",
        "le gusta"
      ],
      [
        "a nosotros",
        "nos gusta"
      ],
      [
        "a vosotros",
        "os gusta"
      ],
      [
        "a ellos",
        "les gusta"
      ]
    ],
    "a": [
      "me gusta | te gusta | le gusta | nos gusta | os gusta | les gusta"
    ],
    "displayAnswer": "a mí — me gusta · a ti — te gusta · a él / ella — le gusta · a nosotros — nos gusta · a vosotros — os gusta · a ellos — les gusta",
    "e": "Перед gusta используются косвенные местоимения me, te, le, nos, os, les."
  },
  {
    "id": "sort_pronoun_types",
    "topic": "pronouns",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели местоимения и притяжательные формы по функции.",
    "sortColumns": [
      {
        "id": "c0",
        "title": "Личные местоимения"
      },
      {
        "id": "c1",
        "title": "Притяжательные перед существительным"
      },
      {
        "id": "c2",
        "title": "Косвенные с gustar"
      }
    ],
    "sortTokens": [
      {
        "id": "t0_0",
        "text": "yo",
        "category": "c0"
      },
      {
        "id": "t0_1",
        "text": "tú",
        "category": "c0"
      },
      {
        "id": "t0_2",
        "text": "él",
        "category": "c0"
      },
      {
        "id": "t0_3",
        "text": "nosotros",
        "category": "c0"
      },
      {
        "id": "t0_4",
        "text": "ellos",
        "category": "c0"
      },
      {
        "id": "t1_0",
        "text": "mi",
        "category": "c1"
      },
      {
        "id": "t1_1",
        "text": "tu",
        "category": "c1"
      },
      {
        "id": "t1_2",
        "text": "su",
        "category": "c1"
      },
      {
        "id": "t1_3",
        "text": "nuestro",
        "category": "c1"
      },
      {
        "id": "t1_4",
        "text": "vuestro",
        "category": "c1"
      },
      {
        "id": "t2_0",
        "text": "me",
        "category": "c2"
      },
      {
        "id": "t2_1",
        "text": "te",
        "category": "c2"
      },
      {
        "id": "t2_2",
        "text": "le",
        "category": "c2"
      },
      {
        "id": "t2_3",
        "text": "nos",
        "category": "c2"
      },
      {
        "id": "t2_4",
        "text": "os",
        "category": "c2"
      },
      {
        "id": "t2_5",
        "text": "les",
        "category": "c2"
      }
    ],
    "a": [
      "c0 | c0 | c0 | c0 | c0 | c1 | c1 | c1 | c1 | c1 | c2 | c2 | c2 | c2 | c2 | c2"
    ],
    "displayAnswer": "Личные местоимения: yo, tú, él, nosotros, ellos · Притяжательные перед существительным: mi, tu, su, nuestro, vuestro · Косвенные с gustar: me, te, le, nos, os, les",
    "e": "Формы подобраны без повторов: nosotros — личное местоимение, а nos — косвенное."
  }
];

export const pronounsTopic = {
  id: "pronouns",
  title: "Местоимения",
  icon: "◎",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
