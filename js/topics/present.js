/**
 * Presente topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "hablar",
    "cat": "ar",
    "word": "hablar",
    "base": "hablar",
    "gender": "правильный глагол · -ar",
    "tr": "говорить, разговаривать",
    "forms": [
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
    ],
    "examples": [
      [
        "Yo hablo español.",
        "Я говорю по-испански."
      ],
      [
        "Hablamos con nuestros amigos cada día.",
        "Мы разговариваем с друзьями каждый день."
      ]
    ],
    "meta": {
      "categoryTitle": "Глаголы -ar",
      "categoryOrder": 1,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "comer",
    "cat": "er",
    "word": "comer",
    "base": "comer",
    "gender": "правильный глагол · -er",
    "tr": "есть, кушать",
    "forms": [
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
    ],
    "examples": [
      [
        "Yo como fruta cada día.",
        "Я ем фрукты каждый день."
      ],
      [
        "Ellos comen en el restaurante.",
        "Они едят в ресторане."
      ]
    ],
    "meta": {
      "categoryTitle": "Глаголы -er",
      "categoryOrder": 2,
      "allCategoryTitle": "Все глаголы"
    }
  },
  {
    "id": "vivir",
    "cat": "ir",
    "word": "vivir",
    "base": "vivir",
    "gender": "правильный глагол · -ir",
    "tr": "жить",
    "forms": [
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
    ],
    "examples": [
      [
        "Yo vivo cerca del metro.",
        "Я живу рядом с метро."
      ],
      [
        "Ellos viven en Barcelona.",
        "Они живут в Барселоне."
      ]
    ],
    "meta": {
      "categoryTitle": "Глаголы -ir",
      "categoryOrder": 3,
      "allCategoryTitle": "Все глаголы"
    }
  }
];

const EXERCISES = [
  {
    "id": "p1",
    "topic": "present",
    "skill": "Спряжение",
    "q": "Поставь vivir для vosotros в настоящем времени.",
    "a": [
      "vivís"
    ]
  },
  {
    "id": "p2",
    "topic": "present",
    "skill": "Спряжение",
    "q": "Поставь leer для usted в настоящем времени.",
    "a": [
      "lee",
      "usted lee"
    ]
  },
  {
    "id": "p3",
    "topic": "present",
    "skill": "Спряжение",
    "q": "Поставь escuchar для vosotros в отрицательной форме.",
    "a": [
      "no escucháis",
      "vosotros no escucháis",
      "no escucháis vosotros"
    ]
  },
  {
    "id": "p4",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Я живу в Мадриде.",
    "a": [
      "Vivo en Madrid",
      "Yo vivo en Madrid"
    ]
  },
  {
    "id": "p5",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Мы работаем дома.",
    "a": [
      "Trabajamos en casa",
      "Nosotros trabajamos en casa",
      "Nosotras trabajamos en casa"
    ]
  },
  {
    "id": "p6",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Она читает книгу.",
    "a": [
      "Ella lee un libro",
      "Lee un libro"
    ]
  },
  {
    "id": "p7",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Вы говорите по-испански.",
    "a": [
      "Hablas español",
      "Tú hablas español",
      "Habla español",
      "Usted habla español",
      "Habláis español",
      "Vosotros habláis español",
      "Ustedes hablan español"
    ],
    "e": "Вариант зависит от того, к одному или нескольким людям и насколько формально ты обращаешься."
  },
  {
    "id": "p8",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Я учу испанский, потому что живу в Мадриде.",
    "a": [
      "Aprendo español porque vivo en Madrid",
      "Yo aprendo español porque vivo en Madrid"
    ]
  },
  {
    "id": "p9",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: По субботам мы всегда встречаемся с друзьями.",
    "a": [
      "Los sábados siempre quedamos con amigos",
      "Los sábados siempre quedamos con los amigos"
    ]
  },
  {
    "id": "p10",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Осенью листья становятся жёлтыми.",
    "a": [
      "En otoño las hojas se vuelven amarillas"
    ]
  },
  {
    "id": "p11",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Зимой мне нравится пить горячий шоколад.",
    "a": [
      "En invierno me gusta beber chocolate caliente"
    ]
  },
  {
    "id": "p12",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: Летом я езжу на море.",
    "a": [
      "En verano voy al mar",
      "En verano yo voy al mar"
    ]
  },
  {
    "id": "p13",
    "topic": "present",
    "skill": "Перевод",
    "q": "Переведи на испанский: В пятницу вечером я отдыхаю дома.",
    "a": [
      "El viernes por la noche descanso en casa",
      "El viernes por la noche yo descanso en casa"
    ]
  },
  {
    "id": "p14",
    "topic": "present",
    "skill": "Часть речи",
    "q": "Что такое llueve: глагол, существительное или прилагательное?",
    "a": [
      "глагол",
      "глагол llover",
      "это глагол",
      "verbo"
    ],
    "e": "Llueve — форма безличного глагола llover: «идёт дождь»."
  },
  {
    "id": "study_present_hablo_es",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Вспомни",
    "q": "Переведи на испанский: я говорю.",
    "a": [
      "yo hablo",
      "hablo"
    ],
    "e": "Правильный вариант: yo hablo."
  },
  {
    "id": "study_present_hablo_ru",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Узнай",
    "q": "Переведи на русский: yo hablo.",
    "a": [
      "я говорю"
    ],
    "e": "yo hablo — я говорю."
  },
  {
    "id": "study_present_hablo_ctx",
    "topic": "present",
    "foodCat": "ar",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я говорю по-испански.»: Yo ___ español.",
    "a": [
      "hablo"
    ],
    "e": "Yo hablo español. — Я говорю по-испански."
  },
  {
    "id": "study_present_hablas_es",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ты говоришь.",
    "a": [
      "tú hablas",
      "tu hablas",
      "hablas"
    ],
    "e": "Правильный вариант: tú hablas."
  },
  {
    "id": "study_present_hablas_ru",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Узнай",
    "q": "Переведи на русский: tú hablas.",
    "a": [
      "ты говоришь"
    ],
    "e": "tú hablas — ты говоришь."
  },
  {
    "id": "study_present_hablas_ctx",
    "topic": "present",
    "foodCat": "ar",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ты говоришь очень быстро.»: Tú ___ muy rápido.",
    "a": [
      "hablas"
    ],
    "e": "Tú hablas muy rápido. — Ты говоришь очень быстро."
  },
  {
    "id": "study_present_habla_es",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Вспомни",
    "q": "Переведи на испанский: он, она говорит; Вы говорите.",
    "a": [
      "él habla",
      "el habla",
      "ella habla",
      "usted habla",
      "habla"
    ],
    "e": "Правильный вариант: él / ella / usted habla."
  },
  {
    "id": "study_present_habla_ru",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Узнай",
    "q": "Переведи на русский: él / ella / usted habla.",
    "a": [
      "он говорит",
      "она говорит",
      "вы говорите",
      "он, она говорит; Вы говорите"
    ],
    "e": "él / ella / usted habla — он, она говорит; Вы говорите."
  },
  {
    "id": "study_present_habla_ctx",
    "topic": "present",
    "foodCat": "ar",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Она разговаривает с преподавателем.»: Ella ___ con el profesor.",
    "a": [
      "habla"
    ],
    "e": "Ella habla con el profesor. — Она разговаривает с преподавателем."
  },
  {
    "id": "study_present_hablamos_es",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мы говорим.",
    "a": [
      "nosotros hablamos",
      "hablamos"
    ],
    "e": "Правильный вариант: nosotros hablamos."
  },
  {
    "id": "study_present_hablamos_ru",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Узнай",
    "q": "Переведи на русский: nosotros hablamos.",
    "a": [
      "мы говорим"
    ],
    "e": "nosotros hablamos — мы говорим."
  },
  {
    "id": "study_present_hablamos_ctx",
    "topic": "present",
    "foodCat": "ar",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы говорим о музыке.»: Nosotros ___ de música.",
    "a": [
      "hablamos"
    ],
    "e": "Nosotros hablamos de música. — Мы говорим о музыке."
  },
  {
    "id": "study_present_hablais_es",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вы говорите.",
    "a": [
      "vosotros habláis",
      "vosotros hablais",
      "habláis",
      "hablais"
    ],
    "e": "Правильный вариант: vosotros habláis."
  },
  {
    "id": "study_present_hablais_ru",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Узнай",
    "q": "Переведи на русский: vosotros habláis.",
    "a": [
      "вы говорите"
    ],
    "e": "vosotros habláis — вы говорите."
  },
  {
    "id": "study_present_hablais_ctx",
    "topic": "present",
    "foodCat": "ar",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вы говорите очень громко.»: Vosotros ___ muy alto.",
    "a": [
      "habláis",
      "hablais"
    ],
    "e": "Vosotros habláis muy alto. — Вы говорите очень громко."
  },
  {
    "id": "study_present_hablan_es",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Вспомни",
    "q": "Переведи на испанский: они говорят; вы говорите.",
    "a": [
      "ellos hablan",
      "ellas hablan",
      "ustedes hablan",
      "hablan"
    ],
    "e": "Правильный вариант: ellos / ustedes hablan."
  },
  {
    "id": "study_present_hablan_ru",
    "topic": "present",
    "foodCat": "ar",
    "skill": "Узнай",
    "q": "Переведи на русский: ellos / ustedes hablan.",
    "a": [
      "они говорят",
      "вы говорите",
      "они говорят; вы говорите"
    ],
    "e": "ellos / ustedes hablan — они говорят; вы говорите."
  },
  {
    "id": "study_present_hablan_ctx",
    "topic": "present",
    "foodCat": "ar",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Они говорят о футболе.»: Ellos ___ de fútbol.",
    "a": [
      "hablan"
    ],
    "e": "Ellos hablan de fútbol. — Они говорят о футболе."
  },
  {
    "id": "study_present_como_es",
    "topic": "present",
    "foodCat": "er",
    "skill": "Вспомни",
    "q": "Переведи на испанский: я ем.",
    "a": [
      "yo como",
      "como"
    ],
    "e": "Правильный вариант: yo como."
  },
  {
    "id": "study_present_como_ru",
    "topic": "present",
    "foodCat": "er",
    "skill": "Узнай",
    "q": "Переведи на русский: yo como.",
    "a": [
      "я ем"
    ],
    "e": "yo como — я ем."
  },
  {
    "id": "study_present_como_ctx",
    "topic": "present",
    "foodCat": "er",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ем фрукты каждый день.»: Yo ___ fruta.",
    "a": [
      "como"
    ],
    "e": "Yo como fruta cada día. — Я ем фрукты каждый день."
  },
  {
    "id": "study_present_comes_es",
    "topic": "present",
    "foodCat": "er",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ты ешь.",
    "a": [
      "tú comes",
      "tu comes",
      "comes"
    ],
    "e": "Правильный вариант: tú comes."
  },
  {
    "id": "study_present_comes_ru",
    "topic": "present",
    "foodCat": "er",
    "skill": "Узнай",
    "q": "Переведи на русский: tú comes.",
    "a": [
      "ты ешь"
    ],
    "e": "tú comes — ты ешь."
  },
  {
    "id": "study_present_comes_ctx",
    "topic": "present",
    "foodCat": "er",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ты ешь очень поздно.»: Tú ___ muy tarde.",
    "a": [
      "comes"
    ],
    "e": "Tú comes muy tarde. — Ты ешь очень поздно."
  },
  {
    "id": "study_present_come_es",
    "topic": "present",
    "foodCat": "er",
    "skill": "Вспомни",
    "q": "Переведи на испанский: он, она ест; Вы едите.",
    "a": [
      "él come",
      "el come",
      "ella come",
      "usted come",
      "come"
    ],
    "e": "Правильный вариант: él / ella / usted come."
  },
  {
    "id": "study_present_come_ru",
    "topic": "present",
    "foodCat": "er",
    "skill": "Узнай",
    "q": "Переведи на русский: él / ella / usted come.",
    "a": [
      "он ест",
      "она ест",
      "вы едите",
      "он, она ест; Вы едите"
    ],
    "e": "él / ella / usted come — он, она ест; Вы едите."
  },
  {
    "id": "study_present_come_ctx",
    "topic": "present",
    "foodCat": "er",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Она ест салат.»: Ella ___ una ensalada.",
    "a": [
      "come"
    ],
    "e": "Ella come una ensalada. — Она ест салат."
  },
  {
    "id": "study_present_comemos_es",
    "topic": "present",
    "foodCat": "er",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мы едим.",
    "a": [
      "nosotros comemos",
      "comemos"
    ],
    "e": "Правильный вариант: nosotros comemos."
  },
  {
    "id": "study_present_comemos_ru",
    "topic": "present",
    "foodCat": "er",
    "skill": "Узнай",
    "q": "Переведи на русский: nosotros comemos.",
    "a": [
      "мы едим"
    ],
    "e": "nosotros comemos — мы едим."
  },
  {
    "id": "study_present_comemos_ctx",
    "topic": "present",
    "foodCat": "er",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы едим вместе.»: Nosotros ___ juntos.",
    "a": [
      "comemos"
    ],
    "e": "Nosotros comemos juntos. — Мы едим вместе."
  },
  {
    "id": "study_present_comeis_es",
    "topic": "present",
    "foodCat": "er",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вы едите.",
    "a": [
      "vosotros coméis",
      "vosotros comeis",
      "coméis",
      "comeis"
    ],
    "e": "Правильный вариант: vosotros coméis."
  },
  {
    "id": "study_present_comeis_ru",
    "topic": "present",
    "foodCat": "er",
    "skill": "Узнай",
    "q": "Переведи на русский: vosotros coméis.",
    "a": [
      "вы едите"
    ],
    "e": "vosotros coméis — вы едите."
  },
  {
    "id": "study_present_comeis_ctx",
    "topic": "present",
    "foodCat": "er",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вы едите много фруктов.»: Vosotros ___ mucha fruta.",
    "a": [
      "coméis",
      "comeis"
    ],
    "e": "Vosotros coméis mucha fruta. — Вы едите много фруктов."
  },
  {
    "id": "study_present_comen_es",
    "topic": "present",
    "foodCat": "er",
    "skill": "Вспомни",
    "q": "Переведи на испанский: они едят; вы едите.",
    "a": [
      "ellos comen",
      "ellas comen",
      "ustedes comen",
      "comen"
    ],
    "e": "Правильный вариант: ellos / ustedes comen."
  },
  {
    "id": "study_present_comen_ru",
    "topic": "present",
    "foodCat": "er",
    "skill": "Узнай",
    "q": "Переведи на русский: ellos / ustedes comen.",
    "a": [
      "они едят",
      "вы едите",
      "они едят; вы едите"
    ],
    "e": "ellos / ustedes comen — они едят; вы едите."
  },
  {
    "id": "study_present_comen_ctx",
    "topic": "present",
    "foodCat": "er",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Они едят в ресторане.»: Ellos ___ en el restaurante.",
    "a": [
      "comen"
    ],
    "e": "Ellos comen en el restaurante. — Они едят в ресторане."
  },
  {
    "id": "study_present_vivo_es",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Вспомни",
    "q": "Переведи на испанский: я живу.",
    "a": [
      "yo vivo",
      "vivo"
    ],
    "e": "Правильный вариант: yo vivo."
  },
  {
    "id": "study_present_vivo_ru",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Узнай",
    "q": "Переведи на русский: yo vivo.",
    "a": [
      "я живу"
    ],
    "e": "yo vivo — я живу."
  },
  {
    "id": "study_present_vivo_ctx",
    "topic": "present",
    "foodCat": "ir",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я живу в Мадриде.»: Yo ___ en Madrid.",
    "a": [
      "vivo"
    ],
    "e": "Yo vivo en Madrid. — Я живу в Мадриде."
  },
  {
    "id": "study_present_vives_es",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ты живёшь.",
    "a": [
      "tú vives",
      "tu vives",
      "vives"
    ],
    "e": "Правильный вариант: tú vives."
  },
  {
    "id": "study_present_vives_ru",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Узнай",
    "q": "Переведи на русский: tú vives.",
    "a": [
      "ты живёшь",
      "ты живешь"
    ],
    "e": "tú vives — ты живёшь."
  },
  {
    "id": "study_present_vives_ctx",
    "topic": "present",
    "foodCat": "ir",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ты живёшь в центре.»: Tú ___ en el centro.",
    "a": [
      "vives"
    ],
    "e": "Tú vives en el centro. — Ты живёшь в центре."
  },
  {
    "id": "study_present_vive_es",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Вспомни",
    "q": "Переведи на испанский: он, она живёт; Вы живёте.",
    "a": [
      "él vive",
      "el vive",
      "ella vive",
      "usted vive",
      "vive"
    ],
    "e": "Правильный вариант: él / ella / usted vive."
  },
  {
    "id": "study_present_vive_ru",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Узнай",
    "q": "Переведи на русский: él / ella / usted vive.",
    "a": [
      "он живёт",
      "она живёт",
      "вы живёте",
      "он, она живёт; Вы живёте"
    ],
    "e": "él / ella / usted vive — он, она живёт; Вы живёте."
  },
  {
    "id": "study_present_vive_ctx",
    "topic": "present",
    "foodCat": "ir",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Он живёт рядом с работой.»: Él ___ cerca del trabajo.",
    "a": [
      "vive"
    ],
    "e": "Él vive cerca del trabajo. — Он живёт рядом с работой."
  },
  {
    "id": "study_present_vivimos_es",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мы живём.",
    "a": [
      "nosotros vivimos",
      "vivimos"
    ],
    "e": "Правильный вариант: nosotros vivimos."
  },
  {
    "id": "study_present_vivimos_ru",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Узнай",
    "q": "Переведи на русский: nosotros vivimos.",
    "a": [
      "мы живём",
      "мы живем"
    ],
    "e": "nosotros vivimos — мы живём."
  },
  {
    "id": "study_present_vivimos_ctx",
    "topic": "present",
    "foodCat": "ir",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы живём в Испании.»: Nosotros ___ en España.",
    "a": [
      "vivimos"
    ],
    "e": "Nosotros vivimos en España. — Мы живём в Испании."
  },
  {
    "id": "study_present_vivis_es",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вы живёте.",
    "a": [
      "vosotros vivís",
      "vosotros vivis",
      "vivís",
      "vivis"
    ],
    "e": "Правильный вариант: vosotros vivís."
  },
  {
    "id": "study_present_vivis_ru",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Узнай",
    "q": "Переведи на русский: vosotros vivís.",
    "a": [
      "вы живёте",
      "вы живете"
    ],
    "e": "vosotros vivís — вы живёте."
  },
  {
    "id": "study_present_vivis_ctx",
    "topic": "present",
    "foodCat": "ir",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вы живёте очень далеко.»: Vosotros ___ muy lejos.",
    "a": [
      "vivís",
      "vivis"
    ],
    "e": "Vosotros vivís muy lejos. — Вы живёте очень далеко."
  },
  {
    "id": "study_present_viven_es",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Вспомни",
    "q": "Переведи на испанский: они живут; вы живёте.",
    "a": [
      "ellos viven",
      "ellas viven",
      "ustedes viven",
      "viven"
    ],
    "e": "Правильный вариант: ellos / ustedes viven."
  },
  {
    "id": "study_present_viven_ru",
    "topic": "present",
    "foodCat": "ir",
    "skill": "Узнай",
    "q": "Переведи на русский: ellos / ustedes viven.",
    "a": [
      "они живут",
      "вы живёте",
      "они живут; вы живёте"
    ],
    "e": "ellos / ustedes viven — они живут; вы живёте."
  },
  {
    "id": "study_present_viven_ctx",
    "topic": "present",
    "foodCat": "ir",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Они живут в Барселоне.»: Ellos ___ en Barcelona.",
    "a": [
      "viven"
    ],
    "e": "Ellos viven en Barcelona. — Они живут в Барселоне."
  },
  {
    "id": "choice_present_hablo",
    "topic": "present",
    "foodCat": "ar",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я говорю.",
    "a": [
      "yo hablo"
    ],
    "options": [
      "yo hablo",
      "tú hablas",
      "él / ella / usted habla",
      "nosotros hablamos"
    ],
    "e": "yo hablo — я говорю."
  },
  {
    "id": "choice_present_hablas",
    "topic": "present",
    "foodCat": "ar",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ты говоришь.",
    "a": [
      "tú hablas"
    ],
    "options": [
      "tú hablas",
      "él / ella / usted habla",
      "nosotros hablamos",
      "vosotros habláis"
    ],
    "e": "tú hablas — ты говоришь."
  },
  {
    "id": "choice_present_habla",
    "topic": "present",
    "foodCat": "ar",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: он, она говорит; Вы говорите.",
    "a": [
      "él / ella / usted habla"
    ],
    "options": [
      "él / ella / usted habla",
      "nosotros hablamos",
      "vosotros habláis",
      "ellos / ustedes hablan"
    ],
    "e": "él / ella / usted habla — он, она говорит; Вы говорите."
  },
  {
    "id": "choice_present_hablamos",
    "topic": "present",
    "foodCat": "ar",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мы говорим.",
    "a": [
      "nosotros hablamos"
    ],
    "options": [
      "nosotros hablamos",
      "vosotros habláis",
      "ellos / ustedes hablan",
      "yo hablo"
    ],
    "e": "nosotros hablamos — мы говорим."
  },
  {
    "id": "choice_present_hablais",
    "topic": "present",
    "foodCat": "ar",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вы говорите.",
    "a": [
      "vosotros habláis"
    ],
    "options": [
      "vosotros habláis",
      "ellos / ustedes hablan",
      "yo hablo",
      "tú hablas"
    ],
    "e": "vosotros habláis — вы говорите."
  },
  {
    "id": "choice_present_hablan",
    "topic": "present",
    "foodCat": "ar",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: они говорят; вы говорите.",
    "a": [
      "ellos / ustedes hablan"
    ],
    "options": [
      "ellos / ustedes hablan",
      "yo hablo",
      "tú hablas",
      "él / ella / usted habla"
    ],
    "e": "ellos / ustedes hablan — они говорят; вы говорите."
  },
  {
    "id": "choice_present_como",
    "topic": "present",
    "foodCat": "er",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я ем.",
    "a": [
      "yo como"
    ],
    "options": [
      "yo como",
      "él / ella / usted come",
      "nosotros comemos",
      "vosotros coméis"
    ],
    "e": "yo como — я ем."
  },
  {
    "id": "choice_present_comes",
    "topic": "present",
    "foodCat": "er",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ты ешь.",
    "a": [
      "tú comes"
    ],
    "options": [
      "tú comes",
      "nosotros comemos",
      "vosotros coméis",
      "ellos / ustedes comen"
    ],
    "e": "tú comes — ты ешь."
  },
  {
    "id": "choice_present_come",
    "topic": "present",
    "foodCat": "er",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: он, она ест; Вы едите.",
    "a": [
      "él / ella / usted come"
    ],
    "options": [
      "él / ella / usted come",
      "vosotros coméis",
      "ellos / ustedes comen",
      "yo como"
    ],
    "e": "él / ella / usted come — он, она ест; Вы едите."
  },
  {
    "id": "choice_present_comemos",
    "topic": "present",
    "foodCat": "er",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мы едим.",
    "a": [
      "nosotros comemos"
    ],
    "options": [
      "nosotros comemos",
      "ellos / ustedes comen",
      "yo como",
      "tú comes"
    ],
    "e": "nosotros comemos — мы едим."
  },
  {
    "id": "choice_present_comeis",
    "topic": "present",
    "foodCat": "er",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вы едите.",
    "a": [
      "vosotros coméis"
    ],
    "options": [
      "vosotros coméis",
      "yo como",
      "tú comes",
      "él / ella / usted come"
    ],
    "e": "vosotros coméis — вы едите."
  },
  {
    "id": "choice_present_comen",
    "topic": "present",
    "foodCat": "er",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: они едят; вы едите.",
    "a": [
      "ellos / ustedes comen"
    ],
    "options": [
      "ellos / ustedes comen",
      "tú comes",
      "él / ella / usted come",
      "nosotros comemos"
    ],
    "e": "ellos / ustedes comen — они едят; вы едите."
  },
  {
    "id": "choice_present_vivo",
    "topic": "present",
    "foodCat": "ir",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: я живу.",
    "a": [
      "yo vivo"
    ],
    "options": [
      "yo vivo",
      "nosotros vivimos",
      "vosotros vivís",
      "ellos / ustedes viven"
    ],
    "e": "yo vivo — я живу."
  },
  {
    "id": "choice_present_vives",
    "topic": "present",
    "foodCat": "ir",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ты живёшь.",
    "a": [
      "tú vives"
    ],
    "options": [
      "tú vives",
      "vosotros vivís",
      "ellos / ustedes viven",
      "yo vivo"
    ],
    "e": "tú vives — ты живёшь."
  },
  {
    "id": "choice_present_vive",
    "topic": "present",
    "foodCat": "ir",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: он, она живёт; Вы живёте.",
    "a": [
      "él / ella / usted vive"
    ],
    "options": [
      "él / ella / usted vive",
      "ellos / ustedes viven",
      "yo vivo",
      "tú vives"
    ],
    "e": "él / ella / usted vive — он, она живёт; Вы живёте."
  },
  {
    "id": "choice_present_vivimos",
    "topic": "present",
    "foodCat": "ir",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мы живём.",
    "a": [
      "nosotros vivimos"
    ],
    "options": [
      "nosotros vivimos",
      "yo vivo",
      "tú vives",
      "él / ella / usted vive"
    ],
    "e": "nosotros vivimos — мы живём."
  },
  {
    "id": "choice_present_vivis",
    "topic": "present",
    "foodCat": "ir",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вы живёте.",
    "a": [
      "vosotros vivís"
    ],
    "options": [
      "vosotros vivís",
      "tú vives",
      "él / ella / usted vive",
      "nosotros vivimos"
    ],
    "e": "vosotros vivís — вы живёте."
  },
  {
    "id": "choice_present_viven",
    "topic": "present",
    "foodCat": "ir",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: они живут; вы живёте.",
    "a": [
      "ellos / ustedes viven"
    ],
    "options": [
      "ellos / ustedes viven",
      "él / ella / usted vive",
      "nosotros vivimos",
      "vosotros vivís"
    ],
    "e": "ellos / ustedes viven — они живут; вы живёте."
  },
  {
    "id": "audio_present_hablo",
    "topic": "present",
    "foodCat": "ar",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Yo hablo español.",
    "a": [
      "Yo hablo español."
    ],
    "e": "Я говорю по-испански."
  },
  {
    "id": "audio_present_hablas",
    "topic": "present",
    "foodCat": "ar",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tú hablas muy rápido.",
    "a": [
      "Tú hablas muy rápido."
    ],
    "e": "Ты говоришь очень быстро."
  },
  {
    "id": "audio_present_habla",
    "topic": "present",
    "foodCat": "ar",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ella habla con el profesor.",
    "a": [
      "Ella habla con el profesor."
    ],
    "e": "Она разговаривает с преподавателем."
  },
  {
    "id": "audio_present_hablamos",
    "topic": "present",
    "foodCat": "ar",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nosotros hablamos de música.",
    "a": [
      "Nosotros hablamos de música."
    ],
    "e": "Мы говорим о музыке."
  },
  {
    "id": "audio_present_hablais",
    "topic": "present",
    "foodCat": "ar",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vosotros habláis muy alto.",
    "a": [
      "Vosotros habláis muy alto."
    ],
    "e": "Вы говорите очень громко."
  },
  {
    "id": "audio_present_hablan",
    "topic": "present",
    "foodCat": "ar",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ellos hablan de fútbol.",
    "a": [
      "Ellos hablan de fútbol."
    ],
    "e": "Они говорят о футболе."
  },
  {
    "id": "audio_present_como",
    "topic": "present",
    "foodCat": "er",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Yo como fruta cada día.",
    "a": [
      "Yo como fruta cada día."
    ],
    "e": "Я ем фрукты каждый день."
  },
  {
    "id": "audio_present_comes",
    "topic": "present",
    "foodCat": "er",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tú comes muy tarde.",
    "a": [
      "Tú comes muy tarde."
    ],
    "e": "Ты ешь очень поздно."
  },
  {
    "id": "audio_present_come",
    "topic": "present",
    "foodCat": "er",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ella come una ensalada.",
    "a": [
      "Ella come una ensalada."
    ],
    "e": "Она ест салат."
  },
  {
    "id": "audio_present_comemos",
    "topic": "present",
    "foodCat": "er",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nosotros comemos juntos.",
    "a": [
      "Nosotros comemos juntos."
    ],
    "e": "Мы едим вместе."
  },
  {
    "id": "audio_present_comeis",
    "topic": "present",
    "foodCat": "er",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vosotros coméis mucha fruta.",
    "a": [
      "Vosotros coméis mucha fruta."
    ],
    "e": "Вы едите много фруктов."
  },
  {
    "id": "audio_present_comen",
    "topic": "present",
    "foodCat": "er",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ellos comen en el restaurante.",
    "a": [
      "Ellos comen en el restaurante."
    ],
    "e": "Они едят в ресторане."
  },
  {
    "id": "audio_present_vivo",
    "topic": "present",
    "foodCat": "ir",
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
    "id": "audio_present_vives",
    "topic": "present",
    "foodCat": "ir",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tú vives en el centro.",
    "a": [
      "Tú vives en el centro."
    ],
    "e": "Ты живёшь в центре."
  },
  {
    "id": "audio_present_vive",
    "topic": "present",
    "foodCat": "ir",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Él vive cerca del trabajo.",
    "a": [
      "Él vive cerca del trabajo."
    ],
    "e": "Он живёт рядом с работой."
  },
  {
    "id": "audio_present_vivimos",
    "topic": "present",
    "foodCat": "ir",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nosotros vivimos en España.",
    "a": [
      "Nosotros vivimos en España."
    ],
    "e": "Мы живём в Испании."
  },
  {
    "id": "audio_present_vivis",
    "topic": "present",
    "foodCat": "ir",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vosotros vivís muy lejos.",
    "a": [
      "Vosotros vivís muy lejos."
    ],
    "e": "Вы живёте очень далеко."
  },
  {
    "id": "audio_present_viven",
    "topic": "present",
    "foodCat": "ir",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ellos viven en Barcelona.",
    "a": [
      "Ellos viven en Barcelona."
    ],
    "e": "Они живут в Барселоне."
  },
  {
    "id": "forms_ser_present",
    "topic": "present",
    "foodCat": "ser",
    "type": "forms",
    "skill": "Таблица спряжения",
    "q": "Заполни формы ser в Presente.",
    "formLabels": [
      "yo",
      "tú",
      "él / ella",
      "nosotros",
      "vosotros",
      "ellos"
    ],
    "a": [
      "soy|eres|es|somos|sois|son"
    ],
    "displayAnswer": "soy · eres · es · somos · sois · son",
    "e": "Заполняй формы слева направо по лицам."
  },
  {
    "id": "forms_tener_present",
    "topic": "present",
    "foodCat": "irregular",
    "type": "forms",
    "skill": "Таблица спряжения",
    "q": "Заполни формы tener в Presente.",
    "formLabels": [
      "yo",
      "tú",
      "él / ella",
      "nosotros",
      "vosotros",
      "ellos"
    ],
    "a": [
      "tengo|tienes|tiene|tenemos|tenéis|tienen",
      "tengo|tienes|tiene|tenemos|teneis|tienen"
    ],
    "displayAnswer": "tengo · tienes · tiene · tenemos · tenéis · tienen",
    "e": "Заполняй формы слева направо по лицам."
  },
  {
    "id": "compare_ser_estar",
    "topic": "present",
    "foodCat": "estar",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: Madrid ___ en España.",
    "options": [
      "es",
      "está",
      "hay"
    ],
    "a": [
      "está"
    ],
    "e": "Для местонахождения используется estar."
  },
  {
    "id": "match_hablar",
    "topic": "present",
    "foodCat": "ar",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини местоимения с формами hablar в Presente.",
    "pairs": [
      [
        "yo",
        "hablo"
      ],
      [
        "tú",
        "hablas"
      ],
      [
        "él / ella",
        "habla"
      ],
      [
        "nosotros",
        "hablamos"
      ],
      [
        "vosotros",
        "habláis"
      ],
      [
        "ellos",
        "hablan"
      ]
    ],
    "a": [
      "hablo | hablas | habla | hablamos | habláis | hablan"
    ],
    "displayAnswer": "yo — hablo · tú — hablas · él / ella — habla · nosotros — hablamos · vosotros — habláis · ellos — hablan",
    "e": "Форма глагола должна совпадать с лицом и числом."
  },
  {
    "id": "match_vivir",
    "topic": "present",
    "foodCat": "ir",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини местоимения с формами vivir в Presente.",
    "pairs": [
      [
        "yo",
        "vivo"
      ],
      [
        "tú",
        "vives"
      ],
      [
        "él / ella",
        "vive"
      ],
      [
        "nosotros",
        "vivimos"
      ],
      [
        "vosotros",
        "vivís"
      ],
      [
        "ellos",
        "viven"
      ]
    ],
    "a": [
      "vivo | vives | vive | vivimos | vivís | viven"
    ],
    "displayAnswer": "yo — vivo · tú — vives · él / ella — vive · nosotros — vivimos · vosotros — vivís · ellos — viven",
    "e": "У глаголов на -ir меняются личные окончания."
  },
  {
    "id": "context_choice_yo_hablar",
    "topic": "present",
    "foodCat": "ar",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Cada mañana yo ___ español durante veinte minutos.",
    "options": [
      "hablar",
      "hablo",
      "hablas",
      "hablamos"
    ],
    "a": [
      "hablo"
    ],
    "e": "Подлежащее yo требует форму hablo."
  },
  {
    "id": "context_choice_ellas_vivir",
    "topic": "present",
    "foodCat": "ir",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Marta y Ana ___ en Madrid desde enero.",
    "options": [
      "vive",
      "vivo",
      "viven",
      "vivimos"
    ],
    "a": [
      "viven"
    ],
    "e": "Marta y Ana — множественное число, поэтому viven."
  },
  {
    "id": "sort_auto_present_0",
    "topic": "present",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Presente» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "ar",
        "title": "Глаголы -ar"
      },
      {
        "id": "er",
        "title": "Глаголы -er"
      },
      {
        "id": "ir",
        "title": "Глаголы -ir"
      }
    ],
    "sortTokens": [
      {
        "id": "present_0_ar_hablo",
        "text": "yo hablo",
        "category": "ar"
      },
      {
        "id": "present_0_ar_hablas",
        "text": "tú hablas",
        "category": "ar"
      },
      {
        "id": "present_0_ar_habla",
        "text": "él / ella / usted habla",
        "category": "ar"
      },
      {
        "id": "present_0_er_como",
        "text": "yo como",
        "category": "er"
      },
      {
        "id": "present_0_er_comes",
        "text": "tú comes",
        "category": "er"
      },
      {
        "id": "present_0_er_come",
        "text": "él / ella / usted come",
        "category": "er"
      },
      {
        "id": "present_0_ir_vivo",
        "text": "yo vivo",
        "category": "ir"
      },
      {
        "id": "present_0_ir_vives",
        "text": "tú vives",
        "category": "ir"
      },
      {
        "id": "present_0_ir_vive",
        "text": "él / ella / usted vive",
        "category": "ir"
      }
    ],
    "a": [
      "ar | ar | ar | er | er | er | ir | ir | ir"
    ],
    "displayAnswer": "Глаголы -ar: yo hablo, tú hablas, él / ella / usted habla · Глаголы -er: yo como, tú comes, él / ella / usted come · Глаголы -ir: yo vivo, tú vives, él / ella / usted vive",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const presentTopic = {
  id: "present",
  title: "Presente",
  icon: "↻",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
