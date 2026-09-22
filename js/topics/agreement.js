/**
 * Артикли и согласование topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "definite_articles",
    "cat": "articles",
    "word": "el / la / los / las",
    "base": "артикли",
    "gender": "определённые артикли",
    "tr": "конкретный предмет или конкретные предметы",
    "table": {
      "headers": [
        "",
        "Мужской род",
        "Женский род"
      ],
      "rows": [
        [
          "Единственное число",
          "el",
          "la"
        ],
        [
          "Множественное число",
          "los",
          "las"
        ]
      ]
    },
    "examples": [
      [
        "El libro y la mesa están aquí.",
        "Книга и стол находятся здесь."
      ],
      [
        "Los libros y las mesas son nuevos.",
        "Книги и столы новые."
      ]
    ],
    "meta": {
      "categoryTitle": "Артикли",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "indefinite_articles",
    "cat": "articles",
    "word": "un / una / unos / unas",
    "base": "артикли",
    "gender": "неопределённые артикли",
    "tr": "один, какой-то или несколько предметов",
    "table": {
      "headers": [
        "",
        "Мужской род",
        "Женский род"
      ],
      "rows": [
        [
          "Единственное число",
          "un",
          "una"
        ],
        [
          "Множественное число",
          "unos",
          "unas"
        ]
      ]
    },
    "examples": [
      [
        "Hay un parque y una farmacia cerca.",
        "Рядом есть парк и аптека."
      ],
      [
        "Compré unos libros y unas zapatillas.",
        "Я купила несколько книг и кроссовки."
      ]
    ],
    "meta": {
      "categoryTitle": "Артикли",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "contractions_system",
    "cat": "contractions",
    "word": "al / del",
    "base": "al del",
    "gender": "обязательные слияния",
    "tr": "a + el и de + el всегда объединяются",
    "table": {
      "headers": [
        "Сочетание",
        "Результат",
        "Пример"
      ],
      "rows": [
        [
          "a + el",
          "al",
          "Voy al trabajo."
        ],
        [
          "de + el",
          "del",
          "Vengo del trabajo."
        ]
      ]
    },
    "examples": [
      [
        "Vamos al cine.",
        "Мы идём в кино."
      ],
      [
        "Hablamos del libro.",
        "Мы говорим о книге."
      ]
    ],
    "meta": {
      "categoryTitle": "Слияния",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "adjective_system",
    "cat": "adjectives",
    "word": "tranquilo / tranquila / tranquilos / tranquilas",
    "base": "согласование",
    "gender": "род и число прилагательного",
    "tr": "окончание прилагательного согласуется с существительным",
    "table": {
      "headers": [
        "Род и число",
        "Форма",
        "Пример"
      ],
      "rows": [
        [
          "муж. · ед.",
          "tranquilo",
          "barrio tranquilo"
        ],
        [
          "жен. · ед.",
          "tranquila",
          "calle tranquila"
        ],
        [
          "муж. · мн.",
          "tranquilos",
          "barrios tranquilos"
        ],
        [
          "жен. · мн.",
          "tranquilas",
          "calles tranquilas"
        ]
      ]
    },
    "examples": [
      [
        "Vivo en un barrio tranquilo.",
        "Я живу в тихом районе."
      ],
      [
        "Son calles tranquilas.",
        "Это тихие улицы."
      ]
    ],
    "meta": {
      "categoryTitle": "Прилагательные",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "plural_system",
    "cat": "plural",
    "word": "-s / -es",
    "base": "множественное число",
    "gender": "два основных правила",
    "tr": "после гласной добавляем -s, после согласной — -es",
    "table": {
      "headers": [
        "Окончание слова",
        "Добавляем",
        "Пример"
      ],
      "rows": [
        [
          "гласная",
          "-s",
          "casa → casas"
        ],
        [
          "согласная",
          "-es",
          "papel → papeles"
        ]
      ]
    },
    "examples": [
      [
        "Tengo dos libros.",
        "У меня две книги."
      ],
      [
        "Las ciudades son grandes.",
        "Города большие."
      ]
    ],
    "meta": {
      "categoryTitle": "Множественное число",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_agreement_el_la_es",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "Вспомни",
    "q": "Переведи на испанский: этот, эта; конкретный предмет.",
    "a": [
      "el la",
      "el / la"
    ],
    "e": "Правильный вариант: el / la."
  },
  {
    "id": "study_agreement_el_la_ru",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "Узнай",
    "q": "Переведи на русский: el / la.",
    "a": [
      "определённый артикль",
      "этот эта",
      "этот, эта; конкретный предмет"
    ],
    "e": "el / la — этот, эта; конкретный предмет."
  },
  {
    "id": "study_agreement_el_la_ctx",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Этот район тихий.»: ___ barrio es tranquilo.",
    "a": [
      "el"
    ],
    "e": "El barrio es tranquilo. — Этот район тихий."
  },
  {
    "id": "study_agreement_los_las_es",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "Вспомни",
    "q": "Переведи на испанский: эти; конкретные предметы.",
    "a": [
      "los las",
      "los / las"
    ],
    "e": "Правильный вариант: los / las."
  },
  {
    "id": "study_agreement_los_las_ru",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "Узнай",
    "q": "Переведи на русский: los / las.",
    "a": [
      "определённый артикль множественного числа",
      "эти",
      "эти; конкретные предметы"
    ],
    "e": "los / las — эти; конкретные предметы."
  },
  {
    "id": "study_agreement_los_las_ctx",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Книги находятся здесь.»: ___ libros están aquí.",
    "a": [
      "los"
    ],
    "e": "Los libros están aquí. — Книги находятся здесь."
  },
  {
    "id": "study_agreement_un_una_es",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "Вспомни",
    "q": "Переведи на испанский: какой-то, один предмет.",
    "a": [
      "un una",
      "un / una"
    ],
    "e": "Правильный вариант: un / una."
  },
  {
    "id": "study_agreement_un_una_ru",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "choice",
    "skill": "Выбери значение",
    "q": "Выбери правильное значение артиклей un/una",
    "a": [
      "какой-то / какая-то"
    ],
    "options": [
      "какой-то / какая-то",
      "этот / эта",
      "один / одна",
      "скольких / скольким"
    ],
    "e": "un / una — неопределённые артикли единственного числа."
  },
  {
    "id": "study_agreement_un_una_ctx",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Рядом есть парк.»: Hay ___ parque cerca.",
    "a": [
      "un"
    ],
    "e": "Hay un parque cerca. — Рядом есть парк."
  },
  {
    "id": "study_agreement_unos_unas_es",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "Вспомни",
    "q": "Переведи на испанский: несколько, какие-то.",
    "a": [
      "unos unas",
      "unos / unas"
    ],
    "e": "Правильный вариант: unos / unas."
  },
  {
    "id": "study_agreement_unos_unas_ru",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "Узнай",
    "q": "Переведи на русский: unos / unas.",
    "a": [
      "несколько",
      "какие-то",
      "несколько, какие-то"
    ],
    "e": "unos / unas — несколько, какие-то."
  },
  {
    "id": "study_agreement_unos_unas_ctx",
    "topic": "agreement",
    "foodCat": "articles",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У меня есть несколько новых книг.»: Tengo ___ libros nuevos.",
    "a": [
      "unos"
    ],
    "e": "Tengo unos libros nuevos. — У меня есть несколько новых книг."
  },
  {
    "id": "study_agreement_al_es",
    "topic": "agreement",
    "foodCat": "contractions",
    "skill": "Слияние",
    "q": "Объедини a + el в одно слово.",
    "a": [
      "al"
    ],
    "e": "Voy al trabajo. — Я еду на работу."
  },
  {
    "id": "study_agreement_al_ru",
    "topic": "agreement",
    "foodCat": "contractions",
    "skill": "Слияние",
    "q": "Из каких двух слов образуется al?",
    "a": [
      "a el",
      "a + el"
    ],
    "e": "a + el = al — в, к + существительное мужского рода."
  },
  {
    "id": "study_agreement_al_ctx",
    "topic": "agreement",
    "foodCat": "contractions",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я еду на работу.»: Voy ___ trabajo.",
    "a": [
      "al"
    ],
    "e": "Voy al trabajo. — Я еду на работу."
  },
  {
    "id": "study_agreement_del_es",
    "topic": "agreement",
    "foodCat": "contractions",
    "skill": "Слияние",
    "q": "Объедини de + el в одно слово.",
    "a": [
      "del"
    ],
    "e": "Vengo del trabajo. — Я иду с работы."
  },
  {
    "id": "study_agreement_del_ru",
    "topic": "agreement",
    "foodCat": "contractions",
    "skill": "Слияние",
    "q": "Из каких двух слов образуется del?",
    "a": [
      "de el",
      "de + el"
    ],
    "e": "de + el = del — из, от, о + существительное мужского рода."
  },
  {
    "id": "study_agreement_del_ctx",
    "topic": "agreement",
    "foodCat": "contractions",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я иду с работы.»: Vengo ___ trabajo.",
    "a": [
      "del"
    ],
    "e": "Vengo del trabajo. — Я иду с работы."
  },
  {
    "id": "study_agreement_masc_sg_es",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тихий район.",
    "a": [
      "un barrio tranquilo",
      "barrio tranquilo"
    ],
    "e": "Правильный вариант: un barrio tranquilo."
  },
  {
    "id": "study_agreement_masc_sg_ru",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Узнай",
    "q": "Переведи на русский: un barrio tranquilo.",
    "a": [
      "тихий район"
    ],
    "e": "un barrio tranquilo — тихий район."
  },
  {
    "id": "study_agreement_masc_sg_ctx",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я живу в тихом районе.»: Es un barrio ___.",
    "a": [
      "tranquilo"
    ],
    "e": "Vivo en un barrio tranquilo. — Я живу в тихом районе."
  },
  {
    "id": "study_agreement_fem_sg_es",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тихая улица.",
    "a": [
      "una calle tranquila",
      "calle tranquila"
    ],
    "e": "Правильный вариант: una calle tranquila."
  },
  {
    "id": "study_agreement_fem_sg_ru",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Узнай",
    "q": "Переведи на русский: una calle tranquila.",
    "a": [
      "тихая улица"
    ],
    "e": "una calle tranquila — тихая улица."
  },
  {
    "id": "study_agreement_fem_sg_ctx",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Это тихая улица.»: Es una calle ___.",
    "a": [
      "tranquila"
    ],
    "e": "Es una calle tranquila. — Это тихая улица."
  },
  {
    "id": "study_agreement_masc_pl_es",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тихие районы.",
    "a": [
      "barrios tranquilos",
      "los barrios tranquilos"
    ],
    "e": "Правильный вариант: barrios tranquilos."
  },
  {
    "id": "study_agreement_masc_pl_ru",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Узнай",
    "q": "Переведи на русский: barrios tranquilos.",
    "a": [
      "тихие районы"
    ],
    "e": "barrios tranquilos — тихие районы."
  },
  {
    "id": "study_agreement_masc_pl_ctx",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Это тихие районы.»: Son barrios ___.",
    "a": [
      "tranquilos"
    ],
    "e": "Son barrios tranquilos. — Это тихие районы."
  },
  {
    "id": "study_agreement_fem_pl_es",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тихие улицы.",
    "a": [
      "calles tranquilas",
      "las calles tranquilas"
    ],
    "e": "Правильный вариант: calles tranquilas."
  },
  {
    "id": "study_agreement_fem_pl_ru",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "Узнай",
    "q": "Переведи на русский: calles tranquilas.",
    "a": [
      "тихие улицы"
    ],
    "e": "calles tranquilas — тихие улицы."
  },
  {
    "id": "study_agreement_fem_pl_ctx",
    "topic": "agreement",
    "foodCat": "adjectives",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Это тихие улицы.»: Son calles ___.",
    "a": [
      "tranquilas"
    ],
    "e": "Son calles tranquilas. — Это тихие улицы."
  },
  {
    "id": "study_agreement_plural_s_es",
    "topic": "agreement",
    "foodCat": "plural",
    "skill": "Множественное число",
    "q": "Образуй множественное число: libro → …",
    "a": [
      "libros"
    ],
    "e": "casa → casas — дом → дома"
  },
  {
    "id": "study_agreement_plural_s_ru",
    "topic": "agreement",
    "foodCat": "plural",
    "skill": "Множественное число",
    "q": "Какое окончание добавляется после гласной во множественном числе?",
    "a": [
      "s",
      "-s"
    ],
    "e": "vocal + s — после гласной добавляем -s."
  },
  {
    "id": "study_agreement_plural_s_ctx",
    "topic": "agreement",
    "foodCat": "plural",
    "skill": "В контексте",
    "q": "Добавь окончание множественного числа: libro → libro___.",
    "a": [
      "s",
      "-s"
    ],
    "e": "casa → casas — дом → дома"
  },
  {
    "id": "study_agreement_plural_es_es",
    "topic": "agreement",
    "foodCat": "plural",
    "skill": "Множественное число",
    "q": "Образуй множественное число: papel → …",
    "a": [
      "papeles"
    ],
    "e": "ciudad → ciudades — город → города"
  },
  {
    "id": "study_agreement_plural_es_ru",
    "topic": "agreement",
    "foodCat": "plural",
    "skill": "Множественное число",
    "q": "Какое окончание добавляется после согласной во множественном числе?",
    "a": [
      "es",
      "-es"
    ],
    "e": "consonante + es — после согласной добавляем -es."
  },
  {
    "id": "study_agreement_plural_es_ctx",
    "topic": "agreement",
    "foodCat": "plural",
    "skill": "В контексте",
    "q": "Добавь окончание множественного числа: papel → papel___.",
    "a": [
      "es",
      "-es"
    ],
    "e": "ciudad → ciudades — город → города"
  },
  {
    "id": "choice_agreement_el_la",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: этот, эта; конкретный предмет.",
    "a": [
      "el / la"
    ],
    "options": [
      "el / la",
      "los / las",
      "un / una",
      "unos / unas"
    ],
    "e": "el / la — этот, эта; конкретный предмет."
  },
  {
    "id": "choice_agreement_los_las",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: эти; конкретные предметы.",
    "a": [
      "los / las"
    ],
    "options": [
      "los / las",
      "un / una",
      "unos / unas",
      "el / la"
    ],
    "e": "los / las — эти; конкретные предметы."
  },
  {
    "id": "choice_agreement_un_una",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: какой-то, один предмет.",
    "a": [
      "un / una"
    ],
    "options": [
      "un / una",
      "unos / unas",
      "el / la",
      "los / las"
    ],
    "e": "un / una — какой-то, один предмет."
  },
  {
    "id": "choice_agreement_unos_unas",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: несколько, какие-то.",
    "a": [
      "unos / unas"
    ],
    "options": [
      "unos / unas",
      "el / la",
      "los / las",
      "un / una"
    ],
    "e": "unos / unas — несколько, какие-то."
  },
  {
    "id": "choice_agreement_masc_sg",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тихий район.",
    "a": [
      "un barrio tranquilo"
    ],
    "options": [
      "un barrio tranquilo",
      "una calle tranquila",
      "barrios tranquilos",
      "calles tranquilas"
    ],
    "e": "un barrio tranquilo — тихий район."
  },
  {
    "id": "choice_agreement_fem_sg",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тихая улица.",
    "a": [
      "una calle tranquila"
    ],
    "options": [
      "una calle tranquila",
      "barrios tranquilos",
      "calles tranquilas",
      "un barrio tranquilo"
    ],
    "e": "una calle tranquila — тихая улица."
  },
  {
    "id": "choice_agreement_masc_pl",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тихие районы.",
    "a": [
      "barrios tranquilos"
    ],
    "options": [
      "barrios tranquilos",
      "calles tranquilas",
      "un barrio tranquilo",
      "una calle tranquila"
    ],
    "e": "barrios tranquilos — тихие районы."
  },
  {
    "id": "choice_agreement_fem_pl",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тихие улицы.",
    "a": [
      "calles tranquilas"
    ],
    "options": [
      "calles tranquilas",
      "un barrio tranquilo",
      "una calle tranquila",
      "barrios tranquilos"
    ],
    "e": "calles tranquilas — тихие улицы."
  },
  {
    "id": "audio_agreement_el_la",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El barrio es tranquilo.",
    "a": [
      "El barrio es tranquilo."
    ],
    "e": "Этот район тихий."
  },
  {
    "id": "audio_agreement_los_las",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Los libros están aquí.",
    "a": [
      "Los libros están aquí."
    ],
    "e": "Книги находятся здесь."
  },
  {
    "id": "audio_agreement_un_una",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hay un parque cerca.",
    "a": [
      "Hay un parque cerca."
    ],
    "e": "Рядом есть парк."
  },
  {
    "id": "audio_agreement_unos_unas",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tengo unos libros nuevos.",
    "a": [
      "Tengo unos libros nuevos."
    ],
    "e": "У меня есть несколько новых книг."
  },
  {
    "id": "audio_agreement_al",
    "topic": "agreement",
    "foodCat": "contractions",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Voy al trabajo.",
    "a": [
      "Voy al trabajo."
    ],
    "e": "Я еду на работу."
  },
  {
    "id": "audio_agreement_del",
    "topic": "agreement",
    "foodCat": "contractions",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vengo del trabajo.",
    "a": [
      "Vengo del trabajo."
    ],
    "e": "Я иду с работы."
  },
  {
    "id": "audio_agreement_masc_sg",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vivo en un barrio tranquilo.",
    "a": [
      "Vivo en un barrio tranquilo."
    ],
    "e": "Я живу в тихом районе."
  },
  {
    "id": "audio_agreement_fem_sg",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Es una calle tranquila.",
    "a": [
      "Es una calle tranquila."
    ],
    "e": "Это тихая улица."
  },
  {
    "id": "audio_agreement_masc_pl",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Son barrios tranquilos.",
    "a": [
      "Son barrios tranquilos."
    ],
    "e": "Это тихие районы."
  },
  {
    "id": "audio_agreement_fem_pl",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Son calles tranquilas.",
    "a": [
      "Son calles tranquilas."
    ],
    "e": "Это тихие улицы."
  },
  {
    "id": "order_a_barrio",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Я живу в тихом районе»",
    "tokens": [
      "Vivo",
      "en",
      "un",
      "barrio",
      "tranquilo."
    ],
    "a": [
      "Vivo en un barrio tranquilo."
    ],
    "e": "Прилагательное согласуется с barrio."
  },
  {
    "id": "order_a_shops",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "order",
    "skill": "Собери предложение",
    "q": "Собери: «Магазины открыты»",
    "tokens": [
      "Las",
      "tiendas",
      "están",
      "abiertas."
    ],
    "a": [
      "Las tiendas están abiertas."
    ],
    "e": "Все элементы стоят в женском множественном числе."
  },
  {
    "id": "correct_a_gender",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: La barrio es bonito.",
    "a": [
      "El barrio es bonito."
    ],
    "e": "Barrio — мужского рода."
  },
  {
    "id": "correct_a_adjective",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Compro zapatos negra.",
    "a": [
      "Compro zapatos negros."
    ],
    "e": "Zapatos требует мужского множественного числа."
  },
  {
    "id": "correct_a_al",
    "topic": "agreement",
    "foodCat": "contractions",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Voy a el trabajo.",
    "a": [
      "Voy al trabajo."
    ],
    "e": "a + el обязательно сливаются в al."
  },
  {
    "id": "correct_a_del",
    "topic": "agreement",
    "foodCat": "contractions",
    "type": "correct",
    "skill": "Исправь ошибку",
    "q": "Исправь ошибку: Vengo de el trabajo.",
    "a": [
      "Vengo del trabajo."
    ],
    "e": "de + el обязательно сливаются в del."
  },
  {
    "id": "compare_a_el_al",
    "topic": "agreement",
    "foodCat": "contractions",
    "type": "choice",
    "skill": "Сравни формы",
    "q": "Выбери форму: Voy ___ cine.",
    "options": [
      "a el",
      "al",
      "del"
    ],
    "a": [
      "al"
    ],
    "e": "a + el всегда превращается в al."
  },
  {
    "id": "match_articles",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини существительные с правильными артиклями.",
    "pairs": [
      [
        "barrio · муж. ед.",
        "el barrio"
      ],
      [
        "farmacia · жен. ед.",
        "la farmacia"
      ],
      [
        "libros · муж. мн.",
        "los libros"
      ],
      [
        "tiendas · жен. мн.",
        "las tiendas"
      ]
    ],
    "a": [
      "el barrio | la farmacia | los libros | las tiendas"
    ],
    "displayAnswer": "barrio · муж. ед. — el barrio · farmacia · жен. ед. — la farmacia · libros · муж. мн. — los libros · tiendas · жен. мн. — las tiendas",
    "e": "Артикль согласуется с существительным в роде и числе."
  },
  {
    "id": "context_choice_jacket_article",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Ayer compré ___ chaqueta negra para el otoño.",
    "options": [
      "un",
      "una",
      "unos",
      "unas"
    ],
    "a": [
      "una"
    ],
    "e": "Chaqueta — существительное женского рода в единственном числе."
  },
  {
    "id": "context_choice_books_article",
    "topic": "agreement",
    "foodCat": "articles",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "___ libros que están sobre la mesa son de Ana.",
    "options": [
      "El",
      "La",
      "Los",
      "Un"
    ],
    "a": [
      "Los"
    ],
    "e": "Libros — мужской род, множественное число."
  },
  {
    "id": "context_choice_shoes_agreement",
    "topic": "agreement",
    "foodCat": "adjectives",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Estas zapatillas son muy ___ para caminar todo el día.",
    "options": [
      "cómoda",
      "cómodo",
      "cómodas",
      "cómodos"
    ],
    "a": [
      "cómodas"
    ],
    "e": "Zapatillas — женский род, множественное число."
  },
  {
    "id": "context_choice_to_work",
    "topic": "agreement",
    "foodCat": "contractions",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "Salgo de casa a las ocho y voy ___ trabajo en metro.",
    "options": [
      "a el",
      "al",
      "del",
      "en"
    ],
    "a": [
      "al"
    ],
    "e": "a + el обязательно объединяются в al."
  },
  {
    "id": "sort_auto_agreement_0",
    "topic": "agreement",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Артикли и согласование» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "articles",
        "title": "Артикли"
      },
      {
        "id": "contractions",
        "title": "Слияния"
      },
      {
        "id": "adjectives",
        "title": "Прилагательные"
      },
      {
        "id": "plural",
        "title": "Множественное число"
      }
    ],
    "sortTokens": [
      {
        "id": "agreement_0_articles_el_la",
        "text": "el / la",
        "category": "articles"
      },
      {
        "id": "agreement_0_articles_los_las",
        "text": "los / las",
        "category": "articles"
      },
      {
        "id": "agreement_0_articles_un_una",
        "text": "un / una",
        "category": "articles"
      },
      {
        "id": "agreement_0_contractions_al",
        "text": "a + el = al",
        "category": "contractions"
      },
      {
        "id": "agreement_0_contractions_del",
        "text": "de + el = del",
        "category": "contractions"
      },
      {
        "id": "agreement_0_adjectives_masc_sg",
        "text": "un barrio tranquilo",
        "category": "adjectives"
      },
      {
        "id": "agreement_0_adjectives_fem_sg",
        "text": "una calle tranquila",
        "category": "adjectives"
      },
      {
        "id": "agreement_0_adjectives_masc_pl",
        "text": "barrios tranquilos",
        "category": "adjectives"
      },
      {
        "id": "agreement_0_plural_plural_s",
        "text": "vocal + s",
        "category": "plural"
      },
      {
        "id": "agreement_0_plural_plural_es",
        "text": "consonante + es",
        "category": "plural"
      }
    ],
    "a": [
      "articles | articles | articles | contractions | contractions | adjectives | adjectives | adjectives | plural | plural"
    ],
    "displayAnswer": "Артикли: el / la, los / las, un / una · Слияния: a + el = al, de + el = del · Прилагательные: un barrio tranquilo, una calle tranquila, barrios tranquilos · Множественное число: vocal + s, consonante + es",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const agreementTopic = {
  id: "agreement",
  title: "Артикли и согласование",
  icon: "≋",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
