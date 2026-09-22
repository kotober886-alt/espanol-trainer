/**
 * Связки и конструкции topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "porque",
    "cat": "cause",
    "word": "porque",
    "gender": "союз · перед предложением",
    "tr": "потому что",
    "ru": [
      "потому что"
    ],
    "answers": [
      "porque"
    ],
    "examples": [
      [
        "No salgo porque llueve.",
        "Я не выхожу, потому что идёт дождь."
      ],
      [
        "Aprendo español porque vivo en Madrid.",
        "Я учу испанский, потому что живу в Мадриде."
      ]
    ],
    "cloze": "No salgo ___ llueve.",
    "clozeAnswers": [
      "porque"
    ],
    "meta": {
      "categoryTitle": "Причина",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "gracias_a",
    "cat": "cause",
    "word": "gracias a",
    "gender": "выражение · перед существительным",
    "tr": "благодаря",
    "ru": [
      "благодаря"
    ],
    "answers": [
      "gracias a"
    ],
    "examples": [
      [
        "Gracias a tu ayuda, terminé a tiempo.",
        "Благодаря твоей помощи я закончила вовремя."
      ],
      [
        "Mejoré mi español gracias a las clases.",
        "Я улучшила испанский благодаря занятиям."
      ]
    ],
    "cloze": "Terminé a tiempo ___ tu ayuda.",
    "clozeAnswers": [
      "gracias a"
    ],
    "meta": {
      "categoryTitle": "Причина",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "gracias_a_que",
    "cat": "cause",
    "word": "gracias a que",
    "gender": "выражение · перед предложением",
    "tr": "благодаря тому, что",
    "ru": [
      "благодаря тому что",
      "благодаря тому, что"
    ],
    "answers": [
      "gracias a que"
    ],
    "examples": [
      [
        "Llegamos a tiempo gracias a que salimos temprano.",
        "Мы приехали вовремя благодаря тому, что вышли рано."
      ],
      [
        "Puedo trabajar desde casa gracias a que tengo internet.",
        "Я могу работать из дома благодаря тому, что у меня есть интернет."
      ]
    ],
    "cloze": "Llegamos a tiempo ___ salimos temprano.",
    "clozeAnswers": [
      "gracias a que"
    ],
    "meta": {
      "categoryTitle": "Причина",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "a_causa_de",
    "cat": "cause",
    "word": "a causa de",
    "gender": "выражение · перед существительным",
    "tr": "из-за, по причине",
    "ru": [
      "из-за",
      "по причине",
      "из за"
    ],
    "answers": [
      "a causa de",
      "debido a"
    ],
    "examples": [
      [
        "El vuelo se canceló a causa de la tormenta.",
        "Рейс отменили из-за шторма."
      ],
      [
        "La calle está cerrada a causa de las obras.",
        "Улица закрыта из-за ремонтных работ."
      ]
    ],
    "cloze": "El vuelo se canceló ___ la tormenta.",
    "clozeAnswers": [
      "a causa de",
      "debido a"
    ],
    "meta": {
      "categoryTitle": "Причина",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "debido_a",
    "cat": "cause",
    "word": "debido a",
    "gender": "выражение · нейтрально-официальное",
    "tr": "вследствие, из-за",
    "ru": [
      "вследствие",
      "из-за",
      "из за"
    ],
    "answers": [
      "debido a",
      "a causa de"
    ],
    "examples": [
      [
        "La reunión se pospuso debido a un problema técnico.",
        "Встречу отложили из-за технической проблемы."
      ],
      [
        "El tren se retrasó debido a la nieve.",
        "Поезд задержался из-за снега."
      ]
    ],
    "cloze": "El tren se retrasó ___ la nieve.",
    "clozeAnswers": [
      "debido a",
      "a causa de"
    ],
    "meta": {
      "categoryTitle": "Причина",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "debido_a_que",
    "cat": "cause",
    "word": "debido a que",
    "gender": "выражение · перед предложением",
    "tr": "из-за того, что; вследствие того, что",
    "ru": [
      "из-за того что",
      "из за того что",
      "вследствие того что"
    ],
    "answers": [
      "debido a que",
      "a causa de que"
    ],
    "examples": [
      [
        "Nos quedamos en casa debido a que llovía mucho.",
        "Мы остались дома из-за того, что шёл сильный дождь."
      ],
      [
        "La tienda cerró antes debido a que no había clientes.",
        "Магазин закрылся раньше из-за того, что не было покупателей."
      ]
    ],
    "cloze": "Nos quedamos en casa ___ llovía mucho.",
    "clozeAnswers": [
      "debido a que",
      "a causa de que"
    ],
    "meta": {
      "categoryTitle": "Причина",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "por_culpa_de",
    "cat": "cause",
    "word": "por culpa de",
    "gender": "выражение · отрицательная причина",
    "tr": "по вине, из-за",
    "ru": [
      "по вине",
      "из-за",
      "из за"
    ],
    "answers": [
      "por culpa de"
    ],
    "examples": [
      [
        "Llegamos tarde por culpa del tráfico.",
        "Мы опоздали из-за пробок."
      ],
      [
        "No dormí bien por culpa del ruido.",
        "Я плохо спала из-за шума."
      ]
    ],
    "cloze": "Llegamos tarde ___ tráfico.",
    "clozeAnswers": [
      "por culpa del"
    ],
    "meta": {
      "categoryTitle": "Причина",
      "categoryOrder": 1,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "por_eso",
    "cat": "result",
    "word": "por eso",
    "gender": "связка",
    "tr": "поэтому, вот почему",
    "ru": [
      "поэтому",
      "вот почему"
    ],
    "answers": [
      "por eso"
    ],
    "examples": [
      [
        "Estoy cansada, por eso descanso.",
        "Я устала, поэтому отдыхаю."
      ],
      [
        "Mañana trabajo, por eso me acuesto temprano.",
        "Завтра я работаю, поэтому ложусь рано."
      ]
    ],
    "cloze": "Estoy cansada, ___ descanso.",
    "clozeAnswers": [
      "por eso"
    ],
    "meta": {
      "categoryTitle": "Следствие",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "asi_que",
    "cat": "result",
    "word": "así que",
    "gender": "связка",
    "tr": "так что",
    "ru": [
      "так что",
      "поэтому"
    ],
    "answers": [
      "así que",
      "asi que"
    ],
    "examples": [
      [
        "Llueve, así que me quedo en casa.",
        "Идёт дождь, так что я остаюсь дома."
      ],
      [
        "No tenemos pan, así que voy a la tienda.",
        "У нас нет хлеба, так что я иду в магазин."
      ]
    ],
    "cloze": "Llueve, ___ me quedo en casa.",
    "clozeAnswers": [
      "así que",
      "asi que"
    ],
    "meta": {
      "categoryTitle": "Следствие",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "entonces",
    "cat": "result",
    "word": "entonces",
    "gender": "наречие-связка",
    "tr": "тогда, в таком случае",
    "ru": [
      "тогда",
      "в таком случае"
    ],
    "answers": [
      "entonces"
    ],
    "examples": [
      [
        "No había autobuses, entonces fuimos a pie.",
        "Автобусов не было, тогда мы пошли пешком."
      ],
      [
        "¿Estás libre? Entonces podemos quedar.",
        "Ты свободна? Тогда мы можем встретиться."
      ]
    ],
    "cloze": "¿Estás libre? ___ podemos quedar.",
    "clozeAnswers": [
      "entonces"
    ],
    "meta": {
      "categoryTitle": "Следствие",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "por_lo_tanto",
    "cat": "result",
    "word": "por lo tanto",
    "gender": "связка · более формальная",
    "tr": "следовательно",
    "ru": [
      "следовательно",
      "таким образом"
    ],
    "answers": [
      "por lo tanto"
    ],
    "examples": [
      [
        "Ha estudiado mucho; por lo tanto, aprobará.",
        "Она много занималась; следовательно, она сдаст экзамен."
      ],
      [
        "La tienda está cerrada; por lo tanto, volveremos mañana.",
        "Магазин закрыт; следовательно, мы вернёмся завтра."
      ]
    ],
    "cloze": "Ha estudiado mucho; ___ aprobará.",
    "clozeAnswers": [
      "por lo tanto"
    ],
    "meta": {
      "categoryTitle": "Следствие",
      "categoryOrder": 2,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "pero",
    "cat": "contrast",
    "word": "pero",
    "gender": "союз",
    "tr": "но",
    "ru": [
      "но"
    ],
    "answers": [
      "pero"
    ],
    "examples": [
      [
        "Quiero ir, pero no tengo tiempo.",
        "Я хочу пойти, но у меня нет времени."
      ],
      [
        "El piso es pequeño, pero cómodo.",
        "Квартира маленькая, но удобная."
      ]
    ],
    "cloze": "Quiero ir, ___ no tengo tiempo.",
    "clozeAnswers": [
      "pero"
    ],
    "meta": {
      "categoryTitle": "Противопоставление",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "aunque",
    "cat": "contrast",
    "word": "aunque",
    "gender": "союз",
    "tr": "хотя",
    "ru": [
      "хотя"
    ],
    "answers": [
      "aunque"
    ],
    "examples": [
      [
        "Aunque estoy cansada, voy al gimnasio.",
        "Хотя я устала, я иду в спортзал."
      ],
      [
        "Salimos aunque llueve.",
        "Мы выходим, хотя идёт дождь."
      ]
    ],
    "cloze": "___ estoy cansada, voy al gimnasio.",
    "clozeAnswers": [
      "aunque"
    ],
    "meta": {
      "categoryTitle": "Противопоставление",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "sin_embargo",
    "cat": "contrast",
    "word": "sin embargo",
    "gender": "связка",
    "tr": "однако, тем не менее",
    "ru": [
      "однако",
      "тем не менее"
    ],
    "answers": [
      "sin embargo"
    ],
    "examples": [
      [
        "Este producto es caro; sin embargo, es muy bueno.",
        "Этот товар дорогой; однако он очень хороший."
      ],
      [
        "Estaba cansada; sin embargo, terminé el trabajo.",
        "Я устала; тем не менее я закончила работу."
      ]
    ],
    "cloze": "Este producto es caro; ___ es muy bueno.",
    "clozeAnswers": [
      "sin embargo"
    ],
    "meta": {
      "categoryTitle": "Противопоставление",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "en_cambio",
    "cat": "contrast",
    "word": "en cambio",
    "gender": "связка",
    "tr": "зато, в отличие от этого",
    "ru": [
      "зато",
      "в отличие от этого",
      "напротив"
    ],
    "answers": [
      "en cambio"
    ],
    "examples": [
      [
        "Mi barrio es tranquilo; el centro, en cambio, es ruidoso.",
        "Мой район тихий, а центр, напротив, шумный."
      ],
      [
        "A mí me gusta el té; ella, en cambio, prefiere café.",
        "Мне нравится чай, а она, напротив, предпочитает кофе."
      ]
    ],
    "cloze": "Mi barrio es tranquilo; el centro, ___, es ruidoso.",
    "clozeAnswers": [
      "en cambio"
    ],
    "meta": {
      "categoryTitle": "Противопоставление",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "a_pesar_de",
    "cat": "contrast",
    "word": "a pesar de",
    "gender": "выражение · перед существительным или инфинитивом",
    "tr": "несмотря на",
    "ru": [
      "несмотря на"
    ],
    "answers": [
      "a pesar de"
    ],
    "examples": [
      [
        "A pesar de la lluvia, salimos.",
        "Несмотря на дождь, мы вышли."
      ],
      [
        "A pesar de estar cansada, fui al gimnasio.",
        "Несмотря на усталость, я пошла в спортзал."
      ]
    ],
    "cloze": "___ la lluvia, salimos.",
    "clozeAnswers": [
      "a pesar de"
    ],
    "meta": {
      "categoryTitle": "Противопоставление",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "a_pesar_de_que",
    "cat": "contrast",
    "word": "a pesar de que",
    "gender": "выражение · перед предложением",
    "tr": "несмотря на то, что",
    "ru": [
      "несмотря на то что",
      "несмотря на то, что"
    ],
    "answers": [
      "a pesar de que"
    ],
    "examples": [
      [
        "A pesar de que estaba cansada, terminé el trabajo.",
        "Несмотря на то, что я устала, я закончила работу."
      ],
      [
        "Salimos a pesar de que llovía.",
        "Мы вышли, несмотря на то, что шёл дождь."
      ]
    ],
    "cloze": "___ estaba cansada, terminé el trabajo.",
    "clozeAnswers": [
      "a pesar de que"
    ],
    "meta": {
      "categoryTitle": "Противопоставление",
      "categoryOrder": 3,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "en_vez_de",
    "cat": "replacement",
    "word": "en vez de",
    "gender": "выражение · перед существительным или инфинитивом",
    "tr": "вместо",
    "ru": [
      "вместо"
    ],
    "answers": [
      "en vez de",
      "en lugar de"
    ],
    "examples": [
      [
        "Leo en vez de ver la televisión.",
        "Я читаю вместо того, чтобы смотреть телевизор."
      ],
      [
        "Compré té en vez de café.",
        "Я купила чай вместо кофе."
      ]
    ],
    "cloze": "Leo ___ ver la televisión.",
    "clozeAnswers": [
      "en vez de",
      "en lugar de"
    ],
    "meta": {
      "categoryTitle": "Замена",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "en_lugar_de",
    "cat": "replacement",
    "word": "en lugar de",
    "gender": "выражение · перед существительным или инфинитивом",
    "tr": "вместо",
    "ru": [
      "вместо"
    ],
    "answers": [
      "en lugar de",
      "en vez de"
    ],
    "examples": [
      [
        "Tomo té en lugar de café.",
        "Я пью чай вместо кофе."
      ],
      [
        "Fuimos a pie en lugar de esperar el autobús.",
        "Мы пошли пешком вместо того, чтобы ждать автобус."
      ]
    ],
    "cloze": "Tomo té ___ café.",
    "clozeAnswers": [
      "en lugar de",
      "en vez de"
    ],
    "meta": {
      "categoryTitle": "Замена",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "en_vez_de_eso",
    "cat": "replacement",
    "word": "en vez de eso",
    "gender": "самостоятельная связка",
    "tr": "вместо этого",
    "ru": [
      "вместо этого"
    ],
    "answers": [
      "en vez de eso",
      "en su lugar"
    ],
    "examples": [
      [
        "No fui de compras; en vez de eso, descansé.",
        "Я не пошла за покупками; вместо этого я отдохнула."
      ],
      [
        "No llamé; en vez de eso, escribí un mensaje.",
        "Я не позвонила; вместо этого написала сообщение."
      ]
    ],
    "cloze": "No fui de compras; ___, descansé.",
    "clozeAnswers": [
      "en vez de eso",
      "en su lugar"
    ],
    "meta": {
      "categoryTitle": "Замена",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "en_su_lugar",
    "cat": "replacement",
    "word": "en su lugar",
    "gender": "самостоятельная связка",
    "tr": "вместо этого",
    "ru": [
      "вместо этого"
    ],
    "answers": [
      "en su lugar",
      "en vez de eso"
    ],
    "examples": [
      [
        "No compré el vestido; en su lugar, compré una chaqueta.",
        "Я не купила платье; вместо него купила куртку."
      ],
      [
        "No fuimos al cine; en su lugar, paseamos por el parque.",
        "Мы не пошли в кино; вместо этого погуляли в парке."
      ]
    ],
    "cloze": "No fuimos al cine; ___, paseamos por el parque.",
    "clozeAnswers": [
      "en su lugar",
      "en vez de eso"
    ],
    "meta": {
      "categoryTitle": "Замена",
      "categoryOrder": 4,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "tambien",
    "cat": "addition",
    "word": "también",
    "gender": "наречие",
    "tr": "тоже, также",
    "ru": [
      "тоже",
      "также"
    ],
    "answers": [
      "también",
      "tambien"
    ],
    "examples": [
      [
        "Estudio español y también inglés.",
        "Я учу испанский, а также английский."
      ],
      [
        "Yo también quiero ir.",
        "Я тоже хочу пойти."
      ]
    ],
    "cloze": "Yo ___ quiero ir.",
    "clozeAnswers": [
      "también",
      "tambien"
    ],
    "meta": {
      "categoryTitle": "Дополнение",
      "categoryOrder": 5,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "ademas",
    "cat": "addition",
    "word": "además",
    "gender": "наречие-связка",
    "tr": "кроме того, к тому же",
    "ru": [
      "кроме того",
      "к тому же"
    ],
    "answers": [
      "además",
      "ademas"
    ],
    "examples": [
      [
        "El piso es bonito y, además, barato.",
        "Квартира красивая и, кроме того, недорогая."
      ],
      [
        "Habla español y además entiende italiano.",
        "Она говорит по-испански и к тому же понимает итальянский."
      ]
    ],
    "cloze": "El piso es bonito y, ___, barato.",
    "clozeAnswers": [
      "además",
      "ademas"
    ],
    "meta": {
      "categoryTitle": "Дополнение",
      "categoryOrder": 5,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "incluso",
    "cat": "addition",
    "word": "incluso",
    "gender": "наречие",
    "tr": "даже",
    "ru": [
      "даже"
    ],
    "answers": [
      "incluso"
    ],
    "examples": [
      [
        "Todos vinieron, incluso Ana.",
        "Пришли все, даже Ана."
      ],
      [
        "Entiendo mucho, incluso las palabras difíciles.",
        "Я понимаю многое, даже сложные слова."
      ]
    ],
    "cloze": "Todos vinieron, ___ Ana.",
    "clozeAnswers": [
      "incluso"
    ],
    "meta": {
      "categoryTitle": "Дополнение",
      "categoryOrder": 5,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "no_solo",
    "cat": "addition",
    "word": "no solo… sino también",
    "gender": "парная конструкция",
    "tr": "не только… но и",
    "ru": [
      "не только но и",
      "не только но также"
    ],
    "answers": [
      "no solo sino también",
      "no solo... sino también",
      "no solo sino tambien"
    ],
    "examples": [
      [
        "No solo habla español, sino también inglés.",
        "Она говорит не только по-испански, но и по-английски."
      ],
      [
        "No solo compré pan, sino también queso.",
        "Я купила не только хлеб, но и сыр."
      ]
    ],
    "cloze": "No solo compré pan, ___ queso.",
    "clozeAnswers": [
      "sino también",
      "sino tambien"
    ],
    "meta": {
      "categoryTitle": "Дополнение",
      "categoryOrder": 5,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "primero",
    "cat": "sequence",
    "word": "primero",
    "gender": "наречие",
    "tr": "сначала, сперва",
    "ru": [
      "сначала",
      "сперва"
    ],
    "answers": [
      "primero"
    ],
    "examples": [
      [
        "Primero desayuno y después trabajo.",
        "Сначала я завтракаю, а потом работаю."
      ],
      [
        "Primero lee la pregunta.",
        "Сначала прочитай вопрос."
      ]
    ],
    "cloze": "___ desayuno y después trabajo.",
    "clozeAnswers": [
      "primero"
    ],
    "meta": {
      "categoryTitle": "Последовательность",
      "categoryOrder": 6,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "despues",
    "cat": "sequence",
    "word": "después",
    "gender": "наречие",
    "tr": "после, потом",
    "ru": [
      "после",
      "потом"
    ],
    "answers": [
      "después",
      "despues"
    ],
    "examples": [
      [
        "Después del trabajo voy a casa.",
        "После работы я иду домой."
      ],
      [
        "Primero estudiamos y después descansamos.",
        "Сначала мы занимаемся, а потом отдыхаем."
      ]
    ],
    "cloze": "Primero estudiamos y ___ descansamos.",
    "clozeAnswers": [
      "después",
      "despues"
    ],
    "meta": {
      "categoryTitle": "Последовательность",
      "categoryOrder": 6,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "luego",
    "cat": "sequence",
    "word": "luego",
    "gender": "наречие",
    "tr": "затем, потом",
    "ru": [
      "затем",
      "потом"
    ],
    "answers": [
      "luego"
    ],
    "examples": [
      [
        "Ceno y luego leo.",
        "Я ужинаю, а затем читаю."
      ],
      [
        "Primero llama y luego escribe.",
        "Сначала позвони, а затем напиши."
      ]
    ],
    "cloze": "Ceno y ___ leo.",
    "clozeAnswers": [
      "luego"
    ],
    "meta": {
      "categoryTitle": "Последовательность",
      "categoryOrder": 6,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "finalmente",
    "cat": "sequence",
    "word": "finalmente",
    "gender": "наречие-связка",
    "tr": "наконец, в конечном итоге",
    "ru": [
      "наконец",
      "в конечном итоге"
    ],
    "answers": [
      "finalmente"
    ],
    "examples": [
      [
        "Finalmente encontramos la dirección.",
        "Наконец мы нашли адрес."
      ],
      [
        "Finalmente decidió quedarse.",
        "В конечном итоге она решила остаться."
      ]
    ],
    "cloze": "___ encontramos la dirección.",
    "clozeAnswers": [
      "finalmente"
    ],
    "meta": {
      "categoryTitle": "Последовательность",
      "categoryOrder": 6,
      "allCategoryTitle": "Все"
    }
  },
  {
    "id": "al_final",
    "cat": "sequence",
    "word": "al final",
    "gender": "связка",
    "tr": "в конце, в итоге",
    "ru": [
      "в конце",
      "в итоге"
    ],
    "answers": [
      "al final"
    ],
    "examples": [
      [
        "Al final decidimos quedarnos en casa.",
        "В итоге мы решили остаться дома."
      ],
      [
        "Al final de la película todos lloraron.",
        "В конце фильма все плакали."
      ]
    ],
    "cloze": "___ decidimos quedarnos en casa.",
    "clozeAnswers": [
      "al final"
    ],
    "meta": {
      "categoryTitle": "Последовательность",
      "categoryOrder": 6,
      "allCategoryTitle": "Все"
    }
  }
];

const EXERCISES = [
  {
    "id": "study_connectors_porque_es",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Вспомни",
    "q": "Переведи на испанский: потому что.",
    "a": [
      "porque"
    ],
    "e": "Правильный вариант: porque."
  },
  {
    "id": "study_connectors_porque_ru",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Узнай",
    "q": "Переведи на русский: porque.",
    "a": [
      "потому что"
    ],
    "e": "porque — потому что."
  },
  {
    "id": "study_connectors_porque_ctx",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я не выхожу, потому что идёт дождь.»: No salgo ___ llueve.",
    "a": [
      "porque"
    ],
    "e": "No salgo porque llueve. — Я не выхожу, потому что идёт дождь."
  },
  {
    "id": "study_connectors_gracias_a_es",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Вспомни",
    "q": "Переведи на испанский: благодаря.",
    "a": [
      "gracias a"
    ],
    "e": "Правильный вариант: gracias a."
  },
  {
    "id": "study_connectors_gracias_a_ru",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Узнай",
    "q": "Переведи на русский: gracias a.",
    "a": [
      "благодаря"
    ],
    "e": "gracias a — благодаря."
  },
  {
    "id": "study_connectors_gracias_a_ctx",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Благодаря твоей помощи я закончила вовремя.»: Terminé a tiempo ___ tu ayuda.",
    "a": [
      "gracias a"
    ],
    "e": "Gracias a tu ayuda, terminé a tiempo. — Благодаря твоей помощи я закончила вовремя."
  },
  {
    "id": "study_connectors_gracias_a_que_es",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Вспомни",
    "q": "Переведи на испанский: благодаря тому, что.",
    "a": [
      "gracias a que"
    ],
    "e": "Правильный вариант: gracias a que."
  },
  {
    "id": "study_connectors_gracias_a_que_ru",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Узнай",
    "q": "Переведи на русский: gracias a que.",
    "a": [
      "благодаря тому что",
      "благодаря тому, что"
    ],
    "e": "gracias a que — благодаря тому, что."
  },
  {
    "id": "study_connectors_gracias_a_que_ctx",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы приехали вовремя благодаря тому, что вышли рано.»: Llegamos a tiempo ___ salimos temprano.",
    "a": [
      "gracias a que"
    ],
    "e": "Llegamos a tiempo gracias a que salimos temprano. — Мы приехали вовремя благодаря тому, что вышли рано."
  },
  {
    "id": "study_connectors_a_causa_de_es",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Вспомни",
    "q": "Переведи на испанский: из-за, по причине.",
    "a": [
      "a causa de",
      "debido a"
    ],
    "e": "Правильный вариант: a causa de."
  },
  {
    "id": "study_connectors_a_causa_de_ru",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Узнай",
    "q": "Переведи на русский: a causa de.",
    "a": [
      "из-за",
      "по причине",
      "из за",
      "из-за, по причине"
    ],
    "e": "a causa de — из-за, по причине."
  },
  {
    "id": "study_connectors_a_causa_de_ctx",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Рейс отменили из-за шторма.»: El vuelo se canceló ___ la tormenta.",
    "a": [
      "a causa de",
      "debido a"
    ],
    "e": "El vuelo se canceló a causa de la tormenta. — Рейс отменили из-за шторма."
  },
  {
    "id": "study_connectors_debido_a_es",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вследствие, из-за.",
    "a": [
      "debido a",
      "a causa de"
    ],
    "e": "Правильный вариант: debido a."
  },
  {
    "id": "study_connectors_debido_a_ru",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Узнай",
    "q": "Переведи на русский: debido a.",
    "a": [
      "вследствие",
      "из-за",
      "из за",
      "вследствие, из-за"
    ],
    "e": "debido a — вследствие, из-за."
  },
  {
    "id": "study_connectors_debido_a_ctx",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Встречу отложили из-за технической проблемы.»: El tren se retrasó ___ la nieve.",
    "a": [
      "debido a",
      "a causa de"
    ],
    "e": "La reunión se pospuso debido a un problema técnico. — Встречу отложили из-за технической проблемы."
  },
  {
    "id": "study_connectors_debido_a_que_es",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Вспомни",
    "q": "Переведи на испанский: из-за того, что; вследствие того, что.",
    "a": [
      "debido a que",
      "a causa de que"
    ],
    "e": "Правильный вариант: debido a que."
  },
  {
    "id": "study_connectors_debido_a_que_ru",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Узнай",
    "q": "Переведи на русский: debido a que.",
    "a": [
      "из-за того что",
      "из за того что",
      "вследствие того что",
      "из-за того, что; вследствие того, что"
    ],
    "e": "debido a que — из-за того, что; вследствие того, что."
  },
  {
    "id": "study_connectors_debido_a_que_ctx",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы остались дома из-за того, что шёл сильный дождь.»: Nos quedamos en casa ___ llovía mucho.",
    "a": [
      "debido a que",
      "a causa de que"
    ],
    "e": "Nos quedamos en casa debido a que llovía mucho. — Мы остались дома из-за того, что шёл сильный дождь."
  },
  {
    "id": "study_connectors_por_culpa_de_es",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Вспомни",
    "q": "Переведи на испанский: по вине, из-за.",
    "a": [
      "por culpa de"
    ],
    "e": "Правильный вариант: por culpa de."
  },
  {
    "id": "study_connectors_por_culpa_de_ru",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "Узнай",
    "q": "Переведи на русский: por culpa de.",
    "a": [
      "по вине",
      "из-за",
      "из за",
      "по вине, из-за"
    ],
    "e": "por culpa de — по вине, из-за."
  },
  {
    "id": "study_connectors_por_culpa_de_ctx",
    "topic": "connectors",
    "foodCat": "cause",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы опоздали из-за пробок.»: Llegamos tarde ___ tráfico.",
    "a": [
      "por culpa del"
    ],
    "e": "Llegamos tarde por culpa del tráfico. — Мы опоздали из-за пробок."
  },
  {
    "id": "study_connectors_por_eso_es",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Вспомни",
    "q": "Переведи на испанский: поэтому, вот почему.",
    "a": [
      "por eso"
    ],
    "e": "Правильный вариант: por eso."
  },
  {
    "id": "study_connectors_por_eso_ru",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Узнай",
    "q": "Переведи на русский: por eso.",
    "a": [
      "поэтому",
      "вот почему",
      "поэтому, вот почему"
    ],
    "e": "por eso — поэтому, вот почему."
  },
  {
    "id": "study_connectors_por_eso_ctx",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я устала, поэтому отдыхаю.»: Estoy cansada, ___ descanso.",
    "a": [
      "por eso"
    ],
    "e": "Estoy cansada, por eso descanso. — Я устала, поэтому отдыхаю."
  },
  {
    "id": "study_connectors_asi_que_es",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Вспомни",
    "q": "Переведи на испанский: так что.",
    "a": [
      "así que",
      "asi que"
    ],
    "e": "Правильный вариант: así que."
  },
  {
    "id": "study_connectors_asi_que_ru",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Узнай",
    "q": "Переведи на русский: así que.",
    "a": [
      "так что",
      "поэтому"
    ],
    "e": "así que — так что."
  },
  {
    "id": "study_connectors_asi_que_ctx",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Идёт дождь, так что я остаюсь дома.»: Llueve, ___ me quedo en casa.",
    "a": [
      "así que",
      "asi que"
    ],
    "e": "Llueve, así que me quedo en casa. — Идёт дождь, так что я остаюсь дома."
  },
  {
    "id": "study_connectors_entonces_es",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тогда, в таком случае.",
    "a": [
      "entonces"
    ],
    "e": "Правильный вариант: entonces."
  },
  {
    "id": "study_connectors_entonces_ru",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Узнай",
    "q": "Переведи на русский: entonces.",
    "a": [
      "тогда",
      "в таком случае",
      "тогда, в таком случае"
    ],
    "e": "entonces — тогда, в таком случае."
  },
  {
    "id": "study_connectors_entonces_ctx",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Автобусов не было, тогда мы пошли пешком.»: ¿Estás libre? ___ podemos quedar.",
    "a": [
      "entonces"
    ],
    "e": "No había autobuses, entonces fuimos a pie. — Автобусов не было, тогда мы пошли пешком."
  },
  {
    "id": "study_connectors_por_lo_tanto_es",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Вспомни",
    "q": "Переведи на испанский: следовательно.",
    "a": [
      "por lo tanto"
    ],
    "e": "Правильный вариант: por lo tanto."
  },
  {
    "id": "study_connectors_por_lo_tanto_ru",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "Узнай",
    "q": "Переведи на русский: por lo tanto.",
    "a": [
      "следовательно",
      "таким образом"
    ],
    "e": "por lo tanto — следовательно."
  },
  {
    "id": "study_connectors_por_lo_tanto_ctx",
    "topic": "connectors",
    "foodCat": "result",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Она много занималась; следовательно, она сдаст экзамен.»: Ha estudiado mucho; ___ aprobará.",
    "a": [
      "por lo tanto"
    ],
    "e": "Ha estudiado mucho; por lo tanto, aprobará. — Она много занималась; следовательно, она сдаст экзамен."
  },
  {
    "id": "study_connectors_pero_es",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Вспомни",
    "q": "Переведи на испанский: но.",
    "a": [
      "pero"
    ],
    "e": "Правильный вариант: pero."
  },
  {
    "id": "study_connectors_pero_ru",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Узнай",
    "q": "Переведи на русский: pero.",
    "a": [
      "но"
    ],
    "e": "pero — но."
  },
  {
    "id": "study_connectors_pero_ctx",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я хочу пойти, но у меня нет времени.»: Quiero ir, ___ no tengo tiempo.",
    "a": [
      "pero"
    ],
    "e": "Quiero ir, pero no tengo tiempo. — Я хочу пойти, но у меня нет времени."
  },
  {
    "id": "study_connectors_aunque_es",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Вспомни",
    "q": "Переведи на испанский: хотя.",
    "a": [
      "aunque"
    ],
    "e": "Правильный вариант: aunque."
  },
  {
    "id": "study_connectors_aunque_ru",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Узнай",
    "q": "Переведи на русский: aunque.",
    "a": [
      "хотя"
    ],
    "e": "aunque — хотя."
  },
  {
    "id": "study_connectors_aunque_ctx",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Хотя я устала, я иду в спортзал.»: ___ estoy cansada, voy al gimnasio.",
    "a": [
      "aunque"
    ],
    "e": "Aunque estoy cansada, voy al gimnasio. — Хотя я устала, я иду в спортзал."
  },
  {
    "id": "study_connectors_sin_embargo_es",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Вспомни",
    "q": "Переведи на испанский: однако, тем не менее.",
    "a": [
      "sin embargo"
    ],
    "e": "Правильный вариант: sin embargo."
  },
  {
    "id": "study_connectors_sin_embargo_ru",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Узнай",
    "q": "Переведи на русский: sin embargo.",
    "a": [
      "однако",
      "тем не менее",
      "однако, тем не менее"
    ],
    "e": "sin embargo — однако, тем не менее."
  },
  {
    "id": "study_connectors_sin_embargo_ctx",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Этот товар дорогой; однако он очень хороший.»: Este producto es caro; ___ es muy bueno.",
    "a": [
      "sin embargo"
    ],
    "e": "Este producto es caro; sin embargo, es muy bueno. — Этот товар дорогой; однако он очень хороший."
  },
  {
    "id": "study_connectors_en_cambio_es",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Вспомни",
    "q": "Переведи на испанский: зато, в отличие от этого.",
    "a": [
      "en cambio"
    ],
    "e": "Правильный вариант: en cambio."
  },
  {
    "id": "study_connectors_en_cambio_ru",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Узнай",
    "q": "Переведи на русский: en cambio.",
    "a": [
      "зато",
      "в отличие от этого",
      "напротив",
      "зато, в отличие от этого"
    ],
    "e": "en cambio — зато, в отличие от этого."
  },
  {
    "id": "study_connectors_en_cambio_ctx",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мой район тихий, а центр, напротив, шумный.»: Mi barrio es tranquilo; el centro, ___, es ruidoso.",
    "a": [
      "en cambio"
    ],
    "e": "Mi barrio es tranquilo; el centro, en cambio, es ruidoso. — Мой район тихий, а центр, напротив, шумный."
  },
  {
    "id": "study_connectors_a_pesar_de_es",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Вспомни",
    "q": "Переведи на испанский: несмотря на.",
    "a": [
      "a pesar de"
    ],
    "e": "Правильный вариант: a pesar de."
  },
  {
    "id": "study_connectors_a_pesar_de_ru",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Узнай",
    "q": "Переведи на русский: a pesar de.",
    "a": [
      "несмотря на"
    ],
    "e": "a pesar de — несмотря на."
  },
  {
    "id": "study_connectors_a_pesar_de_ctx",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Несмотря на дождь, мы вышли.»: ___ la lluvia, salimos.",
    "a": [
      "a pesar de"
    ],
    "e": "A pesar de la lluvia, salimos. — Несмотря на дождь, мы вышли."
  },
  {
    "id": "study_connectors_a_pesar_de_que_es",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Вспомни",
    "q": "Переведи на испанский: несмотря на то, что.",
    "a": [
      "a pesar de que"
    ],
    "e": "Правильный вариант: a pesar de que."
  },
  {
    "id": "study_connectors_a_pesar_de_que_ru",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "Узнай",
    "q": "Переведи на русский: a pesar de que.",
    "a": [
      "несмотря на то что",
      "несмотря на то, что"
    ],
    "e": "a pesar de que — несмотря на то, что."
  },
  {
    "id": "study_connectors_a_pesar_de_que_ctx",
    "topic": "connectors",
    "foodCat": "contrast",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Несмотря на то, что я устала, я закончила работу.»: ___ estaba cansada, terminé el trabajo.",
    "a": [
      "a pesar de que"
    ],
    "e": "A pesar de que estaba cansada, terminé el trabajo. — Несмотря на то, что я устала, я закончила работу."
  },
  {
    "id": "study_connectors_en_vez_de_es",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вместо.",
    "a": [
      "en vez de",
      "en lugar de"
    ],
    "e": "Правильный вариант: en vez de."
  },
  {
    "id": "study_connectors_en_vez_de_ru",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Узнай",
    "q": "Переведи на русский: en vez de.",
    "a": [
      "вместо"
    ],
    "e": "en vez de — вместо."
  },
  {
    "id": "study_connectors_en_vez_de_ctx",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я читаю вместо того, чтобы смотреть телевизор.»: Leo ___ ver la televisión.",
    "a": [
      "en vez de",
      "en lugar de"
    ],
    "e": "Leo en vez de ver la televisión. — Я читаю вместо того, чтобы смотреть телевизор."
  },
  {
    "id": "study_connectors_en_lugar_de_es",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вместо.",
    "a": [
      "en lugar de",
      "en vez de"
    ],
    "e": "Правильный вариант: en lugar de."
  },
  {
    "id": "study_connectors_en_lugar_de_ru",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Узнай",
    "q": "Переведи на русский: en lugar de.",
    "a": [
      "вместо"
    ],
    "e": "en lugar de — вместо."
  },
  {
    "id": "study_connectors_en_lugar_de_ctx",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пью чай вместо кофе.»: Tomo té ___ café.",
    "a": [
      "en lugar de",
      "en vez de"
    ],
    "e": "Tomo té en lugar de café. — Я пью чай вместо кофе."
  },
  {
    "id": "study_connectors_en_vez_de_eso_es",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вместо этого.",
    "a": [
      "en vez de eso",
      "en su lugar"
    ],
    "e": "Правильный вариант: en vez de eso."
  },
  {
    "id": "study_connectors_en_vez_de_eso_ru",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Узнай",
    "q": "Переведи на русский: en vez de eso.",
    "a": [
      "вместо этого"
    ],
    "e": "en vez de eso — вместо этого."
  },
  {
    "id": "study_connectors_en_vez_de_eso_ctx",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я не пошла за покупками; вместо этого я отдохнула.»: No fui de compras; ___, descansé.",
    "a": [
      "en vez de eso",
      "en su lugar"
    ],
    "e": "No fui de compras; en vez de eso, descansé. — Я не пошла за покупками; вместо этого я отдохнула."
  },
  {
    "id": "study_connectors_en_su_lugar_es",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вместо этого.",
    "a": [
      "en su lugar",
      "en vez de eso"
    ],
    "e": "Правильный вариант: en su lugar."
  },
  {
    "id": "study_connectors_en_su_lugar_ru",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "Узнай",
    "q": "Переведи на русский: en su lugar.",
    "a": [
      "вместо этого"
    ],
    "e": "en su lugar — вместо этого."
  },
  {
    "id": "study_connectors_en_su_lugar_ctx",
    "topic": "connectors",
    "foodCat": "replacement",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я не купила платье; вместо него купила куртку.»: No fuimos al cine; ___, paseamos por el parque.",
    "a": [
      "en su lugar",
      "en vez de eso"
    ],
    "e": "No compré el vestido; en su lugar, compré una chaqueta. — Я не купила платье; вместо него купила куртку."
  },
  {
    "id": "study_connectors_tambien_es",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Вспомни",
    "q": "Переведи на испанский: тоже, также.",
    "a": [
      "también",
      "tambien"
    ],
    "e": "Правильный вариант: también."
  },
  {
    "id": "study_connectors_tambien_ru",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Узнай",
    "q": "Переведи на русский: también.",
    "a": [
      "тоже",
      "также",
      "тоже, также"
    ],
    "e": "también — тоже, также."
  },
  {
    "id": "study_connectors_tambien_ctx",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я учу испанский, а также английский.»: Yo ___ quiero ir.",
    "a": [
      "también",
      "tambien"
    ],
    "e": "Estudio español y también inglés. — Я учу испанский, а также английский."
  },
  {
    "id": "study_connectors_ademas_es",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кроме того, к тому же.",
    "a": [
      "además",
      "ademas"
    ],
    "e": "Правильный вариант: además."
  },
  {
    "id": "study_connectors_ademas_ru",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Узнай",
    "q": "Переведи на русский: además.",
    "a": [
      "кроме того",
      "к тому же",
      "кроме того, к тому же"
    ],
    "e": "además — кроме того, к тому же."
  },
  {
    "id": "study_connectors_ademas_ctx",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Квартира красивая и, кроме того, недорогая.»: El piso es bonito y, ___, barato.",
    "a": [
      "además",
      "ademas"
    ],
    "e": "El piso es bonito y, además, barato. — Квартира красивая и, кроме того, недорогая."
  },
  {
    "id": "study_connectors_incluso_es",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Вспомни",
    "q": "Переведи на испанский: даже.",
    "a": [
      "incluso"
    ],
    "e": "Правильный вариант: incluso."
  },
  {
    "id": "study_connectors_incluso_ru",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Узнай",
    "q": "Переведи на русский: incluso.",
    "a": [
      "даже"
    ],
    "e": "incluso — даже."
  },
  {
    "id": "study_connectors_incluso_ctx",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Пришли все, даже Ана.»: Todos vinieron, ___ Ana.",
    "a": [
      "incluso"
    ],
    "e": "Todos vinieron, incluso Ana. — Пришли все, даже Ана."
  },
  {
    "id": "study_connectors_no_solo_es",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Вспомни",
    "q": "Переведи на испанский: не только… но и.",
    "a": [
      "no solo sino también",
      "no solo... sino también",
      "no solo sino tambien"
    ],
    "e": "Правильный вариант: no solo… sino también."
  },
  {
    "id": "study_connectors_no_solo_ru",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "Узнай",
    "q": "Переведи на русский: no solo… sino también.",
    "a": [
      "не только но и",
      "не только но также",
      "не только… но и"
    ],
    "e": "no solo… sino también — не только… но и."
  },
  {
    "id": "study_connectors_no_solo_ctx",
    "topic": "connectors",
    "foodCat": "addition",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Она говорит не только по-испански, но и по-английски.»: No solo compré pan, ___ queso.",
    "a": [
      "sino también",
      "sino tambien"
    ],
    "e": "No solo habla español, sino también inglés. — Она говорит не только по-испански, но и по-английски."
  },
  {
    "id": "study_connectors_primero_es",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Вспомни",
    "q": "Переведи на испанский: сначала, сперва.",
    "a": [
      "primero"
    ],
    "e": "Правильный вариант: primero."
  },
  {
    "id": "study_connectors_primero_ru",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Узнай",
    "q": "Переведи на русский: primero.",
    "a": [
      "сначала",
      "сперва",
      "сначала, сперва"
    ],
    "e": "primero — сначала, сперва."
  },
  {
    "id": "study_connectors_primero_ctx",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Сначала я завтракаю, а потом работаю.»: ___ desayuno y después trabajo.",
    "a": [
      "primero"
    ],
    "e": "Primero desayuno y después trabajo. — Сначала я завтракаю, а потом работаю."
  },
  {
    "id": "study_connectors_despues_es",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Вспомни",
    "q": "Переведи на испанский: после, потом.",
    "a": [
      "después",
      "despues"
    ],
    "e": "Правильный вариант: después."
  },
  {
    "id": "study_connectors_despues_ru",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Узнай",
    "q": "Переведи на русский: después.",
    "a": [
      "после",
      "потом",
      "после, потом"
    ],
    "e": "después — после, потом."
  },
  {
    "id": "study_connectors_despues_ctx",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «После работы я иду домой.»: Primero estudiamos y ___ descansamos.",
    "a": [
      "después",
      "despues"
    ],
    "e": "Después del trabajo voy a casa. — После работы я иду домой."
  },
  {
    "id": "study_connectors_luego_es",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Вспомни",
    "q": "Переведи на испанский: затем, потом.",
    "a": [
      "luego"
    ],
    "e": "Правильный вариант: luego."
  },
  {
    "id": "study_connectors_luego_ru",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Узнай",
    "q": "Переведи на русский: luego.",
    "a": [
      "затем",
      "потом",
      "затем, потом"
    ],
    "e": "luego — затем, потом."
  },
  {
    "id": "study_connectors_luego_ctx",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ужинаю, а затем читаю.»: Ceno y ___ leo.",
    "a": [
      "luego"
    ],
    "e": "Ceno y luego leo. — Я ужинаю, а затем читаю."
  },
  {
    "id": "study_connectors_finalmente_es",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Вспомни",
    "q": "Переведи на испанский: наконец, в конечном итоге.",
    "a": [
      "finalmente"
    ],
    "e": "Правильный вариант: finalmente."
  },
  {
    "id": "study_connectors_finalmente_ru",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Узнай",
    "q": "Переведи на русский: finalmente.",
    "a": [
      "наконец",
      "в конечном итоге",
      "наконец, в конечном итоге"
    ],
    "e": "finalmente — наконец, в конечном итоге."
  },
  {
    "id": "study_connectors_finalmente_ctx",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Наконец мы нашли адрес.»: ___ encontramos la dirección.",
    "a": [
      "finalmente"
    ],
    "e": "Finalmente encontramos la dirección. — Наконец мы нашли адрес."
  },
  {
    "id": "study_connectors_al_final_es",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Вспомни",
    "q": "Переведи на испанский: в конце, в итоге.",
    "a": [
      "al final"
    ],
    "e": "Правильный вариант: al final."
  },
  {
    "id": "study_connectors_al_final_ru",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "Узнай",
    "q": "Переведи на русский: al final.",
    "a": [
      "в конце",
      "в итоге",
      "в конце, в итоге"
    ],
    "e": "al final — в конце, в итоге."
  },
  {
    "id": "study_connectors_al_final_ctx",
    "topic": "connectors",
    "foodCat": "sequence",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В итоге мы решили остаться дома.»: ___ decidimos quedarnos en casa.",
    "a": [
      "al final"
    ],
    "e": "Al final decidimos quedarnos en casa. — В итоге мы решили остаться дома."
  },
  {
    "id": "choice_connectors_porque",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: потому что.",
    "a": [
      "porque"
    ],
    "options": [
      "porque",
      "gracias a",
      "gracias a que",
      "a causa de"
    ],
    "e": "porque — потому что."
  },
  {
    "id": "choice_connectors_gracias_a",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: благодаря.",
    "a": [
      "gracias a"
    ],
    "options": [
      "gracias a",
      "gracias a que",
      "a causa de",
      "debido a"
    ],
    "e": "gracias a — благодаря."
  },
  {
    "id": "choice_connectors_gracias_a_que",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: благодаря тому, что.",
    "a": [
      "gracias a que"
    ],
    "options": [
      "gracias a que",
      "a causa de",
      "debido a",
      "debido a que"
    ],
    "e": "gracias a que — благодаря тому, что."
  },
  {
    "id": "choice_connectors_a_causa_de",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: из-за, по причине.",
    "a": [
      "a causa de"
    ],
    "options": [
      "a causa de",
      "debido a",
      "debido a que",
      "por culpa de"
    ],
    "e": "a causa de — из-за, по причине."
  },
  {
    "id": "choice_connectors_debido_a",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вследствие, из-за.",
    "a": [
      "debido a"
    ],
    "options": [
      "debido a",
      "debido a que",
      "por culpa de",
      "porque"
    ],
    "e": "debido a — вследствие, из-за."
  },
  {
    "id": "choice_connectors_debido_a_que",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: из-за того, что; вследствие того, что.",
    "a": [
      "debido a que"
    ],
    "options": [
      "debido a que",
      "por culpa de",
      "porque",
      "gracias a"
    ],
    "e": "debido a que — из-за того, что; вследствие того, что."
  },
  {
    "id": "choice_connectors_por_culpa_de",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: по вине, из-за.",
    "a": [
      "por culpa de"
    ],
    "options": [
      "por culpa de",
      "porque",
      "gracias a",
      "gracias a que"
    ],
    "e": "por culpa de — по вине, из-за."
  },
  {
    "id": "choice_connectors_por_eso",
    "topic": "connectors",
    "foodCat": "result",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: поэтому, вот почему.",
    "a": [
      "por eso"
    ],
    "options": [
      "por eso",
      "entonces",
      "por lo tanto",
      "así que"
    ],
    "e": "por eso — поэтому, вот почему."
  },
  {
    "id": "choice_connectors_asi_que",
    "topic": "connectors",
    "foodCat": "result",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: так что.",
    "a": [
      "así que"
    ],
    "options": [
      "así que",
      "por lo tanto",
      "por eso",
      "entonces"
    ],
    "e": "así que — так что."
  },
  {
    "id": "choice_connectors_entonces",
    "topic": "connectors",
    "foodCat": "result",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тогда, в таком случае.",
    "a": [
      "entonces"
    ],
    "options": [
      "entonces",
      "por eso",
      "así que",
      "por lo tanto"
    ],
    "e": "entonces — тогда, в таком случае."
  },
  {
    "id": "choice_connectors_por_lo_tanto",
    "topic": "connectors",
    "foodCat": "result",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: следовательно.",
    "a": [
      "por lo tanto"
    ],
    "options": [
      "por lo tanto",
      "así que",
      "entonces",
      "por eso"
    ],
    "e": "por lo tanto — следовательно."
  },
  {
    "id": "choice_connectors_pero",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: но.",
    "a": [
      "pero"
    ],
    "options": [
      "pero",
      "sin embargo",
      "en cambio",
      "a pesar de"
    ],
    "e": "pero — но."
  },
  {
    "id": "choice_connectors_aunque",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: хотя.",
    "a": [
      "aunque"
    ],
    "options": [
      "aunque",
      "en cambio",
      "a pesar de",
      "a pesar de que"
    ],
    "e": "aunque — хотя."
  },
  {
    "id": "choice_connectors_sin_embargo",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: однако, тем не менее.",
    "a": [
      "sin embargo"
    ],
    "options": [
      "sin embargo",
      "a pesar de",
      "a pesar de que",
      "pero"
    ],
    "e": "sin embargo — однако, тем не менее."
  },
  {
    "id": "choice_connectors_en_cambio",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: зато, в отличие от этого.",
    "a": [
      "en cambio"
    ],
    "options": [
      "en cambio",
      "a pesar de que",
      "pero",
      "aunque"
    ],
    "e": "en cambio — зато, в отличие от этого."
  },
  {
    "id": "choice_connectors_a_pesar_de",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: несмотря на.",
    "a": [
      "a pesar de"
    ],
    "options": [
      "a pesar de",
      "pero",
      "aunque",
      "sin embargo"
    ],
    "e": "a pesar de — несмотря на."
  },
  {
    "id": "choice_connectors_a_pesar_de_que",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: несмотря на то, что.",
    "a": [
      "a pesar de que"
    ],
    "options": [
      "a pesar de que",
      "aunque",
      "sin embargo",
      "en cambio"
    ],
    "e": "a pesar de que — несмотря на то, что."
  },
  {
    "id": "choice_connectors_en_vez_de",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вместо.",
    "a": [
      "en vez de"
    ],
    "options": [
      "en vez de",
      "en su lugar",
      "en lugar de",
      "en vez de eso"
    ],
    "e": "en vez de — вместо."
  },
  {
    "id": "choice_connectors_en_lugar_de",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вместо.",
    "a": [
      "en lugar de"
    ],
    "options": [
      "en lugar de",
      "en vez de",
      "en vez de eso",
      "en su lugar"
    ],
    "e": "en lugar de — вместо."
  },
  {
    "id": "choice_connectors_en_vez_de_eso",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вместо этого.",
    "a": [
      "en vez de eso"
    ],
    "options": [
      "en vez de eso",
      "en lugar de",
      "en su lugar",
      "en vez de"
    ],
    "e": "en vez de eso — вместо этого."
  },
  {
    "id": "choice_connectors_en_su_lugar",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вместо этого.",
    "a": [
      "en su lugar"
    ],
    "options": [
      "en su lugar",
      "en vez de eso",
      "en vez de",
      "en lugar de"
    ],
    "e": "en su lugar — вместо этого."
  },
  {
    "id": "choice_connectors_tambien",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тоже, также.",
    "a": [
      "también"
    ],
    "options": [
      "también",
      "además",
      "incluso",
      "no solo… sino también"
    ],
    "e": "también — тоже, также."
  },
  {
    "id": "choice_connectors_ademas",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кроме того, к тому же.",
    "a": [
      "además"
    ],
    "options": [
      "además",
      "incluso",
      "no solo… sino también",
      "también"
    ],
    "e": "además — кроме того, к тому же."
  },
  {
    "id": "choice_connectors_incluso",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: даже.",
    "a": [
      "incluso"
    ],
    "options": [
      "incluso",
      "no solo… sino también",
      "también",
      "además"
    ],
    "e": "incluso — даже."
  },
  {
    "id": "choice_connectors_no_solo",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: не только… но и.",
    "a": [
      "no solo… sino también"
    ],
    "options": [
      "no solo… sino también",
      "también",
      "además",
      "incluso"
    ],
    "e": "no solo… sino también — не только… но и."
  },
  {
    "id": "choice_connectors_primero",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сначала, сперва.",
    "a": [
      "primero"
    ],
    "options": [
      "primero",
      "luego",
      "finalmente",
      "al final"
    ],
    "e": "primero — сначала, сперва."
  },
  {
    "id": "choice_connectors_despues",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: после, потом.",
    "a": [
      "después"
    ],
    "options": [
      "después",
      "finalmente",
      "al final",
      "primero"
    ],
    "e": "después — после, потом."
  },
  {
    "id": "choice_connectors_luego",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: затем, потом.",
    "a": [
      "luego"
    ],
    "options": [
      "luego",
      "al final",
      "primero",
      "después"
    ],
    "e": "luego — затем, потом."
  },
  {
    "id": "choice_connectors_finalmente",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: наконец, в конечном итоге.",
    "a": [
      "finalmente"
    ],
    "options": [
      "finalmente",
      "primero",
      "después",
      "luego"
    ],
    "e": "finalmente — наконец, в конечном итоге."
  },
  {
    "id": "choice_connectors_al_final",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: в конце, в итоге.",
    "a": [
      "al final"
    ],
    "options": [
      "al final",
      "después",
      "luego",
      "finalmente"
    ],
    "e": "al final — в конце, в итоге."
  },
  {
    "id": "audio_connectors_porque",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No salgo porque llueve.",
    "a": [
      "No salgo porque llueve."
    ],
    "e": "Я не выхожу, потому что идёт дождь."
  },
  {
    "id": "audio_connectors_gracias_a",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Gracias a tu ayuda, terminé a tiempo.",
    "a": [
      "Gracias a tu ayuda, terminé a tiempo."
    ],
    "e": "Благодаря твоей помощи я закончила вовремя."
  },
  {
    "id": "audio_connectors_gracias_a_que",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llegamos a tiempo gracias a que salimos temprano.",
    "a": [
      "Llegamos a tiempo gracias a que salimos temprano."
    ],
    "e": "Мы приехали вовремя благодаря тому, что вышли рано."
  },
  {
    "id": "audio_connectors_a_causa_de",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El vuelo se canceló a causa de la tormenta.",
    "a": [
      "El vuelo se canceló a causa de la tormenta."
    ],
    "e": "Рейс отменили из-за шторма."
  },
  {
    "id": "audio_connectors_debido_a",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La reunión se pospuso debido a un problema técnico.",
    "a": [
      "La reunión se pospuso debido a un problema técnico."
    ],
    "e": "Встречу отложили из-за технической проблемы."
  },
  {
    "id": "audio_connectors_debido_a_que",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nos quedamos en casa debido a que llovía mucho.",
    "a": [
      "Nos quedamos en casa debido a que llovía mucho."
    ],
    "e": "Мы остались дома из-за того, что шёл сильный дождь."
  },
  {
    "id": "audio_connectors_por_culpa_de",
    "topic": "connectors",
    "foodCat": "cause",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llegamos tarde por culpa del tráfico.",
    "a": [
      "Llegamos tarde por culpa del tráfico."
    ],
    "e": "Мы опоздали из-за пробок."
  },
  {
    "id": "audio_connectors_por_eso",
    "topic": "connectors",
    "foodCat": "result",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estoy cansada, por eso descanso.",
    "a": [
      "Estoy cansada, por eso descanso."
    ],
    "e": "Я устала, поэтому отдыхаю."
  },
  {
    "id": "audio_connectors_asi_que",
    "topic": "connectors",
    "foodCat": "result",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llueve, así que me quedo en casa.",
    "a": [
      "Llueve, así que me quedo en casa."
    ],
    "e": "Идёт дождь, так что я остаюсь дома."
  },
  {
    "id": "audio_connectors_entonces",
    "topic": "connectors",
    "foodCat": "result",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No había autobuses, entonces fuimos a pie.",
    "a": [
      "No había autobuses, entonces fuimos a pie."
    ],
    "e": "Автобусов не было, тогда мы пошли пешком."
  },
  {
    "id": "audio_connectors_por_lo_tanto",
    "topic": "connectors",
    "foodCat": "result",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ha estudiado mucho; por lo tanto, aprobará.",
    "a": [
      "Ha estudiado mucho; por lo tanto, aprobará."
    ],
    "e": "Она много занималась; следовательно, она сдаст экзамен."
  },
  {
    "id": "audio_connectors_pero",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero ir, pero no tengo tiempo.",
    "a": [
      "Quiero ir, pero no tengo tiempo."
    ],
    "e": "Я хочу пойти, но у меня нет времени."
  },
  {
    "id": "audio_connectors_aunque",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Aunque estoy cansada, voy al gimnasio.",
    "a": [
      "Aunque estoy cansada, voy al gimnasio."
    ],
    "e": "Хотя я устала, я иду в спортзал."
  },
  {
    "id": "audio_connectors_sin_embargo",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Este producto es caro; sin embargo, es muy bueno.",
    "a": [
      "Este producto es caro; sin embargo, es muy bueno."
    ],
    "e": "Этот товар дорогой; однако он очень хороший."
  },
  {
    "id": "audio_connectors_en_cambio",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Mi barrio es tranquilo; el centro, en cambio, es ruidoso.",
    "a": [
      "Mi barrio es tranquilo; el centro, en cambio, es ruidoso."
    ],
    "e": "Мой район тихий, а центр, напротив, шумный."
  },
  {
    "id": "audio_connectors_a_pesar_de",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "A pesar de la lluvia, salimos.",
    "a": [
      "A pesar de la lluvia, salimos."
    ],
    "e": "Несмотря на дождь, мы вышли."
  },
  {
    "id": "audio_connectors_a_pesar_de_que",
    "topic": "connectors",
    "foodCat": "contrast",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "A pesar de que estaba cansada, terminé el trabajo.",
    "a": [
      "A pesar de que estaba cansada, terminé el trabajo."
    ],
    "e": "Несмотря на то, что я устала, я закончила работу."
  },
  {
    "id": "audio_connectors_en_vez_de",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Leo en vez de ver la televisión.",
    "a": [
      "Leo en vez de ver la televisión."
    ],
    "e": "Я читаю вместо того, чтобы смотреть телевизор."
  },
  {
    "id": "audio_connectors_en_lugar_de",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tomo té en lugar de café.",
    "a": [
      "Tomo té en lugar de café."
    ],
    "e": "Я пью чай вместо кофе."
  },
  {
    "id": "audio_connectors_en_vez_de_eso",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No fui de compras; en vez de eso, descansé.",
    "a": [
      "No fui de compras; en vez de eso, descansé."
    ],
    "e": "Я не пошла за покупками; вместо этого я отдохнула."
  },
  {
    "id": "audio_connectors_en_su_lugar",
    "topic": "connectors",
    "foodCat": "replacement",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No compré el vestido; en su lugar, compré una chaqueta.",
    "a": [
      "No compré el vestido; en su lugar, compré una chaqueta."
    ],
    "e": "Я не купила платье; вместо него купила куртку."
  },
  {
    "id": "audio_connectors_tambien",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estudio español y también inglés.",
    "a": [
      "Estudio español y también inglés."
    ],
    "e": "Я учу испанский, а также английский."
  },
  {
    "id": "audio_connectors_ademas",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El piso es bonito y, además, barato.",
    "a": [
      "El piso es bonito y, además, barato."
    ],
    "e": "Квартира красивая и, кроме того, недорогая."
  },
  {
    "id": "audio_connectors_incluso",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Todos vinieron, incluso Ana.",
    "a": [
      "Todos vinieron, incluso Ana."
    ],
    "e": "Пришли все, даже Ана."
  },
  {
    "id": "audio_connectors_no_solo",
    "topic": "connectors",
    "foodCat": "addition",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No solo habla español, sino también inglés.",
    "a": [
      "No solo habla español, sino también inglés."
    ],
    "e": "Она говорит не только по-испански, но и по-английски."
  },
  {
    "id": "audio_connectors_primero",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Primero desayuno y después trabajo.",
    "a": [
      "Primero desayuno y después trabajo."
    ],
    "e": "Сначала я завтракаю, а потом работаю."
  },
  {
    "id": "audio_connectors_despues",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Después del trabajo voy a casa.",
    "a": [
      "Después del trabajo voy a casa."
    ],
    "e": "После работы я иду домой."
  },
  {
    "id": "audio_connectors_luego",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ceno y luego leo.",
    "a": [
      "Ceno y luego leo."
    ],
    "e": "Я ужинаю, а затем читаю."
  },
  {
    "id": "audio_connectors_finalmente",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Finalmente encontramos la dirección.",
    "a": [
      "Finalmente encontramos la dirección."
    ],
    "e": "Наконец мы нашли адрес."
  },
  {
    "id": "audio_connectors_al_final",
    "topic": "connectors",
    "foodCat": "sequence",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Al final decidimos quedarnos en casa.",
    "a": [
      "Al final decidimos quedarnos en casa."
    ],
    "e": "В итоге мы решили остаться дома."
  },
  {
    "id": "sort_auto_connectors_0",
    "topic": "connectors",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Связки и конструкции» по подходящим колонкам. Набор 1 из 2.",
    "sortColumns": [
      {
        "id": "cause",
        "title": "Причина"
      },
      {
        "id": "result",
        "title": "Следствие"
      },
      {
        "id": "contrast",
        "title": "Противопоставление"
      }
    ],
    "sortTokens": [
      {
        "id": "connectors_0_cause_porque",
        "text": "porque",
        "category": "cause"
      },
      {
        "id": "connectors_0_cause_gracias_a",
        "text": "gracias a",
        "category": "cause"
      },
      {
        "id": "connectors_0_cause_gracias_a_que",
        "text": "gracias a que",
        "category": "cause"
      },
      {
        "id": "connectors_0_result_por_eso",
        "text": "por eso",
        "category": "result"
      },
      {
        "id": "connectors_0_result_asi_que",
        "text": "así que",
        "category": "result"
      },
      {
        "id": "connectors_0_result_entonces",
        "text": "entonces",
        "category": "result"
      },
      {
        "id": "connectors_0_contrast_pero",
        "text": "pero",
        "category": "contrast"
      },
      {
        "id": "connectors_0_contrast_aunque",
        "text": "aunque",
        "category": "contrast"
      },
      {
        "id": "connectors_0_contrast_sin_embargo",
        "text": "sin embargo",
        "category": "contrast"
      }
    ],
    "a": [
      "cause | cause | cause | result | result | result | contrast | contrast | contrast"
    ],
    "displayAnswer": "Причина: porque, gracias a, gracias a que · Следствие: por eso, así que, entonces · Противопоставление: pero, aunque, sin embargo",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  },
  {
    "id": "sort_auto_connectors_1",
    "topic": "connectors",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Связки и конструкции» по подходящим колонкам. Набор 2 из 2.",
    "sortColumns": [
      {
        "id": "replacement",
        "title": "Замена"
      },
      {
        "id": "addition",
        "title": "Дополнение"
      },
      {
        "id": "sequence",
        "title": "Последовательность"
      }
    ],
    "sortTokens": [
      {
        "id": "connectors_1_replacement_en_su_lugar",
        "text": "en su lugar",
        "category": "replacement"
      },
      {
        "id": "connectors_1_replacement_en_vez_de",
        "text": "en vez de",
        "category": "replacement"
      },
      {
        "id": "connectors_1_replacement_en_lugar_de",
        "text": "en lugar de",
        "category": "replacement"
      },
      {
        "id": "connectors_1_addition_no_solo",
        "text": "no solo… sino también",
        "category": "addition"
      },
      {
        "id": "connectors_1_addition_tambien",
        "text": "también",
        "category": "addition"
      },
      {
        "id": "connectors_1_addition_ademas",
        "text": "además",
        "category": "addition"
      },
      {
        "id": "connectors_1_sequence_finalmente",
        "text": "finalmente",
        "category": "sequence"
      },
      {
        "id": "connectors_1_sequence_al_final",
        "text": "al final",
        "category": "sequence"
      },
      {
        "id": "connectors_1_sequence_primero",
        "text": "primero",
        "category": "sequence"
      }
    ],
    "a": [
      "replacement | replacement | replacement | addition | addition | addition | sequence | sequence | sequence"
    ],
    "displayAnswer": "Замена: en su lugar, en vez de, en lugar de · Дополнение: no solo… sino también, también, además · Последовательность: finalmente, al final, primero",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const connectorsTopic = {
  id: "connectors",
  title: "Связки и конструкции",
  icon: "⇄",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
