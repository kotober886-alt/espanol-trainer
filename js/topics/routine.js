/**
 * Распорядок дня topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "despertarse",
    "cat": "morning",
    "word": "despertarse",
    "gender": "возвратный глагол",
    "tr": "просыпаться",
    "ru": [
      "просыпаться"
    ],
    "answers": [
      "despertarse"
    ],
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
    "meta": {
      "categoryTitle": "Утро",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "levantarse",
    "cat": "morning",
    "word": "levantarse",
    "gender": "возвратный глагол",
    "tr": "вставать",
    "ru": [
      "вставать"
    ],
    "answers": [
      "levantarse"
    ],
    "examples": [
      [
        "Me levanto después del despertador.",
        "Я встаю после будильника."
      ],
      [
        "Ella se levanta temprano.",
        "Она встаёт рано."
      ]
    ],
    "cloze": "Yo me ___ temprano.",
    "clozeAnswers": [
      "levanto"
    ],
    "meta": {
      "categoryTitle": "Утро",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "ducharse",
    "cat": "morning",
    "word": "ducharse",
    "gender": "возвратный глагол",
    "tr": "принимать душ",
    "ru": [
      "принимать душ",
      "мыться в душе"
    ],
    "answers": [
      "ducharse"
    ],
    "examples": [
      [
        "Me ducho por la mañana.",
        "Я принимаю душ утром."
      ],
      [
        "¿Te duchas antes del trabajo?",
        "Ты принимаешь душ перед работой?"
      ]
    ],
    "cloze": "Yo me ___ por la mañana.",
    "clozeAnswers": [
      "ducho"
    ],
    "meta": {
      "categoryTitle": "Утро",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "lavarse_cara",
    "cat": "morning",
    "word": "lavarse la cara",
    "gender": "возвратная конструкция",
    "tr": "умываться",
    "ru": [
      "умываться",
      "мыть лицо"
    ],
    "answers": [
      "lavarse la cara"
    ],
    "examples": [
      [
        "Me lavo la cara con agua fría.",
        "Я умываюсь холодной водой."
      ],
      [
        "Ella se lava la cara antes de dormir.",
        "Она умывается перед сном."
      ]
    ],
    "cloze": "Me ___ la cara.",
    "clozeAnswers": [
      "lavo"
    ],
    "meta": {
      "categoryTitle": "Утро",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "cepillarse",
    "cat": "morning",
    "word": "cepillarse los dientes",
    "gender": "возвратная конструкция",
    "tr": "чистить зубы",
    "ru": [
      "чистить зубы"
    ],
    "answers": [
      "cepillarse los dientes"
    ],
    "examples": [
      [
        "Me cepillo los dientes después del desayuno.",
        "Я чищу зубы после завтрака."
      ],
      [
        "Nos cepillamos los dientes dos veces al día.",
        "Мы чистим зубы дважды в день."
      ]
    ],
    "cloze": "Me ___ los dientes.",
    "clozeAnswers": [
      "cepillo"
    ],
    "meta": {
      "categoryTitle": "Утро",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "vestirse",
    "cat": "morning",
    "word": "vestirse",
    "gender": "возвратный глагол · e→i",
    "tr": "одеваться",
    "ru": [
      "одеваться"
    ],
    "answers": [
      "vestirse"
    ],
    "examples": [
      [
        "Me visto rápidamente.",
        "Я быстро одеваюсь."
      ],
      [
        "Los niños se visten solos.",
        "Дети одеваются сами."
      ]
    ],
    "cloze": "Yo me ___ rápidamente.",
    "clozeAnswers": [
      "visto"
    ],
    "meta": {
      "categoryTitle": "Утро",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "desayunar",
    "cat": "morning",
    "word": "desayunar",
    "gender": "обычный глагол",
    "tr": "завтракать",
    "ru": [
      "завтракать"
    ],
    "answers": [
      "desayunar"
    ],
    "examples": [
      [
        "Desayuno café y tostadas.",
        "Я завтракаю кофе и тостами."
      ],
      [
        "Desayunamos a las ocho.",
        "Мы завтракаем в восемь."
      ]
    ],
    "cloze": "Yo ___ a las ocho.",
    "clozeAnswers": [
      "desayuno"
    ],
    "meta": {
      "categoryTitle": "Утро",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "ir_trabajo",
    "cat": "day",
    "word": "ir al trabajo",
    "gender": "устойчивое сочетание",
    "tr": "идти, ехать на работу",
    "ru": [
      "идти на работу",
      "ехать на работу",
      "идти ехать на работу"
    ],
    "answers": [
      "ir al trabajo"
    ],
    "examples": [
      [
        "Voy al trabajo en metro.",
        "Я еду на работу на метро."
      ],
      [
        "Los lunes vamos al trabajo temprano.",
        "По понедельникам мы едем на работу рано."
      ]
    ],
    "cloze": "Voy ___ trabajo en metro.",
    "clozeAnswers": [
      "al"
    ],
    "meta": {
      "categoryTitle": "День",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "almorzar",
    "cat": "day",
    "word": "almorzar",
    "gender": "глагол · o→ue",
    "tr": "обедать",
    "ru": [
      "обедать"
    ],
    "answers": [
      "almorzar"
    ],
    "examples": [
      [
        "Almuerzo a la una.",
        "Я обедаю в час."
      ],
      [
        "Almorzamos juntos.",
        "Мы обедаем вместе."
      ]
    ],
    "cloze": "Yo ___ a la una.",
    "clozeAnswers": [
      "almuerzo"
    ],
    "meta": {
      "categoryTitle": "День",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "volver_casa",
    "cat": "evening",
    "word": "volver a casa",
    "gender": "сочетание · o→ue",
    "tr": "возвращаться домой",
    "ru": [
      "возвращаться домой"
    ],
    "answers": [
      "volver a casa"
    ],
    "examples": [
      [
        "Vuelvo a casa a las siete.",
        "Я возвращаюсь домой в семь."
      ],
      [
        "Volvemos a casa en autobús.",
        "Мы возвращаемся домой на автобусе."
      ]
    ],
    "cloze": "Yo ___ a casa a las siete.",
    "clozeAnswers": [
      "vuelvo"
    ],
    "meta": {
      "categoryTitle": "Вечер",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "cenar",
    "cat": "evening",
    "word": "cenar",
    "gender": "обычный глагол",
    "tr": "ужинать",
    "ru": [
      "ужинать"
    ],
    "answers": [
      "cenar"
    ],
    "examples": [
      [
        "Ceno con mi familia.",
        "Я ужинаю с семьёй."
      ],
      [
        "Cenamos a las nueve.",
        "Мы ужинаем в девять."
      ]
    ],
    "cloze": "Yo ___ con mi familia.",
    "clozeAnswers": [
      "ceno"
    ],
    "meta": {
      "categoryTitle": "Вечер",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь день"
    }
  },
  {
    "id": "acostarse",
    "cat": "evening",
    "word": "acostarse",
    "gender": "возвратный глагол · o→ue",
    "tr": "ложиться спать",
    "ru": [
      "ложиться спать",
      "ложиться"
    ],
    "answers": [
      "acostarse"
    ],
    "examples": [
      [
        "Me acuesto antes de medianoche.",
        "Я ложусь до полуночи."
      ],
      [
        "¿A qué hora te acuestas?",
        "Во сколько ты ложишься?"
      ]
    ],
    "cloze": "Yo me ___ antes de medianoche.",
    "clozeAnswers": [
      "acuesto"
    ],
    "meta": {
      "categoryTitle": "Вечер",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь день"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_routine_despertarse_es",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Вспомни",
    "q": "Переведи на испанский: просыпаться.",
    "a": [
      "despertarse"
    ],
    "e": "Правильный вариант: despertarse."
  },
  {
    "id": "study_routine_despertarse_ru",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Узнай",
    "q": "Переведи на русский: despertarse.",
    "a": [
      "просыпаться"
    ],
    "e": "despertarse — просыпаться."
  },
  {
    "id": "study_routine_despertarse_ctx",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я просыпаюсь в семь.»: Me ___ a las siete.",
    "a": [
      "despierto"
    ],
    "e": "Me despierto a las siete. — Я просыпаюсь в семь."
  },
  {
    "id": "study_routine_levantarse_es",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вставать.",
    "a": [
      "levantarse"
    ],
    "e": "Правильный вариант: levantarse."
  },
  {
    "id": "study_routine_levantarse_ru",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Узнай",
    "q": "Переведи на русский: levantarse.",
    "a": [
      "вставать"
    ],
    "e": "levantarse — вставать."
  },
  {
    "id": "study_routine_levantarse_ctx",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я встаю после будильника.»: Yo me ___ temprano.",
    "a": [
      "levanto"
    ],
    "e": "Me levanto después del despertador. — Я встаю после будильника."
  },
  {
    "id": "study_routine_ducharse_es",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Вспомни",
    "q": "Переведи на испанский: принимать душ.",
    "a": [
      "ducharse"
    ],
    "e": "Правильный вариант: ducharse."
  },
  {
    "id": "study_routine_ducharse_ru",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Узнай",
    "q": "Переведи на русский: ducharse.",
    "a": [
      "принимать душ",
      "мыться в душе"
    ],
    "e": "ducharse — принимать душ."
  },
  {
    "id": "study_routine_ducharse_ctx",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я принимаю душ утром.»: Yo me ___ por la mañana.",
    "a": [
      "ducho"
    ],
    "e": "Me ducho por la mañana. — Я принимаю душ утром."
  },
  {
    "id": "study_routine_lavarse_cara_es",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Вспомни",
    "q": "Переведи на испанский: умываться.",
    "a": [
      "lavarse la cara"
    ],
    "e": "Правильный вариант: lavarse la cara."
  },
  {
    "id": "study_routine_lavarse_cara_ru",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Узнай",
    "q": "Переведи на русский: lavarse la cara.",
    "a": [
      "умываться",
      "мыть лицо"
    ],
    "e": "lavarse la cara — умываться."
  },
  {
    "id": "study_routine_lavarse_cara_ctx",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я умываюсь холодной водой.»: Me ___ la cara.",
    "a": [
      "lavo"
    ],
    "e": "Me lavo la cara con agua fría. — Я умываюсь холодной водой."
  },
  {
    "id": "study_routine_cepillarse_es",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Вспомни",
    "q": "Переведи на испанский: чистить зубы.",
    "a": [
      "cepillarse los dientes"
    ],
    "e": "Правильный вариант: cepillarse los dientes."
  },
  {
    "id": "study_routine_cepillarse_ru",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Узнай",
    "q": "Переведи на русский: cepillarse los dientes.",
    "a": [
      "чистить зубы"
    ],
    "e": "cepillarse los dientes — чистить зубы."
  },
  {
    "id": "study_routine_cepillarse_ctx",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я чищу зубы после завтрака.»: Me ___ los dientes.",
    "a": [
      "cepillo"
    ],
    "e": "Me cepillo los dientes después del desayuno. — Я чищу зубы после завтрака."
  },
  {
    "id": "study_routine_vestirse_es",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Вспомни",
    "q": "Переведи на испанский: одеваться.",
    "a": [
      "vestirse"
    ],
    "e": "Правильный вариант: vestirse."
  },
  {
    "id": "study_routine_vestirse_ru",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Узнай",
    "q": "Переведи на русский: vestirse.",
    "a": [
      "одеваться"
    ],
    "e": "vestirse — одеваться."
  },
  {
    "id": "study_routine_vestirse_ctx",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я быстро одеваюсь.»: Yo me ___ rápidamente.",
    "a": [
      "visto"
    ],
    "e": "Me visto rápidamente. — Я быстро одеваюсь."
  },
  {
    "id": "study_routine_desayunar_es",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Вспомни",
    "q": "Переведи на испанский: завтракать.",
    "a": [
      "desayunar"
    ],
    "e": "Правильный вариант: desayunar."
  },
  {
    "id": "study_routine_desayunar_ru",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "Узнай",
    "q": "Переведи на русский: desayunar.",
    "a": [
      "завтракать"
    ],
    "e": "desayunar — завтракать."
  },
  {
    "id": "study_routine_desayunar_ctx",
    "topic": "routine",
    "foodCat": "morning",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я завтракаю кофе и тостами.»: Yo ___ a las ocho.",
    "a": [
      "desayuno"
    ],
    "e": "Desayuno café y tostadas. — Я завтракаю кофе и тостами."
  },
  {
    "id": "study_routine_ir_trabajo_es",
    "topic": "routine",
    "foodCat": "day",
    "skill": "Вспомни",
    "q": "Переведи на испанский: идти, ехать на работу.",
    "a": [
      "ir al trabajo"
    ],
    "e": "Правильный вариант: ir al trabajo."
  },
  {
    "id": "study_routine_ir_trabajo_ru",
    "topic": "routine",
    "foodCat": "day",
    "skill": "Узнай",
    "q": "Переведи на русский: ir al trabajo.",
    "a": [
      "идти на работу",
      "ехать на работу",
      "идти ехать на работу",
      "идти, ехать на работу"
    ],
    "e": "ir al trabajo — идти, ехать на работу."
  },
  {
    "id": "study_routine_ir_trabajo_ctx",
    "topic": "routine",
    "foodCat": "day",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я еду на работу на метро.»: Voy ___ trabajo en metro.",
    "a": [
      "al"
    ],
    "e": "Voy al trabajo en metro. — Я еду на работу на метро."
  },
  {
    "id": "study_routine_almorzar_es",
    "topic": "routine",
    "foodCat": "day",
    "skill": "Вспомни",
    "q": "Переведи на испанский: обедать.",
    "a": [
      "almorzar"
    ],
    "e": "Правильный вариант: almorzar."
  },
  {
    "id": "study_routine_almorzar_ru",
    "topic": "routine",
    "foodCat": "day",
    "skill": "Узнай",
    "q": "Переведи на русский: almorzar.",
    "a": [
      "обедать"
    ],
    "e": "almorzar — обедать."
  },
  {
    "id": "study_routine_almorzar_ctx",
    "topic": "routine",
    "foodCat": "day",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я обедаю в час.»: Yo ___ a la una.",
    "a": [
      "almuerzo"
    ],
    "e": "Almuerzo a la una. — Я обедаю в час."
  },
  {
    "id": "study_routine_volver_casa_es",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "Вспомни",
    "q": "Переведи на испанский: возвращаться домой.",
    "a": [
      "volver a casa"
    ],
    "e": "Правильный вариант: volver a casa."
  },
  {
    "id": "study_routine_volver_casa_ru",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "Узнай",
    "q": "Переведи на русский: volver a casa.",
    "a": [
      "возвращаться домой"
    ],
    "e": "volver a casa — возвращаться домой."
  },
  {
    "id": "study_routine_volver_casa_ctx",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я возвращаюсь домой в семь.»: Yo ___ a casa a las siete.",
    "a": [
      "vuelvo"
    ],
    "e": "Vuelvo a casa a las siete. — Я возвращаюсь домой в семь."
  },
  {
    "id": "study_routine_cenar_es",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ужинать.",
    "a": [
      "cenar"
    ],
    "e": "Правильный вариант: cenar."
  },
  {
    "id": "study_routine_cenar_ru",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "Узнай",
    "q": "Переведи на русский: cenar.",
    "a": [
      "ужинать"
    ],
    "e": "cenar — ужинать."
  },
  {
    "id": "study_routine_cenar_ctx",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ужинаю с семьёй.»: Yo ___ con mi familia.",
    "a": [
      "ceno"
    ],
    "e": "Ceno con mi familia. — Я ужинаю с семьёй."
  },
  {
    "id": "study_routine_acostarse_es",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ложиться спать.",
    "a": [
      "acostarse"
    ],
    "e": "Правильный вариант: acostarse."
  },
  {
    "id": "study_routine_acostarse_ru",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "Узнай",
    "q": "Переведи на русский: acostarse.",
    "a": [
      "ложиться спать",
      "ложиться"
    ],
    "e": "acostarse — ложиться спать."
  },
  {
    "id": "study_routine_acostarse_ctx",
    "topic": "routine",
    "foodCat": "evening",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ложусь до полуночи.»: Yo me ___ antes de medianoche.",
    "a": [
      "acuesto"
    ],
    "e": "Me acuesto antes de medianoche. — Я ложусь до полуночи."
  },
  {
    "id": "choice_routine_despertarse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: просыпаться.",
    "a": [
      "despertarse"
    ],
    "options": [
      "despertarse",
      "levantarse",
      "ducharse",
      "lavarse la cara"
    ],
    "e": "despertarse — просыпаться."
  },
  {
    "id": "choice_routine_levantarse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вставать.",
    "a": [
      "levantarse"
    ],
    "options": [
      "levantarse",
      "ducharse",
      "lavarse la cara",
      "cepillarse los dientes"
    ],
    "e": "levantarse — вставать."
  },
  {
    "id": "choice_routine_ducharse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: принимать душ.",
    "a": [
      "ducharse"
    ],
    "options": [
      "ducharse",
      "lavarse la cara",
      "cepillarse los dientes",
      "vestirse"
    ],
    "e": "ducharse — принимать душ."
  },
  {
    "id": "choice_routine_lavarse_cara",
    "topic": "routine",
    "foodCat": "morning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: умываться.",
    "a": [
      "lavarse la cara"
    ],
    "options": [
      "lavarse la cara",
      "cepillarse los dientes",
      "vestirse",
      "desayunar"
    ],
    "e": "lavarse la cara — умываться."
  },
  {
    "id": "choice_routine_cepillarse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чистить зубы.",
    "a": [
      "cepillarse los dientes"
    ],
    "options": [
      "cepillarse los dientes",
      "vestirse",
      "desayunar",
      "despertarse"
    ],
    "e": "cepillarse los dientes — чистить зубы."
  },
  {
    "id": "choice_routine_vestirse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: одеваться.",
    "a": [
      "vestirse"
    ],
    "options": [
      "vestirse",
      "desayunar",
      "despertarse",
      "levantarse"
    ],
    "e": "vestirse — одеваться."
  },
  {
    "id": "choice_routine_desayunar",
    "topic": "routine",
    "foodCat": "morning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: завтракать.",
    "a": [
      "desayunar"
    ],
    "options": [
      "desayunar",
      "despertarse",
      "levantarse",
      "ducharse"
    ],
    "e": "desayunar — завтракать."
  },
  {
    "id": "choice_routine_ir_trabajo",
    "topic": "routine",
    "foodCat": "day",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: идти, ехать на работу.",
    "a": [
      "ir al trabajo"
    ],
    "options": [
      "ir al trabajo",
      "almorzar",
      "volver a casa",
      "cenar"
    ],
    "e": "ir al trabajo — идти, ехать на работу."
  },
  {
    "id": "choice_routine_almorzar",
    "topic": "routine",
    "foodCat": "day",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: обедать.",
    "a": [
      "almorzar"
    ],
    "options": [
      "almorzar",
      "volver a casa",
      "cenar",
      "acostarse"
    ],
    "e": "almorzar — обедать."
  },
  {
    "id": "choice_routine_volver_casa",
    "topic": "routine",
    "foodCat": "evening",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: возвращаться домой.",
    "a": [
      "volver a casa"
    ],
    "options": [
      "volver a casa",
      "cenar",
      "acostarse",
      "despertarse"
    ],
    "e": "volver a casa — возвращаться домой."
  },
  {
    "id": "choice_routine_cenar",
    "topic": "routine",
    "foodCat": "evening",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ужинать.",
    "a": [
      "cenar"
    ],
    "options": [
      "cenar",
      "acostarse",
      "despertarse",
      "levantarse"
    ],
    "e": "cenar — ужинать."
  },
  {
    "id": "choice_routine_acostarse",
    "topic": "routine",
    "foodCat": "evening",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ложиться спать.",
    "a": [
      "acostarse"
    ],
    "options": [
      "acostarse",
      "despertarse",
      "levantarse",
      "ducharse"
    ],
    "e": "acostarse — ложиться спать."
  },
  {
    "id": "audio_routine_despertarse",
    "topic": "routine",
    "foodCat": "morning",
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
    "id": "audio_routine_levantarse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me levanto después del despertador.",
    "a": [
      "Me levanto después del despertador."
    ],
    "e": "Я встаю после будильника."
  },
  {
    "id": "audio_routine_ducharse",
    "topic": "routine",
    "foodCat": "morning",
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
    "id": "audio_routine_lavarse_cara",
    "topic": "routine",
    "foodCat": "morning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me lavo la cara con agua fría.",
    "a": [
      "Me lavo la cara con agua fría."
    ],
    "e": "Я умываюсь холодной водой."
  },
  {
    "id": "audio_routine_cepillarse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me cepillo los dientes después del desayuno.",
    "a": [
      "Me cepillo los dientes después del desayuno."
    ],
    "e": "Я чищу зубы после завтрака."
  },
  {
    "id": "audio_routine_vestirse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me visto rápidamente.",
    "a": [
      "Me visto rápidamente."
    ],
    "e": "Я быстро одеваюсь."
  },
  {
    "id": "audio_routine_desayunar",
    "topic": "routine",
    "foodCat": "morning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Desayuno café y tostadas.",
    "a": [
      "Desayuno café y tostadas."
    ],
    "e": "Я завтракаю кофе и тостами."
  },
  {
    "id": "audio_routine_ir_trabajo",
    "topic": "routine",
    "foodCat": "day",
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
    "id": "audio_routine_almorzar",
    "topic": "routine",
    "foodCat": "day",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Almuerzo a la una.",
    "a": [
      "Almuerzo a la una."
    ],
    "e": "Я обедаю в час."
  },
  {
    "id": "audio_routine_volver_casa",
    "topic": "routine",
    "foodCat": "evening",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vuelvo a casa a las siete.",
    "a": [
      "Vuelvo a casa a las siete."
    ],
    "e": "Я возвращаюсь домой в семь."
  },
  {
    "id": "audio_routine_cenar",
    "topic": "routine",
    "foodCat": "evening",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ceno con mi familia.",
    "a": [
      "Ceno con mi familia."
    ],
    "e": "Я ужинаю с семьёй."
  },
  {
    "id": "audio_routine_acostarse",
    "topic": "routine",
    "foodCat": "evening",
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
    "id": "order_r_morning",
    "topic": "routine",
    "foodCat": "morning",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Я встаю в семь»",
    "tokens": [
      "Me",
      "levanto",
      "a",
      "las",
      "siete."
    ],
    "a": [
      "Me levanto a las siete."
    ],
    "e": "Возвратное me ставится перед глаголом."
  },
  {
    "id": "order_r_teeth",
    "topic": "routine",
    "foodCat": "morning",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Я чищу зубы после завтрака»",
    "tokens": [
      "Me",
      "cepillo",
      "los",
      "dientes",
      "después",
      "del",
      "desayuno."
    ],
    "a": [
      "Me cepillo los dientes después del desayuno."
    ],
    "e": "После de + el используется del."
  },
  {
    "id": "order_r_home",
    "topic": "routine",
    "foodCat": "evening",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Я возвращаюсь домой вечером»",
    "tokens": [
      "Vuelvo",
      "a",
      "casa",
      "por",
      "la",
      "noche."
    ],
    "a": [
      "Vuelvo a casa por la noche."
    ],
    "e": "Домой — a casa, без артикля."
  },
  {
    "id": "correct_r_person",
    "topic": "routine",
    "foodCat": "morning",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Yo me levantas a las siete.",
    "a": [
      "Yo me levanto a las siete."
    ],
    "e": "Для yo нужна форма levanto."
  },
  {
    "id": "correct_r_vestir",
    "topic": "routine",
    "foodCat": "morning",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Ella se visto rápido.",
    "a": [
      "Ella se viste rápido."
    ],
    "e": "Для ella: se viste."
  },
  {
    "id": "dialogue_r_wakeup",
    "topic": "routine",
    "foodCat": "morning",
    "type": "dialogue",
    "skill": "Мини-диалог",
    "q": "Ответь: — ¿A qué hora te levantas? — Я встаю в семь.",
    "a": [
      "Me levanto a las siete."
    ],
    "e": "Для yo используется me levanto."
  },
  {
    "id": "forms_levantarse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "forms",
    "skill": "Таблица спряжения",
    "q": "Проспрягай levantarse в Presente.",
    "formLabels": [
      "yo",
      "tú",
      "él / ella",
      "nosotros",
      "vosotros",
      "ellos"
    ],
    "a": [
      "me levanto|te levantas|se levanta|nos levantamos|os levantáis|se levantan",
      "me levanto|te levantas|se levanta|nos levantamos|os levantais|se levantan"
    ],
    "displayAnswer": "me levanto · te levantas · se levanta · nos levantamos · os levantáis · se levantan",
    "e": "Заполняй формы слева направо по лицам."
  },
  {
    "id": "match_levantarse",
    "topic": "routine",
    "foodCat": "morning",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини местоимения с формами levantarse.",
    "pairs": [
      [
        "yo",
        "me levanto"
      ],
      [
        "tú",
        "te levantas"
      ],
      [
        "él / ella",
        "se levanta"
      ],
      [
        "nosotros",
        "nos levantamos"
      ],
      [
        "vosotros",
        "os levantáis"
      ],
      [
        "ellos",
        "se levantan"
      ]
    ],
    "a": [
      "me levanto | te levantas | se levanta | nos levantamos | os levantáis | se levantan"
    ],
    "displayAnswer": "yo — me levanto · tú — te levantas · él / ella — se levanta · nosotros — nos levantamos · vosotros — os levantáis · ellos — se levantan",
    "e": "У возвратного глагола меняются и местоимение, и окончание."
  },
  {
    "id": "sort_auto_routine_0",
    "topic": "routine",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Распорядок дня» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "morning",
        "title": "Утро"
      },
      {
        "id": "day",
        "title": "День"
      },
      {
        "id": "evening",
        "title": "Вечер"
      }
    ],
    "sortTokens": [
      {
        "id": "routine_0_morning_despertarse",
        "text": "despertarse",
        "category": "morning"
      },
      {
        "id": "routine_0_morning_levantarse",
        "text": "levantarse",
        "category": "morning"
      },
      {
        "id": "routine_0_morning_ducharse",
        "text": "ducharse",
        "category": "morning"
      },
      {
        "id": "routine_0_day_ir_trabajo",
        "text": "ir al trabajo",
        "category": "day"
      },
      {
        "id": "routine_0_day_almorzar",
        "text": "almorzar",
        "category": "day"
      },
      {
        "id": "routine_0_evening_volver_casa",
        "text": "volver a casa",
        "category": "evening"
      },
      {
        "id": "routine_0_evening_cenar",
        "text": "cenar",
        "category": "evening"
      },
      {
        "id": "routine_0_evening_acostarse",
        "text": "acostarse",
        "category": "evening"
      }
    ],
    "a": [
      "morning | morning | morning | day | day | evening | evening | evening"
    ],
    "displayAnswer": "Утро: despertarse, levantarse, ducharse · День: ir al trabajo, almorzar · Вечер: volver a casa, cenar, acostarse",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  },
  {
    "id": "audio_story_weekend_1",
    "topic": "routine",
    "type": "audio_story_quiz",
    "theme": "planes",
    "skill": "Аудирование · Правда / Ложь",
    "title": "Аудирование: Planes para el fin de semana",
    "q": "Прослушай историю о планах на выходные и отметь: правда или ложь.",
    "audioText": "Hola, me llamo Ana. Este fin de semana no trabajo. El sábado por la mañana voy al mercado con mi hermana y después almorzamos en casa. Por la tarde quedo con mi amiga Laura para pasear por el centro. El domingo quiero descansar, leer un libro y llamar a mis padres. Si hace buen tiempo, también voy al parque.",
    "statements": [
      {
        "id": "s1",
        "text": "Ana trabaja este fin de semana.",
        "isTrue": false,
        "explanation": "En el audio: «Este fin de semana no trabajo»."
      },
      {
        "id": "s2",
        "text": "El sábado por la mañana Ana va al mercado con su hermana.",
        "isTrue": true,
        "explanation": "En el audio: «voy al mercado con mi hermana»."
      },
      {
        "id": "s3",
        "text": "El sábado por la tarde Ana queda con Laura.",
        "isTrue": true,
        "explanation": "En el audio: «Por la tarde quedo con mi amiga Laura»."
      },
      {
        "id": "s4",
        "text": "El domingo Ana quiere ir a trabajar.",
        "isTrue": false,
        "explanation": "En el audio: «El domingo quiero descansar, leer un libro y llamar a mis padres»."
      }
    ]
  }
];

export const routineTopic = {
  id: "routine",
  title: "Распорядок дня",
  icon: "◷",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
