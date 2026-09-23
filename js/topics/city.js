/**
 * Город и район topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "trash",
    "cat": "places",
    "word": "el contenedor de basura",
    "base": "el contenedor de basura",
    "gender": "мужской род",
    "tr": "мусорный контейнер",
    "ru": [
      "мусорный контейнер"
    ],
    "answers": [
      "contenedor de basura",
      "el contenedor de basura"
    ],
    "art": null,
    "examples": [
      [
        "El contenedor de basura está en la esquina.",
        "Мусорный контейнер находится на углу."
      ],
      [
        "Tiro la bolsa al contenedor de basura.",
        "Я выбрасываю пакет в мусорный контейнер."
      ]
    ],
    "cloze": "El ___ está en la esquina.",
    "clozeAnswers": [
      "contenedor de basura"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "pharmacy",
    "cat": "places",
    "word": "la farmacia",
    "base": "la farmacia",
    "gender": "женский род",
    "tr": "аптека",
    "ru": [
      "аптека"
    ],
    "answers": [
      "farmacia",
      "la farmacia"
    ],
    "art": null,
    "examples": [
      [
        "La farmacia está abierta.",
        "Аптека открыта."
      ],
      [
        "Hay una farmacia cerca de casa.",
        "Рядом с домом есть аптека."
      ]
    ],
    "cloze": "La ___ está abierta.",
    "clozeAnswers": [
      "farmacia"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "bus_stop",
    "cat": "places",
    "word": "la parada de autobús",
    "base": "la parada de autobús",
    "gender": "женский род",
    "tr": "автобусная остановка",
    "ru": [
      "автобусная остановка",
      "остановка автобуса"
    ],
    "answers": [
      "parada de autobús",
      "parada de autobus",
      "la parada de autobús",
      "la parada de autobus"
    ],
    "art": null,
    "examples": [
      [
        "La parada de autobús está enfrente.",
        "Автобусная остановка находится напротив."
      ],
      [
        "Espero en la parada de autobús.",
        "Я жду на автобусной остановке."
      ]
    ],
    "cloze": "Espero en la ___.",
    "clozeAnswers": [
      "parada de autobús",
      "parada de autobus"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "bank",
    "cat": "places",
    "word": "el banco",
    "base": "el banco",
    "gender": "мужской род",
    "tr": "банк",
    "ru": [
      "банк"
    ],
    "answers": [
      "banco",
      "el banco"
    ],
    "art": null,
    "examples": [
      [
        "El banco cierra a las seis.",
        "Банк закрывается в шесть."
      ],
      [
        "Hay un banco junto al supermercado.",
        "Рядом с супермаркетом есть банк."
      ]
    ],
    "cloze": "El ___ cierra a las seis.",
    "clozeAnswers": [
      "banco"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "post",
    "cat": "places",
    "word": "la oficina de correos",
    "base": "la oficina de correos",
    "gender": "женский род",
    "tr": "почтовое отделение",
    "ru": [
      "почтовое отделение",
      "почта"
    ],
    "answers": [
      "oficina de correos",
      "la oficina de correos"
    ],
    "art": null,
    "examples": [
      [
        "La oficina de correos está en el centro.",
        "Почтовое отделение находится в центре."
      ],
      [
        "Voy a la oficina de correos.",
        "Я иду на почту."
      ]
    ],
    "cloze": "Voy a la ___.",
    "clozeAnswers": [
      "oficina de correos"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "cinema",
    "cat": "places",
    "word": "el cine",
    "base": "el cine",
    "gender": "мужской род",
    "tr": "кинотеатр",
    "ru": [
      "кинотеатр"
    ],
    "answers": [
      "cine",
      "el cine"
    ],
    "art": null,
    "examples": [
      [
        "El cine está cerca del metro.",
        "Кинотеатр находится рядом с метро."
      ],
      [
        "Vamos al cine el viernes.",
        "В пятницу мы идём в кино."
      ]
    ],
    "cloze": "Vamos al ___ el viernes.",
    "clozeAnswers": [
      "cine"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "city_gym",
    "cat": "places",
    "word": "el gimnasio",
    "base": "el gimnasio",
    "gender": "мужской род",
    "tr": "спортзал",
    "ru": [
      "спортзал",
      "тренажёрный зал",
      "тренажерный зал"
    ],
    "answers": [
      "gimnasio",
      "el gimnasio"
    ],
    "art": null,
    "examples": [
      [
        "El gimnasio abre temprano.",
        "Спортзал открывается рано."
      ],
      [
        "Voy al gimnasio después del trabajo.",
        "Я хожу в спортзал после работы."
      ]
    ],
    "cloze": "Voy al ___ después del trabajo.",
    "clozeAnswers": [
      "gimnasio"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "school",
    "cat": "places",
    "word": "la escuela",
    "base": "la escuela",
    "gender": "женский род",
    "tr": "школа",
    "ru": [
      "школа"
    ],
    "answers": [
      "escuela",
      "la escuela"
    ],
    "art": null,
    "examples": [
      [
        "La escuela está al final de la calle.",
        "Школа находится в конце улицы."
      ],
      [
        "Los niños van a la escuela.",
        "Дети ходят в школу."
      ]
    ],
    "cloze": "Los niños van a la ___.",
    "clozeAnswers": [
      "escuela"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "police",
    "cat": "places",
    "word": "la comisaría",
    "base": "la comisaría",
    "gender": "женский род",
    "tr": "полицейский участок",
    "ru": [
      "полицейский участок",
      "отделение полиции"
    ],
    "answers": [
      "comisaría",
      "comisaria",
      "la comisaría",
      "la comisaria"
    ],
    "art": null,
    "examples": [
      [
        "La comisaría está junto al banco.",
        "Полицейский участок находится рядом с банком."
      ],
      [
        "Pregunto en la comisaría.",
        "Я спрашиваю в полицейском участке."
      ]
    ],
    "cloze": "La ___ está junto al banco.",
    "clozeAnswers": [
      "comisaría",
      "comisaria"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "supermarket",
    "cat": "places",
    "word": "el supermercado",
    "base": "el supermercado",
    "gender": "мужской род",
    "tr": "супермаркет",
    "ru": [
      "супермаркет"
    ],
    "answers": [
      "supermercado",
      "el supermercado"
    ],
    "art": null,
    "examples": [
      [
        "El supermercado está abierto hasta tarde.",
        "Супермаркет открыт допоздна."
      ],
      [
        "Compro fruta en el supermercado.",
        "Я покупаю фрукты в супермаркете."
      ]
    ],
    "cloze": "Compro fruta en el ___.",
    "clozeAnswers": [
      "supermercado"
    ],
    "meta": {
      "categoryTitle": "Места",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "big_small",
    "cat": "opposites",
    "word": "grande / pequeño",
    "base": "grande / pequeño",
    "gender": "антонимы",
    "tr": "большой / маленький",
    "ru": [
      "большой маленький",
      "большой / маленький"
    ],
    "answers": [
      "grande / pequeño",
      "grande pequeño",
      "grande y pequeño"
    ],
    "art": null,
    "examples": [
      [
        "Madrid es una ciudad grande.",
        "Мадрид — большой город."
      ],
      [
        "Vivo en un piso pequeño.",
        "Я живу в маленькой квартире."
      ]
    ],
    "cloze": "Vivo en un piso ___.",
    "clozeAnswers": [
      "pequeño",
      "pequeno"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "pretty_ugly",
    "cat": "opposites",
    "word": "bonito / feo",
    "base": "bonito / feo",
    "gender": "антонимы",
    "tr": "красивый / некрасивый",
    "ru": [
      "красивый некрасивый",
      "красивый / некрасивый"
    ],
    "answers": [
      "bonito / feo",
      "bonito feo",
      "bonito y feo"
    ],
    "art": null,
    "examples": [
      [
        "El parque es muy bonito.",
        "Парк очень красивый."
      ],
      [
        "Ese edificio es feo.",
        "То здание некрасивое."
      ]
    ],
    "cloze": "El parque es muy ___.",
    "clozeAnswers": [
      "bonito"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "cheap_expensive",
    "cat": "opposites",
    "word": "barato / caro",
    "base": "barato / caro",
    "gender": "антонимы",
    "tr": "дешёвый / дорогой",
    "ru": [
      "дешёвый дорогой",
      "дешевый дорогой"
    ],
    "answers": [
      "barato / caro",
      "barato caro",
      "barato y caro"
    ],
    "art": null,
    "examples": [
      [
        "Este café es barato.",
        "Это кафе недорогое."
      ],
      [
        "El restaurante del centro es caro.",
        "Ресторан в центре дорогой."
      ]
    ],
    "cloze": "Este café es ___.",
    "clozeAnswers": [
      "barato"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "clean_dirty",
    "cat": "opposites",
    "word": "limpio / sucio",
    "base": "limpio / sucio",
    "gender": "антонимы",
    "tr": "чистый / грязный",
    "ru": [
      "чистый грязный",
      "чистый / грязный"
    ],
    "answers": [
      "limpio / sucio",
      "limpio sucio",
      "limpio y sucio"
    ],
    "art": null,
    "examples": [
      [
        "Mi barrio está limpio.",
        "Мой район чистый."
      ],
      [
        "Esta calle está sucia.",
        "Эта улица грязная."
      ]
    ],
    "cloze": "Mi barrio está ___.",
    "clozeAnswers": [
      "limpio"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "quiet_noisy",
    "cat": "opposites",
    "word": "tranquilo / ruidoso",
    "base": "tranquilo / ruidoso",
    "gender": "антонимы",
    "tr": "тихий, спокойный / шумный",
    "ru": [
      "тихий шумный",
      "спокойный шумный"
    ],
    "answers": [
      "tranquilo / ruidoso",
      "tranquilo ruidoso",
      "tranquilo y ruidoso"
    ],
    "art": null,
    "examples": [
      [
        "Vivo en un barrio tranquilo.",
        "Я живу в спокойном районе."
      ],
      [
        "El centro es muy ruidoso.",
        "Центр очень шумный."
      ]
    ],
    "cloze": "Vivo en un barrio ___.",
    "clozeAnswers": [
      "tranquilo"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "modern_old",
    "cat": "opposites",
    "word": "moderno / antiguo",
    "base": "moderno / antiguo",
    "gender": "антонимы",
    "tr": "современный / старинный",
    "ru": [
      "современный старинный",
      "современный / старинный"
    ],
    "answers": [
      "moderno / antiguo",
      "moderno antiguo",
      "moderno y antiguo",
      "moderno / viejo"
    ],
    "art": null,
    "examples": [
      [
        "El metro es moderno.",
        "Метро современное."
      ],
      [
        "El edificio es antiguo.",
        "Здание старинное."
      ]
    ],
    "cloze": "El edificio es ___.",
    "clozeAnswers": [
      "antiguo",
      "viejo"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "pleasant",
    "cat": "opposites",
    "word": "agradable / desagradable",
    "base": "agradable / desagradable",
    "gender": "антонимы",
    "tr": "приятный / неприятный",
    "ru": [
      "приятный неприятный",
      "приятный / неприятный"
    ],
    "answers": [
      "agradable / desagradable",
      "agradable desagradable",
      "agradable y desagradable"
    ],
    "art": null,
    "examples": [
      [
        "La plaza es agradable.",
        "Площадь приятная."
      ],
      [
        "El olor es desagradable.",
        "Запах неприятный."
      ]
    ],
    "cloze": "La plaza es ___.",
    "clozeAnswers": [
      "agradable"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  },
  {
    "id": "safe",
    "cat": "opposites",
    "word": "seguro / peligroso",
    "base": "seguro / peligroso",
    "gender": "антонимы",
    "tr": "безопасный / опасный",
    "ru": [
      "безопасный опасный",
      "безопасный / опасный"
    ],
    "answers": [
      "seguro / peligroso",
      "seguro peligroso",
      "seguro y peligroso"
    ],
    "art": null,
    "examples": [
      [
        "Este barrio es seguro.",
        "Этот район безопасный."
      ],
      [
        "Cruzar aquí es peligroso.",
        "Переходить здесь опасно."
      ]
    ],
    "cloze": "Este barrio es ___.",
    "clozeAnswers": [
      "seguro"
    ],
    "meta": {
      "categoryTitle": "Противоположности",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь город"
    }
  }
];

const EXERCISES = [
  {
    "id": "ct1",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: мусорный контейнер.",
    "a": [
      "contenedor de basura",
      "el contenedor de basura"
    ]
  },
  {
    "id": "ct2",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: аптека.",
    "a": [
      "farmacia",
      "la farmacia"
    ]
  },
  {
    "id": "ct3",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: автобусная остановка.",
    "a": [
      "parada de autobús",
      "la parada de autobús"
    ]
  },
  {
    "id": "ct4",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: банк.",
    "a": [
      "banco",
      "el banco"
    ]
  },
  {
    "id": "ct5",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: почтовое отделение.",
    "a": [
      "oficina de correos",
      "la oficina de correos"
    ]
  },
  {
    "id": "ct6",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: кинотеатр.",
    "a": [
      "cine",
      "el cine"
    ]
  },
  {
    "id": "ct7",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: спортзал.",
    "a": [
      "gimnasio",
      "el gimnasio"
    ]
  },
  {
    "id": "ct8",
    "topic": "city",
    "skill": "Слово",
    "q": "Переведи на испанский: школа.",
    "a": [
      "escuela",
      "la escuela"
    ]
  },
  {
    "id": "ct9",
    "topic": "city",
    "skill": "Противоположности",
    "q": "Напиши антоним слова grande.",
    "a": [
      "pequeño",
      "pequeña"
    ]
  },
  {
    "id": "ct10",
    "topic": "city",
    "skill": "Противоположности",
    "q": "Напиши антоним слова bonito.",
    "a": [
      "feo",
      "fea"
    ]
  },
  {
    "id": "ct11",
    "topic": "city",
    "skill": "Противоположности",
    "q": "Напиши антоним слова barato.",
    "a": [
      "caro",
      "cara"
    ]
  },
  {
    "id": "ct12",
    "topic": "city",
    "skill": "Противоположности",
    "q": "Напиши антоним слова limpio.",
    "a": [
      "sucio",
      "sucia"
    ]
  },
  {
    "id": "ct13",
    "topic": "city",
    "skill": "Противоположности",
    "q": "Напиши антоним слова tranquilo.",
    "a": [
      "ruidoso",
      "ruidosa"
    ]
  },
  {
    "id": "ct14",
    "topic": "city",
    "skill": "Противоположности",
    "q": "Напиши антоним слова agradable.",
    "a": [
      "desagradable"
    ]
  },
  {
    "id": "study_city_trash_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мусорный контейнер.",
    "a": [
      "contenedor de basura",
      "el contenedor de basura"
    ],
    "e": "Правильный вариант: el contenedor de basura."
  },
  {
    "id": "study_city_trash_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: el contenedor de basura.",
    "a": [
      "мусорный контейнер"
    ],
    "e": "el contenedor de basura — мусорный контейнер."
  },
  {
    "id": "study_city_trash_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мусорный контейнер находится на углу.»: El ___ está en la esquina.",
    "a": [
      "contenedor de basura"
    ],
    "e": "El contenedor de basura está en la esquina. — Мусорный контейнер находится на углу."
  },
  {
    "id": "study_city_pharmacy_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: аптека.",
    "a": [
      "farmacia",
      "la farmacia"
    ],
    "e": "Правильный вариант: la farmacia."
  },
  {
    "id": "study_city_pharmacy_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: la farmacia.",
    "a": [
      "аптека"
    ],
    "e": "la farmacia — аптека."
  },
  {
    "id": "study_city_pharmacy_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Аптека открыта.»: La ___ está abierta.",
    "a": [
      "farmacia"
    ],
    "e": "La farmacia está abierta. — Аптека открыта."
  },
  {
    "id": "study_city_bus_stop_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: автобусная остановка.",
    "a": [
      "parada de autobús",
      "parada de autobus",
      "la parada de autobús",
      "la parada de autobus"
    ],
    "e": "Правильный вариант: la parada de autobús."
  },
  {
    "id": "study_city_bus_stop_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: la parada de autobús.",
    "a": [
      "автобусная остановка",
      "остановка автобуса"
    ],
    "e": "la parada de autobús — автобусная остановка."
  },
  {
    "id": "study_city_bus_stop_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Автобусная остановка находится напротив.»: Espero en la ___.",
    "a": [
      "parada de autobús",
      "parada de autobus"
    ],
    "e": "La parada de autobús está enfrente. — Автобусная остановка находится напротив."
  },
  {
    "id": "study_city_bank_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: банк.",
    "a": [
      "banco",
      "el banco"
    ],
    "e": "Правильный вариант: el banco."
  },
  {
    "id": "study_city_bank_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: el banco.",
    "a": [
      "банк"
    ],
    "e": "el banco — банк."
  },
  {
    "id": "study_city_bank_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Банк закрывается в шесть.»: El ___ cierra a las seis.",
    "a": [
      "banco"
    ],
    "e": "El banco cierra a las seis. — Банк закрывается в шесть."
  },
  {
    "id": "study_city_post_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: почтовое отделение.",
    "a": [
      "oficina de correos",
      "la oficina de correos"
    ],
    "e": "Правильный вариант: la oficina de correos."
  },
  {
    "id": "study_city_post_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: la oficina de correos.",
    "a": [
      "почтовое отделение",
      "почта"
    ],
    "e": "la oficina de correos — почтовое отделение."
  },
  {
    "id": "study_city_post_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Почтовое отделение находится в центре.»: Voy a la ___.",
    "a": [
      "oficina de correos"
    ],
    "e": "La oficina de correos está en el centro. — Почтовое отделение находится в центре."
  },
  {
    "id": "study_city_cinema_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кинотеатр.",
    "a": [
      "cine",
      "el cine"
    ],
    "e": "Правильный вариант: el cine."
  },
  {
    "id": "study_city_cinema_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: el cine.",
    "a": [
      "кинотеатр"
    ],
    "e": "el cine — кинотеатр."
  },
  {
    "id": "study_city_cinema_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Кинотеатр находится рядом с метро.»: Vamos al ___ el viernes.",
    "a": [
      "cine"
    ],
    "e": "El cine está cerca del metro. — Кинотеатр находится рядом с метро."
  },
  {
    "id": "study_city_city_gym_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: спортзал.",
    "a": [
      "gimnasio",
      "el gimnasio"
    ],
    "e": "Правильный вариант: el gimnasio."
  },
  {
    "id": "study_city_city_gym_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: el gimnasio.",
    "a": [
      "спортзал",
      "тренажёрный зал",
      "тренажерный зал"
    ],
    "e": "el gimnasio — спортзал."
  },
  {
    "id": "study_city_city_gym_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Спортзал открывается рано.»: Voy al ___ después del trabajo.",
    "a": [
      "gimnasio"
    ],
    "e": "El gimnasio abre temprano. — Спортзал открывается рано."
  },
  {
    "id": "study_city_school_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: школа.",
    "a": [
      "escuela",
      "la escuela"
    ],
    "e": "Правильный вариант: la escuela."
  },
  {
    "id": "study_city_school_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: la escuela.",
    "a": [
      "школа"
    ],
    "e": "la escuela — школа."
  },
  {
    "id": "study_city_school_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Школа находится в конце улицы.»: Los niños van a la ___.",
    "a": [
      "escuela"
    ],
    "e": "La escuela está al final de la calle. — Школа находится в конце улицы."
  },
  {
    "id": "study_city_police_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: полицейский участок.",
    "a": [
      "comisaría",
      "comisaria",
      "la comisaría",
      "la comisaria"
    ],
    "e": "Правильный вариант: la comisaría."
  },
  {
    "id": "study_city_police_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: la comisaría.",
    "a": [
      "полицейский участок",
      "отделение полиции"
    ],
    "e": "la comisaría — полицейский участок."
  },
  {
    "id": "study_city_police_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Полицейский участок находится рядом с банком.»: La ___ está junto al banco.",
    "a": [
      "comisaría",
      "comisaria"
    ],
    "e": "La comisaría está junto al banco. — Полицейский участок находится рядом с банком."
  },
  {
    "id": "study_city_supermarket_es",
    "topic": "city",
    "foodCat": "places",
    "skill": "Вспомни",
    "q": "Переведи на испанский: супермаркет.",
    "a": [
      "supermercado",
      "el supermercado"
    ],
    "e": "Правильный вариант: el supermercado."
  },
  {
    "id": "study_city_supermarket_ru",
    "topic": "city",
    "foodCat": "places",
    "skill": "Узнай",
    "q": "Переведи на русский: el supermercado.",
    "a": [
      "супермаркет"
    ],
    "e": "el supermercado — супермаркет."
  },
  {
    "id": "study_city_supermarket_ctx",
    "topic": "city",
    "foodCat": "places",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Супермаркет открыт допоздна.»: Compro fruta en el ___.",
    "a": [
      "supermercado"
    ],
    "e": "El supermercado está abierto hasta tarde. — Супермаркет открыт допоздна."
  },
  {
    "id": "study_city_big_small_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: большой / маленький.",
    "a": [
      "grande / pequeño",
      "grande pequeño",
      "grande y pequeño"
    ],
    "e": "Правильный вариант: grande / pequeño."
  },
  {
    "id": "study_city_big_small_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: grande / pequeño.",
    "a": [
      "большой маленький",
      "большой / маленький"
    ],
    "e": "grande / pequeño — большой / маленький."
  },
  {
    "id": "study_city_big_small_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мадрид — большой город.»: Vivo en un piso ___.",
    "a": [
      "pequeño",
      "pequeno"
    ],
    "e": "Madrid es una ciudad grande. — Мадрид — большой город."
  },
  {
    "id": "study_city_pretty_ugly_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: красивый / некрасивый.",
    "a": [
      "bonito / feo",
      "bonito feo",
      "bonito y feo"
    ],
    "e": "Правильный вариант: bonito / feo."
  },
  {
    "id": "study_city_pretty_ugly_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: bonito / feo.",
    "a": [
      "красивый некрасивый",
      "красивый / некрасивый"
    ],
    "e": "bonito / feo — красивый / некрасивый."
  },
  {
    "id": "study_city_pretty_ugly_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Парк очень красивый.»: El parque es muy ___.",
    "a": [
      "bonito"
    ],
    "e": "El parque es muy bonito. — Парк очень красивый."
  },
  {
    "id": "study_city_cheap_expensive_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: дешёвый / дорогой.",
    "a": [
      "barato / caro",
      "barato caro",
      "barato y caro"
    ],
    "e": "Правильный вариант: barato / caro."
  },
  {
    "id": "study_city_cheap_expensive_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: barato / caro.",
    "a": [
      "дешёвый дорогой",
      "дешевый дорогой",
      "дешёвый / дорогой"
    ],
    "e": "barato / caro — дешёвый / дорогой."
  },
  {
    "id": "study_city_cheap_expensive_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Это кафе недорогое.»: Este café es ___.",
    "a": [
      "barato"
    ],
    "e": "Este café es barato. — Это кафе недорогое."
  },
  {
    "id": "study_city_clean_dirty_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: чистый / грязный.",
    "a": [
      "limpio / sucio",
      "limpio sucio",
      "limpio y sucio"
    ],
    "e": "Правильный вариант: limpio / sucio."
  },
  {
    "id": "study_city_clean_dirty_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: limpio / sucio.",
    "a": [
      "чистый грязный",
      "чистый / грязный"
    ],
    "e": "limpio / sucio — чистый / грязный."
  },
  {
    "id": "study_city_clean_dirty_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мой район чистый.»: Mi barrio está ___.",
    "a": [
      "limpio"
    ],
    "e": "Mi barrio está limpio. — Мой район чистый."
  },
  {
    "id": "study_city_quiet_noisy_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тихий, спокойный / шумный.",
    "a": [
      "tranquilo / ruidoso",
      "tranquilo ruidoso",
      "tranquilo y ruidoso"
    ],
    "e": "Правильный вариант: tranquilo / ruidoso."
  },
  {
    "id": "study_city_quiet_noisy_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: tranquilo / ruidoso.",
    "a": [
      "тихий шумный",
      "спокойный шумный",
      "тихий, спокойный / шумный"
    ],
    "e": "tranquilo / ruidoso — тихий, спокойный / шумный."
  },
  {
    "id": "study_city_quiet_noisy_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я живу в спокойном районе.»: Vivo en un barrio ___.",
    "a": [
      "tranquilo"
    ],
    "e": "Vivo en un barrio tranquilo. — Я живу в спокойном районе."
  },
  {
    "id": "study_city_modern_old_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: современный / старинный.",
    "a": [
      "moderno / antiguo",
      "moderno antiguo",
      "moderno y antiguo",
      "moderno / viejo"
    ],
    "e": "Правильный вариант: moderno / antiguo."
  },
  {
    "id": "study_city_modern_old_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: moderno / antiguo.",
    "a": [
      "современный старинный",
      "современный / старинный"
    ],
    "e": "moderno / antiguo — современный / старинный."
  },
  {
    "id": "study_city_modern_old_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Метро современное.»: El edificio es ___.",
    "a": [
      "antiguo",
      "viejo"
    ],
    "e": "El metro es moderno. — Метро современное."
  },
  {
    "id": "study_city_pleasant_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: приятный / неприятный.",
    "a": [
      "agradable / desagradable",
      "agradable desagradable",
      "agradable y desagradable"
    ],
    "e": "Правильный вариант: agradable / desagradable."
  },
  {
    "id": "study_city_pleasant_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: agradable / desagradable.",
    "a": [
      "приятный неприятный",
      "приятный / неприятный"
    ],
    "e": "agradable / desagradable — приятный / неприятный."
  },
  {
    "id": "study_city_pleasant_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Площадь приятная.»: La plaza es ___.",
    "a": [
      "agradable"
    ],
    "e": "La plaza es agradable. — Площадь приятная."
  },
  {
    "id": "study_city_safe_es",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Вспомни",
    "q": "Переведи на испанский: безопасный / опасный.",
    "a": [
      "seguro / peligroso",
      "seguro peligroso",
      "seguro y peligroso"
    ],
    "e": "Правильный вариант: seguro / peligroso."
  },
  {
    "id": "study_city_safe_ru",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "Узнай",
    "q": "Переведи на русский: seguro / peligroso.",
    "a": [
      "безопасный опасный",
      "безопасный / опасный"
    ],
    "e": "seguro / peligroso — безопасный / опасный."
  },
  {
    "id": "study_city_safe_ctx",
    "topic": "city",
    "foodCat": "opposites",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Этот район безопасный.»: Este barrio es ___.",
    "a": [
      "seguro"
    ],
    "e": "Este barrio es seguro. — Этот район безопасный."
  },
  {
    "id": "choice_city_trash",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мусорный контейнер.",
    "a": [
      "el contenedor de basura"
    ],
    "options": [
      "el contenedor de basura",
      "la farmacia",
      "la parada de autobús",
      "el banco"
    ],
    "e": "el contenedor de basura — мусорный контейнер."
  },
  {
    "id": "choice_city_pharmacy",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: аптека.",
    "a": [
      "la farmacia"
    ],
    "options": [
      "la farmacia",
      "la parada de autobús",
      "el banco",
      "la oficina de correos"
    ],
    "e": "la farmacia — аптека."
  },
  {
    "id": "choice_city_bus_stop",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: автобусная остановка.",
    "a": [
      "la parada de autobús"
    ],
    "options": [
      "la parada de autobús",
      "el banco",
      "la oficina de correos",
      "el cine"
    ],
    "e": "la parada de autobús — автобусная остановка."
  },
  {
    "id": "choice_city_bank",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: банк.",
    "a": [
      "el banco"
    ],
    "options": [
      "el banco",
      "la oficina de correos",
      "el cine",
      "el gimnasio"
    ],
    "e": "el banco — банк."
  },
  {
    "id": "choice_city_post",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: почтовое отделение.",
    "a": [
      "la oficina de correos"
    ],
    "options": [
      "la oficina de correos",
      "el cine",
      "el gimnasio",
      "la escuela"
    ],
    "e": "la oficina de correos — почтовое отделение."
  },
  {
    "id": "choice_city_cinema",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кинотеатр.",
    "a": [
      "el cine"
    ],
    "options": [
      "el cine",
      "el gimnasio",
      "la escuela",
      "la comisaría"
    ],
    "e": "el cine — кинотеатр."
  },
  {
    "id": "choice_city_city_gym",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: спортзал.",
    "a": [
      "el gimnasio"
    ],
    "options": [
      "el gimnasio",
      "la escuela",
      "la comisaría",
      "el supermercado"
    ],
    "e": "el gimnasio — спортзал."
  },
  {
    "id": "choice_city_school",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: школа.",
    "a": [
      "la escuela"
    ],
    "options": [
      "la escuela",
      "la comisaría",
      "el supermercado",
      "el contenedor de basura"
    ],
    "e": "la escuela — школа."
  },
  {
    "id": "choice_city_police",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: полицейский участок.",
    "a": [
      "la comisaría"
    ],
    "options": [
      "la comisaría",
      "el supermercado",
      "el contenedor de basura",
      "la farmacia"
    ],
    "e": "la comisaría — полицейский участок."
  },
  {
    "id": "choice_city_supermarket",
    "topic": "city",
    "foodCat": "places",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: супермаркет.",
    "a": [
      "el supermercado"
    ],
    "options": [
      "el supermercado",
      "el contenedor de basura",
      "la farmacia",
      "la parada de autobús"
    ],
    "e": "el supermercado — супермаркет."
  },
  {
    "id": "choice_city_big_small",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: большой / маленький.",
    "a": [
      "grande / pequeño"
    ],
    "options": [
      "grande / pequeño",
      "tranquilo / ruidoso",
      "moderno / antiguo",
      "agradable / desagradable"
    ],
    "e": "grande / pequeño — большой / маленький."
  },
  {
    "id": "choice_city_pretty_ugly",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: красивый / некрасивый.",
    "a": [
      "bonito / feo"
    ],
    "options": [
      "bonito / feo",
      "moderno / antiguo",
      "agradable / desagradable",
      "seguro / peligroso"
    ],
    "e": "bonito / feo — красивый / некрасивый."
  },
  {
    "id": "choice_city_cheap_expensive",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: дешёвый / дорогой.",
    "a": [
      "barato / caro"
    ],
    "options": [
      "barato / caro",
      "agradable / desagradable",
      "seguro / peligroso",
      "grande / pequeño"
    ],
    "e": "barato / caro — дешёвый / дорогой."
  },
  {
    "id": "choice_city_clean_dirty",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чистый / грязный.",
    "a": [
      "limpio / sucio"
    ],
    "options": [
      "limpio / sucio",
      "seguro / peligroso",
      "grande / pequeño",
      "bonito / feo"
    ],
    "e": "limpio / sucio — чистый / грязный."
  },
  {
    "id": "choice_city_quiet_noisy",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тихий, спокойный / шумный.",
    "a": [
      "tranquilo / ruidoso"
    ],
    "options": [
      "tranquilo / ruidoso",
      "grande / pequeño",
      "bonito / feo",
      "barato / caro"
    ],
    "e": "tranquilo / ruidoso — тихий, спокойный / шумный."
  },
  {
    "id": "choice_city_modern_old",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: современный / старинный.",
    "a": [
      "moderno / antiguo"
    ],
    "options": [
      "moderno / antiguo",
      "bonito / feo",
      "barato / caro",
      "limpio / sucio"
    ],
    "e": "moderno / antiguo — современный / старинный."
  },
  {
    "id": "choice_city_pleasant",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: приятный / неприятный.",
    "a": [
      "agradable / desagradable"
    ],
    "options": [
      "agradable / desagradable",
      "barato / caro",
      "limpio / sucio",
      "tranquilo / ruidoso"
    ],
    "e": "agradable / desagradable — приятный / неприятный."
  },
  {
    "id": "choice_city_safe",
    "topic": "city",
    "foodCat": "opposites",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: безопасный / опасный.",
    "a": [
      "seguro / peligroso"
    ],
    "options": [
      "seguro / peligroso",
      "limpio / sucio",
      "tranquilo / ruidoso",
      "moderno / antiguo"
    ],
    "e": "seguro / peligroso — безопасный / опасный."
  },
  {
    "id": "audio_city_trash",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El contenedor de basura está en la esquina.",
    "a": [
      "El contenedor de basura está en la esquina."
    ],
    "e": "Мусорный контейнер находится на углу."
  },
  {
    "id": "audio_city_pharmacy",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La farmacia está abierta.",
    "a": [
      "La farmacia está abierta."
    ],
    "e": "Аптека открыта."
  },
  {
    "id": "audio_city_bus_stop",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La parada de autobús está enfrente.",
    "a": [
      "La parada de autobús está enfrente."
    ],
    "e": "Автобусная остановка находится напротив."
  },
  {
    "id": "audio_city_bank",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El banco cierra a las seis.",
    "a": [
      "El banco cierra a las seis."
    ],
    "e": "Банк закрывается в шесть."
  },
  {
    "id": "audio_city_post",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La oficina de correos está en el centro.",
    "a": [
      "La oficina de correos está en el centro."
    ],
    "e": "Почтовое отделение находится в центре."
  },
  {
    "id": "audio_city_cinema",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El cine está cerca del metro.",
    "a": [
      "El cine está cerca del metro."
    ],
    "e": "Кинотеатр находится рядом с метро."
  },
  {
    "id": "audio_city_city_gym",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El gimnasio abre temprano.",
    "a": [
      "El gimnasio abre temprano."
    ],
    "e": "Спортзал открывается рано."
  },
  {
    "id": "audio_city_school",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La escuela está al final de la calle.",
    "a": [
      "La escuela está al final de la calle."
    ],
    "e": "Школа находится в конце улицы."
  },
  {
    "id": "audio_city_police",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La comisaría está junto al banco.",
    "a": [
      "La comisaría está junto al banco."
    ],
    "e": "Полицейский участок находится рядом с банком."
  },
  {
    "id": "audio_city_supermarket",
    "topic": "city",
    "foodCat": "places",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El supermercado está abierto hasta tarde.",
    "a": [
      "El supermercado está abierto hasta tarde."
    ],
    "e": "Супермаркет открыт допоздна."
  },
  {
    "id": "audio_city_big_small",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Madrid es una ciudad grande.",
    "a": [
      "Madrid es una ciudad grande."
    ],
    "e": "Мадрид — большой город."
  },
  {
    "id": "audio_city_pretty_ugly",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El parque es muy bonito.",
    "a": [
      "El parque es muy bonito."
    ],
    "e": "Парк очень красивый."
  },
  {
    "id": "audio_city_cheap_expensive",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Este café es barato.",
    "a": [
      "Este café es barato."
    ],
    "e": "Это кафе недорогое."
  },
  {
    "id": "audio_city_clean_dirty",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Mi barrio está limpio.",
    "a": [
      "Mi barrio está limpio."
    ],
    "e": "Мой район чистый."
  },
  {
    "id": "audio_city_quiet_noisy",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vivo en un barrio tranquilo.",
    "a": [
      "Vivo en un barrio tranquilo."
    ],
    "e": "Я живу в спокойном районе."
  },
  {
    "id": "audio_city_modern_old",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El metro es moderno.",
    "a": [
      "El metro es moderno."
    ],
    "e": "Метро современное."
  },
  {
    "id": "audio_city_pleasant",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La plaza es agradable.",
    "a": [
      "La plaza es agradable."
    ],
    "e": "Площадь приятная."
  },
  {
    "id": "audio_city_safe",
    "topic": "city",
    "foodCat": "opposites",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Este barrio es seguro.",
    "a": [
      "Este barrio es seguro."
    ],
    "e": "Этот район безопасный."
  },
  {
    "id": "match_recent_city_places",
    "topic": "city",
    "foodCat": "places",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини места в городе с переводом.",
    "pairs": [
      [
        "la farmacia",
        "аптека"
      ],
      [
        "la parada de autobús",
        "автобусная остановка"
      ],
      [
        "la oficina de correos",
        "почтовое отделение"
      ],
      [
        "la comisaría",
        "полицейский участок"
      ],
      [
        "el supermercado",
        "супермаркет"
      ],
      [
        "el gimnasio",
        "спортзал"
      ]
    ],
    "a": [
      "аптека | автобусная остановка | почтовое отделение | полицейский участок | супермаркет | спортзал"
    ],
    "displayAnswer": "la farmacia — аптека · la parada de autobús — автобусная остановка · la oficina de correos — почтовое отделение · la comisaría — полицейский участок · el supermercado — супермаркет · el gimnasio — спортзал",
    "e": "Каждое место выполняет отдельную функцию."
  },
  {
    "id": "match_recent_city_opposites",
    "topic": "city",
    "foodCat": "opposites",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини пары характеристик города с переводом.",
    "pairs": [
      [
        "grande / pequeño",
        "большой / маленький"
      ],
      [
        "bonito / feo",
        "красивый / некрасивый"
      ],
      [
        "barato / caro",
        "дешёвый / дорогой"
      ],
      [
        "limpio / sucio",
        "чистый / грязный"
      ],
      [
        "tranquilo / ruidoso",
        "тихий / шумный"
      ],
      [
        "moderno / antiguo",
        "современный / старинный"
      ]
    ],
    "a": [
      "большой / маленький | красивый / некрасивый | дешёвый / дорогой | чистый / грязный | тихий / шумный | современный / старинный"
    ],
    "displayAnswer": "grande / pequeño — большой / маленький · bonito / feo — красивый / некрасивый · barato / caro — дешёвый / дорогой · limpio / sucio — чистый / грязный · tranquilo / ruidoso — тихий / шумный · moderno / antiguo — современный / старинный",
    "e": "В каждой строке проверяется целая пара антонимов."
  },
  {
    "id": "passage_recent_city_errands",
    "topic": "city",
    "foodCat": "places",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Город: куда идти: расставь слова по однозначным пропускам.",
    "template": "Para comprar medicamentos, voy a la {{0}}. Para enviar un paquete, voy a la {{1}}. Si necesito acudir a la policía, voy a la {{2}}. Compro los alimentos para toda la semana en el {{3}}.",
    "blanks": [
      "farmacia",
      "oficina de correos",
      "comisaría",
      "supermercado"
    ],
    "a": [
      "farmacia | oficina de correos | comisaría | supermercado"
    ],
    "displayAnswer": "Para comprar medicamentos, voy a la farmacia. Para enviar un paquete, voy a la oficina de correos. Si necesito acudir a la policía, voy a la comisaría. Compro los alimentos para toda la semana en el supermercado.",
    "e": "Назначение каждого места уникально.",
    "ruTranslation": "За лекарствами я иду в аптеку. Чтобы отправить посылку, я иду на почту. Если мне нужно обратиться в полицию, я иду в полицейский участок. Продукты на всю неделю я покупаю в супермаркете."
  },
  {
    "id": "context_choice_pharmacy_location",
    "topic": "city",
    "foodCat": "places",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "La farmacia ___ junto al banco, enfrente del parque.",
    "options": [
      "es",
      "está",
      "hay",
      "son"
    ],
    "a": [
      "está"
    ],
    "e": "Для местонахождения известного объекта используется estar."
  },
  {
    "id": "context_choice_two_markets",
    "topic": "city",
    "foodCat": "places",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "En mi calle ___ dos supermercados y una panadería.",
    "options": [
      "hay",
      "están",
      "es",
      "tiene"
    ],
    "a": [
      "hay"
    ],
    "e": "Hay сообщает о наличии новых объектов."
  },
  {
    "id": "ser_estar_hay_pharmacy",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: La farmacia ___ al lado del banco.",
    "a": [
      "está",
      "esta"
    ],
    "displayAnswer": "está",
    "e": "Местонахождение известного объекта выражается estar."
  },
  {
    "id": "ser_estar_hay_parks",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: En mi barrio ___ dos parques grandes.",
    "a": [
      "hay"
    ],
    "displayAnswer": "hay",
    "e": "Для наличия неопределённых объектов используется hay."
  },
  {
    "id": "ser_estar_hay_cup_exists",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: En la mesa ___ una taza de café.",
    "a": [
      "hay"
    ],
    "displayAnswer": "hay",
    "e": "Впервые сообщаем о наличии чашки: hay."
  },
  {
    "id": "ser_estar_hay_cup_location",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: La taza de café ___ en la mesa.",
    "a": [
      "está",
      "esta"
    ],
    "displayAnswer": "está",
    "e": "Теперь речь об известной чашке и её местонахождении: está."
  },
  {
    "id": "ser_estar_hay_shops_closed",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Las tiendas ___ cerradas ahora.",
    "a": [
      "están",
      "estan"
    ],
    "displayAnswer": "están",
    "e": "Временное состояние сейчас выражается estar."
  },
  {
    "id": "ser_estar_hay_quiet_area",
    "topic": "city",
    "foodCat": "opposites",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Este barrio ___ muy tranquilo y limpio.",
    "a": [
      "es"
    ],
    "displayAnswer": "es",
    "e": "Характеристика района выражается ser."
  },
  {
    "id": "ser_estar_hay_gym_where",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: ¿Dónde ___ el gimnasio?",
    "a": [
      "está",
      "esta"
    ],
    "displayAnswer": "está",
    "e": "Вопрос о местонахождении требует estar."
  },
  {
    "id": "ser_estar_hay_no_pharmacy",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Aquí no ___ ninguna farmacia.",
    "a": [
      "hay"
    ],
    "displayAnswer": "hay",
    "e": "Отсутствие объекта выражается no hay."
  },
  {
    "id": "ser_estar_hay_concert_theater",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: El concierto ___ en el teatro municipal.",
    "a": [
      "es"
    ],
    "displayAnswer": "es",
    "e": "Место проведения события выражается ser, а не estar."
  },
  {
    "id": "ser_estar_hay_people_office",
    "topic": "city",
    "foodCat": "places",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Hoy ___ muchas personas en la oficina.",
    "a": [
      "hay"
    ],
    "displayAnswer": "hay",
    "e": "Сообщаем о наличии людей: hay."
  },
  {
    "id": "sort_city_words",
    "topic": "city",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели городские слова по смыслу.",
    "sortColumns": [
      {
        "id": "c0",
        "title": "Места в городе"
      },
      {
        "id": "c1",
        "title": "Положительное описание"
      },
      {
        "id": "c2",
        "title": "Отрицательное описание"
      }
    ],
    "sortTokens": [
      {
        "id": "t0_0",
        "text": "la farmacia",
        "category": "c0"
      },
      {
        "id": "t0_1",
        "text": "el banco",
        "category": "c0"
      },
      {
        "id": "t0_2",
        "text": "el cine",
        "category": "c0"
      },
      {
        "id": "t0_3",
        "text": "la escuela",
        "category": "c0"
      },
      {
        "id": "t1_0",
        "text": "bonito",
        "category": "c1"
      },
      {
        "id": "t1_1",
        "text": "limpio",
        "category": "c1"
      },
      {
        "id": "t1_2",
        "text": "tranquilo",
        "category": "c1"
      },
      {
        "id": "t1_3",
        "text": "seguro",
        "category": "c1"
      },
      {
        "id": "t2_0",
        "text": "feo",
        "category": "c2"
      },
      {
        "id": "t2_1",
        "text": "sucio",
        "category": "c2"
      },
      {
        "id": "t2_2",
        "text": "ruidoso",
        "category": "c2"
      },
      {
        "id": "t2_3",
        "text": "peligroso",
        "category": "c2"
      }
    ],
    "a": [
      "c0 | c0 | c0 | c0 | c1 | c1 | c1 | c1 | c2 | c2 | c2 | c2"
    ],
    "displayAnswer": "Места в городе: la farmacia, el banco, el cine, la escuela · Положительное описание: bonito, limpio, tranquilo, seguro · Отрицательное описание: feo, sucio, ruidoso, peligroso",
    "e": "Каждое слово относится только к одной колонке в этом задании."
  },
  {
    "id": "audio_story_city_directions_1",
    "topic": "city",
    "foodCat": "places",
    "type": "audio_story_quiz",
    "theme": "directions",
    "skill": "Аудирование · Правда / Ложь",
    "title": "Аудирование: Preguntar por la calle",
    "q": "Прослушай объяснение маршрута и отметь: правда или ложь.",
    "image": "assets/images/stories/story_city.webp?v=20260923-highres-stories28",
    "imageAlt": "Рыжий кот с картой на улочке испанского города",
    "audioText": "Perdone, ¿para ir a la estación de tren? Debe seguir todo recto por esta avenida hasta el semáforo y luego girar a la izquierda. La estación está justo al lado del parque grande, a unos diez minutos a pie.",
    "statements": [
      {"id":"s1","text":"La persona pregunta cómo llegar a la estación de tren.","isTrue":true,"explanation":"Correcto: al principio pregunta «¿para ir a la estación de tren?»."},
      {"id":"s2","text":"En el semáforo hay que girar a la derecha.","isTrue":false,"explanation":"Es falso: hay que «girar a la izquierda»."},
      {"id":"s3","text":"La estación está al lado de un parque grande.","isTrue":true,"explanation":"Correcto: en el audio dice «La estación está justo al lado del parque grande»."},
      {"id":"s4","text":"La estación está a unos veinte minutos en coche.","isTrue":false,"explanation":"Es falso: está «a unos diez minutos a pie»."}
    ]
  },
  {
    "id": "order_city_pharmacy_nearest",
    "topic": "city",
    "foodCat": "places",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Где находится ближайшая аптека?»",
    "tokens": ["¿Dónde","está","la","farmacia","más","cercana?","es","hay"],
    "a": ["¿Dónde está la farmacia más cercana?"],
    "e": "Для местонахождения конкретного объекта используется estar: ¿Dónde está...?"
  },
  {
    "id": "order_city_like_city",
    "topic": "city",
    "foodCat": "opposites",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Мне очень нравится этот город»",
    "tokens": ["Me","gusta","mucho","esta","ciudad","yo","gustan"],
    "a": ["Me gusta mucho esta ciudad"],
    "displayAnswer": "Me gusta mucho esta ciudad.",
    "e": "С единственным существительным ciudad используется gusta."
  },
  {
    "id": "order_city_train_ticket",
    "topic": "city",
    "foodCat": "places",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Мне нужно купить билет на поезд»",
    "tokens": ["Necesito","comprar","un","billete","de","tren.","para","somos"],
    "a": ["Necesito comprar un billete de tren."],
    "e": "После necesito используется инфинитив: necesito comprar."
  },
  {
    "id": "order_city_cafe_near",
    "topic": "city",
    "foodCat": "places",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Здесь рядом есть кафе?»",
    "tokens": ["¿Hay","una","cafetería","cerca","de","aquí?","está","es"],
    "a": ["¿Hay una cafetería cerca de aquí?"],
    "e": "Hay используется, когда спрашиваем о наличии места поблизости."
  },
  {
    "id": "order_city_how_station",
    "topic": "city",
    "foodCat": "places",
    "type": "order",
    "skill": "Собери фразу",
    "q": "Собери: «Как мне добраться до железнодорожной станции?»",
    "tokens": ["¿Cómo","llego","a","la","estación","de","tren?","dónde","voy"],
    "a": ["¿Cómo llego a la estación de tren?"],
    "e": "Llegar a — «добраться до»: ¿Cómo llego a...?"
  },
  {
    "id": "fill_city_madrid_location",
    "topic": "city",
    "foodCat": "places",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Madrid ____ en el centro de España.",
    "options": ["está","es","tiene","hay"],
    "a": ["está"],
    "e": "Для местоположения города используется estar: Madrid está..."
  },
  {
    "id": "fill_city_station_location",
    "topic": "city",
    "foodCat": "places",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "La estación ____ al lado del parque.",
    "options": ["está","es","hay","tiene"],
    "a": ["está"],
    "e": "Местонахождение конкретной станции выражается estar."
  },
  {
    "id": "fill_city_supermarket_exists",
    "topic": "city",
    "foodCat": "places",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "En esta calle ____ un supermercado.",
    "options": ["hay","está","es","son"],
    "a": ["hay"],
    "e": "Hay вводит новый неопределённый объект: «на этой улице есть супермаркет»."
  },
  {
    "id": "fill_city_pharmacy_article",
    "topic": "city",
    "foodCat": "places",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Busco ____ farmacia cerca de aquí.",
    "options": ["una","un","el","los"],
    "a": ["una"],
    "e": "Farmacia — существительное женского рода: una farmacia."
  },
  {
    "id": "fill_city_shirt_gender",
    "topic": "city",
    "foodCat": "places",
    "type": "fill-choice",
    "skill": "Вставь слово",
    "q": "Quiero comprar ____ camisa azul.",
    "options": ["esta","este","estos","estas"],
    "a": ["esta"],
    "e": "Camisa — женский род, единственное число: esta camisa."
  }
];

export const cityTopic = {
  id: "city",
  title: "Город и район",
  icon: "⌂",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
