/**
 * Мой дом — комнаты и части дома topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "cocina",
    "cat": "rooms",
    "word": "la cocina",
    "base": "la cocina",
    "gender": "женский род",
    "tr": "кухня",
    "ru": [
      "кухня"
    ],
    "answers": [
      "cocina",
      "la cocina"
    ],
    "art": null,
    "examples": [
      [
        "La cocina es luminosa.",
        "Кухня светлая."
      ],
      [
        "Cocinamos juntos en la cocina.",
        "Мы готовим вместе на кухне."
      ]
    ],
    "cloze": "La ___ es luminosa.",
    "clozeAnswers": [
      "cocina"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/cocina.webp"
  },
  {
    "id": "salón",
    "cat": "rooms",
    "word": "el salón",
    "base": "el salón",
    "gender": "мужской род",
    "tr": "гостиная",
    "ru": [
      "гостиная"
    ],
    "answers": [
      "salón",
      "salon",
      "el salón",
      "el salon",
      "sala de estar",
      "la sala de estar"
    ],
    "art": null,
    "examples": [
      [
        "El salón tiene un sofá grande.",
        "В гостиной стоит большой диван."
      ],
      [
        "Descansamos en el salón por la noche.",
        "Вечером мы отдыхаем в гостиной."
      ]
    ],
    "cloze": "El ___ tiene un sofá grande.",
    "clozeAnswers": [
      "salón",
      "salon"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/salon.webp"
  },
  {
    "id": "sala_estar",
    "cat": "rooms",
    "word": "la sala de estar",
    "base": "la sala de estar",
    "gender": "женский род",
    "tr": "гостиная",
    "ru": [
      "гостиная"
    ],
    "answers": [
      "sala de estar",
      "la sala de estar",
      "salón",
      "salon",
      "el salón",
      "el salon"
    ],
    "art": null,
    "examples": [
      [
        "La sala de estar está junto a la cocina.",
        "Гостиная находится рядом с кухней."
      ],
      [
        "Vemos películas en la sala de estar.",
        "Мы смотрим фильмы в гостиной."
      ]
    ],
    "cloze": "La ___ está junto a la cocina.",
    "clozeAnswers": [
      "sala de estar"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/sala_estar.webp"
  },
  {
    "id": "dormitorio",
    "cat": "rooms",
    "word": "el dormitorio",
    "base": "el dormitorio",
    "gender": "мужской род",
    "tr": "спальня",
    "ru": [
      "спальня"
    ],
    "answers": [
      "dormitorio",
      "el dormitorio",
      "habitación",
      "habitacion",
      "la habitación",
      "la habitacion"
    ],
    "art": null,
    "examples": [
      [
        "El dormitorio está en la segunda planta.",
        "Спальня находится на втором этаже."
      ],
      [
        "Hay una cama grande en el dormitorio.",
        "В спальне стоит большая кровать."
      ]
    ],
    "cloze": "El ___ está en la segunda planta.",
    "clozeAnswers": [
      "dormitorio"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/dormitorio.webp"
  },
  {
    "id": "habitación",
    "cat": "rooms",
    "word": "la habitación",
    "base": "la habitación",
    "gender": "женский род",
    "tr": "спальня",
    "ru": [
      "спальня",
      "комната"
    ],
    "answers": [
      "habitación",
      "habitacion",
      "la habitación",
      "la habitacion",
      "dormitorio",
      "el dormitorio"
    ],
    "art": null,
    "examples": [
      [
        "La habitación tiene una ventana grande.",
        "В спальне большое окно."
      ],
      [
        "Mi habitación está al final del pasillo.",
        "Моя комната находится в конце коридора."
      ]
    ],
    "cloze": "La ___ tiene una ventana grande.",
    "clozeAnswers": [
      "habitación",
      "habitacion"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/habitacion.webp"
  },
  {
    "id": "baño",
    "cat": "rooms",
    "word": "el baño",
    "base": "el baño",
    "gender": "мужской род",
    "tr": "ванная",
    "ru": [
      "ванная",
      "ванная комната"
    ],
    "answers": [
      "baño",
      "bano",
      "el baño",
      "el bano"
    ],
    "art": null,
    "examples": [
      [
        "El baño está al lado del dormitorio.",
        "Ванная находится рядом со спальней."
      ],
      [
        "Hay una ducha en el baño.",
        "В ванной есть душ."
      ]
    ],
    "cloze": "El ___ está al lado del dormitorio.",
    "clozeAnswers": [
      "baño",
      "bano"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/bano.webp"
  },
  {
    "id": "pasillo",
    "cat": "rooms",
    "word": "el pasillo",
    "base": "el pasillo",
    "gender": "мужской род",
    "tr": "коридор",
    "ru": [
      "коридор"
    ],
    "answers": [
      "pasillo",
      "el pasillo"
    ],
    "art": null,
    "examples": [
      [
        "El pasillo es largo y estrecho.",
        "Коридор длинный и узкий."
      ],
      [
        "La habitación está al final del pasillo.",
        "Спальня находится в конце коридора."
      ]
    ],
    "cloze": "El ___ es largo y estrecho.",
    "clozeAnswers": [
      "pasillo"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/pasillo.webp"
  },
  {
    "id": "comedor",
    "cat": "rooms",
    "word": "el comedor",
    "base": "el comedor",
    "gender": "мужской род",
    "tr": "столовая",
    "ru": [
      "столовая"
    ],
    "answers": [
      "comedor",
      "el comedor"
    ],
    "art": null,
    "examples": [
      [
        "Comemos juntos en el comedor.",
        "Мы едим вместе в столовой."
      ],
      [
        "La mesa grande está en el comedor.",
        "Большой стол стоит в столовой."
      ]
    ],
    "cloze": "Comemos juntos en el ___.",
    "clozeAnswers": [
      "comedor"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/comedor.webp"
  },
  {
    "id": "despacho",
    "cat": "rooms",
    "word": "el despacho",
    "base": "el despacho",
    "gender": "мужской род",
    "tr": "кабинет",
    "ru": [
      "кабинет",
      "рабочий кабинет"
    ],
    "answers": [
      "despacho",
      "el despacho"
    ],
    "art": null,
    "examples": [
      [
        "Trabajo desde casa en el despacho.",
        "Я работаю из дома в кабинете."
      ],
      [
        "El despacho tiene un escritorio pequeño.",
        "В кабинете стоит небольшой письменный стол."
      ]
    ],
    "cloze": "Trabajo en el ___.",
    "clozeAnswers": [
      "despacho"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/despacho.webp"
  },
  {
    "id": "balcón",
    "cat": "rooms",
    "word": "el balcón",
    "base": "el balcón",
    "gender": "мужской род",
    "tr": "балкон",
    "ru": [
      "балкон"
    ],
    "answers": [
      "balcón",
      "balcon",
      "el balcón",
      "el balcon"
    ],
    "art": null,
    "examples": [
      [
        "El balcón da al patio.",
        "Балкон выходит во двор."
      ],
      [
        "Hay muchas plantas en el balcón.",
        "На балконе много растений."
      ]
    ],
    "cloze": "El ___ da al patio.",
    "clozeAnswers": [
      "balcón",
      "balcon"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/balcon.webp"
  },
  {
    "id": "terrazas",
    "cat": "rooms",
    "word": "la terraza",
    "base": "la terraza",
    "gender": "женский род",
    "tr": "терраса",
    "ru": [
      "терраса"
    ],
    "answers": [
      "terraza",
      "la terraza"
    ],
    "art": null,
    "examples": [
      [
        "Desayunamos en la terraza.",
        "Мы завтракаем на террасе."
      ],
      [
        "La terraza tiene una mesa y cuatro sillas.",
        "На террасе есть стол и четыре стула."
      ]
    ],
    "cloze": "Desayunamos en la ___.",
    "clozeAnswers": [
      "terraza"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/terrazas.webp"
  },
  {
    "id": "garaje",
    "cat": "rooms",
    "word": "el garaje",
    "base": "el garaje",
    "gender": "мужской род",
    "tr": "гараж",
    "ru": [
      "гараж"
    ],
    "answers": [
      "garaje",
      "el garaje"
    ],
    "art": null,
    "examples": [
      [
        "El coche está en el garaje.",
        "Машина стоит в гараже."
      ],
      [
        "El garaje está debajo de la casa.",
        "Гараж находится под домом."
      ]
    ],
    "cloze": "El coche está en el ___.",
    "clozeAnswers": [
      "garaje"
    ],
    "meta": {
      "categoryTitle": "Комнаты",
      "categoryOrder": 1,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/garaje.webp"
  },
  {
    "id": "puerta",
    "cat": "parts",
    "word": "la puerta",
    "base": "la puerta",
    "gender": "женский род",
    "tr": "дверь",
    "ru": [
      "дверь"
    ],
    "answers": [
      "puerta",
      "la puerta"
    ],
    "art": null,
    "examples": [
      [
        "Cierra la puerta, por favor.",
        "Закрой дверь, пожалуйста."
      ],
      [
        "La puerta de entrada es blanca.",
        "Входная дверь белая."
      ]
    ],
    "cloze": "Cierra la ___.",
    "clozeAnswers": [
      "puerta"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/puerta.webp"
  },
  {
    "id": "ventana",
    "cat": "parts",
    "word": "la ventana",
    "base": "la ventana",
    "gender": "женский род",
    "tr": "окно",
    "ru": [
      "окно"
    ],
    "answers": [
      "ventana",
      "la ventana"
    ],
    "art": null,
    "examples": [
      [
        "Abro la ventana por la mañana.",
        "Утром я открываю окно."
      ],
      [
        "La ventana da a la calle.",
        "Окно выходит на улицу."
      ]
    ],
    "cloze": "Abro la ___ por la mañana.",
    "clozeAnswers": [
      "ventana"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/ventana.webp"
  },
  {
    "id": "suelo",
    "cat": "parts",
    "word": "el suelo",
    "base": "el suelo",
    "gender": "мужской род",
    "tr": "пол",
    "ru": [
      "пол"
    ],
    "answers": [
      "suelo",
      "el suelo"
    ],
    "art": null,
    "examples": [
      [
        "El suelo es de madera.",
        "Пол деревянный."
      ],
      [
        "La mochila está en el suelo.",
        "Рюкзак лежит на полу."
      ]
    ],
    "cloze": "El ___ es de madera.",
    "clozeAnswers": [
      "suelo"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/suelo.webp"
  },
  {
    "id": "techo",
    "cat": "parts",
    "word": "el techo",
    "base": "el techo",
    "gender": "мужской род",
    "tr": "потолок",
    "ru": [
      "потолок"
    ],
    "answers": [
      "techo",
      "el techo"
    ],
    "art": null,
    "examples": [
      [
        "El techo es muy alto.",
        "Потолок очень высокий."
      ],
      [
        "Hay una lámpara en el techo.",
        "На потолке есть лампа."
      ]
    ],
    "cloze": "El ___ es muy alto.",
    "clozeAnswers": [
      "techo"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/techo.webp"
  },
  {
    "id": "pared",
    "cat": "parts",
    "word": "la pared",
    "base": "la pared",
    "gender": "женский род",
    "tr": "стена",
    "ru": [
      "стена"
    ],
    "answers": [
      "pared",
      "la pared"
    ],
    "art": null,
    "examples": [
      [
        "La pared es blanca.",
        "Стена белая."
      ],
      [
        "Hay un cuadro en la pared.",
        "На стене висит картина."
      ]
    ],
    "cloze": "La ___ es blanca.",
    "clozeAnswers": [
      "pared"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/pared.webp"
  },
  {
    "id": "escaleras",
    "cat": "parts",
    "word": "las escaleras",
    "base": "las escaleras",
    "gender": "множественное число",
    "tr": "лестница",
    "ru": [
      "лестница",
      "лестницы"
    ],
    "answers": [
      "escaleras",
      "las escaleras"
    ],
    "art": null,
    "examples": [
      [
        "Subimos por las escaleras.",
        "Мы поднимаемся по лестнице."
      ],
      [
        "Las escaleras están junto al ascensor.",
        "Лестница находится рядом с лифтом."
      ]
    ],
    "cloze": "Subimos por las ___.",
    "clozeAnswers": [
      "escaleras"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/escaleras.webp"
  },
  {
    "id": "ascensor",
    "cat": "parts",
    "word": "el ascensor",
    "base": "el ascensor",
    "gender": "мужской род",
    "tr": "лифт",
    "ru": [
      "лифт"
    ],
    "answers": [
      "ascensor",
      "el ascensor"
    ],
    "art": null,
    "examples": [
      [
        "El ascensor está al final del pasillo.",
        "Лифт находится в конце коридора."
      ],
      [
        "Subimos al quinto piso en ascensor.",
        "Мы поднимаемся на пятый этаж на лифте."
      ]
    ],
    "cloze": "El ___ está al final del pasillo.",
    "clozeAnswers": [
      "ascensor"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/ascensor.webp"
  },
  {
    "id": "entrada",
    "cat": "parts",
    "word": "la entrada",
    "base": "la entrada",
    "gender": "женский род",
    "tr": "вход",
    "ru": [
      "вход"
    ],
    "answers": [
      "entrada",
      "la entrada"
    ],
    "art": null,
    "examples": [
      [
        "La entrada está a la derecha.",
        "Вход находится справа."
      ],
      [
        "Nos vemos en la entrada del edificio.",
        "Встретимся у входа в здание."
      ]
    ],
    "cloze": "La ___ está a la derecha.",
    "clozeAnswers": [
      "entrada"
    ],
    "meta": {
      "categoryTitle": "Части дома",
      "categoryOrder": 2,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/entrada.webp"
  },
  {
    "id": "casa",
    "cat": "housing",
    "word": "la casa",
    "base": "la casa",
    "gender": "женский род",
    "tr": "дом",
    "ru": [
      "дом"
    ],
    "answers": [
      "casa",
      "la casa"
    ],
    "art": null,
    "examples": [
      [
        "Nuestra casa tiene dos plantas.",
        "В нашем доме два этажа."
      ],
      [
        "La casa está cerca del parque.",
        "Дом находится рядом с парком."
      ]
    ],
    "cloze": "Nuestra ___ tiene dos plantas.",
    "clozeAnswers": [
      "casa"
    ],
    "meta": {
      "categoryTitle": "Типы жилья",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/casa.webp"
  },
  {
    "id": "piso",
    "cat": "housing",
    "word": "el piso",
    "base": "el piso",
    "gender": "мужской род",
    "tr": "квартира",
    "ru": [
      "квартира"
    ],
    "answers": [
      "piso",
      "el piso"
    ],
    "art": null,
    "examples": [
      [
        "Vivo en un piso pequeño.",
        "Я живу в небольшой квартире."
      ],
      [
        "El piso tiene dos dormitorios.",
        "В квартире две спальни."
      ]
    ],
    "cloze": "Vivo en un ___.",
    "clozeAnswers": [
      "piso"
    ],
    "meta": {
      "categoryTitle": "Типы жилья",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/piso.webp"
  },
  {
    "id": "apartamento",
    "cat": "housing",
    "word": "el apartamento",
    "base": "el apartamento",
    "gender": "мужской род",
    "tr": "апартаменты",
    "ru": [
      "апартаменты",
      "квартира"
    ],
    "answers": [
      "apartamento",
      "el apartamento"
    ],
    "art": null,
    "examples": [
      [
        "Alquilamos un apartamento cerca del mar.",
        "Мы снимаем апартаменты рядом с морем."
      ],
      [
        "El apartamento tiene una terraza.",
        "В апартаментах есть терраса."
      ]
    ],
    "cloze": "Alquilamos un ___.",
    "clozeAnswers": [
      "apartamento"
    ],
    "meta": {
      "categoryTitle": "Типы жилья",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/apartamento.webp"
  },
  {
    "id": "edificio",
    "cat": "housing",
    "word": "el edificio",
    "base": "el edificio",
    "gender": "мужской род",
    "tr": "здание",
    "ru": [
      "здание"
    ],
    "answers": [
      "edificio",
      "el edificio"
    ],
    "art": null,
    "examples": [
      [
        "El edificio tiene ocho plantas.",
        "В здании восемь этажей."
      ],
      [
        "La entrada del edificio está cerrada.",
        "Вход в здание закрыт."
      ]
    ],
    "cloze": "El ___ tiene ocho plantas.",
    "clozeAnswers": [
      "edificio"
    ],
    "meta": {
      "categoryTitle": "Типы жилья",
      "categoryOrder": 3,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/edificio.webp"
  },
  {
    "id": "sofa",
    "cat": "living_room",
    "word": "el sofá",
    "base": "el sofá",
    "gender": "мужской род",
    "tr": "диван",
    "ru": [
      "диван"
    ],
    "answers": [
      "sofá",
      "sofa",
      "el sofá",
      "el sofa"
    ],
    "art": null,
    "examples": [
      [
        "El sofá está junto a la ventana.",
        "Диван стоит рядом с окном."
      ],
      [
        "Nos sentamos en el sofá por la noche.",
        "Вечером мы сидим на диване."
      ]
    ],
    "cloze": "El ___ está junto a la ventana.",
    "clozeAnswers": [
      "sofá",
      "sofa"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/sofa.webp"
  },
  {
    "id": "sillon",
    "cat": "living_room",
    "word": "el sillón",
    "base": "el sillón",
    "gender": "мужской род",
    "tr": "кресло",
    "ru": [
      "кресло"
    ],
    "answers": [
      "sillón",
      "sillon",
      "el sillón",
      "el sillon"
    ],
    "art": null,
    "examples": [
      [
        "El sillón es muy cómodo.",
        "Кресло очень удобное."
      ],
      [
        "Leo en el sillón.",
        "Я читаю в кресле."
      ]
    ],
    "cloze": "El ___ es muy cómodo.",
    "clozeAnswers": [
      "sillón",
      "sillon"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/sillon.webp"
  },
  {
    "id": "mesa",
    "cat": "living_room",
    "word": "la mesa",
    "base": "la mesa",
    "gender": "женский род",
    "tr": "стол",
    "ru": [
      "стол"
    ],
    "answers": [
      "mesa",
      "la mesa"
    ],
    "art": null,
    "examples": [
      [
        "La mesa está delante del sofá.",
        "Стол стоит перед диваном."
      ],
      [
        "Dejo el libro sobre la mesa.",
        "Я оставляю книгу на столе."
      ]
    ],
    "cloze": "La ___ está delante del sofá.",
    "clozeAnswers": [
      "mesa"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/mesa.webp"
  },
  {
    "id": "silla",
    "cat": "living_room",
    "word": "la silla",
    "base": "la silla",
    "gender": "женский род",
    "tr": "стул",
    "ru": [
      "стул"
    ],
    "answers": [
      "silla",
      "la silla"
    ],
    "art": null,
    "examples": [
      [
        "La silla está junto a la mesa.",
        "Стул стоит рядом со столом."
      ],
      [
        "Hay cuatro sillas en el comedor.",
        "В столовой четыре стула."
      ]
    ],
    "cloze": "La ___ está junto a la mesa.",
    "clozeAnswers": [
      "silla"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/silla.webp"
  },
  {
    "id": "estanteria",
    "cat": "living_room",
    "word": "la estantería",
    "base": "la estantería",
    "gender": "женский род",
    "tr": "книжный шкаф / полка",
    "ru": [
      "книжный шкаф",
      "полка"
    ],
    "answers": [
      "estantería",
      "estanteria",
      "la estantería",
      "la estanteria"
    ],
    "art": null,
    "examples": [
      [
        "Los libros están en la estantería.",
        "Книги стоят на полке."
      ],
      [
        "La estantería está contra la pared.",
        "Книжный шкаф стоит у стены."
      ]
    ],
    "cloze": "Los libros están en la ___.",
    "clozeAnswers": [
      "estantería",
      "estanteria"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/estanteria.webp"
  },
  {
    "id": "lampara",
    "cat": "living_room",
    "word": "la lámpara",
    "base": "la lámpara",
    "gender": "женский род",
    "tr": "лампа",
    "ru": [
      "лампа"
    ],
    "answers": [
      "lámpara",
      "lampara",
      "la lámpara",
      "la lampara"
    ],
    "art": null,
    "examples": [
      [
        "Enciendo la lámpara por la noche.",
        "Я включаю лампу вечером."
      ],
      [
        "La lámpara está junto al sofá.",
        "Лампа стоит рядом с диваном."
      ]
    ],
    "cloze": "Enciendo la ___ por la noche.",
    "clozeAnswers": [
      "lámpara",
      "lampara"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/lampara.webp"
  },
  {
    "id": "alfombra",
    "cat": "living_room",
    "word": "la alfombra",
    "base": "la alfombra",
    "gender": "женский род",
    "tr": "ковер",
    "ru": [
      "ковер",
      "ковёр"
    ],
    "answers": [
      "alfombra",
      "la alfombra"
    ],
    "art": null,
    "examples": [
      [
        "La alfombra está debajo de la mesa.",
        "Ковер лежит под столом."
      ],
      [
        "La alfombra es muy suave.",
        "Ковер очень мягкий."
      ]
    ],
    "cloze": "La ___ está debajo de la mesa.",
    "clozeAnswers": [
      "alfombra"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/alfombra.webp"
  },
  {
    "id": "cortinas",
    "cat": "living_room",
    "word": "las cortinas",
    "base": "las cortinas",
    "gender": "множественное число",
    "tr": "шторы",
    "ru": [
      "шторы"
    ],
    "answers": [
      "cortinas",
      "las cortinas"
    ],
    "art": null,
    "examples": [
      [
        "Las cortinas son de color beige.",
        "Шторы бежевого цвета."
      ],
      [
        "Abro las cortinas por la mañana.",
        "Утром я открываю шторы."
      ]
    ],
    "cloze": "Abro las ___ por la mañana.",
    "clozeAnswers": [
      "cortinas"
    ],
    "meta": {
      "categoryTitle": "Гостиная",
      "categoryOrder": 4,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/cortinas.webp"
  },
  {
    "id": "cama",
    "cat": "bedroom_items",
    "word": "la cama",
    "base": "la cama",
    "gender": "женский род",
    "tr": "кровать",
    "ru": [
      "кровать"
    ],
    "answers": [
      "cama",
      "la cama"
    ],
    "art": null,
    "examples": [
      [
        "La cama está junto a la ventana.",
        "Кровать стоит рядом с окном."
      ],
      [
        "Hago la cama por la mañana.",
        "Утром я заправляю кровать."
      ]
    ],
    "cloze": "La ___ está junto a la ventana.",
    "clozeAnswers": [
      "cama"
    ],
    "meta": {
      "categoryTitle": "Спальня",
      "categoryOrder": 5,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/cama.webp"
  },
  {
    "id": "almohada",
    "cat": "bedroom_items",
    "word": "la almohada",
    "base": "la almohada",
    "gender": "женский род",
    "tr": "подушка",
    "ru": [
      "подушка"
    ],
    "answers": [
      "almohada",
      "la almohada"
    ],
    "art": null,
    "examples": [
      [
        "La almohada está sobre la cama.",
        "Подушка лежит на кровати."
      ],
      [
        "Necesito otra almohada.",
        "Мне нужна еще одна подушка."
      ]
    ],
    "cloze": "La ___ está sobre la cama.",
    "clozeAnswers": [
      "almohada"
    ],
    "meta": {
      "categoryTitle": "Спальня",
      "categoryOrder": 5,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/almohada.webp"
  },
  {
    "id": "manta",
    "cat": "bedroom_items",
    "word": "la manta",
    "base": "la manta",
    "gender": "женский род",
    "tr": "одеяло / плед",
    "ru": [
      "одеяло",
      "плед"
    ],
    "answers": [
      "manta",
      "la manta"
    ],
    "art": null,
    "examples": [
      [
        "La manta está al pie de la cama.",
        "Плед лежит в ногах кровати."
      ],
      [
        "Esta manta es muy calentita.",
        "Это одеяло очень теплое."
      ]
    ],
    "cloze": "La ___ está al pie de la cama.",
    "clozeAnswers": [
      "manta"
    ],
    "meta": {
      "categoryTitle": "Спальня",
      "categoryOrder": 5,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/manta.webp"
  },
  {
    "id": "armario",
    "cat": "bedroom_items",
    "word": "el armario",
    "base": "el armario",
    "gender": "мужской род",
    "tr": "шкаф",
    "ru": [
      "шкаф"
    ],
    "answers": [
      "armario",
      "el armario"
    ],
    "art": null,
    "examples": [
      [
        "La ropa está en el armario.",
        "Одежда лежит в шкафу."
      ],
      [
        "El armario tiene dos puertas.",
        "У шкафа две двери."
      ]
    ],
    "cloze": "La ropa está en el ___.",
    "clozeAnswers": [
      "armario"
    ],
    "meta": {
      "categoryTitle": "Спальня",
      "categoryOrder": 5,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/armario.webp"
  },
  {
    "id": "comoda",
    "cat": "bedroom_items",
    "word": "la cómoda",
    "base": "la cómoda",
    "gender": "женский род",
    "tr": "комод",
    "ru": [
      "комод"
    ],
    "answers": [
      "cómoda",
      "comoda",
      "la cómoda",
      "la comoda"
    ],
    "art": null,
    "examples": [
      [
        "La cómoda tiene cuatro cajones.",
        "У комода четыре ящика."
      ],
      [
        "Guardo la ropa en la cómoda.",
        "Я храню одежду в комоде."
      ]
    ],
    "cloze": "La ___ tiene cuatro cajones.",
    "clozeAnswers": [
      "cómoda",
      "comoda"
    ],
    "meta": {
      "categoryTitle": "Спальня",
      "categoryOrder": 5,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/comoda.webp"
  },
  {
    "id": "mesita_noche",
    "cat": "bedroom_items",
    "word": "la mesita de noche",
    "base": "la mesita de noche",
    "gender": "женский род",
    "tr": "прикроватная тумбочка",
    "ru": [
      "прикроватная тумбочка",
      "тумбочка"
    ],
    "answers": [
      "mesita de noche",
      "la mesita de noche"
    ],
    "art": null,
    "examples": [
      [
        "La mesita de noche está al lado de la cama.",
        "Прикроватная тумбочка стоит рядом с кроватью."
      ],
      [
        "El despertador está en la mesita de noche.",
        "Будильник стоит на прикроватной тумбочке."
      ]
    ],
    "cloze": "La ___ está al lado de la cama.",
    "clozeAnswers": [
      "mesita de noche"
    ],
    "meta": {
      "categoryTitle": "Спальня",
      "categoryOrder": 5,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/mesita_noche.webp"
  },
  {
    "id": "espejo",
    "cat": "bedroom_items",
    "word": "el espejo",
    "base": "el espejo",
    "gender": "мужской род",
    "tr": "зеркало",
    "ru": [
      "зеркало"
    ],
    "answers": [
      "espejo",
      "el espejo"
    ],
    "art": null,
    "examples": [
      [
        "El espejo está frente al armario.",
        "Зеркало находится напротив шкафа."
      ],
      [
        "Me miro en el espejo.",
        "Я смотрюсь в зеркало."
      ]
    ],
    "cloze": "El ___ está frente al armario.",
    "clozeAnswers": [
      "espejo"
    ],
    "meta": {
      "categoryTitle": "Спальня",
      "categoryOrder": 5,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/espejo.webp"
  },
  {
    "id": "nevera_frigorifico",
    "cat": "kitchen_items",
    "word": "la nevera / el frigorífico",
    "base": "la nevera / el frigorífico",
    "gender": "женский / мужской род",
    "tr": "холодильник",
    "ru": [
      "холодильник"
    ],
    "answers": [
      "nevera",
      "la nevera",
      "frigorífico",
      "frigorifico",
      "el frigorífico",
      "el frigorifico"
    ],
    "art": null,
    "examples": [
      [
        "La leche está en la nevera.",
        "Молоко стоит в холодильнике."
      ],
      [
        "El frigorífico está junto al fregadero.",
        "Холодильник стоит рядом с кухонной раковиной."
      ]
    ],
    "cloze": "La leche está en la ___.",
    "clozeAnswers": [
      "nevera"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/nevera.webp"
  },
  {
    "id": "horno",
    "cat": "kitchen_items",
    "word": "el horno",
    "base": "el horno",
    "gender": "мужской род",
    "tr": "духовка",
    "ru": [
      "духовка"
    ],
    "answers": [
      "horno",
      "el horno"
    ],
    "art": null,
    "examples": [
      [
        "El pan está en el horno.",
        "Хлеб в духовке."
      ],
      [
        "Enciendo el horno para cocinar.",
        "Я включаю духовку, чтобы готовить."
      ]
    ],
    "cloze": "El pan está en el ___.",
    "clozeAnswers": [
      "horno"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/horno.webp"
  },
  {
    "id": "microondas",
    "cat": "kitchen_items",
    "word": "el microondas",
    "base": "el microondas",
    "gender": "мужской род",
    "tr": "микроволновка",
    "ru": [
      "микроволновка",
      "микроволновая печь"
    ],
    "answers": [
      "microondas",
      "el microondas"
    ],
    "art": null,
    "examples": [
      [
        "Caliento la comida en el microondas.",
        "Я разогреваю еду в микроволновке."
      ],
      [
        "El microondas está sobre la encimera.",
        "Микроволновка стоит на столешнице."
      ]
    ],
    "cloze": "Caliento la comida en el ___.",
    "clozeAnswers": [
      "microondas"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/microondas.webp"
  },
  {
    "id": "cocina_estufa",
    "cat": "kitchen_items",
    "word": "la cocina",
    "base": "la cocina",
    "gender": "женский род",
    "tr": "плита",
    "ru": [
      "плита"
    ],
    "answers": [
      "cocina",
      "la cocina"
    ],
    "art": null,
    "examples": [
      [
        "La olla está sobre la cocina.",
        "Кастрюля стоит на плите."
      ],
      [
        "Apago la cocina después de cocinar.",
        "Я выключаю плиту после готовки."
      ]
    ],
    "cloze": "La olla está sobre la ___.",
    "clozeAnswers": [
      "cocina"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/cocina_estufa.webp"
  },
  {
    "id": "fregadero",
    "cat": "kitchen_items",
    "word": "el fregadero",
    "base": "el fregadero",
    "gender": "мужской род",
    "tr": "раковина (кухонная)",
    "ru": [
      "раковина",
      "кухонная раковина"
    ],
    "answers": [
      "fregadero",
      "el fregadero"
    ],
    "art": null,
    "examples": [
      [
        "Lavo los platos en el fregadero.",
        "Я мою посуду в кухонной раковине."
      ],
      [
        "El fregadero está junto al lavavajillas.",
        "Раковина находится рядом с посудомоечной машиной."
      ]
    ],
    "cloze": "Lavo los platos en el ___.",
    "clozeAnswers": [
      "fregadero"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/fregadero.webp"
  },
  {
    "id": "lavavajillas",
    "cat": "kitchen_items",
    "word": "el lavavajillas",
    "base": "el lavavajillas",
    "gender": "мужской род",
    "tr": "посудомоечная машина",
    "ru": [
      "посудомоечная машина",
      "посудомойка"
    ],
    "answers": [
      "lavavajillas",
      "el lavavajillas"
    ],
    "art": null,
    "examples": [
      [
        "Pongo los platos en el lavavajillas.",
        "Я ставлю посуду в посудомоечную машину."
      ],
      [
        "El lavavajillas está lleno.",
        "Посудомоечная машина заполнена."
      ]
    ],
    "cloze": "Pongo los platos en el ___.",
    "clozeAnswers": [
      "lavavajillas"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/lavavajillas.webp"
  },
  {
    "id": "hervidor",
    "cat": "kitchen_items",
    "word": "el hervidor",
    "base": "el hervidor",
    "gender": "мужской род",
    "tr": "чайник (электрический)",
    "ru": [
      "чайник",
      "электрический чайник"
    ],
    "answers": [
      "hervidor",
      "el hervidor"
    ],
    "art": null,
    "examples": [
      [
        "Caliento agua en el hervidor.",
        "Я нагреваю воду в электрическом чайнике."
      ],
      [
        "El hervidor está junto a la cafetera.",
        "Чайник стоит рядом с кофеваркой."
      ]
    ],
    "cloze": "Caliento agua en el ___.",
    "clozeAnswers": [
      "hervidor"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/hervidor.webp"
  },
  {
    "id": "cafetera",
    "cat": "kitchen_items",
    "word": "la cafetera",
    "base": "la cafetera",
    "gender": "женский род",
    "tr": "кофеварка",
    "ru": [
      "кофеварка"
    ],
    "answers": [
      "cafetera",
      "la cafetera"
    ],
    "art": null,
    "examples": [
      [
        "Preparo café en la cafetera.",
        "Я готовлю кофе в кофеварке."
      ],
      [
        "La cafetera está en la cocina.",
        "Кофеварка стоит на кухне."
      ]
    ],
    "cloze": "Preparo café en la ___.",
    "clozeAnswers": [
      "cafetera"
    ],
    "meta": {
      "categoryTitle": "Кухня",
      "categoryOrder": 6,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/cafetera.webp"
  },
  {
    "id": "ducha",
    "cat": "bathroom_items",
    "word": "la ducha",
    "base": "la ducha",
    "gender": "женский род",
    "tr": "душ",
    "ru": [
      "душ"
    ],
    "answers": [
      "ducha",
      "la ducha"
    ],
    "art": null,
    "examples": [
      [
        "La ducha está junto a la bañera.",
        "Душ находится рядом с ванной."
      ],
      [
        "Me ducho por la mañana.",
        "Я принимаю душ утром."
      ]
    ],
    "cloze": "La ___ está junto a la bañera.",
    "clozeAnswers": [
      "ducha"
    ],
    "meta": {
      "categoryTitle": "Ванная",
      "categoryOrder": 7,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/ducha.webp"
  },
  {
    "id": "banera",
    "cat": "bathroom_items",
    "word": "la bañera",
    "base": "la bañera",
    "gender": "женский род",
    "tr": "ванна",
    "ru": [
      "ванна"
    ],
    "answers": [
      "bañera",
      "banera",
      "la bañera",
      "la banera"
    ],
    "art": null,
    "examples": [
      [
        "La bañera es blanca.",
        "Ванна белая."
      ],
      [
        "Lleno la bañera con agua caliente.",
        "Я наполняю ванну горячей водой."
      ]
    ],
    "cloze": "La ___ es blanca.",
    "clozeAnswers": [
      "bañera",
      "banera"
    ],
    "meta": {
      "categoryTitle": "Ванная",
      "categoryOrder": 7,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/banera.webp"
  },
  {
    "id": "lavabo",
    "cat": "bathroom_items",
    "word": "el lavabo",
    "base": "el lavabo",
    "gender": "мужской род",
    "tr": "раковина (умывальник)",
    "ru": [
      "раковина",
      "умывальник"
    ],
    "answers": [
      "lavabo",
      "el lavabo"
    ],
    "art": null,
    "examples": [
      [
        "Me lavo las manos en el lavabo.",
        "Я мою руки в раковине."
      ],
      [
        "El lavabo está debajo del espejo.",
        "Умывальник находится под зеркалом."
      ]
    ],
    "cloze": "Me lavo las manos en el ___.",
    "clozeAnswers": [
      "lavabo"
    ],
    "meta": {
      "categoryTitle": "Ванная",
      "categoryOrder": 7,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/lavabo.webp"
  },
  {
    "id": "inodoro",
    "cat": "bathroom_items",
    "word": "el inodoro",
    "base": "el inodoro",
    "gender": "мужской род",
    "tr": "унитаз",
    "ru": [
      "унитаз"
    ],
    "answers": [
      "inodoro",
      "el inodoro"
    ],
    "art": null,
    "examples": [
      [
        "El inodoro está al lado del lavabo.",
        "Унитаз находится рядом с раковиной."
      ],
      [
        "El baño tiene un inodoro nuevo.",
        "В ванной новый унитаз."
      ]
    ],
    "cloze": "El ___ está al lado del lavabo.",
    "clozeAnswers": [
      "inodoro"
    ],
    "meta": {
      "categoryTitle": "Ванная",
      "categoryOrder": 7,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/inodoro.webp"
  },
  {
    "id": "toalla",
    "cat": "bathroom_items",
    "word": "la toalla",
    "base": "la toalla",
    "gender": "женский род",
    "tr": "полотенце",
    "ru": [
      "полотенце"
    ],
    "answers": [
      "toalla",
      "la toalla"
    ],
    "art": null,
    "examples": [
      [
        "La toalla está junto a la ducha.",
        "Полотенце висит рядом с душем."
      ],
      [
        "Necesito una toalla limpia.",
        "Мне нужно чистое полотенце."
      ]
    ],
    "cloze": "La ___ está junto a la ducha.",
    "clozeAnswers": [
      "toalla"
    ],
    "meta": {
      "categoryTitle": "Ванная",
      "categoryOrder": 7,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/toalla.webp"
  },
  {
    "id": "cepillo",
    "cat": "bathroom_items",
    "word": "el cepillo",
    "base": "el cepillo",
    "gender": "мужской род",
    "tr": "щетка",
    "ru": [
      "щетка",
      "щётка"
    ],
    "answers": [
      "cepillo",
      "el cepillo"
    ],
    "art": null,
    "examples": [
      [
        "El cepillo está junto al lavabo.",
        "Щетка лежит рядом с раковиной."
      ],
      [
        "Uso el cepillo todas las mañanas.",
        "Я пользуюсь щеткой каждое утро."
      ]
    ],
    "cloze": "El ___ está junto al lavabo.",
    "clozeAnswers": [
      "cepillo"
    ],
    "meta": {
      "categoryTitle": "Ванная",
      "categoryOrder": 7,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/cepillo.webp"
  },
  {
    "id": "secador",
    "cat": "bathroom_items",
    "word": "el secador",
    "base": "el secador",
    "gender": "мужской род",
    "tr": "фен",
    "ru": [
      "фен"
    ],
    "answers": [
      "secador",
      "el secador"
    ],
    "art": null,
    "examples": [
      [
        "El secador está en el cajón.",
        "Фен лежит в ящике."
      ],
      [
        "Me seco el pelo con el secador.",
        "Я сушу волосы феном."
      ]
    ],
    "cloze": "El ___ está en el cajón.",
    "clozeAnswers": [
      "secador"
    ],
    "meta": {
      "categoryTitle": "Ванная",
      "categoryOrder": 7,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/secador.webp"
  },
  {
    "id": "enchufe",
    "cat": "small_home_items",
    "word": "el enchufe",
    "base": "el enchufe",
    "gender": "мужской род",
    "tr": "розетка",
    "ru": [
      "розетка"
    ],
    "answers": [
      "enchufe",
      "el enchufe"
    ],
    "art": null,
    "examples": [
      [
        "El enchufe está junto a la mesa.",
        "Розетка находится рядом со столом."
      ],
      [
        "Conecto la lámpara al enchufe.",
        "Я подключаю лампу к розетке."
      ]
    ],
    "cloze": "El ___ está junto a la mesa.",
    "clozeAnswers": [
      "enchufe"
    ],
    "meta": {
      "categoryTitle": "Мелкие вещи",
      "categoryOrder": 8,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/enchufe.webp"
  },
  {
    "id": "interruptor",
    "cat": "small_home_items",
    "word": "el interruptor",
    "base": "el interruptor",
    "gender": "мужской род",
    "tr": "выключатель",
    "ru": [
      "выключатель"
    ],
    "answers": [
      "interruptor",
      "el interruptor"
    ],
    "art": null,
    "examples": [
      [
        "El interruptor está junto a la puerta.",
        "Выключатель находится рядом с дверью."
      ],
      [
        "Pulso el interruptor para encender la luz.",
        "Я нажимаю выключатель, чтобы включить свет."
      ]
    ],
    "cloze": "El ___ está junto a la puerta.",
    "clozeAnswers": [
      "interruptor"
    ],
    "meta": {
      "categoryTitle": "Мелкие вещи",
      "categoryOrder": 8,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/interruptor.webp"
  },
  {
    "id": "llave",
    "cat": "small_home_items",
    "word": "la llave",
    "base": "la llave",
    "gender": "женский род",
    "tr": "ключ",
    "ru": [
      "ключ"
    ],
    "answers": [
      "llave",
      "la llave"
    ],
    "art": null,
    "examples": [
      [
        "La llave está sobre la mesa.",
        "Ключ лежит на столе."
      ],
      [
        "Cierro la puerta con la llave.",
        "Я закрываю дверь ключом."
      ]
    ],
    "cloze": "La ___ está sobre la mesa.",
    "clozeAnswers": [
      "llave"
    ],
    "meta": {
      "categoryTitle": "Мелкие вещи",
      "categoryOrder": 8,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/llave.webp"
  },
  {
    "id": "cubo_basura",
    "cat": "small_home_items",
    "word": "el cubo de basura",
    "base": "el cubo de basura",
    "gender": "мужской род",
    "tr": "мусорное ведро",
    "ru": [
      "мусорное ведро"
    ],
    "answers": [
      "cubo de basura",
      "el cubo de basura"
    ],
    "art": null,
    "examples": [
      [
        "El cubo de basura está debajo del fregadero.",
        "Мусорное ведро стоит под раковиной."
      ],
      [
        "Tiro el papel al cubo de basura.",
        "Я выбрасываю бумагу в мусорное ведро."
      ]
    ],
    "cloze": "El ___ está debajo del fregadero.",
    "clozeAnswers": [
      "cubo de basura"
    ],
    "meta": {
      "categoryTitle": "Мелкие вещи",
      "categoryOrder": 8,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/cubo_basura.webp"
  },
  {
    "id": "percha",
    "cat": "small_home_items",
    "word": "la percha",
    "base": "la percha",
    "gender": "женский род",
    "tr": "вешалка / плечики",
    "ru": [
      "вешалка",
      "плечики"
    ],
    "answers": [
      "percha",
      "la percha"
    ],
    "art": null,
    "examples": [
      [
        "La camisa está en una percha.",
        "Рубашка висит на плечиках."
      ],
      [
        "Hay varias perchas en el armario.",
        "В шкафу несколько вешалок."
      ]
    ],
    "cloze": "La camisa está en una ___.",
    "clozeAnswers": [
      "percha"
    ],
    "meta": {
      "categoryTitle": "Мелкие вещи",
      "categoryOrder": 8,
      "allCategoryTitle": "Весь дом"
    },
    "image": "assets/picture-labels/percha.webp"
  }
];

const EXERCISES = [
  {
    "id": "study_home_cocina_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кухня.",
    "a": [
      "cocina",
      "la cocina"
    ],
    "e": "Правильный вариант: la cocina."
  },
  {
    "id": "study_home_cocina_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: la cocina.",
    "a": [
      "кухня"
    ],
    "e": "la cocina — кухня."
  },
  {
    "id": "study_home_cocina_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Кухня светлая.»: La ___ es luminosa.",
    "a": [
      "cocina"
    ],
    "e": "La cocina es luminosa. — Кухня светлая."
  },
  {
    "id": "study_home_salón_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: гостиная.",
    "a": [
      "salón",
      "salon",
      "el salón",
      "el salon",
      "sala de estar",
      "la sala de estar"
    ],
    "e": "Правильный вариант: el salón."
  },
  {
    "id": "study_home_salón_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el salón.",
    "a": [
      "гостиная"
    ],
    "e": "el salón — гостиная."
  },
  {
    "id": "study_home_salón_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В гостиной стоит большой диван.»: El ___ tiene un sofá grande.",
    "a": [
      "salón",
      "salon"
    ],
    "e": "El salón tiene un sofá grande. — В гостиной стоит большой диван."
  },
  {
    "id": "study_home_sala_estar_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: гостиная.",
    "a": [
      "sala de estar",
      "la sala de estar",
      "salón",
      "salon",
      "el salón",
      "el salon"
    ],
    "e": "Правильный вариант: la sala de estar."
  },
  {
    "id": "study_home_sala_estar_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: la sala de estar.",
    "a": [
      "гостиная"
    ],
    "e": "la sala de estar — гостиная."
  },
  {
    "id": "study_home_sala_estar_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Гостиная находится рядом с кухней.»: La ___ está junto a la cocina.",
    "a": [
      "sala de estar"
    ],
    "e": "La sala de estar está junto a la cocina. — Гостиная находится рядом с кухней."
  },
  {
    "id": "study_home_dormitorio_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: спальня.",
    "a": [
      "dormitorio",
      "el dormitorio",
      "habitación",
      "habitacion",
      "la habitación",
      "la habitacion"
    ],
    "e": "Правильный вариант: el dormitorio."
  },
  {
    "id": "study_home_dormitorio_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el dormitorio.",
    "a": [
      "спальня"
    ],
    "e": "el dormitorio — спальня."
  },
  {
    "id": "study_home_dormitorio_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Спальня находится на втором этаже.»: El ___ está en la segunda planta.",
    "a": [
      "dormitorio"
    ],
    "e": "El dormitorio está en la segunda planta. — Спальня находится на втором этаже."
  },
  {
    "id": "study_home_habitación_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: спальня.",
    "a": [
      "habitación",
      "habitacion",
      "la habitación",
      "la habitacion",
      "dormitorio",
      "el dormitorio"
    ],
    "e": "Правильный вариант: la habitación."
  },
  {
    "id": "study_home_habitación_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: la habitación.",
    "a": [
      "спальня",
      "комната"
    ],
    "e": "la habitación — спальня."
  },
  {
    "id": "study_home_habitación_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В спальне большое окно.»: La ___ tiene una ventana grande.",
    "a": [
      "habitación",
      "habitacion"
    ],
    "e": "La habitación tiene una ventana grande. — В спальне большое окно."
  },
  {
    "id": "study_home_baño_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ванная.",
    "a": [
      "baño",
      "bano",
      "el baño",
      "el bano"
    ],
    "e": "Правильный вариант: el baño."
  },
  {
    "id": "study_home_baño_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el baño.",
    "a": [
      "ванная",
      "ванная комната"
    ],
    "e": "el baño — ванная."
  },
  {
    "id": "study_home_baño_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ванная находится рядом со спальней.»: El ___ está al lado del dormitorio.",
    "a": [
      "baño",
      "bano"
    ],
    "e": "El baño está al lado del dormitorio. — Ванная находится рядом со спальней."
  },
  {
    "id": "study_home_pasillo_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: коридор.",
    "a": [
      "pasillo",
      "el pasillo"
    ],
    "e": "Правильный вариант: el pasillo."
  },
  {
    "id": "study_home_pasillo_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el pasillo.",
    "a": [
      "коридор"
    ],
    "e": "el pasillo — коридор."
  },
  {
    "id": "study_home_pasillo_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Коридор длинный и узкий.»: El ___ es largo y estrecho.",
    "a": [
      "pasillo"
    ],
    "e": "El pasillo es largo y estrecho. — Коридор длинный и узкий."
  },
  {
    "id": "study_home_comedor_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: столовая.",
    "a": [
      "comedor",
      "el comedor"
    ],
    "e": "Правильный вариант: el comedor."
  },
  {
    "id": "study_home_comedor_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el comedor.",
    "a": [
      "столовая"
    ],
    "e": "el comedor — столовая."
  },
  {
    "id": "study_home_comedor_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы едим вместе в столовой.»: Comemos juntos en el ___.",
    "a": [
      "comedor"
    ],
    "e": "Comemos juntos en el comedor. — Мы едим вместе в столовой."
  },
  {
    "id": "study_home_despacho_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кабинет.",
    "a": [
      "despacho",
      "el despacho"
    ],
    "e": "Правильный вариант: el despacho."
  },
  {
    "id": "study_home_despacho_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el despacho.",
    "a": [
      "кабинет",
      "рабочий кабинет"
    ],
    "e": "el despacho — кабинет."
  },
  {
    "id": "study_home_despacho_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я работаю из дома в кабинете.»: Trabajo en el ___.",
    "a": [
      "despacho"
    ],
    "e": "Trabajo desde casa en el despacho. — Я работаю из дома в кабинете."
  },
  {
    "id": "study_home_balcón_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: балкон.",
    "a": [
      "balcón",
      "balcon",
      "el balcón",
      "el balcon"
    ],
    "e": "Правильный вариант: el balcón."
  },
  {
    "id": "study_home_balcón_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el balcón.",
    "a": [
      "балкон"
    ],
    "e": "el balcón — балкон."
  },
  {
    "id": "study_home_balcón_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Балкон выходит во двор.»: El ___ da al patio.",
    "a": [
      "balcón",
      "balcon"
    ],
    "e": "El balcón da al patio. — Балкон выходит во двор."
  },
  {
    "id": "study_home_terrazas_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: терраса.",
    "a": [
      "terraza",
      "la terraza"
    ],
    "e": "Правильный вариант: la terraza."
  },
  {
    "id": "study_home_terrazas_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: la terraza.",
    "a": [
      "терраса"
    ],
    "e": "la terraza — терраса."
  },
  {
    "id": "study_home_terrazas_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы завтракаем на террасе.»: Desayunamos en la ___.",
    "a": [
      "terraza"
    ],
    "e": "Desayunamos en la terraza. — Мы завтракаем на террасе."
  },
  {
    "id": "study_home_garaje_es",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Вспомни",
    "q": "Переведи на испанский: гараж.",
    "a": [
      "garaje",
      "el garaje"
    ],
    "e": "Правильный вариант: el garaje."
  },
  {
    "id": "study_home_garaje_ru",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "Узнай",
    "q": "Переведи на русский: el garaje.",
    "a": [
      "гараж"
    ],
    "e": "el garaje — гараж."
  },
  {
    "id": "study_home_garaje_ctx",
    "topic": "home",
    "foodCat": "rooms",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Машина стоит в гараже.»: El coche está en el ___.",
    "a": [
      "garaje"
    ],
    "e": "El coche está en el garaje. — Машина стоит в гараже."
  },
  {
    "id": "study_home_puerta_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: дверь.",
    "a": [
      "puerta",
      "la puerta"
    ],
    "e": "Правильный вариант: la puerta."
  },
  {
    "id": "study_home_puerta_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: la puerta.",
    "a": [
      "дверь"
    ],
    "e": "la puerta — дверь."
  },
  {
    "id": "study_home_puerta_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Закрой дверь, пожалуйста.»: Cierra la ___.",
    "a": [
      "puerta"
    ],
    "e": "Cierra la puerta, por favor. — Закрой дверь, пожалуйста."
  },
  {
    "id": "study_home_ventana_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: окно.",
    "a": [
      "ventana",
      "la ventana"
    ],
    "e": "Правильный вариант: la ventana."
  },
  {
    "id": "study_home_ventana_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: la ventana.",
    "a": [
      "окно"
    ],
    "e": "la ventana — окно."
  },
  {
    "id": "study_home_ventana_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Утром я открываю окно.»: Abro la ___ por la mañana.",
    "a": [
      "ventana"
    ],
    "e": "Abro la ventana por la mañana. — Утром я открываю окно."
  },
  {
    "id": "study_home_suelo_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: пол.",
    "a": [
      "suelo",
      "el suelo"
    ],
    "e": "Правильный вариант: el suelo."
  },
  {
    "id": "study_home_suelo_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: el suelo.",
    "a": [
      "пол"
    ],
    "e": "el suelo — пол."
  },
  {
    "id": "study_home_suelo_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Пол деревянный.»: El ___ es de madera.",
    "a": [
      "suelo"
    ],
    "e": "El suelo es de madera. — Пол деревянный."
  },
  {
    "id": "study_home_techo_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: потолок.",
    "a": [
      "techo",
      "el techo"
    ],
    "e": "Правильный вариант: el techo."
  },
  {
    "id": "study_home_techo_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: el techo.",
    "a": [
      "потолок"
    ],
    "e": "el techo — потолок."
  },
  {
    "id": "study_home_techo_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Потолок очень высокий.»: El ___ es muy alto.",
    "a": [
      "techo"
    ],
    "e": "El techo es muy alto. — Потолок очень высокий."
  },
  {
    "id": "study_home_pared_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: стена.",
    "a": [
      "pared",
      "la pared"
    ],
    "e": "Правильный вариант: la pared."
  },
  {
    "id": "study_home_pared_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: la pared.",
    "a": [
      "стена"
    ],
    "e": "la pared — стена."
  },
  {
    "id": "study_home_pared_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Стена белая.»: La ___ es blanca.",
    "a": [
      "pared"
    ],
    "e": "La pared es blanca. — Стена белая."
  },
  {
    "id": "study_home_escaleras_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: лестница.",
    "a": [
      "escaleras",
      "las escaleras"
    ],
    "e": "Правильный вариант: las escaleras."
  },
  {
    "id": "study_home_escaleras_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: las escaleras.",
    "a": [
      "лестница",
      "лестницы"
    ],
    "e": "las escaleras — лестница."
  },
  {
    "id": "study_home_escaleras_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы поднимаемся по лестнице.»: Subimos por las ___.",
    "a": [
      "escaleras"
    ],
    "e": "Subimos por las escaleras. — Мы поднимаемся по лестнице."
  },
  {
    "id": "study_home_ascensor_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: лифт.",
    "a": [
      "ascensor",
      "el ascensor"
    ],
    "e": "Правильный вариант: el ascensor."
  },
  {
    "id": "study_home_ascensor_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: el ascensor.",
    "a": [
      "лифт"
    ],
    "e": "el ascensor — лифт."
  },
  {
    "id": "study_home_ascensor_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Лифт находится в конце коридора.»: El ___ está al final del pasillo.",
    "a": [
      "ascensor"
    ],
    "e": "El ascensor está al final del pasillo. — Лифт находится в конце коридора."
  },
  {
    "id": "study_home_entrada_es",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вход.",
    "a": [
      "entrada",
      "la entrada"
    ],
    "e": "Правильный вариант: la entrada."
  },
  {
    "id": "study_home_entrada_ru",
    "topic": "home",
    "foodCat": "parts",
    "skill": "Узнай",
    "q": "Переведи на русский: la entrada.",
    "a": [
      "вход"
    ],
    "e": "la entrada — вход."
  },
  {
    "id": "study_home_entrada_ctx",
    "topic": "home",
    "foodCat": "parts",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Вход находится справа.»: La ___ está a la derecha.",
    "a": [
      "entrada"
    ],
    "e": "La entrada está a la derecha. — Вход находится справа."
  },
  {
    "id": "study_home_casa_es",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Вспомни",
    "q": "Переведи на испанский: дом.",
    "a": [
      "casa",
      "la casa"
    ],
    "e": "Правильный вариант: la casa."
  },
  {
    "id": "study_home_casa_ru",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Узнай",
    "q": "Переведи на русский: la casa.",
    "a": [
      "дом"
    ],
    "e": "la casa — дом."
  },
  {
    "id": "study_home_casa_ctx",
    "topic": "home",
    "foodCat": "housing",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В нашем доме два этажа.»: Nuestra ___ tiene dos plantas.",
    "a": [
      "casa"
    ],
    "e": "Nuestra casa tiene dos plantas. — В нашем доме два этажа."
  },
  {
    "id": "study_home_piso_es",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Вспомни",
    "q": "Переведи на испанский: квартира.",
    "a": [
      "piso",
      "el piso"
    ],
    "e": "Правильный вариант: el piso."
  },
  {
    "id": "study_home_piso_ru",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Узнай",
    "q": "Переведи на русский: el piso.",
    "a": [
      "квартира"
    ],
    "e": "el piso — квартира."
  },
  {
    "id": "study_home_piso_ctx",
    "topic": "home",
    "foodCat": "housing",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я живу в небольшой квартире.»: Vivo en un ___.",
    "a": [
      "piso"
    ],
    "e": "Vivo en un piso pequeño. — Я живу в небольшой квартире."
  },
  {
    "id": "study_home_apartamento_es",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Вспомни",
    "q": "Переведи на испанский: апартаменты.",
    "a": [
      "apartamento",
      "el apartamento"
    ],
    "e": "Правильный вариант: el apartamento."
  },
  {
    "id": "study_home_apartamento_ru",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Узнай",
    "q": "Переведи на русский: el apartamento.",
    "a": [
      "апартаменты",
      "квартира"
    ],
    "e": "el apartamento — апартаменты."
  },
  {
    "id": "study_home_apartamento_ctx",
    "topic": "home",
    "foodCat": "housing",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы снимаем апартаменты рядом с морем.»: Alquilamos un ___.",
    "a": [
      "apartamento"
    ],
    "e": "Alquilamos un apartamento cerca del mar. — Мы снимаем апартаменты рядом с морем."
  },
  {
    "id": "study_home_edificio_es",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Вспомни",
    "q": "Переведи на испанский: здание.",
    "a": [
      "edificio",
      "el edificio"
    ],
    "e": "Правильный вариант: el edificio."
  },
  {
    "id": "study_home_edificio_ru",
    "topic": "home",
    "foodCat": "housing",
    "skill": "Узнай",
    "q": "Переведи на русский: el edificio.",
    "a": [
      "здание"
    ],
    "e": "el edificio — здание."
  },
  {
    "id": "study_home_edificio_ctx",
    "topic": "home",
    "foodCat": "housing",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «В здании восемь этажей.»: El ___ tiene ocho plantas.",
    "a": [
      "edificio"
    ],
    "e": "El edificio tiene ocho plantas. — В здании восемь этажей."
  },
  {
    "id": "study_home_sofa_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: диван.",
    "a": [
      "sofá",
      "sofa",
      "el sofá",
      "el sofa"
    ],
    "e": "Правильный вариант: el sofá."
  },
  {
    "id": "study_home_sofa_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: el sofá.",
    "a": [
      "диван"
    ],
    "e": "el sofá — диван."
  },
  {
    "id": "study_home_sofa_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Диван стоит рядом с окном.»: El ___ está junto a la ventana.",
    "a": [
      "sofá",
      "sofa"
    ],
    "e": "El sofá está junto a la ventana. — Диван стоит рядом с окном."
  },
  {
    "id": "study_home_sillon_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кресло.",
    "a": [
      "sillón",
      "sillon",
      "el sillón",
      "el sillon"
    ],
    "e": "Правильный вариант: el sillón."
  },
  {
    "id": "study_home_sillon_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: el sillón.",
    "a": [
      "кресло"
    ],
    "e": "el sillón — кресло."
  },
  {
    "id": "study_home_sillon_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Кресло очень удобное.»: El ___ es muy cómodo.",
    "a": [
      "sillón",
      "sillon"
    ],
    "e": "El sillón es muy cómodo. — Кресло очень удобное."
  },
  {
    "id": "study_home_mesa_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: стол.",
    "a": [
      "mesa",
      "la mesa"
    ],
    "e": "Правильный вариант: la mesa."
  },
  {
    "id": "study_home_mesa_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: la mesa.",
    "a": [
      "стол"
    ],
    "e": "la mesa — стол."
  },
  {
    "id": "study_home_mesa_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Стол стоит перед диваном.»: La ___ está delante del sofá.",
    "a": [
      "mesa"
    ],
    "e": "La mesa está delante del sofá. — Стол стоит перед диваном."
  },
  {
    "id": "study_home_silla_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: стул.",
    "a": [
      "silla",
      "la silla"
    ],
    "e": "Правильный вариант: la silla."
  },
  {
    "id": "study_home_silla_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: la silla.",
    "a": [
      "стул"
    ],
    "e": "la silla — стул."
  },
  {
    "id": "study_home_silla_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Стул стоит рядом со столом.»: La ___ está junto a la mesa.",
    "a": [
      "silla"
    ],
    "e": "La silla está junto a la mesa. — Стул стоит рядом со столом."
  },
  {
    "id": "study_home_estanteria_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: книжный шкаф / полка.",
    "a": [
      "estantería",
      "estanteria",
      "la estantería",
      "la estanteria"
    ],
    "e": "Правильный вариант: la estantería."
  },
  {
    "id": "study_home_estanteria_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: la estantería.",
    "a": [
      "книжный шкаф",
      "полка",
      "книжный шкаф / полка"
    ],
    "e": "la estantería — книжный шкаф / полка."
  },
  {
    "id": "study_home_estanteria_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Книги стоят на полке.»: Los libros están en la ___.",
    "a": [
      "estantería",
      "estanteria"
    ],
    "e": "Los libros están en la estantería. — Книги стоят на полке."
  },
  {
    "id": "study_home_lampara_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: лампа.",
    "a": [
      "lámpara",
      "lampara",
      "la lámpara",
      "la lampara"
    ],
    "e": "Правильный вариант: la lámpara."
  },
  {
    "id": "study_home_lampara_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: la lámpara.",
    "a": [
      "лампа"
    ],
    "e": "la lámpara — лампа."
  },
  {
    "id": "study_home_lampara_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я включаю лампу вечером.»: Enciendo la ___ por la noche.",
    "a": [
      "lámpara",
      "lampara"
    ],
    "e": "Enciendo la lámpara por la noche. — Я включаю лампу вечером."
  },
  {
    "id": "study_home_alfombra_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ковер.",
    "a": [
      "alfombra",
      "la alfombra"
    ],
    "e": "Правильный вариант: la alfombra."
  },
  {
    "id": "study_home_alfombra_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: la alfombra.",
    "a": [
      "ковер",
      "ковёр"
    ],
    "e": "la alfombra — ковер."
  },
  {
    "id": "study_home_alfombra_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ковер лежит под столом.»: La ___ está debajo de la mesa.",
    "a": [
      "alfombra"
    ],
    "e": "La alfombra está debajo de la mesa. — Ковер лежит под столом."
  },
  {
    "id": "study_home_cortinas_es",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Вспомни",
    "q": "Переведи на испанский: шторы.",
    "a": [
      "cortinas",
      "las cortinas"
    ],
    "e": "Правильный вариант: las cortinas."
  },
  {
    "id": "study_home_cortinas_ru",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "Узнай",
    "q": "Переведи на русский: las cortinas.",
    "a": [
      "шторы"
    ],
    "e": "las cortinas — шторы."
  },
  {
    "id": "study_home_cortinas_ctx",
    "topic": "home",
    "foodCat": "living_room",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Шторы бежевого цвета.»: Abro las ___ por la mañana.",
    "a": [
      "cortinas"
    ],
    "e": "Las cortinas son de color beige. — Шторы бежевого цвета."
  },
  {
    "id": "study_home_cama_es",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кровать.",
    "a": [
      "cama",
      "la cama"
    ],
    "e": "Правильный вариант: la cama."
  },
  {
    "id": "study_home_cama_ru",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la cama.",
    "a": [
      "кровать"
    ],
    "e": "la cama — кровать."
  },
  {
    "id": "study_home_cama_ctx",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Кровать стоит рядом с окном.»: La ___ está junto a la ventana.",
    "a": [
      "cama"
    ],
    "e": "La cama está junto a la ventana. — Кровать стоит рядом с окном."
  },
  {
    "id": "study_home_almohada_es",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: подушка.",
    "a": [
      "almohada",
      "la almohada"
    ],
    "e": "Правильный вариант: la almohada."
  },
  {
    "id": "study_home_almohada_ru",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la almohada.",
    "a": [
      "подушка"
    ],
    "e": "la almohada — подушка."
  },
  {
    "id": "study_home_almohada_ctx",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Подушка лежит на кровати.»: La ___ está sobre la cama.",
    "a": [
      "almohada"
    ],
    "e": "La almohada está sobre la cama. — Подушка лежит на кровати."
  },
  {
    "id": "study_home_manta_es",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: одеяло / плед.",
    "a": [
      "manta",
      "la manta"
    ],
    "e": "Правильный вариант: la manta."
  },
  {
    "id": "study_home_manta_ru",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la manta.",
    "a": [
      "одеяло",
      "плед",
      "одеяло / плед"
    ],
    "e": "la manta — одеяло / плед."
  },
  {
    "id": "study_home_manta_ctx",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Плед лежит в ногах кровати.»: La ___ está al pie de la cama.",
    "a": [
      "manta"
    ],
    "e": "La manta está al pie de la cama. — Плед лежит в ногах кровати."
  },
  {
    "id": "study_home_armario_es",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: шкаф.",
    "a": [
      "armario",
      "el armario"
    ],
    "e": "Правильный вариант: el armario."
  },
  {
    "id": "study_home_armario_ru",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el armario.",
    "a": [
      "шкаф"
    ],
    "e": "el armario — шкаф."
  },
  {
    "id": "study_home_armario_ctx",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Одежда лежит в шкафу.»: La ropa está en el ___.",
    "a": [
      "armario"
    ],
    "e": "La ropa está en el armario. — Одежда лежит в шкафу."
  },
  {
    "id": "study_home_comoda_es",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: комод.",
    "a": [
      "cómoda",
      "comoda",
      "la cómoda",
      "la comoda"
    ],
    "e": "Правильный вариант: la cómoda."
  },
  {
    "id": "study_home_comoda_ru",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la cómoda.",
    "a": [
      "комод"
    ],
    "e": "la cómoda — комод."
  },
  {
    "id": "study_home_comoda_ctx",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «У комода четыре ящика.»: La ___ tiene cuatro cajones.",
    "a": [
      "cómoda",
      "comoda"
    ],
    "e": "La cómoda tiene cuatro cajones. — У комода четыре ящика."
  },
  {
    "id": "study_home_mesita_noche_es",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: прикроватная тумбочка.",
    "a": [
      "mesita de noche",
      "la mesita de noche"
    ],
    "e": "Правильный вариант: la mesita de noche."
  },
  {
    "id": "study_home_mesita_noche_ru",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la mesita de noche.",
    "a": [
      "прикроватная тумбочка",
      "тумбочка"
    ],
    "e": "la mesita de noche — прикроватная тумбочка."
  },
  {
    "id": "study_home_mesita_noche_ctx",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Прикроватная тумбочка стоит рядом с кроватью.»: La ___ está al lado de la cama.",
    "a": [
      "mesita de noche"
    ],
    "e": "La mesita de noche está al lado de la cama. — Прикроватная тумбочка стоит рядом с кроватью."
  },
  {
    "id": "study_home_espejo_es",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: зеркало.",
    "a": [
      "espejo",
      "el espejo"
    ],
    "e": "Правильный вариант: el espejo."
  },
  {
    "id": "study_home_espejo_ru",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el espejo.",
    "a": [
      "зеркало"
    ],
    "e": "el espejo — зеркало."
  },
  {
    "id": "study_home_espejo_ctx",
    "topic": "home",
    "foodCat": "bedroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Зеркало находится напротив шкафа.»: El ___ está frente al armario.",
    "a": [
      "espejo"
    ],
    "e": "El espejo está frente al armario. — Зеркало находится напротив шкафа."
  },
  {
    "id": "study_home_nevera_frigorifico_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: холодильник.",
    "a": [
      "nevera",
      "la nevera",
      "frigorífico",
      "frigorifico",
      "el frigorífico",
      "el frigorifico"
    ],
    "e": "Правильный вариант: la nevera / el frigorífico."
  },
  {
    "id": "study_home_nevera_frigorifico_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la nevera / el frigorífico.",
    "a": [
      "холодильник"
    ],
    "e": "la nevera / el frigorífico — холодильник."
  },
  {
    "id": "study_home_nevera_frigorifico_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Молоко стоит в холодильнике.»: La leche está en la ___.",
    "a": [
      "nevera"
    ],
    "e": "La leche está en la nevera. — Молоко стоит в холодильнике."
  },
  {
    "id": "study_home_horno_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: духовка.",
    "a": [
      "horno",
      "el horno"
    ],
    "e": "Правильный вариант: el horno."
  },
  {
    "id": "study_home_horno_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el horno.",
    "a": [
      "духовка"
    ],
    "e": "el horno — духовка."
  },
  {
    "id": "study_home_horno_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Хлеб в духовке.»: El pan está en el ___.",
    "a": [
      "horno"
    ],
    "e": "El pan está en el horno. — Хлеб в духовке."
  },
  {
    "id": "study_home_microondas_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: микроволновка.",
    "a": [
      "microondas",
      "el microondas"
    ],
    "e": "Правильный вариант: el microondas."
  },
  {
    "id": "study_home_microondas_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el microondas.",
    "a": [
      "микроволновка",
      "микроволновая печь"
    ],
    "e": "el microondas — микроволновка."
  },
  {
    "id": "study_home_microondas_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я разогреваю еду в микроволновке.»: Caliento la comida en el ___.",
    "a": [
      "microondas"
    ],
    "e": "Caliento la comida en el microondas. — Я разогреваю еду в микроволновке."
  },
  {
    "id": "study_home_cocina_estufa_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: плита.",
    "a": [
      "cocina",
      "la cocina"
    ],
    "e": "Правильный вариант: la cocina."
  },
  {
    "id": "study_home_cocina_estufa_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la cocina.",
    "a": [
      "плита"
    ],
    "e": "la cocina — плита."
  },
  {
    "id": "study_home_cocina_estufa_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Кастрюля стоит на плите.»: La olla está sobre la ___.",
    "a": [
      "cocina"
    ],
    "e": "La olla está sobre la cocina. — Кастрюля стоит на плите."
  },
  {
    "id": "study_home_fregadero_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: раковина (кухонная).",
    "a": [
      "fregadero",
      "el fregadero"
    ],
    "e": "Правильный вариант: el fregadero."
  },
  {
    "id": "study_home_fregadero_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el fregadero.",
    "a": [
      "раковина",
      "кухонная раковина",
      "раковина (кухонная)"
    ],
    "e": "el fregadero — раковина (кухонная)."
  },
  {
    "id": "study_home_fregadero_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я мою посуду в кухонной раковине.»: Lavo los platos en el ___.",
    "a": [
      "fregadero"
    ],
    "e": "Lavo los platos en el fregadero. — Я мою посуду в кухонной раковине."
  },
  {
    "id": "study_home_lavavajillas_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: посудомоечная машина.",
    "a": [
      "lavavajillas",
      "el lavavajillas"
    ],
    "e": "Правильный вариант: el lavavajillas."
  },
  {
    "id": "study_home_lavavajillas_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el lavavajillas.",
    "a": [
      "посудомоечная машина",
      "посудомойка"
    ],
    "e": "el lavavajillas — посудомоечная машина."
  },
  {
    "id": "study_home_lavavajillas_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я ставлю посуду в посудомоечную машину.»: Pongo los platos en el ___.",
    "a": [
      "lavavajillas"
    ],
    "e": "Pongo los platos en el lavavajillas. — Я ставлю посуду в посудомоечную машину."
  },
  {
    "id": "study_home_hervidor_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: чайник (электрический).",
    "a": [
      "hervidor",
      "el hervidor"
    ],
    "e": "Правильный вариант: el hervidor."
  },
  {
    "id": "study_home_hervidor_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el hervidor.",
    "a": [
      "чайник",
      "электрический чайник",
      "чайник (электрический)"
    ],
    "e": "el hervidor — чайник (электрический)."
  },
  {
    "id": "study_home_hervidor_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я нагреваю воду в электрическом чайнике.»: Caliento agua en el ___.",
    "a": [
      "hervidor"
    ],
    "e": "Caliento agua en el hervidor. — Я нагреваю воду в электрическом чайнике."
  },
  {
    "id": "study_home_cafetera_es",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: кофеварка.",
    "a": [
      "cafetera",
      "la cafetera"
    ],
    "e": "Правильный вариант: la cafetera."
  },
  {
    "id": "study_home_cafetera_ru",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la cafetera.",
    "a": [
      "кофеварка"
    ],
    "e": "la cafetera — кофеварка."
  },
  {
    "id": "study_home_cafetera_ctx",
    "topic": "home",
    "foodCat": "kitchen_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я готовлю кофе в кофеварке.»: Preparo café en la ___.",
    "a": [
      "cafetera"
    ],
    "e": "Preparo café en la cafetera. — Я готовлю кофе в кофеварке."
  },
  {
    "id": "study_home_ducha_es",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: душ.",
    "a": [
      "ducha",
      "la ducha"
    ],
    "e": "Правильный вариант: la ducha."
  },
  {
    "id": "study_home_ducha_ru",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la ducha.",
    "a": [
      "душ"
    ],
    "e": "la ducha — душ."
  },
  {
    "id": "study_home_ducha_ctx",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Душ находится рядом с ванной.»: La ___ está junto a la bañera.",
    "a": [
      "ducha"
    ],
    "e": "La ducha está junto a la bañera. — Душ находится рядом с ванной."
  },
  {
    "id": "study_home_banera_es",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ванна.",
    "a": [
      "bañera",
      "banera",
      "la bañera",
      "la banera"
    ],
    "e": "Правильный вариант: la bañera."
  },
  {
    "id": "study_home_banera_ru",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la bañera.",
    "a": [
      "ванна"
    ],
    "e": "la bañera — ванна."
  },
  {
    "id": "study_home_banera_ctx",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ванна белая.»: La ___ es blanca.",
    "a": [
      "bañera",
      "banera"
    ],
    "e": "La bañera es blanca. — Ванна белая."
  },
  {
    "id": "study_home_lavabo_es",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: раковина (умывальник).",
    "a": [
      "lavabo",
      "el lavabo"
    ],
    "e": "Правильный вариант: el lavabo."
  },
  {
    "id": "study_home_lavabo_ru",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el lavabo.",
    "a": [
      "раковина",
      "умывальник",
      "раковина (умывальник)"
    ],
    "e": "el lavabo — раковина (умывальник)."
  },
  {
    "id": "study_home_lavabo_ctx",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я мою руки в раковине.»: Me lavo las manos en el ___.",
    "a": [
      "lavabo"
    ],
    "e": "Me lavo las manos en el lavabo. — Я мою руки в раковине."
  },
  {
    "id": "study_home_inodoro_es",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: унитаз.",
    "a": [
      "inodoro",
      "el inodoro"
    ],
    "e": "Правильный вариант: el inodoro."
  },
  {
    "id": "study_home_inodoro_ru",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el inodoro.",
    "a": [
      "унитаз"
    ],
    "e": "el inodoro — унитаз."
  },
  {
    "id": "study_home_inodoro_ctx",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Унитаз находится рядом с раковиной.»: El ___ está al lado del lavabo.",
    "a": [
      "inodoro"
    ],
    "e": "El inodoro está al lado del lavabo. — Унитаз находится рядом с раковиной."
  },
  {
    "id": "study_home_toalla_es",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: полотенце.",
    "a": [
      "toalla",
      "la toalla"
    ],
    "e": "Правильный вариант: la toalla."
  },
  {
    "id": "study_home_toalla_ru",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la toalla.",
    "a": [
      "полотенце"
    ],
    "e": "la toalla — полотенце."
  },
  {
    "id": "study_home_toalla_ctx",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Полотенце висит рядом с душем.»: La ___ está junto a la ducha.",
    "a": [
      "toalla"
    ],
    "e": "La toalla está junto a la ducha. — Полотенце висит рядом с душем."
  },
  {
    "id": "study_home_cepillo_es",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: щетка.",
    "a": [
      "cepillo",
      "el cepillo"
    ],
    "e": "Правильный вариант: el cepillo."
  },
  {
    "id": "study_home_cepillo_ru",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el cepillo.",
    "a": [
      "щетка",
      "щётка"
    ],
    "e": "el cepillo — щетка."
  },
  {
    "id": "study_home_cepillo_ctx",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Щетка лежит рядом с раковиной.»: El ___ está junto al lavabo.",
    "a": [
      "cepillo"
    ],
    "e": "El cepillo está junto al lavabo. — Щетка лежит рядом с раковиной."
  },
  {
    "id": "study_home_secador_es",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: фен.",
    "a": [
      "secador",
      "el secador"
    ],
    "e": "Правильный вариант: el secador."
  },
  {
    "id": "study_home_secador_ru",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el secador.",
    "a": [
      "фен"
    ],
    "e": "el secador — фен."
  },
  {
    "id": "study_home_secador_ctx",
    "topic": "home",
    "foodCat": "bathroom_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Фен лежит в ящике.»: El ___ está en el cajón.",
    "a": [
      "secador"
    ],
    "e": "El secador está en el cajón. — Фен лежит в ящике."
  },
  {
    "id": "study_home_enchufe_es",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: розетка.",
    "a": [
      "enchufe",
      "el enchufe"
    ],
    "e": "Правильный вариант: el enchufe."
  },
  {
    "id": "study_home_enchufe_ru",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el enchufe.",
    "a": [
      "розетка"
    ],
    "e": "el enchufe — розетка."
  },
  {
    "id": "study_home_enchufe_ctx",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Розетка находится рядом со столом.»: El ___ está junto a la mesa.",
    "a": [
      "enchufe"
    ],
    "e": "El enchufe está junto a la mesa. — Розетка находится рядом со столом."
  },
  {
    "id": "study_home_interruptor_es",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: выключатель.",
    "a": [
      "interruptor",
      "el interruptor"
    ],
    "e": "Правильный вариант: el interruptor."
  },
  {
    "id": "study_home_interruptor_ru",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el interruptor.",
    "a": [
      "выключатель"
    ],
    "e": "el interruptor — выключатель."
  },
  {
    "id": "study_home_interruptor_ctx",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Выключатель находится рядом с дверью.»: El ___ está junto a la puerta.",
    "a": [
      "interruptor"
    ],
    "e": "El interruptor está junto a la puerta. — Выключатель находится рядом с дверью."
  },
  {
    "id": "study_home_llave_es",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: ключ.",
    "a": [
      "llave",
      "la llave"
    ],
    "e": "Правильный вариант: la llave."
  },
  {
    "id": "study_home_llave_ru",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la llave.",
    "a": [
      "ключ"
    ],
    "e": "la llave — ключ."
  },
  {
    "id": "study_home_llave_ctx",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Ключ лежит на столе.»: La ___ está sobre la mesa.",
    "a": [
      "llave"
    ],
    "e": "La llave está sobre la mesa. — Ключ лежит на столе."
  },
  {
    "id": "study_home_cubo_basura_es",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мусорное ведро.",
    "a": [
      "cubo de basura",
      "el cubo de basura"
    ],
    "e": "Правильный вариант: el cubo de basura."
  },
  {
    "id": "study_home_cubo_basura_ru",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Узнай",
    "q": "Переведи на русский: el cubo de basura.",
    "a": [
      "мусорное ведро"
    ],
    "e": "el cubo de basura — мусорное ведро."
  },
  {
    "id": "study_home_cubo_basura_ctx",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мусорное ведро стоит под раковиной.»: El ___ está debajo del fregadero.",
    "a": [
      "cubo de basura"
    ],
    "e": "El cubo de basura está debajo del fregadero. — Мусорное ведро стоит под раковиной."
  },
  {
    "id": "study_home_percha_es",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вешалка / плечики.",
    "a": [
      "percha",
      "la percha"
    ],
    "e": "Правильный вариант: la percha."
  },
  {
    "id": "study_home_percha_ru",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "Узнай",
    "q": "Переведи на русский: la percha.",
    "a": [
      "вешалка",
      "плечики",
      "вешалка / плечики"
    ],
    "e": "la percha — вешалка / плечики."
  },
  {
    "id": "study_home_percha_ctx",
    "topic": "home",
    "foodCat": "small_home_items",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Рубашка висит на плечиках.»: La camisa está en una ___.",
    "a": [
      "percha"
    ],
    "e": "La camisa está en una percha. — Рубашка висит на плечиках."
  },
  {
    "id": "choice_home_cocina",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кухня.",
    "a": [
      "la cocina"
    ],
    "options": [
      "la cocina",
      "el salón",
      "la sala de estar",
      "el dormitorio"
    ],
    "e": "la cocina — кухня."
  },
  {
    "id": "choice_home_salón",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: гостиная.",
    "a": [
      "el salón"
    ],
    "options": [
      "el salón",
      "la sala de estar",
      "el dormitorio",
      "la habitación"
    ],
    "e": "el salón — гостиная."
  },
  {
    "id": "choice_home_sala_estar",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: гостиная.",
    "a": [
      "la sala de estar"
    ],
    "options": [
      "la sala de estar",
      "el dormitorio",
      "la habitación",
      "el baño"
    ],
    "e": "la sala de estar — гостиная."
  },
  {
    "id": "choice_home_dormitorio",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: спальня.",
    "a": [
      "el dormitorio"
    ],
    "options": [
      "el dormitorio",
      "la habitación",
      "el baño",
      "el pasillo"
    ],
    "e": "el dormitorio — спальня."
  },
  {
    "id": "choice_home_habitación",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: спальня.",
    "a": [
      "la habitación"
    ],
    "options": [
      "la habitación",
      "el baño",
      "el pasillo",
      "el comedor"
    ],
    "e": "la habitación — спальня."
  },
  {
    "id": "choice_home_baño",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ванная.",
    "a": [
      "el baño"
    ],
    "options": [
      "el baño",
      "el pasillo",
      "el comedor",
      "el despacho"
    ],
    "e": "el baño — ванная."
  },
  {
    "id": "choice_home_pasillo",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: коридор.",
    "a": [
      "el pasillo"
    ],
    "options": [
      "el pasillo",
      "el comedor",
      "el despacho",
      "el balcón"
    ],
    "e": "el pasillo — коридор."
  },
  {
    "id": "choice_home_comedor",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: столовая.",
    "a": [
      "el comedor"
    ],
    "options": [
      "el comedor",
      "el despacho",
      "el balcón",
      "la terraza"
    ],
    "e": "el comedor — столовая."
  },
  {
    "id": "choice_home_despacho",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кабинет.",
    "a": [
      "el despacho"
    ],
    "options": [
      "el despacho",
      "el balcón",
      "la terraza",
      "el garaje"
    ],
    "e": "el despacho — кабинет."
  },
  {
    "id": "choice_home_balcón",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: балкон.",
    "a": [
      "el balcón"
    ],
    "options": [
      "el balcón",
      "la terraza",
      "el garaje",
      "la cocina"
    ],
    "e": "el balcón — балкон."
  },
  {
    "id": "choice_home_terrazas",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: терраса.",
    "a": [
      "la terraza"
    ],
    "options": [
      "la terraza",
      "el garaje",
      "la cocina",
      "el salón"
    ],
    "e": "la terraza — терраса."
  },
  {
    "id": "choice_home_garaje",
    "topic": "home",
    "foodCat": "rooms",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: гараж.",
    "a": [
      "el garaje"
    ],
    "options": [
      "el garaje",
      "la cocina",
      "el salón",
      "la sala de estar"
    ],
    "e": "el garaje — гараж."
  },
  {
    "id": "choice_home_puerta",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: дверь.",
    "a": [
      "la puerta"
    ],
    "options": [
      "la puerta",
      "el ascensor",
      "la entrada",
      "la ventana"
    ],
    "e": "la puerta — дверь."
  },
  {
    "id": "choice_home_ventana",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: окно.",
    "a": [
      "la ventana"
    ],
    "options": [
      "la ventana",
      "la entrada",
      "la puerta",
      "el suelo"
    ],
    "e": "la ventana — окно."
  },
  {
    "id": "choice_home_suelo",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пол.",
    "a": [
      "el suelo"
    ],
    "options": [
      "el suelo",
      "la puerta",
      "la ventana",
      "el techo"
    ],
    "e": "el suelo — пол."
  },
  {
    "id": "choice_home_techo",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: потолок.",
    "a": [
      "el techo"
    ],
    "options": [
      "el techo",
      "la ventana",
      "el suelo",
      "la pared"
    ],
    "e": "el techo — потолок."
  },
  {
    "id": "choice_home_pared",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: стена.",
    "a": [
      "la pared"
    ],
    "options": [
      "la pared",
      "el suelo",
      "el techo",
      "las escaleras"
    ],
    "e": "la pared — стена."
  },
  {
    "id": "choice_home_escaleras",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: лестница.",
    "a": [
      "las escaleras"
    ],
    "options": [
      "las escaleras",
      "el techo",
      "la pared",
      "el ascensor"
    ],
    "e": "las escaleras — лестница."
  },
  {
    "id": "choice_home_ascensor",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: лифт.",
    "a": [
      "el ascensor"
    ],
    "options": [
      "el ascensor",
      "la pared",
      "las escaleras",
      "la entrada"
    ],
    "e": "el ascensor — лифт."
  },
  {
    "id": "choice_home_entrada",
    "topic": "home",
    "foodCat": "parts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вход.",
    "a": [
      "la entrada"
    ],
    "options": [
      "la entrada",
      "las escaleras",
      "el ascensor",
      "la puerta"
    ],
    "e": "la entrada — вход."
  },
  {
    "id": "choice_home_casa",
    "topic": "home",
    "foodCat": "housing",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: дом.",
    "a": [
      "la casa"
    ],
    "options": [
      "la casa",
      "el edificio",
      "el piso",
      "el apartamento"
    ],
    "e": "la casa — дом."
  },
  {
    "id": "choice_home_piso",
    "topic": "home",
    "foodCat": "housing",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: квартира.",
    "a": [
      "el piso"
    ],
    "options": [
      "el piso",
      "la casa",
      "el apartamento",
      "el edificio"
    ],
    "e": "el piso — квартира."
  },
  {
    "id": "choice_home_apartamento",
    "topic": "home",
    "foodCat": "housing",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: апартаменты.",
    "a": [
      "el apartamento"
    ],
    "options": [
      "el apartamento",
      "el piso",
      "el edificio",
      "la casa"
    ],
    "e": "el apartamento — апартаменты."
  },
  {
    "id": "choice_home_edificio",
    "topic": "home",
    "foodCat": "housing",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: здание.",
    "a": [
      "el edificio"
    ],
    "options": [
      "el edificio",
      "el apartamento",
      "la casa",
      "el piso"
    ],
    "e": "el edificio — здание."
  },
  {
    "id": "choice_home_sofa",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: диван.",
    "a": [
      "el sofá"
    ],
    "options": [
      "el sofá",
      "la estantería",
      "la lámpara",
      "la alfombra"
    ],
    "e": "el sofá — диван."
  },
  {
    "id": "choice_home_sillon",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кресло.",
    "a": [
      "el sillón"
    ],
    "options": [
      "el sillón",
      "la lámpara",
      "la alfombra",
      "las cortinas"
    ],
    "e": "el sillón — кресло."
  },
  {
    "id": "choice_home_mesa",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: стол.",
    "a": [
      "la mesa"
    ],
    "options": [
      "la mesa",
      "la alfombra",
      "las cortinas",
      "el sofá"
    ],
    "e": "la mesa — стол."
  },
  {
    "id": "choice_home_silla",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: стул.",
    "a": [
      "la silla"
    ],
    "options": [
      "la silla",
      "las cortinas",
      "el sofá",
      "el sillón"
    ],
    "e": "la silla — стул."
  },
  {
    "id": "choice_home_estanteria",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: книжный шкаф / полка.",
    "a": [
      "la estantería"
    ],
    "options": [
      "la estantería",
      "el sofá",
      "el sillón",
      "la mesa"
    ],
    "e": "la estantería — книжный шкаф / полка."
  },
  {
    "id": "choice_home_lampara",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: лампа.",
    "a": [
      "la lámpara"
    ],
    "options": [
      "la lámpara",
      "el sillón",
      "la mesa",
      "la silla"
    ],
    "e": "la lámpara — лампа."
  },
  {
    "id": "choice_home_alfombra",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ковер.",
    "a": [
      "la alfombra"
    ],
    "options": [
      "la alfombra",
      "la mesa",
      "la silla",
      "la estantería"
    ],
    "e": "la alfombra — ковер."
  },
  {
    "id": "choice_home_cortinas",
    "topic": "home",
    "foodCat": "living_room",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шторы.",
    "a": [
      "las cortinas"
    ],
    "options": [
      "las cortinas",
      "la silla",
      "la estantería",
      "la lámpara"
    ],
    "e": "las cortinas — шторы."
  },
  {
    "id": "choice_home_cama",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кровать.",
    "a": [
      "la cama"
    ],
    "options": [
      "la cama",
      "el armario",
      "la cómoda",
      "la mesita de noche"
    ],
    "e": "la cama — кровать."
  },
  {
    "id": "choice_home_almohada",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: подушка.",
    "a": [
      "la almohada"
    ],
    "options": [
      "la almohada",
      "la cómoda",
      "la mesita de noche",
      "el espejo"
    ],
    "e": "la almohada — подушка."
  },
  {
    "id": "choice_home_manta",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: одеяло / плед.",
    "a": [
      "la manta"
    ],
    "options": [
      "la manta",
      "la mesita de noche",
      "el espejo",
      "la cama"
    ],
    "e": "la manta — одеяло / плед."
  },
  {
    "id": "choice_home_armario",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шкаф.",
    "a": [
      "el armario"
    ],
    "options": [
      "el armario",
      "el espejo",
      "la cama",
      "la almohada"
    ],
    "e": "el armario — шкаф."
  },
  {
    "id": "choice_home_comoda",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: комод.",
    "a": [
      "la cómoda"
    ],
    "options": [
      "la cómoda",
      "la cama",
      "la almohada",
      "la manta"
    ],
    "e": "la cómoda — комод."
  },
  {
    "id": "choice_home_mesita_noche",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: прикроватная тумбочка.",
    "a": [
      "la mesita de noche"
    ],
    "options": [
      "la mesita de noche",
      "la almohada",
      "la manta",
      "el armario"
    ],
    "e": "la mesita de noche — прикроватная тумбочка."
  },
  {
    "id": "choice_home_espejo",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: зеркало.",
    "a": [
      "el espejo"
    ],
    "options": [
      "el espejo",
      "la manta",
      "el armario",
      "la cómoda"
    ],
    "e": "el espejo — зеркало."
  },
  {
    "id": "choice_home_nevera_frigorifico",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: холодильник.",
    "a": [
      "la nevera / el frigorífico"
    ],
    "options": [
      "la nevera / el frigorífico",
      "el lavavajillas",
      "el hervidor",
      "la cafetera"
    ],
    "e": "la nevera / el frigorífico — холодильник."
  },
  {
    "id": "choice_home_horno",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: духовка.",
    "a": [
      "el horno"
    ],
    "options": [
      "el horno",
      "el hervidor",
      "la cafetera",
      "la nevera / el frigorífico"
    ],
    "e": "el horno — духовка."
  },
  {
    "id": "choice_home_microondas",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: микроволновка.",
    "a": [
      "el microondas"
    ],
    "options": [
      "el microondas",
      "la cafetera",
      "la nevera / el frigorífico",
      "el horno"
    ],
    "e": "el microondas — микроволновка."
  },
  {
    "id": "choice_home_cocina_estufa",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: плита.",
    "a": [
      "la cocina"
    ],
    "options": [
      "la cocina",
      "la nevera / el frigorífico",
      "el horno",
      "el microondas"
    ],
    "e": "la cocina — плита."
  },
  {
    "id": "choice_home_fregadero",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: раковина (кухонная).",
    "a": [
      "el fregadero"
    ],
    "options": [
      "el fregadero",
      "el horno",
      "el microondas",
      "la cocina"
    ],
    "e": "el fregadero — раковина (кухонная)."
  },
  {
    "id": "choice_home_lavavajillas",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: посудомоечная машина.",
    "a": [
      "el lavavajillas"
    ],
    "options": [
      "el lavavajillas",
      "el microondas",
      "la cocina",
      "el fregadero"
    ],
    "e": "el lavavajillas — посудомоечная машина."
  },
  {
    "id": "choice_home_hervidor",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чайник (электрический).",
    "a": [
      "el hervidor"
    ],
    "options": [
      "el hervidor",
      "la cocina",
      "el fregadero",
      "el lavavajillas"
    ],
    "e": "el hervidor — чайник (электрический)."
  },
  {
    "id": "choice_home_cafetera",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кофеварка.",
    "a": [
      "la cafetera"
    ],
    "options": [
      "la cafetera",
      "el fregadero",
      "el lavavajillas",
      "el hervidor"
    ],
    "e": "la cafetera — кофеварка."
  },
  {
    "id": "choice_home_ducha",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: душ.",
    "a": [
      "la ducha"
    ],
    "options": [
      "la ducha",
      "el secador",
      "la bañera",
      "el lavabo"
    ],
    "e": "la ducha — душ."
  },
  {
    "id": "choice_home_banera",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ванна.",
    "a": [
      "la bañera"
    ],
    "options": [
      "la bañera",
      "la ducha",
      "el lavabo",
      "el inodoro"
    ],
    "e": "la bañera — ванна."
  },
  {
    "id": "choice_home_lavabo",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: раковина (умывальник).",
    "a": [
      "el lavabo"
    ],
    "options": [
      "el lavabo",
      "la bañera",
      "el inodoro",
      "la toalla"
    ],
    "e": "el lavabo — раковина (умывальник)."
  },
  {
    "id": "choice_home_inodoro",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: унитаз.",
    "a": [
      "el inodoro"
    ],
    "options": [
      "el inodoro",
      "el lavabo",
      "la toalla",
      "el cepillo"
    ],
    "e": "el inodoro — унитаз."
  },
  {
    "id": "choice_home_toalla",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: полотенце.",
    "a": [
      "la toalla"
    ],
    "options": [
      "la toalla",
      "el inodoro",
      "el cepillo",
      "el secador"
    ],
    "e": "la toalla — полотенце."
  },
  {
    "id": "choice_home_cepillo",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: щетка.",
    "a": [
      "el cepillo"
    ],
    "options": [
      "el cepillo",
      "la toalla",
      "el secador",
      "la ducha"
    ],
    "e": "el cepillo — щетка."
  },
  {
    "id": "choice_home_secador",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: фен.",
    "a": [
      "el secador"
    ],
    "options": [
      "el secador",
      "el cepillo",
      "la ducha",
      "la bañera"
    ],
    "e": "el secador — фен."
  },
  {
    "id": "choice_home_enchufe",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: розетка.",
    "a": [
      "el enchufe"
    ],
    "options": [
      "el enchufe",
      "el cubo de basura",
      "la percha",
      "el interruptor"
    ],
    "e": "el enchufe — розетка."
  },
  {
    "id": "choice_home_interruptor",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: выключатель.",
    "a": [
      "el interruptor"
    ],
    "options": [
      "el interruptor",
      "la percha",
      "el enchufe",
      "la llave"
    ],
    "e": "el interruptor — выключатель."
  },
  {
    "id": "choice_home_llave",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ключ.",
    "a": [
      "la llave"
    ],
    "options": [
      "la llave",
      "el enchufe",
      "el interruptor",
      "el cubo de basura"
    ],
    "e": "la llave — ключ."
  },
  {
    "id": "choice_home_cubo_basura",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мусорное ведро.",
    "a": [
      "el cubo de basura"
    ],
    "options": [
      "el cubo de basura",
      "el interruptor",
      "la llave",
      "la percha"
    ],
    "e": "el cubo de basura — мусорное ведро."
  },
  {
    "id": "choice_home_percha",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вешалка / плечики.",
    "a": [
      "la percha"
    ],
    "options": [
      "la percha",
      "la llave",
      "el cubo de basura",
      "el enchufe"
    ],
    "e": "la percha — вешалка / плечики."
  },
  {
    "id": "audio_home_cocina",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La cocina es luminosa.",
    "a": [
      "La cocina es luminosa."
    ],
    "e": "Кухня светлая."
  },
  {
    "id": "audio_home_salón",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El salón tiene un sofá grande.",
    "a": [
      "El salón tiene un sofá grande."
    ],
    "e": "В гостиной стоит большой диван."
  },
  {
    "id": "audio_home_sala_estar",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La sala de estar está junto a la cocina.",
    "a": [
      "La sala de estar está junto a la cocina."
    ],
    "e": "Гостиная находится рядом с кухней."
  },
  {
    "id": "audio_home_dormitorio",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El dormitorio está en la segunda planta.",
    "a": [
      "El dormitorio está en la segunda planta."
    ],
    "e": "Спальня находится на втором этаже."
  },
  {
    "id": "audio_home_habitación",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La habitación tiene una ventana grande.",
    "a": [
      "La habitación tiene una ventana grande."
    ],
    "e": "В спальне большое окно."
  },
  {
    "id": "audio_home_baño",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El baño está al lado del dormitorio.",
    "a": [
      "El baño está al lado del dormitorio."
    ],
    "e": "Ванная находится рядом со спальней."
  },
  {
    "id": "audio_home_pasillo",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El pasillo es largo y estrecho.",
    "a": [
      "El pasillo es largo y estrecho."
    ],
    "e": "Коридор длинный и узкий."
  },
  {
    "id": "audio_home_comedor",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Comemos juntos en el comedor.",
    "a": [
      "Comemos juntos en el comedor."
    ],
    "e": "Мы едим вместе в столовой."
  },
  {
    "id": "audio_home_despacho",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Trabajo desde casa en el despacho.",
    "a": [
      "Trabajo desde casa en el despacho."
    ],
    "e": "Я работаю из дома в кабинете."
  },
  {
    "id": "audio_home_balcón",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El balcón da al patio.",
    "a": [
      "El balcón da al patio."
    ],
    "e": "Балкон выходит во двор."
  },
  {
    "id": "audio_home_terrazas",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Desayunamos en la terraza.",
    "a": [
      "Desayunamos en la terraza."
    ],
    "e": "Мы завтракаем на террасе."
  },
  {
    "id": "audio_home_garaje",
    "topic": "home",
    "foodCat": "rooms",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El coche está en el garaje.",
    "a": [
      "El coche está en el garaje."
    ],
    "e": "Машина стоит в гараже."
  },
  {
    "id": "audio_home_puerta",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cierra la puerta, por favor.",
    "a": [
      "Cierra la puerta, por favor."
    ],
    "e": "Закрой дверь, пожалуйста."
  },
  {
    "id": "audio_home_ventana",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Abro la ventana por la mañana.",
    "a": [
      "Abro la ventana por la mañana."
    ],
    "e": "Утром я открываю окно."
  },
  {
    "id": "audio_home_suelo",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El suelo es de madera.",
    "a": [
      "El suelo es de madera."
    ],
    "e": "Пол деревянный."
  },
  {
    "id": "audio_home_techo",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El techo es muy alto.",
    "a": [
      "El techo es muy alto."
    ],
    "e": "Потолок очень высокий."
  },
  {
    "id": "audio_home_pared",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La pared es blanca.",
    "a": [
      "La pared es blanca."
    ],
    "e": "Стена белая."
  },
  {
    "id": "audio_home_escaleras",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Subimos por las escaleras.",
    "a": [
      "Subimos por las escaleras."
    ],
    "e": "Мы поднимаемся по лестнице."
  },
  {
    "id": "audio_home_ascensor",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El ascensor está al final del pasillo.",
    "a": [
      "El ascensor está al final del pasillo."
    ],
    "e": "Лифт находится в конце коридора."
  },
  {
    "id": "audio_home_entrada",
    "topic": "home",
    "foodCat": "parts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La entrada está a la derecha.",
    "a": [
      "La entrada está a la derecha."
    ],
    "e": "Вход находится справа."
  },
  {
    "id": "audio_home_casa",
    "topic": "home",
    "foodCat": "housing",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nuestra casa tiene dos plantas.",
    "a": [
      "Nuestra casa tiene dos plantas."
    ],
    "e": "В нашем доме два этажа."
  },
  {
    "id": "audio_home_piso",
    "topic": "home",
    "foodCat": "housing",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vivo en un piso pequeño.",
    "a": [
      "Vivo en un piso pequeño."
    ],
    "e": "Я живу в небольшой квартире."
  },
  {
    "id": "audio_home_apartamento",
    "topic": "home",
    "foodCat": "housing",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Alquilamos un apartamento cerca del mar.",
    "a": [
      "Alquilamos un apartamento cerca del mar."
    ],
    "e": "Мы снимаем апартаменты рядом с морем."
  },
  {
    "id": "audio_home_edificio",
    "topic": "home",
    "foodCat": "housing",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El edificio tiene ocho plantas.",
    "a": [
      "El edificio tiene ocho plantas."
    ],
    "e": "В здании восемь этажей."
  },
  {
    "id": "audio_home_sofa",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El sofá está junto a la ventana.",
    "a": [
      "El sofá está junto a la ventana."
    ],
    "e": "Диван стоит рядом с окном."
  },
  {
    "id": "audio_home_sillon",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El sillón es muy cómodo.",
    "a": [
      "El sillón es muy cómodo."
    ],
    "e": "Кресло очень удобное."
  },
  {
    "id": "audio_home_mesa",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La mesa está delante del sofá.",
    "a": [
      "La mesa está delante del sofá."
    ],
    "e": "Стол стоит перед диваном."
  },
  {
    "id": "audio_home_silla",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La silla está junto a la mesa.",
    "a": [
      "La silla está junto a la mesa."
    ],
    "e": "Стул стоит рядом со столом."
  },
  {
    "id": "audio_home_estanteria",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Los libros están en la estantería.",
    "a": [
      "Los libros están en la estantería."
    ],
    "e": "Книги стоят на полке."
  },
  {
    "id": "audio_home_lampara",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Enciendo la lámpara por la noche.",
    "a": [
      "Enciendo la lámpara por la noche."
    ],
    "e": "Я включаю лампу вечером."
  },
  {
    "id": "audio_home_alfombra",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La alfombra está debajo de la mesa.",
    "a": [
      "La alfombra está debajo de la mesa."
    ],
    "e": "Ковер лежит под столом."
  },
  {
    "id": "audio_home_cortinas",
    "topic": "home",
    "foodCat": "living_room",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Las cortinas son de color beige.",
    "a": [
      "Las cortinas son de color beige."
    ],
    "e": "Шторы бежевого цвета."
  },
  {
    "id": "audio_home_cama",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La cama está junto a la ventana.",
    "a": [
      "La cama está junto a la ventana."
    ],
    "e": "Кровать стоит рядом с окном."
  },
  {
    "id": "audio_home_almohada",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La almohada está sobre la cama.",
    "a": [
      "La almohada está sobre la cama."
    ],
    "e": "Подушка лежит на кровати."
  },
  {
    "id": "audio_home_manta",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La manta está al pie de la cama.",
    "a": [
      "La manta está al pie de la cama."
    ],
    "e": "Плед лежит в ногах кровати."
  },
  {
    "id": "audio_home_armario",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La ropa está en el armario.",
    "a": [
      "La ropa está en el armario."
    ],
    "e": "Одежда лежит в шкафу."
  },
  {
    "id": "audio_home_comoda",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La cómoda tiene cuatro cajones.",
    "a": [
      "La cómoda tiene cuatro cajones."
    ],
    "e": "У комода четыре ящика."
  },
  {
    "id": "audio_home_mesita_noche",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La mesita de noche está al lado de la cama.",
    "a": [
      "La mesita de noche está al lado de la cama."
    ],
    "e": "Прикроватная тумбочка стоит рядом с кроватью."
  },
  {
    "id": "audio_home_espejo",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El espejo está frente al armario.",
    "a": [
      "El espejo está frente al armario."
    ],
    "e": "Зеркало находится напротив шкафа."
  },
  {
    "id": "audio_home_nevera_frigorifico",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La leche está en la nevera.",
    "a": [
      "La leche está en la nevera."
    ],
    "e": "Молоко стоит в холодильнике."
  },
  {
    "id": "audio_home_horno",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El pan está en el horno.",
    "a": [
      "El pan está en el horno."
    ],
    "e": "Хлеб в духовке."
  },
  {
    "id": "audio_home_microondas",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Caliento la comida en el microondas.",
    "a": [
      "Caliento la comida en el microondas."
    ],
    "e": "Я разогреваю еду в микроволновке."
  },
  {
    "id": "audio_home_cocina_estufa",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La olla está sobre la cocina.",
    "a": [
      "La olla está sobre la cocina."
    ],
    "e": "Кастрюля стоит на плите."
  },
  {
    "id": "audio_home_fregadero",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lavo los platos en el fregadero.",
    "a": [
      "Lavo los platos en el fregadero."
    ],
    "e": "Я мою посуду в кухонной раковине."
  },
  {
    "id": "audio_home_lavavajillas",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pongo los platos en el lavavajillas.",
    "a": [
      "Pongo los platos en el lavavajillas."
    ],
    "e": "Я ставлю посуду в посудомоечную машину."
  },
  {
    "id": "audio_home_hervidor",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Caliento agua en el hervidor.",
    "a": [
      "Caliento agua en el hervidor."
    ],
    "e": "Я нагреваю воду в электрическом чайнике."
  },
  {
    "id": "audio_home_cafetera",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Preparo café en la cafetera.",
    "a": [
      "Preparo café en la cafetera."
    ],
    "e": "Я готовлю кофе в кофеварке."
  },
  {
    "id": "audio_home_ducha",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La ducha está junto a la bañera.",
    "a": [
      "La ducha está junto a la bañera."
    ],
    "e": "Душ находится рядом с ванной."
  },
  {
    "id": "audio_home_banera",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La bañera es blanca.",
    "a": [
      "La bañera es blanca."
    ],
    "e": "Ванна белая."
  },
  {
    "id": "audio_home_lavabo",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me lavo las manos en el lavabo.",
    "a": [
      "Me lavo las manos en el lavabo."
    ],
    "e": "Я мою руки в раковине."
  },
  {
    "id": "audio_home_inodoro",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El inodoro está al lado del lavabo.",
    "a": [
      "El inodoro está al lado del lavabo."
    ],
    "e": "Унитаз находится рядом с раковиной."
  },
  {
    "id": "audio_home_toalla",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La toalla está junto a la ducha.",
    "a": [
      "La toalla está junto a la ducha."
    ],
    "e": "Полотенце висит рядом с душем."
  },
  {
    "id": "audio_home_cepillo",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El cepillo está junto al lavabo.",
    "a": [
      "El cepillo está junto al lavabo."
    ],
    "e": "Щетка лежит рядом с раковиной."
  },
  {
    "id": "audio_home_secador",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El secador está en el cajón.",
    "a": [
      "El secador está en el cajón."
    ],
    "e": "Фен лежит в ящике."
  },
  {
    "id": "audio_home_enchufe",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El enchufe está junto a la mesa.",
    "a": [
      "El enchufe está junto a la mesa."
    ],
    "e": "Розетка находится рядом со столом."
  },
  {
    "id": "audio_home_interruptor",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El interruptor está junto a la puerta.",
    "a": [
      "El interruptor está junto a la puerta."
    ],
    "e": "Выключатель находится рядом с дверью."
  },
  {
    "id": "audio_home_llave",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La llave está sobre la mesa.",
    "a": [
      "La llave está sobre la mesa."
    ],
    "e": "Ключ лежит на столе."
  },
  {
    "id": "audio_home_cubo_basura",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El cubo de basura está debajo del fregadero.",
    "a": [
      "El cubo de basura está debajo del fregadero."
    ],
    "e": "Мусорное ведро стоит под раковиной."
  },
  {
    "id": "audio_home_percha",
    "topic": "home",
    "foodCat": "small_home_items",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La camisa está en una percha.",
    "a": [
      "La camisa está en una percha."
    ],
    "e": "Рубашка висит на плечиках."
  },
  {
    "id": "match_recent_home_rooms",
    "topic": "home",
    "foodCat": "rooms",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини комнаты дома с переводом.",
    "pairs": [
      [
        "la cocina",
        "кухня"
      ],
      [
        "el baño",
        "ванная"
      ],
      [
        "el pasillo",
        "коридор"
      ],
      [
        "el comedor",
        "столовая"
      ],
      [
        "el despacho",
        "кабинет"
      ],
      [
        "el garaje",
        "гараж"
      ]
    ],
    "a": [
      "кухня | ванная | коридор | столовая | кабинет | гараж"
    ],
    "displayAnswer": "la cocina — кухня · el baño — ванная · el pasillo — коридор · el comedor — столовая · el despacho — кабинет · el garaje — гараж",
    "e": "В этом наборе у каждого названия комнаты один отдельный перевод."
  },
  {
    "id": "match_recent_home_parts",
    "topic": "home",
    "foodCat": "parts",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини части дома с переводом.",
    "pairs": [
      [
        "la puerta",
        "дверь"
      ],
      [
        "la ventana",
        "окно"
      ],
      [
        "el techo",
        "потолок"
      ],
      [
        "la pared",
        "стена"
      ],
      [
        "el ascensor",
        "лифт"
      ],
      [
        "la entrada",
        "вход"
      ]
    ],
    "a": [
      "дверь | окно | потолок | стена | лифт | вход"
    ],
    "displayAnswer": "la puerta — дверь · la ventana — окно · el techo — потолок · la pared — стена · el ascensor — лифт · la entrada — вход",
    "e": "Все элементы относятся к разным частям дома."
  },
  {
    "id": "match_recent_home_living",
    "topic": "home",
    "foodCat": "living_room",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини предметы гостиной с переводом.",
    "pairs": [
      [
        "el sofá",
        "диван"
      ],
      [
        "el sillón",
        "кресло"
      ],
      [
        "la estantería",
        "книжный шкаф / полка"
      ],
      [
        "la lámpara",
        "лампа"
      ],
      [
        "la alfombra",
        "ковёр"
      ],
      [
        "las cortinas",
        "шторы"
      ]
    ],
    "a": [
      "диван | кресло | книжный шкаф / полка | лампа | ковёр | шторы"
    ],
    "displayAnswer": "el sofá — диван · el sillón — кресло · la estantería — книжный шкаф / полка · la lámpara — лампа · la alfombra — ковёр · las cortinas — шторы",
    "e": "Слова подобраны без синонимичных пар внутри задания."
  },
  {
    "id": "match_recent_home_bedroom",
    "topic": "home",
    "foodCat": "bedroom_items",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини предметы спальни с переводом.",
    "pairs": [
      [
        "la cama",
        "кровать"
      ],
      [
        "la almohada",
        "подушка"
      ],
      [
        "la manta",
        "одеяло / плед"
      ],
      [
        "el armario",
        "шкаф"
      ],
      [
        "la cómoda",
        "комод"
      ],
      [
        "la mesita de noche",
        "прикроватная тумбочка"
      ],
      [
        "el espejo",
        "зеркало"
      ]
    ],
    "a": [
      "кровать | подушка | одеяло / плед | шкаф | комод | прикроватная тумбочка | зеркало"
    ],
    "displayAnswer": "la cama — кровать · la almohada — подушка · la manta — одеяло / плед · el armario — шкаф · la cómoda — комод · la mesita de noche — прикроватная тумбочка · el espejo — зеркало",
    "e": "Каждый перевод соответствует только одному предмету."
  },
  {
    "id": "match_recent_home_kitchen",
    "topic": "home",
    "foodCat": "kitchen_items",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини кухонные предметы с переводом.",
    "pairs": [
      [
        "el horno",
        "духовка"
      ],
      [
        "el microondas",
        "микроволновка"
      ],
      [
        "el fregadero",
        "кухонная раковина"
      ],
      [
        "el lavavajillas",
        "посудомоечная машина"
      ],
      [
        "el hervidor",
        "электрический чайник"
      ],
      [
        "la cafetera",
        "кофеварка"
      ]
    ],
    "a": [
      "духовка | микроволновка | кухонная раковина | посудомоечная машина | электрический чайник | кофеварка"
    ],
    "displayAnswer": "el horno — духовка · el microondas — микроволновка · el fregadero — кухонная раковина · el lavavajillas — посудомоечная машина · el hervidor — электрический чайник · la cafetera — кофеварка",
    "e": "Основные значения внутри набора не пересекаются."
  },
  {
    "id": "match_recent_home_bath_small",
    "topic": "home",
    "foodCat": "bathroom_items",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини предметы ванной с переводом.",
    "pairs": [
      [
        "la ducha",
        "душ"
      ],
      [
        "la bañera",
        "ванна"
      ],
      [
        "el lavabo",
        "умывальник"
      ],
      [
        "el inodoro",
        "унитаз"
      ],
      [
        "la toalla",
        "полотенце"
      ],
      [
        "el secador",
        "фен"
      ]
    ],
    "a": [
      "душ | ванна | умывальник | унитаз | полотенце | фен"
    ],
    "displayAnswer": "la ducha — душ · la bañera — ванна · el lavabo — умывальник · el inodoro — унитаз · la toalla — полотенце · el secador — фен",
    "e": "Каждый предмет имеет отдельное назначение."
  },
  {
    "id": "passage_recent_home_function",
    "topic": "home",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Дом: предмет по функции: расставь слова по однозначным пропускам.",
    "template": "Para abrir la puerta de entrada, cojo la {{0}}. Para subir al quinto piso sin usar las escaleras, tomo el {{1}}. Caliento rápidamente la comida en el {{2}}. Después de ducharme, me seco con la {{3}} y me seco el pelo con el {{4}}.",
    "blanks": [
      "llave",
      "ascensor",
      "microondas",
      "toalla",
      "secador"
    ],
    "a": [
      "llave | ascensor | microondas | toalla | secador"
    ],
    "displayAnswer": "Para abrir la puerta de entrada, cojo la llave. Para subir al quinto piso sin usar las escaleras, tomo el ascensor. Caliento rápidamente la comida en el microondas. Después de ducharme, me seco con la toalla y me seco el pelo con el secador.",
    "e": "Контекст описывает уникальную функцию каждого предмета.",
    "ruTranslation": "Чтобы открыть входную дверь, я беру ключ. Чтобы подняться на пятый этаж, не используя лестницу, я еду на лифте. Я быстро разогреваю еду в микроволновке. После душа я вытираюсь полотенцем и сушу волосы феном."
  },
  {
    "id": "passage_recent_home_furniture",
    "topic": "home",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Дом: где что хранится: расставь слова по однозначным пропускам.",
    "template": "Los libros están en la {{0}}. Guardo la ropa en el {{1}}. El despertador está en la {{2}}, junto a la cama. Para leer, me siento en el {{3}} y por la noche enciendo la {{4}}.",
    "blanks": [
      "estantería",
      "armario",
      "mesita de noche",
      "sillón",
      "lámpara"
    ],
    "a": [
      "estantería | armario | mesita de noche | sillón | lámpara"
    ],
    "displayAnswer": "Los libros están en la estantería. Guardo la ropa en el armario. El despertador está en la mesita de noche, junto a la cama. Para leer, me siento en el sillón y por la noche enciendo la lámpara.",
    "e": "Подсказка в каждом предложении указывает на конкретный предмет.",
    "ruTranslation": "Книги стоят на полке. Одежду я храню в шкафу. Будильник стоит на прикроватной тумбочке рядом с кроватью. Для чтения я сажусь в кресло, а вечером включаю лампу."
  },
  {
    "id": "sort_auto_home_0",
    "topic": "home",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Мой дом — комнаты и части дома» по подходящим колонкам. Набор 1 из 2.",
    "sortColumns": [
      {
        "id": "rooms",
        "title": "Комнаты"
      },
      {
        "id": "parts",
        "title": "Части дома"
      },
      {
        "id": "housing",
        "title": "Типы жилья"
      },
      {
        "id": "living_room",
        "title": "Гостиная"
      }
    ],
    "sortTokens": [
      {
        "id": "home_0_rooms_cocina",
        "text": "la cocina",
        "category": "rooms"
      },
      {
        "id": "home_0_rooms_salón",
        "text": "el salón",
        "category": "rooms"
      },
      {
        "id": "home_0_rooms_sala_estar",
        "text": "la sala de estar",
        "category": "rooms"
      },
      {
        "id": "home_0_parts_puerta",
        "text": "la puerta",
        "category": "parts"
      },
      {
        "id": "home_0_parts_ventana",
        "text": "la ventana",
        "category": "parts"
      },
      {
        "id": "home_0_parts_suelo",
        "text": "el suelo",
        "category": "parts"
      },
      {
        "id": "home_0_housing_casa",
        "text": "la casa",
        "category": "housing"
      },
      {
        "id": "home_0_housing_piso",
        "text": "el piso",
        "category": "housing"
      },
      {
        "id": "home_0_housing_apartamento",
        "text": "el apartamento",
        "category": "housing"
      },
      {
        "id": "home_0_living_room_sofa",
        "text": "el sofá",
        "category": "living_room"
      },
      {
        "id": "home_0_living_room_sillon",
        "text": "el sillón",
        "category": "living_room"
      },
      {
        "id": "home_0_living_room_mesa",
        "text": "la mesa",
        "category": "living_room"
      }
    ],
    "a": [
      "rooms | rooms | rooms | parts | parts | parts | housing | housing | housing | living_room | living_room | living_room"
    ],
    "displayAnswer": "Комнаты: la cocina, el salón, la sala de estar · Части дома: la puerta, la ventana, el suelo · Типы жилья: la casa, el piso, el apartamento · Гостиная: el sofá, el sillón, la mesa",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  },
  {
    "id": "sort_auto_home_1",
    "topic": "home",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Мой дом — комнаты и части дома» по подходящим колонкам. Набор 2 из 2.",
    "sortColumns": [
      {
        "id": "bedroom_items",
        "title": "Спальня"
      },
      {
        "id": "kitchen_items",
        "title": "Кухня"
      },
      {
        "id": "bathroom_items",
        "title": "Ванная"
      },
      {
        "id": "small_home_items",
        "title": "Мелкие вещи"
      }
    ],
    "sortTokens": [
      {
        "id": "home_1_bedroom_items_armario",
        "text": "el armario",
        "category": "bedroom_items"
      },
      {
        "id": "home_1_bedroom_items_comoda",
        "text": "la cómoda",
        "category": "bedroom_items"
      },
      {
        "id": "home_1_bedroom_items_mesita_noche",
        "text": "la mesita de noche",
        "category": "bedroom_items"
      },
      {
        "id": "home_1_kitchen_items_cocina_estufa",
        "text": "la cocina",
        "category": "kitchen_items"
      },
      {
        "id": "home_1_kitchen_items_fregadero",
        "text": "el fregadero",
        "category": "kitchen_items"
      },
      {
        "id": "home_1_kitchen_items_lavavajillas",
        "text": "el lavavajillas",
        "category": "kitchen_items"
      },
      {
        "id": "home_1_bathroom_items_inodoro",
        "text": "el inodoro",
        "category": "bathroom_items"
      },
      {
        "id": "home_1_bathroom_items_toalla",
        "text": "la toalla",
        "category": "bathroom_items"
      },
      {
        "id": "home_1_bathroom_items_cepillo",
        "text": "el cepillo",
        "category": "bathroom_items"
      },
      {
        "id": "home_1_small_home_items_cubo_basura",
        "text": "el cubo de basura",
        "category": "small_home_items"
      },
      {
        "id": "home_1_small_home_items_percha",
        "text": "la percha",
        "category": "small_home_items"
      },
      {
        "id": "home_1_small_home_items_enchufe",
        "text": "el enchufe",
        "category": "small_home_items"
      }
    ],
    "a": [
      "bedroom_items | bedroom_items | bedroom_items | kitchen_items | kitchen_items | kitchen_items | bathroom_items | bathroom_items | bathroom_items | small_home_items | small_home_items | small_home_items"
    ],
    "displayAnswer": "Спальня: el armario, la cómoda, la mesita de noche · Кухня: la cocina, el fregadero, el lavavajillas · Ванная: el inodoro, la toalla, el cepillo · Мелкие вещи: el cubo de basura, la percha, el enchufe",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const homeTopic = {
  id: "home",
  title: "Мой дом — комнаты и части дома",
  icon: "🏠",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
