/**
 * Одежда и аксессуары topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "tshirt",
    "cat": "clothes",
    "word": "la camiseta",
    "base": "camiseta",
    "gender": "женский род",
    "tr": "футболка",
    "ru": [
      "футболка"
    ],
    "answers": [
      "camiseta",
      "la camiseta"
    ],
    "art": "tshirt",
    "examples": [
      [
        "Llevo una camiseta blanca.",
        "На мне белая футболка."
      ],
      [
        "Esta camiseta es muy cómoda.",
        "Эта футболка очень удобная."
      ]
    ],
    "cloze": "Llevo una ___ blanca.",
    "clozeAnswers": [
      "camiseta"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "shirt",
    "cat": "clothes",
    "word": "la camisa",
    "base": "camisa",
    "gender": "женский род",
    "tr": "рубашка",
    "ru": [
      "рубашка"
    ],
    "answers": [
      "camisa",
      "la camisa"
    ],
    "art": "shirt",
    "examples": [
      [
        "Él lleva una camisa azul.",
        "На нём синяя рубашка."
      ],
      [
        "Plancho la camisa para mañana.",
        "Я глажу рубашку на завтра."
      ]
    ],
    "cloze": "Él lleva una ___ azul.",
    "clozeAnswers": [
      "camisa"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "blouse",
    "cat": "clothes",
    "word": "la blusa",
    "base": "blusa",
    "gender": "женский род",
    "tr": "блузка",
    "ru": [
      "блузка"
    ],
    "answers": [
      "blusa",
      "la blusa"
    ],
    "art": "blouse",
    "examples": [
      [
        "La blusa combina con la falda.",
        "Блузка сочетается с юбкой."
      ],
      [
        "Busco una blusa elegante.",
        "Я ищу элегантную блузку."
      ]
    ],
    "cloze": "Busco una ___ elegante.",
    "clozeAnswers": [
      "blusa"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "sweater",
    "cat": "clothes",
    "word": "el jersey",
    "base": "jersey",
    "gender": "мужской род",
    "tr": "свитер",
    "ru": [
      "свитер",
      "джемпер"
    ],
    "answers": [
      "jersey",
      "el jersey",
      "suéter",
      "el suéter"
    ],
    "art": "sweater",
    "examples": [
      [
        "Me pongo un jersey de lana.",
        "Я надеваю шерстяной свитер."
      ],
      [
        "Este jersey abriga mucho.",
        "Этот свитер очень тёплый."
      ]
    ],
    "cloze": "Me pongo un ___ de lana.",
    "clozeAnswers": [
      "jersey",
      "suéter"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "cardigan",
    "cat": "clothes",
    "word": "el cárdigan",
    "base": "cárdigan",
    "gender": "мужской род",
    "tr": "кардиган, кофта",
    "ru": [
      "кардиган",
      "кофта"
    ],
    "answers": [
      "cárdigan",
      "cardigan",
      "el cárdigan",
      "el cardigan"
    ],
    "art": "cardigan",
    "examples": [
      [
        "Llevo un cárdigan beige.",
        "На мне бежевый кардиган."
      ],
      [
        "Este cárdigan es muy cómodo.",
        "Этот кардиган очень удобный."
      ]
    ],
    "cloze": "Llevo un ___ beige.",
    "clozeAnswers": [
      "cárdigan",
      "cardigan"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "hoodie",
    "cat": "clothes",
    "word": "la sudadera con capucha",
    "base": "sudadera con capucha",
    "gender": "женский род",
    "tr": "худи, толстовка с капюшоном",
    "ru": [
      "худи",
      "толстовка",
      "толстовка с капюшоном"
    ],
    "answers": [
      "sudadera con capucha",
      "la sudadera con capucha",
      "sudadera",
      "la sudadera"
    ],
    "art": "hoodie",
    "examples": [
      [
        "Llevo una sudadera con capucha verde.",
        "На мне зелёное худи."
      ],
      [
        "Esta sudadera con capucha es muy cómoda.",
        "Это худи очень удобное."
      ]
    ],
    "cloze": "Llevo una ___ verde.",
    "clozeAnswers": [
      "sudadera con capucha",
      "sudadera"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "vest",
    "cat": "clothes",
    "word": "el chaleco",
    "base": "chaleco",
    "gender": "мужской род",
    "tr": "жилет",
    "ru": [
      "жилет"
    ],
    "answers": [
      "chaleco",
      "el chaleco"
    ],
    "art": "vest",
    "examples": [
      [
        "Lleva un chaleco beige.",
        "На нём бежевый жилет."
      ],
      [
        "El chaleco combina con la camisa.",
        "Жилет сочетается с рубашкой."
      ]
    ],
    "cloze": "Lleva un ___ beige.",
    "clozeAnswers": [
      "chaleco"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "polo",
    "cat": "clothes",
    "word": "el polo",
    "base": "polo",
    "gender": "мужской род",
    "tr": "поло",
    "ru": [
      "поло",
      "рубашка поло"
    ],
    "answers": [
      "polo",
      "el polo"
    ],
    "art": "polo",
    "examples": [
      [
        "Lleva un polo blanco.",
        "На нём белое поло."
      ],
      [
        "Este polo es de algodón.",
        "Это поло из хлопка."
      ]
    ],
    "cloze": "Lleva un ___ blanco.",
    "clozeAnswers": [
      "polo"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "jacket",
    "cat": "clothes",
    "word": "la chaqueta",
    "base": "chaqueta",
    "gender": "женский род",
    "tr": "куртка, пиджак",
    "ru": [
      "куртка",
      "пиджак",
      "куртка пиджак"
    ],
    "answers": [
      "chaqueta",
      "la chaqueta"
    ],
    "art": "jacket",
    "examples": [
      [
        "Necesito una chaqueta ligera.",
        "Мне нужна лёгкая куртка."
      ],
      [
        "La chaqueta tiene cuatro bolsillos.",
        "У куртки четыре кармана."
      ]
    ],
    "cloze": "Necesito una ___ ligera.",
    "clozeAnswers": [
      "chaqueta"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "coat",
    "cat": "clothes",
    "word": "el abrigo",
    "base": "abrigo",
    "gender": "мужской род",
    "tr": "пальто",
    "ru": [
      "пальто"
    ],
    "answers": [
      "abrigo",
      "el abrigo"
    ],
    "art": "coat",
    "examples": [
      [
        "Ponte el abrigo, hace frío.",
        "Надень пальто, холодно."
      ],
      [
        "Mi abrigo es largo y negro.",
        "Моё пальто длинное и чёрное."
      ]
    ],
    "cloze": "Ponte el ___, hace frío.",
    "clozeAnswers": [
      "abrigo"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "dress",
    "cat": "clothes",
    "word": "el vestido",
    "base": "vestido",
    "gender": "мужской род",
    "tr": "платье",
    "ru": [
      "платье"
    ],
    "answers": [
      "vestido",
      "el vestido"
    ],
    "art": "dress",
    "examples": [
      [
        "Ella lleva un vestido rojo.",
        "На ней красное платье."
      ],
      [
        "El vestido es para una fiesta.",
        "Это платье для вечеринки."
      ]
    ],
    "cloze": "Ella lleva un ___ rojo.",
    "clozeAnswers": [
      "vestido"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "skirt",
    "cat": "clothes",
    "word": "la falda",
    "base": "falda",
    "gender": "женский род",
    "tr": "юбка",
    "ru": [
      "юбка"
    ],
    "answers": [
      "falda",
      "la falda"
    ],
    "art": "skirt",
    "examples": [
      [
        "La falda me queda bien.",
        "Юбка хорошо на мне сидит."
      ],
      [
        "Prefiero una falda larga.",
        "Я предпочитаю длинную юбку."
      ]
    ],
    "cloze": "Prefiero una ___ larga.",
    "clozeAnswers": [
      "falda"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "trousers",
    "cat": "clothes",
    "word": "los pantalones",
    "base": "pantalones",
    "gender": "мужской род, множественное число",
    "tr": "брюки, штаны",
    "ru": [
      "брюки",
      "штаны",
      "брюки штаны"
    ],
    "answers": [
      "pantalones",
      "los pantalones"
    ],
    "art": "trousers",
    "examples": [
      [
        "Estos pantalones son cómodos.",
        "Эти брюки удобные."
      ],
      [
        "Necesito unos pantalones negros.",
        "Мне нужны чёрные брюки."
      ]
    ],
    "cloze": "Estos ___ son cómodos.",
    "clozeAnswers": [
      "pantalones"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "jeans",
    "cat": "clothes",
    "word": "los vaqueros",
    "base": "vaqueros",
    "gender": "мужской род, множественное число",
    "tr": "джинсы",
    "ru": [
      "джинсы"
    ],
    "answers": [
      "vaqueros",
      "los vaqueros",
      "jeans",
      "los jeans"
    ],
    "art": "jeans",
    "examples": [
      [
        "Siempre llevo vaqueros los viernes.",
        "По пятницам я всегда ношу джинсы."
      ],
      [
        "Los vaqueros están en el armario.",
        "Джинсы находятся в шкафу."
      ]
    ],
    "cloze": "Siempre llevo ___ los viernes.",
    "clozeAnswers": [
      "vaqueros",
      "jeans"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "shorts",
    "cat": "clothes",
    "word": "los pantalones cortos",
    "base": "pantalones cortos",
    "gender": "мужской род, множественное число",
    "tr": "шорты",
    "ru": [
      "шорты"
    ],
    "answers": [
      "pantalones cortos",
      "los pantalones cortos",
      "shorts",
      "los shorts"
    ],
    "art": "shorts",
    "examples": [
      [
        "En verano llevo pantalones cortos.",
        "Летом я ношу шорты."
      ],
      [
        "Estos pantalones cortos son nuevos.",
        "Эти шорты новые."
      ]
    ],
    "cloze": "En verano llevo ___.",
    "clozeAnswers": [
      "pantalones cortos",
      "shorts"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "suit",
    "cat": "clothes",
    "word": "el traje",
    "base": "traje",
    "gender": "мужской род",
    "tr": "костюм",
    "ru": [
      "костюм"
    ],
    "answers": [
      "traje",
      "el traje"
    ],
    "art": "suit",
    "examples": [
      [
        "Lleva traje para la entrevista.",
        "Он надевает костюм на собеседование."
      ],
      [
        "El traje gris es muy elegante.",
        "Серый костюм очень элегантный."
      ]
    ],
    "cloze": "Lleva ___ para la entrevista.",
    "clozeAnswers": [
      "traje"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "pajamas",
    "cat": "clothes",
    "word": "el pijama",
    "base": "pijama",
    "gender": "мужской род",
    "tr": "пижама",
    "ru": [
      "пижама"
    ],
    "answers": [
      "pijama",
      "el pijama"
    ],
    "art": "pajamas",
    "examples": [
      [
        "Me pongo el pijama antes de dormir.",
        "Я надеваю пижаму перед сном."
      ],
      [
        "Este pijama es de algodón.",
        "Эта пижама из хлопка."
      ]
    ],
    "cloze": "Me pongo el ___ antes de dormir.",
    "clozeAnswers": [
      "pijama"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "underwear",
    "cat": "clothes",
    "word": "la ropa interior",
    "base": "ropa interior",
    "gender": "женский род",
    "tr": "нижнее бельё",
    "ru": [
      "нижнее бельё",
      "нижнее белье"
    ],
    "answers": [
      "ropa interior",
      "la ropa interior"
    ],
    "art": "underwear",
    "examples": [
      [
        "La ropa interior está en el cajón.",
        "Нижнее бельё находится в ящике."
      ],
      [
        "Compro ropa interior de algodón.",
        "Я покупаю хлопковое нижнее бельё."
      ]
    ],
    "cloze": "La ___ está en el cajón.",
    "clozeAnswers": [
      "ropa interior"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "socks",
    "cat": "clothes",
    "word": "los calcetines",
    "base": "calcetines",
    "gender": "мужской род, множественное число",
    "tr": "носки",
    "ru": [
      "носки"
    ],
    "answers": [
      "calcetines",
      "los calcetines"
    ],
    "art": "socks",
    "examples": [
      [
        "Necesito un par de calcetines.",
        "Мне нужна пара носков."
      ],
      [
        "Mis calcetines son verdes.",
        "Мои носки зелёные."
      ]
    ],
    "cloze": "Necesito un par de ___.",
    "clozeAnswers": [
      "calcetines"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "shoes",
    "cat": "shoes",
    "word": "los zapatos",
    "base": "zapatos",
    "gender": "мужской род, множественное число",
    "tr": "туфли, обувь",
    "ru": [
      "туфли",
      "обувь",
      "туфли обувь"
    ],
    "answers": [
      "zapatos",
      "los zapatos"
    ],
    "art": "shoes",
    "examples": [
      [
        "Estos zapatos me quedan pequeños.",
        "Эти туфли мне малы."
      ],
      [
        "Limpio mis zapatos cada semana.",
        "Я чищу свою обувь каждую неделю."
      ]
    ],
    "cloze": "Estos ___ me quedan pequeños.",
    "clozeAnswers": [
      "zapatos"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "sneakers",
    "cat": "shoes",
    "word": "las zapatillas deportivas",
    "base": "zapatillas deportivas",
    "gender": "женский род, множественное число",
    "tr": "кроссовки",
    "ru": [
      "кроссовки"
    ],
    "answers": [
      "zapatillas deportivas",
      "las zapatillas deportivas",
      "tenis",
      "los tenis"
    ],
    "art": "sneakers",
    "examples": [
      [
        "Corro con zapatillas deportivas.",
        "Я бегаю в кроссовках."
      ],
      [
        "Mis zapatillas deportivas son ligeras.",
        "Мои кроссовки лёгкие."
      ]
    ],
    "cloze": "Corro con ___.",
    "clozeAnswers": [
      "zapatillas deportivas",
      "tenis"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "boots",
    "cat": "shoes",
    "word": "las botas",
    "base": "botas",
    "gender": "женский род, множественное число",
    "tr": "сапоги, ботинки",
    "ru": [
      "сапоги",
      "ботинки",
      "сапоги ботинки"
    ],
    "answers": [
      "botas",
      "las botas"
    ],
    "art": "boots",
    "examples": [
      [
        "Llevo botas cuando llueve.",
        "Я ношу сапоги, когда идёт дождь."
      ],
      [
        "Las botas son de cuero.",
        "Сапоги сделаны из кожи."
      ]
    ],
    "cloze": "Llevo ___ cuando llueve.",
    "clozeAnswers": [
      "botas"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "ankleboots",
    "cat": "shoes",
    "word": "los botines",
    "base": "botines",
    "gender": "мужской род, множественное число",
    "tr": "ботильоны, короткие ботинки",
    "ru": [
      "ботильоны",
      "короткие ботинки",
      "ботильоны короткие ботинки"
    ],
    "answers": [
      "botines",
      "los botines"
    ],
    "art": "ankleboots",
    "examples": [
      [
        "Los botines combinan con el vestido.",
        "Ботильоны сочетаются с платьем."
      ],
      [
        "Estos botines tienen cremallera.",
        "У этих ботильонов есть молния."
      ]
    ],
    "cloze": "Los ___ combinan con el vestido.",
    "clozeAnswers": [
      "botines"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "sandals",
    "cat": "shoes",
    "word": "las sandalias",
    "base": "sandalias",
    "gender": "женский род, множественное число",
    "tr": "сандалии, босоножки",
    "ru": [
      "сандалии",
      "босоножки",
      "сандалии босоножки"
    ],
    "answers": [
      "sandalias",
      "las sandalias"
    ],
    "art": "sandals",
    "examples": [
      [
        "Llevo sandalias en la playa.",
        "На пляже я ношу сандалии."
      ],
      [
        "Estas sandalias son cómodas.",
        "Эти сандалии удобные."
      ]
    ],
    "cloze": "Llevo ___ en la playa.",
    "clozeAnswers": [
      "sandalias"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "heels",
    "cat": "shoes",
    "word": "los zapatos de tacón",
    "base": "zapatos de tacón",
    "gender": "мужской род, множественное число",
    "tr": "туфли на каблуке",
    "ru": [
      "туфли на каблуке"
    ],
    "answers": [
      "zapatos de tacón",
      "los zapatos de tacón",
      "tacones",
      "los tacones"
    ],
    "art": "heels",
    "examples": [
      [
        "Ella lleva zapatos de tacón.",
        "Она носит туфли на каблуке."
      ],
      [
        "Estos tacones son muy altos.",
        "Эти каблуки очень высокие."
      ]
    ],
    "cloze": "Ella lleva ___.",
    "clozeAnswers": [
      "zapatos de tacón",
      "tacones"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "slippers",
    "cat": "shoes",
    "word": "las zapatillas de casa",
    "base": "zapatillas de casa",
    "gender": "женский род, множественное число",
    "tr": "домашние тапочки",
    "ru": [
      "домашние тапочки",
      "тапочки"
    ],
    "answers": [
      "zapatillas de casa",
      "las zapatillas de casa"
    ],
    "art": "slippers",
    "examples": [
      [
        "Me pongo las zapatillas de casa.",
        "Я надеваю домашние тапочки."
      ],
      [
        "Las zapatillas están junto a la cama.",
        "Тапочки стоят рядом с кроватью."
      ]
    ],
    "cloze": "Me pongo las ___.",
    "clozeAnswers": [
      "zapatillas de casa"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "belt",
    "cat": "accessories",
    "word": "el cinturón",
    "base": "cinturón",
    "gender": "мужской род",
    "tr": "ремень",
    "ru": [
      "ремень"
    ],
    "answers": [
      "cinturón",
      "el cinturón"
    ],
    "art": "belt",
    "examples": [
      [
        "El cinturón es de cuero.",
        "Ремень сделан из кожи."
      ],
      [
        "Necesito un cinturón más largo.",
        "Мне нужен ремень подлиннее."
      ]
    ],
    "cloze": "El ___ es de cuero.",
    "clozeAnswers": [
      "cinturón"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "scarf",
    "cat": "accessories",
    "word": "la bufanda",
    "base": "bufanda",
    "gender": "женский род",
    "tr": "шарф",
    "ru": [
      "шарф"
    ],
    "answers": [
      "bufanda",
      "la bufanda"
    ],
    "art": "scarf",
    "examples": [
      [
        "Me pongo una bufanda roja.",
        "Я надеваю красный шарф."
      ],
      [
        "La bufanda es muy suave.",
        "Шарф очень мягкий."
      ]
    ],
    "cloze": "Me pongo una ___ roja.",
    "clozeAnswers": [
      "bufanda"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "gloves",
    "cat": "accessories",
    "word": "los guantes",
    "base": "guantes",
    "gender": "мужской род, множественное число",
    "tr": "перчатки",
    "ru": [
      "перчатки"
    ],
    "answers": [
      "guantes",
      "los guantes"
    ],
    "art": "gloves",
    "examples": [
      [
        "No encuentro mis guantes.",
        "Я не могу найти свои перчатки."
      ],
      [
        "Lleva guantes porque hace frío.",
        "Он носит перчатки, потому что холодно."
      ]
    ],
    "cloze": "No encuentro mis ___.",
    "clozeAnswers": [
      "guantes"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "sunglasses",
    "cat": "accessories",
    "word": "las gafas de sol",
    "base": "gafas de sol",
    "gender": "женский род, множественное число",
    "tr": "солнцезащитные очки",
    "ru": [
      "солнцезащитные очки",
      "солнечные очки"
    ],
    "answers": [
      "gafas de sol",
      "las gafas de sol"
    ],
    "art": "sunglasses",
    "examples": [
      [
        "Necesito gafas de sol.",
        "Мне нужны солнцезащитные очки."
      ],
      [
        "Tus gafas de sol están en la mesa.",
        "Твои солнцезащитные очки лежат на столе."
      ]
    ],
    "cloze": "Necesito ___.",
    "clozeAnswers": [
      "gafas de sol"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "umbrella",
    "cat": "accessories",
    "word": "el paraguas",
    "base": "paraguas",
    "gender": "мужской род",
    "tr": "зонт",
    "ru": [
      "зонт"
    ],
    "answers": [
      "paraguas",
      "el paraguas"
    ],
    "art": "umbrella",
    "examples": [
      [
        "Lleva un paraguas, va a llover.",
        "Возьми зонт, будет дождь."
      ],
      [
        "Mi paraguas es amarillo.",
        "Мой зонт жёлтый."
      ]
    ],
    "cloze": "Lleva un ___, va a llover.",
    "clozeAnswers": [
      "paraguas"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "tie",
    "cat": "accessories",
    "word": "la corbata",
    "base": "corbata",
    "gender": "женский род",
    "tr": "галстук",
    "ru": [
      "галстук"
    ],
    "answers": [
      "corbata",
      "la corbata"
    ],
    "art": "tie",
    "examples": [
      [
        "La corbata combina con la camisa.",
        "Галстук сочетается с рубашкой."
      ],
      [
        "No llevo corbata al trabajo.",
        "Я не ношу галстук на работу."
      ]
    ],
    "cloze": "La ___ combina con la camisa.",
    "clozeAnswers": [
      "corbata"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "bowtie",
    "cat": "accessories",
    "word": "la pajarita",
    "base": "pajarita",
    "gender": "женский род",
    "tr": "галстук-бабочка",
    "ru": [
      "галстук-бабочка",
      "бабочка"
    ],
    "answers": [
      "pajarita",
      "la pajarita"
    ],
    "art": "bowtie",
    "examples": [
      [
        "Lleva una pajarita negra.",
        "На нём чёрный галстук-бабочка."
      ],
      [
        "La pajarita es para la boda.",
        "Галстук-бабочка — для свадьбы."
      ]
    ],
    "cloze": "Lleva una ___ negra.",
    "clozeAnswers": [
      "pajarita"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "handkerchief",
    "cat": "accessories",
    "word": "el pañuelo",
    "base": "pañuelo",
    "gender": "мужской род",
    "tr": "платок",
    "ru": [
      "платок"
    ],
    "answers": [
      "pañuelo",
      "el pañuelo"
    ],
    "art": "handkerchief",
    "examples": [
      [
        "Lleva un pañuelo en el cuello.",
        "На ней платок на шее."
      ],
      [
        "El pañuelo tiene flores.",
        "На платке цветочный узор."
      ]
    ],
    "cloze": "Lleva un ___ en el cuello.",
    "clozeAnswers": [
      "pañuelo"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "necklace",
    "cat": "jewelry",
    "word": "el collar",
    "base": "collar",
    "gender": "мужской род",
    "tr": "ожерелье, колье",
    "ru": [
      "ожерелье",
      "колье",
      "ожерелье колье"
    ],
    "answers": [
      "collar",
      "el collar"
    ],
    "art": "necklace",
    "examples": [
      [
        "El collar es de plata.",
        "Ожерелье сделано из серебра."
      ],
      [
        "Este collar es un regalo.",
        "Это ожерелье — подарок."
      ]
    ],
    "cloze": "El ___ es de plata.",
    "clozeAnswers": [
      "collar"
    ],
    "meta": {
      "categoryTitle": "Украшения",
      "categoryOrder": 4,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "bracelet",
    "cat": "jewelry",
    "word": "la pulsera",
    "base": "pulsera",
    "gender": "женский род",
    "tr": "браслет",
    "ru": [
      "браслет"
    ],
    "answers": [
      "pulsera",
      "la pulsera"
    ],
    "art": "bracelet",
    "examples": [
      [
        "Llevo una pulsera dorada.",
        "Я ношу золотистый браслет."
      ],
      [
        "La pulsera tiene pequeñas piedras.",
        "На браслете есть маленькие камни."
      ]
    ],
    "cloze": "Llevo una ___ dorada.",
    "clozeAnswers": [
      "pulsera"
    ],
    "meta": {
      "categoryTitle": "Украшения",
      "categoryOrder": 4,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "ring",
    "cat": "jewelry",
    "word": "el anillo",
    "base": "anillo",
    "gender": "мужской род",
    "tr": "кольцо",
    "ru": [
      "кольцо"
    ],
    "answers": [
      "anillo",
      "el anillo"
    ],
    "art": "ring",
    "examples": [
      [
        "El anillo está en la caja.",
        "Кольцо находится в коробке."
      ],
      [
        "Este anillo me queda grande.",
        "Это кольцо мне велико."
      ]
    ],
    "cloze": "El ___ está en la caja.",
    "clozeAnswers": [
      "anillo"
    ],
    "meta": {
      "categoryTitle": "Украшения",
      "categoryOrder": 4,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "earrings",
    "cat": "jewelry",
    "word": "los pendientes",
    "base": "pendientes",
    "gender": "мужской род, множественное число",
    "tr": "серьги",
    "ru": [
      "серьги"
    ],
    "answers": [
      "pendientes",
      "los pendientes"
    ],
    "art": "earrings",
    "examples": [
      [
        "Lleva unos pendientes pequeños.",
        "Она носит маленькие серьги."
      ],
      [
        "Los pendientes son de oro.",
        "Серьги сделаны из золота."
      ]
    ],
    "cloze": "Lleva unos ___ pequeños.",
    "clozeAnswers": [
      "pendientes"
    ],
    "meta": {
      "categoryTitle": "Украшения",
      "categoryOrder": 4,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "watch",
    "cat": "jewelry",
    "word": "el reloj",
    "base": "reloj",
    "gender": "мужской род",
    "tr": "наручные часы",
    "ru": [
      "наручные часы",
      "часы"
    ],
    "answers": [
      "reloj",
      "el reloj"
    ],
    "art": "watch",
    "examples": [
      [
        "Miro la hora en mi reloj.",
        "Я смотрю время на своих часах."
      ],
      [
        "Su reloj tiene una correa marrón.",
        "У его часов коричневый ремешок."
      ]
    ],
    "cloze": "Miro la hora en mi ___.",
    "clozeAnswers": [
      "reloj"
    ],
    "meta": {
      "categoryTitle": "Украшения",
      "categoryOrder": 4,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "brooch",
    "cat": "jewelry",
    "word": "el broche",
    "base": "broche",
    "gender": "мужской род",
    "tr": "брошь",
    "ru": [
      "брошь"
    ],
    "answers": [
      "broche",
      "el broche"
    ],
    "art": "brooch",
    "examples": [
      [
        "El broche tiene forma de flor.",
        "Брошь имеет форму цветка."
      ],
      [
        "Pone el broche en la chaqueta.",
        "Она прикалывает брошь к пиджаку."
      ]
    ],
    "cloze": "El ___ tiene forma de flor.",
    "clozeAnswers": [
      "broche"
    ],
    "meta": {
      "categoryTitle": "Украшения",
      "categoryOrder": 4,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "chain",
    "cat": "jewelry",
    "word": "la cadena",
    "base": "cadena",
    "gender": "женский род",
    "tr": "цепочка",
    "ru": [
      "цепочка",
      "цепь"
    ],
    "answers": [
      "cadena",
      "la cadena"
    ],
    "art": "chain",
    "examples": [
      [
        "La cadena es muy fina.",
        "Цепочка очень тонкая."
      ],
      [
        "Lleva una cadena de oro.",
        "Он носит золотую цепочку."
      ]
    ],
    "cloze": "La ___ es muy fina.",
    "clozeAnswers": [
      "cadena"
    ],
    "meta": {
      "categoryTitle": "Украшения",
      "categoryOrder": 4,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "hat",
    "cat": "headwear",
    "word": "el sombrero",
    "base": "sombrero",
    "gender": "мужской род",
    "tr": "шляпа",
    "ru": [
      "шляпа"
    ],
    "answers": [
      "sombrero",
      "el sombrero"
    ],
    "art": "hat",
    "examples": [
      [
        "El sombrero protege del sol.",
        "Шляпа защищает от солнца."
      ],
      [
        "Lleva un sombrero de paja.",
        "На нём соломенная шляпа."
      ]
    ],
    "cloze": "El ___ protege del sol.",
    "clozeAnswers": [
      "sombrero"
    ],
    "meta": {
      "categoryTitle": "Головные уборы",
      "categoryOrder": 5,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "cap",
    "cat": "headwear",
    "word": "la gorra",
    "base": "gorra",
    "gender": "женский род",
    "tr": "кепка, бейсболка",
    "ru": [
      "кепка",
      "бейсболка",
      "кепка бейсболка"
    ],
    "answers": [
      "gorra",
      "la gorra"
    ],
    "art": "cap",
    "examples": [
      [
        "Me pongo una gorra para correr.",
        "Я надеваю кепку для пробежки."
      ],
      [
        "La gorra tiene una visera larga.",
        "У кепки длинный козырёк."
      ]
    ],
    "cloze": "Me pongo una ___ para correr.",
    "clozeAnswers": [
      "gorra"
    ],
    "meta": {
      "categoryTitle": "Головные уборы",
      "categoryOrder": 5,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "beanie",
    "cat": "headwear",
    "word": "el gorro",
    "base": "gorro",
    "gender": "мужской род",
    "tr": "шапка",
    "ru": [
      "шапка"
    ],
    "answers": [
      "gorro",
      "el gorro"
    ],
    "art": "beanie",
    "examples": [
      [
        "Ponte el gorro, hace frío.",
        "Надень шапку, холодно."
      ],
      [
        "Mi gorro es de lana.",
        "Моя шапка шерстяная."
      ]
    ],
    "cloze": "Ponte el ___, hace frío.",
    "clozeAnswers": [
      "gorro"
    ],
    "meta": {
      "categoryTitle": "Головные уборы",
      "categoryOrder": 5,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "beret",
    "cat": "headwear",
    "word": "la boina",
    "base": "boina",
    "gender": "женский род",
    "tr": "берет",
    "ru": [
      "берет"
    ],
    "answers": [
      "boina",
      "la boina"
    ],
    "art": "beret",
    "examples": [
      [
        "La boina es de color rojo.",
        "Берет красного цвета."
      ],
      [
        "Lleva la boina un poco inclinada.",
        "Она носит берет немного набок."
      ]
    ],
    "cloze": "La ___ es de color rojo.",
    "clozeAnswers": [
      "boina"
    ],
    "meta": {
      "categoryTitle": "Головные уборы",
      "categoryOrder": 5,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "hood",
    "cat": "headwear",
    "word": "la capucha",
    "base": "capucha",
    "gender": "женский род",
    "tr": "капюшон",
    "ru": [
      "капюшон"
    ],
    "answers": [
      "capucha",
      "la capucha"
    ],
    "art": "hood",
    "examples": [
      [
        "Sube la capucha porque llueve.",
        "Подними капюшон, потому что идёт дождь."
      ],
      [
        "La chaqueta tiene capucha.",
        "У куртки есть капюшон."
      ]
    ],
    "cloze": "Sube la ___ porque llueve.",
    "clozeAnswers": [
      "capucha"
    ],
    "meta": {
      "categoryTitle": "Головные уборы",
      "categoryOrder": 5,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "handbag",
    "cat": "bags",
    "word": "el bolso",
    "base": "bolso",
    "gender": "мужской род",
    "tr": "сумка",
    "ru": [
      "сумка",
      "женская сумка"
    ],
    "answers": [
      "bolso",
      "el bolso"
    ],
    "art": "handbag",
    "examples": [
      [
        "El móvil está en mi bolso.",
        "Телефон находится в моей сумке."
      ],
      [
        "Este bolso tiene una correa larga.",
        "У этой сумки длинный ремешок."
      ]
    ],
    "cloze": "El móvil está en mi ___.",
    "clozeAnswers": [
      "bolso"
    ],
    "meta": {
      "categoryTitle": "Сумки",
      "categoryOrder": 6,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "backpack",
    "cat": "bags",
    "word": "la mochila",
    "base": "mochila",
    "gender": "женский род",
    "tr": "рюкзак",
    "ru": [
      "рюкзак"
    ],
    "answers": [
      "mochila",
      "la mochila"
    ],
    "art": "backpack",
    "examples": [
      [
        "Llevo el portátil en la mochila.",
        "Я ношу ноутбук в рюкзаке."
      ],
      [
        "La mochila es muy ligera.",
        "Рюкзак очень лёгкий."
      ]
    ],
    "cloze": "Llevo el portátil en la ___.",
    "clozeAnswers": [
      "mochila"
    ],
    "meta": {
      "categoryTitle": "Сумки",
      "categoryOrder": 6,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "wallet",
    "cat": "bags",
    "word": "la cartera",
    "base": "cartera",
    "gender": "женский род",
    "tr": "кошелёк, портмоне",
    "ru": [
      "кошелёк",
      "кошелек",
      "портмоне",
      "кошелёк портмоне"
    ],
    "answers": [
      "cartera",
      "la cartera"
    ],
    "art": "wallet",
    "examples": [
      [
        "Guardo las tarjetas en la cartera.",
        "Я храню карты в кошельке."
      ],
      [
        "No encuentro mi cartera.",
        "Я не могу найти свой кошелёк."
      ]
    ],
    "cloze": "Guardo las tarjetas en la ___.",
    "clozeAnswers": [
      "cartera"
    ],
    "meta": {
      "categoryTitle": "Сумки",
      "categoryOrder": 6,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "coinpurse",
    "cat": "bags",
    "word": "el monedero",
    "base": "monedero",
    "gender": "мужской род",
    "tr": "кошелёк для мелочи",
    "ru": [
      "кошелёк для мелочи",
      "кошелек для мелочи",
      "монетница"
    ],
    "answers": [
      "monedero",
      "el monedero"
    ],
    "art": "coinpurse",
    "examples": [
      [
        "Las monedas están en el monedero.",
        "Монеты находятся в кошельке."
      ],
      [
        "El monedero es pequeño.",
        "Кошелёк для мелочи маленький."
      ]
    ],
    "cloze": "Las monedas están en el ___.",
    "clozeAnswers": [
      "monedero"
    ],
    "meta": {
      "categoryTitle": "Сумки",
      "categoryOrder": 6,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "suitcase",
    "cat": "bags",
    "word": "la maleta",
    "base": "maleta",
    "gender": "женский род",
    "tr": "чемодан",
    "ru": [
      "чемодан"
    ],
    "answers": [
      "maleta",
      "la maleta"
    ],
    "art": "suitcase",
    "examples": [
      [
        "Preparo la maleta para el viaje.",
        "Я собираю чемодан для поездки."
      ],
      [
        "La maleta pesa mucho.",
        "Чемодан много весит."
      ]
    ],
    "cloze": "Preparo la ___ para el viaje.",
    "clozeAnswers": [
      "maleta"
    ],
    "meta": {
      "categoryTitle": "Сумки",
      "categoryOrder": 6,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "waistbag",
    "cat": "bags",
    "word": "la riñonera",
    "base": "riñonera",
    "gender": "женский род",
    "tr": "поясная сумка",
    "ru": [
      "поясная сумка"
    ],
    "answers": [
      "riñonera",
      "la riñonera"
    ],
    "art": "waistbag",
    "examples": [
      [
        "Guardo las llaves en la riñonera.",
        "Я храню ключи в поясной сумке."
      ],
      [
        "La riñonera es práctica para caminar.",
        "Поясная сумка удобна для прогулок."
      ]
    ],
    "cloze": "Guardo las llaves en la ___.",
    "clozeAnswers": [
      "riñonera"
    ],
    "meta": {
      "categoryTitle": "Сумки",
      "categoryOrder": 6,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "size",
    "cat": "tryon",
    "word": "la talla",
    "base": "talla",
    "gender": "женский род",
    "tr": "размер одежды",
    "ru": [
      "размер одежды",
      "размер"
    ],
    "answers": [
      "talla",
      "la talla"
    ],
    "art": "size",
    "examples": [
      [
        "¿Qué talla necesitas? — Necesito una talla M.",
        "Какой размер тебе нужен? — Мне нужен размер M."
      ],
      [
        "¿Qué talla usas normalmente?",
        "Какой размер ты обычно носишь?"
      ]
    ],
    "cloze": "¿Qué ___ necesitas? — Necesito una talla M.",
    "clozeAnswers": [
      "talla"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "fittingroom",
    "cat": "store",
    "word": "el probador",
    "base": "probador",
    "gender": "мужской род",
    "tr": "примерочная",
    "ru": [
      "примерочная"
    ],
    "answers": [
      "probador",
      "el probador",
      "probadores",
      "los probadores"
    ],
    "art": "fittingroom",
    "examples": [
      [
        "¿Dónde están los probadores?",
        "Где находятся примерочные?"
      ],
      [
        "El probador está al fondo de la tienda.",
        "Примерочная находится в глубине магазина."
      ]
    ],
    "cloze": "¿Dónde están los ___?",
    "clozeAnswers": [
      "probadores"
    ],
    "meta": {
      "categoryTitle": "В магазине",
      "categoryOrder": 8,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "bra",
    "cat": "clothes",
    "word": "el sujetador",
    "base": "sujetador",
    "gender": "мужской род",
    "tr": "бюстгальтер",
    "ru": [
      "бюстгальтер",
      "лифчик"
    ],
    "answers": [
      "sujetador",
      "el sujetador"
    ],
    "art": "bra",
    "examples": [
      [
        "Necesito un sujetador cómodo.",
        "Мне нужен удобный бюстгальтер."
      ],
      [
        "Este sujetador me queda bien.",
        "Этот бюстгальтер мне хорошо подходит."
      ]
    ],
    "cloze": "Necesito un ___ cómodo.",
    "clozeAnswers": [
      "sujetador"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "tights",
    "cat": "clothes",
    "word": "las medias",
    "base": "medias",
    "gender": "женский род, множественное число",
    "tr": "колготки / чулки",
    "ru": [
      "колготки",
      "чулки"
    ],
    "answers": [
      "medias",
      "las medias"
    ],
    "art": "",
    "examples": [
      [
        "Lleva medias negras con el vestido.",
        "Она носит чёрные колготки с платьем."
      ],
      [
        "Necesito unas medias para este vestido.",
        "Мне нужны колготки к этому платью."
      ]
    ],
    "cloze": "Lleva ___ negras con el vestido.",
    "clozeAnswers": [
      "medias"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "leggings",
    "cat": "clothes",
    "word": "los leggings / las mallas",
    "base": "leggings / mallas",
    "gender": "множественное число",
    "tr": "легинсы",
    "ru": [
      "легинсы"
    ],
    "answers": [
      "leggings",
      "los leggings",
      "mallas",
      "las mallas"
    ],
    "art": "",
    "examples": [
      [
        "Me pongo unos leggings para entrenar.",
        "Я надеваю легинсы для тренировки."
      ],
      [
        "Las mallas son cómodas para hacer deporte.",
        "Легинсы удобны для занятий спортом."
      ]
    ],
    "cloze": "Me pongo unos ___ para entrenar.",
    "clozeAnswers": [
      "leggings",
      "mallas"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "tracksuit",
    "cat": "clothes",
    "word": "el chándal",
    "base": "chándal",
    "gender": "мужской род",
    "tr": "спортивный костюм",
    "ru": [
      "спортивный костюм"
    ],
    "answers": [
      "chándal",
      "chandal",
      "el chándal",
      "el chandal"
    ],
    "art": "",
    "examples": [
      [
        "Llevo un chándal cuando hago deporte.",
        "Я ношу спортивный костюм, когда занимаюсь спортом."
      ],
      [
        "Este chándal es muy cómodo.",
        "Этот спортивный костюм очень удобный."
      ]
    ],
    "cloze": "Llevo un ___ cuando hago deporte.",
    "clozeAnswers": [
      "chándal",
      "chandal"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "swimsuit",
    "cat": "clothes",
    "word": "el bañador",
    "base": "bañador",
    "gender": "мужской род",
    "tr": "купальник / плавки",
    "ru": [
      "купальник",
      "плавки"
    ],
    "answers": [
      "bañador",
      "el bañador"
    ],
    "art": "",
    "examples": [
      [
        "He metido el bañador en la maleta.",
        "Я положил(а) купальник в чемодан."
      ],
      [
        "Necesito un bañador para la piscina.",
        "Мне нужен купальник для бассейна."
      ]
    ],
    "cloze": "He metido el ___ en la maleta.",
    "clozeAnswers": [
      "bañador"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "raincoat",
    "cat": "clothes",
    "word": "el impermeable",
    "base": "impermeable",
    "gender": "мужской род",
    "tr": "дождевик",
    "ru": [
      "дождевик"
    ],
    "answers": [
      "impermeable",
      "el impermeable"
    ],
    "art": "",
    "examples": [
      [
        "Ponte el impermeable porque está lloviendo.",
        "Надень дождевик, потому что идёт дождь."
      ],
      [
        "Mi impermeable es ligero y cómodo.",
        "Мой дождевик лёгкий и удобный."
      ]
    ],
    "cloze": "Ponte el ___ porque está lloviendo.",
    "clozeAnswers": [
      "impermeable"
    ],
    "meta": {
      "categoryTitle": "Одежда",
      "categoryOrder": 1,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "flipflops",
    "cat": "shoes",
    "word": "las chanclas",
    "base": "chanclas",
    "gender": "женский род, множественное число",
    "tr": "шлёпанцы",
    "ru": [
      "шлёпанцы",
      "сланцы"
    ],
    "answers": [
      "chanclas",
      "las chanclas"
    ],
    "art": "",
    "examples": [
      [
        "Llevo chanclas en la playa.",
        "Я ношу шлёпанцы на пляже."
      ],
      [
        "Las chanclas están junto a la piscina.",
        "Шлёпанцы лежат рядом с бассейном."
      ]
    ],
    "cloze": "Llevo ___ en la playa.",
    "clozeAnswers": [
      "chanclas"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "rainboots",
    "cat": "shoes",
    "word": "las botas de agua",
    "base": "botas de agua",
    "gender": "женский род, множественное число",
    "tr": "резиновые сапоги",
    "ru": [
      "резиновые сапоги"
    ],
    "answers": [
      "botas de agua",
      "las botas de agua"
    ],
    "art": "",
    "examples": [
      [
        "Necesito botas de agua para la lluvia.",
        "Мне нужны резиновые сапоги для дождя."
      ],
      [
        "Los niños llevan botas de agua.",
        "Дети носят резиновые сапоги."
      ]
    ],
    "cloze": "Necesito ___ para la lluvia.",
    "clozeAnswers": [
      "botas de agua"
    ],
    "meta": {
      "categoryTitle": "Обувь",
      "categoryOrder": 2,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "zipper",
    "cat": "accessories",
    "word": "la cremallera",
    "base": "cremallera",
    "gender": "женский род",
    "tr": "молния",
    "ru": [
      "молния"
    ],
    "answers": [
      "cremallera",
      "la cremallera"
    ],
    "art": "zipper",
    "examples": [
      [
        "La cremallera de la chaqueta está rota.",
        "Молния на куртке сломана."
      ],
      [
        "Sube la cremallera del abrigo.",
        "Застегни молнию на пальто."
      ]
    ],
    "cloze": "La ___ de la chaqueta está rota.",
    "clozeAnswers": [
      "cremallera"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "button",
    "cat": "accessories",
    "word": "el botón",
    "base": "botón",
    "gender": "мужской род",
    "tr": "пуговица",
    "ru": [
      "пуговица"
    ],
    "answers": [
      "botón",
      "boton",
      "el botón",
      "el boton"
    ],
    "art": "button",
    "examples": [
      [
        "Falta un botón en la camisa.",
        "На рубашке не хватает пуговицы."
      ],
      [
        "Este botón está suelto.",
        "Эта пуговица плохо держится."
      ]
    ],
    "cloze": "Falta un ___ en la camisa.",
    "clozeAnswers": [
      "botón",
      "boton"
    ],
    "meta": {
      "categoryTitle": "Аксессуары",
      "categoryOrder": 3,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "try_on",
    "cat": "tryon",
    "word": "probarse algo",
    "base": "probarse algo",
    "gender": "фраза / возвратный глагол",
    "tr": "примерять что-либо",
    "ru": [
      "примерять что-либо",
      "примерять"
    ],
    "answers": [
      "probarse algo",
      "probarse"
    ],
    "art": "try_on",
    "examples": [
      [
        "Quiero probarme esta chaqueta.",
        "Я хочу примерить эту куртку."
      ],
      [
        "¿Puedo probarme estos zapatos?",
        "Можно мне примерить эти туфли?"
      ]
    ],
    "cloze": "Quiero ___ esta chaqueta.",
    "clozeAnswers": [
      "probarme"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "put_on",
    "cat": "tryon",
    "word": "ponerse algo",
    "base": "ponerse algo",
    "gender": "фраза / возвратный глагол",
    "tr": "надевать что-либо",
    "ru": [
      "надевать что-либо",
      "надевать"
    ],
    "answers": [
      "ponerse algo",
      "ponerse"
    ],
    "art": "put_on",
    "examples": [
      [
        "Me pongo el abrigo antes de salir.",
        "Я надеваю пальто перед выходом."
      ],
      [
        "Ponte la bufanda, hace frío.",
        "Надень шарф, холодно."
      ]
    ],
    "cloze": "Me ___ el abrigo antes de salir.",
    "clozeAnswers": [
      "pongo"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "take_off",
    "cat": "tryon",
    "word": "quitarse algo",
    "base": "quitarse algo",
    "gender": "фраза / возвратный глагол",
    "tr": "снимать что-либо",
    "ru": [
      "снимать что-либо",
      "снимать"
    ],
    "answers": [
      "quitarse algo",
      "quitarse"
    ],
    "art": "take_off",
    "examples": [
      [
        "Me quito los zapatos al llegar a casa.",
        "Я снимаю обувь, когда прихожу домой."
      ],
      [
        "Se quita el abrigo en casa.",
        "Она снимает пальто дома."
      ]
    ],
    "cloze": "Me ___ los zapatos al llegar a casa.",
    "clozeAnswers": [
      "quito"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "change_clothes",
    "cat": "tryon",
    "word": "cambiarse de ropa",
    "base": "cambiarse de ropa",
    "gender": "фраза / возвратный глагол",
    "tr": "переодеваться",
    "ru": [
      "переодеваться"
    ],
    "answers": [
      "cambiarse de ropa",
      "cambiarse"
    ],
    "art": "change_clothes",
    "examples": [
      [
        "Voy a cambiarme de ropa.",
        "Я собираюсь переодеться."
      ],
      [
        "Me cambio de ropa después del trabajo.",
        "Я переодеваюсь после работы."
      ]
    ],
    "cloze": "Voy a ___ de ropa.",
    "clozeAnswers": [
      "cambiarme"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "fasten",
    "cat": "tryon",
    "word": "abrocharse",
    "base": "abrocharse",
    "gender": "возвратный глагол",
    "tr": "застёгиваться",
    "ru": [
      "застёгиваться",
      "застегиваться"
    ],
    "answers": [
      "abrocharse"
    ],
    "art": "fasten",
    "examples": [
      [
        "Me abrocho la chaqueta.",
        "Я застёгиваю куртку."
      ],
      [
        "Abróchate el cinturón.",
        "Застегни ремень."
      ]
    ],
    "cloze": "Me ___ la chaqueta.",
    "clozeAnswers": [
      "abrocho"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "unfasten",
    "cat": "tryon",
    "word": "desabrocharse",
    "base": "desabrocharse",
    "gender": "возвратный глагол",
    "tr": "расстёгиваться",
    "ru": [
      "расстёгиваться",
      "расстегиваться"
    ],
    "answers": [
      "desabrocharse"
    ],
    "art": "unfasten",
    "examples": [
      [
        "Se desabrocha el abrigo.",
        "Он расстёгивает пальто."
      ],
      [
        "Me desabrocho la chaqueta al entrar.",
        "Я расстёгиваю куртку, когда захожу внутрь."
      ]
    ],
    "cloze": "Se ___ el abrigo.",
    "clozeAnswers": [
      "desabrocha"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "fits_well",
    "cat": "tryon",
    "word": "me queda bien",
    "base": "me queda bien",
    "gender": "фраза",
    "tr": "мне хорошо сидит / подходит",
    "ru": [
      "мне хорошо сидит",
      "мне подходит"
    ],
    "answers": [
      "me queda bien"
    ],
    "art": "fits_well",
    "examples": [
      [
        "Esta camisa me queda bien.",
        "Эта рубашка мне хорошо сидит."
      ],
      [
        "El vestido te queda muy bien.",
        "Платье тебе очень идёт."
      ]
    ],
    "cloze": "Esta camisa me ___ bien.",
    "clozeAnswers": [
      "queda"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "too_big",
    "cat": "tryon",
    "word": "me queda grande",
    "base": "me queda grande",
    "gender": "фраза",
    "tr": "мне велико",
    "ru": [
      "мне велико",
      "велико"
    ],
    "answers": [
      "me queda grande"
    ],
    "art": "too_big",
    "examples": [
      [
        "Este jersey me queda grande.",
        "Этот свитер мне велик."
      ],
      [
        "La chaqueta me queda un poco grande.",
        "Куртка мне немного велика."
      ]
    ],
    "cloze": "Este jersey me queda ___.",
    "clozeAnswers": [
      "grande"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "too_small",
    "cat": "tryon",
    "word": "me queda pequeño",
    "base": "me queda pequeño",
    "gender": "фраза",
    "tr": "мне мало",
    "ru": [
      "мне мало",
      "мало"
    ],
    "answers": [
      "me queda pequeño",
      "me queda pequeña"
    ],
    "art": "too_small",
    "examples": [
      [
        "El vestido me queda pequeño.",
        "Платье мне мало."
      ],
      [
        "Esta camiseta me queda pequeña.",
        "Эта футболка мне мала."
      ]
    ],
    "cloze": "El vestido me queda ___.",
    "clozeAnswers": [
      "pequeño"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "too_tight",
    "cat": "tryon",
    "word": "me aprieta",
    "base": "me aprieta",
    "gender": "фраза",
    "tr": "мне жмёт",
    "ru": [
      "мне жмёт",
      "жмёт",
      "жмет"
    ],
    "answers": [
      "me aprieta",
      "me aprietan"
    ],
    "art": "too_tight",
    "examples": [
      [
        "Estos zapatos me aprietan.",
        "Эти туфли мне жмут."
      ],
      [
        "El cinturón me aprieta un poco.",
        "Ремень мне немного жмёт."
      ]
    ],
    "cloze": "Estos zapatos me ___.",
    "clozeAnswers": [
      "aprietan"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "length_fit",
    "cat": "tryon",
    "word": "me está largo / corto",
    "base": "me está largo / corto",
    "gender": "фраза",
    "tr": "мне длинно / коротко",
    "ru": [
      "мне длинно",
      "мне коротко"
    ],
    "answers": [
      "me está largo",
      "me esta largo",
      "me está corto",
      "me esta corto"
    ],
    "art": "length_fit",
    "examples": [
      [
        "Este pantalón me está un poco largo.",
        "Эти брюки мне немного длинноваты."
      ],
      [
        "La falda me está demasiado corta.",
        "Юбка мне слишком коротка."
      ]
    ],
    "cloze": "Este pantalón me está un poco ___.",
    "clozeAnswers": [
      "largo"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "match_with",
    "cat": "tryon",
    "word": "combinar con",
    "base": "combinar con",
    "gender": "фраза / глагол",
    "tr": "сочетаться с",
    "ru": [
      "сочетаться с",
      "сочетаться"
    ],
    "answers": [
      "combinar con"
    ],
    "art": "match_with",
    "examples": [
      [
        "La camisa combina con estos pantalones.",
        "Рубашка сочетается с этими брюками."
      ],
      [
        "¿Esta bufanda combina con el abrigo?",
        "Этот шарф сочетается с пальто?"
      ]
    ],
    "cloze": "La camisa ___ con estos pantalones.",
    "clozeAnswers": [
      "combina"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "on_sale",
    "cat": "tryon",
    "word": "estar de oferta",
    "base": "estar de oferta",
    "gender": "фраза",
    "tr": "быть на распродаже / по акции",
    "ru": [
      "быть на распродаже",
      "быть по акции"
    ],
    "answers": [
      "estar de oferta"
    ],
    "art": "on_sale",
    "examples": [
      [
        "Esta chaqueta está de oferta.",
        "Эта куртка сейчас по акции."
      ],
      [
        "Los zapatos están de oferta esta semana.",
        "Туфли на распродаже на этой неделе."
      ]
    ],
    "cloze": "Esta chaqueta está de ___.",
    "clozeAnswers": [
      "oferta"
    ],
    "meta": {
      "categoryTitle": "Примерка и размер",
      "categoryOrder": 7,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "another_size",
    "cat": "store",
    "word": "¿Tiene otra talla?",
    "base": "¿Tiene otra talla?",
    "gender": "фраза",
    "tr": "У вас есть другой размер?",
    "ru": [
      "у вас есть другой размер",
      "есть другой размер"
    ],
    "answers": [
      "¿Tiene otra talla?",
      "Tiene otra talla?"
    ],
    "art": "another_size",
    "examples": [
      [
        "¿Tiene esta camisa en otra talla?",
        "У вас есть эта рубашка в другом размере?"
      ],
      [
        "¿Tiene otra talla? Esta me queda pequeña.",
        "У вас есть другой размер? Этот мне мал."
      ]
    ],
    "cloze": "¿Tiene esta camisa en otra ___?",
    "clozeAnswers": [
      "talla"
    ],
    "meta": {
      "categoryTitle": "В магазине",
      "categoryOrder": 8,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "can_try_it",
    "cat": "store",
    "word": "¿Puedo probármelo?",
    "base": "¿Puedo probármelo?",
    "gender": "фраза",
    "tr": "Можно это примерить?",
    "ru": [
      "можно это примерить",
      "могу я это примерить"
    ],
    "answers": [
      "¿Puedo probármelo?",
      "Puedo probármelo?",
      "¿Puedo probarmelo?",
      "Puedo probarmelo?"
    ],
    "art": "can_try_it",
    "examples": [
      [
        "Me gusta este abrigo. ¿Puedo probármelo?",
        "Мне нравится это пальто. Можно его примерить?"
      ],
      [
        "¿Puedo probármelo antes de comprarlo?",
        "Можно примерить это перед покупкой?"
      ]
    ],
    "cloze": "Me gusta este abrigo. ¿Puedo ___?",
    "clozeAnswers": [
      "probármelo",
      "probarmelo"
    ],
    "meta": {
      "categoryTitle": "В магазине",
      "categoryOrder": 8,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "where_fittingrooms",
    "cat": "store",
    "word": "¿Dónde están los probadores?",
    "base": "¿Dónde están los probadores?",
    "gender": "фраза",
    "tr": "Где примерочные?",
    "ru": [
      "где примерочные",
      "где находятся примерочные"
    ],
    "answers": [
      "¿Dónde están los probadores?",
      "Donde estan los probadores?",
      "Dónde están los probadores?"
    ],
    "art": "where_fittingrooms",
    "examples": [
      [
        "¿Dónde están los probadores?",
        "Где находятся примерочные?"
      ],
      [
        "Los probadores están al fondo, a la derecha.",
        "Примерочные находятся в глубине магазина, справа."
      ]
    ],
    "cloze": "¿Dónde están los ___?",
    "clozeAnswers": [
      "probadores"
    ],
    "meta": {
      "categoryTitle": "В магазине",
      "categoryOrder": 8,
      "allCategoryTitle": "Все слова"
    }
  },
  {
    "id": "take_it",
    "cat": "store",
    "word": "Me lo llevo.",
    "base": "Me lo llevo.",
    "gender": "фраза",
    "tr": "Я это беру.",
    "ru": [
      "я это беру",
      "беру"
    ],
    "answers": [
      "Me lo llevo.",
      "Me lo llevo"
    ],
    "art": "take_it",
    "examples": [
      [
        "Me queda perfecto. Me lo llevo.",
        "Сидит идеально. Я это беру."
      ],
      [
        "Gracias, me lo llevo.",
        "Спасибо, я это беру."
      ]
    ],
    "cloze": "Me queda perfecto. Me lo ___.",
    "clozeAnswers": [
      "llevo"
    ],
    "meta": {
      "categoryTitle": "В магазине",
      "categoryOrder": 8,
      "allCategoryTitle": "Все слова"
    }
  }
];

const EXERCISES = [
  {
    "id": "clothes_tshirt_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: футболка.",
    "a": [
      "camiseta",
      "la camiseta"
    ],
    "e": "Базовая форма: la camiseta."
  },
  {
    "id": "clothes_tshirt_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la camiseta.",
    "a": [
      "футболка"
    ],
    "e": "la camiseta — футболка."
  },
  {
    "id": "clothes_tshirt_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На мне белая футболка.»: Llevo una ___ blanca.",
    "a": [
      "camiseta"
    ],
    "e": "Llevo una camiseta blanca. — На мне белая футболка."
  },
  {
    "id": "clothes_shirt_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: рубашка.",
    "a": [
      "camisa",
      "la camisa"
    ],
    "e": "Базовая форма: la camisa."
  },
  {
    "id": "clothes_shirt_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la camisa.",
    "a": [
      "рубашка"
    ],
    "e": "la camisa — рубашка."
  },
  {
    "id": "clothes_shirt_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На нём синяя рубашка.»: Él lleva una ___ azul.",
    "a": [
      "camisa"
    ],
    "e": "Él lleva una camisa azul. — На нём синяя рубашка."
  },
  {
    "id": "clothes_blouse_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: блузка.",
    "a": [
      "blusa",
      "la blusa"
    ],
    "e": "Базовая форма: la blusa."
  },
  {
    "id": "clothes_blouse_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la blusa.",
    "a": [
      "блузка"
    ],
    "e": "la blusa — блузка."
  },
  {
    "id": "clothes_blouse_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Блузка сочетается с юбкой.»: Busco una ___ elegante.",
    "a": [
      "blusa"
    ],
    "e": "La blusa combina con la falda. — Блузка сочетается с юбкой."
  },
  {
    "id": "clothes_sweater_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: свитер.",
    "a": [
      "jersey",
      "el jersey",
      "suéter",
      "el suéter"
    ],
    "e": "Базовая форма: el jersey."
  },
  {
    "id": "clothes_sweater_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el jersey.",
    "a": [
      "свитер",
      "джемпер"
    ],
    "e": "el jersey — свитер."
  },
  {
    "id": "clothes_sweater_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я надеваю шерстяной свитер.»: Me pongo un ___ de lana.",
    "a": [
      "jersey",
      "suéter"
    ],
    "e": "Me pongo un jersey de lana. — Я надеваю шерстяной свитер."
  },
  {
    "id": "clothes_cardigan_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кардиган, кофта.",
    "a": [
      "cárdigan",
      "cardigan",
      "el cárdigan",
      "el cardigan"
    ],
    "e": "Базовая форма: el cárdigan."
  },
  {
    "id": "clothes_cardigan_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el cárdigan.",
    "a": [
      "кардиган",
      "кофта",
      "кардиган, кофта"
    ],
    "e": "el cárdigan — кардиган, кофта."
  },
  {
    "id": "clothes_cardigan_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На мне бежевый кардиган.»: Llevo un ___ beige.",
    "a": [
      "cárdigan",
      "cardigan"
    ],
    "e": "Llevo un cárdigan beige. — На мне бежевый кардиган."
  },
  {
    "id": "clothes_hoodie_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: худи, толстовка с капюшоном.",
    "a": [
      "sudadera con capucha",
      "la sudadera con capucha",
      "sudadera",
      "la sudadera"
    ],
    "e": "Базовая форма: la sudadera con capucha."
  },
  {
    "id": "clothes_hoodie_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la sudadera con capucha.",
    "a": [
      "худи",
      "толстовка",
      "толстовка с капюшоном",
      "худи, толстовка с капюшоном"
    ],
    "e": "la sudadera con capucha — худи, толстовка с капюшоном."
  },
  {
    "id": "clothes_hoodie_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На мне зелёное худи.»: Llevo una ___ verde.",
    "a": [
      "sudadera con capucha",
      "sudadera"
    ],
    "e": "Llevo una sudadera con capucha verde. — На мне зелёное худи."
  },
  {
    "id": "clothes_vest_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: жилет.",
    "a": [
      "chaleco",
      "el chaleco"
    ],
    "e": "Базовая форма: el chaleco."
  },
  {
    "id": "clothes_vest_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el chaleco.",
    "a": [
      "жилет"
    ],
    "e": "el chaleco — жилет."
  },
  {
    "id": "clothes_vest_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На нём бежевый жилет.»: Lleva un ___ beige.",
    "a": [
      "chaleco"
    ],
    "e": "Lleva un chaleco beige. — На нём бежевый жилет."
  },
  {
    "id": "clothes_polo_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: поло.",
    "a": [
      "polo",
      "el polo"
    ],
    "e": "Базовая форма: el polo."
  },
  {
    "id": "clothes_polo_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el polo.",
    "a": [
      "поло",
      "рубашка поло"
    ],
    "e": "el polo — поло."
  },
  {
    "id": "clothes_polo_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На нём белое поло.»: Lleva un ___ blanco.",
    "a": [
      "polo"
    ],
    "e": "Lleva un polo blanco. — На нём белое поло."
  },
  {
    "id": "clothes_jacket_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: куртка, пиджак.",
    "a": [
      "chaqueta",
      "la chaqueta"
    ],
    "e": "Базовая форма: la chaqueta."
  },
  {
    "id": "clothes_jacket_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la chaqueta.",
    "a": [
      "куртка",
      "пиджак",
      "куртка пиджак",
      "куртка, пиджак"
    ],
    "e": "la chaqueta — куртка, пиджак."
  },
  {
    "id": "clothes_jacket_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нужна лёгкая куртка.»: Necesito una ___ ligera.",
    "a": [
      "chaqueta"
    ],
    "e": "Necesito una chaqueta ligera. — Мне нужна лёгкая куртка."
  },
  {
    "id": "clothes_coat_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: пальто.",
    "a": [
      "abrigo",
      "el abrigo"
    ],
    "e": "Базовая форма: el abrigo."
  },
  {
    "id": "clothes_coat_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el abrigo.",
    "a": [
      "пальто"
    ],
    "e": "el abrigo — пальто."
  },
  {
    "id": "clothes_coat_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Надень пальто, холодно.»: Ponte el ___, hace frío.",
    "a": [
      "abrigo"
    ],
    "e": "Ponte el abrigo, hace frío. — Надень пальто, холодно."
  },
  {
    "id": "clothes_dress_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: платье.",
    "a": [
      "vestido",
      "el vestido"
    ],
    "e": "Базовая форма: el vestido."
  },
  {
    "id": "clothes_dress_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el vestido.",
    "a": [
      "платье"
    ],
    "e": "el vestido — платье."
  },
  {
    "id": "clothes_dress_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На ней красное платье.»: Ella lleva un ___ rojo.",
    "a": [
      "vestido"
    ],
    "e": "Ella lleva un vestido rojo. — На ней красное платье."
  },
  {
    "id": "clothes_skirt_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: юбка.",
    "a": [
      "falda",
      "la falda"
    ],
    "e": "Базовая форма: la falda."
  },
  {
    "id": "clothes_skirt_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la falda.",
    "a": [
      "юбка"
    ],
    "e": "la falda — юбка."
  },
  {
    "id": "clothes_skirt_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Юбка хорошо на мне сидит.»: Prefiero una ___ larga.",
    "a": [
      "falda"
    ],
    "e": "La falda me queda bien. — Юбка хорошо на мне сидит."
  },
  {
    "id": "clothes_trousers_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: брюки, штаны.",
    "a": [
      "pantalones",
      "los pantalones"
    ],
    "e": "Базовая форма: los pantalones."
  },
  {
    "id": "clothes_trousers_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los pantalones.",
    "a": [
      "брюки",
      "штаны",
      "брюки штаны",
      "брюки, штаны"
    ],
    "e": "los pantalones — брюки, штаны."
  },
  {
    "id": "clothes_trousers_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Эти брюки удобные.»: Estos ___ son cómodos.",
    "a": [
      "pantalones"
    ],
    "e": "Estos pantalones son cómodos. — Эти брюки удобные."
  },
  {
    "id": "clothes_jeans_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: джинсы.",
    "a": [
      "vaqueros",
      "los vaqueros",
      "jeans",
      "los jeans"
    ],
    "e": "Базовая форма: los vaqueros."
  },
  {
    "id": "clothes_jeans_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los vaqueros.",
    "a": [
      "джинсы"
    ],
    "e": "los vaqueros — джинсы."
  },
  {
    "id": "clothes_jeans_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «По пятницам я всегда ношу джинсы.»: Siempre llevo ___ los viernes.",
    "a": [
      "vaqueros",
      "jeans"
    ],
    "e": "Siempre llevo vaqueros los viernes. — По пятницам я всегда ношу джинсы."
  },
  {
    "id": "clothes_shorts_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: шорты.",
    "a": [
      "pantalones cortos",
      "los pantalones cortos",
      "shorts",
      "los shorts"
    ],
    "e": "Базовая форма: los pantalones cortos."
  },
  {
    "id": "clothes_shorts_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los pantalones cortos.",
    "a": [
      "шорты"
    ],
    "e": "los pantalones cortos — шорты."
  },
  {
    "id": "clothes_shorts_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Летом я ношу шорты.»: En verano llevo ___.",
    "a": [
      "pantalones cortos",
      "shorts"
    ],
    "e": "En verano llevo pantalones cortos. — Летом я ношу шорты."
  },
  {
    "id": "clothes_suit_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: костюм.",
    "a": [
      "traje",
      "el traje"
    ],
    "e": "Базовая форма: el traje."
  },
  {
    "id": "clothes_suit_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el traje.",
    "a": [
      "костюм"
    ],
    "e": "el traje — костюм."
  },
  {
    "id": "clothes_suit_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Он надевает костюм на собеседование.»: Lleva ___ para la entrevista.",
    "a": [
      "traje"
    ],
    "e": "Lleva traje para la entrevista. — Он надевает костюм на собеседование."
  },
  {
    "id": "clothes_pajamas_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: пижама.",
    "a": [
      "pijama",
      "el pijama"
    ],
    "e": "Базовая форма: el pijama."
  },
  {
    "id": "clothes_pajamas_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el pijama.",
    "a": [
      "пижама"
    ],
    "e": "el pijama — пижама."
  },
  {
    "id": "clothes_pajamas_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я надеваю пижаму перед сном.»: Me pongo el ___ antes de dormir.",
    "a": [
      "pijama"
    ],
    "e": "Me pongo el pijama antes de dormir. — Я надеваю пижаму перед сном."
  },
  {
    "id": "clothes_underwear_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: нижнее бельё.",
    "a": [
      "ropa interior",
      "la ropa interior"
    ],
    "e": "Базовая форма: la ropa interior."
  },
  {
    "id": "clothes_underwear_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la ropa interior.",
    "a": [
      "нижнее бельё",
      "нижнее белье"
    ],
    "e": "la ropa interior — нижнее бельё."
  },
  {
    "id": "clothes_underwear_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Нижнее бельё находится в ящике.»: La ___ está en el cajón.",
    "a": [
      "ropa interior"
    ],
    "e": "La ropa interior está en el cajón. — Нижнее бельё находится в ящике."
  },
  {
    "id": "clothes_socks_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: носки.",
    "a": [
      "calcetines",
      "los calcetines"
    ],
    "e": "Базовая форма: los calcetines."
  },
  {
    "id": "clothes_socks_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los calcetines.",
    "a": [
      "носки"
    ],
    "e": "los calcetines — носки."
  },
  {
    "id": "clothes_socks_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нужна пара носков.»: Necesito un par de ___.",
    "a": [
      "calcetines"
    ],
    "e": "Necesito un par de calcetines. — Мне нужна пара носков."
  },
  {
    "id": "clothes_shoes_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: туфли, обувь.",
    "a": [
      "zapatos",
      "los zapatos"
    ],
    "e": "Базовая форма: los zapatos."
  },
  {
    "id": "clothes_shoes_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los zapatos.",
    "a": [
      "туфли",
      "обувь",
      "туфли обувь",
      "туфли, обувь"
    ],
    "e": "los zapatos — туфли, обувь."
  },
  {
    "id": "clothes_shoes_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Эти туфли мне малы.»: Estos ___ me quedan pequeños.",
    "a": [
      "zapatos"
    ],
    "e": "Estos zapatos me quedan pequeños. — Эти туфли мне малы."
  },
  {
    "id": "clothes_sneakers_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кроссовки.",
    "a": [
      "zapatillas deportivas",
      "las zapatillas deportivas",
      "tenis",
      "los tenis"
    ],
    "e": "Базовая форма: las zapatillas deportivas."
  },
  {
    "id": "clothes_sneakers_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las zapatillas deportivas.",
    "a": [
      "кроссовки"
    ],
    "e": "las zapatillas deportivas — кроссовки."
  },
  {
    "id": "clothes_sneakers_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я бегаю в кроссовках.»: Corro con ___.",
    "a": [
      "zapatillas deportivas",
      "tenis"
    ],
    "e": "Corro con zapatillas deportivas. — Я бегаю в кроссовках."
  },
  {
    "id": "clothes_boots_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сапоги, ботинки.",
    "a": [
      "botas",
      "las botas"
    ],
    "e": "Базовая форма: las botas."
  },
  {
    "id": "clothes_boots_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las botas.",
    "a": [
      "сапоги",
      "ботинки",
      "сапоги ботинки",
      "сапоги, ботинки"
    ],
    "e": "las botas — сапоги, ботинки."
  },
  {
    "id": "clothes_boots_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ношу сапоги, когда идёт дождь.»: Llevo ___ cuando llueve.",
    "a": [
      "botas"
    ],
    "e": "Llevo botas cuando llueve. — Я ношу сапоги, когда идёт дождь."
  },
  {
    "id": "clothes_ankleboots_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: ботильоны, короткие ботинки.",
    "a": [
      "botines",
      "los botines"
    ],
    "e": "Базовая форма: los botines."
  },
  {
    "id": "clothes_ankleboots_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los botines.",
    "a": [
      "ботильоны",
      "короткие ботинки",
      "ботильоны короткие ботинки",
      "ботильоны, короткие ботинки"
    ],
    "e": "los botines — ботильоны, короткие ботинки."
  },
  {
    "id": "clothes_ankleboots_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Ботильоны сочетаются с платьем.»: Los ___ combinan con el vestido.",
    "a": [
      "botines"
    ],
    "e": "Los botines combinan con el vestido. — Ботильоны сочетаются с платьем."
  },
  {
    "id": "clothes_sandals_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сандалии, босоножки.",
    "a": [
      "sandalias",
      "las sandalias"
    ],
    "e": "Базовая форма: las sandalias."
  },
  {
    "id": "clothes_sandals_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las sandalias.",
    "a": [
      "сандалии",
      "босоножки",
      "сандалии босоножки",
      "сандалии, босоножки"
    ],
    "e": "las sandalias — сандалии, босоножки."
  },
  {
    "id": "clothes_sandals_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На пляже я ношу сандалии.»: Llevo ___ en la playa.",
    "a": [
      "sandalias"
    ],
    "e": "Llevo sandalias en la playa. — На пляже я ношу сандалии."
  },
  {
    "id": "clothes_heels_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: туфли на каблуке.",
    "a": [
      "zapatos de tacón",
      "los zapatos de tacón",
      "tacones",
      "los tacones"
    ],
    "e": "Базовая форма: los zapatos de tacón."
  },
  {
    "id": "clothes_heels_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los zapatos de tacón.",
    "a": [
      "туфли на каблуке"
    ],
    "e": "los zapatos de tacón — туфли на каблуке."
  },
  {
    "id": "clothes_heels_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Она носит туфли на каблуке.»: Ella lleva ___.",
    "a": [
      "zapatos de tacón",
      "tacones"
    ],
    "e": "Ella lleva zapatos de tacón. — Она носит туфли на каблуке."
  },
  {
    "id": "clothes_slippers_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: домашние тапочки.",
    "a": [
      "zapatillas de casa",
      "las zapatillas de casa"
    ],
    "e": "Базовая форма: las zapatillas de casa."
  },
  {
    "id": "clothes_slippers_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las zapatillas de casa.",
    "a": [
      "домашние тапочки",
      "тапочки"
    ],
    "e": "las zapatillas de casa — домашние тапочки."
  },
  {
    "id": "clothes_slippers_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я надеваю домашние тапочки.»: Me pongo las ___.",
    "a": [
      "zapatillas de casa"
    ],
    "e": "Me pongo las zapatillas de casa. — Я надеваю домашние тапочки."
  },
  {
    "id": "clothes_belt_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: ремень.",
    "a": [
      "cinturón",
      "el cinturón"
    ],
    "e": "Базовая форма: el cinturón."
  },
  {
    "id": "clothes_belt_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el cinturón.",
    "a": [
      "ремень"
    ],
    "e": "el cinturón — ремень."
  },
  {
    "id": "clothes_belt_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Ремень сделан из кожи.»: El ___ es de cuero.",
    "a": [
      "cinturón"
    ],
    "e": "El cinturón es de cuero. — Ремень сделан из кожи."
  },
  {
    "id": "clothes_scarf_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: шарф.",
    "a": [
      "bufanda",
      "la bufanda"
    ],
    "e": "Базовая форма: la bufanda."
  },
  {
    "id": "clothes_scarf_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la bufanda.",
    "a": [
      "шарф"
    ],
    "e": "la bufanda — шарф."
  },
  {
    "id": "clothes_scarf_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я надеваю красный шарф.»: Me pongo una ___ roja.",
    "a": [
      "bufanda"
    ],
    "e": "Me pongo una bufanda roja. — Я надеваю красный шарф."
  },
  {
    "id": "clothes_gloves_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: перчатки.",
    "a": [
      "guantes",
      "los guantes"
    ],
    "e": "Базовая форма: los guantes."
  },
  {
    "id": "clothes_gloves_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los guantes.",
    "a": [
      "перчатки"
    ],
    "e": "los guantes — перчатки."
  },
  {
    "id": "clothes_gloves_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я не могу найти свои перчатки.»: No encuentro mis ___.",
    "a": [
      "guantes"
    ],
    "e": "No encuentro mis guantes. — Я не могу найти свои перчатки."
  },
  {
    "id": "clothes_sunglasses_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: солнцезащитные очки.",
    "a": [
      "gafas de sol",
      "las gafas de sol"
    ],
    "e": "Базовая форма: las gafas de sol."
  },
  {
    "id": "clothes_sunglasses_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las gafas de sol.",
    "a": [
      "солнцезащитные очки",
      "солнечные очки"
    ],
    "e": "las gafas de sol — солнцезащитные очки."
  },
  {
    "id": "clothes_sunglasses_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нужны солнцезащитные очки.»: Necesito ___.",
    "a": [
      "gafas de sol"
    ],
    "e": "Necesito gafas de sol. — Мне нужны солнцезащитные очки."
  },
  {
    "id": "clothes_umbrella_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: зонт.",
    "a": [
      "paraguas",
      "el paraguas"
    ],
    "e": "Базовая форма: el paraguas."
  },
  {
    "id": "clothes_umbrella_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el paraguas.",
    "a": [
      "зонт"
    ],
    "e": "el paraguas — зонт."
  },
  {
    "id": "clothes_umbrella_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Возьми зонт, будет дождь.»: Lleva un ___, va a llover.",
    "a": [
      "paraguas"
    ],
    "e": "Lleva un paraguas, va a llover. — Возьми зонт, будет дождь."
  },
  {
    "id": "clothes_tie_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: галстук.",
    "a": [
      "corbata",
      "la corbata"
    ],
    "e": "Базовая форма: la corbata."
  },
  {
    "id": "clothes_tie_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la corbata.",
    "a": [
      "галстук"
    ],
    "e": "la corbata — галстук."
  },
  {
    "id": "clothes_tie_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Галстук сочетается с рубашкой.»: La ___ combina con la camisa.",
    "a": [
      "corbata"
    ],
    "e": "La corbata combina con la camisa. — Галстук сочетается с рубашкой."
  },
  {
    "id": "clothes_bowtie_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: галстук-бабочка.",
    "a": [
      "pajarita",
      "la pajarita"
    ],
    "e": "Базовая форма: la pajarita."
  },
  {
    "id": "clothes_bowtie_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la pajarita.",
    "a": [
      "галстук-бабочка",
      "бабочка"
    ],
    "e": "la pajarita — галстук-бабочка."
  },
  {
    "id": "clothes_bowtie_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На нём чёрный галстук-бабочка.»: Lleva una ___ negra.",
    "a": [
      "pajarita"
    ],
    "e": "Lleva una pajarita negra. — На нём чёрный галстук-бабочка."
  },
  {
    "id": "clothes_handkerchief_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: платок.",
    "a": [
      "pañuelo",
      "el pañuelo"
    ],
    "e": "Базовая форма: el pañuelo."
  },
  {
    "id": "clothes_handkerchief_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el pañuelo.",
    "a": [
      "платок"
    ],
    "e": "el pañuelo — платок."
  },
  {
    "id": "clothes_handkerchief_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На ней платок на шее.»: Lleva un ___ en el cuello.",
    "a": [
      "pañuelo"
    ],
    "e": "Lleva un pañuelo en el cuello. — На ней платок на шее."
  },
  {
    "id": "clothes_necklace_es",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: ожерелье, колье.",
    "a": [
      "collar",
      "el collar"
    ],
    "e": "Базовая форма: el collar."
  },
  {
    "id": "clothes_necklace_ru",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el collar.",
    "a": [
      "ожерелье",
      "колье",
      "ожерелье колье",
      "ожерелье, колье"
    ],
    "e": "el collar — ожерелье, колье."
  },
  {
    "id": "clothes_necklace_ctx",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Ожерелье сделано из серебра.»: El ___ es de plata.",
    "a": [
      "collar"
    ],
    "e": "El collar es de plata. — Ожерелье сделано из серебра."
  },
  {
    "id": "clothes_bracelet_es",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: браслет.",
    "a": [
      "pulsera",
      "la pulsera"
    ],
    "e": "Базовая форма: la pulsera."
  },
  {
    "id": "clothes_bracelet_ru",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la pulsera.",
    "a": [
      "браслет"
    ],
    "e": "la pulsera — браслет."
  },
  {
    "id": "clothes_bracelet_ctx",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ношу золотистый браслет.»: Llevo una ___ dorada.",
    "a": [
      "pulsera"
    ],
    "e": "Llevo una pulsera dorada. — Я ношу золотистый браслет."
  },
  {
    "id": "clothes_ring_es",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кольцо.",
    "a": [
      "anillo",
      "el anillo"
    ],
    "e": "Базовая форма: el anillo."
  },
  {
    "id": "clothes_ring_ru",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el anillo.",
    "a": [
      "кольцо"
    ],
    "e": "el anillo — кольцо."
  },
  {
    "id": "clothes_ring_ctx",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Кольцо находится в коробке.»: El ___ está en la caja.",
    "a": [
      "anillo"
    ],
    "e": "El anillo está en la caja. — Кольцо находится в коробке."
  },
  {
    "id": "clothes_earrings_es",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: серьги.",
    "a": [
      "pendientes",
      "los pendientes"
    ],
    "e": "Базовая форма: los pendientes."
  },
  {
    "id": "clothes_earrings_ru",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los pendientes.",
    "a": [
      "серьги"
    ],
    "e": "los pendientes — серьги."
  },
  {
    "id": "clothes_earrings_ctx",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Она носит маленькие серьги.»: Lleva unos ___ pequeños.",
    "a": [
      "pendientes"
    ],
    "e": "Lleva unos pendientes pequeños. — Она носит маленькие серьги."
  },
  {
    "id": "clothes_watch_es",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: наручные часы.",
    "a": [
      "reloj",
      "el reloj"
    ],
    "e": "Базовая форма: el reloj."
  },
  {
    "id": "clothes_watch_ru",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el reloj.",
    "a": [
      "наручные часы",
      "часы"
    ],
    "e": "el reloj — наручные часы."
  },
  {
    "id": "clothes_watch_ctx",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я смотрю время на своих часах.»: Miro la hora en mi ___.",
    "a": [
      "reloj"
    ],
    "e": "Miro la hora en mi reloj. — Я смотрю время на своих часах."
  },
  {
    "id": "clothes_brooch_es",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: брошь.",
    "a": [
      "broche",
      "el broche"
    ],
    "e": "Базовая форма: el broche."
  },
  {
    "id": "clothes_brooch_ru",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el broche.",
    "a": [
      "брошь"
    ],
    "e": "el broche — брошь."
  },
  {
    "id": "clothes_brooch_ctx",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Брошь имеет форму цветка.»: El ___ tiene forma de flor.",
    "a": [
      "broche"
    ],
    "e": "El broche tiene forma de flor. — Брошь имеет форму цветка."
  },
  {
    "id": "clothes_chain_es",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: цепочка.",
    "a": [
      "cadena",
      "la cadena"
    ],
    "e": "Базовая форма: la cadena."
  },
  {
    "id": "clothes_chain_ru",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la cadena.",
    "a": [
      "цепочка",
      "цепь"
    ],
    "e": "la cadena — цепочка."
  },
  {
    "id": "clothes_chain_ctx",
    "topic": "clothes",
    "foodCat": "jewelry",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Цепочка очень тонкая.»: La ___ es muy fina.",
    "a": [
      "cadena"
    ],
    "e": "La cadena es muy fina. — Цепочка очень тонкая."
  },
  {
    "id": "clothes_hat_es",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: шляпа.",
    "a": [
      "sombrero",
      "el sombrero"
    ],
    "e": "Базовая форма: el sombrero."
  },
  {
    "id": "clothes_hat_ru",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el sombrero.",
    "a": [
      "шляпа"
    ],
    "e": "el sombrero — шляпа."
  },
  {
    "id": "clothes_hat_ctx",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Шляпа защищает от солнца.»: El ___ protege del sol.",
    "a": [
      "sombrero"
    ],
    "e": "El sombrero protege del sol. — Шляпа защищает от солнца."
  },
  {
    "id": "clothes_cap_es",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кепка, бейсболка.",
    "a": [
      "gorra",
      "la gorra"
    ],
    "e": "Базовая форма: la gorra."
  },
  {
    "id": "clothes_cap_ru",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la gorra.",
    "a": [
      "кепка",
      "бейсболка",
      "кепка бейсболка",
      "кепка, бейсболка"
    ],
    "e": "la gorra — кепка, бейсболка."
  },
  {
    "id": "clothes_cap_ctx",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я надеваю кепку для пробежки.»: Me pongo una ___ para correr.",
    "a": [
      "gorra"
    ],
    "e": "Me pongo una gorra para correr. — Я надеваю кепку для пробежки."
  },
  {
    "id": "clothes_beanie_es",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: шапка.",
    "a": [
      "gorro",
      "el gorro"
    ],
    "e": "Базовая форма: el gorro."
  },
  {
    "id": "clothes_beanie_ru",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el gorro.",
    "a": [
      "шапка"
    ],
    "e": "el gorro — шапка."
  },
  {
    "id": "clothes_beanie_ctx",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Надень шапку, холодно.»: Ponte el ___, hace frío.",
    "a": [
      "gorro"
    ],
    "e": "Ponte el gorro, hace frío. — Надень шапку, холодно."
  },
  {
    "id": "clothes_beret_es",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: берет.",
    "a": [
      "boina",
      "la boina"
    ],
    "e": "Базовая форма: la boina."
  },
  {
    "id": "clothes_beret_ru",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la boina.",
    "a": [
      "берет"
    ],
    "e": "la boina — берет."
  },
  {
    "id": "clothes_beret_ctx",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Берет красного цвета.»: La ___ es de color rojo.",
    "a": [
      "boina"
    ],
    "e": "La boina es de color rojo. — Берет красного цвета."
  },
  {
    "id": "clothes_hood_es",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: капюшон.",
    "a": [
      "capucha",
      "la capucha"
    ],
    "e": "Базовая форма: la capucha."
  },
  {
    "id": "clothes_hood_ru",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la capucha.",
    "a": [
      "капюшон"
    ],
    "e": "la capucha — капюшон."
  },
  {
    "id": "clothes_hood_ctx",
    "topic": "clothes",
    "foodCat": "headwear",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Подними капюшон, потому что идёт дождь.»: Sube la ___ porque llueve.",
    "a": [
      "capucha"
    ],
    "e": "Sube la capucha porque llueve. — Подними капюшон, потому что идёт дождь."
  },
  {
    "id": "clothes_handbag_es",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сумка.",
    "a": [
      "bolso",
      "el bolso"
    ],
    "e": "Базовая форма: el bolso."
  },
  {
    "id": "clothes_handbag_ru",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el bolso.",
    "a": [
      "сумка",
      "женская сумка"
    ],
    "e": "el bolso — сумка."
  },
  {
    "id": "clothes_handbag_ctx",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Телефон находится в моей сумке.»: El móvil está en mi ___.",
    "a": [
      "bolso"
    ],
    "e": "El móvil está en mi bolso. — Телефон находится в моей сумке."
  },
  {
    "id": "clothes_backpack_es",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: рюкзак.",
    "a": [
      "mochila",
      "la mochila"
    ],
    "e": "Базовая форма: la mochila."
  },
  {
    "id": "clothes_backpack_ru",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la mochila.",
    "a": [
      "рюкзак"
    ],
    "e": "la mochila — рюкзак."
  },
  {
    "id": "clothes_backpack_ctx",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ношу ноутбук в рюкзаке.»: Llevo el portátil en la ___.",
    "a": [
      "mochila"
    ],
    "e": "Llevo el portátil en la mochila. — Я ношу ноутбук в рюкзаке."
  },
  {
    "id": "clothes_wallet_es",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кошелёк, портмоне.",
    "a": [
      "cartera",
      "la cartera"
    ],
    "e": "Базовая форма: la cartera."
  },
  {
    "id": "clothes_wallet_ru",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la cartera.",
    "a": [
      "кошелёк",
      "кошелек",
      "портмоне",
      "кошелёк портмоне",
      "кошелёк, портмоне"
    ],
    "e": "la cartera — кошелёк, портмоне."
  },
  {
    "id": "clothes_wallet_ctx",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я храню карты в кошельке.»: Guardo las tarjetas en la ___.",
    "a": [
      "cartera"
    ],
    "e": "Guardo las tarjetas en la cartera. — Я храню карты в кошельке."
  },
  {
    "id": "clothes_coinpurse_es",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: кошелёк для мелочи.",
    "a": [
      "monedero",
      "el monedero"
    ],
    "e": "Базовая форма: el monedero."
  },
  {
    "id": "clothes_coinpurse_ru",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el monedero.",
    "a": [
      "кошелёк для мелочи",
      "кошелек для мелочи",
      "монетница"
    ],
    "e": "el monedero — кошелёк для мелочи."
  },
  {
    "id": "clothes_coinpurse_ctx",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Монеты находятся в кошельке.»: Las monedas están en el ___.",
    "a": [
      "monedero"
    ],
    "e": "Las monedas están en el monedero. — Монеты находятся в кошельке."
  },
  {
    "id": "clothes_suitcase_es",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: чемодан.",
    "a": [
      "maleta",
      "la maleta"
    ],
    "e": "Базовая форма: la maleta."
  },
  {
    "id": "clothes_suitcase_ru",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la maleta.",
    "a": [
      "чемодан"
    ],
    "e": "la maleta — чемодан."
  },
  {
    "id": "clothes_suitcase_ctx",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я собираю чемодан для поездки.»: Preparo la ___ para el viaje.",
    "a": [
      "maleta"
    ],
    "e": "Preparo la maleta para el viaje. — Я собираю чемодан для поездки."
  },
  {
    "id": "clothes_waistbag_es",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: поясная сумка.",
    "a": [
      "riñonera",
      "la riñonera"
    ],
    "e": "Базовая форма: la riñonera."
  },
  {
    "id": "clothes_waistbag_ru",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la riñonera.",
    "a": [
      "поясная сумка"
    ],
    "e": "la riñonera — поясная сумка."
  },
  {
    "id": "clothes_waistbag_ctx",
    "topic": "clothes",
    "foodCat": "bags",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я храню ключи в поясной сумке.»: Guardo las llaves en la ___.",
    "a": [
      "riñonera"
    ],
    "e": "Guardo las llaves en la riñonera. — Я храню ключи в поясной сумке."
  },
  {
    "id": "clothes_size_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: размер одежды.",
    "a": [
      "talla",
      "la talla"
    ],
    "e": "Базовая форма: la talla."
  },
  {
    "id": "clothes_size_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la talla.",
    "a": [
      "размер одежды",
      "размер"
    ],
    "e": "la talla — размер одежды."
  },
  {
    "id": "clothes_size_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Какой размер тебе нужен? — Мне нужен размер M.»: ¿Qué ___ necesitas? — Necesito una talla M.",
    "a": [
      "talla"
    ],
    "e": "¿Qué talla necesitas? — Necesito una talla M. — Какой размер тебе нужен? — Мне нужен размер M."
  },
  {
    "id": "clothes_fittingroom_es",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: примерочная.",
    "a": [
      "probador",
      "el probador",
      "probadores",
      "los probadores"
    ],
    "e": "Базовая форма: el probador."
  },
  {
    "id": "clothes_fittingroom_ru",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el probador.",
    "a": [
      "примерочная"
    ],
    "e": "el probador — примерочная."
  },
  {
    "id": "clothes_fittingroom_ctx",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Где находятся примерочные?»: ¿Dónde están los ___?",
    "a": [
      "probadores"
    ],
    "e": "¿Dónde están los probadores? — Где находятся примерочные?"
  },
  {
    "id": "clothes_bra_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: бюстгальтер.",
    "a": [
      "sujetador",
      "el sujetador"
    ],
    "e": "Базовая форма: el sujetador."
  },
  {
    "id": "clothes_bra_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el sujetador.",
    "a": [
      "бюстгальтер",
      "лифчик"
    ],
    "e": "el sujetador — бюстгальтер."
  },
  {
    "id": "clothes_bra_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нужен удобный бюстгальтер.»: Necesito un ___ cómodo.",
    "a": [
      "sujetador"
    ],
    "e": "Necesito un sujetador cómodo. — Мне нужен удобный бюстгальтер."
  },
  {
    "id": "clothes_tights_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: колготки / чулки.",
    "a": [
      "medias",
      "las medias"
    ],
    "e": "Базовая форма: las medias."
  },
  {
    "id": "clothes_tights_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las medias.",
    "a": [
      "колготки",
      "чулки",
      "колготки / чулки"
    ],
    "e": "las medias — колготки / чулки."
  },
  {
    "id": "clothes_tights_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Она носит чёрные колготки с платьем.»: Lleva ___ negras con el vestido.",
    "a": [
      "medias"
    ],
    "e": "Lleva medias negras con el vestido. — Она носит чёрные колготки с платьем."
  },
  {
    "id": "clothes_leggings_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: легинсы.",
    "a": [
      "leggings",
      "los leggings",
      "mallas",
      "las mallas"
    ],
    "e": "Базовая форма: los leggings / las mallas."
  },
  {
    "id": "clothes_leggings_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: los leggings / las mallas.",
    "a": [
      "легинсы"
    ],
    "e": "los leggings / las mallas — легинсы."
  },
  {
    "id": "clothes_leggings_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я надеваю легинсы для тренировки.»: Me pongo unos ___ para entrenar.",
    "a": [
      "leggings",
      "mallas"
    ],
    "e": "Me pongo unos leggings para entrenar. — Я надеваю легинсы для тренировки."
  },
  {
    "id": "clothes_tracksuit_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: спортивный костюм.",
    "a": [
      "chándal",
      "chandal",
      "el chándal",
      "el chandal"
    ],
    "e": "Базовая форма: el chándal."
  },
  {
    "id": "clothes_tracksuit_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el chándal.",
    "a": [
      "спортивный костюм"
    ],
    "e": "el chándal — спортивный костюм."
  },
  {
    "id": "clothes_tracksuit_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ношу спортивный костюм, когда занимаюсь спортом.»: Llevo un ___ cuando hago deporte.",
    "a": [
      "chándal",
      "chandal"
    ],
    "e": "Llevo un chándal cuando hago deporte. — Я ношу спортивный костюм, когда занимаюсь спортом."
  },
  {
    "id": "clothes_swimsuit_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: купальник / плавки.",
    "a": [
      "bañador",
      "el bañador"
    ],
    "e": "Базовая форма: el bañador."
  },
  {
    "id": "clothes_swimsuit_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el bañador.",
    "a": [
      "купальник",
      "плавки",
      "купальник / плавки"
    ],
    "e": "el bañador — купальник / плавки."
  },
  {
    "id": "clothes_swimsuit_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я положил(а) купальник в чемодан.»: He metido el ___ en la maleta.",
    "a": [
      "bañador"
    ],
    "e": "He metido el bañador en la maleta. — Я положил(а) купальник в чемодан."
  },
  {
    "id": "clothes_raincoat_es",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: дождевик.",
    "a": [
      "impermeable",
      "el impermeable"
    ],
    "e": "Базовая форма: el impermeable."
  },
  {
    "id": "clothes_raincoat_ru",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el impermeable.",
    "a": [
      "дождевик"
    ],
    "e": "el impermeable — дождевик."
  },
  {
    "id": "clothes_raincoat_ctx",
    "topic": "clothes",
    "foodCat": "clothes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Надень дождевик, потому что идёт дождь.»: Ponte el ___ porque está lloviendo.",
    "a": [
      "impermeable"
    ],
    "e": "Ponte el impermeable porque está lloviendo. — Надень дождевик, потому что идёт дождь."
  },
  {
    "id": "clothes_flipflops_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: шлёпанцы.",
    "a": [
      "chanclas",
      "las chanclas"
    ],
    "e": "Базовая форма: las chanclas."
  },
  {
    "id": "clothes_flipflops_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las chanclas.",
    "a": [
      "шлёпанцы",
      "сланцы"
    ],
    "e": "las chanclas — шлёпанцы."
  },
  {
    "id": "clothes_flipflops_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я ношу шлёпанцы на пляже.»: Llevo ___ en la playa.",
    "a": [
      "chanclas"
    ],
    "e": "Llevo chanclas en la playa. — Я ношу шлёпанцы на пляже."
  },
  {
    "id": "clothes_rainboots_es",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: резиновые сапоги.",
    "a": [
      "botas de agua",
      "las botas de agua"
    ],
    "e": "Базовая форма: las botas de agua."
  },
  {
    "id": "clothes_rainboots_ru",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Узнай слово",
    "q": "Переведи на русский: las botas de agua.",
    "a": [
      "резиновые сапоги"
    ],
    "e": "las botas de agua — резиновые сапоги."
  },
  {
    "id": "clothes_rainboots_ctx",
    "topic": "clothes",
    "foodCat": "shoes",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нужны резиновые сапоги для дождя.»: Necesito ___ para la lluvia.",
    "a": [
      "botas de agua"
    ],
    "e": "Necesito botas de agua para la lluvia. — Мне нужны резиновые сапоги для дождя."
  },
  {
    "id": "clothes_zipper_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: молния.",
    "a": [
      "cremallera",
      "la cremallera"
    ],
    "e": "Базовая форма: la cremallera."
  },
  {
    "id": "clothes_zipper_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: la cremallera.",
    "a": [
      "молния"
    ],
    "e": "la cremallera — молния."
  },
  {
    "id": "clothes_zipper_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Молния на куртке сломана.»: La ___ de la chaqueta está rota.",
    "a": [
      "cremallera"
    ],
    "e": "La cremallera de la chaqueta está rota. — Молния на куртке сломана."
  },
  {
    "id": "clothes_button_es",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: пуговица.",
    "a": [
      "botón",
      "boton",
      "el botón",
      "el boton"
    ],
    "e": "Базовая форма: el botón."
  },
  {
    "id": "clothes_button_ru",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Узнай слово",
    "q": "Переведи на русский: el botón.",
    "a": [
      "пуговица"
    ],
    "e": "el botón — пуговица."
  },
  {
    "id": "clothes_button_ctx",
    "topic": "clothes",
    "foodCat": "accessories",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «На рубашке не хватает пуговицы.»: Falta un ___ en la camisa.",
    "a": [
      "botón",
      "boton"
    ],
    "e": "Falta un botón en la camisa. — На рубашке не хватает пуговицы."
  },
  {
    "id": "clothes_try_on_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: примерять что-либо.",
    "a": [
      "probarse algo",
      "probarse"
    ],
    "e": "Базовая форма: probarse algo."
  },
  {
    "id": "clothes_try_on_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: probarse algo.",
    "a": [
      "примерять что-либо",
      "примерять"
    ],
    "e": "probarse algo — примерять что-либо."
  },
  {
    "id": "clothes_try_on_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я хочу примерить эту куртку.»: Quiero ___ esta chaqueta.",
    "a": [
      "probarme"
    ],
    "e": "Quiero probarme esta chaqueta. — Я хочу примерить эту куртку."
  },
  {
    "id": "clothes_put_on_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: надевать что-либо.",
    "a": [
      "ponerse algo",
      "ponerse"
    ],
    "e": "Базовая форма: ponerse algo."
  },
  {
    "id": "clothes_put_on_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: ponerse algo.",
    "a": [
      "надевать что-либо",
      "надевать"
    ],
    "e": "ponerse algo — надевать что-либо."
  },
  {
    "id": "clothes_put_on_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я надеваю пальто перед выходом.»: Me ___ el abrigo antes de salir.",
    "a": [
      "pongo"
    ],
    "e": "Me pongo el abrigo antes de salir. — Я надеваю пальто перед выходом."
  },
  {
    "id": "clothes_take_off_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: снимать что-либо.",
    "a": [
      "quitarse algo",
      "quitarse"
    ],
    "e": "Базовая форма: quitarse algo."
  },
  {
    "id": "clothes_take_off_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: quitarse algo.",
    "a": [
      "снимать что-либо",
      "снимать"
    ],
    "e": "quitarse algo — снимать что-либо."
  },
  {
    "id": "clothes_take_off_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я снимаю обувь, когда прихожу домой.»: Me ___ los zapatos al llegar a casa.",
    "a": [
      "quito"
    ],
    "e": "Me quito los zapatos al llegar a casa. — Я снимаю обувь, когда прихожу домой."
  },
  {
    "id": "clothes_change_clothes_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: переодеваться.",
    "a": [
      "cambiarse de ropa",
      "cambiarse"
    ],
    "e": "Базовая форма: cambiarse de ropa."
  },
  {
    "id": "clothes_change_clothes_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: cambiarse de ropa.",
    "a": [
      "переодеваться"
    ],
    "e": "cambiarse de ropa — переодеваться."
  },
  {
    "id": "clothes_change_clothes_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я собираюсь переодеться.»: Voy a ___ de ropa.",
    "a": [
      "cambiarme"
    ],
    "e": "Voy a cambiarme de ropa. — Я собираюсь переодеться."
  },
  {
    "id": "clothes_fasten_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: застёгиваться.",
    "a": [
      "abrocharse"
    ],
    "e": "Базовая форма: abrocharse."
  },
  {
    "id": "clothes_fasten_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: abrocharse.",
    "a": [
      "застёгиваться",
      "застегиваться"
    ],
    "e": "abrocharse — застёгиваться."
  },
  {
    "id": "clothes_fasten_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Я застёгиваю куртку.»: Me ___ la chaqueta.",
    "a": [
      "abrocho"
    ],
    "e": "Me abrocho la chaqueta. — Я застёгиваю куртку."
  },
  {
    "id": "clothes_unfasten_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: расстёгиваться.",
    "a": [
      "desabrocharse"
    ],
    "e": "Базовая форма: desabrocharse."
  },
  {
    "id": "clothes_unfasten_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: desabrocharse.",
    "a": [
      "расстёгиваться",
      "расстегиваться"
    ],
    "e": "desabrocharse — расстёгиваться."
  },
  {
    "id": "clothes_unfasten_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Он расстёгивает пальто.»: Se ___ el abrigo.",
    "a": [
      "desabrocha"
    ],
    "e": "Se desabrocha el abrigo. — Он расстёгивает пальто."
  },
  {
    "id": "clothes_fits_well_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мне хорошо сидит / подходит.",
    "a": [
      "me queda bien"
    ],
    "e": "Базовая форма: me queda bien."
  },
  {
    "id": "clothes_fits_well_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: me queda bien.",
    "a": [
      "мне хорошо сидит",
      "мне подходит",
      "мне хорошо сидит / подходит"
    ],
    "e": "me queda bien — мне хорошо сидит / подходит."
  },
  {
    "id": "clothes_fits_well_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Эта рубашка мне хорошо сидит.»: Esta camisa me ___ bien.",
    "a": [
      "queda"
    ],
    "e": "Esta camisa me queda bien. — Эта рубашка мне хорошо сидит."
  },
  {
    "id": "clothes_too_big_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мне велико.",
    "a": [
      "me queda grande"
    ],
    "e": "Базовая форма: me queda grande."
  },
  {
    "id": "clothes_too_big_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: me queda grande.",
    "a": [
      "мне велико",
      "велико"
    ],
    "e": "me queda grande — мне велико."
  },
  {
    "id": "clothes_too_big_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Этот свитер мне велик.»: Este jersey me queda ___.",
    "a": [
      "grande"
    ],
    "e": "Este jersey me queda grande. — Этот свитер мне велик."
  },
  {
    "id": "clothes_too_small_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мне мало.",
    "a": [
      "me queda pequeño",
      "me queda pequeña"
    ],
    "e": "Базовая форма: me queda pequeño."
  },
  {
    "id": "clothes_too_small_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: me queda pequeño.",
    "a": [
      "мне мало",
      "мало"
    ],
    "e": "me queda pequeño — мне мало."
  },
  {
    "id": "clothes_too_small_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Платье мне мало.»: El vestido me queda ___.",
    "a": [
      "pequeño"
    ],
    "e": "El vestido me queda pequeño. — Платье мне мало."
  },
  {
    "id": "clothes_too_tight_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мне жмёт.",
    "a": [
      "me aprieta",
      "me aprietan"
    ],
    "e": "Базовая форма: me aprieta."
  },
  {
    "id": "clothes_too_tight_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: me aprieta.",
    "a": [
      "мне жмёт",
      "жмёт",
      "жмет"
    ],
    "e": "me aprieta — мне жмёт."
  },
  {
    "id": "clothes_too_tight_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Эти туфли мне жмут.»: Estos zapatos me ___.",
    "a": [
      "aprietan"
    ],
    "e": "Estos zapatos me aprietan. — Эти туфли мне жмут."
  },
  {
    "id": "clothes_length_fit_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: мне длинно / коротко.",
    "a": [
      "me está largo",
      "me esta largo",
      "me está corto",
      "me esta corto"
    ],
    "e": "Базовая форма: me está largo / corto."
  },
  {
    "id": "clothes_length_fit_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: me está largo / corto.",
    "a": [
      "мне длинно",
      "мне коротко",
      "мне длинно / коротко"
    ],
    "e": "me está largo / corto — мне длинно / коротко."
  },
  {
    "id": "clothes_length_fit_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Эти брюки мне немного длинноваты.»: Este pantalón me está un poco ___.",
    "a": [
      "largo"
    ],
    "e": "Este pantalón me está un poco largo. — Эти брюки мне немного длинноваты."
  },
  {
    "id": "clothes_match_with_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: сочетаться с.",
    "a": [
      "combinar con"
    ],
    "e": "Базовая форма: combinar con."
  },
  {
    "id": "clothes_match_with_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: combinar con.",
    "a": [
      "сочетаться с",
      "сочетаться"
    ],
    "e": "combinar con — сочетаться с."
  },
  {
    "id": "clothes_match_with_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Рубашка сочетается с этими брюками.»: La camisa ___ con estos pantalones.",
    "a": [
      "combina"
    ],
    "e": "La camisa combina con estos pantalones. — Рубашка сочетается с этими брюками."
  },
  {
    "id": "clothes_on_sale_es",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: быть на распродаже / по акции.",
    "a": [
      "estar de oferta"
    ],
    "e": "Базовая форма: estar de oferta."
  },
  {
    "id": "clothes_on_sale_ru",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Узнай слово",
    "q": "Переведи на русский: estar de oferta.",
    "a": [
      "быть на распродаже",
      "быть по акции",
      "быть на распродаже / по акции"
    ],
    "e": "estar de oferta — быть на распродаже / по акции."
  },
  {
    "id": "clothes_on_sale_ctx",
    "topic": "clothes",
    "foodCat": "tryon",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Эта куртка сейчас по акции.»: Esta chaqueta está de ___.",
    "a": [
      "oferta"
    ],
    "e": "Esta chaqueta está de oferta. — Эта куртка сейчас по акции."
  },
  {
    "id": "clothes_another_size_es",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: У вас есть другой размер?.",
    "a": [
      "¿Tiene otra talla?",
      "Tiene otra talla?"
    ],
    "e": "Базовая форма: ¿Tiene otra talla?."
  },
  {
    "id": "clothes_another_size_ru",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Узнай слово",
    "q": "Переведи на русский: ¿Tiene otra talla?.",
    "a": [
      "у вас есть другой размер",
      "есть другой размер",
      "У вас есть другой размер?"
    ],
    "e": "¿Tiene otra talla? — У вас есть другой размер?."
  },
  {
    "id": "clothes_another_size_ctx",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «У вас есть эта рубашка в другом размере?»: ¿Tiene esta camisa en otra ___?",
    "a": [
      "talla"
    ],
    "e": "¿Tiene esta camisa en otra talla? — У вас есть эта рубашка в другом размере?"
  },
  {
    "id": "clothes_can_try_it_es",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: Можно это примерить?.",
    "a": [
      "¿Puedo probármelo?",
      "Puedo probármelo?",
      "¿Puedo probarmelo?",
      "Puedo probarmelo?"
    ],
    "e": "Базовая форма: ¿Puedo probármelo?."
  },
  {
    "id": "clothes_can_try_it_ru",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Узнай слово",
    "q": "Переведи на русский: ¿Puedo probármelo?.",
    "a": [
      "можно это примерить",
      "могу я это примерить",
      "Можно это примерить?"
    ],
    "e": "¿Puedo probármelo? — Можно это примерить?."
  },
  {
    "id": "clothes_can_try_it_ctx",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Мне нравится это пальто. Можно его примерить?»: Me gusta este abrigo. ¿Puedo ___?",
    "a": [
      "probármelo",
      "probarmelo"
    ],
    "e": "Me gusta este abrigo. ¿Puedo probármelo? — Мне нравится это пальто. Можно его примерить?"
  },
  {
    "id": "clothes_where_fittingrooms_es",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: Где примерочные?.",
    "a": [
      "¿Dónde están los probadores?",
      "Donde estan los probadores?",
      "Dónde están los probadores?"
    ],
    "e": "Базовая форма: ¿Dónde están los probadores?."
  },
  {
    "id": "clothes_where_fittingrooms_ru",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Узнай слово",
    "q": "Переведи на русский: ¿Dónde están los probadores?.",
    "a": [
      "где примерочные",
      "где находятся примерочные",
      "Где примерочные?"
    ],
    "e": "¿Dónde están los probadores? — Где примерочные?."
  },
  {
    "id": "clothes_where_fittingrooms_ctx",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Где находятся примерочные?»: ¿Dónde están los ___?",
    "a": [
      "probadores"
    ],
    "e": "¿Dónde están los probadores? — Где находятся примерочные?"
  },
  {
    "id": "clothes_take_it_es",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Вспомни слово",
    "q": "Переведи на испанский: Я это беру..",
    "a": [
      "Me lo llevo.",
      "Me lo llevo"
    ],
    "e": "Базовая форма: Me lo llevo.."
  },
  {
    "id": "clothes_take_it_ru",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Узнай слово",
    "q": "Переведи на русский: Me lo llevo..",
    "a": [
      "я это беру",
      "беру",
      "Я это беру."
    ],
    "e": "Me lo llevo. — Я это беру.."
  },
  {
    "id": "clothes_take_it_ctx",
    "topic": "clothes",
    "foodCat": "store",
    "skill": "Слово в контексте",
    "q": "Вставь пропущенное слово по переводу «Сидит идеально. Я это беру.»: Me queda perfecto. Me lo ___.",
    "a": [
      "llevo"
    ],
    "e": "Me queda perfecto. Me lo llevo. — Сидит идеально. Я это беру."
  },
  {
    "id": "choice_clothes_tshirt",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: футболка.",
    "a": [
      "la camiseta"
    ],
    "options": [
      "la camiseta",
      "la camisa",
      "la blusa",
      "el jersey"
    ],
    "e": "la camiseta — футболка."
  },
  {
    "id": "choice_clothes_shirt",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рубашка.",
    "a": [
      "la camisa"
    ],
    "options": [
      "la camisa",
      "la blusa",
      "el jersey",
      "el cárdigan"
    ],
    "e": "la camisa — рубашка."
  },
  {
    "id": "choice_clothes_blouse",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: блузка.",
    "a": [
      "la blusa"
    ],
    "options": [
      "la blusa",
      "el jersey",
      "el cárdigan",
      "la sudadera con capucha"
    ],
    "e": "la blusa — блузка."
  },
  {
    "id": "choice_clothes_sweater",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: свитер.",
    "a": [
      "el jersey"
    ],
    "options": [
      "el jersey",
      "el cárdigan",
      "la sudadera con capucha",
      "el chaleco"
    ],
    "e": "el jersey — свитер."
  },
  {
    "id": "choice_clothes_cardigan",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кардиган, кофта.",
    "a": [
      "el cárdigan"
    ],
    "options": [
      "el cárdigan",
      "la sudadera con capucha",
      "el chaleco",
      "el polo"
    ],
    "e": "el cárdigan — кардиган, кофта."
  },
  {
    "id": "choice_clothes_hoodie",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: худи, толстовка с капюшоном.",
    "a": [
      "la sudadera con capucha"
    ],
    "options": [
      "la sudadera con capucha",
      "el chaleco",
      "el polo",
      "la chaqueta"
    ],
    "e": "la sudadera con capucha — худи, толстовка с капюшоном."
  },
  {
    "id": "choice_clothes_vest",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: жилет.",
    "a": [
      "el chaleco"
    ],
    "options": [
      "el chaleco",
      "el polo",
      "la chaqueta",
      "el abrigo"
    ],
    "e": "el chaleco — жилет."
  },
  {
    "id": "choice_clothes_polo",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: поло.",
    "a": [
      "el polo"
    ],
    "options": [
      "el polo",
      "la chaqueta",
      "el abrigo",
      "el vestido"
    ],
    "e": "el polo — поло."
  },
  {
    "id": "choice_clothes_jacket",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: куртка, пиджак.",
    "a": [
      "la chaqueta"
    ],
    "options": [
      "la chaqueta",
      "el abrigo",
      "el vestido",
      "la falda"
    ],
    "e": "la chaqueta — куртка, пиджак."
  },
  {
    "id": "choice_clothes_coat",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пальто.",
    "a": [
      "el abrigo"
    ],
    "options": [
      "el abrigo",
      "el vestido",
      "la falda",
      "los pantalones"
    ],
    "e": "el abrigo — пальто."
  },
  {
    "id": "choice_clothes_dress",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: платье.",
    "a": [
      "el vestido"
    ],
    "options": [
      "el vestido",
      "la falda",
      "los pantalones",
      "los vaqueros"
    ],
    "e": "el vestido — платье."
  },
  {
    "id": "choice_clothes_skirt",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: юбка.",
    "a": [
      "la falda"
    ],
    "options": [
      "la falda",
      "los pantalones",
      "los vaqueros",
      "los pantalones cortos"
    ],
    "e": "la falda — юбка."
  },
  {
    "id": "choice_clothes_trousers",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: брюки, штаны.",
    "a": [
      "los pantalones"
    ],
    "options": [
      "los pantalones",
      "los vaqueros",
      "los pantalones cortos",
      "el traje"
    ],
    "e": "los pantalones — брюки, штаны."
  },
  {
    "id": "choice_clothes_jeans",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: джинсы.",
    "a": [
      "los vaqueros"
    ],
    "options": [
      "los vaqueros",
      "los pantalones cortos",
      "el traje",
      "el pijama"
    ],
    "e": "los vaqueros — джинсы."
  },
  {
    "id": "choice_clothes_shorts",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шорты.",
    "a": [
      "los pantalones cortos"
    ],
    "options": [
      "los pantalones cortos",
      "el traje",
      "el pijama",
      "la ropa interior"
    ],
    "e": "los pantalones cortos — шорты."
  },
  {
    "id": "choice_clothes_suit",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: костюм.",
    "a": [
      "el traje"
    ],
    "options": [
      "el traje",
      "el pijama",
      "la ropa interior",
      "los calcetines"
    ],
    "e": "el traje — костюм."
  },
  {
    "id": "choice_clothes_pajamas",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пижама.",
    "a": [
      "el pijama"
    ],
    "options": [
      "el pijama",
      "la ropa interior",
      "los calcetines",
      "el sujetador"
    ],
    "e": "el pijama — пижама."
  },
  {
    "id": "choice_clothes_underwear",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: нижнее бельё.",
    "a": [
      "la ropa interior"
    ],
    "options": [
      "la ropa interior",
      "los calcetines",
      "el sujetador",
      "las medias"
    ],
    "e": "la ropa interior — нижнее бельё."
  },
  {
    "id": "choice_clothes_socks",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: носки.",
    "a": [
      "los calcetines"
    ],
    "options": [
      "los calcetines",
      "el sujetador",
      "las medias",
      "los leggings / las mallas"
    ],
    "e": "los calcetines — носки."
  },
  {
    "id": "choice_clothes_shoes",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: туфли, обувь.",
    "a": [
      "los zapatos"
    ],
    "options": [
      "los zapatos",
      "las sandalias",
      "los zapatos de tacón",
      "las zapatillas de casa"
    ],
    "e": "los zapatos — туфли, обувь."
  },
  {
    "id": "choice_clothes_sneakers",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кроссовки.",
    "a": [
      "las zapatillas deportivas"
    ],
    "options": [
      "las zapatillas deportivas",
      "los zapatos de tacón",
      "las zapatillas de casa",
      "las chanclas"
    ],
    "e": "las zapatillas deportivas — кроссовки."
  },
  {
    "id": "choice_clothes_boots",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сапоги, ботинки.",
    "a": [
      "las botas"
    ],
    "options": [
      "las botas",
      "las zapatillas de casa",
      "las chanclas",
      "las botas de agua"
    ],
    "e": "las botas — сапоги, ботинки."
  },
  {
    "id": "choice_clothes_ankleboots",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ботильоны, короткие ботинки.",
    "a": [
      "los botines"
    ],
    "options": [
      "los botines",
      "las chanclas",
      "las botas de agua",
      "los zapatos"
    ],
    "e": "los botines — ботильоны, короткие ботинки."
  },
  {
    "id": "choice_clothes_sandals",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сандалии, босоножки.",
    "a": [
      "las sandalias"
    ],
    "options": [
      "las sandalias",
      "las botas de agua",
      "los zapatos",
      "las zapatillas deportivas"
    ],
    "e": "las sandalias — сандалии, босоножки."
  },
  {
    "id": "choice_clothes_heels",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: туфли на каблуке.",
    "a": [
      "los zapatos de tacón"
    ],
    "options": [
      "los zapatos de tacón",
      "los zapatos",
      "las zapatillas deportivas",
      "las botas"
    ],
    "e": "los zapatos de tacón — туфли на каблуке."
  },
  {
    "id": "choice_clothes_slippers",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: домашние тапочки.",
    "a": [
      "las zapatillas de casa"
    ],
    "options": [
      "las zapatillas de casa",
      "las zapatillas deportivas",
      "las botas",
      "los botines"
    ],
    "e": "las zapatillas de casa — домашние тапочки."
  },
  {
    "id": "choice_clothes_belt",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ремень.",
    "a": [
      "el cinturón"
    ],
    "options": [
      "el cinturón",
      "el botón",
      "la bufanda",
      "los guantes"
    ],
    "e": "el cinturón — ремень."
  },
  {
    "id": "choice_clothes_scarf",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шарф.",
    "a": [
      "la bufanda"
    ],
    "options": [
      "la bufanda",
      "el cinturón",
      "los guantes",
      "las gafas de sol"
    ],
    "e": "la bufanda — шарф."
  },
  {
    "id": "choice_clothes_gloves",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: перчатки.",
    "a": [
      "los guantes"
    ],
    "options": [
      "los guantes",
      "la bufanda",
      "las gafas de sol",
      "el paraguas"
    ],
    "e": "los guantes — перчатки."
  },
  {
    "id": "choice_clothes_sunglasses",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: солнцезащитные очки.",
    "a": [
      "las gafas de sol"
    ],
    "options": [
      "las gafas de sol",
      "los guantes",
      "el paraguas",
      "la corbata"
    ],
    "e": "las gafas de sol — солнцезащитные очки."
  },
  {
    "id": "choice_clothes_umbrella",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: зонт.",
    "a": [
      "el paraguas"
    ],
    "options": [
      "el paraguas",
      "las gafas de sol",
      "la corbata",
      "la pajarita"
    ],
    "e": "el paraguas — зонт."
  },
  {
    "id": "choice_clothes_tie",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: галстук.",
    "a": [
      "la corbata"
    ],
    "options": [
      "la corbata",
      "el paraguas",
      "la pajarita",
      "el pañuelo"
    ],
    "e": "la corbata — галстук."
  },
  {
    "id": "choice_clothes_bowtie",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: галстук-бабочка.",
    "a": [
      "la pajarita"
    ],
    "options": [
      "la pajarita",
      "la corbata",
      "el pañuelo",
      "la cremallera"
    ],
    "e": "la pajarita — галстук-бабочка."
  },
  {
    "id": "choice_clothes_handkerchief",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: платок.",
    "a": [
      "el pañuelo"
    ],
    "options": [
      "el pañuelo",
      "la pajarita",
      "la cremallera",
      "el botón"
    ],
    "e": "el pañuelo — платок."
  },
  {
    "id": "choice_clothes_necklace",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ожерелье, колье.",
    "a": [
      "el collar"
    ],
    "options": [
      "el collar",
      "el broche",
      "la cadena",
      "la pulsera"
    ],
    "e": "el collar — ожерелье, колье."
  },
  {
    "id": "choice_clothes_bracelet",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: браслет.",
    "a": [
      "la pulsera"
    ],
    "options": [
      "la pulsera",
      "la cadena",
      "el collar",
      "el anillo"
    ],
    "e": "la pulsera — браслет."
  },
  {
    "id": "choice_clothes_ring",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кольцо.",
    "a": [
      "el anillo"
    ],
    "options": [
      "el anillo",
      "el collar",
      "la pulsera",
      "los pendientes"
    ],
    "e": "el anillo — кольцо."
  },
  {
    "id": "choice_clothes_earrings",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: серьги.",
    "a": [
      "los pendientes"
    ],
    "options": [
      "los pendientes",
      "la pulsera",
      "el anillo",
      "el reloj"
    ],
    "e": "los pendientes — серьги."
  },
  {
    "id": "choice_clothes_watch",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: наручные часы.",
    "a": [
      "el reloj"
    ],
    "options": [
      "el reloj",
      "el anillo",
      "los pendientes",
      "el broche"
    ],
    "e": "el reloj — наручные часы."
  },
  {
    "id": "choice_clothes_brooch",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: брошь.",
    "a": [
      "el broche"
    ],
    "options": [
      "el broche",
      "los pendientes",
      "el reloj",
      "la cadena"
    ],
    "e": "el broche — брошь."
  },
  {
    "id": "choice_clothes_chain",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: цепочка.",
    "a": [
      "la cadena"
    ],
    "options": [
      "la cadena",
      "el reloj",
      "el broche",
      "el collar"
    ],
    "e": "la cadena — цепочка."
  },
  {
    "id": "choice_clothes_hat",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шляпа.",
    "a": [
      "el sombrero"
    ],
    "options": [
      "el sombrero",
      "el gorro",
      "la boina",
      "la capucha"
    ],
    "e": "el sombrero — шляпа."
  },
  {
    "id": "choice_clothes_cap",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кепка, бейсболка.",
    "a": [
      "la gorra"
    ],
    "options": [
      "la gorra",
      "la boina",
      "la capucha",
      "el sombrero"
    ],
    "e": "la gorra — кепка, бейсболка."
  },
  {
    "id": "choice_clothes_beanie",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шапка.",
    "a": [
      "el gorro"
    ],
    "options": [
      "el gorro",
      "la capucha",
      "el sombrero",
      "la gorra"
    ],
    "e": "el gorro — шапка."
  },
  {
    "id": "choice_clothes_beret",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: берет.",
    "a": [
      "la boina"
    ],
    "options": [
      "la boina",
      "el sombrero",
      "la gorra",
      "el gorro"
    ],
    "e": "la boina — берет."
  },
  {
    "id": "choice_clothes_hood",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: капюшон.",
    "a": [
      "la capucha"
    ],
    "options": [
      "la capucha",
      "la gorra",
      "el gorro",
      "la boina"
    ],
    "e": "la capucha — капюшон."
  },
  {
    "id": "choice_clothes_handbag",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сумка.",
    "a": [
      "el bolso"
    ],
    "options": [
      "el bolso",
      "la cartera",
      "el monedero",
      "la maleta"
    ],
    "e": "el bolso — сумка."
  },
  {
    "id": "choice_clothes_backpack",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рюкзак.",
    "a": [
      "la mochila"
    ],
    "options": [
      "la mochila",
      "el monedero",
      "la maleta",
      "la riñonera"
    ],
    "e": "la mochila — рюкзак."
  },
  {
    "id": "choice_clothes_wallet",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кошелёк, портмоне.",
    "a": [
      "la cartera"
    ],
    "options": [
      "la cartera",
      "la maleta",
      "la riñonera",
      "el bolso"
    ],
    "e": "la cartera — кошелёк, портмоне."
  },
  {
    "id": "choice_clothes_coinpurse",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кошелёк для мелочи.",
    "a": [
      "el monedero"
    ],
    "options": [
      "el monedero",
      "la riñonera",
      "el bolso",
      "la mochila"
    ],
    "e": "el monedero — кошелёк для мелочи."
  },
  {
    "id": "choice_clothes_suitcase",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: чемодан.",
    "a": [
      "la maleta"
    ],
    "options": [
      "la maleta",
      "el bolso",
      "la mochila",
      "la cartera"
    ],
    "e": "la maleta — чемодан."
  },
  {
    "id": "choice_clothes_waistbag",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: поясная сумка.",
    "a": [
      "la riñonera"
    ],
    "options": [
      "la riñonera",
      "la mochila",
      "la cartera",
      "el monedero"
    ],
    "e": "la riñonera — поясная сумка."
  },
  {
    "id": "choice_clothes_size",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: размер одежды.",
    "a": [
      "la talla"
    ],
    "options": [
      "la talla",
      "probarse algo",
      "ponerse algo",
      "quitarse algo"
    ],
    "e": "la talla — размер одежды."
  },
  {
    "id": "choice_clothes_fittingroom",
    "topic": "clothes",
    "foodCat": "store",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: примерочная.",
    "a": [
      "el probador"
    ],
    "options": [
      "el probador",
      "¿Puedo probármelo?",
      "¿Dónde están los probadores?",
      "Me lo llevo."
    ],
    "e": "el probador — примерочная."
  },
  {
    "id": "choice_clothes_bra",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: бюстгальтер.",
    "a": [
      "el sujetador"
    ],
    "options": [
      "el sujetador",
      "el chaleco",
      "el polo",
      "la chaqueta"
    ],
    "e": "el sujetador — бюстгальтер."
  },
  {
    "id": "choice_clothes_tights",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: колготки / чулки.",
    "a": [
      "las medias"
    ],
    "options": [
      "las medias",
      "el polo",
      "la chaqueta",
      "el abrigo"
    ],
    "e": "las medias — колготки / чулки."
  },
  {
    "id": "choice_clothes_leggings",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: легинсы.",
    "a": [
      "los leggings / las mallas"
    ],
    "options": [
      "los leggings / las mallas",
      "la chaqueta",
      "el abrigo",
      "el vestido"
    ],
    "e": "los leggings / las mallas — легинсы."
  },
  {
    "id": "choice_clothes_tracksuit",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: спортивный костюм.",
    "a": [
      "el chándal"
    ],
    "options": [
      "el chándal",
      "el abrigo",
      "el vestido",
      "la falda"
    ],
    "e": "el chándal — спортивный костюм."
  },
  {
    "id": "choice_clothes_swimsuit",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: купальник / плавки.",
    "a": [
      "el bañador"
    ],
    "options": [
      "el bañador",
      "el vestido",
      "la falda",
      "los pantalones"
    ],
    "e": "el bañador — купальник / плавки."
  },
  {
    "id": "choice_clothes_raincoat",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: дождевик.",
    "a": [
      "el impermeable"
    ],
    "options": [
      "el impermeable",
      "la falda",
      "los pantalones",
      "los vaqueros"
    ],
    "e": "el impermeable — дождевик."
  },
  {
    "id": "choice_clothes_flipflops",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: шлёпанцы.",
    "a": [
      "las chanclas"
    ],
    "options": [
      "las chanclas",
      "las sandalias",
      "los zapatos de tacón",
      "las zapatillas de casa"
    ],
    "e": "las chanclas — шлёпанцы."
  },
  {
    "id": "choice_clothes_rainboots",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: резиновые сапоги.",
    "a": [
      "las botas de agua"
    ],
    "options": [
      "las botas de agua",
      "los zapatos de tacón",
      "las zapatillas de casa",
      "las chanclas"
    ],
    "e": "las botas de agua — резиновые сапоги."
  },
  {
    "id": "choice_clothes_zipper",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: молния.",
    "a": [
      "la cremallera"
    ],
    "options": [
      "la cremallera",
      "el botón",
      "el cinturón",
      "la bufanda"
    ],
    "e": "la cremallera — молния."
  },
  {
    "id": "choice_clothes_button",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пуговица.",
    "a": [
      "el botón"
    ],
    "options": [
      "el botón",
      "el cinturón",
      "la bufanda",
      "los guantes"
    ],
    "e": "el botón — пуговица."
  },
  {
    "id": "choice_clothes_try_on",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: примерять что-либо.",
    "a": [
      "probarse algo"
    ],
    "options": [
      "probarse algo",
      "estar de oferta",
      "la talla",
      "ponerse algo"
    ],
    "e": "probarse algo — примерять что-либо."
  },
  {
    "id": "choice_clothes_put_on",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: надевать что-либо.",
    "a": [
      "ponerse algo"
    ],
    "options": [
      "ponerse algo",
      "la talla",
      "probarse algo",
      "quitarse algo"
    ],
    "e": "ponerse algo — надевать что-либо."
  },
  {
    "id": "choice_clothes_take_off",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: снимать что-либо.",
    "a": [
      "quitarse algo"
    ],
    "options": [
      "quitarse algo",
      "probarse algo",
      "ponerse algo",
      "cambiarse de ropa"
    ],
    "e": "quitarse algo — снимать что-либо."
  },
  {
    "id": "choice_clothes_change_clothes",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: переодеваться.",
    "a": [
      "cambiarse de ropa"
    ],
    "options": [
      "cambiarse de ropa",
      "ponerse algo",
      "quitarse algo",
      "abrocharse"
    ],
    "e": "cambiarse de ropa — переодеваться."
  },
  {
    "id": "choice_clothes_fasten",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: застёгиваться.",
    "a": [
      "abrocharse"
    ],
    "options": [
      "abrocharse",
      "quitarse algo",
      "cambiarse de ropa",
      "desabrocharse"
    ],
    "e": "abrocharse — застёгиваться."
  },
  {
    "id": "choice_clothes_unfasten",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: расстёгиваться.",
    "a": [
      "desabrocharse"
    ],
    "options": [
      "desabrocharse",
      "cambiarse de ropa",
      "abrocharse",
      "me queda bien"
    ],
    "e": "desabrocharse — расстёгиваться."
  },
  {
    "id": "choice_clothes_fits_well",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне хорошо сидит / подходит.",
    "a": [
      "me queda bien"
    ],
    "options": [
      "me queda bien",
      "abrocharse",
      "desabrocharse",
      "me queda grande"
    ],
    "e": "me queda bien — мне хорошо сидит / подходит."
  },
  {
    "id": "choice_clothes_too_big",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне велико.",
    "a": [
      "me queda grande"
    ],
    "options": [
      "me queda grande",
      "desabrocharse",
      "me queda bien",
      "me queda pequeño"
    ],
    "e": "me queda grande — мне велико."
  },
  {
    "id": "choice_clothes_too_small",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне мало.",
    "a": [
      "me queda pequeño"
    ],
    "options": [
      "me queda pequeño",
      "me queda bien",
      "me queda grande",
      "me aprieta"
    ],
    "e": "me queda pequeño — мне мало."
  },
  {
    "id": "choice_clothes_too_tight",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне жмёт.",
    "a": [
      "me aprieta"
    ],
    "options": [
      "me aprieta",
      "me queda grande",
      "me queda pequeño",
      "me está largo / corto"
    ],
    "e": "me aprieta — мне жмёт."
  },
  {
    "id": "choice_clothes_length_fit",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мне длинно / коротко.",
    "a": [
      "me está largo / corto"
    ],
    "options": [
      "me está largo / corto",
      "me queda pequeño",
      "me aprieta",
      "combinar con"
    ],
    "e": "me está largo / corto — мне длинно / коротко."
  },
  {
    "id": "choice_clothes_match_with",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: сочетаться с.",
    "a": [
      "combinar con"
    ],
    "options": [
      "combinar con",
      "me aprieta",
      "me está largo / corto",
      "estar de oferta"
    ],
    "e": "combinar con — сочетаться с."
  },
  {
    "id": "choice_clothes_on_sale",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: быть на распродаже / по акции.",
    "a": [
      "estar de oferta"
    ],
    "options": [
      "estar de oferta",
      "me está largo / corto",
      "combinar con",
      "la talla"
    ],
    "e": "estar de oferta — быть на распродаже / по акции."
  },
  {
    "id": "choice_clothes_another_size",
    "topic": "clothes",
    "foodCat": "store",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: У вас есть другой размер?.",
    "a": [
      "¿Tiene otra talla?"
    ],
    "options": [
      "¿Tiene otra talla?",
      "¿Puedo probármelo?",
      "¿Dónde están los probadores?",
      "Me lo llevo."
    ],
    "e": "¿Tiene otra talla? — У вас есть другой размер?."
  },
  {
    "id": "choice_clothes_can_try_it",
    "topic": "clothes",
    "foodCat": "store",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Можно это примерить?.",
    "a": [
      "¿Puedo probármelo?"
    ],
    "options": [
      "¿Puedo probármelo?",
      "¿Dónde están los probadores?",
      "Me lo llevo.",
      "el probador"
    ],
    "e": "¿Puedo probármelo? — Можно это примерить?."
  },
  {
    "id": "choice_clothes_where_fittingrooms",
    "topic": "clothes",
    "foodCat": "store",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Где примерочные?.",
    "a": [
      "¿Dónde están los probadores?"
    ],
    "options": [
      "¿Dónde están los probadores?",
      "Me lo llevo.",
      "el probador",
      "¿Tiene otra talla?"
    ],
    "e": "¿Dónde están los probadores? — Где примерочные?."
  },
  {
    "id": "choice_clothes_take_it",
    "topic": "clothes",
    "foodCat": "store",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: Я это беру..",
    "a": [
      "Me lo llevo."
    ],
    "options": [
      "Me lo llevo.",
      "el probador",
      "¿Tiene otra talla?",
      "¿Puedo probármelo?"
    ],
    "e": "Me lo llevo. — Я это беру.."
  },
  {
    "id": "audio_clothes_tshirt",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo una camiseta blanca.",
    "a": [
      "Llevo una camiseta blanca."
    ],
    "e": "На мне белая футболка."
  },
  {
    "id": "audio_clothes_shirt",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Él lleva una camisa azul.",
    "a": [
      "Él lleva una camisa azul."
    ],
    "e": "На нём синяя рубашка."
  },
  {
    "id": "audio_clothes_blouse",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La blusa combina con la falda.",
    "a": [
      "La blusa combina con la falda."
    ],
    "e": "Блузка сочетается с юбкой."
  },
  {
    "id": "audio_clothes_sweater",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me pongo un jersey de lana.",
    "a": [
      "Me pongo un jersey de lana."
    ],
    "e": "Я надеваю шерстяной свитер."
  },
  {
    "id": "audio_clothes_cardigan",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo un cárdigan beige.",
    "a": [
      "Llevo un cárdigan beige."
    ],
    "e": "На мне бежевый кардиган."
  },
  {
    "id": "audio_clothes_hoodie",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo una sudadera con capucha verde.",
    "a": [
      "Llevo una sudadera con capucha verde."
    ],
    "e": "На мне зелёное худи."
  },
  {
    "id": "audio_clothes_vest",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva un chaleco beige.",
    "a": [
      "Lleva un chaleco beige."
    ],
    "e": "На нём бежевый жилет."
  },
  {
    "id": "audio_clothes_polo",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva un polo blanco.",
    "a": [
      "Lleva un polo blanco."
    ],
    "e": "На нём белое поло."
  },
  {
    "id": "audio_clothes_jacket",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito una chaqueta ligera.",
    "a": [
      "Necesito una chaqueta ligera."
    ],
    "e": "Мне нужна лёгкая куртка."
  },
  {
    "id": "audio_clothes_coat",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ponte el abrigo, hace frío.",
    "a": [
      "Ponte el abrigo, hace frío."
    ],
    "e": "Надень пальто, холодно."
  },
  {
    "id": "audio_clothes_dress",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ella lleva un vestido rojo.",
    "a": [
      "Ella lleva un vestido rojo."
    ],
    "e": "На ней красное платье."
  },
  {
    "id": "audio_clothes_skirt",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La falda me queda bien.",
    "a": [
      "La falda me queda bien."
    ],
    "e": "Юбка хорошо на мне сидит."
  },
  {
    "id": "audio_clothes_trousers",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estos pantalones son cómodos.",
    "a": [
      "Estos pantalones son cómodos."
    ],
    "e": "Эти брюки удобные."
  },
  {
    "id": "audio_clothes_jeans",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Siempre llevo vaqueros los viernes.",
    "a": [
      "Siempre llevo vaqueros los viernes."
    ],
    "e": "По пятницам я всегда ношу джинсы."
  },
  {
    "id": "audio_clothes_shorts",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "En verano llevo pantalones cortos.",
    "a": [
      "En verano llevo pantalones cortos."
    ],
    "e": "Летом я ношу шорты."
  },
  {
    "id": "audio_clothes_suit",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva traje para la entrevista.",
    "a": [
      "Lleva traje para la entrevista."
    ],
    "e": "Он надевает костюм на собеседование."
  },
  {
    "id": "audio_clothes_pajamas",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me pongo el pijama antes de dormir.",
    "a": [
      "Me pongo el pijama antes de dormir."
    ],
    "e": "Я надеваю пижаму перед сном."
  },
  {
    "id": "audio_clothes_underwear",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La ropa interior está en el cajón.",
    "a": [
      "La ropa interior está en el cajón."
    ],
    "e": "Нижнее бельё находится в ящике."
  },
  {
    "id": "audio_clothes_socks",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito un par de calcetines.",
    "a": [
      "Necesito un par de calcetines."
    ],
    "e": "Мне нужна пара носков."
  },
  {
    "id": "audio_clothes_shoes",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estos zapatos me quedan pequeños.",
    "a": [
      "Estos zapatos me quedan pequeños."
    ],
    "e": "Эти туфли мне малы."
  },
  {
    "id": "audio_clothes_sneakers",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Corro con zapatillas deportivas.",
    "a": [
      "Corro con zapatillas deportivas."
    ],
    "e": "Я бегаю в кроссовках."
  },
  {
    "id": "audio_clothes_boots",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo botas cuando llueve.",
    "a": [
      "Llevo botas cuando llueve."
    ],
    "e": "Я ношу сапоги, когда идёт дождь."
  },
  {
    "id": "audio_clothes_ankleboots",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Los botines combinan con el vestido.",
    "a": [
      "Los botines combinan con el vestido."
    ],
    "e": "Ботильоны сочетаются с платьем."
  },
  {
    "id": "audio_clothes_sandals",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo sandalias en la playa.",
    "a": [
      "Llevo sandalias en la playa."
    ],
    "e": "На пляже я ношу сандалии."
  },
  {
    "id": "audio_clothes_heels",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ella lleva zapatos de tacón.",
    "a": [
      "Ella lleva zapatos de tacón."
    ],
    "e": "Она носит туфли на каблуке."
  },
  {
    "id": "audio_clothes_slippers",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me pongo las zapatillas de casa.",
    "a": [
      "Me pongo las zapatillas de casa."
    ],
    "e": "Я надеваю домашние тапочки."
  },
  {
    "id": "audio_clothes_belt",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El cinturón es de cuero.",
    "a": [
      "El cinturón es de cuero."
    ],
    "e": "Ремень сделан из кожи."
  },
  {
    "id": "audio_clothes_scarf",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me pongo una bufanda roja.",
    "a": [
      "Me pongo una bufanda roja."
    ],
    "e": "Я надеваю красный шарф."
  },
  {
    "id": "audio_clothes_gloves",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No encuentro mis guantes.",
    "a": [
      "No encuentro mis guantes."
    ],
    "e": "Я не могу найти свои перчатки."
  },
  {
    "id": "audio_clothes_sunglasses",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito gafas de sol.",
    "a": [
      "Necesito gafas de sol."
    ],
    "e": "Мне нужны солнцезащитные очки."
  },
  {
    "id": "audio_clothes_umbrella",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva un paraguas, va a llover.",
    "a": [
      "Lleva un paraguas, va a llover."
    ],
    "e": "Возьми зонт, будет дождь."
  },
  {
    "id": "audio_clothes_tie",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La corbata combina con la camisa.",
    "a": [
      "La corbata combina con la camisa."
    ],
    "e": "Галстук сочетается с рубашкой."
  },
  {
    "id": "audio_clothes_bowtie",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva una pajarita negra.",
    "a": [
      "Lleva una pajarita negra."
    ],
    "e": "На нём чёрный галстук-бабочка."
  },
  {
    "id": "audio_clothes_handkerchief",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva un pañuelo en el cuello.",
    "a": [
      "Lleva un pañuelo en el cuello."
    ],
    "e": "На ней платок на шее."
  },
  {
    "id": "audio_clothes_necklace",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El collar es de plata.",
    "a": [
      "El collar es de plata."
    ],
    "e": "Ожерелье сделано из серебра."
  },
  {
    "id": "audio_clothes_bracelet",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo una pulsera dorada.",
    "a": [
      "Llevo una pulsera dorada."
    ],
    "e": "Я ношу золотистый браслет."
  },
  {
    "id": "audio_clothes_ring",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El anillo está en la caja.",
    "a": [
      "El anillo está en la caja."
    ],
    "e": "Кольцо находится в коробке."
  },
  {
    "id": "audio_clothes_earrings",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva unos pendientes pequeños.",
    "a": [
      "Lleva unos pendientes pequeños."
    ],
    "e": "Она носит маленькие серьги."
  },
  {
    "id": "audio_clothes_watch",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Miro la hora en mi reloj.",
    "a": [
      "Miro la hora en mi reloj."
    ],
    "e": "Я смотрю время на своих часах."
  },
  {
    "id": "audio_clothes_brooch",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El broche tiene forma de flor.",
    "a": [
      "El broche tiene forma de flor."
    ],
    "e": "Брошь имеет форму цветка."
  },
  {
    "id": "audio_clothes_chain",
    "topic": "clothes",
    "foodCat": "jewelry",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La cadena es muy fina.",
    "a": [
      "La cadena es muy fina."
    ],
    "e": "Цепочка очень тонкая."
  },
  {
    "id": "audio_clothes_hat",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El sombrero protege del sol.",
    "a": [
      "El sombrero protege del sol."
    ],
    "e": "Шляпа защищает от солнца."
  },
  {
    "id": "audio_clothes_cap",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me pongo una gorra para correr.",
    "a": [
      "Me pongo una gorra para correr."
    ],
    "e": "Я надеваю кепку для пробежки."
  },
  {
    "id": "audio_clothes_beanie",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ponte el gorro, hace frío.",
    "a": [
      "Ponte el gorro, hace frío."
    ],
    "e": "Надень шапку, холодно."
  },
  {
    "id": "audio_clothes_beret",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La boina es de color rojo.",
    "a": [
      "La boina es de color rojo."
    ],
    "e": "Берет красного цвета."
  },
  {
    "id": "audio_clothes_hood",
    "topic": "clothes",
    "foodCat": "headwear",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Sube la capucha porque llueve.",
    "a": [
      "Sube la capucha porque llueve."
    ],
    "e": "Подними капюшон, потому что идёт дождь."
  },
  {
    "id": "audio_clothes_handbag",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El móvil está en mi bolso.",
    "a": [
      "El móvil está en mi bolso."
    ],
    "e": "Телефон находится в моей сумке."
  },
  {
    "id": "audio_clothes_backpack",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo el portátil en la mochila.",
    "a": [
      "Llevo el portátil en la mochila."
    ],
    "e": "Я ношу ноутбук в рюкзаке."
  },
  {
    "id": "audio_clothes_wallet",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Guardo las tarjetas en la cartera.",
    "a": [
      "Guardo las tarjetas en la cartera."
    ],
    "e": "Я храню карты в кошельке."
  },
  {
    "id": "audio_clothes_coinpurse",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Las monedas están en el monedero.",
    "a": [
      "Las monedas están en el monedero."
    ],
    "e": "Монеты находятся в кошельке."
  },
  {
    "id": "audio_clothes_suitcase",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Preparo la maleta para el viaje.",
    "a": [
      "Preparo la maleta para el viaje."
    ],
    "e": "Я собираю чемодан для поездки."
  },
  {
    "id": "audio_clothes_waistbag",
    "topic": "clothes",
    "foodCat": "bags",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Guardo las llaves en la riñonera.",
    "a": [
      "Guardo las llaves en la riñonera."
    ],
    "e": "Я храню ключи в поясной сумке."
  },
  {
    "id": "audio_clothes_size",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Qué talla necesitas? — Necesito una talla M.",
    "a": [
      "¿Qué talla necesitas? — Necesito una talla M."
    ],
    "e": "Какой размер тебе нужен? — Мне нужен размер M."
  },
  {
    "id": "audio_clothes_fittingroom",
    "topic": "clothes",
    "foodCat": "store",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Dónde están los probadores?",
    "a": [
      "¿Dónde están los probadores?"
    ],
    "e": "Где находятся примерочные?"
  },
  {
    "id": "audio_clothes_bra",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito un sujetador cómodo.",
    "a": [
      "Necesito un sujetador cómodo."
    ],
    "e": "Мне нужен удобный бюстгальтер."
  },
  {
    "id": "audio_clothes_tights",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lleva medias negras con el vestido.",
    "a": [
      "Lleva medias negras con el vestido."
    ],
    "e": "Она носит чёрные колготки с платьем."
  },
  {
    "id": "audio_clothes_leggings",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me pongo unos leggings para entrenar.",
    "a": [
      "Me pongo unos leggings para entrenar."
    ],
    "e": "Я надеваю легинсы для тренировки."
  },
  {
    "id": "audio_clothes_tracksuit",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo un chándal cuando hago deporte.",
    "a": [
      "Llevo un chándal cuando hago deporte."
    ],
    "e": "Я ношу спортивный костюм, когда занимаюсь спортом."
  },
  {
    "id": "audio_clothes_swimsuit",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "He metido el bañador en la maleta.",
    "a": [
      "He metido el bañador en la maleta."
    ],
    "e": "Я положил(а) купальник в чемодан."
  },
  {
    "id": "audio_clothes_raincoat",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ponte el impermeable porque está lloviendo.",
    "a": [
      "Ponte el impermeable porque está lloviendo."
    ],
    "e": "Надень дождевик, потому что идёт дождь."
  },
  {
    "id": "audio_clothes_flipflops",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Llevo chanclas en la playa.",
    "a": [
      "Llevo chanclas en la playa."
    ],
    "e": "Я ношу шлёпанцы на пляже."
  },
  {
    "id": "audio_clothes_rainboots",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito botas de agua para la lluvia.",
    "a": [
      "Necesito botas de agua para la lluvia."
    ],
    "e": "Мне нужны резиновые сапоги для дождя."
  },
  {
    "id": "audio_clothes_zipper",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La cremallera de la chaqueta está rota.",
    "a": [
      "La cremallera de la chaqueta está rota."
    ],
    "e": "Молния на куртке сломана."
  },
  {
    "id": "audio_clothes_button",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Falta un botón en la camisa.",
    "a": [
      "Falta un botón en la camisa."
    ],
    "e": "На рубашке не хватает пуговицы."
  },
  {
    "id": "audio_clothes_try_on",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quiero probarme esta chaqueta.",
    "a": [
      "Quiero probarme esta chaqueta."
    ],
    "e": "Я хочу примерить эту куртку."
  },
  {
    "id": "audio_clothes_put_on",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me pongo el abrigo antes de salir.",
    "a": [
      "Me pongo el abrigo antes de salir."
    ],
    "e": "Я надеваю пальто перед выходом."
  },
  {
    "id": "audio_clothes_take_off",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me quito los zapatos al llegar a casa.",
    "a": [
      "Me quito los zapatos al llegar a casa."
    ],
    "e": "Я снимаю обувь, когда прихожу домой."
  },
  {
    "id": "audio_clothes_change_clothes",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Voy a cambiarme de ropa.",
    "a": [
      "Voy a cambiarme de ropa."
    ],
    "e": "Я собираюсь переодеться."
  },
  {
    "id": "audio_clothes_fasten",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me abrocho la chaqueta.",
    "a": [
      "Me abrocho la chaqueta."
    ],
    "e": "Я застёгиваю куртку."
  },
  {
    "id": "audio_clothes_unfasten",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Se desabrocha el abrigo.",
    "a": [
      "Se desabrocha el abrigo."
    ],
    "e": "Он расстёгивает пальто."
  },
  {
    "id": "audio_clothes_fits_well",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Esta camisa me queda bien.",
    "a": [
      "Esta camisa me queda bien."
    ],
    "e": "Эта рубашка мне хорошо сидит."
  },
  {
    "id": "audio_clothes_too_big",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Este jersey me queda grande.",
    "a": [
      "Este jersey me queda grande."
    ],
    "e": "Этот свитер мне велик."
  },
  {
    "id": "audio_clothes_too_small",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El vestido me queda pequeño.",
    "a": [
      "El vestido me queda pequeño."
    ],
    "e": "Платье мне мало."
  },
  {
    "id": "audio_clothes_too_tight",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estos zapatos me aprietan.",
    "a": [
      "Estos zapatos me aprietan."
    ],
    "e": "Эти туфли мне жмут."
  },
  {
    "id": "audio_clothes_length_fit",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Este pantalón me está un poco largo.",
    "a": [
      "Este pantalón me está un poco largo."
    ],
    "e": "Эти брюки мне немного длинноваты."
  },
  {
    "id": "audio_clothes_match_with",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "La camisa combina con estos pantalones.",
    "a": [
      "La camisa combina con estos pantalones."
    ],
    "e": "Рубашка сочетается с этими брюками."
  },
  {
    "id": "audio_clothes_on_sale",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Esta chaqueta está de oferta.",
    "a": [
      "Esta chaqueta está de oferta."
    ],
    "e": "Эта куртка сейчас по акции."
  },
  {
    "id": "audio_clothes_another_size",
    "topic": "clothes",
    "foodCat": "store",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Tiene esta camisa en otra talla?",
    "a": [
      "¿Tiene esta camisa en otra talla?"
    ],
    "e": "У вас есть эта рубашка в другом размере?"
  },
  {
    "id": "audio_clothes_can_try_it",
    "topic": "clothes",
    "foodCat": "store",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta este abrigo. ¿Puedo probármelo?",
    "a": [
      "Me gusta este abrigo. ¿Puedo probármelo?"
    ],
    "e": "Мне нравится это пальто. Можно его примерить?"
  },
  {
    "id": "audio_clothes_where_fittingrooms",
    "topic": "clothes",
    "foodCat": "store",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "¿Dónde están los probadores?",
    "a": [
      "¿Dónde están los probadores?"
    ],
    "e": "Где находятся примерочные?"
  },
  {
    "id": "audio_clothes_take_it",
    "topic": "clothes",
    "foodCat": "store",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me queda perfecto. Me lo llevo.",
    "a": [
      "Me queda perfecto. Me lo llevo."
    ],
    "e": "Сидит идеально. Я это беру."
  },
  {
    "id": "match_recent_clothes_recent",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини недавно добавленную одежду с переводом.",
    "pairs": [
      [
        "las medias",
        "колготки / чулки"
      ],
      [
        "los leggings / las mallas",
        "легинсы"
      ],
      [
        "el chándal",
        "спортивный костюм"
      ],
      [
        "el bañador",
        "купальник / плавки"
      ],
      [
        "el impermeable",
        "дождевик"
      ],
      [
        "las chanclas",
        "шлёпанцы"
      ],
      [
        "las botas de agua",
        "резиновые сапоги"
      ]
    ],
    "a": [
      "колготки / чулки | легинсы | спортивный костюм | купальник / плавки | дождевик | шлёпанцы | резиновые сапоги"
    ],
    "displayAnswer": "las medias — колготки / чулки · los leggings / las mallas — легинсы · el chándal — спортивный костюм · el bañador — купальник / плавки · el impermeable — дождевик · las chanclas — шлёпанцы · las botas de agua — резиновые сапоги",
    "e": "Каждая карточка представлена своим основным термином."
  },
  {
    "id": "match_recent_clothes_actions",
    "topic": "clothes",
    "foodCat": "tryon",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини действия при примерке с переводом.",
    "pairs": [
      [
        "probarse algo",
        "примерять что-либо"
      ],
      [
        "ponerse algo",
        "надевать что-либо"
      ],
      [
        "quitarse algo",
        "снимать что-либо"
      ],
      [
        "cambiarse de ropa",
        "переодеваться"
      ],
      [
        "abrocharse",
        "застёгиваться"
      ],
      [
        "desabrocharse",
        "расстёгиваться"
      ],
      [
        "me queda bien",
        "мне хорошо сидит / подходит"
      ],
      [
        "me queda grande",
        "мне велико"
      ]
    ],
    "a": [
      "примерять что-либо | надевать что-либо | снимать что-либо | переодеваться | застёгиваться | расстёгиваться | мне хорошо сидит / подходит | мне велико"
    ],
    "displayAnswer": "probarse algo — примерять что-либо · ponerse algo — надевать что-либо · quitarse algo — снимать что-либо · cambiarse de ropa — переодеваться · abrocharse — застёгиваться · desabrocharse — расстёгиваться · me queda bien — мне хорошо сидит / подходит · me queda grande — мне велико",
    "e": "Здесь нет двух действий с одинаковым значением."
  },
  {
    "id": "match_recent_clothes_details",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини детали одежды с переводом.",
    "pairs": [
      [
        "la cremallera",
        "молния"
      ],
      [
        "el botón",
        "пуговица"
      ],
      [
        "el cinturón",
        "ремень"
      ],
      [
        "la bufanda",
        "шарф"
      ],
      [
        "los guantes",
        "перчатки"
      ],
      [
        "el paraguas",
        "зонт"
      ]
    ],
    "a": [
      "молния | пуговица | ремень | шарф | перчатки | зонт"
    ],
    "displayAnswer": "la cremallera — молния · el botón — пуговица · el cinturón — ремень · la bufanda — шарф · los guantes — перчатки · el paraguas — зонт",
    "e": "Каждый предмет имеет отдельное название."
  },
  {
    "id": "passage_recent_clothes_weather",
    "topic": "clothes",
    "foodCat": "clothes",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Одежда по ситуации: расставь слова по однозначным пропускам.",
    "template": "Cuando llueve, me pongo el {{0}} y las {{1}}. En la playa llevo {{2}}, y para nadar en la piscina uso el {{3}}.",
    "blanks": [
      "impermeable",
      "botas de agua",
      "chanclas",
      "bañador"
    ],
    "a": [
      "impermeable | botas de agua | chanclas | bañador"
    ],
    "displayAnswer": "Cuando llueve, me pongo el impermeable y las botas de agua. En la playa llevo chanclas, y para nadar en la piscina uso el bañador.",
    "e": "Погода и ситуация однозначно определяют предмет одежды.",
    "ruTranslation": "Когда идёт дождь, я надеваю дождевик и резиновые сапоги. На пляже я ношу шлёпанцы, а для плавания в бассейне использую купальник."
  },
  {
    "id": "passage_recent_clothes_details",
    "topic": "clothes",
    "foodCat": "accessories",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Одежда: детали: расставь слова по однозначным пропускам.",
    "template": "Si se rompe la {{0}} de la chaqueta, es difícil cerrarla. Si se cae el {{1}} de la camisa, hay que coserlo. Para que no se me caigan los pantalones, me pongo el {{2}}.",
    "blanks": [
      "cremallera",
      "botón",
      "cinturón"
    ],
    "a": [
      "cremallera | botón | cinturón"
    ],
    "displayAnswer": "Si se rompe la cremallera de la chaqueta, es difícil cerrarla. Si se cae el botón de la camisa, hay que coserlo. Para que no se me caigan los pantalones, me pongo el cinturón.",
    "e": "Функция детали исключает взаимозаменяемость вариантов.",
    "ruTranslation": "Если на куртке ломается молния, её трудно застегнуть. Если с рубашки отрывается пуговица, её нужно пришить. Чтобы брюки не спадали, я надеваю ремень."
  },
  {
    "id": "ser_estar_hay_leather_shoes",
    "topic": "clothes",
    "foodCat": "shoes",
    "type": "ser-estar-hay",
    "skill": "Ser, estar или hay",
    "q": "Впиши нужную форму ser, estar или hay: Estas zapatillas ___ de cuero.",
    "a": [
      "son"
    ],
    "displayAnswer": "son",
    "e": "Материал и характеристика предмета выражаются ser."
  },
  {
    "id": "picture_man_clothes",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду мужчины: название вещи + цвет.",
    "pictureScene": "clothes_man",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 20,
        "reveal": "el polo blanco",
        "answers": [
          "polo blanco"
        ],
        "translation": "белое поло",
        "markerX": 45,
        "markerY": 39
      },
      {
        "side": "left",
        "top": 36,
        "reveal": "los pantalones grises",
        "answers": [
          "pantalones grises"
        ],
        "translation": "серые брюки",
        "markerX": 50,
        "markerY": 34
      },
      {
        "side": "right",
        "top": 28,
        "reveal": "la chaqueta azul",
        "answers": [
          "chaqueta azul"
        ],
        "translation": "синяя куртка",
        "markerX": 40,
        "markerY": 32
      },
      {
        "side": "right",
        "top": 48,
        "reveal": "la mochila negra",
        "answers": [
          "mochila negra"
        ],
        "translation": "чёрный рюкзак",
        "markerX": 50,
        "markerY": 64
      },
      {
        "side": "left",
        "top": 84,
        "reveal": "las zapatillas deportivas beige",
        "answers": [
          "zapatillas deportivas beige",
          "tenis beige"
        ],
        "translation": "бежевые кроссовки",
        "markerX": 50,
        "markerY": 86
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "el polo blanco | los pantalones grises | la chaqueta azul | la mochila negra | las zapatillas deportivas beige"
    ],
    "displayAnswer": "1. el polo blanco · 2. los pantalones grises · 3. la chaqueta azul · 4. la mochila negra · 5. las zapatillas deportivas beige",
    "e": ""
  },
  {
    "id": "picture_man_clothes_2",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду мужчины: название вещи + цвет.",
    "pictureScene": "clothes_man_2",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 12,
        "reveal": "el gorro negro",
        "answers": [
          "gorro negro"
        ],
        "translation": "чёрная шапка",
        "markerX": 50,
        "markerY": 13
      },
      {
        "side": "right",
        "top": 31,
        "reveal": "el jersey beige",
        "answers": [
          "jersey beige",
          "suéter beige"
        ],
        "translation": "бежевый свитер",
        "markerX": 50,
        "markerY": 35
      },
      {
        "side": "left",
        "top": 43,
        "reveal": "el abrigo negro",
        "answers": [
          "abrigo negro"
        ],
        "translation": "чёрное пальто",
        "markerX": 50,
        "markerY": 63
      },
      {
        "side": "right",
        "top": 52,
        "reveal": "la bufanda gris",
        "answers": [
          "bufanda gris"
        ],
        "translation": "серый шарф",
        "markerX": 50,
        "markerY": 49
      },
      {
        "side": "left",
        "top": 86,
        "reveal": "las botas negras",
        "answers": [
          "botas negras"
        ],
        "translation": "чёрные ботинки",
        "markerX": 50,
        "markerY": 85
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "el gorro negro | el jersey beige | el abrigo negro | la bufanda gris | las botas negras"
    ],
    "displayAnswer": "1. el gorro negro · 2. el jersey beige · 3. el abrigo negro · 4. la bufanda gris · 5. las botas negras",
    "e": ""
  },
  {
    "id": "picture_man_clothes_3",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду мужчины: название вещи + цвет.",
    "pictureScene": "clothes_man_3",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 13,
        "reveal": "la gorra beige",
        "answers": [
          "gorra beige"
        ],
        "translation": "бежевая кепка",
        "markerX": 50,
        "markerY": 13
      },
      {
        "side": "right",
        "top": 34,
        "reveal": "la camisa verde",
        "answers": [
          "camisa verde"
        ],
        "translation": "зелёная рубашка",
        "markerX": 50,
        "markerY": 43
      },
      {
        "side": "left",
        "top": 64,
        "reveal": "los vaqueros azules",
        "answers": [
          "vaqueros azules",
          "jeans azules"
        ],
        "translation": "синие джинсы",
        "markerX": 50,
        "markerY": 66
      },
      {
        "side": "right",
        "top": 86,
        "reveal": "las zapatillas deportivas blancas",
        "answers": [
          "zapatillas deportivas blancas",
          "tenis blancas"
        ],
        "translation": "белые кроссовки",
        "markerX": 50,
        "markerY": 27
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "la gorra beige | la camisa verde | los vaqueros azules | las zapatillas deportivas blancas"
    ],
    "displayAnswer": "1. la gorra beige · 2. la camisa verde · 3. los vaqueros azules · 4. las zapatillas deportivas blancas",
    "e": ""
  },
  {
    "id": "picture_man_clothes_4",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду мужчины: название вещи + цвет.",
    "pictureScene": "clothes_man_4",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 20,
        "reveal": "el chaleco beige",
        "answers": [
          "chaleco beige"
        ],
        "translation": "бежевый жилет",
        "markerX": 50,
        "markerY": 16
      },
      {
        "side": "right",
        "top": 36,
        "reveal": "la sudadera con capucha verde",
        "answers": [
          "sudadera con capucha verde",
          "sudadera verde"
        ],
        "translation": "зелёное худи",
        "markerX": 50,
        "markerY": 38
      },
      {
        "side": "left",
        "top": 64,
        "reveal": "los pantalones marrones",
        "answers": [
          "pantalones marrones"
        ],
        "translation": "коричневые брюки",
        "markerX": 50,
        "markerY": 57
      },
      {
        "side": "right",
        "top": 86,
        "reveal": "las zapatillas deportivas blancas",
        "answers": [
          "zapatillas deportivas blancas",
          "tenis blancas"
        ],
        "translation": "белые кроссовки",
        "markerX": 40,
        "markerY": 40
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "el chaleco beige | la sudadera con capucha verde | los pantalones marrones | las zapatillas deportivas blancas"
    ],
    "displayAnswer": "1. el chaleco beige · 2. la sudadera con capucha verde · 3. los pantalones marrones · 4. las zapatillas deportivas blancas",
    "e": ""
  },
  {
    "id": "picture_man_clothes_5",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду мужчины: название вещи + цвет.",
    "pictureScene": "clothes_man_5",
    "pictureHint": "На изображении используются номера 2–5; введи ответы напротив тех же номеров.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 28,
        "reveal": "la sudadera con capucha negra",
        "answers": [
          "sudadera con capucha negra",
          "sudadera negra"
        ],
        "translation": "чёрное худи",
        "displayNumber": 2,
        "markerX": 50,
        "markerY": 23
      },
      {
        "side": "right",
        "top": 44,
        "reveal": "la mochila negra",
        "answers": [
          "mochila negra"
        ],
        "translation": "чёрный рюкзак",
        "displayNumber": 3,
        "markerX": 45,
        "markerY": 41
      },
      {
        "side": "left",
        "top": 66,
        "reveal": "los vaqueros azules",
        "answers": [
          "vaqueros azules",
          "jeans azules"
        ],
        "translation": "синие джинсы",
        "displayNumber": 4,
        "markerX": 50,
        "markerY": 66
      },
      {
        "side": "right",
        "top": 86,
        "reveal": "las zapatillas deportivas blancas",
        "answers": [
          "zapatillas deportivas blancas",
          "tenis blancas"
        ],
        "translation": "белые кроссовки",
        "displayNumber": 5,
        "markerX": 50,
        "markerY": 49
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "la sudadera con capucha negra | la mochila negra | los vaqueros azules | las zapatillas deportivas blancas"
    ],
    "displayAnswer": "1. la sudadera con capucha negra · 2. la mochila negra · 3. los vaqueros azules · 4. las zapatillas deportivas blancas",
    "e": ""
  },
  {
    "id": "picture_woman_clothes",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду девушки: название вещи + цвет.",
    "pictureScene": "clothes_woman",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 26,
        "reveal": "la ropa interior blanca / el sujetador blanco",
        "answers": [
          "ropa interior blanca",
          "sujetador blanco"
        ],
        "translation": "белое нижнее бельё / белый лифчик (бюстгальтер)",
        "markerX": 50,
        "markerY": 16
      },
      {
        "side": "right",
        "top": 50,
        "reveal": "el pijama rosa",
        "answers": [
          "pijama rosa"
        ],
        "translation": "розовая пижама",
        "markerX": 50,
        "markerY": 27
      },
      {
        "side": "left",
        "top": 84,
        "reveal": "las zapatillas de casa blancas",
        "answers": [
          "zapatillas de casa blancas"
        ],
        "translation": "белые домашние тапочки",
        "markerX": 50,
        "markerY": 53
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "la ropa interior blanca / el sujetador blanco | el pijama rosa | las zapatillas de casa blancas"
    ],
    "displayAnswer": "1. la ropa interior blanca / el sujetador blanco · 2. el pijama rosa · 3. las zapatillas de casa blancas",
    "e": ""
  },
  {
    "id": "picture_woman_clothes_2",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду девушки: название вещи + цвет.",
    "pictureScene": "clothes_woman_2",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 26,
        "reveal": "la blusa blanca",
        "answers": [
          "blusa blanca"
        ],
        "translation": "белая блузка",
        "markerX": 50,
        "markerY": 12
      },
      {
        "side": "right",
        "top": 38,
        "reveal": "la chaqueta marrón",
        "answers": [
          "chaqueta marrón"
        ],
        "translation": "коричневая куртка",
        "markerX": 50,
        "markerY": 33
      },
      {
        "side": "left",
        "top": 62,
        "reveal": "la falda marrón",
        "answers": [
          "falda marrón"
        ],
        "translation": "коричневая юбка",
        "markerX": 50,
        "markerY": 57
      },
      {
        "side": "right",
        "top": 86,
        "reveal": "los zapatos de tacón marrones",
        "answers": [
          "zapatos de tacón marrones",
          "tacones marrones"
        ],
        "translation": "коричневые туфли на каблуке",
        "markerX": 40,
        "markerY": 42
      },
      {
        "side": "left",
        "top": 12,
        "reveal": "el sombrero marrón",
        "answers": [
          "sombrero marrón"
        ],
        "translation": "коричневая шляпа",
        "markerX": 50,
        "markerY": 85
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "la blusa blanca | la chaqueta marrón | la falda marrón | los zapatos de tacón marrones | el sombrero marrón"
    ],
    "displayAnswer": "1. la blusa blanca · 2. la chaqueta marrón · 3. la falda marrón · 4. los zapatos de tacón marrones · 5. el sombrero marrón",
    "e": ""
  },
  {
    "id": "picture_woman_clothes_3",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду девушки: название вещи + цвет.",
    "pictureScene": "clothes_woman_3",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 30,
        "reveal": "la chaqueta marrón",
        "answers": [
          "chaqueta marrón"
        ],
        "translation": "коричневая куртка",
        "markerX": 50,
        "markerY": 16
      },
      {
        "side": "right",
        "top": 40,
        "reveal": "el jersey beige",
        "answers": [
          "jersey beige",
          "suéter beige"
        ],
        "translation": "бежевый свитер",
        "markerX": 50,
        "markerY": 43
      },
      {
        "side": "left",
        "top": 62,
        "reveal": "el vestido marrón",
        "answers": [
          "vestido marrón"
        ],
        "translation": "коричневое платье",
        "markerX": 50,
        "markerY": 66
      },
      {
        "side": "right",
        "top": 54,
        "reveal": "el bolso negro",
        "answers": [
          "bolso negro"
        ],
        "translation": "чёрная сумка",
        "markerX": 50,
        "markerY": 27
      },
      {
        "side": "left",
        "top": 86,
        "reveal": "las botas marrones",
        "answers": [
          "botas marrones"
        ],
        "translation": "коричневые сапоги",
        "markerX": 50,
        "markerY": 86
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "la chaqueta marrón | el jersey beige | el vestido marrón | el bolso negro | las botas marrones"
    ],
    "displayAnswer": "1. la chaqueta marrón · 2. el jersey beige · 3. el vestido marrón · 4. el bolso negro · 5. las botas marrones",
    "e": ""
  },
  {
    "id": "picture_woman_clothes_4",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду девушки: название вещи + цвет.",
    "pictureScene": "clothes_woman_4",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 14,
        "reveal": "las gafas de sol marrones",
        "answers": [
          "gafas de sol marrones"
        ],
        "translation": "коричневые солнцезащитные очки",
        "markerX": 50,
        "markerY": 27
      },
      {
        "side": "right",
        "top": 34,
        "reveal": "la camiseta blanca",
        "answers": [
          "camiseta blanca"
        ],
        "translation": "белая футболка",
        "markerX": 50,
        "markerY": 39
      },
      {
        "side": "left",
        "top": 44,
        "reveal": "la camisa azul",
        "answers": [
          "camisa azul"
        ],
        "translation": "синяя рубашка",
        "markerX": 50,
        "markerY": 63
      },
      {
        "side": "right",
        "top": 66,
        "reveal": "los pantalones cortos beige",
        "answers": [
          "pantalones cortos beige",
          "shorts beige"
        ],
        "translation": "бежевые шорты",
        "markerX": 40,
        "markerY": 40
      },
      {
        "side": "left",
        "top": 86,
        "reveal": "las sandalias marrones",
        "answers": [
          "sandalias marrones"
        ],
        "translation": "коричневые сандалии",
        "markerX": 50,
        "markerY": 86
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "las gafas de sol marrones | la camiseta blanca | la camisa azul | los pantalones cortos beige | las sandalias marrones"
    ],
    "displayAnswer": "1. las gafas de sol marrones · 2. la camiseta blanca · 3. la camisa azul · 4. los pantalones cortos beige · 5. las sandalias marrones",
    "e": ""
  },
  {
    "id": "picture_woman_clothes_5",
    "topic": "clothes",
    "foodCat": "all",
    "type": "picture-label",
    "skill": "Подпиши картинку",
    "q": "Подпиши одежду девушки: название вещи + цвет.",
    "pictureScene": "clothes_woman_5",
    "pictureHint": "Используй только слова из изученных карточек. Артикль необязателен.",
    "pictureLabels": [
      {
        "side": "left",
        "top": 28,
        "reveal": "el cárdigan beige",
        "answers": [
          "cárdigan beige",
          "cardigan beige"
        ],
        "translation": "бежевый кардиган",
        "markerX": 50,
        "markerY": 12
      },
      {
        "side": "right",
        "top": 38,
        "reveal": "la camiseta blanca",
        "answers": [
          "camiseta blanca"
        ],
        "translation": "белая футболка",
        "markerX": 50,
        "markerY": 36
      },
      {
        "side": "right",
        "top": 52,
        "reveal": "el bolso marrón",
        "answers": [
          "bolso marrón"
        ],
        "translation": "коричневая сумка",
        "markerX": 50,
        "markerY": 55
      },
      {
        "side": "left",
        "top": 66,
        "reveal": "los pantalones verdes",
        "answers": [
          "pantalones verdes"
        ],
        "translation": "зелёные брюки",
        "markerX": 61,
        "markerY": 43
      },
      {
        "side": "right",
        "top": 86,
        "reveal": "las zapatillas deportivas blancas",
        "answers": [
          "zapatillas deportivas blancas",
          "tenis blancas"
        ],
        "translation": "белые кроссовки",
        "markerX": 50,
        "markerY": 86
      }
    ],
    "pictureNumbersEmbedded": true,
    "a": [
      "el cárdigan beige | la camiseta blanca | el bolso marrón | los pantalones verdes | las zapatillas deportivas blancas"
    ],
    "displayAnswer": "1. el cárdigan beige · 2. la camiseta blanca · 3. el bolso marrón · 4. los pantalones verdes · 5. las zapatillas deportivas blancas",
    "e": ""
  }
];

export const clothesTopic = {
  id: "clothes",
  title: "Одежда и аксессуары",
  icon: "◇",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
