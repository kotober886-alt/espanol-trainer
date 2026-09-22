/**
 * Цвета topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "white",
    "cat": "basic",
    "word": "blanco",
    "base": "blanco",
    "gender": "прилагательное · blanco / blanca",
    "tr": "белый",
    "ru": [
      "белый",
      "белая",
      "белое"
    ],
    "answers": [
      "blanco",
      "blanca"
    ],
    "hex": "#FFFFFF",
    "examples": [
      [
        "La pared es blanca.",
        "Стена белая."
      ],
      [
        "Llevo una camiseta blanca.",
        "На мне белая футболка."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "black",
    "cat": "basic",
    "word": "negro",
    "base": "negro",
    "gender": "прилагательное · negro / negra",
    "tr": "чёрный",
    "ru": [
      "чёрный",
      "черный",
      "чёрная",
      "черная"
    ],
    "answers": [
      "negro",
      "negra"
    ],
    "hex": "#111111",
    "examples": [
      [
        "El bolso es negro.",
        "Сумка чёрная."
      ],
      [
        "Tengo unos zapatos negros.",
        "У меня чёрные туфли."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "red",
    "cat": "basic",
    "word": "rojo",
    "base": "rojo",
    "gender": "прилагательное · rojo / roja",
    "tr": "красный",
    "ru": [
      "красный",
      "красная"
    ],
    "answers": [
      "rojo",
      "roja"
    ],
    "hex": "#E53935",
    "examples": [
      [
        "El coche es rojo.",
        "Машина красная."
      ],
      [
        "Me gusta esta falda roja.",
        "Мне нравится эта красная юбка."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "blue",
    "cat": "basic",
    "word": "azul",
    "base": "azul",
    "gender": "прилагательное · одинаково для м. и ж. рода",
    "tr": "синий",
    "ru": [
      "синий",
      "синяя",
      "голубой"
    ],
    "answers": [
      "azul"
    ],
    "hex": "#1E66F5",
    "examples": [
      [
        "El cielo está azul.",
        "Небо синее."
      ],
      [
        "Tengo una camisa azul.",
        "У меня синяя рубашка."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "green",
    "cat": "basic",
    "word": "verde",
    "base": "verde",
    "gender": "прилагательное · одинаково для м. и ж. рода",
    "tr": "зелёный",
    "ru": [
      "зелёный",
      "зеленый",
      "зелёная",
      "зеленая"
    ],
    "answers": [
      "verde"
    ],
    "hex": "#2E9B50",
    "examples": [
      [
        "La puerta es verde.",
        "Дверь зелёная."
      ],
      [
        "Compré un jersey verde.",
        "Я купила зелёный свитер."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "yellow",
    "cat": "basic",
    "word": "amarillo",
    "base": "amarillo",
    "gender": "прилагательное · amarillo / amarilla",
    "tr": "жёлтый",
    "ru": [
      "жёлтый",
      "желтый",
      "жёлтая",
      "желтая"
    ],
    "answers": [
      "amarillo",
      "amarilla"
    ],
    "hex": "#F4D03F",
    "examples": [
      [
        "El limón es amarillo.",
        "Лимон жёлтый."
      ],
      [
        "Las flores son amarillas.",
        "Цветы жёлтые."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "orange",
    "cat": "basic",
    "word": "naranja",
    "base": "naranja",
    "gender": "цвет · обычно без изменения по роду",
    "tr": "оранжевый",
    "ru": [
      "оранжевый",
      "оранжевая"
    ],
    "answers": [
      "naranja"
    ],
    "hex": "#F28C28",
    "examples": [
      [
        "La mochila es naranja.",
        "Рюкзак оранжевый."
      ],
      [
        "Quiero una taza naranja.",
        "Я хочу оранжевую чашку."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "pink",
    "cat": "basic",
    "word": "rosa",
    "base": "rosa",
    "gender": "цвет · обычно без изменения по роду",
    "tr": "розовый",
    "ru": [
      "розовый",
      "розовая"
    ],
    "answers": [
      "rosa"
    ],
    "hex": "#F58BB5",
    "examples": [
      [
        "El pijama es rosa.",
        "Пижама розовая."
      ],
      [
        "Tiene una funda rosa.",
        "У неё розовый чехол."
      ]
    ],
    "meta": {
      "categoryTitle": "Основные",
      "categoryOrder": 1,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "purple",
    "cat": "extra",
    "word": "morado",
    "base": "morado",
    "gender": "прилагательное · morado / morada",
    "tr": "фиолетовый",
    "ru": [
      "фиолетовый",
      "фиолетовая",
      "пурпурный"
    ],
    "answers": [
      "morado",
      "morada",
      "violeta"
    ],
    "hex": "#7E57C2",
    "examples": [
      [
        "El cuaderno es morado.",
        "Тетрадь фиолетовая."
      ],
      [
        "La camiseta morada está limpia.",
        "Фиолетовая футболка чистая."
      ]
    ],
    "meta": {
      "categoryTitle": "Дополнительные",
      "categoryOrder": 2,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "brown",
    "cat": "extra",
    "word": "marrón",
    "base": "marrón",
    "gender": "прилагательное · одинаково по роду",
    "tr": "коричневый",
    "ru": [
      "коричневый",
      "коричневая"
    ],
    "answers": [
      "marrón",
      "marron"
    ],
    "hex": "#795548",
    "examples": [
      [
        "El abrigo es marrón.",
        "Пальто коричневое."
      ],
      [
        "Las botas marrones son nuevas.",
        "Коричневые сапоги новые."
      ]
    ],
    "meta": {
      "categoryTitle": "Дополнительные",
      "categoryOrder": 2,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "gray",
    "cat": "extra",
    "word": "gris",
    "base": "gris",
    "gender": "прилагательное · одинаково по роду",
    "tr": "серый",
    "ru": [
      "серый",
      "серая"
    ],
    "answers": [
      "gris"
    ],
    "hex": "#8A8A8A",
    "examples": [
      [
        "El sofá es gris.",
        "Диван серый."
      ],
      [
        "Tengo unos pantalones grises.",
        "У меня серые брюки."
      ]
    ],
    "meta": {
      "categoryTitle": "Дополнительные",
      "categoryOrder": 2,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "beige",
    "cat": "extra",
    "word": "beige",
    "base": "beige",
    "gender": "цвет · одинаково по роду",
    "tr": "бежевый",
    "ru": [
      "бежевый",
      "бежевая"
    ],
    "answers": [
      "beige"
    ],
    "hex": "#D8C7A3",
    "examples": [
      [
        "El jersey es beige.",
        "Свитер бежевый."
      ],
      [
        "La pared beige combina con todo.",
        "Бежевая стена сочетается со всем."
      ]
    ],
    "meta": {
      "categoryTitle": "Дополнительные",
      "categoryOrder": 2,
      "allCategoryTitle": "Все цвета"
    }
  },
  {
    "id": "turquoise",
    "cat": "extra",
    "word": "turquesa",
    "base": "turquesa",
    "gender": "цвет · одинаково по роду",
    "tr": "бирюзовый",
    "ru": [
      "бирюзовый",
      "бирюзовая"
    ],
    "answers": [
      "turquesa"
    ],
    "hex": "#37B7B5",
    "examples": [
      [
        "El agua es turquesa.",
        "Вода бирюзовая."
      ],
      [
        "Tengo una pulsera turquesa.",
        "У меня бирюзовый браслет."
      ]
    ],
    "meta": {
      "categoryTitle": "Дополнительные",
      "categoryOrder": 2,
      "allCategoryTitle": "Все цвета"
    }
  }
];

const EXERCISES = [
  {
    "id": "color_white_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#FFFFFF",
    "a": [
      "blanco",
      "blanca"
    ],
    "e": "blanco — белый."
  },
  {
    "id": "color_white_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: белый.",
    "a": [
      "blanco",
      "blanca"
    ],
    "e": "Базовая форма: blanco."
  },
  {
    "id": "color_white_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: blanco.",
    "a": [
      "белый",
      "белая",
      "белое"
    ],
    "e": "blanco — белый."
  },
  {
    "id": "color_black_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#111111",
    "a": [
      "negro",
      "negra"
    ],
    "e": "negro — чёрный."
  },
  {
    "id": "color_black_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: чёрный.",
    "a": [
      "negro",
      "negra"
    ],
    "e": "Базовая форма: negro."
  },
  {
    "id": "color_black_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: negro.",
    "a": [
      "чёрный",
      "черный",
      "чёрная",
      "черная"
    ],
    "e": "negro — чёрный."
  },
  {
    "id": "color_red_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#E53935",
    "a": [
      "rojo",
      "roja"
    ],
    "e": "rojo — красный."
  },
  {
    "id": "color_red_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: красный.",
    "a": [
      "rojo",
      "roja"
    ],
    "e": "Базовая форма: rojo."
  },
  {
    "id": "color_red_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: rojo.",
    "a": [
      "красный",
      "красная"
    ],
    "e": "rojo — красный."
  },
  {
    "id": "color_blue_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#1E66F5",
    "a": [
      "azul"
    ],
    "e": "azul — синий."
  },
  {
    "id": "color_blue_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: синий.",
    "a": [
      "azul"
    ],
    "e": "Базовая форма: azul."
  },
  {
    "id": "color_blue_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: azul.",
    "a": [
      "синий",
      "синяя",
      "голубой"
    ],
    "e": "azul — синий."
  },
  {
    "id": "color_green_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#2E9B50",
    "a": [
      "verde"
    ],
    "e": "verde — зелёный."
  },
  {
    "id": "color_green_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: зелёный.",
    "a": [
      "verde"
    ],
    "e": "Базовая форма: verde."
  },
  {
    "id": "color_green_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: verde.",
    "a": [
      "зелёный",
      "зеленый",
      "зелёная",
      "зеленая"
    ],
    "e": "verde — зелёный."
  },
  {
    "id": "color_yellow_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#F4D03F",
    "a": [
      "amarillo",
      "amarilla"
    ],
    "e": "amarillo — жёлтый."
  },
  {
    "id": "color_yellow_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: жёлтый.",
    "a": [
      "amarillo",
      "amarilla"
    ],
    "e": "Базовая форма: amarillo."
  },
  {
    "id": "color_yellow_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: amarillo.",
    "a": [
      "жёлтый",
      "желтый",
      "жёлтая",
      "желтая"
    ],
    "e": "amarillo — жёлтый."
  },
  {
    "id": "color_orange_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#F28C28",
    "a": [
      "naranja"
    ],
    "e": "naranja — оранжевый."
  },
  {
    "id": "color_orange_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: оранжевый.",
    "a": [
      "naranja"
    ],
    "e": "Базовая форма: naranja."
  },
  {
    "id": "color_orange_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: naranja.",
    "a": [
      "оранжевый",
      "оранжевая"
    ],
    "e": "naranja — оранжевый."
  },
  {
    "id": "color_pink_visual",
    "topic": "colors",
    "foodCat": "basic",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#F58BB5",
    "a": [
      "rosa"
    ],
    "e": "rosa — розовый."
  },
  {
    "id": "color_pink_es",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: розовый.",
    "a": [
      "rosa"
    ],
    "e": "Базовая форма: rosa."
  },
  {
    "id": "color_pink_ru",
    "topic": "colors",
    "foodCat": "basic",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: rosa.",
    "a": [
      "розовый",
      "розовая"
    ],
    "e": "rosa — розовый."
  },
  {
    "id": "color_purple_visual",
    "topic": "colors",
    "foodCat": "extra",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#7E57C2",
    "a": [
      "morado",
      "morada",
      "violeta"
    ],
    "e": "morado — фиолетовый."
  },
  {
    "id": "color_purple_es",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: фиолетовый.",
    "a": [
      "morado",
      "morada",
      "violeta"
    ],
    "e": "Базовая форма: morado."
  },
  {
    "id": "color_purple_ru",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: morado.",
    "a": [
      "фиолетовый",
      "фиолетовая",
      "пурпурный"
    ],
    "e": "morado — фиолетовый."
  },
  {
    "id": "color_brown_visual",
    "topic": "colors",
    "foodCat": "extra",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#795548",
    "a": [
      "marrón",
      "marron"
    ],
    "e": "marrón — коричневый."
  },
  {
    "id": "color_brown_es",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: коричневый.",
    "a": [
      "marrón",
      "marron"
    ],
    "e": "Базовая форма: marrón."
  },
  {
    "id": "color_brown_ru",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: marrón.",
    "a": [
      "коричневый",
      "коричневая"
    ],
    "e": "marrón — коричневый."
  },
  {
    "id": "color_gray_visual",
    "topic": "colors",
    "foodCat": "extra",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#8A8A8A",
    "a": [
      "gris"
    ],
    "e": "gris — серый."
  },
  {
    "id": "color_gray_es",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: серый.",
    "a": [
      "gris"
    ],
    "e": "Базовая форма: gris."
  },
  {
    "id": "color_gray_ru",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: gris.",
    "a": [
      "серый",
      "серая"
    ],
    "e": "gris — серый."
  },
  {
    "id": "color_beige_visual",
    "topic": "colors",
    "foodCat": "extra",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#D8C7A3",
    "a": [
      "beige"
    ],
    "e": "beige — бежевый."
  },
  {
    "id": "color_beige_es",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: бежевый.",
    "a": [
      "beige"
    ],
    "e": "Базовая форма: beige."
  },
  {
    "id": "color_beige_ru",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: beige.",
    "a": [
      "бежевый",
      "бежевая"
    ],
    "e": "beige — бежевый."
  },
  {
    "id": "color_turquoise_visual",
    "topic": "colors",
    "foodCat": "extra",
    "type": "color-prompt",
    "skill": "Узнай цвет",
    "q": "Как называется этот цвет по-испански?",
    "colorHex": "#37B7B5",
    "a": [
      "turquesa"
    ],
    "e": "turquesa — бирюзовый."
  },
  {
    "id": "color_turquoise_es",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Перевод цвета",
    "q": "Переведи на испанский: бирюзовый.",
    "a": [
      "turquesa"
    ],
    "e": "Базовая форма: turquesa."
  },
  {
    "id": "color_turquoise_ru",
    "topic": "colors",
    "foodCat": "extra",
    "skill": "Узнай цвет",
    "q": "Переведи на русский: turquesa.",
    "a": [
      "бирюзовый",
      "бирюзовая"
    ],
    "e": "turquesa — бирюзовый."
  },
  {
    "id": "choice_colors_white",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: белый.",
    "a": [
      "blanco"
    ],
    "options": [
      "blanco",
      "negro",
      "rojo",
      "azul"
    ],
    "e": "blanco — белый."
  },
  {
    "id": "choice_colors_black",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чёрный.",
    "a": [
      "negro"
    ],
    "options": [
      "negro",
      "rojo",
      "azul",
      "verde"
    ],
    "e": "negro — чёрный."
  },
  {
    "id": "choice_colors_red",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: красный.",
    "a": [
      "rojo"
    ],
    "options": [
      "rojo",
      "azul",
      "verde",
      "amarillo"
    ],
    "e": "rojo — красный."
  },
  {
    "id": "choice_colors_blue",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: синий.",
    "a": [
      "azul"
    ],
    "options": [
      "azul",
      "verde",
      "amarillo",
      "naranja"
    ],
    "e": "azul — синий."
  },
  {
    "id": "choice_colors_green",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: зелёный.",
    "a": [
      "verde"
    ],
    "options": [
      "verde",
      "amarillo",
      "naranja",
      "rosa"
    ],
    "e": "verde — зелёный."
  },
  {
    "id": "choice_colors_yellow",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: жёлтый.",
    "a": [
      "amarillo"
    ],
    "options": [
      "amarillo",
      "naranja",
      "rosa",
      "blanco"
    ],
    "e": "amarillo — жёлтый."
  },
  {
    "id": "choice_colors_orange",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: оранжевый.",
    "a": [
      "naranja"
    ],
    "options": [
      "naranja",
      "rosa",
      "blanco",
      "negro"
    ],
    "e": "naranja — оранжевый."
  },
  {
    "id": "choice_colors_pink",
    "topic": "colors",
    "foodCat": "basic",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: розовый.",
    "a": [
      "rosa"
    ],
    "options": [
      "rosa",
      "blanco",
      "negro",
      "rojo"
    ],
    "e": "rosa — розовый."
  },
  {
    "id": "choice_colors_purple",
    "topic": "colors",
    "foodCat": "extra",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: фиолетовый.",
    "a": [
      "morado"
    ],
    "options": [
      "morado",
      "marrón",
      "gris",
      "beige"
    ],
    "e": "morado — фиолетовый."
  },
  {
    "id": "choice_colors_brown",
    "topic": "colors",
    "foodCat": "extra",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: коричневый.",
    "a": [
      "marrón"
    ],
    "options": [
      "marrón",
      "gris",
      "beige",
      "turquesa"
    ],
    "e": "marrón — коричневый."
  },
  {
    "id": "choice_colors_gray",
    "topic": "colors",
    "foodCat": "extra",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: серый.",
    "a": [
      "gris"
    ],
    "options": [
      "gris",
      "beige",
      "turquesa",
      "morado"
    ],
    "e": "gris — серый."
  },
  {
    "id": "choice_colors_beige",
    "topic": "colors",
    "foodCat": "extra",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: бежевый.",
    "a": [
      "beige"
    ],
    "options": [
      "beige",
      "turquesa",
      "morado",
      "marrón"
    ],
    "e": "beige — бежевый."
  },
  {
    "id": "choice_colors_turquoise",
    "topic": "colors",
    "foodCat": "extra",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: бирюзовый.",
    "a": [
      "turquesa"
    ],
    "options": [
      "turquesa",
      "morado",
      "marrón",
      "gris"
    ],
    "e": "turquesa — бирюзовый."
  },
  {
    "id": "audio_colors_white",
    "topic": "colors",
    "foodCat": "basic",
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
    "id": "audio_colors_black",
    "topic": "colors",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El bolso es negro.",
    "a": [
      "El bolso es negro."
    ],
    "e": "Сумка чёрная."
  },
  {
    "id": "audio_colors_red",
    "topic": "colors",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El coche es rojo.",
    "a": [
      "El coche es rojo."
    ],
    "e": "Машина красная."
  },
  {
    "id": "audio_colors_blue",
    "topic": "colors",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El cielo está azul.",
    "a": [
      "El cielo está azul."
    ],
    "e": "Небо синее."
  },
  {
    "id": "audio_colors_green",
    "topic": "colors",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La puerta es verde.",
    "a": [
      "La puerta es verde."
    ],
    "e": "Дверь зелёная."
  },
  {
    "id": "audio_colors_yellow",
    "topic": "colors",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El limón es amarillo.",
    "a": [
      "El limón es amarillo."
    ],
    "e": "Лимон жёлтый."
  },
  {
    "id": "audio_colors_orange",
    "topic": "colors",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La mochila es naranja.",
    "a": [
      "La mochila es naranja."
    ],
    "e": "Рюкзак оранжевый."
  },
  {
    "id": "audio_colors_pink",
    "topic": "colors",
    "foodCat": "basic",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El pijama es rosa.",
    "a": [
      "El pijama es rosa."
    ],
    "e": "Пижама розовая."
  },
  {
    "id": "audio_colors_purple",
    "topic": "colors",
    "foodCat": "extra",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El cuaderno es morado.",
    "a": [
      "El cuaderno es morado."
    ],
    "e": "Тетрадь фиолетовая."
  },
  {
    "id": "audio_colors_brown",
    "topic": "colors",
    "foodCat": "extra",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El abrigo es marrón.",
    "a": [
      "El abrigo es marrón."
    ],
    "e": "Пальто коричневое."
  },
  {
    "id": "audio_colors_gray",
    "topic": "colors",
    "foodCat": "extra",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El sofá es gris.",
    "a": [
      "El sofá es gris."
    ],
    "e": "Диван серый."
  },
  {
    "id": "audio_colors_beige",
    "topic": "colors",
    "foodCat": "extra",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El jersey es beige.",
    "a": [
      "El jersey es beige."
    ],
    "e": "Свитер бежевый."
  },
  {
    "id": "audio_colors_turquoise",
    "topic": "colors",
    "foodCat": "extra",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El agua es turquesa.",
    "a": [
      "El agua es turquesa."
    ],
    "e": "Вода бирюзовая."
  },
  {
    "id": "sort_auto_colors_0",
    "topic": "colors",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Цвета» по подходящим колонкам.",
    "sortColumns": [
      {
        "id": "basic",
        "title": "Основные"
      },
      {
        "id": "extra",
        "title": "Дополнительные"
      }
    ],
    "sortTokens": [
      {
        "id": "colors_0_basic_white",
        "text": "blanco",
        "category": "basic"
      },
      {
        "id": "colors_0_basic_black",
        "text": "negro",
        "category": "basic"
      },
      {
        "id": "colors_0_basic_red",
        "text": "rojo",
        "category": "basic"
      },
      {
        "id": "colors_0_extra_purple",
        "text": "morado",
        "category": "extra"
      },
      {
        "id": "colors_0_extra_brown",
        "text": "marrón",
        "category": "extra"
      },
      {
        "id": "colors_0_extra_gray",
        "text": "gris",
        "category": "extra"
      }
    ],
    "a": [
      "basic | basic | basic | extra | extra | extra"
    ],
    "displayAnswer": "Основные: blanco, negro, rojo · Дополнительные: morado, marrón, gris",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const colorsTopic = {
  id: "colors",
  title: "Цвета",
  icon: "◩",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
