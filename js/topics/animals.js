/**
 * Животные topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "dog",
    "category": "pets",
    "translation": "собака",
    "image": "assets/picture-labels/animals/dog.webp",
    "cat": "pets",
    "word": "el perro",
    "base": "perro",
    "gender": "мужской род",
    "tr": "собака",
    "ru": [
      "собака"
    ],
    "answers": [
      "perro",
      "el perro"
    ],
    "examples": [
      [
        "El perro juega en el parque.",
        "Собака играет в парке."
      ],
      [
        "Mi perro duerme junto a la cama.",
        "Моя собака спит рядом с кроватью."
      ]
    ],
    "cloze": "El ___ juega en el parque.",
    "clozeAnswers": [
      "perro"
    ],
    "meta": {
      "categoryTitle": "Домашние",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "cat",
    "category": "pets",
    "translation": "кот, кошка",
    "image": "assets/picture-labels/animals/cat.webp",
    "cat": "pets",
    "word": "el gato",
    "base": "gato",
    "gender": "мужской род",
    "tr": "кот, кошка",
    "ru": [
      "кот, кошка"
    ],
    "answers": [
      "gato",
      "el gato"
    ],
    "examples": [
      [
        "El gato duerme en el sofá.",
        "Кот спит на диване."
      ],
      [
        "La gata bebe agua.",
        "Кошка пьёт воду."
      ]
    ],
    "cloze": "El ___ duerme en el sofá.",
    "clozeAnswers": [
      "gato"
    ],
    "meta": {
      "categoryTitle": "Домашние",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "rabbit",
    "category": "pets",
    "translation": "кролик",
    "image": "assets/picture-labels/animals/rabbit.webp",
    "cat": "pets",
    "word": "el conejo",
    "base": "conejo",
    "gender": "мужской род",
    "tr": "кролик",
    "ru": [
      "кролик"
    ],
    "answers": [
      "conejo",
      "el conejo"
    ],
    "examples": [
      [
        "El conejo come una zanahoria.",
        "Кролик ест морковь."
      ],
      [
        "El conejo tiene orejas largas.",
        "У кролика длинные уши."
      ]
    ],
    "cloze": "El ___ come una zanahoria.",
    "clozeAnswers": [
      "conejo"
    ],
    "meta": {
      "categoryTitle": "Домашние",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "hamster",
    "category": "pets",
    "translation": "хомяк",
    "image": "assets/picture-labels/animals/hamster.webp",
    "cat": "pets",
    "word": "el hámster",
    "base": "hámster",
    "gender": "мужской род",
    "tr": "хомяк",
    "ru": [
      "хомяк"
    ],
    "answers": [
      "hámster",
      "el hámster"
    ],
    "examples": [
      [
        "El hámster es pequeño.",
        "Хомяк маленький."
      ],
      [
        "Mi hámster corre por la noche.",
        "Мой хомяк бегает ночью."
      ]
    ],
    "cloze": "El ___ es pequeño.",
    "clozeAnswers": [
      "hámster"
    ],
    "meta": {
      "categoryTitle": "Домашние",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "mouse",
    "category": "pets",
    "translation": "мышь",
    "image": "assets/picture-labels/animals/mouse.webp",
    "cat": "pets",
    "word": "el ratón",
    "base": "ratón",
    "gender": "мужской род",
    "tr": "мышь",
    "ru": [
      "мышь"
    ],
    "answers": [
      "ratón",
      "el ratón"
    ],
    "examples": [
      [
        "El ratón es muy pequeño.",
        "Мышь очень маленькая."
      ],
      [
        "Veo un ratón cerca de la caja.",
        "Я вижу мышь рядом с коробкой."
      ]
    ],
    "cloze": "El ___ es muy pequeño.",
    "clozeAnswers": [
      "ratón"
    ],
    "meta": {
      "categoryTitle": "Домашние",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "turtle",
    "category": "pets",
    "translation": "черепаха",
    "image": "assets/picture-labels/animals/turtle.webp",
    "cat": "pets",
    "word": "la tortuga",
    "base": "tortuga",
    "gender": "женский род",
    "tr": "черепаха",
    "ru": [
      "черепаха"
    ],
    "answers": [
      "tortuga",
      "la tortuga"
    ],
    "examples": [
      [
        "La tortuga camina despacio.",
        "Черепаха ходит медленно."
      ],
      [
        "Mi tortuga come verduras.",
        "Моя черепаха ест овощи."
      ]
    ],
    "cloze": "La ___ camina despacio.",
    "clozeAnswers": [
      "tortuga"
    ],
    "meta": {
      "categoryTitle": "Домашние",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "horse",
    "category": "farm",
    "translation": "лошадь",
    "image": "assets/picture-labels/animals/horse.webp",
    "cat": "farm",
    "word": "el caballo",
    "base": "caballo",
    "gender": "мужской род",
    "tr": "лошадь",
    "ru": [
      "лошадь"
    ],
    "answers": [
      "caballo",
      "el caballo"
    ],
    "examples": [
      [
        "El caballo corre por el campo.",
        "Лошадь бежит по полю."
      ],
      [
        "El caballo es marrón.",
        "Лошадь коричневая."
      ]
    ],
    "cloze": "El ___ corre por el campo.",
    "clozeAnswers": [
      "caballo"
    ],
    "meta": {
      "categoryTitle": "Ферма",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "cow",
    "category": "farm",
    "translation": "корова",
    "image": "assets/picture-labels/animals/cow.webp",
    "cat": "farm",
    "word": "la vaca",
    "base": "vaca",
    "gender": "женский род",
    "tr": "корова",
    "ru": [
      "корова"
    ],
    "answers": [
      "vaca",
      "la vaca"
    ],
    "examples": [
      [
        "La vaca come hierba.",
        "Корова ест траву."
      ],
      [
        "La vaca vive en la granja.",
        "Корова живёт на ферме."
      ]
    ],
    "cloze": "La ___ come hierba.",
    "clozeAnswers": [
      "vaca"
    ],
    "meta": {
      "categoryTitle": "Ферма",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "pig",
    "category": "farm",
    "translation": "свинья",
    "image": "assets/picture-labels/animals/pig.webp",
    "cat": "farm",
    "word": "el cerdo",
    "base": "cerdo",
    "gender": "мужской род",
    "tr": "свинья",
    "ru": [
      "свинья"
    ],
    "answers": [
      "cerdo",
      "el cerdo"
    ],
    "examples": [
      [
        "El cerdo está en la granja.",
        "Свинья находится на ферме."
      ],
      [
        "El cerdo es rosa.",
        "Свинья розовая."
      ]
    ],
    "cloze": "El ___ está en la granja.",
    "clozeAnswers": [
      "cerdo"
    ],
    "meta": {
      "categoryTitle": "Ферма",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "sheep",
    "category": "farm",
    "translation": "овца",
    "image": "assets/picture-labels/animals/sheep.webp",
    "cat": "farm",
    "word": "la oveja",
    "base": "oveja",
    "gender": "женский род",
    "tr": "овца",
    "ru": [
      "овца"
    ],
    "answers": [
      "oveja",
      "la oveja"
    ],
    "examples": [
      [
        "La oveja tiene lana blanca.",
        "У овцы белая шерсть."
      ],
      [
        "Las ovejas comen hierба.",
        "Овцы едят траву."
      ]
    ],
    "cloze": "La ___ tiene lana blanca.",
    "clozeAnswers": [
      "oveja"
    ],
    "meta": {
      "categoryTitle": "Ферма",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "goat",
    "category": "farm",
    "translation": "коза",
    "image": "assets/picture-labels/animals/goat.webp",
    "cat": "farm",
    "word": "la cabra",
    "base": "cabra",
    "gender": "женский род",
    "tr": "коза",
    "ru": [
      "коза"
    ],
    "answers": [
      "cabra",
      "la cabra"
    ],
    "examples": [
      [
        "La cabra sube a una roca.",
        "Коза забирается на камень."
      ],
      [
        "La cabra come hojas.",
        "Коза ест листья."
      ]
    ],
    "cloze": "La ___ sube a una roca.",
    "clozeAnswers": [
      "cabra"
    ],
    "meta": {
      "categoryTitle": "Ферма",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "chicken",
    "category": "farm",
    "translation": "курица",
    "image": "assets/picture-labels/animals/chicken.webp",
    "cat": "farm",
    "word": "la gallina",
    "base": "gallina",
    "gender": "женский род",
    "tr": "курица",
    "ru": [
      "курица"
    ],
    "answers": [
      "gallina",
      "la gallina"
    ],
    "examples": [
      [
        "La gallina pone huevos.",
        "Курица несёт яйца."
      ],
      [
        "La gallina camina por la granja.",
        "Курица ходит по ферме."
      ]
    ],
    "cloze": "La ___ pone huevos.",
    "clozeAnswers": [
      "gallina"
    ],
    "meta": {
      "categoryTitle": "Ферма",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "lion",
    "category": "wild",
    "translation": "лев",
    "image": "assets/picture-labels/animals/lion.webp",
    "cat": "wild",
    "word": "el león",
    "base": "león",
    "gender": "мужской род",
    "tr": "лев",
    "ru": [
      "лев"
    ],
    "answers": [
      "león",
      "el león"
    ],
    "examples": [
      [
        "El león vive en África.",
        "Лев живёт в Африке."
      ],
      [
        "El león tiene una gran melena.",
        "У льва большая грива."
      ]
    ],
    "cloze": "El ___ vive en África.",
    "clozeAnswers": [
      "león"
    ],
    "meta": {
      "categoryTitle": "Дикие",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "tiger",
    "category": "wild",
    "translation": "тигр",
    "image": "assets/picture-labels/animals/tiger.webp",
    "cat": "wild",
    "word": "el tigre",
    "base": "tigre",
    "gender": "мужской род",
    "tr": "тигр",
    "ru": [
      "тигр"
    ],
    "answers": [
      "tigre",
      "el tigre"
    ],
    "examples": [
      [
        "El tigre tiene rayas.",
        "У тигра есть полосы."
      ],
      [
        "El tigre es un animal salvaje.",
        "Тигр — дикое животное."
      ]
    ],
    "cloze": "El ___ tiene rayas.",
    "clozeAnswers": [
      "tigre"
    ],
    "meta": {
      "categoryTitle": "Дикие",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "bear",
    "category": "wild",
    "translation": "медведь",
    "image": "assets/picture-labels/animals/bear.webp",
    "cat": "wild",
    "word": "el oso",
    "base": "oso",
    "gender": "мужской род",
    "tr": "медведь",
    "ru": [
      "медведь"
    ],
    "answers": [
      "oso",
      "el oso"
    ],
    "examples": [
      [
        "El oso vive en el bosque.",
        "Медведь живёт в лесу."
      ],
      [
        "El oso es grande.",
        "Медведь большой."
      ]
    ],
    "cloze": "El ___ vive en el bosque.",
    "clozeAnswers": [
      "oso"
    ],
    "meta": {
      "categoryTitle": "Дикие",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "elephant",
    "category": "wild",
    "translation": "слон",
    "image": "assets/picture-labels/animals/elephant.webp",
    "cat": "wild",
    "word": "el elefante",
    "base": "elefante",
    "gender": "мужской род",
    "tr": "слон",
    "ru": [
      "слон"
    ],
    "answers": [
      "elefante",
      "el elefante"
    ],
    "examples": [
      [
        "El elefante tiene una trompa larga.",
        "У слона длинный хобот."
      ],
      [
        "El elefante es muy grande.",
        "Слон очень большой."
      ]
    ],
    "cloze": "El ___ tiene una trompa larga.",
    "clozeAnswers": [
      "elefante"
    ],
    "meta": {
      "categoryTitle": "Дикие",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "giraffe",
    "category": "wild",
    "translation": "жираф",
    "image": "assets/picture-labels/animals/giraffe.webp",
    "cat": "wild",
    "word": "la jirafa",
    "base": "jirafa",
    "gender": "женский род",
    "tr": "жираф",
    "ru": [
      "жираф"
    ],
    "answers": [
      "jirafa",
      "la jirafa"
    ],
    "examples": [
      [
        "La jirafa tiene el cuello largo.",
        "У жирафа длинная шея."
      ],
      [
        "La jirafa come hojas.",
        "Жираф ест листья."
      ]
    ],
    "cloze": "La ___ tiene el cuello largo.",
    "clozeAnswers": [
      "jirafa"
    ],
    "meta": {
      "categoryTitle": "Дикие",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "monkey",
    "category": "wild",
    "translation": "обезьяна",
    "image": "assets/picture-labels/animals/monkey.webp",
    "cat": "wild",
    "word": "el mono",
    "base": "mono",
    "gender": "мужской род",
    "tr": "обезьяна",
    "ru": [
      "обезьяна"
    ],
    "answers": [
      "mono",
      "el mono"
    ],
    "examples": [
      [
        "El mono sube al árbol.",
        "Обезьяна залезает на дерево."
      ],
      [
        "El mono come fruta.",
        "Обезьяна ест фрукты."
      ]
    ],
    "cloze": "El ___ sube al árbol.",
    "clozeAnswers": [
      "mono"
    ],
    "meta": {
      "categoryTitle": "Дикие",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "eagle",
    "category": "birds",
    "translation": "орёл",
    "image": "assets/picture-labels/animals/eagle.webp",
    "cat": "birds",
    "word": "el águila",
    "base": "águila",
    "gender": "женский род · с el",
    "tr": "орёл",
    "ru": [
      "орёл"
    ],
    "answers": [
      "águila",
      "el águila"
    ],
    "examples": [
      [
        "El águila vuela muy alto.",
        "Орёл летает очень высоко."
      ],
      [
        "El águila tiene alas grandes.",
        "У орла большие крылья."
      ]
    ],
    "cloze": "El ___ vuela muy alto.",
    "clozeAnswers": [
      "águila"
    ],
    "meta": {
      "categoryTitle": "Птицы",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "owl",
    "category": "birds",
    "translation": "сова",
    "image": "assets/picture-labels/animals/owl.webp",
    "cat": "birds",
    "word": "el búho",
    "base": "búho",
    "gender": "мужской род",
    "tr": "сова",
    "ru": [
      "сова"
    ],
    "answers": [
      "búho",
      "el búho"
    ],
    "examples": [
      [
        "El búho duerme de día.",
        "Сова спит днём."
      ],
      [
        "El búho ve bien de noche.",
        "Сова хорошо видит ночью."
      ]
    ],
    "cloze": "El ___ duerme de día.",
    "clozeAnswers": [
      "búho"
    ],
    "meta": {
      "categoryTitle": "Птицы",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "parrot",
    "category": "birds",
    "translation": "попугай",
    "image": "assets/picture-labels/animals/parrot.webp",
    "cat": "birds",
    "word": "el loro",
    "base": "loro",
    "gender": "мужской род",
    "tr": "попугай",
    "ru": [
      "попугай"
    ],
    "answers": [
      "loro",
      "el loro"
    ],
    "examples": [
      [
        "El loro tiene plumas de colores.",
        "У попугая разноцветные перья."
      ],
      [
        "Mi loro imita palabras.",
        "Мой попугай повторяет слова."
      ]
    ],
    "cloze": "El ___ tiene plumas de colores.",
    "clozeAnswers": [
      "loro"
    ],
    "meta": {
      "categoryTitle": "Птицы",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "duck",
    "category": "birds",
    "translation": "утка",
    "image": "assets/picture-labels/animals/duck.webp",
    "cat": "birds",
    "word": "el pato",
    "base": "pato",
    "gender": "мужской род",
    "tr": "утка",
    "ru": [
      "утка"
    ],
    "answers": [
      "pato",
      "el pato"
    ],
    "examples": [
      [
        "El pato nada en el lago.",
        "Утка плавает в озере."
      ],
      [
        "El pato tiene un pico amarillo.",
        "У утки жёлтый клюв."
      ]
    ],
    "cloze": "El ___ nada en el lago.",
    "clozeAnswers": [
      "pato"
    ],
    "meta": {
      "categoryTitle": "Птицы",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "penguin",
    "category": "birds",
    "translation": "пингвин",
    "image": "assets/picture-labels/animals/penguin.webp",
    "cat": "birds",
    "word": "el pingüino",
    "base": "pingüino",
    "gender": "мужской род",
    "tr": "пингвин",
    "ru": [
      "пингвин"
    ],
    "answers": [
      "pingüino",
      "el pingüino"
    ],
    "examples": [
      [
        "El pingüino vive en zonas frías.",
        "Пингвин живёт в холодных регионах."
      ],
      [
        "El pingüino nada muy bien.",
        "Пингвин очень хорошо плавает."
      ]
    ],
    "cloze": "El ___ vive en zonas frías.",
    "clozeAnswers": [
      "pingüino"
    ],
    "meta": {
      "categoryTitle": "Птицы",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "flamingo",
    "category": "birds",
    "translation": "фламинго",
    "image": "assets/picture-labels/animals/flamingo.webp",
    "cat": "birds",
    "word": "el flamenco",
    "base": "flamenco",
    "gender": "мужской род",
    "tr": "фламинго",
    "ru": [
      "фламинго"
    ],
    "answers": [
      "flamenco",
      "el flamenco"
    ],
    "examples": [
      [
        "El flamenco tiene plumas rosas.",
        "У фламинго розовые перья."
      ],
      [
        "El flamenco tiene patas largas.",
        "У фламинго длинные ноги."
      ]
    ],
    "cloze": "El ___ tiene plumas rosas.",
    "clozeAnswers": [
      "flamenco"
    ],
    "meta": {
      "categoryTitle": "Птицы",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "fish",
    "category": "sea",
    "translation": "рыба (живое животное)",
    "image": "assets/picture-labels/animals/fish.webp",
    "cat": "sea",
    "word": "el pez",
    "base": "pez",
    "gender": "мужской род",
    "tr": "рыба (живое животное)",
    "ru": [
      "рыба (живое животное)"
    ],
    "answers": [
      "pez",
      "el pez"
    ],
    "examples": [
      [
        "El pez nada en el agua.",
        "Рыба плавает в воде."
      ],
      [
        "Este pez es azul.",
        "Эта рыба синяя."
      ]
    ],
    "cloze": "El ___ nada en el agua.",
    "clozeAnswers": [
      "pez"
    ],
    "meta": {
      "categoryTitle": "Морские",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "shark",
    "category": "sea",
    "translation": "акула",
    "image": "assets/picture-labels/animals/shark.webp",
    "cat": "sea",
    "word": "el tiburón",
    "base": "tiburón",
    "gender": "мужской род",
    "tr": "акула",
    "ru": [
      "акула"
    ],
    "answers": [
      "tiburón",
      "el tiburón"
    ],
    "examples": [
      [
        "El tiburón vive en el mar.",
        "Акула живёт в море."
      ],
      [
        "El tiburón tiene muchos dientes.",
        "У акулы много зубов."
      ]
    ],
    "cloze": "El ___ vive en el mar.",
    "clozeAnswers": [
      "tiburón"
    ],
    "meta": {
      "categoryTitle": "Морские",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "dolphin",
    "category": "sea",
    "translation": "дельфин",
    "image": "assets/picture-labels/animals/dolphin.webp",
    "cat": "sea",
    "word": "el delfín",
    "base": "delfín",
    "gender": "мужской род",
    "tr": "дельфин",
    "ru": [
      "дельфин"
    ],
    "answers": [
      "delfín",
      "el delfín"
    ],
    "examples": [
      [
        "El delfín salta fuera del agua.",
        "Дельфин выпрыгивает из воды."
      ],
      [
        "Los delfines son muy inteligentes.",
        "Дельфины очень умные."
      ]
    ],
    "cloze": "El ___ salta fuera del agua.",
    "clozeAnswers": [
      "delfín"
    ],
    "meta": {
      "categoryTitle": "Морские",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "whale",
    "category": "sea",
    "translation": "кит",
    "image": "assets/picture-labels/animals/whale.webp",
    "cat": "sea",
    "word": "la ballena",
    "base": "ballena",
    "gender": "женский род",
    "tr": "кит",
    "ru": [
      "кит"
    ],
    "answers": [
      "ballena",
      "la ballena"
    ],
    "examples": [
      [
        "La ballena es enorme.",
        "Кит огромный."
      ],
      [
        "La ballena vive en el océano.",
        "Кит живёт в океане."
      ]
    ],
    "cloze": "La ___ es enorme.",
    "clozeAnswers": [
      "ballena"
    ],
    "meta": {
      "categoryTitle": "Морские",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "octopus",
    "category": "sea",
    "translation": "осьминог",
    "image": "assets/picture-labels/animals/octopus.webp",
    "cat": "sea",
    "word": "el pulpo",
    "base": "pulpo",
    "gender": "мужской род",
    "tr": "осьминог",
    "ru": [
      "осьминог"
    ],
    "answers": [
      "pulpo",
      "el pulpo"
    ],
    "examples": [
      [
        "El pulpo tiene ocho brazos.",
        "У осьминога восемь щупалец."
      ],
      [
        "El pulpo vive en el mar.",
        "Осьминог живёт в море."
      ]
    ],
    "cloze": "El ___ tiene ocho brazos.",
    "clozeAnswers": [
      "pulpo"
    ],
    "meta": {
      "categoryTitle": "Морские",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "crab",
    "category": "sea",
    "translation": "краб",
    "image": "assets/picture-labels/animals/crab.webp",
    "cat": "sea",
    "word": "el cangrejo",
    "base": "cangrejo",
    "gender": "мужской род",
    "tr": "краб",
    "ru": [
      "краб"
    ],
    "answers": [
      "cangrejo",
      "el cangrejo"
    ],
    "examples": [
      [
        "El cangrejo camina de lado.",
        "Краб ходит боком."
      ],
      [
        "El cangrejo tiene dos pinzas.",
        "У краба две клешни."
      ]
    ],
    "cloze": "El ___ camina de lado.",
    "clozeAnswers": [
      "cangrejo"
    ],
    "meta": {
      "categoryTitle": "Морские",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "snake",
    "category": "reptiles",
    "translation": "змея",
    "image": "assets/picture-labels/animals/snake.webp",
    "cat": "reptiles",
    "word": "la serpiente",
    "base": "serpiente",
    "gender": "женский род",
    "tr": "змея",
    "ru": [
      "змея"
    ],
    "answers": [
      "serpiente",
      "la serpiente"
    ],
    "examples": [
      [
        "La serpiente no tiene patas.",
        "У змеи нет ног."
      ],
      [
        "La serpiente se mueve por el suelo.",
        "Змея ползёт по земле."
      ]
    ],
    "cloze": "La ___ no tiene patas.",
    "clozeAnswers": [
      "serpiente"
    ],
    "meta": {
      "categoryTitle": "Рептилии и амфибии",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "crocodile",
    "category": "reptiles",
    "translation": "крокодил",
    "image": "assets/picture-labels/animals/crocodile.webp",
    "cat": "reptiles",
    "word": "el cocodrilo",
    "base": "cocodrilo",
    "gender": "мужской род",
    "tr": "крокодил",
    "ru": [
      "крокодил"
    ],
    "answers": [
      "cocodrilo",
      "el cocodrilo"
    ],
    "examples": [
      [
        "El cocodrilo vive cerca del agua.",
        "Крокодил живёт рядом с водой."
      ],
      [
        "El cocodrilo tiene dientes grandes.",
        "У крокодила большие зубы."
      ]
    ],
    "cloze": "El ___ vive cerca del agua.",
    "clozeAnswers": [
      "cocodrilo"
    ],
    "meta": {
      "categoryTitle": "Рептилии и амфибии",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "lizard",
    "category": "reptiles",
    "translation": "ящерица",
    "image": "assets/picture-labels/animals/lizard.webp",
    "cat": "reptiles",
    "word": "el lagarto",
    "base": "lagarto",
    "gender": "мужской род",
    "tr": "ящерица",
    "ru": [
      "ящерица"
    ],
    "answers": [
      "lagarto",
      "el lagarto"
    ],
    "examples": [
      [
        "El lagarto toma el sol.",
        "Ящерица греется на солнце."
      ],
      [
        "El lagarto tiene una cola larga.",
        "У ящерицы длинный хвост."
      ]
    ],
    "cloze": "El ___ toma el sol.",
    "clozeAnswers": [
      "lagarto"
    ],
    "meta": {
      "categoryTitle": "Рептилии и амфибии",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "frog",
    "category": "reptiles",
    "translation": "лягушка",
    "image": "assets/picture-labels/animals/frog.webp",
    "cat": "reptiles",
    "word": "la rana",
    "base": "rana",
    "gender": "женский род",
    "tr": "лягушка",
    "ru": [
      "лягушка"
    ],
    "answers": [
      "rana",
      "la rana"
    ],
    "examples": [
      [
        "La rana salta cerca del agua.",
        "Лягушка прыгает рядом с водой."
      ],
      [
        "La rana es verde.",
        "Лягушка зелёная."
      ]
    ],
    "cloze": "La ___ salta cerca del agua.",
    "clozeAnswers": [
      "rana"
    ],
    "meta": {
      "categoryTitle": "Рептилии и амфибии",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "salamander",
    "category": "reptiles",
    "translation": "саламандра",
    "image": "assets/picture-labels/animals/salamander.webp",
    "cat": "reptiles",
    "word": "la salamandra",
    "base": "salamandra",
    "gender": "женский род",
    "tr": "саламандра",
    "ru": [
      "саламандра"
    ],
    "answers": [
      "salamandra",
      "la salamandra"
    ],
    "examples": [
      [
        "La salamandra vive en lugares húmedos.",
        "Саламандра живёт во влажных местах."
      ],
      [
        "La salamandra tiene una cola larga.",
        "У саламандры длинный хвост."
      ]
    ],
    "cloze": "La ___ vive en lugares húmedos.",
    "clozeAnswers": [
      "salamandra"
    ],
    "meta": {
      "categoryTitle": "Рептилии и амфибии",
      "allCategoryTitle": "Все животные"
    }
  },
  {
    "id": "tortoise",
    "category": "reptiles",
    "translation": "сухопутная черепаха",
    "image": "assets/picture-labels/animals/tortoise.webp",
    "cat": "reptiles",
    "word": "la tortuga terrestre",
    "base": "tortuga terrestre",
    "gender": "женский род",
    "tr": "сухопутная черепаха",
    "ru": [
      "сухопутная черепаха"
    ],
    "answers": [
      "tortuga terrestre",
      "la tortuga terrestre"
    ],
    "examples": [
      [
        "La tortuga terrestre vive en tierra.",
        "Сухопутная черепаха живёт на земле."
      ],
      [
        "La tortuga terrestre camina despacio.",
        "Сухопутная черепаха ходит медленно."
      ]
    ],
    "cloze": "La ___ vive en tierra.",
    "clozeAnswers": [
      "tortuga terrestre"
    ],
    "meta": {
      "categoryTitle": "Рептилии и амфибии",
      "allCategoryTitle": "Все животные"
    }
  }
];

const EXERCISES = [
  {
    "id": "animals_dog_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: собака.",
    "a": [
      "perro",
      "el perro"
    ],
    "e": "el perro — собака."
  },
  {
    "id": "animals_dog_ru",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el perro.",
    "a": [
      "собака"
    ],
    "e": "el perro — собака."
  },
  {
    "id": "animals_dog_choice",
    "topic": "animals",
    "foodCat": "pets",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el perro»?",
    "options": [
      "собака",
      "кот, кошка",
      "кролик",
      "хомяк"
    ],
    "a": [
      "собака"
    ],
    "e": "el perro — собака."
  },
  {
    "id": "animals_dog_ctx",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ juega en el parque.",
    "a": [
      "perro"
    ],
    "e": "Правильное предложение: El perro juega en el parque. — Собака играет в парке."
  },
  {
    "id": "visual_animals_dog",
    "originalId": "animals_dog_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/dog.webp",
    "pictureScene": "animal-dog",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el perro",
        "answers": [
          "perro",
          "el perro"
        ]
      }
    ],
    "a": [
      "el perro"
    ],
    "displayAnswer": "el perro",
    "e": "el perro — собака."
  },
  {
    "id": "animals_cat_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: кот, кошка.",
    "a": [
      "gato",
      "el gato"
    ],
    "e": "el gato — кот, кошка."
  },
  {
    "id": "animals_cat_ru",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el gato.",
    "a": [
      "кот, кошка"
    ],
    "e": "el gato — кот, кошка."
  },
  {
    "id": "animals_cat_choice",
    "topic": "animals",
    "foodCat": "pets",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el gato»?",
    "options": [
      "кот, кошка",
      "собака",
      "кролик",
      "хомяк"
    ],
    "a": [
      "кот, кошка"
    ],
    "e": "el gato — кот, кошка."
  },
  {
    "id": "animals_cat_ctx",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ duerme en el sofá.",
    "a": [
      "gato"
    ],
    "e": "Правильное предложение: El gato duerme en el sofá. — Кот спит на диване."
  },
  {
    "id": "visual_animals_cat",
    "originalId": "animals_cat_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/cat.webp",
    "pictureScene": "animal-cat",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el gato",
        "answers": [
          "gato",
          "el gato"
        ]
      }
    ],
    "a": [
      "el gato"
    ],
    "displayAnswer": "el gato",
    "e": "el gato — кот, кошка."
  },
  {
    "id": "animals_rabbit_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: кролик.",
    "a": [
      "conejo",
      "el conejo"
    ],
    "e": "el conejo — кролик."
  },
  {
    "id": "animals_rabbit_ru",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el conejo.",
    "a": [
      "кролик"
    ],
    "e": "el conejo — кролик."
  },
  {
    "id": "animals_rabbit_choice",
    "topic": "animals",
    "foodCat": "pets",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el conejo»?",
    "options": [
      "кролик",
      "собака",
      "кот, кошка",
      "хомяк"
    ],
    "a": [
      "кролик"
    ],
    "e": "el conejo — кролик."
  },
  {
    "id": "animals_rabbit_ctx",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ come una zanahoria.",
    "a": [
      "conejo"
    ],
    "e": "Правильное предложение: El conejo come una zanahoria. — Кролик ест морковь."
  },
  {
    "id": "visual_animals_rabbit",
    "originalId": "animals_rabbit_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/rabbit.webp",
    "pictureScene": "animal-rabbit",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el conejo",
        "answers": [
          "conejo",
          "el conejo"
        ]
      }
    ],
    "a": [
      "el conejo"
    ],
    "displayAnswer": "el conejo",
    "e": "el conejo — кролик."
  },
  {
    "id": "animals_hamster_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: хомяк.",
    "a": [
      "hámster",
      "el hámster"
    ],
    "e": "el hámster — хомяк."
  },
  {
    "id": "animals_hamster_ru",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el hámster.",
    "a": [
      "хомяк"
    ],
    "e": "el hámster — хомяк."
  },
  {
    "id": "animals_hamster_choice",
    "topic": "animals",
    "foodCat": "pets",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el hámster»?",
    "options": [
      "хомяк",
      "собака",
      "кот, кошка",
      "кролик"
    ],
    "a": [
      "хомяк"
    ],
    "e": "el hámster — хомяк."
  },
  {
    "id": "animals_hamster_ctx",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ es pequeño.",
    "a": [
      "hámster"
    ],
    "e": "Правильное предложение: El hámster es pequeño. — Хомяк маленький."
  },
  {
    "id": "visual_animals_hamster",
    "originalId": "animals_hamster_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/hamster.webp",
    "pictureScene": "animal-hamster",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el hámster",
        "answers": [
          "hámster",
          "el hámster"
        ]
      }
    ],
    "a": [
      "el hámster"
    ],
    "displayAnswer": "el hámster",
    "e": "el hámster — хомяк."
  },
  {
    "id": "animals_mouse_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: мышь.",
    "a": [
      "ratón",
      "el ratón"
    ],
    "e": "el ratón — мышь."
  },
  {
    "id": "animals_mouse_ru",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el ratón.",
    "a": [
      "мышь"
    ],
    "e": "el ratón — мышь."
  },
  {
    "id": "animals_mouse_choice",
    "topic": "animals",
    "foodCat": "pets",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el ratón»?",
    "options": [
      "мышь",
      "собака",
      "кот, кошка",
      "кролик"
    ],
    "a": [
      "мышь"
    ],
    "e": "el ratón — мышь."
  },
  {
    "id": "animals_mouse_ctx",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ es muy pequeño.",
    "a": [
      "ratón"
    ],
    "e": "Правильное предложение: El ratón es muy pequeño. — Мышь очень маленькая."
  },
  {
    "id": "visual_animals_mouse",
    "originalId": "animals_mouse_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/mouse.webp",
    "pictureScene": "animal-mouse",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el ratón",
        "answers": [
          "ratón",
          "el ratón"
        ]
      }
    ],
    "a": [
      "el ratón"
    ],
    "displayAnswer": "el ratón",
    "e": "el ratón — мышь."
  },
  {
    "id": "animals_turtle_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: черепаха.",
    "a": [
      "tortuga",
      "la tortuga"
    ],
    "e": "la tortuga — черепаха."
  },
  {
    "id": "animals_turtle_ru",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la tortuga.",
    "a": [
      "черепаха"
    ],
    "e": "la tortuga — черепаха."
  },
  {
    "id": "animals_turtle_choice",
    "topic": "animals",
    "foodCat": "pets",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la tortuga»?",
    "options": [
      "черепаха",
      "собака",
      "кот, кошка",
      "кролик"
    ],
    "a": [
      "черепаха"
    ],
    "e": "la tortuga — черепаха."
  },
  {
    "id": "animals_turtle_ctx",
    "topic": "animals",
    "foodCat": "pets",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ camina despacio.",
    "a": [
      "tortuga"
    ],
    "e": "Правильное предложение: La tortuga camina despacio. — Черепаха ходит медленно."
  },
  {
    "id": "visual_animals_turtle",
    "originalId": "animals_turtle_es",
    "topic": "animals",
    "foodCat": "pets",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/turtle.webp",
    "pictureScene": "animal-turtle",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la tortuga",
        "answers": [
          "tortuga",
          "la tortuga"
        ]
      }
    ],
    "a": [
      "la tortuga"
    ],
    "displayAnswer": "la tortuga",
    "e": "la tortuga — черепаха."
  },
  {
    "id": "animals_horse_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: лошадь.",
    "a": [
      "caballo",
      "el caballo"
    ],
    "e": "el caballo — лошадь."
  },
  {
    "id": "animals_horse_ru",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el caballo.",
    "a": [
      "лошадь"
    ],
    "e": "el caballo — лошадь."
  },
  {
    "id": "animals_horse_choice",
    "topic": "animals",
    "foodCat": "farm",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el caballo»?",
    "options": [
      "лошадь",
      "корова",
      "свинья",
      "овца"
    ],
    "a": [
      "лошадь"
    ],
    "e": "el caballo — лошадь."
  },
  {
    "id": "animals_horse_ctx",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ corre por el campo.",
    "a": [
      "caballo"
    ],
    "e": "Правильное предложение: El caballo corre por el campo. — Лошадь бежит по полю."
  },
  {
    "id": "visual_animals_horse",
    "originalId": "animals_horse_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/horse.webp",
    "pictureScene": "animal-horse",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el caballo",
        "answers": [
          "caballo",
          "el caballo"
        ]
      }
    ],
    "a": [
      "el caballo"
    ],
    "displayAnswer": "el caballo",
    "e": "el caballo — лошадь."
  },
  {
    "id": "animals_cow_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: корова.",
    "a": [
      "vaca",
      "la vaca"
    ],
    "e": "la vaca — корова."
  },
  {
    "id": "animals_cow_ru",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la vaca.",
    "a": [
      "корова"
    ],
    "e": "la vaca — корова."
  },
  {
    "id": "animals_cow_choice",
    "topic": "animals",
    "foodCat": "farm",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la vaca»?",
    "options": [
      "корова",
      "лошадь",
      "свинья",
      "овца"
    ],
    "a": [
      "корова"
    ],
    "e": "la vaca — корова."
  },
  {
    "id": "animals_cow_ctx",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ come hierba.",
    "a": [
      "vaca"
    ],
    "e": "Правильное предложение: La vaca come hierba. — Корова ест траву."
  },
  {
    "id": "visual_animals_cow",
    "originalId": "animals_cow_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/cow.webp",
    "pictureScene": "animal-cow",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la vaca",
        "answers": [
          "vaca",
          "la vaca"
        ]
      }
    ],
    "a": [
      "la vaca"
    ],
    "displayAnswer": "la vaca",
    "e": "la vaca — корова."
  },
  {
    "id": "animals_pig_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: свинья.",
    "a": [
      "cerdo",
      "el cerdo"
    ],
    "e": "el cerdo — свинья."
  },
  {
    "id": "animals_pig_ru",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el cerdo.",
    "a": [
      "свинья"
    ],
    "e": "el cerdo — свинья."
  },
  {
    "id": "animals_pig_choice",
    "topic": "animals",
    "foodCat": "farm",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el cerdo»?",
    "options": [
      "свинья",
      "лошадь",
      "корова",
      "овца"
    ],
    "a": [
      "свинья"
    ],
    "e": "el cerdo — свинья."
  },
  {
    "id": "animals_pig_ctx",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ está en la granja.",
    "a": [
      "cerdo"
    ],
    "e": "Правильное предложение: El cerdo está en la granja. — Свинья находится на ферме."
  },
  {
    "id": "visual_animals_pig",
    "originalId": "animals_pig_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/pig.webp",
    "pictureScene": "animal-pig",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el cerdo",
        "answers": [
          "cerdo",
          "el cerdo"
        ]
      }
    ],
    "a": [
      "el cerdo"
    ],
    "displayAnswer": "el cerdo",
    "e": "el cerdo — свинья."
  },
  {
    "id": "animals_sheep_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: овца.",
    "a": [
      "oveja",
      "la oveja"
    ],
    "e": "la oveja — овца."
  },
  {
    "id": "animals_sheep_ru",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la oveja.",
    "a": [
      "овца"
    ],
    "e": "la oveja — овца."
  },
  {
    "id": "animals_sheep_choice",
    "topic": "animals",
    "foodCat": "farm",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la oveja»?",
    "options": [
      "овца",
      "лошадь",
      "корова",
      "свинья"
    ],
    "a": [
      "овца"
    ],
    "e": "la oveja — овца."
  },
  {
    "id": "animals_sheep_ctx",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ tiene lana blanca.",
    "a": [
      "oveja"
    ],
    "e": "Правильное предложение: La oveja tiene lana blanca. — У овцы белая шерсть."
  },
  {
    "id": "visual_animals_sheep",
    "originalId": "animals_sheep_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/sheep.webp",
    "pictureScene": "animal-sheep",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la oveja",
        "answers": [
          "oveja",
          "la oveja"
        ]
      }
    ],
    "a": [
      "la oveja"
    ],
    "displayAnswer": "la oveja",
    "e": "la oveja — овца."
  },
  {
    "id": "animals_goat_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: коза.",
    "a": [
      "cabra",
      "la cabra"
    ],
    "e": "la cabra — коза."
  },
  {
    "id": "animals_goat_ru",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la cabra.",
    "a": [
      "коза"
    ],
    "e": "la cabra — коза."
  },
  {
    "id": "animals_goat_choice",
    "topic": "animals",
    "foodCat": "farm",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la cabra»?",
    "options": [
      "коза",
      "лошадь",
      "корова",
      "свинья"
    ],
    "a": [
      "коза"
    ],
    "e": "la cabra — коза."
  },
  {
    "id": "animals_goat_ctx",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ sube a una roca.",
    "a": [
      "cabra"
    ],
    "e": "Правильное предложение: La cabra sube a una roca. — Коза забирается на камень."
  },
  {
    "id": "visual_animals_goat",
    "originalId": "animals_goat_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/goat.webp",
    "pictureScene": "animal-goat",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la cabra",
        "answers": [
          "cabra",
          "la cabra"
        ]
      }
    ],
    "a": [
      "la cabra"
    ],
    "displayAnswer": "la cabra",
    "e": "la cabra — коза."
  },
  {
    "id": "animals_chicken_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: курица.",
    "a": [
      "gallina",
      "la gallina"
    ],
    "e": "la gallina — курица."
  },
  {
    "id": "animals_chicken_ru",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la gallina.",
    "a": [
      "курица"
    ],
    "e": "la gallina — курица."
  },
  {
    "id": "animals_chicken_choice",
    "topic": "animals",
    "foodCat": "farm",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la gallina»?",
    "options": [
      "курица",
      "лошадь",
      "корова",
      "свинья"
    ],
    "a": [
      "курица"
    ],
    "e": "la gallina — курица."
  },
  {
    "id": "animals_chicken_ctx",
    "topic": "animals",
    "foodCat": "farm",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ pone huevos.",
    "a": [
      "gallina"
    ],
    "e": "Правильное предложение: La gallina pone huevos. — Курица несёт яйца."
  },
  {
    "id": "visual_animals_chicken",
    "originalId": "animals_chicken_es",
    "topic": "animals",
    "foodCat": "farm",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/chicken.webp",
    "pictureScene": "animal-chicken",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la gallina",
        "answers": [
          "gallina",
          "la gallina"
        ]
      }
    ],
    "a": [
      "la gallina"
    ],
    "displayAnswer": "la gallina",
    "e": "la gallina — курица."
  },
  {
    "id": "animals_lion_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: лев.",
    "a": [
      "león",
      "el león"
    ],
    "e": "el león — лев."
  },
  {
    "id": "animals_lion_ru",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el león.",
    "a": [
      "лев"
    ],
    "e": "el león — лев."
  },
  {
    "id": "animals_lion_choice",
    "topic": "animals",
    "foodCat": "wild",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el león»?",
    "options": [
      "лев",
      "тигр",
      "медведь",
      "слон"
    ],
    "a": [
      "лев"
    ],
    "e": "el león — лев."
  },
  {
    "id": "animals_lion_ctx",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ vive en África.",
    "a": [
      "león"
    ],
    "e": "Правильное предложение: El león vive en África. — Лев живёт в Африке."
  },
  {
    "id": "visual_animals_lion",
    "originalId": "animals_lion_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/lion.webp",
    "pictureScene": "animal-lion",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el león",
        "answers": [
          "león",
          "el león"
        ]
      }
    ],
    "a": [
      "el león"
    ],
    "displayAnswer": "el león",
    "e": "el león — лев."
  },
  {
    "id": "animals_tiger_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: тигр.",
    "a": [
      "tigre",
      "el tigre"
    ],
    "e": "el tigre — тигр."
  },
  {
    "id": "animals_tiger_ru",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el tigre.",
    "a": [
      "тигр"
    ],
    "e": "el tigre — тигр."
  },
  {
    "id": "animals_tiger_choice",
    "topic": "animals",
    "foodCat": "wild",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el tigre»?",
    "options": [
      "тигр",
      "лев",
      "медведь",
      "слон"
    ],
    "a": [
      "тигр"
    ],
    "e": "el tigre — тигр."
  },
  {
    "id": "animals_tiger_ctx",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ tiene rayas.",
    "a": [
      "tigre"
    ],
    "e": "Правильное предложение: El tigre tiene rayas. — У тигра есть полосы."
  },
  {
    "id": "visual_animals_tiger",
    "originalId": "animals_tiger_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/tiger.webp",
    "pictureScene": "animal-tiger",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el tigre",
        "answers": [
          "tigre",
          "el tigre"
        ]
      }
    ],
    "a": [
      "el tigre"
    ],
    "displayAnswer": "el tigre",
    "e": "el tigre — тигр."
  },
  {
    "id": "animals_bear_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: медведь.",
    "a": [
      "oso",
      "el oso"
    ],
    "e": "el oso — медведь."
  },
  {
    "id": "animals_bear_ru",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el oso.",
    "a": [
      "медведь"
    ],
    "e": "el oso — медведь."
  },
  {
    "id": "animals_bear_choice",
    "topic": "animals",
    "foodCat": "wild",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el oso»?",
    "options": [
      "медведь",
      "лев",
      "тигр",
      "слон"
    ],
    "a": [
      "медведь"
    ],
    "e": "el oso — медведь."
  },
  {
    "id": "animals_bear_ctx",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ vive en el bosque.",
    "a": [
      "oso"
    ],
    "e": "Правильное предложение: El oso vive en el bosque. — Медведь живёт в лесу."
  },
  {
    "id": "visual_animals_bear",
    "originalId": "animals_bear_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/bear.webp",
    "pictureScene": "animal-bear",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el oso",
        "answers": [
          "oso",
          "el oso"
        ]
      }
    ],
    "a": [
      "el oso"
    ],
    "displayAnswer": "el oso",
    "e": "el oso — медведь."
  },
  {
    "id": "animals_elephant_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: слон.",
    "a": [
      "elefante",
      "el elefante"
    ],
    "e": "el elefante — слон."
  },
  {
    "id": "animals_elephant_ru",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el elefante.",
    "a": [
      "слон"
    ],
    "e": "el elefante — слон."
  },
  {
    "id": "animals_elephant_choice",
    "topic": "animals",
    "foodCat": "wild",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el elefante»?",
    "options": [
      "слон",
      "лев",
      "тигр",
      "медведь"
    ],
    "a": [
      "слон"
    ],
    "e": "el elefante — слон."
  },
  {
    "id": "animals_elephant_ctx",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ tiene una trompa larga.",
    "a": [
      "elefante"
    ],
    "e": "Правильное предложение: El elefante tiene una trompa larga. — У слона длинный хобот."
  },
  {
    "id": "visual_animals_elephant",
    "originalId": "animals_elephant_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/elephant.webp",
    "pictureScene": "animal-elephant",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el elefante",
        "answers": [
          "elefante",
          "el elefante"
        ]
      }
    ],
    "a": [
      "el elefante"
    ],
    "displayAnswer": "el elefante",
    "e": "el elefante — слон."
  },
  {
    "id": "animals_giraffe_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: жираф.",
    "a": [
      "jirafa",
      "la jirafa"
    ],
    "e": "la jirafa — жираф."
  },
  {
    "id": "animals_giraffe_ru",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la jirafa.",
    "a": [
      "жираф"
    ],
    "e": "la jirafa — жираф."
  },
  {
    "id": "animals_giraffe_choice",
    "topic": "animals",
    "foodCat": "wild",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la jirafa»?",
    "options": [
      "жираф",
      "лев",
      "тигр",
      "медведь"
    ],
    "a": [
      "жираф"
    ],
    "e": "la jirafa — жираф."
  },
  {
    "id": "animals_giraffe_ctx",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ tiene el cuello largo.",
    "a": [
      "jirafa"
    ],
    "e": "Правильное предложение: La jirafa tiene el cuello largo. — У жирафа длинная шея."
  },
  {
    "id": "visual_animals_giraffe",
    "originalId": "animals_giraffe_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/giraffe.webp",
    "pictureScene": "animal-giraffe",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la jirafa",
        "answers": [
          "jirafa",
          "la jirafa"
        ]
      }
    ],
    "a": [
      "la jirafa"
    ],
    "displayAnswer": "la jirafa",
    "e": "la jirafa — жираф."
  },
  {
    "id": "animals_monkey_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: обезьяна.",
    "a": [
      "mono",
      "el mono"
    ],
    "e": "el mono — обезьяна."
  },
  {
    "id": "animals_monkey_ru",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el mono.",
    "a": [
      "обезьяна"
    ],
    "e": "el mono — обезьяна."
  },
  {
    "id": "animals_monkey_choice",
    "topic": "animals",
    "foodCat": "wild",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el mono»?",
    "options": [
      "обезьяна",
      "лев",
      "тигр",
      "медведь"
    ],
    "a": [
      "обезьяна"
    ],
    "e": "el mono — обезьяна."
  },
  {
    "id": "animals_monkey_ctx",
    "topic": "animals",
    "foodCat": "wild",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ sube al árbol.",
    "a": [
      "mono"
    ],
    "e": "Правильное предложение: El mono sube al árbol. — Обезьяна залезает на дерево."
  },
  {
    "id": "visual_animals_monkey",
    "originalId": "animals_monkey_es",
    "topic": "animals",
    "foodCat": "wild",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/monkey.webp",
    "pictureScene": "animal-monkey",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el mono",
        "answers": [
          "mono",
          "el mono"
        ]
      }
    ],
    "a": [
      "el mono"
    ],
    "displayAnswer": "el mono",
    "e": "el mono — обезьяна."
  },
  {
    "id": "animals_eagle_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: орёл.",
    "a": [
      "águila",
      "el águila"
    ],
    "e": "el águila — орёл."
  },
  {
    "id": "animals_eagle_ru",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el águila.",
    "a": [
      "орёл"
    ],
    "e": "el águila — орёл."
  },
  {
    "id": "animals_eagle_choice",
    "topic": "animals",
    "foodCat": "birds",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el águila»?",
    "options": [
      "орёл",
      "сова",
      "попугай",
      "утка"
    ],
    "a": [
      "орёл"
    ],
    "e": "el águila — орёл."
  },
  {
    "id": "animals_eagle_ctx",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ vuela muy alto.",
    "a": [
      "águila"
    ],
    "e": "Правильное предложение: El águila vuela muy alto. — Орёл летает очень высоко."
  },
  {
    "id": "visual_animals_eagle",
    "originalId": "animals_eagle_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/eagle.webp",
    "pictureScene": "animal-eagle",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el águila",
        "answers": [
          "águila",
          "el águila"
        ]
      }
    ],
    "a": [
      "el águila"
    ],
    "displayAnswer": "el águila",
    "e": "el águila — орёл."
  },
  {
    "id": "animals_owl_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: сова.",
    "a": [
      "búho",
      "el búho"
    ],
    "e": "el búho — сова."
  },
  {
    "id": "animals_owl_ru",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el búho.",
    "a": [
      "сова"
    ],
    "e": "el búho — сова."
  },
  {
    "id": "animals_owl_choice",
    "topic": "animals",
    "foodCat": "birds",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el búho»?",
    "options": [
      "сова",
      "орёл",
      "попугай",
      "утка"
    ],
    "a": [
      "сова"
    ],
    "e": "el búho — сова."
  },
  {
    "id": "animals_owl_ctx",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ duerme de día.",
    "a": [
      "búho"
    ],
    "e": "Правильное предложение: El búho duerme de día. — Сова спит днём."
  },
  {
    "id": "visual_animals_owl",
    "originalId": "animals_owl_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/owl.webp",
    "pictureScene": "animal-owl",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el búho",
        "answers": [
          "búho",
          "el búho"
        ]
      }
    ],
    "a": [
      "el búho"
    ],
    "displayAnswer": "el búho",
    "e": "el búho — сова."
  },
  {
    "id": "animals_parrot_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: попугай.",
    "a": [
      "loro",
      "el loro"
    ],
    "e": "el loro — попугай."
  },
  {
    "id": "animals_parrot_ru",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el loro.",
    "a": [
      "попугай"
    ],
    "e": "el loro — попугай."
  },
  {
    "id": "animals_parrot_choice",
    "topic": "animals",
    "foodCat": "birds",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el loro»?",
    "options": [
      "попугай",
      "орёл",
      "сова",
      "утка"
    ],
    "a": [
      "попугай"
    ],
    "e": "el loro — попугай."
  },
  {
    "id": "animals_parrot_ctx",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ tiene plumas de colores.",
    "a": [
      "loro"
    ],
    "e": "Правильное предложение: El loro tiene plumas de colores. — У попугая разноцветные перья."
  },
  {
    "id": "visual_animals_parrot",
    "originalId": "animals_parrot_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/parrot.webp",
    "pictureScene": "animal-parrot",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el loro",
        "answers": [
          "loro",
          "el loro"
        ]
      }
    ],
    "a": [
      "el loro"
    ],
    "displayAnswer": "el loro",
    "e": "el loro — попугай."
  },
  {
    "id": "animals_duck_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: утка.",
    "a": [
      "pato",
      "el pato"
    ],
    "e": "el pato — утка."
  },
  {
    "id": "animals_duck_ru",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el pato.",
    "a": [
      "утка"
    ],
    "e": "el pato — утка."
  },
  {
    "id": "animals_duck_choice",
    "topic": "animals",
    "foodCat": "birds",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el pato»?",
    "options": [
      "утка",
      "орёл",
      "сова",
      "попугай"
    ],
    "a": [
      "утка"
    ],
    "e": "el pato — утка."
  },
  {
    "id": "animals_duck_ctx",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ nada en el lago.",
    "a": [
      "pato"
    ],
    "e": "Правильное предложение: El pato nada en el lago. — Утка плавает в озере."
  },
  {
    "id": "visual_animals_duck",
    "originalId": "animals_duck_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/duck.webp",
    "pictureScene": "animal-duck",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el pato",
        "answers": [
          "pato",
          "el pato"
        ]
      }
    ],
    "a": [
      "el pato"
    ],
    "displayAnswer": "el pato",
    "e": "el pato — утка."
  },
  {
    "id": "animals_penguin_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: пингвин.",
    "a": [
      "pingüino",
      "el pingüino"
    ],
    "e": "el pingüino — пингвин."
  },
  {
    "id": "animals_penguin_ru",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el pingüino.",
    "a": [
      "пингвин"
    ],
    "e": "el pingüino — пингвин."
  },
  {
    "id": "animals_penguin_choice",
    "topic": "animals",
    "foodCat": "birds",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el pingüino»?",
    "options": [
      "пингвин",
      "орёл",
      "сова",
      "попугай"
    ],
    "a": [
      "пингвин"
    ],
    "e": "el pingüino — пингвин."
  },
  {
    "id": "animals_penguin_ctx",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ vive en zonas frías.",
    "a": [
      "pingüino"
    ],
    "e": "Правильное предложение: El pingüino vive en zonas frías. — Пингвин живёт в холодных регионах."
  },
  {
    "id": "visual_animals_penguin",
    "originalId": "animals_penguin_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/penguin.webp",
    "pictureScene": "animal-penguin",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el pingüino",
        "answers": [
          "pingüino",
          "el pingüino"
        ]
      }
    ],
    "a": [
      "el pingüino"
    ],
    "displayAnswer": "el pingüino",
    "e": "el pingüino — пингвин."
  },
  {
    "id": "animals_flamingo_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: фламинго.",
    "a": [
      "flamenco",
      "el flamenco"
    ],
    "e": "el flamenco — фламинго."
  },
  {
    "id": "animals_flamingo_ru",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el flamenco.",
    "a": [
      "фламинго"
    ],
    "e": "el flamenco — фламинго."
  },
  {
    "id": "animals_flamingo_choice",
    "topic": "animals",
    "foodCat": "birds",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el flamenco»?",
    "options": [
      "фламинго",
      "орёл",
      "сова",
      "попугай"
    ],
    "a": [
      "фламинго"
    ],
    "e": "el flamenco — фламинго."
  },
  {
    "id": "animals_flamingo_ctx",
    "topic": "animals",
    "foodCat": "birds",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ tiene plumas rosas.",
    "a": [
      "flamenco"
    ],
    "e": "Правильное предложение: El flamenco tiene plumas rosas. — У фламинго розовые перья."
  },
  {
    "id": "visual_animals_flamingo",
    "originalId": "animals_flamingo_es",
    "topic": "animals",
    "foodCat": "birds",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/flamingo.webp",
    "pictureScene": "animal-flamingo",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el flamenco",
        "answers": [
          "flamenco",
          "el flamenco"
        ]
      }
    ],
    "a": [
      "el flamenco"
    ],
    "displayAnswer": "el flamenco",
    "e": "el flamenco — фламинго."
  },
  {
    "id": "animals_fish_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: рыба (живое животное).",
    "a": [
      "pez",
      "el pez"
    ],
    "e": "el pez — рыба (живое животное)."
  },
  {
    "id": "animals_fish_ru",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el pez.",
    "a": [
      "рыба (живое животное)"
    ],
    "e": "el pez — рыба (живое животное)."
  },
  {
    "id": "animals_fish_choice",
    "topic": "animals",
    "foodCat": "sea",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el pez»?",
    "options": [
      "рыба (живое животное)",
      "акула",
      "дельфин",
      "кит"
    ],
    "a": [
      "рыба (живое животное)"
    ],
    "e": "el pez — рыба (живое животное)."
  },
  {
    "id": "animals_fish_ctx",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ nada en el agua.",
    "a": [
      "pez"
    ],
    "e": "Правильное предложение: El pez nada en el agua. — Рыба плавает в воде."
  },
  {
    "id": "visual_animals_fish",
    "originalId": "animals_fish_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/fish.webp",
    "pictureScene": "animal-fish",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el pez",
        "answers": [
          "pez",
          "el pez"
        ]
      }
    ],
    "a": [
      "el pez"
    ],
    "displayAnswer": "el pez",
    "e": "el pez — рыба (живое животное)."
  },
  {
    "id": "animals_shark_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: акула.",
    "a": [
      "tiburón",
      "el tiburón"
    ],
    "e": "el tiburón — акула."
  },
  {
    "id": "animals_shark_ru",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el tiburón.",
    "a": [
      "акула"
    ],
    "e": "el tiburón — акула."
  },
  {
    "id": "animals_shark_choice",
    "topic": "animals",
    "foodCat": "sea",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el tiburón»?",
    "options": [
      "акула",
      "рыба (живое животное)",
      "дельфин",
      "кит"
    ],
    "a": [
      "акула"
    ],
    "e": "el tiburón — акула."
  },
  {
    "id": "animals_shark_ctx",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ vive en el mar.",
    "a": [
      "tiburón"
    ],
    "e": "Правильное предложение: El tiburón vive en el mar. — Акула живёт в море."
  },
  {
    "id": "visual_animals_shark",
    "originalId": "animals_shark_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/shark.webp",
    "pictureScene": "animal-shark",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el tiburón",
        "answers": [
          "tiburón",
          "el tiburón"
        ]
      }
    ],
    "a": [
      "el tiburón"
    ],
    "displayAnswer": "el tiburón",
    "e": "el tiburón — акула."
  },
  {
    "id": "animals_dolphin_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: дельфин.",
    "a": [
      "delfín",
      "el delfín"
    ],
    "e": "el delfín — дельфин."
  },
  {
    "id": "animals_dolphin_ru",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el delfín.",
    "a": [
      "дельфин"
    ],
    "e": "el delfín — дельфин."
  },
  {
    "id": "animals_dolphin_choice",
    "topic": "animals",
    "foodCat": "sea",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el delfín»?",
    "options": [
      "дельфин",
      "рыба (живое животное)",
      "акула",
      "кит"
    ],
    "a": [
      "дельфин"
    ],
    "e": "el delfín — дельфин."
  },
  {
    "id": "animals_dolphin_ctx",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ salta fuera del agua.",
    "a": [
      "delfín"
    ],
    "e": "Правильное предложение: El delfín salta fuera del agua. — Дельфин выпрыгивает из воды."
  },
  {
    "id": "visual_animals_dolphin",
    "originalId": "animals_dolphin_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/dolphin.webp",
    "pictureScene": "animal-dolphin",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el delfín",
        "answers": [
          "delfín",
          "el delfín"
        ]
      }
    ],
    "a": [
      "el delfín"
    ],
    "displayAnswer": "el delfín",
    "e": "el delfín — дельфин."
  },
  {
    "id": "animals_whale_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: кит.",
    "a": [
      "ballena",
      "la ballena"
    ],
    "e": "la ballena — кит."
  },
  {
    "id": "animals_whale_ru",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la ballena.",
    "a": [
      "кит"
    ],
    "e": "la ballena — кит."
  },
  {
    "id": "animals_whale_choice",
    "topic": "animals",
    "foodCat": "sea",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la ballena»?",
    "options": [
      "кит",
      "рыба (живое животное)",
      "акула",
      "дельфин"
    ],
    "a": [
      "кит"
    ],
    "e": "la ballena — кит."
  },
  {
    "id": "animals_whale_ctx",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ es enorme.",
    "a": [
      "ballena"
    ],
    "e": "Правильное предложение: La ballena es enorme. — Кит огромный."
  },
  {
    "id": "visual_animals_whale",
    "originalId": "animals_whale_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/whale.webp",
    "pictureScene": "animal-whale",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la ballena",
        "answers": [
          "ballena",
          "la ballena"
        ]
      }
    ],
    "a": [
      "la ballena"
    ],
    "displayAnswer": "la ballena",
    "e": "la ballena — кит."
  },
  {
    "id": "animals_octopus_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: осьминог.",
    "a": [
      "pulpo",
      "el pulpo"
    ],
    "e": "el pulpo — осьминог."
  },
  {
    "id": "animals_octopus_ru",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el pulpo.",
    "a": [
      "осьминог"
    ],
    "e": "el pulpo — осьминог."
  },
  {
    "id": "animals_octopus_choice",
    "topic": "animals",
    "foodCat": "sea",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el pulpo»?",
    "options": [
      "осьминог",
      "рыба (живое животное)",
      "акула",
      "дельфин"
    ],
    "a": [
      "осьминог"
    ],
    "e": "el pulpo — осьминог."
  },
  {
    "id": "animals_octopus_ctx",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ tiene ocho brazos.",
    "a": [
      "pulpo"
    ],
    "e": "Правильное предложение: El pulpo tiene ocho brazos. — У осьминога восемь щупалец."
  },
  {
    "id": "visual_animals_octopus",
    "originalId": "animals_octopus_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/octopus.webp",
    "pictureScene": "animal-octopus",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el pulpo",
        "answers": [
          "pulpo",
          "el pulpo"
        ]
      }
    ],
    "a": [
      "el pulpo"
    ],
    "displayAnswer": "el pulpo",
    "e": "el pulpo — осьминог."
  },
  {
    "id": "animals_crab_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: краб.",
    "a": [
      "cangrejo",
      "el cangrejo"
    ],
    "e": "el cangrejo — краб."
  },
  {
    "id": "animals_crab_ru",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el cangrejo.",
    "a": [
      "краб"
    ],
    "e": "el cangrejo — краб."
  },
  {
    "id": "animals_crab_choice",
    "topic": "animals",
    "foodCat": "sea",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el cangrejo»?",
    "options": [
      "краб",
      "рыба (живое животное)",
      "акула",
      "дельфин"
    ],
    "a": [
      "краб"
    ],
    "e": "el cangrejo — краб."
  },
  {
    "id": "animals_crab_ctx",
    "topic": "animals",
    "foodCat": "sea",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ camina de lado.",
    "a": [
      "cangrejo"
    ],
    "e": "Правильное предложение: El cangrejo camina de lado. — Краб ходит боком."
  },
  {
    "id": "visual_animals_crab",
    "originalId": "animals_crab_es",
    "topic": "animals",
    "foodCat": "sea",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/crab.webp",
    "pictureScene": "animal-crab",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el cangrejo",
        "answers": [
          "cangrejo",
          "el cangrejo"
        ]
      }
    ],
    "a": [
      "el cangrejo"
    ],
    "displayAnswer": "el cangrejo",
    "e": "el cangrejo — краб."
  },
  {
    "id": "animals_snake_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: змея.",
    "a": [
      "serpiente",
      "la serpiente"
    ],
    "e": "la serpiente — змея."
  },
  {
    "id": "animals_snake_ru",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la serpiente.",
    "a": [
      "змея"
    ],
    "e": "la serpiente — змея."
  },
  {
    "id": "animals_snake_choice",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la serpiente»?",
    "options": [
      "змея",
      "крокодил",
      "ящерица",
      "лягушка"
    ],
    "a": [
      "змея"
    ],
    "e": "la serpiente — змея."
  },
  {
    "id": "animals_snake_ctx",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ no tiene patas.",
    "a": [
      "serpiente"
    ],
    "e": "Правильное предложение: La serpiente no tiene patas. — У змеи нет ног."
  },
  {
    "id": "visual_animals_snake",
    "originalId": "animals_snake_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/snake.webp",
    "pictureScene": "animal-snake",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la serpiente",
        "answers": [
          "serpiente",
          "la serpiente"
        ]
      }
    ],
    "a": [
      "la serpiente"
    ],
    "displayAnswer": "la serpiente",
    "e": "la serpiente — змея."
  },
  {
    "id": "animals_crocodile_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: крокодил.",
    "a": [
      "cocodrilo",
      "el cocodrilo"
    ],
    "e": "el cocodrilo — крокодил."
  },
  {
    "id": "animals_crocodile_ru",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el cocodrilo.",
    "a": [
      "крокодил"
    ],
    "e": "el cocodrilo — крокодил."
  },
  {
    "id": "animals_crocodile_choice",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el cocodrilo»?",
    "options": [
      "крокодил",
      "змея",
      "ящерица",
      "лягушка"
    ],
    "a": [
      "крокодил"
    ],
    "e": "el cocodrilo — крокодил."
  },
  {
    "id": "animals_crocodile_ctx",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ vive cerca del agua.",
    "a": [
      "cocodrilo"
    ],
    "e": "Правильное предложение: El cocodrilo vive cerca del agua. — Крокодил живёт рядом с водой."
  },
  {
    "id": "visual_animals_crocodile",
    "originalId": "animals_crocodile_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/crocodile.webp",
    "pictureScene": "animal-crocodile",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el cocodrilo",
        "answers": [
          "cocodrilo",
          "el cocodrilo"
        ]
      }
    ],
    "a": [
      "el cocodrilo"
    ],
    "displayAnswer": "el cocodrilo",
    "e": "el cocodrilo — крокодил."
  },
  {
    "id": "animals_lizard_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: ящерица.",
    "a": [
      "lagarto",
      "el lagarto"
    ],
    "e": "el lagarto — ящерица."
  },
  {
    "id": "animals_lizard_ru",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: el lagarto.",
    "a": [
      "ящерица"
    ],
    "e": "el lagarto — ящерица."
  },
  {
    "id": "animals_lizard_choice",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «el lagarto»?",
    "options": [
      "ящерица",
      "змея",
      "крокодил",
      "лягушка"
    ],
    "a": [
      "ящерица"
    ],
    "e": "el lagarto — ящерица."
  },
  {
    "id": "animals_lizard_ctx",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: El ___ toma el sol.",
    "a": [
      "lagarto"
    ],
    "e": "Правильное предложение: El lagarto toma el sol. — Ящерица греется на солнце."
  },
  {
    "id": "visual_animals_lizard",
    "originalId": "animals_lizard_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/lizard.webp",
    "pictureScene": "animal-lizard",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "el lagarto",
        "answers": [
          "lagarto",
          "el lagarto"
        ]
      }
    ],
    "a": [
      "el lagarto"
    ],
    "displayAnswer": "el lagarto",
    "e": "el lagarto — ящерица."
  },
  {
    "id": "animals_frog_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: лягушка.",
    "a": [
      "rana",
      "la rana"
    ],
    "e": "la rana — лягушка."
  },
  {
    "id": "animals_frog_ru",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la rana.",
    "a": [
      "лягушка"
    ],
    "e": "la rana — лягушка."
  },
  {
    "id": "animals_frog_choice",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la rana»?",
    "options": [
      "лягушка",
      "змея",
      "крокодил",
      "ящерица"
    ],
    "a": [
      "лягушка"
    ],
    "e": "la rana — лягушка."
  },
  {
    "id": "animals_frog_ctx",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ salta cerca del agua.",
    "a": [
      "rana"
    ],
    "e": "Правильное предложение: La rana salta cerca del agua. — Лягушка прыгает рядом с водой."
  },
  {
    "id": "visual_animals_frog",
    "originalId": "animals_frog_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/frog.webp",
    "pictureScene": "animal-frog",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la rana",
        "answers": [
          "rana",
          "la rana"
        ]
      }
    ],
    "a": [
      "la rana"
    ],
    "displayAnswer": "la rana",
    "e": "la rana — лягушка."
  },
  {
    "id": "animals_salamander_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: саламандра.",
    "a": [
      "salamandra",
      "la salamandra"
    ],
    "e": "la salamandra — саламандра."
  },
  {
    "id": "animals_salamander_ru",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la salamandra.",
    "a": [
      "саламандра"
    ],
    "e": "la salamandra — саламандра."
  },
  {
    "id": "animals_salamander_choice",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la salamandra»?",
    "options": [
      "саламандра",
      "змея",
      "крокодил",
      "ящерица"
    ],
    "a": [
      "саламандра"
    ],
    "e": "la salamandra — саламандра."
  },
  {
    "id": "animals_salamander_ctx",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ vive en lugares húmedos.",
    "a": [
      "salamandra"
    ],
    "e": "Правильное предложение: La salamandra vive en lugares húmedos. — Саламандра живёт во влажных местах."
  },
  {
    "id": "visual_animals_salamander",
    "originalId": "animals_salamander_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/salamander.webp",
    "pictureScene": "animal-salamander",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la salamandra",
        "answers": [
          "salamandra",
          "la salamandra"
        ]
      }
    ],
    "a": [
      "la salamandra"
    ],
    "displayAnswer": "la salamandra",
    "e": "la salamandra — саламандра."
  },
  {
    "id": "animals_tortoise_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на испанский",
    "q": "Переведи на испанский: сухопутная черепаха.",
    "a": [
      "tortuga terrestre",
      "la tortuga terrestre"
    ],
    "e": "la tortuga terrestre — сухопутная черепаха."
  },
  {
    "id": "animals_tortoise_ru",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Перевод на русский",
    "q": "Переведи на русский: la tortuga terrestre.",
    "a": [
      "сухопутная черепаха"
    ],
    "e": "la tortuga terrestre — сухопутная черепаха."
  },
  {
    "id": "animals_tortoise_choice",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "choice",
    "skill": "Выбери перевод",
    "q": "Что означает «la tortuga terrestre»?",
    "options": [
      "сухопутная черепаха",
      "змея",
      "крокодил",
      "ящерица"
    ],
    "a": [
      "сухопутная черепаха"
    ],
    "e": "la tortuga terrestre — сухопутная черепаха."
  },
  {
    "id": "animals_tortoise_ctx",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "text",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово: La ___ vive en tierra.",
    "a": [
      "tortuga terrestre"
    ],
    "e": "Правильное предложение: La tortuga terrestre vive en tierra. — Сухопутная черепаха живёт на земле."
  },
  {
    "id": "visual_animals_tortoise",
    "originalId": "animals_tortoise_es",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "picture-label",
    "skill": "Картинка → слово",
    "q": "Что изображено? Напиши по-испански.",
    "pictureSrc": "assets/picture-labels/animals/tortoise.webp",
    "pictureScene": "animal-tortoise",
    "pictureHint": "Посмотри на иллюстрацию и напиши название животного по-испански. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 50,
        "markerX": 50,
        "markerY": 50,
        "reveal": "la tortuga terrestre",
        "answers": [
          "tortuga terrestre",
          "la tortuga terrestre"
        ]
      }
    ],
    "a": [
      "la tortuga terrestre"
    ],
    "displayAnswer": "la tortuga terrestre",
    "e": "la tortuga terrestre — сухопутная черепаха."
  },
  {
    "id": "animals_match_pets",
    "topic": "animals",
    "foodCat": "pets",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини животных с испанскими названиями.",
    "pairs": [
      [
        "собака",
        "el perro"
      ],
      [
        "кот, кошка",
        "el gato"
      ],
      [
        "кролик",
        "el conejo"
      ],
      [
        "хомяк",
        "el hámster"
      ],
      [
        "мышь",
        "el ratón"
      ],
      [
        "черепаха",
        "la tortuga"
      ]
    ],
    "a": [
      "el perro | el gato | el conejo | el hámster | el ratón | la tortuga"
    ],
    "displayAnswer": "собака — el perro · кот, кошка — el gato · кролик — el conejo · хомяк — el hámster · мышь — el ratón · черепаха — la tortuga",
    "e": "Повтори названия этой группы."
  },
  {
    "id": "animals_match_farm",
    "topic": "animals",
    "foodCat": "farm",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини животных с испанскими названиями.",
    "pairs": [
      [
        "лошадь",
        "el caballo"
      ],
      [
        "корова",
        "la vaca"
      ],
      [
        "свинья",
        "el cerdo"
      ],
      [
        "овца",
        "la oveja"
      ],
      [
        "коза",
        "la cabra"
      ],
      [
        "курица",
        "la gallina"
      ]
    ],
    "a": [
      "el caballo | la vaca | el cerdo | la oveja | la cabra | la gallina"
    ],
    "displayAnswer": "лошадь — el caballo · корова — la vaca · свинья — el cerdo · овца — la oveja · коза — la cabra · курица — la gallina",
    "e": "Повтори названия этой группы."
  },
  {
    "id": "animals_match_wild",
    "topic": "animals",
    "foodCat": "wild",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини животных с испанскими названиями.",
    "pairs": [
      [
        "лев",
        "el león"
      ],
      [
        "тигр",
        "el tigre"
      ],
      [
        "медведь",
        "el oso"
      ],
      [
        "слон",
        "el elefante"
      ],
      [
        "жираф",
        "la jirafa"
      ],
      [
        "обезьяна",
        "el mono"
      ]
    ],
    "a": [
      "el león | el tigre | el oso | el elefante | la jirafa | el mono"
    ],
    "displayAnswer": "лев — el león · тигр — el tigre · медведь — el oso · слон — el elefante · жираф — la jirafa · обезьяна — el mono",
    "e": "Повтори названия этой группы."
  },
  {
    "id": "animals_match_birds",
    "topic": "animals",
    "foodCat": "birds",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини животных с испанскими названиями.",
    "pairs": [
      [
        "орёл",
        "el águila"
      ],
      [
        "сова",
        "el búho"
      ],
      [
        "попугай",
        "el loro"
      ],
      [
        "утка",
        "el pato"
      ],
      [
        "пингвин",
        "el pingüino"
      ],
      [
        "фламинго",
        "el flamenco"
      ]
    ],
    "a": [
      "el águila | el búho | el loro | el pato | el pingüino | el flamenco"
    ],
    "displayAnswer": "орёл — el águila · сова — el búho · попугай — el loro · утка — el pato · пингвин — el pingüino · фламинго — el flamenco",
    "e": "Повтори названия этой группы."
  },
  {
    "id": "animals_match_sea",
    "topic": "animals",
    "foodCat": "sea",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини животных с испанскими названиями.",
    "pairs": [
      [
        "рыба (живое животное)",
        "el pez"
      ],
      [
        "акула",
        "el tiburón"
      ],
      [
        "дельфин",
        "el delfín"
      ],
      [
        "кит",
        "la ballena"
      ],
      [
        "осьминог",
        "el pulpo"
      ],
      [
        "краб",
        "el cangrejo"
      ]
    ],
    "a": [
      "el pez | el tiburón | el delfín | la ballena | el pulpo | el cangrejo"
    ],
    "displayAnswer": "рыба (живое животное) — el pez · акула — el tiburón · дельфин — el delfín · кит — la ballena · осьминог — el pulpo · краб — el cangrejo",
    "e": "Повтори названия этой группы."
  },
  {
    "id": "animals_match_reptiles",
    "topic": "animals",
    "foodCat": "reptiles",
    "type": "match",
    "skill": "Соедини соответствия",
    "q": "Соедини животных с испанскими названиями.",
    "pairs": [
      [
        "змея",
        "la serpiente"
      ],
      [
        "крокодил",
        "el cocodrilo"
      ],
      [
        "ящерица",
        "el lagarto"
      ],
      [
        "лягушка",
        "la rana"
      ],
      [
        "саламандра",
        "la salamandra"
      ],
      [
        "сухопутная черепаха",
        "la tortuga terrestre"
      ]
    ],
    "a": [
      "la serpiente | el cocodrilo | el lagarto | la rana | la salamandra | la tortuga terrestre"
    ],
    "displayAnswer": "змея — la serpiente · крокодил — el cocodrilo · ящерица — el lagarto · лягушка — la rana · саламандра — la salamandra · сухопутная черепаха — la tortuga terrestre",
    "e": "Повтори названия этой группы."
  }
];

export const animalsTopic = {
  id: "animals",
  title: "Животные",
  icon: "🐾",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
