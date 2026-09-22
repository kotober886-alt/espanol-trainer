/**
 * Продукты питания topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "bread",
    "cat": "grocery",
    "word": "el pan",
    "base": "pan",
    "gender": "мужской род",
    "tr": "хлеб",
    "ru": [
      "хлеб"
    ],
    "answers": [
      "pan",
      "el pan"
    ],
    "art": "bread",
    "examples": [
      [
        "Compro pan fresco.",
        "Я покупаю свежий хлеб."
      ],
      [
        "El pan está en la mesa.",
        "Хлеб находится на столе."
      ]
    ],
    "cloze": "Compro ___ fresco.",
    "clozeAnswers": [
      "pan"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "milk",
    "cat": "base",
    "word": "la leche",
    "base": "leche",
    "gender": "женский род",
    "tr": "молоко",
    "ru": [
      "молоко"
    ],
    "answers": [
      "leche",
      "la leche"
    ],
    "art": "milk",
    "examples": [
      [
        "Bebo leche por la mañana.",
        "Я пью молоко утром."
      ],
      [
        "Necesitamos un litro de leche.",
        "Нам нужен литр молока."
      ]
    ],
    "cloze": "Bebo ___ por la mañana.",
    "clozeAnswers": [
      "leche"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "cheese",
    "cat": "base",
    "word": "el queso",
    "base": "queso",
    "gender": "мужской род",
    "tr": "сыр",
    "ru": [
      "сыр"
    ],
    "answers": [
      "queso",
      "el queso"
    ],
    "art": "cheese",
    "examples": [
      [
        "Me gusta el queso.",
        "Мне нравится сыр."
      ],
      [
        "Este queso es muy suave.",
        "Этот сыр очень нежный."
      ]
    ],
    "cloze": "Me gusta el ___.",
    "clozeAnswers": [
      "queso"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "egg",
    "cat": "base",
    "word": "el huevo",
    "base": "huevo",
    "gender": "мужской род",
    "tr": "яйцо",
    "ru": [
      "яйцо"
    ],
    "answers": [
      "huevo",
      "el huevo"
    ],
    "art": "egg",
    "examples": [
      [
        "Como un huevo en el desayuno.",
        "Я ем яйцо на завтрак."
      ],
      [
        "Los huevos están en la nevera.",
        "Яйца находятся в холодильнике."
      ]
    ],
    "cloze": "Como un ___ en el desayuno.",
    "clozeAnswers": [
      "huevo"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "rice",
    "cat": "grocery",
    "word": "el arroz",
    "base": "arroz",
    "gender": "мужской род",
    "tr": "рис",
    "ru": [
      "рис"
    ],
    "answers": [
      "arroz",
      "el arroz"
    ],
    "art": "rice",
    "examples": [
      [
        "Cocinamos arroz con verduras.",
        "Мы готовим рис с овощами."
      ],
      [
        "Quiero una porción de arroz.",
        "Я хочу порцию риса."
      ]
    ],
    "cloze": "Cocinamos ___ con verduras.",
    "clozeAnswers": [
      "arroz"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "pasta",
    "cat": "grocery",
    "word": "la pasta",
    "base": "pasta",
    "gender": "женский род",
    "tr": "макароны, паста",
    "ru": [
      "макароны",
      "паста",
      "макароны паста"
    ],
    "answers": [
      "pasta",
      "la pasta"
    ],
    "art": "pasta",
    "examples": [
      [
        "Hoy comemos pasta.",
        "Сегодня мы едим пасту."
      ],
      [
        "La pasta está caliente.",
        "Паста горячая."
      ]
    ],
    "cloze": "Hoy comemos ___.",
    "clozeAnswers": [
      "pasta"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "chicken",
    "cat": "meat",
    "word": "el pollo",
    "base": "pollo",
    "gender": "мужской род",
    "tr": "курица, куриное мясо",
    "ru": [
      "курица",
      "куриное мясо",
      "курятина"
    ],
    "answers": [
      "pollo",
      "el pollo"
    ],
    "art": "chicken",
    "examples": [
      [
        "Como pollo con patatas.",
        "Я ем курицу с картофелем."
      ],
      [
        "El pollo está en el horno.",
        "Курица находится в духовке."
      ]
    ],
    "cloze": "Como ___ con patatas.",
    "clozeAnswers": [
      "pollo"
    ],
    "meta": {
      "categoryTitle": "meat",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "fish",
    "cat": "seafood",
    "word": "el pescado",
    "base": "pescado",
    "gender": "мужской род",
    "tr": "рыба как продукт",
    "ru": [
      "рыба",
      "рыба как продукт"
    ],
    "answers": [
      "pescado",
      "el pescado"
    ],
    "art": "assets/picture-labels/foods/fish.webp",
    "examples": [
      [
        "Prefiero el pescado.",
        "Я предпочитаю рыбу."
      ],
      [
        "Compramos pescado fresco.",
        "Мы покупаем свежую рыбу."
      ]
    ],
    "cloze": "Prefiero el ___.",
    "clozeAnswers": [
      "pescado"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "meat",
    "cat": "meat",
    "word": "la carne",
    "base": "carne",
    "gender": "женский род",
    "tr": "мясо",
    "ru": [
      "мясо"
    ],
    "answers": [
      "carne",
      "la carne"
    ],
    "art": "meat",
    "examples": [
      [
        "No como mucha carne.",
        "Я не ем много мяса."
      ],
      [
        "La carne está lista.",
        "Мясо готово."
      ]
    ],
    "cloze": "No como mucha ___.",
    "clozeAnswers": [
      "carne"
    ],
    "meta": {
      "categoryTitle": "meat",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "potato",
    "cat": "base",
    "word": "la patata",
    "base": "patata",
    "gender": "женский род",
    "tr": "картофель, картофелина",
    "ru": [
      "картофель",
      "картошка",
      "картофелина"
    ],
    "answers": [
      "patata",
      "la patata",
      "papa",
      "la papa"
    ],
    "art": "potato",
    "examples": [
      [
        "Pelo una patata.",
        "Я чищу картофелину."
      ],
      [
        "Necesito dos patatas.",
        "Мне нужны две картофелины."
      ]
    ],
    "cloze": "Pelo una ___.",
    "clozeAnswers": [
      "patata",
      "papa"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "tomato",
    "cat": "base",
    "word": "el tomate",
    "base": "tomate",
    "gender": "мужской род",
    "tr": "помидор",
    "ru": [
      "помидор",
      "томат"
    ],
    "answers": [
      "tomate",
      "el tomate"
    ],
    "art": "tomato",
    "examples": [
      [
        "Corto un tomate.",
        "Я режу помидор."
      ],
      [
        "Los tomates están maduros.",
        "Помидоры спелые."
      ]
    ],
    "cloze": "Corto un ___.",
    "clozeAnswers": [
      "tomate"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "apple",
    "cat": "base",
    "word": "la manzana",
    "base": "manzana",
    "gender": "женский род",
    "tr": "яблоко",
    "ru": [
      "яблоко"
    ],
    "answers": [
      "manzana",
      "la manzana"
    ],
    "art": "apple",
    "examples": [
      [
        "Como una manzana.",
        "Я ем яблоко."
      ],
      [
        "La manzana es roja.",
        "Яблоко красное."
      ]
    ],
    "cloze": "Como una ___.",
    "clozeAnswers": [
      "manzana"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "banana",
    "cat": "base",
    "word": "el plátano",
    "base": "plátano",
    "gender": "мужской род",
    "tr": "банан",
    "ru": [
      "банан"
    ],
    "answers": [
      "plátano",
      "el plátano",
      "banana",
      "la banana"
    ],
    "art": "banana",
    "examples": [
      [
        "Compro plátanos.",
        "Я покупаю бананы."
      ],
      [
        "El plátano está maduro.",
        "Банан спелый."
      ]
    ],
    "cloze": "El ___ está maduro.",
    "clozeAnswers": [
      "plátano"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "orange",
    "cat": "base",
    "word": "la naranja",
    "base": "naranja",
    "gender": "женский род",
    "tr": "апельсин",
    "ru": [
      "апельсин"
    ],
    "answers": [
      "naranja",
      "la naranja"
    ],
    "art": "orange",
    "examples": [
      [
        "Quiero zumo de naranja.",
        "Я хочу апельсиновый сок."
      ],
      [
        "La naranja es dulce.",
        "Апельсин сладкий."
      ]
    ],
    "cloze": "La ___ es dulce.",
    "clozeAnswers": [
      "naranja"
    ],
    "meta": {
      "categoryTitle": "base",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "water",
    "cat": "drinks",
    "word": "el agua",
    "base": "agua",
    "gender": "женский род",
    "tr": "вода",
    "ru": [
      "вода"
    ],
    "answers": [
      "agua",
      "el agua"
    ],
    "art": "water",
    "examples": [
      [
        "Bebo agua todos los días.",
        "Я пью воду каждый день."
      ],
      [
        "Quiero un vaso de agua.",
        "Я хочу стакан воды."
      ]
    ],
    "cloze": "Bebo ___ todos los días.",
    "clozeAnswers": [
      "agua"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "coffee",
    "cat": "drinks",
    "word": "el café",
    "base": "café",
    "gender": "мужской род",
    "tr": "кофе",
    "ru": [
      "кофе"
    ],
    "answers": [
      "café",
      "el café"
    ],
    "art": "coffee",
    "examples": [
      [
        "Tomo café sin azúcar.",
        "Я пью кофе без сахара."
      ],
      [
        "El café está caliente.",
        "Кофе горячий."
      ]
    ],
    "cloze": "Tomo ___ sin azúcar.",
    "clozeAnswers": [
      "café"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "tea",
    "cat": "drinks",
    "word": "el té",
    "base": "té",
    "gender": "мужской род",
    "tr": "чай",
    "ru": [
      "чай"
    ],
    "answers": [
      "té",
      "el té"
    ],
    "art": "tea",
    "examples": [
      [
        "Bebo té por la tarde.",
        "Я пью чай после обеда."
      ],
      [
        "Prefiero el té verde.",
        "Я предпочитаю зелёный чай."
      ]
    ],
    "cloze": "Bebo ___ por la tarde.",
    "clozeAnswers": [
      "té"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "salt",
    "cat": "grocery",
    "word": "la sal",
    "base": "sal",
    "gender": "женский род",
    "tr": "соль",
    "ru": [
      "соль"
    ],
    "answers": [
      "sal",
      "la sal"
    ],
    "art": "salt",
    "examples": [
      [
        "Añade un poco de sal.",
        "Добавь немного соли."
      ],
      [
        "La sal está en la mesa.",
        "Соль находится на столе."
      ]
    ],
    "cloze": "Añade un poco de ___.",
    "clozeAnswers": [
      "sal"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "beef",
    "cat": "meat",
    "word": "la ternera",
    "base": "ternera",
    "gender": "женский род",
    "tr": "говядина, телятина",
    "ru": [
      "говядина",
      "телятина",
      "говядина телятина"
    ],
    "answers": [
      "ternera",
      "la ternera",
      "carne de ternera",
      "la carne de ternera"
    ],
    "art": "meat",
    "examples": [
      [
        "Compro ternera para la cena.",
        "Я покупаю говядину на ужин."
      ],
      [
        "La ternera está muy tierna.",
        "Говядина очень нежная."
      ]
    ],
    "cloze": "Compro ___ para la cena.",
    "clozeAnswers": [
      "ternera",
      "carne de ternera"
    ],
    "meta": {
      "categoryTitle": "meat",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "pork",
    "cat": "meat",
    "word": "la carne de cerdo",
    "base": "carne de cerdo",
    "gender": "женский род",
    "tr": "свинина",
    "ru": [
      "свинина"
    ],
    "answers": [
      "carne de cerdo",
      "la carne de cerdo",
      "cerdo",
      "el cerdo"
    ],
    "art": "meat",
    "examples": [
      [
        "No como carne de cerdo.",
        "Я не ем свинину."
      ],
      [
        "La carne de cerdo está en la nevera.",
        "Свинина находится в холодильнике."
      ]
    ],
    "cloze": "No como carne de ___.",
    "clozeAnswers": [
      "cerdo"
    ],
    "meta": {
      "categoryTitle": "meat",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "turkey",
    "cat": "meat",
    "word": "el pavo",
    "base": "pavo",
    "gender": "мужской род",
    "tr": "индейка",
    "ru": [
      "индейка",
      "индюшка"
    ],
    "answers": [
      "pavo",
      "el pavo"
    ],
    "art": "chicken",
    "examples": [
      [
        "Hoy cocinamos pavo.",
        "Сегодня мы готовим индейку."
      ],
      [
        "El pavo tiene poca grasa.",
        "В индейке мало жира."
      ]
    ],
    "cloze": "Hoy cocinamos ___.",
    "clozeAnswers": [
      "pavo"
    ],
    "meta": {
      "categoryTitle": "meat",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "ham",
    "cat": "meat",
    "word": "el jamón",
    "base": "jamón",
    "gender": "мужской род",
    "tr": "ветчина, хамон",
    "ru": [
      "ветчина",
      "хамон",
      "ветчина хамон"
    ],
    "answers": [
      "jamón",
      "el jamón"
    ],
    "art": "meat",
    "examples": [
      [
        "Quiero un bocadillo de jamón.",
        "Я хочу бутерброд с ветчиной."
      ],
      [
        "El jamón está muy rico.",
        "Хамон очень вкусный."
      ]
    ],
    "cloze": "Quiero un bocadillo de ___.",
    "clozeAnswers": [
      "jamón"
    ],
    "meta": {
      "categoryTitle": "meat",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "sausage",
    "cat": "meat",
    "word": "la salchicha",
    "base": "salchicha",
    "gender": "женский род",
    "tr": "сосиска, колбаска",
    "ru": [
      "сосиска",
      "колбаска",
      "сосиска колбаска"
    ],
    "answers": [
      "salchicha",
      "la salchicha"
    ],
    "art": "sausage",
    "examples": [
      [
        "Como una salchicha con pan.",
        "Я ем сосиску с хлебом."
      ],
      [
        "Las salchichas están calientes.",
        "Сосиски горячие."
      ]
    ],
    "cloze": "Como una ___ con pan.",
    "clozeAnswers": [
      "salchicha"
    ],
    "meta": {
      "categoryTitle": "meat",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "salmon",
    "cat": "seafood",
    "word": "el salmón",
    "base": "salmón",
    "gender": "мужской род",
    "tr": "лосось",
    "ru": [
      "лосось"
    ],
    "answers": [
      "salmón",
      "el salmón"
    ],
    "art": "assets/picture-labels/foods/salmon.webp",
    "examples": [
      [
        "El salmón está en el horno.",
        "Лосось находится в духовке."
      ],
      [
        "Me gusta el salmón con arroz.",
        "Мне нравится лосось с рисом."
      ]
    ],
    "cloze": "Me gusta el ___ con arroz.",
    "clozeAnswers": [
      "salmón"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "tuna",
    "cat": "seafood",
    "word": "el atún",
    "base": "atún",
    "gender": "мужской род",
    "tr": "тунец",
    "ru": [
      "тунец"
    ],
    "answers": [
      "atún",
      "el atún"
    ],
    "art": "assets/picture-labels/foods/tuna.webp",
    "examples": [
      [
        "La ensalada lleva atún.",
        "В салате есть тунец."
      ],
      [
        "Compro una lata de atún.",
        "Я покупаю банку тунца."
      ]
    ],
    "cloze": "Compro una lata de ___.",
    "clozeAnswers": [
      "atún"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "shrimp",
    "cat": "seafood",
    "word": "la gamba / el camarón",
    "base": "gamba / camarón",
    "gender": "женский род (gamba) / мужской род (camarón)",
    "tr": "креветка",
    "ru": [
      "креветка",
      "креветки"
    ],
    "answers": [
      "gamba",
      "la gamba",
      "gambas",
      "las gambas",
      "camarón",
      "el camarón",
      "camaron",
      "el camaron",
      "camarones",
      "los camarones"
    ],
    "art": "assets/picture-labels/foods/shrimp.webp",
    "examples": [
      [
        "En España se usa «gamba».",
        "В Испании употребляется «gamba»."
      ],
      [
        "En América Latina se usa «camarón».",
        "В Латинской Америке употребляется «camarón»."
      ]
    ],
    "cloze": "Compramos ___ para la cena.",
    "clozeAnswers": [
      "gamba",
      "gambas",
      "camarón",
      "camaron",
      "camarones"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "mejillones",
    "cat": "seafood",
    "word": "los mejillones",
    "base": "mejillones",
    "gender": "мужской род, множественное число",
    "tr": "мидии",
    "ru": [
      "мидии"
    ],
    "answers": [
      "mejillones",
      "los mejillones"
    ],
    "art": "assets/picture-labels/foods/mejillones.webp",
    "examples": [
      [
        "Los mejillones están listos.",
        "Мидии готовы."
      ],
      [
        "Nunca como mejillones.",
        "Я никогда не ем мидии."
      ]
    ],
    "cloze": "Nunca como ___.",
    "clozeAnswers": [
      "mejillones"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "squid",
    "cat": "seafood",
    "word": "el calamar",
    "base": "calamar",
    "gender": "мужской род",
    "tr": "кальмар",
    "ru": [
      "кальмар"
    ],
    "answers": [
      "calamar",
      "el calamar"
    ],
    "art": "assets/picture-labels/foods/squid.webp",
    "examples": [
      [
        "El calamar está muy tierno.",
        "Кальмар очень нежный."
      ],
      [
        "Quiero calamar a la plancha.",
        "Я хочу кальмара на гриле."
      ]
    ],
    "cloze": "Quiero ___ a la plancha.",
    "clozeAnswers": [
      "calamar"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "octopus",
    "cat": "seafood",
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
    "art": "assets/picture-labels/octopus.webp",
    "examples": [
      [
        "Probamos pulpo en Galicia.",
        "Мы пробуем осьминога в Галисии."
      ],
      [
        "El pulpo está delicioso.",
        "Осьминог очень вкусный."
      ]
    ],
    "cloze": "El ___ está delicioso.",
    "clozeAnswers": [
      "pulpo"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "seafood",
    "cat": "seafood",
    "word": "el marisco",
    "base": "marisco",
    "gender": "мужской род",
    "tr": "морепродукты",
    "ru": [
      "морепродукты",
      "морепродукт"
    ],
    "answers": [
      "marisco",
      "el marisco",
      "mariscos",
      "los mariscos"
    ],
    "art": "assets/picture-labels/marisco.webp",
    "examples": [
      [
        "Me gusta mucho el marisco.",
        "Я очень люблю морепродукты."
      ],
      [
        "La paella lleva marisco.",
        "В паэлье есть морепродукты."
      ]
    ],
    "cloze": "La paella lleva ___.",
    "clozeAnswers": [
      "marisco",
      "mariscos"
    ],
    "meta": {
      "categoryTitle": "seafood",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "cookie",
    "cat": "desserts",
    "word": "la galleta",
    "base": "galleta",
    "gender": "женский род",
    "tr": "печенье",
    "ru": [
      "печенье",
      "печенька"
    ],
    "answers": [
      "galleta",
      "la galleta"
    ],
    "art": "cookie",
    "examples": [
      [
        "Como una galleta con café.",
        "Я ем печенье с кофе."
      ],
      [
        "Estas galletas tienen chocolate.",
        "В этом печенье есть шоколад."
      ]
    ],
    "cloze": "Como una ___ con café.",
    "clozeAnswers": [
      "galleta"
    ],
    "meta": {
      "categoryTitle": "desserts",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "cake",
    "cat": "desserts",
    "word": "la tarta",
    "base": "tarta",
    "gender": "женский род",
    "tr": "торт, пирог",
    "ru": [
      "торт",
      "пирог",
      "торт пирог"
    ],
    "answers": [
      "tarta",
      "la tarta",
      "pastel",
      "el pastel"
    ],
    "art": "cake",
    "examples": [
      [
        "La tarta es de chocolate.",
        "Торт шоколадный."
      ],
      [
        "Preparo una tarta para mi cumpleaños.",
        "Я готовлю торт на свой день рождения."
      ]
    ],
    "cloze": "La ___ es de chocolate.",
    "clozeAnswers": [
      "tarta",
      "pastel"
    ],
    "meta": {
      "categoryTitle": "desserts",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "icecream",
    "cat": "desserts",
    "word": "el helado",
    "base": "helado",
    "gender": "мужской род",
    "tr": "мороженое",
    "ru": [
      "мороженое"
    ],
    "answers": [
      "helado",
      "el helado"
    ],
    "art": "icecream",
    "examples": [
      [
        "Quiero un helado de vainilla.",
        "Я хочу ванильное мороженое."
      ],
      [
        "El helado está muy frío.",
        "Мороженое очень холодное."
      ]
    ],
    "cloze": "Quiero un ___ de vainilla.",
    "clozeAnswers": [
      "helado"
    ],
    "meta": {
      "categoryTitle": "desserts",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "chocolate",
    "cat": "desserts",
    "word": "el chocolate",
    "base": "chocolate",
    "gender": "мужской род",
    "tr": "шоколад",
    "ru": [
      "шоколад"
    ],
    "answers": [
      "chocolate",
      "el chocolate"
    ],
    "art": "chocolate",
    "examples": [
      [
        "Me encanta el chocolate negro.",
        "Я обожаю тёмный шоколад."
      ],
      [
        "Esta tarta lleva chocolate.",
        "В этом торте есть шоколад."
      ]
    ],
    "cloze": "Me encanta el ___ negro.",
    "clozeAnswers": [
      "chocolate"
    ],
    "meta": {
      "categoryTitle": "desserts",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "candy",
    "cat": "desserts",
    "word": "el caramelo",
    "base": "caramelo",
    "gender": "мужской род",
    "tr": "конфета, карамель",
    "ru": [
      "конфета",
      "карамель",
      "конфета карамель"
    ],
    "answers": [
      "caramelo",
      "el caramelo"
    ],
    "art": "candy",
    "examples": [
      [
        "El niño come un caramelo.",
        "Ребёнок ест конфету."
      ],
      [
        "No quiero más caramelos.",
        "Я больше не хочу конфет."
      ]
    ],
    "cloze": "El niño come un ___.",
    "clozeAnswers": [
      "caramelo"
    ],
    "meta": {
      "categoryTitle": "desserts",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "muffin",
    "cat": "desserts",
    "word": "la magdalena",
    "base": "magdalena",
    "gender": "женский род",
    "tr": "кекс",
    "ru": [
      "кекс",
      "маффин"
    ],
    "answers": [
      "magdalena",
      "la magdalena",
      "muffin",
      "el muffin"
    ],
    "art": "muffin",
    "examples": [
      [
        "Desayuno una magdalena.",
        "Я завтракаю кексом."
      ],
      [
        "La magdalena está muy esponjosa.",
        "Кекс очень воздушный."
      ]
    ],
    "cloze": "Desayuno una ___.",
    "clozeAnswers": [
      "magdalena"
    ],
    "meta": {
      "categoryTitle": "desserts",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "flan",
    "cat": "desserts",
    "word": "el flan",
    "base": "flan",
    "gender": "мужской род",
    "tr": "флан, карамельный пудинг",
    "ru": [
      "флан",
      "карамельный пудинг",
      "пудинг"
    ],
    "answers": [
      "flan",
      "el flan"
    ],
    "art": "flan",
    "examples": [
      [
        "De postre quiero flan.",
        "На десерт я хочу флан."
      ],
      [
        "El flan lleva huevos y leche.",
        "Во флане есть яйца и молоко."
      ]
    ],
    "cloze": "De postre quiero ___.",
    "clozeAnswers": [
      "flan"
    ],
    "meta": {
      "categoryTitle": "desserts",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "juice",
    "cat": "drinks",
    "word": "el zumo",
    "base": "zumo",
    "gender": "мужской род",
    "tr": "сок",
    "ru": [
      "сок"
    ],
    "answers": [
      "zumo",
      "el zumo",
      "jugo",
      "el jugo"
    ],
    "art": "juice",
    "examples": [
      [
        "Bebo zumo de naranja.",
        "Я пью апельсиновый сок."
      ],
      [
        "El zumo está en la nevera.",
        "Сок находится в холодильнике."
      ]
    ],
    "cloze": "Bebo ___ de naranja.",
    "clozeAnswers": [
      "zumo",
      "jugo"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "lemonade",
    "cat": "drinks",
    "word": "la limonada",
    "base": "limonada",
    "gender": "женский род",
    "tr": "лимонад",
    "ru": [
      "лимонад"
    ],
    "answers": [
      "limonada",
      "la limonada"
    ],
    "art": "juice",
    "examples": [
      [
        "La limonada está muy fría.",
        "Лимонад очень холодный."
      ],
      [
        "Preparo limonada con hielo.",
        "Я готовлю лимонад со льдом."
      ]
    ],
    "cloze": "Preparo ___ con hielo.",
    "clozeAnswers": [
      "limonada"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "soda",
    "cat": "drinks",
    "word": "el refresco",
    "base": "refresco",
    "gender": "мужской род",
    "tr": "газированный напиток",
    "ru": [
      "газировка",
      "газированный напиток",
      "прохладительный напиток"
    ],
    "answers": [
      "refresco",
      "el refresco"
    ],
    "art": "soda",
    "examples": [
      [
        "No bebo muchos refrescos.",
        "Я не пью много газировки."
      ],
      [
        "Quiero un refresco sin azúcar.",
        "Я хочу газировку без сахара."
      ]
    ],
    "cloze": "Quiero un ___ sin azúcar.",
    "clozeAnswers": [
      "refresco"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "wine",
    "cat": "drinks",
    "word": "el vino",
    "base": "vino",
    "gender": "мужской род",
    "tr": "вино",
    "ru": [
      "вино"
    ],
    "answers": [
      "vino",
      "el vino"
    ],
    "art": "wine",
    "examples": [
      [
        "Prefiero el vino blanco.",
        "Я предпочитаю белое вино."
      ],
      [
        "La botella de vino está en la mesa.",
        "Бутылка вина находится на столе."
      ]
    ],
    "cloze": "Prefiero el ___ blanco.",
    "clozeAnswers": [
      "vino"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "beer",
    "cat": "drinks",
    "word": "la cerveza",
    "base": "cerveza",
    "gender": "женский род",
    "tr": "пиво",
    "ru": [
      "пиво"
    ],
    "answers": [
      "cerveza",
      "la cerveza"
    ],
    "art": "beer",
    "examples": [
      [
        "Quiero una cerveza sin alcohol.",
        "Я хочу безалкогольное пиво."
      ],
      [
        "La cerveza está fría.",
        "Пиво холодное."
      ]
    ],
    "cloze": "Quiero una ___ sin alcohol.",
    "clozeAnswers": [
      "cerveza"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "hotchocolate",
    "cat": "drinks",
    "word": "el chocolate caliente",
    "base": "chocolate caliente",
    "gender": "мужской род",
    "tr": "горячий шоколад",
    "ru": [
      "горячий шоколад"
    ],
    "answers": [
      "chocolate caliente",
      "el chocolate caliente"
    ],
    "art": "coffee",
    "examples": [
      [
        "En invierno bebo chocolate caliente.",
        "Зимой я пью горячий шоколад."
      ],
      [
        "El chocolate caliente lleva leche.",
        "В горячем шоколаде есть молоко."
      ]
    ],
    "cloze": "En invierno bebo chocolate ___.",
    "clozeAnswers": [
      "caliente"
    ],
    "meta": {
      "categoryTitle": "drinks",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "soup",
    "cat": "dishes",
    "word": "la sopa",
    "base": "sopa",
    "gender": "женский род",
    "tr": "суп",
    "ru": [
      "суп"
    ],
    "answers": [
      "sopa",
      "la sopa"
    ],
    "art": "soup",
    "examples": [
      [
        "La sopa está caliente.",
        "Суп горячий."
      ],
      [
        "Hoy preparo sopa de verduras.",
        "Сегодня я готовлю овощной суп."
      ]
    ],
    "cloze": "Hoy preparo ___ de verduras.",
    "clozeAnswers": [
      "sopa"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "salad",
    "cat": "dishes",
    "word": "la ensalada",
    "base": "ensalada",
    "gender": "женский род",
    "tr": "салат",
    "ru": [
      "салат"
    ],
    "answers": [
      "ensalada",
      "la ensalada"
    ],
    "art": "salad",
    "examples": [
      [
        "Quiero una ensalada pequeña.",
        "Я хочу маленький салат."
      ],
      [
        "La ensalada lleva tomate y atún.",
        "В салате есть помидор и тунец."
      ]
    ],
    "cloze": "Quiero una ___ pequeña.",
    "clozeAnswers": [
      "ensalada"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "omelette",
    "cat": "dishes",
    "word": "la tortilla",
    "base": "tortilla",
    "gender": "женский род",
    "tr": "омлет, тортилья",
    "ru": [
      "омлет",
      "тортилья",
      "омлет тортилья"
    ],
    "answers": [
      "tortilla",
      "la tortilla"
    ],
    "art": "egg",
    "examples": [
      [
        "La tortilla lleva huevos y patatas.",
        "В тортилье есть яйца и картофель."
      ],
      [
        "Comemos tortilla para cenar.",
        "Мы едим тортилью на ужин."
      ]
    ],
    "cloze": "Comemos ___ para cenar.",
    "clozeAnswers": [
      "tortilla"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "sandwich",
    "cat": "dishes",
    "word": "el bocadillo",
    "base": "bocadillo",
    "gender": "мужской род",
    "tr": "бутерброд, сэндвич",
    "ru": [
      "бутерброд",
      "сэндвич",
      "бутерброд сэндвич"
    ],
    "answers": [
      "bocadillo",
      "el bocadillo",
      "sándwich",
      "el sándwich"
    ],
    "art": "sandwich",
    "examples": [
      [
        "Quiero un bocadillo de queso.",
        "Я хочу бутерброд с сыром."
      ],
      [
        "El bocadillo está listo.",
        "Бутерброд готов."
      ]
    ],
    "cloze": "Quiero un ___ de queso.",
    "clozeAnswers": [
      "bocadillo",
      "sándwich"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "pizza",
    "cat": "dishes",
    "word": "la pizza",
    "base": "pizza",
    "gender": "женский род",
    "tr": "пицца",
    "ru": [
      "пицца"
    ],
    "answers": [
      "pizza",
      "la pizza"
    ],
    "art": "pizza",
    "examples": [
      [
        "Pedimos una pizza grande.",
        "Мы заказываем большую пиццу."
      ],
      [
        "La pizza lleva queso y tomate.",
        "В пицце есть сыр и помидор."
      ]
    ],
    "cloze": "Pedimos una ___ grande.",
    "clozeAnswers": [
      "pizza"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "paella",
    "cat": "dishes",
    "word": "la paella",
    "base": "paella",
    "gender": "женский род",
    "tr": "паэлья",
    "ru": [
      "паэлья"
    ],
    "answers": [
      "paella",
      "la paella"
    ],
    "art": "rice",
    "examples": [
      [
        "La paella lleva arroz y marisco.",
        "В паэлье есть рис и морепродукты."
      ],
      [
        "Hoy comemos paella.",
        "Сегодня мы едим паэлью."
      ]
    ],
    "cloze": "Hoy comemos ___.",
    "clozeAnswers": [
      "paella"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "stew",
    "cat": "dishes",
    "word": "el guiso",
    "base": "guiso",
    "gender": "мужской род",
    "tr": "рагу, тушёное блюдо",
    "ru": [
      "рагу",
      "тушёное блюдо",
      "тушеное блюдо"
    ],
    "answers": [
      "guiso",
      "el guiso"
    ],
    "art": "soup",
    "examples": [
      [
        "El guiso lleva carne y patatas.",
        "В рагу есть мясо и картофель."
      ],
      [
        "Mi abuela prepara un guiso delicioso.",
        "Моя бабушка готовит вкусное рагу."
      ]
    ],
    "cloze": "El ___ lleva carne y patatas.",
    "clozeAnswers": [
      "guiso"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "puree",
    "cat": "dishes",
    "word": "el puré",
    "base": "puré",
    "gender": "мужской род",
    "tr": "пюре",
    "ru": [
      "пюре"
    ],
    "answers": [
      "puré",
      "el puré"
    ],
    "art": "puree",
    "examples": [
      [
        "Quiero puré de patatas.",
        "Я хочу картофельное пюре."
      ],
      [
        "El puré está muy suave.",
        "Пюре очень нежное."
      ]
    ],
    "cloze": "Quiero ___ de patatas.",
    "clozeAnswers": [
      "puré"
    ],
    "meta": {
      "categoryTitle": "dishes",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "flour",
    "cat": "grocery",
    "word": "la harina",
    "base": "harina",
    "gender": "женский род",
    "tr": "мука",
    "ru": [
      "мука"
    ],
    "answers": [
      "harina",
      "la harina"
    ],
    "art": "bag",
    "examples": [
      [
        "Necesito harina para la tarta.",
        "Мне нужна мука для торта."
      ],
      [
        "La harina está en el armario.",
        "Мука находится в шкафу."
      ]
    ],
    "cloze": "Necesito ___ para la tarta.",
    "clozeAnswers": [
      "harina"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "sugar",
    "cat": "grocery",
    "word": "el azúcar",
    "base": "azúcar",
    "gender": "мужской род",
    "tr": "сахар",
    "ru": [
      "сахар"
    ],
    "answers": [
      "azúcar",
      "el azúcar"
    ],
    "art": "sugar",
    "examples": [
      [
        "Tomo café sin azúcar.",
        "Я пью кофе без сахара."
      ],
      [
        "Añade una cucharada de azúcar.",
        "Добавь ложку сахара."
      ]
    ],
    "cloze": "Tomo café sin ___.",
    "clozeAnswers": [
      "azúcar"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "oil",
    "cat": "grocery",
    "word": "el aceite",
    "base": "aceite",
    "gender": "мужской род",
    "tr": "масло растительное",
    "ru": [
      "масло",
      "растительное масло"
    ],
    "answers": [
      "aceite",
      "el aceite",
      "aceite vegetal",
      "el aceite vegetal"
    ],
    "art": "bottle",
    "examples": [
      [
        "Cocino con aceite de oliva.",
        "Я готовлю с оливковым маслом."
      ],
      [
        "Necesitamos un poco de aceite.",
        "Нам нужно немного масла."
      ]
    ],
    "cloze": "Cocino con ___ de oliva.",
    "clozeAnswers": [
      "aceite"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "vinegar",
    "cat": "grocery",
    "word": "el vinagre",
    "base": "vinagre",
    "gender": "мужской род",
    "tr": "уксус",
    "ru": [
      "уксус"
    ],
    "answers": [
      "vinagre",
      "el vinagre"
    ],
    "art": "bottle",
    "examples": [
      [
        "La ensalada lleva aceite y vinagre.",
        "В салате есть масло и уксус."
      ],
      [
        "No me gusta mucho el vinagre.",
        "Я не очень люблю уксус."
      ]
    ],
    "cloze": "La ensalada lleva aceite y ___.",
    "clozeAnswers": [
      "vinagre"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "butter",
    "cat": "grocery",
    "word": "la mantequilla",
    "base": "mantequilla",
    "gender": "женский род",
    "tr": "сливочное масло",
    "ru": [
      "сливочное масло",
      "масло"
    ],
    "answers": [
      "mantequilla",
      "la mantequilla"
    ],
    "art": "butter",
    "examples": [
      [
        "Como pan con mantequilla.",
        "Я ем хлеб со сливочным маслом."
      ],
      [
        "La mantequilla está en la nevera.",
        "Сливочное масло находится в холодильнике."
      ]
    ],
    "cloze": "Como pan con ___.",
    "clozeAnswers": [
      "mantequilla"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "jam",
    "cat": "grocery",
    "word": "la mermelada",
    "base": "mermelada",
    "gender": "женский род",
    "tr": "варенье, джем",
    "ru": [
      "варенье",
      "джем",
      "варенье джем"
    ],
    "answers": [
      "mermelada",
      "la mermelada"
    ],
    "art": "jar",
    "examples": [
      [
        "Desayuno pan con mermelada.",
        "Я завтракаю хлебом с вареньем."
      ],
      [
        "La mermelada es de fresa.",
        "Это клубничное варенье."
      ]
    ],
    "cloze": "Desayuno pan con ___.",
    "clozeAnswers": [
      "mermelada"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "honey",
    "cat": "grocery",
    "word": "la miel",
    "base": "miel",
    "gender": "женский род",
    "tr": "мёд",
    "ru": [
      "мёд",
      "мед"
    ],
    "answers": [
      "miel",
      "la miel"
    ],
    "art": "honey",
    "examples": [
      [
        "Pongo miel en el té.",
        "Я кладу мёд в чай."
      ],
      [
        "La miel es muy dulce.",
        "Мёд очень сладкий."
      ]
    ],
    "cloze": "Pongo ___ en el té.",
    "clozeAnswers": [
      "miel"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "lentils",
    "cat": "grocery",
    "word": "las lentejas",
    "base": "lentejas",
    "gender": "женский род, множественное число",
    "tr": "чечевица",
    "ru": [
      "чечевица"
    ],
    "answers": [
      "lentejas",
      "las lentejas"
    ],
    "art": "lentils",
    "examples": [
      [
        "Hoy comemos lentejas.",
        "Сегодня мы едим чечевицу."
      ],
      [
        "Las lentejas tienen mucha proteína.",
        "В чечевице много белка."
      ]
    ],
    "cloze": "Hoy comemos ___.",
    "clozeAnswers": [
      "lentejas"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  },
  {
    "id": "beans",
    "cat": "grocery",
    "word": "las judías",
    "base": "judías",
    "gender": "женский род, множественное число",
    "tr": "фасоль",
    "ru": [
      "фасоль"
    ],
    "answers": [
      "judías",
      "las judías",
      "frijoles",
      "los frijoles"
    ],
    "art": "beans",
    "examples": [
      [
        "El guiso lleva judías.",
        "В рагу есть фасоль."
      ],
      [
        "Compramos judías blancas.",
        "Мы покупаем белую фасоль."
      ]
    ],
    "cloze": "El guiso lleva ___.",
    "clozeAnswers": [
      "judías",
      "frijoles"
    ],
    "meta": {
      "categoryTitle": "grocery",
      "categoryOrder": 999,
      "allCategoryTitle": "Все продукты"
    }
  }
];

const EXERCISES = [
  {
    "id": "food_bread_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: хлеб.",
    "a": [
      "pan",
      "el pan"
    ],
    "e": "Базовая форма: el pan."
  },
  {
    "id": "food_bread_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el pan.",
    "a": [
      "хлеб"
    ],
    "e": "el pan — хлеб."
  },
  {
    "id": "food_bread_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я покупаю свежий хлеб.»: Compro ___ fresco.",
    "a": [
      "pan"
    ],
    "e": "Compro pan fresco. — Я покупаю свежий хлеб."
  },
  {
    "id": "food_milk_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: молоко.",
    "a": [
      "leche",
      "la leche"
    ],
    "e": "Базовая форма: la leche."
  },
  {
    "id": "food_milk_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la leche.",
    "a": [
      "молоко"
    ],
    "e": "la leche — молоко."
  },
  {
    "id": "food_milk_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я пью молоко утром.»: Bebo ___ por la mañana.",
    "a": [
      "leche"
    ],
    "e": "Bebo leche por la mañana. — Я пью молоко утром."
  },
  {
    "id": "food_cheese_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сыр.",
    "a": [
      "queso",
      "el queso"
    ],
    "e": "Базовая форма: el queso."
  },
  {
    "id": "food_cheese_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el queso.",
    "a": [
      "сыр"
    ],
    "e": "el queso — сыр."
  },
  {
    "id": "food_cheese_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нравится сыр.»: Me gusta el ___.",
    "a": [
      "queso"
    ],
    "e": "Me gusta el queso. — Мне нравится сыр."
  },
  {
    "id": "food_egg_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: яйцо.",
    "a": [
      "huevo",
      "el huevo"
    ],
    "e": "Базовая форма: el huevo."
  },
  {
    "id": "food_egg_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el huevo.",
    "a": [
      "яйцо"
    ],
    "e": "el huevo — яйцо."
  },
  {
    "id": "food_egg_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ем яйцо на завтрак.»: Como un ___ en el desayuno.",
    "a": [
      "huevo"
    ],
    "e": "Como un huevo en el desayuno. — Я ем яйцо на завтрак."
  },
  {
    "id": "food_rice_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: рис.",
    "a": [
      "arroz",
      "el arroz"
    ],
    "e": "Базовая форма: el arroz."
  },
  {
    "id": "food_rice_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el arroz.",
    "a": [
      "рис"
    ],
    "e": "el arroz — рис."
  },
  {
    "id": "food_rice_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мы готовим рис с овощами.»: Cocinamos ___ con verduras.",
    "a": [
      "arroz"
    ],
    "e": "Cocinamos arroz con verduras. — Мы готовим рис с овощами."
  },
  {
    "id": "food_pasta_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: макароны, паста.",
    "a": [
      "pasta",
      "la pasta"
    ],
    "e": "Базовая форма: la pasta."
  },
  {
    "id": "food_pasta_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la pasta.",
    "a": [
      "макароны",
      "паста",
      "макароны паста",
      "макароны, паста"
    ],
    "e": "la pasta — макароны, паста."
  },
  {
    "id": "food_pasta_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Сегодня мы едим пасту.»: Hoy comemos ___.",
    "a": [
      "pasta"
    ],
    "e": "Hoy comemos pasta. — Сегодня мы едим пасту."
  },
  {
    "id": "food_chicken_es",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: курица, куриное мясо.",
    "a": [
      "pollo",
      "el pollo"
    ],
    "e": "Базовая форма: el pollo."
  },
  {
    "id": "food_chicken_ru",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el pollo.",
    "a": [
      "курица",
      "куриное мясо",
      "курятина",
      "курица, куриное мясо"
    ],
    "e": "el pollo — курица, куриное мясо."
  },
  {
    "id": "food_chicken_ctx",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ем курицу с картофелем.»: Como ___ con patatas.",
    "a": [
      "pollo"
    ],
    "e": "Como pollo con patatas. — Я ем курицу с картофелем."
  },
  {
    "id": "food_fish_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: рыба как продукт.",
    "a": [
      "pescado",
      "el pescado"
    ],
    "e": "Базовая форма: el pescado."
  },
  {
    "id": "food_fish_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el pescado.",
    "a": [
      "рыба",
      "рыба как продукт"
    ],
    "e": "el pescado — рыба как продукт."
  },
  {
    "id": "food_fish_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я предпочитаю рыбу.»: Prefiero el ___.",
    "a": [
      "pescado"
    ],
    "e": "Prefiero el pescado. — Я предпочитаю рыбу."
  },
  {
    "id": "food_meat_es",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мясо.",
    "a": [
      "carne",
      "la carne"
    ],
    "e": "Базовая форма: la carne."
  },
  {
    "id": "food_meat_ru",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la carne.",
    "a": [
      "мясо"
    ],
    "e": "la carne — мясо."
  },
  {
    "id": "food_meat_ctx",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я не ем много мяса.»: No como mucha ___.",
    "a": [
      "carne"
    ],
    "e": "No como mucha carne. — Я не ем много мяса."
  },
  {
    "id": "food_potato_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: картофель, картофелина.",
    "a": [
      "patata",
      "la patata",
      "papa",
      "la papa"
    ],
    "e": "Базовая форма: la patata."
  },
  {
    "id": "food_potato_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la patata.",
    "a": [
      "картофель",
      "картошка",
      "картофелина",
      "картофель, картофелина"
    ],
    "e": "la patata — картофель, картофелина."
  },
  {
    "id": "food_potato_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я чищу картофелину.»: Pelo una ___.",
    "a": [
      "patata",
      "papa"
    ],
    "e": "Pelo una patata. — Я чищу картофелину."
  },
  {
    "id": "food_tomato_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: помидор.",
    "a": [
      "tomate",
      "el tomate"
    ],
    "e": "Базовая форма: el tomate."
  },
  {
    "id": "food_tomato_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el tomate.",
    "a": [
      "помидор",
      "томат"
    ],
    "e": "el tomate — помидор."
  },
  {
    "id": "food_tomato_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я режу помидор.»: Corto un ___.",
    "a": [
      "tomate"
    ],
    "e": "Corto un tomate. — Я режу помидор."
  },
  {
    "id": "food_apple_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: яблоко.",
    "a": [
      "manzana",
      "la manzana"
    ],
    "e": "Базовая форма: la manzana."
  },
  {
    "id": "food_apple_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la manzana.",
    "a": [
      "яблоко"
    ],
    "e": "la manzana — яблоко."
  },
  {
    "id": "food_apple_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ем яблоко.»: Como una ___.",
    "a": [
      "manzana"
    ],
    "e": "Como una manzana. — Я ем яблоко."
  },
  {
    "id": "food_banana_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: банан.",
    "a": [
      "plátano",
      "el plátano",
      "banana",
      "la banana"
    ],
    "e": "Базовая форма: el plátano."
  },
  {
    "id": "food_banana_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el plátano.",
    "a": [
      "банан"
    ],
    "e": "el plátano — банан."
  },
  {
    "id": "food_banana_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я покупаю бананы.»: El ___ está maduro.",
    "a": [
      "plátano"
    ],
    "e": "Compro plátanos. — Я покупаю бананы."
  },
  {
    "id": "food_orange_es",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: апельсин.",
    "a": [
      "naranja",
      "la naranja"
    ],
    "e": "Базовая форма: la naranja."
  },
  {
    "id": "food_orange_ru",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la naranja.",
    "a": [
      "апельсин"
    ],
    "e": "la naranja — апельсин."
  },
  {
    "id": "food_orange_ctx",
    "topic": "foods",
    "foodCat": "base",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу апельсиновый сок.»: La ___ es dulce.",
    "a": [
      "naranja"
    ],
    "e": "Quiero zumo de naranja. — Я хочу апельсиновый сок."
  },
  {
    "id": "food_water_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: вода.",
    "a": [
      "agua",
      "el agua"
    ],
    "e": "Базовая форма: el agua."
  },
  {
    "id": "food_water_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el agua.",
    "a": [
      "вода"
    ],
    "e": "el agua — вода."
  },
  {
    "id": "food_water_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я пью воду каждый день.»: Bebo ___ todos los días.",
    "a": [
      "agua"
    ],
    "e": "Bebo agua todos los días. — Я пью воду каждый день."
  },
  {
    "id": "food_coffee_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кофе.",
    "a": [
      "café",
      "el café"
    ],
    "e": "Базовая форма: el café."
  },
  {
    "id": "food_coffee_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el café.",
    "a": [
      "кофе"
    ],
    "e": "el café — кофе."
  },
  {
    "id": "food_coffee_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я пью кофе без сахара.»: Tomo ___ sin azúcar.",
    "a": [
      "café"
    ],
    "e": "Tomo café sin azúcar. — Я пью кофе без сахара."
  },
  {
    "id": "food_tea_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: чай.",
    "a": [
      "té",
      "el té"
    ],
    "e": "Базовая форма: el té."
  },
  {
    "id": "food_tea_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el té.",
    "a": [
      "чай"
    ],
    "e": "el té — чай."
  },
  {
    "id": "food_tea_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я пью чай после обеда.»: Bebo ___ por la tarde.",
    "a": [
      "té"
    ],
    "e": "Bebo té por la tarde. — Я пью чай после обеда."
  },
  {
    "id": "food_salt_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: соль.",
    "a": [
      "sal",
      "la sal"
    ],
    "e": "Базовая форма: la sal."
  },
  {
    "id": "food_salt_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la sal.",
    "a": [
      "соль"
    ],
    "e": "la sal — соль."
  },
  {
    "id": "food_salt_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Добавь немного соли.»: Añade un poco de ___.",
    "a": [
      "sal"
    ],
    "e": "Añade un poco de sal. — Добавь немного соли."
  },
  {
    "id": "food_beef_es",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: говядина, телятина.",
    "a": [
      "ternera",
      "la ternera",
      "carne de ternera",
      "la carne de ternera"
    ],
    "e": "Базовая форма: la ternera."
  },
  {
    "id": "food_beef_ru",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la ternera.",
    "a": [
      "говядина",
      "телятина",
      "говядина телятина",
      "говядина, телятина"
    ],
    "e": "la ternera — говядина, телятина."
  },
  {
    "id": "food_beef_ctx",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я покупаю говядину на ужин.»: Compro ___ para la cena.",
    "a": [
      "ternera",
      "carne de ternera"
    ],
    "e": "Compro ternera para la cena. — Я покупаю говядину на ужин."
  },
  {
    "id": "food_pork_es",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: свинина.",
    "a": [
      "carne de cerdo",
      "la carne de cerdo",
      "cerdo",
      "el cerdo"
    ],
    "e": "Базовая форма: la carne de cerdo."
  },
  {
    "id": "food_pork_ru",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la carne de cerdo.",
    "a": [
      "свинина"
    ],
    "e": "la carne de cerdo — свинина."
  },
  {
    "id": "food_pork_ctx",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я не ем свинину.»: No como carne de ___.",
    "a": [
      "cerdo"
    ],
    "e": "No como carne de cerdo. — Я не ем свинину."
  },
  {
    "id": "food_turkey_es",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: индейка.",
    "a": [
      "pavo",
      "el pavo"
    ],
    "e": "Базовая форма: el pavo."
  },
  {
    "id": "food_turkey_ru",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el pavo.",
    "a": [
      "индейка",
      "индюшка"
    ],
    "e": "el pavo — индейка."
  },
  {
    "id": "food_turkey_ctx",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Сегодня мы готовим индейку.»: Hoy cocinamos ___.",
    "a": [
      "pavo"
    ],
    "e": "Hoy cocinamos pavo. — Сегодня мы готовим индейку."
  },
  {
    "id": "food_ham_es",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: ветчина, хамон.",
    "a": [
      "jamón",
      "el jamón"
    ],
    "e": "Базовая форма: el jamón."
  },
  {
    "id": "food_ham_ru",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el jamón.",
    "a": [
      "ветчина",
      "хамон",
      "ветчина хамон",
      "ветчина, хамон"
    ],
    "e": "el jamón — ветчина, хамон."
  },
  {
    "id": "food_ham_ctx",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу бутерброд с ветчиной.»: Quiero un bocadillo de ___.",
    "a": [
      "jamón"
    ],
    "e": "Quiero un bocadillo de jamón. — Я хочу бутерброд с ветчиной."
  },
  {
    "id": "food_sausage_es",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сосиска, колбаска.",
    "a": [
      "salchicha",
      "la salchicha"
    ],
    "e": "Базовая форма: la salchicha."
  },
  {
    "id": "food_sausage_ru",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la salchicha.",
    "a": [
      "сосиска",
      "колбаска",
      "сосиска колбаска",
      "сосиска, колбаска"
    ],
    "e": "la salchicha — сосиска, колбаска."
  },
  {
    "id": "food_sausage_ctx",
    "topic": "foods",
    "foodCat": "meat",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ем сосиску с хлебом.»: Como una ___ con pan.",
    "a": [
      "salchicha"
    ],
    "e": "Como una salchicha con pan. — Я ем сосиску с хлебом."
  },
  {
    "id": "food_salmon_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: лосось.",
    "a": [
      "salmón",
      "el salmón"
    ],
    "e": "Базовая форма: el salmón."
  },
  {
    "id": "food_salmon_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el salmón.",
    "a": [
      "лосось"
    ],
    "e": "el salmón — лосось."
  },
  {
    "id": "food_salmon_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Лосось находится в духовке.»: Me gusta el ___ con arroz.",
    "a": [
      "salmón"
    ],
    "e": "El salmón está en el horno. — Лосось находится в духовке."
  },
  {
    "id": "food_tuna_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: тунец.",
    "a": [
      "atún",
      "el atún"
    ],
    "e": "Базовая форма: el atún."
  },
  {
    "id": "food_tuna_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el atún.",
    "a": [
      "тунец"
    ],
    "e": "el atún — тунец."
  },
  {
    "id": "food_tuna_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «В салате есть тунец.»: Compro una lata de ___.",
    "a": [
      "atún"
    ],
    "e": "La ensalada lleva atún. — В салате есть тунец."
  },
  {
    "id": "food_shrimp_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: креветка.",
    "a": [
      "gamba",
      "la gamba",
      "gambas",
      "las gambas",
      "camarón",
      "el camarón",
      "camaron",
      "el camaron",
      "camarones",
      "los camarones"
    ],
    "e": "Базовая форма: la gamba / el camarón."
  },
  {
    "id": "food_shrimp_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la gamba / el camarón.",
    "a": [
      "креветка",
      "креветки"
    ],
    "e": "la gamba / el camarón — креветка."
  },
  {
    "id": "food_shrimp_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «В Испании употребляется «gamba».»: Compramos ___ para la cena.",
    "a": [
      "gamba",
      "gambas",
      "camarón",
      "camaron",
      "camarones"
    ],
    "e": "En España se usa «gamba». — В Испании употребляется «gamba»."
  },
  {
    "id": "food_mejillones_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мидии.",
    "a": [
      "mejillones",
      "los mejillones"
    ],
    "e": "Базовая форма: los mejillones."
  },
  {
    "id": "food_mejillones_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los mejillones.",
    "a": [
      "мидии"
    ],
    "e": "los mejillones — мидии."
  },
  {
    "id": "food_mejillones_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мидии готовы.»: Nunca como ___.",
    "a": [
      "mejillones"
    ],
    "e": "Los mejillones están listos. — Мидии готовы."
  },
  {
    "id": "food_squid_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кальмар.",
    "a": [
      "calamar",
      "el calamar"
    ],
    "e": "Базовая форма: el calamar."
  },
  {
    "id": "food_squid_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el calamar.",
    "a": [
      "кальмар"
    ],
    "e": "el calamar — кальмар."
  },
  {
    "id": "food_squid_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Кальмар очень нежный.»: Quiero ___ a la plancha.",
    "a": [
      "calamar"
    ],
    "e": "El calamar está muy tierno. — Кальмар очень нежный."
  },
  {
    "id": "food_octopus_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: осьминог.",
    "a": [
      "pulpo",
      "el pulpo"
    ],
    "e": "Базовая форма: el pulpo."
  },
  {
    "id": "food_octopus_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el pulpo.",
    "a": [
      "осьминог"
    ],
    "e": "el pulpo — осьминог."
  },
  {
    "id": "food_octopus_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мы пробуем осьминога в Галисии.»: El ___ está delicioso.",
    "a": [
      "pulpo"
    ],
    "e": "Probamos pulpo en Galicia. — Мы пробуем осьминога в Галисии."
  },
  {
    "id": "food_seafood_es",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: морепродукты.",
    "a": [
      "marisco",
      "el marisco",
      "mariscos",
      "los mariscos"
    ],
    "e": "Базовая форма: el marisco."
  },
  {
    "id": "food_seafood_ru",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el marisco.",
    "a": [
      "морепродукты",
      "морепродукт"
    ],
    "e": "el marisco — морепродукты."
  },
  {
    "id": "food_seafood_ctx",
    "topic": "foods",
    "foodCat": "seafood",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я очень люблю морепродукты.»: La paella lleva ___.",
    "a": [
      "marisco",
      "mariscos"
    ],
    "e": "Me gusta mucho el marisco. — Я очень люблю морепродукты."
  },
  {
    "id": "food_cookie_es",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: печенье.",
    "a": [
      "galleta",
      "la galleta"
    ],
    "e": "Базовая форма: la galleta."
  },
  {
    "id": "food_cookie_ru",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la galleta.",
    "a": [
      "печенье",
      "печенька"
    ],
    "e": "la galleta — печенье."
  },
  {
    "id": "food_cookie_ctx",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ем печенье с кофе.»: Como una ___ con café.",
    "a": [
      "galleta"
    ],
    "e": "Como una galleta con café. — Я ем печенье с кофе."
  },
  {
    "id": "food_cake_es",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: торт, пирог.",
    "a": [
      "tarta",
      "la tarta",
      "pastel",
      "el pastel"
    ],
    "e": "Базовая форма: la tarta."
  },
  {
    "id": "food_cake_ru",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la tarta.",
    "a": [
      "торт",
      "пирог",
      "торт пирог",
      "торт, пирог"
    ],
    "e": "la tarta — торт, пирог."
  },
  {
    "id": "food_cake_ctx",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Торт шоколадный.»: La ___ es de chocolate.",
    "a": [
      "tarta",
      "pastel"
    ],
    "e": "La tarta es de chocolate. — Торт шоколадный."
  },
  {
    "id": "food_icecream_es",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мороженое.",
    "a": [
      "helado",
      "el helado"
    ],
    "e": "Базовая форма: el helado."
  },
  {
    "id": "food_icecream_ru",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el helado.",
    "a": [
      "мороженое"
    ],
    "e": "el helado — мороженое."
  },
  {
    "id": "food_icecream_ctx",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу ванильное мороженое.»: Quiero un ___ de vainilla.",
    "a": [
      "helado"
    ],
    "e": "Quiero un helado de vainilla. — Я хочу ванильное мороженое."
  },
  {
    "id": "food_chocolate_es",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: шоколад.",
    "a": [
      "chocolate",
      "el chocolate"
    ],
    "e": "Базовая форма: el chocolate."
  },
  {
    "id": "food_chocolate_ru",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el chocolate.",
    "a": [
      "шоколад"
    ],
    "e": "el chocolate — шоколад."
  },
  {
    "id": "food_chocolate_ctx",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я обожаю тёмный шоколад.»: Me encanta el ___ negro.",
    "a": [
      "chocolate"
    ],
    "e": "Me encanta el chocolate negro. — Я обожаю тёмный шоколад."
  },
  {
    "id": "food_candy_es",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: конфета, карамель.",
    "a": [
      "caramelo",
      "el caramelo"
    ],
    "e": "Базовая форма: el caramelo."
  },
  {
    "id": "food_candy_ru",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el caramelo.",
    "a": [
      "конфета",
      "карамель",
      "конфета карамель",
      "конфета, карамель"
    ],
    "e": "el caramelo — конфета, карамель."
  },
  {
    "id": "food_candy_ctx",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Ребёнок ест конфету.»: El niño come un ___.",
    "a": [
      "caramelo"
    ],
    "e": "El niño come un caramelo. — Ребёнок ест конфету."
  },
  {
    "id": "food_muffin_es",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кекс.",
    "a": [
      "magdalena",
      "la magdalena",
      "muffin",
      "el muffin"
    ],
    "e": "Базовая форма: la magdalena."
  },
  {
    "id": "food_muffin_ru",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la magdalena.",
    "a": [
      "кекс",
      "маффин"
    ],
    "e": "la magdalena — кекс."
  },
  {
    "id": "food_muffin_ctx",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я завтракаю кексом.»: Desayuno una ___.",
    "a": [
      "magdalena"
    ],
    "e": "Desayuno una magdalena. — Я завтракаю кексом."
  },
  {
    "id": "food_flan_es",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: флан, карамельный пудинг.",
    "a": [
      "flan",
      "el flan"
    ],
    "e": "Базовая форма: el flan."
  },
  {
    "id": "food_flan_ru",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el flan.",
    "a": [
      "флан",
      "карамельный пудинг",
      "пудинг",
      "флан, карамельный пудинг"
    ],
    "e": "el flan — флан, карамельный пудинг."
  },
  {
    "id": "food_flan_ctx",
    "topic": "foods",
    "foodCat": "desserts",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На десерт я хочу флан.»: De postre quiero ___.",
    "a": [
      "flan"
    ],
    "e": "De postre quiero flan. — На десерт я хочу флан."
  },
  {
    "id": "food_juice_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сок.",
    "a": [
      "zumo",
      "el zumo",
      "jugo",
      "el jugo"
    ],
    "e": "Базовая форма: el zumo."
  },
  {
    "id": "food_juice_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el zumo.",
    "a": [
      "сок"
    ],
    "e": "el zumo — сок."
  },
  {
    "id": "food_juice_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я пью апельсиновый сок.»: Bebo ___ de naranja.",
    "a": [
      "zumo",
      "jugo"
    ],
    "e": "Bebo zumo de naranja. — Я пью апельсиновый сок."
  },
  {
    "id": "food_lemonade_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: лимонад.",
    "a": [
      "limonada",
      "la limonada"
    ],
    "e": "Базовая форма: la limonada."
  },
  {
    "id": "food_lemonade_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la limonada.",
    "a": [
      "лимонад"
    ],
    "e": "la limonada — лимонад."
  },
  {
    "id": "food_lemonade_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Лимонад очень холодный.»: Preparo ___ con hielo.",
    "a": [
      "limonada"
    ],
    "e": "La limonada está muy fría. — Лимонад очень холодный."
  },
  {
    "id": "food_soda_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: газированный напиток.",
    "a": [
      "refresco",
      "el refresco"
    ],
    "e": "Базовая форма: el refresco."
  },
  {
    "id": "food_soda_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el refresco.",
    "a": [
      "газировка",
      "газированный напиток",
      "прохладительный напиток"
    ],
    "e": "el refresco — газированный напиток."
  },
  {
    "id": "food_soda_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я не пью много газировки.»: Quiero un ___ sin azúcar.",
    "a": [
      "refresco"
    ],
    "e": "No bebo muchos refrescos. — Я не пью много газировки."
  },
  {
    "id": "food_wine_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: вино.",
    "a": [
      "vino",
      "el vino"
    ],
    "e": "Базовая форма: el vino."
  },
  {
    "id": "food_wine_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el vino.",
    "a": [
      "вино"
    ],
    "e": "el vino — вино."
  },
  {
    "id": "food_wine_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я предпочитаю белое вино.»: Prefiero el ___ blanco.",
    "a": [
      "vino"
    ],
    "e": "Prefiero el vino blanco. — Я предпочитаю белое вино."
  },
  {
    "id": "food_beer_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: пиво.",
    "a": [
      "cerveza",
      "la cerveza"
    ],
    "e": "Базовая форма: la cerveza."
  },
  {
    "id": "food_beer_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la cerveza.",
    "a": [
      "пиво"
    ],
    "e": "la cerveza — пиво."
  },
  {
    "id": "food_beer_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу безалкогольное пиво.»: Quiero una ___ sin alcohol.",
    "a": [
      "cerveza"
    ],
    "e": "Quiero una cerveza sin alcohol. — Я хочу безалкогольное пиво."
  },
  {
    "id": "food_hotchocolate_es",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: горячий шоколад.",
    "a": [
      "chocolate caliente",
      "el chocolate caliente"
    ],
    "e": "Базовая форма: el chocolate caliente."
  },
  {
    "id": "food_hotchocolate_ru",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el chocolate caliente.",
    "a": [
      "горячий шоколад"
    ],
    "e": "el chocolate caliente — горячий шоколад."
  },
  {
    "id": "food_hotchocolate_ctx",
    "topic": "foods",
    "foodCat": "drinks",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Зимой я пью горячий шоколад.»: En invierno bebo chocolate ___.",
    "a": [
      "caliente"
    ],
    "e": "En invierno bebo chocolate caliente. — Зимой я пью горячий шоколад."
  },
  {
    "id": "food_soup_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: суп.",
    "a": [
      "sopa",
      "la sopa"
    ],
    "e": "Базовая форма: la sopa."
  },
  {
    "id": "food_soup_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la sopa.",
    "a": [
      "суп"
    ],
    "e": "la sopa — суп."
  },
  {
    "id": "food_soup_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Суп горячий.»: Hoy preparo ___ de verduras.",
    "a": [
      "sopa"
    ],
    "e": "La sopa está caliente. — Суп горячий."
  },
  {
    "id": "food_salad_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: салат.",
    "a": [
      "ensalada",
      "la ensalada"
    ],
    "e": "Базовая форма: la ensalada."
  },
  {
    "id": "food_salad_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la ensalada.",
    "a": [
      "салат"
    ],
    "e": "la ensalada — салат."
  },
  {
    "id": "food_salad_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу маленький салат.»: Quiero una ___ pequeña.",
    "a": [
      "ensalada"
    ],
    "e": "Quiero una ensalada pequeña. — Я хочу маленький салат."
  },
  {
    "id": "food_omelette_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: омлет, тортилья.",
    "a": [
      "tortilla",
      "la tortilla"
    ],
    "e": "Базовая форма: la tortilla."
  },
  {
    "id": "food_omelette_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la tortilla.",
    "a": [
      "омлет",
      "тортилья",
      "омлет тортилья",
      "омлет, тортилья"
    ],
    "e": "la tortilla — омлет, тортилья."
  },
  {
    "id": "food_omelette_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «В тортилье есть яйца и картофель.»: Comemos ___ para cenar.",
    "a": [
      "tortilla"
    ],
    "e": "La tortilla lleva huevos y patatas. — В тортилье есть яйца и картофель."
  },
  {
    "id": "food_sandwich_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: бутерброд, сэндвич.",
    "a": [
      "bocadillo",
      "el bocadillo",
      "sándwich",
      "el sándwich"
    ],
    "e": "Базовая форма: el bocadillo."
  },
  {
    "id": "food_sandwich_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el bocadillo.",
    "a": [
      "бутерброд",
      "сэндвич",
      "бутерброд сэндвич",
      "бутерброд, сэндвич"
    ],
    "e": "el bocadillo — бутерброд, сэндвич."
  },
  {
    "id": "food_sandwich_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу бутерброд с сыром.»: Quiero un ___ de queso.",
    "a": [
      "bocadillo",
      "sándwich"
    ],
    "e": "Quiero un bocadillo de queso. — Я хочу бутерброд с сыром."
  },
  {
    "id": "food_pizza_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: пицца.",
    "a": [
      "pizza",
      "la pizza"
    ],
    "e": "Базовая форма: la pizza."
  },
  {
    "id": "food_pizza_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la pizza.",
    "a": [
      "пицца"
    ],
    "e": "la pizza — пицца."
  },
  {
    "id": "food_pizza_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мы заказываем большую пиццу.»: Pedimos una ___ grande.",
    "a": [
      "pizza"
    ],
    "e": "Pedimos una pizza grande. — Мы заказываем большую пиццу."
  },
  {
    "id": "food_paella_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: паэлья.",
    "a": [
      "paella",
      "la paella"
    ],
    "e": "Базовая форма: la paella."
  },
  {
    "id": "food_paella_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la paella.",
    "a": [
      "паэлья"
    ],
    "e": "la paella — паэлья."
  },
  {
    "id": "food_paella_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «В паэлье есть рис и морепродукты.»: Hoy comemos ___.",
    "a": [
      "paella"
    ],
    "e": "La paella lleva arroz y marisco. — В паэлье есть рис и морепродукты."
  },
  {
    "id": "food_stew_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: рагу, тушёное блюдо.",
    "a": [
      "guiso",
      "el guiso"
    ],
    "e": "Базовая форма: el guiso."
  },
  {
    "id": "food_stew_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el guiso.",
    "a": [
      "рагу",
      "тушёное блюдо",
      "тушеное блюдо",
      "рагу, тушёное блюдо"
    ],
    "e": "el guiso — рагу, тушёное блюдо."
  },
  {
    "id": "food_stew_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «В рагу есть мясо и картофель.»: El ___ lleva carne y patatas.",
    "a": [
      "guiso"
    ],
    "e": "El guiso lleva carne y patatas. — В рагу есть мясо и картофель."
  },
  {
    "id": "food_puree_es",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: пюре.",
    "a": [
      "puré",
      "el puré"
    ],
    "e": "Базовая форма: el puré."
  },
  {
    "id": "food_puree_ru",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el puré.",
    "a": [
      "пюре"
    ],
    "e": "el puré — пюре."
  },
  {
    "id": "food_puree_ctx",
    "topic": "foods",
    "foodCat": "dishes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу картофельное пюре.»: Quiero ___ de patatas.",
    "a": [
      "puré"
    ],
    "e": "Quiero puré de patatas. — Я хочу картофельное пюре."
  },
  {
    "id": "food_flour_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мука.",
    "a": [
      "harina",
      "la harina"
    ],
    "e": "Базовая форма: la harina."
  },
  {
    "id": "food_flour_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la harina.",
    "a": [
      "мука"
    ],
    "e": "la harina — мука."
  },
  {
    "id": "food_flour_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нужна мука для торта.»: Necesito ___ para la tarta.",
    "a": [
      "harina"
    ],
    "e": "Necesito harina para la tarta. — Мне нужна мука для торта."
  },
  {
    "id": "food_sugar_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сахар.",
    "a": [
      "azúcar",
      "el azúcar"
    ],
    "e": "Базовая форма: el azúcar."
  },
  {
    "id": "food_sugar_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el azúcar.",
    "a": [
      "сахар"
    ],
    "e": "el azúcar — сахар."
  },
  {
    "id": "food_sugar_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я пью кофе без сахара.»: Tomo café sin ___.",
    "a": [
      "azúcar"
    ],
    "e": "Tomo café sin azúcar. — Я пью кофе без сахара."
  },
  {
    "id": "food_oil_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: масло растительное.",
    "a": [
      "aceite",
      "el aceite",
      "aceite vegetal",
      "el aceite vegetal"
    ],
    "e": "Базовая форма: el aceite."
  },
  {
    "id": "food_oil_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el aceite.",
    "a": [
      "масло",
      "растительное масло",
      "масло растительное"
    ],
    "e": "el aceite — масло растительное."
  },
  {
    "id": "food_oil_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я готовлю с оливковым маслом.»: Cocino con ___ de oliva.",
    "a": [
      "aceite"
    ],
    "e": "Cocino con aceite de oliva. — Я готовлю с оливковым маслом."
  },
  {
    "id": "food_vinegar_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: уксус.",
    "a": [
      "vinagre",
      "el vinagre"
    ],
    "e": "Базовая форма: el vinagre."
  },
  {
    "id": "food_vinegar_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el vinagre.",
    "a": [
      "уксус"
    ],
    "e": "el vinagre — уксус."
  },
  {
    "id": "food_vinegar_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «В салате есть масло и уксус.»: La ensalada lleva aceite y ___.",
    "a": [
      "vinagre"
    ],
    "e": "La ensalada lleva aceite y vinagre. — В салате есть масло и уксус."
  },
  {
    "id": "food_butter_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сливочное масло.",
    "a": [
      "mantequilla",
      "la mantequilla"
    ],
    "e": "Базовая форма: la mantequilla."
  },
  {
    "id": "food_butter_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la mantequilla.",
    "a": [
      "сливочное масло",
      "масло"
    ],
    "e": "la mantequilla — сливочное масло."
  },
  {
    "id": "food_butter_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ем хлеб со сливочным маслом.»: Como pan con ___.",
    "a": [
      "mantequilla"
    ],
    "e": "Como pan con mantequilla. — Я ем хлеб со сливочным маслом."
  },
  {
    "id": "food_jam_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: варенье, джем.",
    "a": [
      "mermelada",
      "la mermelada"
    ],
    "e": "Базовая форма: la mermelada."
  },
  {
    "id": "food_jam_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la mermelada.",
    "a": [
      "варенье",
      "джем",
      "варенье джем",
      "варенье, джем"
    ],
    "e": "la mermelada — варенье, джем."
  },
  {
    "id": "food_jam_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я завтракаю хлебом с вареньем.»: Desayuno pan con ___.",
    "a": [
      "mermelada"
    ],
    "e": "Desayuno pan con mermelada. — Я завтракаю хлебом с вареньем."
  },
  {
    "id": "food_honey_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мёд.",
    "a": [
      "miel",
      "la miel"
    ],
    "e": "Базовая форма: la miel."
  },
  {
    "id": "food_honey_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la miel.",
    "a": [
      "мёд",
      "мед"
    ],
    "e": "la miel — мёд."
  },
  {
    "id": "food_honey_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я кладу мёд в чай.»: Pongo ___ en el té.",
    "a": [
      "miel"
    ],
    "e": "Pongo miel en el té. — Я кладу мёд в чай."
  },
  {
    "id": "food_lentils_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: чечевица.",
    "a": [
      "lentejas",
      "las lentejas"
    ],
    "e": "Базовая форма: las lentejas."
  },
  {
    "id": "food_lentils_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las lentejas.",
    "a": [
      "чечевица"
    ],
    "e": "las lentejas — чечевица."
  },
  {
    "id": "food_lentils_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Сегодня мы едим чечевицу.»: Hoy comemos ___.",
    "a": [
      "lentejas"
    ],
    "e": "Hoy comemos lentejas. — Сегодня мы едим чечевицу."
  },
  {
    "id": "food_beans_es",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: фасоль.",
    "a": [
      "judías",
      "las judías",
      "frijoles",
      "los frijoles"
    ],
    "e": "Базовая форма: las judías."
  },
  {
    "id": "food_beans_ru",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las judías.",
    "a": [
      "фасоль"
    ],
    "e": "las judías — фасоль."
  },
  {
    "id": "food_beans_ctx",
    "topic": "foods",
    "foodCat": "grocery",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «В рагу есть фасоль.»: El guiso lleva ___.",
    "a": [
      "judías",
      "frijoles"
    ],
    "e": "El guiso lleva judías. — В рагу есть фасоль."
  },
  {
    "id": "choice_foods_bread",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: хлеб.",
    "a": [
      "el pan"
    ],
    "options": [
      "el pan",
      "el arroz",
      "la pasta",
      "la sal"
    ],
    "e": "el pan — хлеб."
  },
  {
    "id": "choice_foods_milk",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: молоко.",
    "a": [
      "la leche"
    ],
    "options": [
      "la leche",
      "el huevo",
      "la patata",
      "el tomate"
    ],
    "e": "la leche — молоко."
  },
  {
    "id": "choice_foods_cheese",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сыр.",
    "a": [
      "el queso"
    ],
    "options": [
      "el queso",
      "la patata",
      "el tomate",
      "la manzana"
    ],
    "e": "el queso — сыр."
  },
  {
    "id": "choice_foods_egg",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: яйцо.",
    "a": [
      "el huevo"
    ],
    "options": [
      "el huevo",
      "el tomate",
      "la manzana",
      "el plátano"
    ],
    "e": "el huevo — яйцо."
  },
  {
    "id": "choice_foods_rice",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рис.",
    "a": [
      "el arroz"
    ],
    "options": [
      "el arroz",
      "el azúcar",
      "el aceite",
      "el vinagre"
    ],
    "e": "el arroz — рис."
  },
  {
    "id": "choice_foods_pasta",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: макароны, паста.",
    "a": [
      "la pasta"
    ],
    "options": [
      "la pasta",
      "el aceite",
      "el vinagre",
      "la mantequilla"
    ],
    "e": "la pasta — макароны, паста."
  },
  {
    "id": "choice_foods_chicken",
    "topic": "foods",
    "foodCat": "meat",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: курица, куриное мясо.",
    "a": [
      "el pollo"
    ],
    "options": [
      "el pollo",
      "la carne",
      "la ternera",
      "la carne de cerdo"
    ],
    "e": "el pollo — курица, куриное мясо."
  },
  {
    "id": "choice_foods_fish",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рыба как продукт.",
    "a": [
      "el pescado"
    ],
    "options": [
      "el pescado",
      "el salmón",
      "el atún",
      "la gamba / el camarón"
    ],
    "e": "el pescado — рыба как продукт."
  },
  {
    "id": "choice_foods_meat",
    "topic": "foods",
    "foodCat": "meat",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мясо.",
    "a": [
      "la carne"
    ],
    "options": [
      "la carne",
      "la carne de cerdo",
      "el pavo",
      "el jamón"
    ],
    "e": "la carne — мясо."
  },
  {
    "id": "choice_foods_potato",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: картофель, картофелина.",
    "a": [
      "la patata"
    ],
    "options": [
      "la patata",
      "el huevo",
      "el tomate",
      "la manzana"
    ],
    "e": "la patata — картофель, картофелина."
  },
  {
    "id": "choice_foods_tomato",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: помидор.",
    "a": [
      "el tomate"
    ],
    "options": [
      "el tomate",
      "la patata",
      "la manzana",
      "el plátano"
    ],
    "e": "el tomate — помидор."
  },
  {
    "id": "choice_foods_apple",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: яблоко.",
    "a": [
      "la manzana"
    ],
    "options": [
      "la manzana",
      "el tomate",
      "el plátano",
      "la naranja"
    ],
    "e": "la manzana — яблоко."
  },
  {
    "id": "choice_foods_banana",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: банан.",
    "a": [
      "el plátano"
    ],
    "options": [
      "el plátano",
      "la manzana",
      "la naranja",
      "la leche"
    ],
    "e": "el plátano — банан."
  },
  {
    "id": "choice_foods_orange",
    "topic": "foods",
    "foodCat": "base",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: апельсин.",
    "a": [
      "la naranja"
    ],
    "options": [
      "la naranja",
      "el plátano",
      "la leche",
      "el queso"
    ],
    "e": "la naranja — апельсин."
  },
  {
    "id": "choice_foods_water",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вода.",
    "a": [
      "el agua"
    ],
    "options": [
      "el agua",
      "la cerveza",
      "el chocolate caliente",
      "el café"
    ],
    "e": "el agua — вода."
  },
  {
    "id": "choice_foods_coffee",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кофе.",
    "a": [
      "el café"
    ],
    "options": [
      "el café",
      "el chocolate caliente",
      "el agua",
      "el té"
    ],
    "e": "el café — кофе."
  },
  {
    "id": "choice_foods_tea",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чай.",
    "a": [
      "el té"
    ],
    "options": [
      "el té",
      "el agua",
      "el café",
      "el zumo"
    ],
    "e": "el té — чай."
  },
  {
    "id": "choice_foods_salt",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: соль.",
    "a": [
      "la sal"
    ],
    "options": [
      "la sal",
      "el aceite",
      "el vinagre",
      "la mantequilla"
    ],
    "e": "la sal — соль."
  },
  {
    "id": "choice_foods_beef",
    "topic": "foods",
    "foodCat": "meat",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: говядина, телятина.",
    "a": [
      "la ternera"
    ],
    "options": [
      "la ternera",
      "el pollo",
      "la carne",
      "la carne de cerdo"
    ],
    "e": "la ternera — говядина, телятина."
  },
  {
    "id": "choice_foods_pork",
    "topic": "foods",
    "foodCat": "meat",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: свинина.",
    "a": [
      "la carne de cerdo"
    ],
    "options": [
      "la carne de cerdo",
      "la carne",
      "la ternera",
      "el pavo"
    ],
    "e": "la carne de cerdo — свинина."
  },
  {
    "id": "choice_foods_turkey",
    "topic": "foods",
    "foodCat": "meat",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: индейка.",
    "a": [
      "el pavo"
    ],
    "options": [
      "el pavo",
      "la ternera",
      "la carne de cerdo",
      "el jamón"
    ],
    "e": "el pavo — индейка."
  },
  {
    "id": "choice_foods_ham",
    "topic": "foods",
    "foodCat": "meat",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ветчина, хамон.",
    "a": [
      "el jamón"
    ],
    "options": [
      "el jamón",
      "la carne de cerdo",
      "el pavo",
      "la salchicha"
    ],
    "e": "el jamón — ветчина, хамон."
  },
  {
    "id": "choice_foods_sausage",
    "topic": "foods",
    "foodCat": "meat",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сосиска, колбаска.",
    "a": [
      "la salchicha"
    ],
    "options": [
      "la salchicha",
      "el pavo",
      "el jamón",
      "el pollo"
    ],
    "e": "la salchicha — сосиска, колбаска."
  },
  {
    "id": "choice_foods_salmon",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: лосось.",
    "a": [
      "el salmón"
    ],
    "options": [
      "el salmón",
      "la gamba / el camarón",
      "los mejillones",
      "el calamar"
    ],
    "e": "el salmón — лосось."
  },
  {
    "id": "choice_foods_tuna",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тунец.",
    "a": [
      "el atún"
    ],
    "options": [
      "el atún",
      "los mejillones",
      "el calamar",
      "el pulpo"
    ],
    "e": "el atún — тунец."
  },
  {
    "id": "choice_foods_shrimp",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: креветка.",
    "a": [
      "la gamba / el camarón"
    ],
    "options": [
      "la gamba / el camarón",
      "el calamar",
      "el pulpo",
      "el marisco"
    ],
    "e": "la gamba / el camarón — креветка."
  },
  {
    "id": "choice_foods_mejillones",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мидии.",
    "a": [
      "los mejillones"
    ],
    "options": [
      "los mejillones",
      "el pulpo",
      "el marisco",
      "el pescado"
    ],
    "e": "los mejillones — мидии."
  },
  {
    "id": "choice_foods_squid",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кальмар.",
    "a": [
      "el calamar"
    ],
    "options": [
      "el calamar",
      "el marisco",
      "el pescado",
      "el salmón"
    ],
    "e": "el calamar — кальмар."
  },
  {
    "id": "choice_foods_octopus",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: осьминог.",
    "a": [
      "el pulpo"
    ],
    "options": [
      "el pulpo",
      "el pescado",
      "el salmón",
      "el atún"
    ],
    "e": "el pulpo — осьминог."
  },
  {
    "id": "choice_foods_seafood",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: морепродукты.",
    "a": [
      "el marisco"
    ],
    "options": [
      "el marisco",
      "el salmón",
      "el atún",
      "la gamba / el camarón"
    ],
    "e": "el marisco — морепродукты."
  },
  {
    "id": "choice_foods_cookie",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: печенье.",
    "a": [
      "la galleta"
    ],
    "options": [
      "la galleta",
      "la tarta",
      "el helado",
      "el chocolate"
    ],
    "e": "la galleta — печенье."
  },
  {
    "id": "choice_foods_cake",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: торт, пирог.",
    "a": [
      "la tarta"
    ],
    "options": [
      "la tarta",
      "el helado",
      "el chocolate",
      "el caramelo"
    ],
    "e": "la tarta — торт, пирог."
  },
  {
    "id": "choice_foods_icecream",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мороженое.",
    "a": [
      "el helado"
    ],
    "options": [
      "el helado",
      "el chocolate",
      "el caramelo",
      "la magdalena"
    ],
    "e": "el helado — мороженое."
  },
  {
    "id": "choice_foods_chocolate",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шоколад.",
    "a": [
      "el chocolate"
    ],
    "options": [
      "el chocolate",
      "el caramelo",
      "la magdalena",
      "el flan"
    ],
    "e": "el chocolate — шоколад."
  },
  {
    "id": "choice_foods_candy",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: конфета, карамель.",
    "a": [
      "el caramelo"
    ],
    "options": [
      "el caramelo",
      "la magdalena",
      "el flan",
      "la galleta"
    ],
    "e": "el caramelo — конфета, карамель."
  },
  {
    "id": "choice_foods_muffin",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кекс.",
    "a": [
      "la magdalena"
    ],
    "options": [
      "la magdalena",
      "el flan",
      "la galleta",
      "la tarta"
    ],
    "e": "la magdalena — кекс."
  },
  {
    "id": "choice_foods_flan",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: флан, карамельный пудинг.",
    "a": [
      "el flan"
    ],
    "options": [
      "el flan",
      "la galleta",
      "la tarta",
      "el helado"
    ],
    "e": "el flan — флан, карамельный пудинг."
  },
  {
    "id": "choice_foods_juice",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сок.",
    "a": [
      "el zumo"
    ],
    "options": [
      "el zumo",
      "el vino",
      "la cerveza",
      "el chocolate caliente"
    ],
    "e": "el zumo — сок."
  },
  {
    "id": "choice_foods_lemonade",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: лимонад.",
    "a": [
      "la limonada"
    ],
    "options": [
      "la limonada",
      "la cerveza",
      "el chocolate caliente",
      "el agua"
    ],
    "e": "la limonada — лимонад."
  },
  {
    "id": "choice_foods_soda",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: газированный напиток.",
    "a": [
      "el refresco"
    ],
    "options": [
      "el refresco",
      "el chocolate caliente",
      "el agua",
      "el café"
    ],
    "e": "el refresco — газированный напиток."
  },
  {
    "id": "choice_foods_wine",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вино.",
    "a": [
      "el vino"
    ],
    "options": [
      "el vino",
      "el agua",
      "el café",
      "el té"
    ],
    "e": "el vino — вино."
  },
  {
    "id": "choice_foods_beer",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пиво.",
    "a": [
      "la cerveza"
    ],
    "options": [
      "la cerveza",
      "el café",
      "el té",
      "el zumo"
    ],
    "e": "la cerveza — пиво."
  },
  {
    "id": "choice_foods_hotchocolate",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: горячий шоколад.",
    "a": [
      "el chocolate caliente"
    ],
    "options": [
      "el chocolate caliente",
      "el té",
      "el zumo",
      "la limonada"
    ],
    "e": "el chocolate caliente — горячий шоколад."
  },
  {
    "id": "choice_foods_soup",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: суп.",
    "a": [
      "la sopa"
    ],
    "options": [
      "la sopa",
      "la tortilla",
      "el bocadillo",
      "la pizza"
    ],
    "e": "la sopa — суп."
  },
  {
    "id": "choice_foods_salad",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: салат.",
    "a": [
      "la ensalada"
    ],
    "options": [
      "la ensalada",
      "el bocadillo",
      "la pizza",
      "la paella"
    ],
    "e": "la ensalada — салат."
  },
  {
    "id": "choice_foods_omelette",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: омлет, тортилья.",
    "a": [
      "la tortilla"
    ],
    "options": [
      "la tortilla",
      "la pizza",
      "la paella",
      "el guiso"
    ],
    "e": "la tortilla — омлет, тортилья."
  },
  {
    "id": "choice_foods_sandwich",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: бутерброд, сэндвич.",
    "a": [
      "el bocadillo"
    ],
    "options": [
      "el bocadillo",
      "la paella",
      "el guiso",
      "el puré"
    ],
    "e": "el bocadillo — бутерброд, сэндвич."
  },
  {
    "id": "choice_foods_pizza",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пицца.",
    "a": [
      "la pizza"
    ],
    "options": [
      "la pizza",
      "el guiso",
      "el puré",
      "la sopa"
    ],
    "e": "la pizza — пицца."
  },
  {
    "id": "choice_foods_paella",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: паэлья.",
    "a": [
      "la paella"
    ],
    "options": [
      "la paella",
      "el puré",
      "la sopa",
      "la ensalada"
    ],
    "e": "la paella — паэлья."
  },
  {
    "id": "choice_foods_stew",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рагу, тушёное блюдо.",
    "a": [
      "el guiso"
    ],
    "options": [
      "el guiso",
      "la sopa",
      "la ensalada",
      "la tortilla"
    ],
    "e": "el guiso — рагу, тушёное блюдо."
  },
  {
    "id": "choice_foods_puree",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пюре.",
    "a": [
      "el puré"
    ],
    "options": [
      "el puré",
      "la ensalada",
      "la tortilla",
      "el bocadillo"
    ],
    "e": "el puré — пюре."
  },
  {
    "id": "choice_foods_flour",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мука.",
    "a": [
      "la harina"
    ],
    "options": [
      "la harina",
      "la sal",
      "el azúcar",
      "el aceite"
    ],
    "e": "la harina — мука."
  },
  {
    "id": "choice_foods_sugar",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сахар.",
    "a": [
      "el azúcar"
    ],
    "options": [
      "el azúcar",
      "la harina",
      "el aceite",
      "el vinagre"
    ],
    "e": "el azúcar — сахар."
  },
  {
    "id": "choice_foods_oil",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: масло растительное.",
    "a": [
      "el aceite"
    ],
    "options": [
      "el aceite",
      "el azúcar",
      "el vinagre",
      "la mantequilla"
    ],
    "e": "el aceite — масло растительное."
  },
  {
    "id": "choice_foods_vinegar",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: уксус.",
    "a": [
      "el vinagre"
    ],
    "options": [
      "el vinagre",
      "el aceite",
      "la mantequilla",
      "la mermelada"
    ],
    "e": "el vinagre — уксус."
  },
  {
    "id": "choice_foods_butter",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сливочное масло.",
    "a": [
      "la mantequilla"
    ],
    "options": [
      "la mantequilla",
      "el vinagre",
      "la mermelada",
      "la miel"
    ],
    "e": "la mantequilla — сливочное масло."
  },
  {
    "id": "choice_foods_jam",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: варенье, джем.",
    "a": [
      "la mermelada"
    ],
    "options": [
      "la mermelada",
      "la mantequilla",
      "la miel",
      "las lentejas"
    ],
    "e": "la mermelada — варенье, джем."
  },
  {
    "id": "choice_foods_honey",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мёд.",
    "a": [
      "la miel"
    ],
    "options": [
      "la miel",
      "la mermelada",
      "las lentejas",
      "las judías"
    ],
    "e": "la miel — мёд."
  },
  {
    "id": "choice_foods_lentils",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чечевица.",
    "a": [
      "las lentejas"
    ],
    "options": [
      "las lentejas",
      "la miel",
      "las judías",
      "el pan"
    ],
    "e": "las lentejas — чечевица."
  },
  {
    "id": "choice_foods_beans",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: фасоль.",
    "a": [
      "las judías"
    ],
    "options": [
      "las judías",
      "las lentejas",
      "el pan",
      "el arroz"
    ],
    "e": "las judías — фасоль."
  },
  {
    "id": "audio_foods_bread",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Compro pan fresco.",
    "a": [
      "Compro pan fresco."
    ],
    "e": "Я покупаю свежий хлеб."
  },
  {
    "id": "audio_foods_milk",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Bebo leche por la mañana.",
    "a": [
      "Bebo leche por la mañana."
    ],
    "e": "Я пью молоко утром."
  },
  {
    "id": "audio_foods_cheese",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta el queso.",
    "a": [
      "Me gusta el queso."
    ],
    "e": "Мне нравится сыр."
  },
  {
    "id": "audio_foods_egg",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Como un huevo en el desayuno.",
    "a": [
      "Como un huevo en el desayuno."
    ],
    "e": "Я ем яйцо на завтрак."
  },
  {
    "id": "audio_foods_rice",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cocinamos arroz con verduras.",
    "a": [
      "Cocinamos arroz con verduras."
    ],
    "e": "Мы готовим рис с овощами."
  },
  {
    "id": "audio_foods_pasta",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hoy comemos pasta.",
    "a": [
      "Hoy comemos pasta."
    ],
    "e": "Сегодня мы едим пасту."
  },
  {
    "id": "audio_foods_chicken",
    "topic": "foods",
    "foodCat": "meat",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Como pollo con patatas.",
    "a": [
      "Como pollo con patatas."
    ],
    "e": "Я ем курицу с картофелем."
  },
  {
    "id": "audio_foods_fish",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Prefiero el pescado.",
    "a": [
      "Prefiero el pescado."
    ],
    "e": "Я предпочитаю рыбу."
  },
  {
    "id": "audio_foods_meat",
    "topic": "foods",
    "foodCat": "meat",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No como mucha carne.",
    "a": [
      "No como mucha carne."
    ],
    "e": "Я не ем много мяса."
  },
  {
    "id": "audio_foods_potato",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pelo una patata.",
    "a": [
      "Pelo una patata."
    ],
    "e": "Я чищу картофелину."
  },
  {
    "id": "audio_foods_tomato",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Corto un tomate.",
    "a": [
      "Corto un tomate."
    ],
    "e": "Я режу помидор."
  },
  {
    "id": "audio_foods_apple",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Como una manzana.",
    "a": [
      "Como una manzana."
    ],
    "e": "Я ем яблоко."
  },
  {
    "id": "audio_foods_banana",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Compro plátanos.",
    "a": [
      "Compro plátanos."
    ],
    "e": "Я покупаю бананы."
  },
  {
    "id": "audio_foods_orange",
    "topic": "foods",
    "foodCat": "base",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero zumo de naranja.",
    "a": [
      "Quiero zumo de naranja."
    ],
    "e": "Я хочу апельсиновый сок."
  },
  {
    "id": "audio_foods_water",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Bebo agua todos los días.",
    "a": [
      "Bebo agua todos los días."
    ],
    "e": "Я пью воду каждый день."
  },
  {
    "id": "audio_foods_coffee",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tomo café sin azúcar.",
    "a": [
      "Tomo café sin azúcar."
    ],
    "e": "Я пью кофе без сахара."
  },
  {
    "id": "audio_foods_tea",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Bebo té por la tarde.",
    "a": [
      "Bebo té por la tarde."
    ],
    "e": "Я пью чай после обеда."
  },
  {
    "id": "audio_foods_salt",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Añade un poco de sal.",
    "a": [
      "Añade un poco de sal."
    ],
    "e": "Добавь немного соли."
  },
  {
    "id": "audio_foods_beef",
    "topic": "foods",
    "foodCat": "meat",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Compro ternera para la cena.",
    "a": [
      "Compro ternera para la cena."
    ],
    "e": "Я покупаю говядину на ужин."
  },
  {
    "id": "audio_foods_pork",
    "topic": "foods",
    "foodCat": "meat",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No como carne de cerdo.",
    "a": [
      "No como carne de cerdo."
    ],
    "e": "Я не ем свинину."
  },
  {
    "id": "audio_foods_turkey",
    "topic": "foods",
    "foodCat": "meat",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hoy cocinamos pavo.",
    "a": [
      "Hoy cocinamos pavo."
    ],
    "e": "Сегодня мы готовим индейку."
  },
  {
    "id": "audio_foods_ham",
    "topic": "foods",
    "foodCat": "meat",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero un bocadillo de jamón.",
    "a": [
      "Quiero un bocadillo de jamón."
    ],
    "e": "Я хочу бутерброд с ветчиной."
  },
  {
    "id": "audio_foods_sausage",
    "topic": "foods",
    "foodCat": "meat",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Como una salchicha con pan.",
    "a": [
      "Como una salchicha con pan."
    ],
    "e": "Я ем сосиску с хлебом."
  },
  {
    "id": "audio_foods_salmon",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El salmón está en el horno.",
    "a": [
      "El salmón está en el horno."
    ],
    "e": "Лосось находится в духовке."
  },
  {
    "id": "audio_foods_tuna",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La ensalada lleva atún.",
    "a": [
      "La ensalada lleva atún."
    ],
    "e": "В салате есть тунец."
  },
  {
    "id": "audio_foods_shrimp",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En España se usa «gamba».",
    "a": [
      "En España se usa «gamba»."
    ],
    "e": "В Испании употребляется «gamba»."
  },
  {
    "id": "audio_foods_mejillones",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Los mejillones están listos.",
    "a": [
      "Los mejillones están listos."
    ],
    "e": "Мидии готовы."
  },
  {
    "id": "audio_foods_squid",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El calamar está muy tierno.",
    "a": [
      "El calamar está muy tierno."
    ],
    "e": "Кальмар очень нежный."
  },
  {
    "id": "audio_foods_octopus",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Probamos pulpo en Galicia.",
    "a": [
      "Probamos pulpo en Galicia."
    ],
    "e": "Мы пробуем осьминога в Галисии."
  },
  {
    "id": "audio_foods_seafood",
    "topic": "foods",
    "foodCat": "seafood",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta mucho el marisco.",
    "a": [
      "Me gusta mucho el marisco."
    ],
    "e": "Я очень люблю морепродукты."
  },
  {
    "id": "audio_foods_cookie",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Como una galleta con café.",
    "a": [
      "Como una galleta con café."
    ],
    "e": "Я ем печенье с кофе."
  },
  {
    "id": "audio_foods_cake",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La tarta es de chocolate.",
    "a": [
      "La tarta es de chocolate."
    ],
    "e": "Торт шоколадный."
  },
  {
    "id": "audio_foods_icecream",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero un helado de vainilla.",
    "a": [
      "Quiero un helado de vainilla."
    ],
    "e": "Я хочу ванильное мороженое."
  },
  {
    "id": "audio_foods_chocolate",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me encanta el chocolate negro.",
    "a": [
      "Me encanta el chocolate negro."
    ],
    "e": "Я обожаю тёмный шоколад."
  },
  {
    "id": "audio_foods_candy",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El niño come un caramelo.",
    "a": [
      "El niño come un caramelo."
    ],
    "e": "Ребёнок ест конфету."
  },
  {
    "id": "audio_foods_muffin",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Desayuno una magdalena.",
    "a": [
      "Desayuno una magdalena."
    ],
    "e": "Я завтракаю кексом."
  },
  {
    "id": "audio_foods_flan",
    "topic": "foods",
    "foodCat": "desserts",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "De postre quiero flan.",
    "a": [
      "De postre quiero flan."
    ],
    "e": "На десерт я хочу флан."
  },
  {
    "id": "audio_foods_juice",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Bebo zumo de naranja.",
    "a": [
      "Bebo zumo de naranja."
    ],
    "e": "Я пью апельсиновый сок."
  },
  {
    "id": "audio_foods_lemonade",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La limonada está muy fría.",
    "a": [
      "La limonada está muy fría."
    ],
    "e": "Лимонад очень холодный."
  },
  {
    "id": "audio_foods_soda",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No bebo muchos refrescos.",
    "a": [
      "No bebo muchos refrescos."
    ],
    "e": "Я не пью много газировки."
  },
  {
    "id": "audio_foods_wine",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Prefiero el vino blanco.",
    "a": [
      "Prefiero el vino blanco."
    ],
    "e": "Я предпочитаю белое вино."
  },
  {
    "id": "audio_foods_beer",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero una cerveza sin alcohol.",
    "a": [
      "Quiero una cerveza sin alcohol."
    ],
    "e": "Я хочу безалкогольное пиво."
  },
  {
    "id": "audio_foods_hotchocolate",
    "topic": "foods",
    "foodCat": "drinks",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En invierno bebo chocolate caliente.",
    "a": [
      "En invierno bebo chocolate caliente."
    ],
    "e": "Зимой я пью горячий шоколад."
  },
  {
    "id": "audio_foods_soup",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La sopa está caliente.",
    "a": [
      "La sopa está caliente."
    ],
    "e": "Суп горячий."
  },
  {
    "id": "audio_foods_salad",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero una ensalada pequeña.",
    "a": [
      "Quiero una ensalada pequeña."
    ],
    "e": "Я хочу маленький салат."
  },
  {
    "id": "audio_foods_omelette",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La tortilla lleva huevos y patatas.",
    "a": [
      "La tortilla lleva huevos y patatas."
    ],
    "e": "В тортилье есть яйца и картофель."
  },
  {
    "id": "audio_foods_sandwich",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero un bocadillo de queso.",
    "a": [
      "Quiero un bocadillo de queso."
    ],
    "e": "Я хочу бутерброд с сыром."
  },
  {
    "id": "audio_foods_pizza",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pedimos una pizza grande.",
    "a": [
      "Pedimos una pizza grande."
    ],
    "e": "Мы заказываем большую пиццу."
  },
  {
    "id": "audio_foods_paella",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La paella lleva arroz y marisco.",
    "a": [
      "La paella lleva arroz y marisco."
    ],
    "e": "В паэлье есть рис и морепродукты."
  },
  {
    "id": "audio_foods_stew",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El guiso lleva carne y patatas.",
    "a": [
      "El guiso lleva carne y patatas."
    ],
    "e": "В рагу есть мясо и картофель."
  },
  {
    "id": "audio_foods_puree",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero puré de patatas.",
    "a": [
      "Quiero puré de patatas."
    ],
    "e": "Я хочу картофельное пюре."
  },
  {
    "id": "audio_foods_flour",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito harina para la tarta.",
    "a": [
      "Necesito harina para la tarta."
    ],
    "e": "Мне нужна мука для торта."
  },
  {
    "id": "audio_foods_sugar",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tomo café sin azúcar.",
    "a": [
      "Tomo café sin azúcar."
    ],
    "e": "Я пью кофе без сахара."
  },
  {
    "id": "audio_foods_oil",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cocino con aceite de oliva.",
    "a": [
      "Cocino con aceite de oliva."
    ],
    "e": "Я готовлю с оливковым маслом."
  },
  {
    "id": "audio_foods_vinegar",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La ensalada lleva aceite y vinagre.",
    "a": [
      "La ensalada lleva aceite y vinagre."
    ],
    "e": "В салате есть масло и уксус."
  },
  {
    "id": "audio_foods_butter",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Como pan con mantequilla.",
    "a": [
      "Como pan con mantequilla."
    ],
    "e": "Я ем хлеб со сливочным маслом."
  },
  {
    "id": "audio_foods_jam",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Desayuno pan con mermelada.",
    "a": [
      "Desayuno pan con mermelada."
    ],
    "e": "Я завтракаю хлебом с вареньем."
  },
  {
    "id": "audio_foods_honey",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pongo miel en el té.",
    "a": [
      "Pongo miel en el té."
    ],
    "e": "Я кладу мёд в чай."
  },
  {
    "id": "audio_foods_lentils",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hoy comemos lentejas.",
    "a": [
      "Hoy comemos lentejas."
    ],
    "e": "Сегодня мы едим чечевицу."
  },
  {
    "id": "audio_foods_beans",
    "topic": "foods",
    "foodCat": "grocery",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El guiso lleva judías.",
    "a": [
      "El guiso lleva judías."
    ],
    "e": "В рагу есть фасоль."
  },
  {
    "id": "ser_estar_hay_food_hot",
    "topic": "foods",
    "foodCat": "dishes",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: La comida todavía ___ caliente.",
    "a": [
      "está",
      "esta"
    ],
    "displayAnswer": "está",
    "e": "Состояние еды в данный момент выражается estar."
  },
  {
    "id": "sort_foods_groups",
    "topic": "foods",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели продукты по четырём группам.",
    "sortColumns": [
      {
        "id": "c0",
        "title": "Мясо и птица"
      },
      {
        "id": "c1",
        "title": "Молочные продукты"
      },
      {
        "id": "c2",
        "title": "Овощи и фрукты"
      },
      {
        "id": "c3",
        "title": "Сладости"
      }
    ],
    "sortTokens": [
      {
        "id": "t0_0",
        "text": "el pollo",
        "category": "c0"
      },
      {
        "id": "t0_1",
        "text": "la ternera",
        "category": "c0"
      },
      {
        "id": "t0_2",
        "text": "la carne de cerdo",
        "category": "c0"
      },
      {
        "id": "t1_0",
        "text": "la leche",
        "category": "c1"
      },
      {
        "id": "t1_1",
        "text": "el queso",
        "category": "c1"
      },
      {
        "id": "t1_2",
        "text": "la mantequilla",
        "category": "c1"
      },
      {
        "id": "t2_0",
        "text": "la manzana",
        "category": "c2"
      },
      {
        "id": "t2_1",
        "text": "el plátano",
        "category": "c2"
      },
      {
        "id": "t2_2",
        "text": "el tomate",
        "category": "c2"
      },
      {
        "id": "t2_3",
        "text": "la patata",
        "category": "c2"
      },
      {
        "id": "t3_0",
        "text": "la galleta",
        "category": "c3"
      },
      {
        "id": "t3_1",
        "text": "la tarta",
        "category": "c3"
      },
      {
        "id": "t3_2",
        "text": "el helado",
        "category": "c3"
      }
    ],
    "a": [
      "c0 | c0 | c0 | c1 | c1 | c1 | c2 | c2 | c2 | c2 | c3 | c3 | c3"
    ],
    "displayAnswer": "Мясо и птица: el pollo, la ternera, la carne de cerdo · Молочные продукты: la leche, el queso, la mantequilla · Овощи и фрукты: la manzana, el plátano, el tomate, la patata · Сладости: la galleta, la tarta, el helado",
    "e": "В этом наборе продукты подобраны так, чтобы ни один не относился сразу к двум колонкам."
  },
  {
    "id": "sort_foods_more",
    "topic": "foods",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова о еде по типам.",
    "sortColumns": [
      {
        "id": "c0",
        "title": "Морепродукты"
      },
      {
        "id": "c1",
        "title": "Напитки"
      },
      {
        "id": "c2",
        "title": "Готовые блюда"
      },
      {
        "id": "c3",
        "title": "Бакалея"
      }
    ],
    "sortTokens": [
      {
        "id": "t0_0",
        "text": "el salmón",
        "category": "c0"
      },
      {
        "id": "t0_1",
        "text": "el atún",
        "category": "c0"
      },
      {
        "id": "t0_2",
        "text": "las gambas",
        "category": "c0"
      },
      {
        "id": "t1_0",
        "text": "el agua",
        "category": "c1"
      },
      {
        "id": "t1_1",
        "text": "el café",
        "category": "c1"
      },
      {
        "id": "t1_2",
        "text": "el té",
        "category": "c1"
      },
      {
        "id": "t1_3",
        "text": "el zumo",
        "category": "c1"
      },
      {
        "id": "t2_0",
        "text": "la sopa",
        "category": "c2"
      },
      {
        "id": "t2_1",
        "text": "la paella",
        "category": "c2"
      },
      {
        "id": "t2_2",
        "text": "la tortilla",
        "category": "c2"
      },
      {
        "id": "t2_3",
        "text": "el bocadillo",
        "category": "c2"
      },
      {
        "id": "t3_0",
        "text": "el arroz",
        "category": "c3"
      },
      {
        "id": "t3_1",
        "text": "la harina",
        "category": "c3"
      },
      {
        "id": "t3_2",
        "text": "el azúcar",
        "category": "c3"
      }
    ],
    "a": [
      "c0 | c0 | c0 | c1 | c1 | c1 | c1 | c2 | c2 | c2 | c2 | c3 | c3 | c3"
    ],
    "displayAnswer": "Морепродукты: el salmón, el atún, las gambas · Напитки: el agua, el café, el té, el zumo · Готовые блюда: la sopa, la paella, la tortilla, el bocadillo · Бакалея: el arroz, la harina, el azúcar",
    "e": "Каждое слово относится только к одной колонке в этом задании."
  },
  {
    "id": "picture_food_basket",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши продукты в корзине.",
    "pictureScene": "food_basket",
    "pictureHint": "Напиши название каждого продукта по-испански. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 19,
        "reveal": "el pan",
        "answers": [
          "pan"
        ],
        "markerX": 33,
        "markerY": 37
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la leche",
        "answers": [
          "leche"
        ],
        "markerX": 47,
        "markerY": 31
      },
      {
        "side": "left",
        "top": 44,
        "reveal": "los plátanos",
        "answers": [
          "plátanos",
          "plátano",
          "bananas",
          "banana"
        ],
        "markerX": 58,
        "markerY": 39
      },
      {
        "side": "right",
        "top": 45,
        "reveal": "los tomates",
        "answers": [
          "tomates",
          "tomate"
        ],
        "markerX": 47,
        "markerY": 55
      },
      {
        "side": "left",
        "top": 71,
        "reveal": "la manzana",
        "answers": [
          "manzana"
        ],
        "markerX": 65,
        "markerY": 54
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el pan | la leche | los plátanos | los tomates | la manzana"
    ],
    "displayAnswer": "1. el pan · 2. la leche · 3. los plátanos · 4. los tomates · 5. la manzana",
    "e": "Единственное и множественное число принимаются там, где на рисунке лежит несколько одинаковых продуктов."
  },
  {
    "id": "picture_food_shelf",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши продукты на магазинной полке.",
    "pictureScene": "food_shelf",
    "pictureHint": "Назови пять отмеченных продуктов. Артикль можно не писать.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "la leche",
        "answers": [
          "leche"
        ],
        "markerX": 43,
        "markerY": 29
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "el queso",
        "answers": [
          "queso"
        ],
        "markerX": 64,
        "markerY": 29
      },
      {
        "side": "left",
        "top": 46,
        "reveal": "la pasta",
        "answers": [
          "pasta"
        ],
        "markerX": 45,
        "markerY": 55
      },
      {
        "side": "right",
        "top": 46,
        "reveal": "el arroz",
        "answers": [
          "arroz"
        ],
        "markerX": 64,
        "markerY": 55
      },
      {
        "side": "left",
        "top": 73,
        "reveal": "las galletas",
        "answers": [
          "galletas",
          "galleta"
        ],
        "markerX": 53,
        "markerY": 76
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la leche | el queso | la pasta | el arroz | las galletas"
    ],
    "displayAnswer": "1. la leche · 2. el queso · 3. la pasta · 4. el arroz · 5. las galletas",
    "e": "Упаковки отличаются формой и расположением, поэтому у каждого номера только один ответ."
  },
  {
    "id": "picture_food_bag",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши продукты, которые выглядывают из пакета с покупками.",
    "pictureScene": "food_bag",
    "pictureHint": "Назови каждый отмеченный продукт по-испански.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 19,
        "reveal": "el pan",
        "answers": [
          "pan"
        ],
        "markerX": 28,
        "markerY": 32
      },
      {
        "side": "right",
        "top": 19,
        "reveal": "el agua",
        "answers": [
          "agua"
        ],
        "markerX": 47,
        "markerY": 23
      },
      {
        "side": "left",
        "top": 46,
        "reveal": "la naranja",
        "answers": [
          "naranja"
        ],
        "markerX": 53,
        "markerY": 41
      },
      {
        "side": "right",
        "top": 46,
        "reveal": "el chocolate",
        "answers": [
          "chocolate"
        ],
        "markerX": 68,
        "markerY": 32
      },
      {
        "side": "left",
        "top": 73,
        "reveal": "los huevos",
        "answers": [
          "huevos",
          "huevo"
        ],
        "markerX": 65,
        "markerY": 45
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el pan | el agua | la naranja | el chocolate | los huevos"
    ],
    "displayAnswer": "1. el pan · 2. el agua · 3. la naranja · 4. el chocolate · 5. los huevos",
    "e": "Agua — слово женского рода, но в единственном числе употребляется с артиклем el."
  },
  {
    "id": "picture_food_fridge",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши продукты на полках холодильника.",
    "pictureScene": "food_fridge",
    "pictureHint": "Назови пять отмеченных продуктов. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 19,
        "reveal": "la mantequilla",
        "answers": [
          "mantequilla"
        ],
        "markerX": 42,
        "markerY": 28
      },
      {
        "side": "right",
        "top": 19,
        "reveal": "el queso",
        "answers": [
          "queso"
        ],
        "markerX": 39,
        "markerY": 47
      },
      {
        "side": "left",
        "top": 47,
        "reveal": "el salmón",
        "answers": [
          "salmón"
        ],
        "markerX": 62,
        "markerY": 47
      },
      {
        "side": "right",
        "top": 47,
        "reveal": "el zumo",
        "answers": [
          "zumo",
          "jugo"
        ],
        "markerX": 39,
        "markerY": 72
      },
      {
        "side": "left",
        "top": 74,
        "reveal": "la tarta",
        "answers": [
          "tarta",
          "pastel"
        ],
        "markerX": 62,
        "markerY": 72
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la mantequilla | el queso | el salmón | el zumo | la tarta"
    ],
    "displayAnswer": "1. la mantequilla · 2. el queso · 3. el salmón · 4. el zumo · 5. la tarta",
    "e": "Zumo и jugo, а также tarta и pastel принимаются как варианты."
  },
  {
    "id": "picture_food_table",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши заметные ингредиенты супа, салата и торта на столе.",
    "pictureScene": "food_table",
    "pictureHint": "Номера стоят рядом с ингредиентами внутри блюд, а не с посудой.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 19,
        "reveal": "la patata",
        "answers": [
          "patata",
          "papa"
        ],
        "markerX": 31,
        "markerY": 29
      },
      {
        "side": "right",
        "top": 19,
        "reveal": "el pollo",
        "answers": [
          "pollo"
        ],
        "markerX": 39,
        "markerY": 31
      },
      {
        "side": "left",
        "top": 47,
        "reveal": "el tomate",
        "answers": [
          "tomate"
        ],
        "markerX": 66,
        "markerY": 29
      },
      {
        "side": "right",
        "top": 47,
        "reveal": "el atún",
        "answers": [
          "atún"
        ],
        "markerX": 73,
        "markerY": 31
      },
      {
        "side": "left",
        "top": 76,
        "reveal": "el chocolate",
        "answers": [
          "chocolate"
        ],
        "markerX": 50,
        "markerY": 69
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la patata | el pollo | el tomate | el atún | el chocolate"
    ],
    "displayAnswer": "1. la patata · 2. el pollo · 3. el tomate · 4. el atún · 5. el chocolate",
    "e": "В супе видны картофель и курица, в салате — помидор и тунец, а справа стоит шоколадный торт."
  },
  {
    "id": "picture_soup_chicken",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Куриный суп: подпиши ингредиенты вокруг блюда.",
    "pictureScene": "dish_soup_chicken",
    "pictureHint": "Назови каждый отмеченный ингредиент по-испански. Повторение знакомых продуктов допустимо.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "el pollo",
        "answers": [
          "pollo"
        ],
        "markerX": 18,
        "markerY": 23
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la patata",
        "answers": [
          "patata",
          "papa"
        ],
        "markerX": 72,
        "markerY": 23
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "la sal",
        "answers": [
          "sal"
        ],
        "markerX": 14,
        "markerY": 67
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 37,
        "markerY": 75
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el agua",
        "answers": [
          "agua"
        ],
        "markerX": 78,
        "markerY": 69
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el pollo | la patata | la sal | el aceite | el agua"
    ],
    "displayAnswer": "1. el pollo · 2. la patata · 3. la sal · 4. el aceite · 5. el agua",
    "e": "Куриный суп: pollo, patata, sal, aceite и agua."
  },
  {
    "id": "picture_soup_lentil",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Чечевичный суп: подпиши его основные ингредиенты.",
    "pictureScene": "dish_soup_lentil",
    "pictureHint": "Подпиши пять продуктов вокруг тарелки. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "las lentejas",
        "answers": [
          "lentejas"
        ],
        "markerX": 18,
        "markerY": 20
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la carne de cerdo",
        "answers": [
          "carne de cerdo",
          "cerdo"
        ],
        "markerX": 72,
        "markerY": 20
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "la patata",
        "answers": [
          "patata",
          "papa"
        ],
        "markerX": 22,
        "markerY": 70
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "la sal",
        "answers": [
          "sal"
        ],
        "markerX": 53,
        "markerY": 73
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 85,
        "markerY": 65
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "las lentejas | la carne de cerdo | la patata | la sal | el aceite"
    ],
    "displayAnswer": "1. las lentejas · 2. la carne de cerdo · 3. la patata · 4. la sal · 5. el aceite",
    "e": "В этом варианте чечевичного супа используются чечевица, свинина, картофель, соль и масло."
  },
  {
    "id": "picture_soup_seafood",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Суп с морепродуктами: подпиши ингредиенты.",
    "pictureScene": "dish_soup_seafood",
    "pictureHint": "Назови пять отчётливо показанных продуктов.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "el pescado",
        "answers": [
          "pescado"
        ],
        "markerX": 20,
        "markerY": 21
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la gamba / el camarón",
        "answers": [
          "gamba",
          "gambas",
          "camarón",
          "camaron",
          "camarones"
        ],
        "markerX": 75,
        "markerY": 22
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el calamar",
        "answers": [
          "calamar"
        ],
        "markerX": 23,
        "markerY": 69
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el tomate",
        "answers": [
          "tomate"
        ],
        "markerX": 62,
        "markerY": 70
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el arroz",
        "answers": [
          "arroz"
        ],
        "markerX": 87,
        "markerY": 59
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el pescado | la gamba / el camarón | el calamar | el tomate | el arroz"
    ],
    "displayAnswer": "1. el pescado · 2. la gamba / el camarón · 3. el calamar · 4. el tomate · 5. el arroz",
    "e": "Суп включает рыбу, креветки, кальмара, помидор и рис."
  },
  {
    "id": "picture_salad_tuna",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Салат с тунцом: подпиши ингредиенты.",
    "pictureScene": "dish_salad_tuna",
    "pictureHint": "Номера стоят прямо у отдельных продуктов вокруг салата.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "el tomate",
        "answers": [
          "tomate"
        ],
        "markerX": 20,
        "markerY": 21
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "el atún",
        "answers": [
          "atún"
        ],
        "markerX": 70,
        "markerY": 21
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el huevo",
        "answers": [
          "huevo"
        ],
        "markerX": 37,
        "markerY": 77
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 13,
        "markerY": 69
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el vinagre",
        "answers": [
          "vinagre"
        ],
        "markerX": 86,
        "markerY": 69
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el tomate | el atún | el huevo | el aceite | el vinagre"
    ],
    "displayAnswer": "1. el tomate · 2. el atún · 3. el huevo · 4. el aceite · 5. el vinagre",
    "e": "Для салата показаны tomate, atún, huevo, aceite и vinagre."
  },
  {
    "id": "picture_salad_chicken",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Салат с курицей: подпиши ингредиенты.",
    "pictureScene": "dish_salad_chicken",
    "pictureHint": "Назови ингредиенты без подсказки-списка.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "el pollo",
        "answers": [
          "pollo"
        ],
        "markerX": 16,
        "markerY": 20
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "el queso",
        "answers": [
          "queso"
        ],
        "markerX": 72,
        "markerY": 18
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "la manzana",
        "answers": [
          "manzana"
        ],
        "markerX": 22,
        "markerY": 70
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 52,
        "markerY": 74
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el huevo",
        "answers": [
          "huevo"
        ],
        "markerX": 83,
        "markerY": 68
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el pollo | el queso | la manzana | el aceite | el huevo"
    ],
    "displayAnswer": "1. el pollo · 2. el queso · 3. la manzana · 4. el aceite · 5. el huevo",
    "e": "В салате показаны курица, сыр, яблоко, масло и яйцо."
  },
  {
    "id": "picture_salad_seafood",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Рисовый салат с морепродуктами: подпиши ингредиенты.",
    "pictureScene": "dish_salad_seafood",
    "pictureHint": "Каждому номеру соответствует только один продукт.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "el arroz",
        "answers": [
          "arroz"
        ],
        "markerX": 18,
        "markerY": 20
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la gamba / el camarón",
        "answers": [
          "gamba",
          "gambas",
          "camarón",
          "camaron",
          "camarones"
        ],
        "markerX": 72,
        "markerY": 19
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "los mejillones",
        "answers": [
          "mejillones"
        ],
        "markerX": 85,
        "markerY": 70
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el tomate",
        "answers": [
          "tomate"
        ],
        "markerX": 23,
        "markerY": 70
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 52,
        "markerY": 74
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el arroz | la gamba / el camarón | los mejillones | el tomate | el aceite"
    ],
    "displayAnswer": "1. el arroz · 2. la gamba / el camarón · 3. los mejillones · 4. el tomate · 5. el aceite",
    "e": "В этом салате сочетаются arroz, gambas, mejillones, tomate и aceite."
  },
  {
    "id": "picture_cake_chocolate",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Шоколадный торт: подпиши ингредиенты.",
    "pictureScene": "dish_cake_chocolate",
    "pictureHint": "Назови продукты, из которых приготовлен торт.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "el chocolate",
        "answers": [
          "chocolate"
        ],
        "markerX": 18,
        "markerY": 21
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la harina",
        "answers": [
          "harina"
        ],
        "markerX": 70,
        "markerY": 21
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el azúcar",
        "answers": [
          "azúcar"
        ],
        "markerX": 85,
        "markerY": 70
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el huevo",
        "answers": [
          "huevo"
        ],
        "markerX": 15,
        "markerY": 72
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "la mantequilla",
        "answers": [
          "mantequilla"
        ],
        "markerX": 46,
        "markerY": 77
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "el chocolate | la harina | el azúcar | el huevo | la mantequilla"
    ],
    "displayAnswer": "1. el chocolate · 2. la harina · 3. el azúcar · 4. el huevo · 5. la mantequilla",
    "e": "Основные ингредиенты: шоколад, мука, сахар, яйцо и сливочное масло."
  },
  {
    "id": "picture_dessert_flan",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Флан: подпиши четыре основных ингредиента.",
    "pictureScene": "dish_flan",
    "pictureHint": "Здесь четыре поля; подпиши продукты вокруг десерта.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "la leche",
        "answers": [
          "leche"
        ],
        "markerX": 18,
        "markerY": 21
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "el huevo",
        "answers": [
          "huevo"
        ],
        "markerX": 78,
        "markerY": 21
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el azúcar",
        "answers": [
          "azúcar"
        ],
        "markerX": 25,
        "markerY": 73
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el caramelo",
        "answers": [
          "caramelo"
        ],
        "markerX": 72,
        "markerY": 72
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la leche | el huevo | el azúcar | el caramelo"
    ],
    "displayAnswer": "1. la leche · 2. el huevo · 3. el azúcar · 4. el caramelo",
    "e": "Флан готовят из молока, яйца и сахара, а сверху добавляют карамель."
  },
  {
    "id": "picture_dessert_cookies",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Печенье с шоколадом: подпиши ингредиенты.",
    "pictureScene": "dish_cookies",
    "pictureHint": "Назови пять продуктов вокруг печенья.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "la harina",
        "answers": [
          "harina"
        ],
        "markerX": 18,
        "markerY": 21
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la mantequilla",
        "answers": [
          "mantequilla"
        ],
        "markerX": 70,
        "markerY": 21
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el azúcar",
        "answers": [
          "azúcar"
        ],
        "markerX": 15,
        "markerY": 72
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el chocolate",
        "answers": [
          "chocolate"
        ],
        "markerX": 60,
        "markerY": 75
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el huevo",
        "answers": [
          "huevo"
        ],
        "markerX": 89,
        "markerY": 72
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la harina | la mantequilla | el azúcar | el chocolate | el huevo"
    ],
    "displayAnswer": "1. la harina · 2. la mantequilla · 3. el azúcar · 4. el chocolate · 5. el huevo",
    "e": "Печенье показано вместе с мукой, маслом, сахаром, шоколадом и яйцом."
  },
  {
    "id": "picture_main_tortilla",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Испанская тортилья: подпиши ингредиенты.",
    "pictureScene": "dish_tortilla",
    "pictureHint": "Подпиши четыре продукта, из которых приготовлено блюдо.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "la patata",
        "answers": [
          "patata",
          "papa"
        ],
        "markerX": 16,
        "markerY": 24
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "el huevo",
        "answers": [
          "huevo"
        ],
        "markerX": 48,
        "markerY": 25
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 72,
        "markerY": 23
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "la sal",
        "answers": [
          "sal"
        ],
        "markerX": 90,
        "markerY": 38
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la patata | el huevo | el aceite | la sal"
    ],
    "displayAnswer": "1. la patata · 2. el huevo · 3. el aceite · 4. la sal",
    "e": "Для базовой tortilla española нужны картофель, яйца, масло и соль."
  },
  {
    "id": "picture_main_pizza",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Пицца с ветчиной: подпиши ингредиенты.",
    "pictureScene": "dish_pizza",
    "pictureHint": "Назови пять ингредиентов вокруг пиццы.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "la harina",
        "answers": [
          "harina"
        ],
        "markerX": 15,
        "markerY": 29
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "el tomate",
        "answers": [
          "tomate"
        ],
        "markerX": 45,
        "markerY": 22
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el queso",
        "answers": [
          "queso"
        ],
        "markerX": 71,
        "markerY": 29
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "el jamón",
        "answers": [
          "jamón"
        ],
        "markerX": 52,
        "markerY": 46
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 88,
        "markerY": 29
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la harina | el tomate | el queso | el jamón | el aceite"
    ],
    "displayAnswer": "1. la harina · 2. el tomate · 3. el queso · 4. el jamón · 5. el aceite",
    "e": "Пицца приготовлена из муки, помидора, сыра, ветчины и масла."
  },
  {
    "id": "picture_main_stew",
    "topic": "foods",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Мясное рагу: подпиши ингредиенты.",
    "pictureScene": "dish_stew",
    "pictureHint": "Назови продукты вокруг готового блюда.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 18,
        "reveal": "la ternera",
        "answers": [
          "ternera",
          "carne de ternera"
        ],
        "markerX": 18,
        "markerY": 21
      },
      {
        "side": "right",
        "top": 18,
        "reveal": "la patata",
        "answers": [
          "patata",
          "papa"
        ],
        "markerX": 57,
        "markerY": 21
      },
      {
        "side": "left",
        "top": 49,
        "reveal": "el tomate",
        "answers": [
          "tomate"
        ],
        "markerX": 20,
        "markerY": 44
      },
      {
        "side": "right",
        "top": 49,
        "reveal": "las judías",
        "answers": [
          "judías"
        ],
        "markerX": 58,
        "markerY": 44
      },
      {
        "side": "left",
        "top": 77,
        "reveal": "el aceite",
        "answers": [
          "aceite"
        ],
        "markerX": 88,
        "markerY": 38
      }
    ],
    "pictureNumbersEmbedded": false,
    "a": [
      "la ternera | la patata | el tomate | las judías | el aceite"
    ],
    "displayAnswer": "1. la ternera · 2. la patata · 3. el tomate · 4. las judías · 5. el aceite",
    "e": "В рагу показаны говядина, картофель, помидор, фасоль и масло."
  }
];

export const foodsTopic = {
  id: "foods",
  title: "Продукты питания",
  icon: "◉",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
