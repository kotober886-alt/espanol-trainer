/**
 * Дни и времена года topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "monday",
    "cat": "days",
    "word": "el lunes",
    "base": "el lunes",
    "gender": "день недели",
    "tr": "понедельник; в понедельник",
    "ru": [
      "понедельник",
      "в понедельник"
    ],
    "answers": [
      "lunes",
      "el lunes"
    ],
    "art": null,
    "examples": [
      [
        "El lunes voy al trabajo.",
        "В понедельник я иду на работу."
      ],
      [
        "Los lunes estudio español.",
        "По понедельникам я учу испанский."
      ]
    ],
    "cloze": "___ voy al trabajo.",
    "clozeAnswers": [
      "El lunes",
      "lunes"
    ],
    "meta": {
      "categoryTitle": "Дни недели",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "tuesday",
    "cat": "days",
    "word": "el martes",
    "base": "el martes",
    "gender": "день недели",
    "tr": "вторник; во вторник",
    "ru": [
      "вторник",
      "во вторник"
    ],
    "answers": [
      "martes",
      "el martes"
    ],
    "art": null,
    "examples": [
      [
        "El martes tengo clase.",
        "Во вторник у меня занятие."
      ],
      [
        "Los martes voy al gimnasio.",
        "По вторникам я хожу в спортзал."
      ]
    ],
    "cloze": "___ tengo clase.",
    "clozeAnswers": [
      "El martes",
      "martes"
    ],
    "meta": {
      "categoryTitle": "Дни недели",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "wednesday",
    "cat": "days",
    "word": "el miércoles",
    "base": "el miércoles",
    "gender": "день недели",
    "tr": "среда; в среду",
    "ru": [
      "среда",
      "в среду"
    ],
    "answers": [
      "miércoles",
      "miercoles",
      "el miércoles",
      "el miercoles"
    ],
    "art": null,
    "examples": [
      [
        "El miércoles trabajo desde casa.",
        "В среду я работаю из дома."
      ],
      [
        "Los miércoles cocinamos juntos.",
        "По средам мы готовим вместе."
      ]
    ],
    "cloze": "___ trabajo desde casa.",
    "clozeAnswers": [
      "El miércoles",
      "El miercoles",
      "miércoles",
      "miercoles"
    ],
    "meta": {
      "categoryTitle": "Дни недели",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "thursday",
    "cat": "days",
    "word": "el jueves",
    "base": "el jueves",
    "gender": "день недели",
    "tr": "четверг; в четверг",
    "ru": [
      "четверг",
      "в четверг"
    ],
    "answers": [
      "jueves",
      "el jueves"
    ],
    "art": null,
    "examples": [
      [
        "El jueves quedo con Ana.",
        "В четверг я встречаюсь с Аной."
      ],
      [
        "Los jueves leo por la noche.",
        "По четвергам я читаю вечером."
      ]
    ],
    "cloze": "___ quedo con Ana.",
    "clozeAnswers": [
      "El jueves",
      "jueves"
    ],
    "meta": {
      "categoryTitle": "Дни недели",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "friday",
    "cat": "days",
    "word": "el viernes",
    "base": "el viernes",
    "gender": "день недели",
    "tr": "пятница; в пятницу",
    "ru": [
      "пятница",
      "в пятницу"
    ],
    "answers": [
      "viernes",
      "el viernes"
    ],
    "art": null,
    "examples": [
      [
        "El viernes descanso en casa.",
        "В пятницу я отдыхаю дома."
      ],
      [
        "Los viernes vemos películas.",
        "По пятницам мы смотрим фильмы."
      ]
    ],
    "cloze": "___ descanso en casa.",
    "clozeAnswers": [
      "El viernes",
      "viernes"
    ],
    "meta": {
      "categoryTitle": "Дни недели",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "saturday",
    "cat": "days",
    "word": "el sábado",
    "base": "el sábado",
    "gender": "день недели",
    "tr": "суббота; в субботу",
    "ru": [
      "суббота",
      "в субботу"
    ],
    "answers": [
      "sábado",
      "sabado",
      "el sábado",
      "el sabado"
    ],
    "art": null,
    "examples": [
      [
        "El sábado quedamos con amigos.",
        "В субботу мы встречаемся с друзьями."
      ],
      [
        "Los sábados voy de compras.",
        "По субботам я хожу за покупками."
      ]
    ],
    "cloze": "___ quedamos con amigos.",
    "clozeAnswers": [
      "El sábado",
      "El sabado",
      "sábado",
      "sabado"
    ],
    "meta": {
      "categoryTitle": "Дни недели",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "sunday",
    "cat": "days",
    "word": "el domingo",
    "base": "el domingo",
    "gender": "день недели",
    "tr": "воскресенье; в воскресенье",
    "ru": [
      "воскресенье",
      "в воскресенье"
    ],
    "answers": [
      "domingo",
      "el domingo"
    ],
    "art": null,
    "examples": [
      [
        "El domingo descanso.",
        "В воскресенье я отдыхаю."
      ],
      [
        "Los domingos desayunamos tarde.",
        "По воскресеньям мы завтракаем поздно."
      ]
    ],
    "cloze": "___ descanso.",
    "clozeAnswers": [
      "El domingo",
      "domingo"
    ],
    "meta": {
      "categoryTitle": "Дни недели",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "january",
    "cat": "months",
    "word": "enero",
    "base": "enero",
    "gender": "месяц",
    "tr": "январь",
    "ru": [
      "январь"
    ],
    "answers": [
      "enero"
    ],
    "art": null,
    "examples": [
      [
        "Enero es el primer mes del año.",
        "Январь — первый месяц года."
      ],
      [
        "En enero hace frío.",
        "В январе холодно."
      ]
    ],
    "cloze": "___ es el primer mes del año.",
    "clozeAnswers": [
      "Enero",
      "enero"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "february",
    "cat": "months",
    "word": "febrero",
    "base": "febrero",
    "gender": "месяц",
    "tr": "февраль",
    "ru": [
      "февраль"
    ],
    "answers": [
      "febrero"
    ],
    "art": null,
    "examples": [
      [
        "Febrero es un mes corto.",
        "Февраль — короткий месяц."
      ],
      [
        "En febrero todavía es invierno.",
        "В феврале всё ещё зима."
      ]
    ],
    "cloze": "___ es un mes corto.",
    "clozeAnswers": [
      "Febrero",
      "febrero"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "march",
    "cat": "months",
    "word": "marzo",
    "base": "marzo",
    "gender": "месяц",
    "tr": "март",
    "ru": [
      "март"
    ],
    "answers": [
      "marzo"
    ],
    "art": null,
    "examples": [
      [
        "Mi cumpleaños es en marzo.",
        "Мой день рождения в марте."
      ],
      [
        "La primavera empieza en marzo.",
        "Весна начинается в марте."
      ]
    ],
    "cloze": "Mi cumpleaños es en ___.",
    "clozeAnswers": [
      "marzo"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "april",
    "cat": "months",
    "word": "abril",
    "base": "abril",
    "gender": "месяц",
    "tr": "апрель",
    "ru": [
      "апрель"
    ],
    "answers": [
      "abril"
    ],
    "art": null,
    "examples": [
      [
        "En abril llueve mucho.",
        "В апреле часто идёт дождь."
      ],
      [
        "Abril tiene treinta días.",
        "В апреле тридцать дней."
      ]
    ],
    "cloze": "En ___ llueve mucho.",
    "clozeAnswers": [
      "abril"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "may",
    "cat": "months",
    "word": "mayo",
    "base": "mayo",
    "gender": "месяц",
    "tr": "май",
    "ru": [
      "май"
    ],
    "answers": [
      "mayo"
    ],
    "art": null,
    "examples": [
      [
        "En mayo hace buen tiempo.",
        "В мае хорошая погода."
      ],
      [
        "Mayo es mi mes favorito.",
        "Май — мой любимый месяц."
      ]
    ],
    "cloze": "En ___ hace buen tiempo.",
    "clozeAnswers": [
      "mayo"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "june",
    "cat": "months",
    "word": "junio",
    "base": "junio",
    "gender": "месяц",
    "tr": "июнь",
    "ru": [
      "июнь"
    ],
    "answers": [
      "junio"
    ],
    "art": null,
    "examples": [
      [
        "El verano empieza en junio.",
        "Лето начинается в июне."
      ],
      [
        "En junio los días son largos.",
        "В июне дни длинные."
      ]
    ],
    "cloze": "El verano empieza en ___.",
    "clozeAnswers": [
      "junio"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "july",
    "cat": "months",
    "word": "julio",
    "base": "julio",
    "gender": "месяц",
    "tr": "июль",
    "ru": [
      "июль"
    ],
    "answers": [
      "julio"
    ],
    "art": null,
    "examples": [
      [
        "Julio es un mes caluroso.",
        "Июль — жаркий месяц."
      ],
      [
        "En julio vamos al mar.",
        "В июле мы едем к морю."
      ]
    ],
    "cloze": "En ___ vamos al mar.",
    "clozeAnswers": [
      "julio"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "august",
    "cat": "months",
    "word": "agosto",
    "base": "agosto",
    "gender": "месяц",
    "tr": "август",
    "ru": [
      "август"
    ],
    "answers": [
      "agosto"
    ],
    "art": null,
    "examples": [
      [
        "En agosto tengo vacaciones.",
        "В августе у меня отпуск."
      ],
      [
        "Agosto suele ser muy caluroso.",
        "Август обычно очень жаркий."
      ]
    ],
    "cloze": "En ___ tengo vacaciones.",
    "clozeAnswers": [
      "agosto"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "september",
    "cat": "months",
    "word": "septiembre",
    "base": "septiembre",
    "gender": "месяц",
    "tr": "сентябрь",
    "ru": [
      "сентябрь"
    ],
    "answers": [
      "septiembre"
    ],
    "art": null,
    "examples": [
      [
        "Las clases empiezan en septiembre.",
        "Занятия начинаются в сентябре."
      ],
      [
        "Septiembre es el primer mes del otoño.",
        "Сентябрь — первый месяц осени."
      ]
    ],
    "cloze": "Las clases empiezan en ___.",
    "clozeAnswers": [
      "septiembre"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "october",
    "cat": "months",
    "word": "octubre",
    "base": "octubre",
    "gender": "месяц",
    "tr": "октябрь",
    "ru": [
      "октябрь"
    ],
    "answers": [
      "octubre"
    ],
    "art": null,
    "examples": [
      [
        "En octubre las hojas cambian de color.",
        "В октябре листья меняют цвет."
      ],
      [
        "Octubre tiene treinta y un días.",
        "В октябре тридцать один день."
      ]
    ],
    "cloze": "En ___ las hojas cambian de color.",
    "clozeAnswers": [
      "octubre"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "november",
    "cat": "months",
    "word": "noviembre",
    "base": "noviembre",
    "gender": "месяц",
    "tr": "ноябрь",
    "ru": [
      "ноябрь"
    ],
    "answers": [
      "noviembre"
    ],
    "art": null,
    "examples": [
      [
        "En noviembre hace más frío.",
        "В ноябре становится холоднее."
      ],
      [
        "Noviembre tiene treinta días.",
        "В ноябре тридцать дней."
      ]
    ],
    "cloze": "En ___ hace más frío.",
    "clozeAnswers": [
      "noviembre"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "december",
    "cat": "months",
    "word": "diciembre",
    "base": "diciembre",
    "gender": "месяц",
    "tr": "декабрь",
    "ru": [
      "декабрь"
    ],
    "answers": [
      "diciembre"
    ],
    "art": null,
    "examples": [
      [
        "Diciembre es el último mes del año.",
        "Декабрь — последний месяц года."
      ],
      [
        "En diciembre empieza el invierno.",
        "В декабре начинается зима."
      ]
    ],
    "cloze": "___ es el último mes del año.",
    "clozeAnswers": [
      "Diciembre",
      "diciembre"
    ],
    "meta": {
      "categoryTitle": "Месяцы",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "winter",
    "cat": "seasons",
    "word": "el invierno",
    "base": "el invierno",
    "gender": "время года",
    "tr": "зима",
    "ru": [
      "зима"
    ],
    "answers": [
      "invierno",
      "el invierno"
    ],
    "art": null,
    "examples": [
      [
        "En invierno hace frío.",
        "Зимой холодно."
      ],
      [
        "Me gusta beber chocolate caliente en invierno.",
        "Зимой мне нравится пить горячий шоколад."
      ]
    ],
    "cloze": "En ___ hace frío.",
    "clozeAnswers": [
      "invierno"
    ],
    "meta": {
      "categoryTitle": "Времена года",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "spring",
    "cat": "seasons",
    "word": "la primavera",
    "base": "la primavera",
    "gender": "время года",
    "tr": "весна",
    "ru": [
      "весна"
    ],
    "answers": [
      "primavera",
      "la primavera"
    ],
    "art": null,
    "examples": [
      [
        "En primavera florecen los árboles.",
        "Весной цветут деревья."
      ],
      [
        "La primavera empieza en marzo.",
        "Весна начинается в марте."
      ]
    ],
    "cloze": "En ___ florecen los árboles.",
    "clozeAnswers": [
      "primavera"
    ],
    "meta": {
      "categoryTitle": "Времена года",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "summer",
    "cat": "seasons",
    "word": "el verano",
    "base": "el verano",
    "gender": "время года",
    "tr": "лето",
    "ru": [
      "лето"
    ],
    "answers": [
      "verano",
      "el verano"
    ],
    "art": null,
    "examples": [
      [
        "En verano voy al mar.",
        "Летом я езжу к морю."
      ],
      [
        "El verano es caluroso.",
        "Лето жаркое."
      ]
    ],
    "cloze": "En ___ voy al mar.",
    "clozeAnswers": [
      "verano"
    ],
    "meta": {
      "categoryTitle": "Времена года",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь календарь"
    }
  },
  {
    "id": "autumn",
    "cat": "seasons",
    "word": "el otoño",
    "base": "el otoño",
    "gender": "время года",
    "tr": "осень",
    "ru": [
      "осень"
    ],
    "answers": [
      "otoño",
      "otono",
      "el otoño",
      "el otono"
    ],
    "art": null,
    "examples": [
      [
        "En otoño las hojas se vuelven amarillas.",
        "Осенью листья становятся жёлтыми."
      ],
      [
        "El otoño empieza en septiembre.",
        "Осень начинается в сентябре."
      ]
    ],
    "cloze": "En ___ las hojas se vuelven amarillas.",
    "clozeAnswers": [
      "otoño",
      "otono"
    ],
    "meta": {
      "categoryTitle": "Времена года",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь календарь"
    }
  }
];

const EXERCISES = [
  {
    "id": "c1",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: В понедельник я иду на работу.",
    "a": [
      "El lunes voy al trabajo",
      "El lunes yo voy al trabajo"
    ]
  },
  {
    "id": "c2",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: Июль — самый жаркий месяц года.",
    "a": [
      "Julio es el mes más caluroso del año",
      "Julio es el mes más caliente del año"
    ]
  },
  {
    "id": "c3",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: Мой день рождения в марте.",
    "a": [
      "Mi cumpleaños es en marzo"
    ]
  },
  {
    "id": "c4",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: Декабрь — последний месяц года.",
    "a": [
      "Diciembre es el último mes del año"
    ]
  },
  {
    "id": "c5",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: Летом.",
    "a": [
      "En verano"
    ]
  },
  {
    "id": "c6",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: Зимой.",
    "a": [
      "En invierno"
    ]
  },
  {
    "id": "c7",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: Осенью.",
    "a": [
      "En otoño"
    ]
  },
  {
    "id": "c8",
    "topic": "calendar",
    "skill": "Перевод",
    "q": "Переведи на испанский: Весной.",
    "a": [
      "En primavera"
    ]
  },
  {
    "id": "study_calendar_monday_es",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Вспомни",
    "q": "Переведи на испанский: понедельник; в понедельник.",
    "a": [
      "lunes",
      "el lunes"
    ],
    "e": "Правильный вариант: el lunes."
  },
  {
    "id": "study_calendar_monday_ru",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Узнай",
    "q": "Переведи на русский: el lunes.",
    "a": [
      "понедельник",
      "в понедельник",
      "понедельник; в понедельник"
    ],
    "e": "el lunes — понедельник; в понедельник."
  },
  {
    "id": "study_calendar_monday_ctx",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В понедельник я иду на работу.»: ___ voy al trabajo.",
    "a": [
      "El lunes",
      "lunes"
    ],
    "e": "El lunes voy al trabajo. — В понедельник я иду на работу."
  },
  {
    "id": "study_calendar_tuesday_es",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вторник; во вторник.",
    "a": [
      "martes",
      "el martes"
    ],
    "e": "Правильный вариант: el martes."
  },
  {
    "id": "study_calendar_tuesday_ru",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Узнай",
    "q": "Переведи на русский: el martes.",
    "a": [
      "вторник",
      "во вторник",
      "вторник; во вторник"
    ],
    "e": "el martes — вторник; во вторник."
  },
  {
    "id": "study_calendar_tuesday_ctx",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Во вторник у меня занятие.»: ___ tengo clase.",
    "a": [
      "El martes",
      "martes"
    ],
    "e": "El martes tengo clase. — Во вторник у меня занятие."
  },
  {
    "id": "study_calendar_wednesday_es",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Вспомни",
    "q": "Переведи на испанский: среда; в среду.",
    "a": [
      "miércoles",
      "miercoles",
      "el miércoles",
      "el miercoles"
    ],
    "e": "Правильный вариант: el miércoles."
  },
  {
    "id": "study_calendar_wednesday_ru",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Узнай",
    "q": "Переведи на русский: el miércoles.",
    "a": [
      "среда",
      "в среду",
      "среда; в среду"
    ],
    "e": "el miércoles — среда; в среду."
  },
  {
    "id": "study_calendar_wednesday_ctx",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В среду я работаю из дома.»: ___ trabajo desde casa.",
    "a": [
      "El miércoles",
      "El miercoles",
      "miércoles",
      "miercoles"
    ],
    "e": "El miércoles trabajo desde casa. — В среду я работаю из дома."
  },
  {
    "id": "study_calendar_thursday_es",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Вспомни",
    "q": "Переведи на испанский: четверг; в четверг.",
    "a": [
      "jueves",
      "el jueves"
    ],
    "e": "Правильный вариант: el jueves."
  },
  {
    "id": "study_calendar_thursday_ru",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Узнай",
    "q": "Переведи на русский: el jueves.",
    "a": [
      "четверг",
      "в четверг",
      "четверг; в четверг"
    ],
    "e": "el jueves — четверг; в четверг."
  },
  {
    "id": "study_calendar_thursday_ctx",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В четверг я встречаюсь с Аной.»: ___ quedo con Ana.",
    "a": [
      "El jueves",
      "jueves"
    ],
    "e": "El jueves quedo con Ana. — В четверг я встречаюсь с Аной."
  },
  {
    "id": "study_calendar_friday_es",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Вспомни",
    "q": "Переведи на испанский: пятница; в пятницу.",
    "a": [
      "viernes",
      "el viernes"
    ],
    "e": "Правильный вариант: el viernes."
  },
  {
    "id": "study_calendar_friday_ru",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Узнай",
    "q": "Переведи на русский: el viernes.",
    "a": [
      "пятница",
      "в пятницу",
      "пятница; в пятницу"
    ],
    "e": "el viernes — пятница; в пятницу."
  },
  {
    "id": "study_calendar_friday_ctx",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В пятницу я отдыхаю дома.»: ___ descanso en casa.",
    "a": [
      "El viernes",
      "viernes"
    ],
    "e": "El viernes descanso en casa. — В пятницу я отдыхаю дома."
  },
  {
    "id": "study_calendar_saturday_es",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Вспомни",
    "q": "Переведи на испанский: суббота; в субботу.",
    "a": [
      "sábado",
      "sabado",
      "el sábado",
      "el sabado"
    ],
    "e": "Правильный вариант: el sábado."
  },
  {
    "id": "study_calendar_saturday_ru",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Узнай",
    "q": "Переведи на русский: el sábado.",
    "a": [
      "суббота",
      "в субботу",
      "суббота; в субботу"
    ],
    "e": "el sábado — суббота; в субботу."
  },
  {
    "id": "study_calendar_saturday_ctx",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В субботу мы встречаемся с друзьями.»: ___ quedamos con amigos.",
    "a": [
      "El sábado",
      "El sabado",
      "sábado",
      "sabado"
    ],
    "e": "El sábado quedamos con amigos. — В субботу мы встречаемся с друзьями."
  },
  {
    "id": "study_calendar_sunday_es",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Вспомни",
    "q": "Переведи на испанский: воскресенье; в воскресенье.",
    "a": [
      "domingo",
      "el domingo"
    ],
    "e": "Правильный вариант: el domingo."
  },
  {
    "id": "study_calendar_sunday_ru",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "Узнай",
    "q": "Переведи на русский: el domingo.",
    "a": [
      "воскресенье",
      "в воскресенье",
      "воскресенье; в воскресенье"
    ],
    "e": "el domingo — воскресенье; в воскресенье."
  },
  {
    "id": "study_calendar_sunday_ctx",
    "topic": "calendar",
    "foodCat": "days",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В воскресенье я отдыхаю.»: ___ descanso.",
    "a": [
      "El domingo",
      "domingo"
    ],
    "e": "El domingo descanso. — В воскресенье я отдыхаю."
  },
  {
    "id": "study_calendar_january_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: январь.",
    "a": [
      "enero"
    ],
    "e": "Правильный вариант: enero."
  },
  {
    "id": "study_calendar_january_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: enero.",
    "a": [
      "январь"
    ],
    "e": "enero — январь."
  },
  {
    "id": "study_calendar_january_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Январь — первый месяц года.»: ___ es el primer mes del año.",
    "a": [
      "Enero",
      "enero"
    ],
    "e": "Enero es el primer mes del año. — Январь — первый месяц года."
  },
  {
    "id": "study_calendar_february_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: февраль.",
    "a": [
      "febrero"
    ],
    "e": "Правильный вариант: febrero."
  },
  {
    "id": "study_calendar_february_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: febrero.",
    "a": [
      "февраль"
    ],
    "e": "febrero — февраль."
  },
  {
    "id": "study_calendar_february_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Февраль — короткий месяц.»: ___ es un mes corto.",
    "a": [
      "Febrero",
      "febrero"
    ],
    "e": "Febrero es un mes corto. — Февраль — короткий месяц."
  },
  {
    "id": "study_calendar_march_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: март.",
    "a": [
      "marzo"
    ],
    "e": "Правильный вариант: marzo."
  },
  {
    "id": "study_calendar_march_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: marzo.",
    "a": [
      "март"
    ],
    "e": "marzo — март."
  },
  {
    "id": "study_calendar_march_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мой день рождения в марте.»: Mi cumpleaños es en ___.",
    "a": [
      "marzo"
    ],
    "e": "Mi cumpleaños es en marzo. — Мой день рождения в марте."
  },
  {
    "id": "study_calendar_april_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: апрель.",
    "a": [
      "abril"
    ],
    "e": "Правильный вариант: abril."
  },
  {
    "id": "study_calendar_april_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: abril.",
    "a": [
      "апрель"
    ],
    "e": "abril — апрель."
  },
  {
    "id": "study_calendar_april_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В апреле часто идёт дождь.»: En ___ llueve mucho.",
    "a": [
      "abril"
    ],
    "e": "En abril llueve mucho. — В апреле часто идёт дождь."
  },
  {
    "id": "study_calendar_may_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: май.",
    "a": [
      "mayo"
    ],
    "e": "Правильный вариант: mayo."
  },
  {
    "id": "study_calendar_may_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: mayo.",
    "a": [
      "май"
    ],
    "e": "mayo — май."
  },
  {
    "id": "study_calendar_may_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В мае хорошая погода.»: En ___ hace buen tiempo.",
    "a": [
      "mayo"
    ],
    "e": "En mayo hace buen tiempo. — В мае хорошая погода."
  },
  {
    "id": "study_calendar_june_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: июнь.",
    "a": [
      "junio"
    ],
    "e": "Правильный вариант: junio."
  },
  {
    "id": "study_calendar_june_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: junio.",
    "a": [
      "июнь"
    ],
    "e": "junio — июнь."
  },
  {
    "id": "study_calendar_june_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Лето начинается в июне.»: El verano empieza en ___.",
    "a": [
      "junio"
    ],
    "e": "El verano empieza en junio. — Лето начинается в июне."
  },
  {
    "id": "study_calendar_july_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: июль.",
    "a": [
      "julio"
    ],
    "e": "Правильный вариант: julio."
  },
  {
    "id": "study_calendar_july_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: julio.",
    "a": [
      "июль"
    ],
    "e": "julio — июль."
  },
  {
    "id": "study_calendar_july_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Июль — жаркий месяц.»: En ___ vamos al mar.",
    "a": [
      "julio"
    ],
    "e": "Julio es un mes caluroso. — Июль — жаркий месяц."
  },
  {
    "id": "study_calendar_august_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: август.",
    "a": [
      "agosto"
    ],
    "e": "Правильный вариант: agosto."
  },
  {
    "id": "study_calendar_august_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: agosto.",
    "a": [
      "август"
    ],
    "e": "agosto — август."
  },
  {
    "id": "study_calendar_august_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В августе у меня отпуск.»: En ___ tengo vacaciones.",
    "a": [
      "agosto"
    ],
    "e": "En agosto tengo vacaciones. — В августе у меня отпуск."
  },
  {
    "id": "study_calendar_september_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: сентябрь.",
    "a": [
      "septiembre"
    ],
    "e": "Правильный вариант: septiembre."
  },
  {
    "id": "study_calendar_september_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: septiembre.",
    "a": [
      "сентябрь"
    ],
    "e": "septiembre — сентябрь."
  },
  {
    "id": "study_calendar_september_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Занятия начинаются в сентябре.»: Las clases empiezan en ___.",
    "a": [
      "septiembre"
    ],
    "e": "Las clases empiezan en septiembre. — Занятия начинаются в сентябре."
  },
  {
    "id": "study_calendar_october_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: октябрь.",
    "a": [
      "octubre"
    ],
    "e": "Правильный вариант: octubre."
  },
  {
    "id": "study_calendar_october_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: octubre.",
    "a": [
      "октябрь"
    ],
    "e": "octubre — октябрь."
  },
  {
    "id": "study_calendar_october_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В октябре листья меняют цвет.»: En ___ las hojas cambian de color.",
    "a": [
      "octubre"
    ],
    "e": "En octubre las hojas cambian de color. — В октябре листья меняют цвет."
  },
  {
    "id": "study_calendar_november_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ноябрь.",
    "a": [
      "noviembre"
    ],
    "e": "Правильный вариант: noviembre."
  },
  {
    "id": "study_calendar_november_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: noviembre.",
    "a": [
      "ноябрь"
    ],
    "e": "noviembre — ноябрь."
  },
  {
    "id": "study_calendar_november_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В ноябре становится холоднее.»: En ___ hace más frío.",
    "a": [
      "noviembre"
    ],
    "e": "En noviembre hace más frío. — В ноябре становится холоднее."
  },
  {
    "id": "study_calendar_december_es",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Вспомни",
    "q": "Переведи на испанский: декабрь.",
    "a": [
      "diciembre"
    ],
    "e": "Правильный вариант: diciembre."
  },
  {
    "id": "study_calendar_december_ru",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "Узнай",
    "q": "Переведи на русский: diciembre.",
    "a": [
      "декабрь"
    ],
    "e": "diciembre — декабрь."
  },
  {
    "id": "study_calendar_december_ctx",
    "topic": "calendar",
    "foodCat": "months",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Декабрь — последний месяц года.»: ___ es el último mes del año.",
    "a": [
      "Diciembre",
      "diciembre"
    ],
    "e": "Diciembre es el último mes del año. — Декабрь — последний месяц года."
  },
  {
    "id": "study_calendar_winter_es",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Вспомни",
    "q": "Переведи на испанский: зима.",
    "a": [
      "invierno",
      "el invierno"
    ],
    "e": "Правильный вариант: el invierno."
  },
  {
    "id": "study_calendar_winter_ru",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Узнай",
    "q": "Переведи на русский: el invierno.",
    "a": [
      "зима"
    ],
    "e": "el invierno — зима."
  },
  {
    "id": "study_calendar_winter_ctx",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Зимой холодно.»: En ___ hace frío.",
    "a": [
      "invierno"
    ],
    "e": "En invierno hace frío. — Зимой холодно."
  },
  {
    "id": "study_calendar_spring_es",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Вспомни",
    "q": "Переведи на испанский: весна.",
    "a": [
      "primavera",
      "la primavera"
    ],
    "e": "Правильный вариант: la primavera."
  },
  {
    "id": "study_calendar_spring_ru",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Узнай",
    "q": "Переведи на русский: la primavera.",
    "a": [
      "весна"
    ],
    "e": "la primavera — весна."
  },
  {
    "id": "study_calendar_spring_ctx",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Весной цветут деревья.»: En ___ florecen los árboles.",
    "a": [
      "primavera"
    ],
    "e": "En primavera florecen los árboles. — Весной цветут деревья."
  },
  {
    "id": "study_calendar_summer_es",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Вспомни",
    "q": "Переведи на испанский: лето.",
    "a": [
      "verano",
      "el verano"
    ],
    "e": "Правильный вариант: el verano."
  },
  {
    "id": "study_calendar_summer_ru",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Узнай",
    "q": "Переведи на русский: el verano.",
    "a": [
      "лето"
    ],
    "e": "el verano — лето."
  },
  {
    "id": "study_calendar_summer_ctx",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Летом я езжу к морю.»: En ___ voy al mar.",
    "a": [
      "verano"
    ],
    "e": "En verano voy al mar. — Летом я езжу к морю."
  },
  {
    "id": "study_calendar_autumn_es",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Вспомни",
    "q": "Переведи на испанский: осень.",
    "a": [
      "otoño",
      "otono",
      "el otoño",
      "el otono"
    ],
    "e": "Правильный вариант: el otoño."
  },
  {
    "id": "study_calendar_autumn_ru",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "Узнай",
    "q": "Переведи на русский: el otoño.",
    "a": [
      "осень"
    ],
    "e": "el otoño — осень."
  },
  {
    "id": "study_calendar_autumn_ctx",
    "topic": "calendar",
    "foodCat": "seasons",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Осенью листья становятся жёлтыми.»: En ___ las hojas se vuelven amarillas.",
    "a": [
      "otoño",
      "otono"
    ],
    "e": "En otoño las hojas se vuelven amarillas. — Осенью листья становятся жёлтыми."
  },
  {
    "id": "choice_calendar_monday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: понедельник; в понедельник.",
    "a": [
      "el lunes"
    ],
    "options": [
      "el lunes",
      "el martes",
      "el miércoles",
      "el jueves"
    ],
    "e": "el lunes — понедельник; в понедельник."
  },
  {
    "id": "choice_calendar_tuesday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вторник; во вторник.",
    "a": [
      "el martes"
    ],
    "options": [
      "el martes",
      "el miércoles",
      "el jueves",
      "el viernes"
    ],
    "e": "el martes — вторник; во вторник."
  },
  {
    "id": "choice_calendar_wednesday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: среда; в среду.",
    "a": [
      "el miércoles"
    ],
    "options": [
      "el miércoles",
      "el jueves",
      "el viernes",
      "el sábado"
    ],
    "e": "el miércoles — среда; в среду."
  },
  {
    "id": "choice_calendar_thursday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: четверг; в четверг.",
    "a": [
      "el jueves"
    ],
    "options": [
      "el jueves",
      "el viernes",
      "el sábado",
      "el domingo"
    ],
    "e": "el jueves — четверг; в четверг."
  },
  {
    "id": "choice_calendar_friday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пятница; в пятницу.",
    "a": [
      "el viernes"
    ],
    "options": [
      "el viernes",
      "el sábado",
      "el domingo",
      "el lunes"
    ],
    "e": "el viernes — пятница; в пятницу."
  },
  {
    "id": "choice_calendar_saturday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: суббота; в субботу.",
    "a": [
      "el sábado"
    ],
    "options": [
      "el sábado",
      "el domingo",
      "el lunes",
      "el martes"
    ],
    "e": "el sábado — суббота; в субботу."
  },
  {
    "id": "choice_calendar_sunday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: воскресенье; в воскресенье.",
    "a": [
      "el domingo"
    ],
    "options": [
      "el domingo",
      "el lunes",
      "el martes",
      "el miércoles"
    ],
    "e": "el domingo — воскресенье; в воскресенье."
  },
  {
    "id": "choice_calendar_january",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: январь.",
    "a": [
      "enero"
    ],
    "options": [
      "enero",
      "septiembre",
      "octubre",
      "noviembre"
    ],
    "e": "enero — январь."
  },
  {
    "id": "choice_calendar_february",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: февраль.",
    "a": [
      "febrero"
    ],
    "options": [
      "febrero",
      "octubre",
      "noviembre",
      "diciembre"
    ],
    "e": "febrero — февраль."
  },
  {
    "id": "choice_calendar_march",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: март.",
    "a": [
      "marzo"
    ],
    "options": [
      "marzo",
      "noviembre",
      "diciembre",
      "enero"
    ],
    "e": "marzo — март."
  },
  {
    "id": "choice_calendar_april",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: апрель.",
    "a": [
      "abril"
    ],
    "options": [
      "abril",
      "diciembre",
      "enero",
      "febrero"
    ],
    "e": "abril — апрель."
  },
  {
    "id": "choice_calendar_may",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: май.",
    "a": [
      "mayo"
    ],
    "options": [
      "mayo",
      "enero",
      "febrero",
      "marzo"
    ],
    "e": "mayo — май."
  },
  {
    "id": "choice_calendar_june",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: июнь.",
    "a": [
      "junio"
    ],
    "options": [
      "junio",
      "febrero",
      "marzo",
      "abril"
    ],
    "e": "junio — июнь."
  },
  {
    "id": "choice_calendar_july",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: июль.",
    "a": [
      "julio"
    ],
    "options": [
      "julio",
      "marzo",
      "abril",
      "mayo"
    ],
    "e": "julio — июль."
  },
  {
    "id": "choice_calendar_august",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: август.",
    "a": [
      "agosto"
    ],
    "options": [
      "agosto",
      "abril",
      "mayo",
      "junio"
    ],
    "e": "agosto — август."
  },
  {
    "id": "choice_calendar_september",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сентябрь.",
    "a": [
      "septiembre"
    ],
    "options": [
      "septiembre",
      "mayo",
      "junio",
      "julio"
    ],
    "e": "septiembre — сентябрь."
  },
  {
    "id": "choice_calendar_october",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: октябрь.",
    "a": [
      "octubre"
    ],
    "options": [
      "octubre",
      "junio",
      "julio",
      "agosto"
    ],
    "e": "octubre — октябрь."
  },
  {
    "id": "choice_calendar_november",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ноябрь.",
    "a": [
      "noviembre"
    ],
    "options": [
      "noviembre",
      "julio",
      "agosto",
      "septiembre"
    ],
    "e": "noviembre — ноябрь."
  },
  {
    "id": "choice_calendar_december",
    "topic": "calendar",
    "foodCat": "months",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: декабрь.",
    "a": [
      "diciembre"
    ],
    "options": [
      "diciembre",
      "agosto",
      "septiembre",
      "octubre"
    ],
    "e": "diciembre — декабрь."
  },
  {
    "id": "choice_calendar_winter",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: зима.",
    "a": [
      "el invierno"
    ],
    "options": [
      "el invierno",
      "el verano",
      "el otoño",
      "la primavera"
    ],
    "e": "el invierno — зима."
  },
  {
    "id": "choice_calendar_spring",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: весна.",
    "a": [
      "la primavera"
    ],
    "options": [
      "la primavera",
      "el otoño",
      "el invierno",
      "el verano"
    ],
    "e": "la primavera — весна."
  },
  {
    "id": "choice_calendar_summer",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: лето.",
    "a": [
      "el verano"
    ],
    "options": [
      "el verano",
      "el invierno",
      "la primavera",
      "el otoño"
    ],
    "e": "el verano — лето."
  },
  {
    "id": "choice_calendar_autumn",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: осень.",
    "a": [
      "el otoño"
    ],
    "options": [
      "el otoño",
      "la primavera",
      "el verano",
      "el invierno"
    ],
    "e": "el otoño — осень."
  },
  {
    "id": "audio_calendar_monday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El lunes voy al trabajo.",
    "a": [
      "El lunes voy al trabajo."
    ],
    "e": "В понедельник я иду на работу."
  },
  {
    "id": "audio_calendar_tuesday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El martes tengo clase.",
    "a": [
      "El martes tengo clase."
    ],
    "e": "Во вторник у меня занятие."
  },
  {
    "id": "audio_calendar_wednesday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El miércoles trabajo desde casa.",
    "a": [
      "El miércoles trabajo desde casa."
    ],
    "e": "В среду я работаю из дома."
  },
  {
    "id": "audio_calendar_thursday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El jueves quedo con Ana.",
    "a": [
      "El jueves quedo con Ana."
    ],
    "e": "В четверг я встречаюсь с Аной."
  },
  {
    "id": "audio_calendar_friday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El viernes descanso en casa.",
    "a": [
      "El viernes descanso en casa."
    ],
    "e": "В пятницу я отдыхаю дома."
  },
  {
    "id": "audio_calendar_saturday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El sábado quedamos con amigos.",
    "a": [
      "El sábado quedamos con amigos."
    ],
    "e": "В субботу мы встречаемся с друзьями."
  },
  {
    "id": "audio_calendar_sunday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El domingo descanso.",
    "a": [
      "El domingo descanso."
    ],
    "e": "В воскресенье я отдыхаю."
  },
  {
    "id": "audio_calendar_january",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Enero es el primer mes del año.",
    "a": [
      "Enero es el primer mes del año."
    ],
    "e": "Январь — первый месяц года."
  },
  {
    "id": "audio_calendar_february",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Febrero es un mes corto.",
    "a": [
      "Febrero es un mes corto."
    ],
    "e": "Февраль — короткий месяц."
  },
  {
    "id": "audio_calendar_march",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Mi cumpleaños es en marzo.",
    "a": [
      "Mi cumpleaños es en marzo."
    ],
    "e": "Мой день рождения в марте."
  },
  {
    "id": "audio_calendar_april",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En abril llueve mucho.",
    "a": [
      "En abril llueve mucho."
    ],
    "e": "В апреле часто идёт дождь."
  },
  {
    "id": "audio_calendar_may",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En mayo hace buen tiempo.",
    "a": [
      "En mayo hace buen tiempo."
    ],
    "e": "В мае хорошая погода."
  },
  {
    "id": "audio_calendar_june",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El verano empieza en junio.",
    "a": [
      "El verano empieza en junio."
    ],
    "e": "Лето начинается в июне."
  },
  {
    "id": "audio_calendar_july",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Julio es un mes caluroso.",
    "a": [
      "Julio es un mes caluroso."
    ],
    "e": "Июль — жаркий месяц."
  },
  {
    "id": "audio_calendar_august",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En agosto tengo vacaciones.",
    "a": [
      "En agosto tengo vacaciones."
    ],
    "e": "В августе у меня отпуск."
  },
  {
    "id": "audio_calendar_september",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Las clases empiezan en septiembre.",
    "a": [
      "Las clases empiezan en septiembre."
    ],
    "e": "Занятия начинаются в сентябре."
  },
  {
    "id": "audio_calendar_october",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En octubre las hojas cambian de color.",
    "a": [
      "En octubre las hojas cambian de color."
    ],
    "e": "В октябре листья меняют цвет."
  },
  {
    "id": "audio_calendar_november",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En noviembre hace más frío.",
    "a": [
      "En noviembre hace más frío."
    ],
    "e": "В ноябре становится холоднее."
  },
  {
    "id": "audio_calendar_december",
    "topic": "calendar",
    "foodCat": "months",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Diciembre es el último mes del año.",
    "a": [
      "Diciembre es el último mes del año."
    ],
    "e": "Декабрь — последний месяц года."
  },
  {
    "id": "audio_calendar_winter",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En invierno hace frío.",
    "a": [
      "En invierno hace frío."
    ],
    "e": "Зимой холодно."
  },
  {
    "id": "audio_calendar_spring",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En primavera florecen los árboles.",
    "a": [
      "En primavera florecen los árboles."
    ],
    "e": "Весной цветут деревья."
  },
  {
    "id": "audio_calendar_summer",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En verano voy al mar.",
    "a": [
      "En verano voy al mar."
    ],
    "e": "Летом я езжу к морю."
  },
  {
    "id": "audio_calendar_autumn",
    "topic": "calendar",
    "foodCat": "seasons",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En otoño las hojas se vuelven amarillas.",
    "a": [
      "En otoño las hojas se vuelven amarillas."
    ],
    "e": "Осенью листья становятся жёлтыми."
  },
  {
    "id": "match_weekdays",
    "topic": "calendar",
    "foodCat": "days",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини дни недели с переводом.",
    "pairs": [
      [
        "lunes",
        "понедельник"
      ],
      [
        "martes",
        "вторник"
      ],
      [
        "miércoles",
        "среда"
      ],
      [
        "jueves",
        "четверг"
      ],
      [
        "viernes",
        "пятница"
      ],
      [
        "sábado",
        "суббота"
      ],
      [
        "domingo",
        "воскресенье"
      ]
    ],
    "a": [
      "понедельник | вторник | среда | четверг | пятница | суббота | воскресенье"
    ],
    "displayAnswer": "lunes — понедельник · martes — вторник · miércoles — среда · jueves — четверг · viernes — пятница · sábado — суббота · domingo — воскресенье",
    "e": "Названия дней недели в испанском пишутся со строчной буквы."
  },
  {
    "id": "context_choice_monday_article",
    "topic": "calendar",
    "foodCat": "days",
    "type": "context-choice",
    "skill": "Выбери точную форму",
    "q": "___ lunes que viene voy al trabajo en metro.",
    "options": [
      "El",
      "En",
      "Al",
      "Un"
    ],
    "a": [
      "El"
    ],
    "e": "Перед конкретным днём недели используется определённый артикль el."
  },
  {
    "id": "ser_estar_hay_monday",
    "topic": "calendar",
    "foodCat": "days",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Mañana ___ lunes.",
    "a": [
      "es"
    ],
    "displayAnswer": "es",
    "e": "День недели называют с ser."
  },
  {
    "id": "sort_auto_calendar_0",
    "topic": "calendar",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Дни и времена года» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "days",
        "title": "Дни недели"
      },
      {
        "id": "months",
        "title": "Месяцы"
      },
      {
        "id": "seasons",
        "title": "Времена года"
      }
    ],
    "sortTokens": [
      {
        "id": "calendar_0_days_monday",
        "text": "el lunes",
        "category": "days"
      },
      {
        "id": "calendar_0_days_tuesday",
        "text": "el martes",
        "category": "days"
      },
      {
        "id": "calendar_0_days_wednesday",
        "text": "el miércoles",
        "category": "days"
      },
      {
        "id": "calendar_0_months_january",
        "text": "enero",
        "category": "months"
      },
      {
        "id": "calendar_0_months_february",
        "text": "febrero",
        "category": "months"
      },
      {
        "id": "calendar_0_months_march",
        "text": "marzo",
        "category": "months"
      },
      {
        "id": "calendar_0_seasons_winter",
        "text": "el invierno",
        "category": "seasons"
      },
      {
        "id": "calendar_0_seasons_spring",
        "text": "la primavera",
        "category": "seasons"
      },
      {
        "id": "calendar_0_seasons_summer",
        "text": "el verano",
        "category": "seasons"
      }
    ],
    "a": [
      "days | days | days | months | months | months | seasons | seasons | seasons"
    ],
    "displayAnswer": "Дни недели: el lunes, el martes, el miércoles · Месяцы: enero, febrero, marzo · Времена года: el invierno, la primavera, el verano",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const calendarTopic = {
  id: "calendar",
  title: "Дни и времена года",
  icon: "☀",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
