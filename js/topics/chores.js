/**
 * Домашние дела topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "limpiar",
    "cat": "chores",
    "word": "limpiar",
    "base": "limpiar",
    "gender": "глагол на -ar",
    "tr": "убирать / чистить",
    "ru": [
      "убирать",
      "чистить"
    ],
    "answers": [
      "limpiar"
    ],
    "art": null,
    "examples": [
      [
        "Limpio la cocina después de cenar.",
        "Я убираю кухню после ужина."
      ],
      [
        "Hay que limpiar el baño hoy.",
        "Сегодня нужно почистить ванную."
      ]
    ],
    "cloze": "Yo ___ la cocina.",
    "clozeAnswers": [
      "limpio"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/limpiar.webp"
  },
  {
    "id": "ordenar",
    "cat": "chores",
    "word": "ordenar",
    "base": "ordenar",
    "gender": "глагол на -ar",
    "tr": "наводить порядок",
    "ru": [
      "наводить порядок"
    ],
    "answers": [
      "ordenar"
    ],
    "art": null,
    "examples": [
      [
        "Ordeno mi habitación cada mañana.",
        "Я навожу порядок в комнате каждое утро."
      ],
      [
        "Vamos a ordenar el armario.",
        "Давай наведём порядок в шкафу."
      ]
    ],
    "cloze": "Yo ___ mi habitación.",
    "clozeAnswers": [
      "ordeno"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/ordenar.webp"
  },
  {
    "id": "hacer_limpieza",
    "cat": "chores",
    "word": "hacer la limpieza",
    "base": "hacer la limpieza",
    "gender": "устойчивое выражение",
    "tr": "делать уборку",
    "ru": [
      "делать уборку",
      "убираться"
    ],
    "answers": [
      "hacer la limpieza",
      "hacer limpieza"
    ],
    "art": null,
    "examples": [
      [
        "Hacemos la limpieza los sábados.",
        "Мы делаем уборку по субботам."
      ],
      [
        "Hoy tengo que hacer la limpieza.",
        "Сегодня мне нужно сделать уборку."
      ]
    ],
    "cloze": "Hoy voy a ___.",
    "clozeAnswers": [
      "hacer la limpieza",
      "hacer limpieza"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/hacer_limpieza.webp"
  },
  {
    "id": "barrer",
    "cat": "chores",
    "word": "barrer",
    "base": "barrer",
    "gender": "глагол на -er",
    "tr": "подметать",
    "ru": [
      "подметать"
    ],
    "answers": [
      "barrer"
    ],
    "art": null,
    "examples": [
      [
        "Barro la cocina después de cocinar.",
        "Я подметаю кухню после готовки."
      ],
      [
        "Primero hay que barrer el suelo.",
        "Сначала нужно подмести пол."
      ]
    ],
    "cloze": "Yo ___ la cocina.",
    "clozeAnswers": [
      "barro"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/barrer.webp"
  },
  {
    "id": "fregar_suelo",
    "cat": "chores",
    "word": "fregar el suelo",
    "base": "fregar el suelo",
    "gender": "e → ie",
    "tr": "мыть пол",
    "ru": [
      "мыть пол"
    ],
    "answers": [
      "fregar el suelo",
      "fregar suelo"
    ],
    "art": null,
    "examples": [
      [
        "Friego el suelo de la cocina.",
        "Я мою пол на кухне."
      ],
      [
        "Tenemos que fregar el suelo.",
        "Нам нужно вымыть пол."
      ]
    ],
    "cloze": "Yo ___ el suelo.",
    "clozeAnswers": [
      "friego"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/fregar_suelo.webp"
  },
  {
    "id": "pasar_aspiradora",
    "cat": "chores",
    "word": "pasar la aspiradora",
    "base": "pasar la aspiradora",
    "gender": "устойчивое выражение",
    "tr": "пылесосить",
    "ru": [
      "пылесосить"
    ],
    "answers": [
      "pasar la aspiradora",
      "pasar aspiradora"
    ],
    "art": null,
    "examples": [
      [
        "Paso la aspiradora en el salón.",
        "Я пылесошу в гостиной."
      ],
      [
        "¿Puedes pasar la aspiradora?",
        "Можешь пропылесосить?"
      ]
    ],
    "cloze": "Yo ___ en el salón.",
    "clozeAnswers": [
      "paso la aspiradora"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/pasar_aspiradora.webp"
  },
  {
    "id": "quitar_polvo",
    "cat": "chores",
    "word": "quitar el polvo",
    "base": "quitar el polvo",
    "gender": "устойчивое выражение",
    "tr": "вытирать пыль",
    "ru": [
      "вытирать пыль"
    ],
    "answers": [
      "quitar el polvo",
      "quitar polvo"
    ],
    "art": null,
    "examples": [
      [
        "Quito el polvo de los muebles.",
        "Я вытираю пыль с мебели."
      ],
      [
        "Hay que quitar el polvo de la estantería.",
        "Нужно вытереть пыль с полки."
      ]
    ],
    "cloze": "Yo ___ de los muebles.",
    "clozeAnswers": [
      "quito el polvo"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/quitar_polvo.webp"
  },
  {
    "id": "lavar_platos",
    "cat": "chores",
    "word": "lavar los platos",
    "base": "lavar los platos",
    "gender": "устойчивое выражение",
    "tr": "мыть посуду",
    "ru": [
      "мыть посуду"
    ],
    "answers": [
      "lavar los platos",
      "lavar platos"
    ],
    "art": null,
    "examples": [
      [
        "Lavo los platos después de comer.",
        "Я мою посуду после еды."
      ],
      [
        "Hoy te toca lavar los platos.",
        "Сегодня твоя очередь мыть посуду."
      ]
    ],
    "cloze": "Yo ___ después de comer.",
    "clozeAnswers": [
      "lavo los platos"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/lavar_platos.webp"
  },
  {
    "id": "poner_lavavajillas",
    "cat": "chores",
    "word": "poner el lavavajillas",
    "base": "poner el lavavajillas",
    "gender": "устойчивое выражение",
    "tr": "включать / загружать посудомойку",
    "ru": [
      "включать посудомойку",
      "загружать посудомойку"
    ],
    "answers": [
      "poner el lavavajillas",
      "poner lavavajillas"
    ],
    "art": null,
    "examples": [
      [
        "Pongo el lavavajillas por la noche.",
        "Я включаю посудомойку вечером."
      ],
      [
        "Primero ponemos los platos y luego el lavavajillas.",
        "Сначала ставим посуду, потом включаем посудомойку."
      ]
    ],
    "cloze": "Yo ___ por la noche.",
    "clozeAnswers": [
      "pongo el lavavajillas"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/poner_lavavajillas.webp"
  },
  {
    "id": "hacer_cama",
    "cat": "chores",
    "word": "hacer la cama",
    "base": "hacer la cama",
    "gender": "устойчивое выражение",
    "tr": "заправлять кровать",
    "ru": [
      "заправлять кровать"
    ],
    "answers": [
      "hacer la cama",
      "hacer cama"
    ],
    "art": null,
    "examples": [
      [
        "Hago la cama cada mañana.",
        "Я заправляю кровать каждое утро."
      ],
      [
        "Los niños hacen la cama solos.",
        "Дети сами заправляют кровать."
      ]
    ],
    "cloze": "Yo ___ cada mañana.",
    "clozeAnswers": [
      "hago la cama"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/hacer_cama.webp"
  },
  {
    "id": "lavar_ropa",
    "cat": "chores",
    "word": "lavar la ropa",
    "base": "lavar la ropa",
    "gender": "устойчивое выражение",
    "tr": "стирать",
    "ru": [
      "стирать",
      "стирать одежду"
    ],
    "answers": [
      "lavar la ropa",
      "lavar ropa"
    ],
    "art": null,
    "examples": [
      [
        "Lavo la ropa los domingos.",
        "Я стираю по воскресеньям."
      ],
      [
        "Tenemos que lavar la ropa blanca.",
        "Нам нужно постирать белое бельё."
      ]
    ],
    "cloze": "Yo ___ los domingos.",
    "clozeAnswers": [
      "lavo la ropa"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/lavar_ropa.webp"
  },
  {
    "id": "tender_ropa",
    "cat": "chores",
    "word": "tender la ropa",
    "base": "tender la ropa",
    "gender": "e → ie",
    "tr": "развешивать бельё",
    "ru": [
      "развешивать бельё"
    ],
    "answers": [
      "tender la ropa",
      "tender ropa"
    ],
    "art": null,
    "examples": [
      [
        "Tiendo la ropa en el balcón.",
        "Я развешиваю бельё на балконе."
      ],
      [
        "Después de lavar, hay que tender la ropa.",
        "После стирки нужно развесить бельё."
      ]
    ],
    "cloze": "Yo ___ en el balcón.",
    "clozeAnswers": [
      "tiendo la ropa"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/tender_ropa.webp"
  },
  {
    "id": "planchar",
    "cat": "chores",
    "word": "planchar",
    "base": "planchar",
    "gender": "глагол на -ar",
    "tr": "гладить",
    "ru": [
      "гладить"
    ],
    "answers": [
      "planchar"
    ],
    "art": null,
    "examples": [
      [
        "Plancho la camisa para mañana.",
        "Я глажу рубашку на завтра."
      ],
      [
        "No me gusta planchar.",
        "Я не люблю гладить."
      ]
    ],
    "cloze": "Yo ___ la camisa.",
    "clozeAnswers": [
      "plancho"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/planchar.webp"
  },
  {
    "id": "tirar_basura",
    "cat": "chores",
    "word": "tirar la basura",
    "base": "tirar la basura",
    "gender": "устойчивое выражение",
    "tr": "выбрасывать мусор",
    "ru": [
      "выбрасывать мусор",
      "выносить мусор"
    ],
    "answers": [
      "tirar la basura",
      "tirar basura"
    ],
    "art": null,
    "examples": [
      [
        "Tiro la basura antes de salir.",
        "Я выбрасываю мусор перед выходом."
      ],
      [
        "¿Puedes tirar la basura?",
        "Можешь выбросить мусор?"
      ]
    ],
    "cloze": "Yo ___ antes de salir.",
    "clozeAnswers": [
      "tiro la basura"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/tirar_basura.webp"
  },
  {
    "id": "cocinar",
    "cat": "chores",
    "word": "cocinar",
    "base": "cocinar",
    "gender": "глагол на -ar",
    "tr": "готовить",
    "ru": [
      "готовить"
    ],
    "answers": [
      "cocinar"
    ],
    "art": null,
    "examples": [
      [
        "Cocino la cena en casa.",
        "Я готовлю ужин дома."
      ],
      [
        "Nos gusta cocinar juntos.",
        "Нам нравится готовить вместе."
      ]
    ],
    "cloze": "Yo ___ la cena.",
    "clozeAnswers": [
      "cocino"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/cocinar.webp"
  },
  {
    "id": "preparar_comida",
    "cat": "chores",
    "word": "preparar la comida",
    "base": "preparar la comida",
    "gender": "устойчивое выражение",
    "tr": "готовить еду",
    "ru": [
      "готовить еду"
    ],
    "answers": [
      "preparar la comida",
      "preparar comida"
    ],
    "art": null,
    "examples": [
      [
        "Preparo la comida para toda la familia.",
        "Я готовлю еду для всей семьи."
      ],
      [
        "Vamos a preparar la comida juntos.",
        "Давай приготовим еду вместе."
      ]
    ],
    "cloze": "Yo ___ para la familia.",
    "clozeAnswers": [
      "preparo la comida"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/preparar_comida.webp"
  },
  {
    "id": "poner_mesa",
    "cat": "chores",
    "word": "poner la mesa",
    "base": "poner la mesa",
    "gender": "устойчивое выражение",
    "tr": "накрывать на стол",
    "ru": [
      "накрывать на стол"
    ],
    "answers": [
      "poner la mesa",
      "poner mesa"
    ],
    "art": null,
    "examples": [
      [
        "Pongo la mesa antes de cenar.",
        "Я накрываю на стол перед ужином."
      ],
      [
        "Los niños ayudan a poner la mesa.",
        "Дети помогают накрывать на стол."
      ]
    ],
    "cloze": "Yo ___ antes de cenar.",
    "clozeAnswers": [
      "pongo la mesa"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/poner_mesa.webp"
  },
  {
    "id": "quitar_mesa",
    "cat": "chores",
    "word": "quitar la mesa",
    "base": "quitar la mesa",
    "gender": "устойчивое выражение",
    "tr": "убирать со стола",
    "ru": [
      "убирать со стола"
    ],
    "answers": [
      "quitar la mesa",
      "quitar mesa"
    ],
    "art": null,
    "examples": [
      [
        "Quitamos la mesa después de comer.",
        "Мы убираем со стола после еды."
      ],
      [
        "Ayúdame a quitar la mesa, por favor.",
        "Помоги мне убрать со стола, пожалуйста."
      ]
    ],
    "cloze": "Nosotros ___ después de comer.",
    "clozeAnswers": [
      "quitamos la mesa"
    ],
    "meta": {
      "categoryTitle": "Домашние дела",
      "categoryOrder": 1,
      "allCategoryTitle": "Все домашние дела"
    },
    "image": "assets/picture-labels/quitar_mesa.webp"
  }
];

const EXERCISES = [
  {
    "id": "study_chores_limpiar_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: убирать / чистить.",
    "a": [
      "limpiar"
    ],
    "e": "Правильный вариант: limpiar."
  },
  {
    "id": "study_chores_limpiar_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: limpiar.",
    "a": [
      "убирать",
      "чистить",
      "убирать / чистить"
    ],
    "e": "limpiar — убирать / чистить."
  },
  {
    "id": "study_chores_limpiar_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я убираю кухню после ужина.»: Yo ___ la cocina.",
    "a": [
      "limpio"
    ],
    "e": "Limpio la cocina después de cenar. — Я убираю кухню после ужина."
  },
  {
    "id": "study_chores_ordenar_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: наводить порядок.",
    "a": [
      "ordenar"
    ],
    "e": "Правильный вариант: ordenar."
  },
  {
    "id": "study_chores_ordenar_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: ordenar.",
    "a": [
      "наводить порядок"
    ],
    "e": "ordenar — наводить порядок."
  },
  {
    "id": "study_chores_ordenar_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я навожу порядок в комнате каждое утро.»: Yo ___ mi habitación.",
    "a": [
      "ordeno"
    ],
    "e": "Ordeno mi habitación cada mañana. — Я навожу порядок в комнате каждое утро."
  },
  {
    "id": "study_chores_hacer_limpieza_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: делать уборку.",
    "a": [
      "hacer la limpieza",
      "hacer limpieza"
    ],
    "e": "Правильный вариант: hacer la limpieza."
  },
  {
    "id": "study_chores_hacer_limpieza_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: hacer la limpieza.",
    "a": [
      "делать уборку",
      "убираться"
    ],
    "e": "hacer la limpieza — делать уборку."
  },
  {
    "id": "study_chores_hacer_limpieza_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы делаем уборку по субботам.»: Hoy voy a ___.",
    "a": [
      "hacer la limpieza",
      "hacer limpieza"
    ],
    "e": "Hacemos la limpieza los sábados. — Мы делаем уборку по субботам."
  },
  {
    "id": "study_chores_barrer_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: подметать.",
    "a": [
      "barrer"
    ],
    "e": "Правильный вариант: barrer."
  },
  {
    "id": "study_chores_barrer_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: barrer.",
    "a": [
      "подметать"
    ],
    "e": "barrer — подметать."
  },
  {
    "id": "study_chores_barrer_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я подметаю кухню после готовки.»: Yo ___ la cocina.",
    "a": [
      "barro"
    ],
    "e": "Barro la cocina después de cocinar. — Я подметаю кухню после готовки."
  },
  {
    "id": "study_chores_fregar_suelo_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мыть пол.",
    "a": [
      "fregar el suelo",
      "fregar suelo"
    ],
    "e": "Правильный вариант: fregar el suelo."
  },
  {
    "id": "study_chores_fregar_suelo_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: fregar el suelo.",
    "a": [
      "мыть пол"
    ],
    "e": "fregar el suelo — мыть пол."
  },
  {
    "id": "study_chores_fregar_suelo_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я мою пол на кухне.»: Yo ___ el suelo.",
    "a": [
      "friego"
    ],
    "e": "Friego el suelo de la cocina. — Я мою пол на кухне."
  },
  {
    "id": "study_chores_pasar_aspiradora_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: пылесосить.",
    "a": [
      "pasar la aspiradora",
      "pasar aspiradora"
    ],
    "e": "Правильный вариант: pasar la aspiradora."
  },
  {
    "id": "study_chores_pasar_aspiradora_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: pasar la aspiradora.",
    "a": [
      "пылесосить"
    ],
    "e": "pasar la aspiradora — пылесосить."
  },
  {
    "id": "study_chores_pasar_aspiradora_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я пылесошу в гостиной.»: Yo ___ en el salón.",
    "a": [
      "paso la aspiradora"
    ],
    "e": "Paso la aspiradora en el salón. — Я пылесошу в гостиной."
  },
  {
    "id": "study_chores_quitar_polvo_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: вытирать пыль.",
    "a": [
      "quitar el polvo",
      "quitar polvo"
    ],
    "e": "Правильный вариант: quitar el polvo."
  },
  {
    "id": "study_chores_quitar_polvo_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: quitar el polvo.",
    "a": [
      "вытирать пыль"
    ],
    "e": "quitar el polvo — вытирать пыль."
  },
  {
    "id": "study_chores_quitar_polvo_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я вытираю пыль с мебели.»: Yo ___ de los muebles.",
    "a": [
      "quito el polvo"
    ],
    "e": "Quito el polvo de los muebles. — Я вытираю пыль с мебели."
  },
  {
    "id": "study_chores_lavar_platos_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: мыть посуду.",
    "a": [
      "lavar los platos",
      "lavar platos"
    ],
    "e": "Правильный вариант: lavar los platos."
  },
  {
    "id": "study_chores_lavar_platos_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: lavar los platos.",
    "a": [
      "мыть посуду"
    ],
    "e": "lavar los platos — мыть посуду."
  },
  {
    "id": "study_chores_lavar_platos_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я мою посуду после еды.»: Yo ___ después de comer.",
    "a": [
      "lavo los platos"
    ],
    "e": "Lavo los platos después de comer. — Я мою посуду после еды."
  },
  {
    "id": "study_chores_poner_lavavajillas_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: включать / загружать посудомойку.",
    "a": [
      "poner el lavavajillas",
      "poner lavavajillas"
    ],
    "e": "Правильный вариант: poner el lavavajillas."
  },
  {
    "id": "study_chores_poner_lavavajillas_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: poner el lavavajillas.",
    "a": [
      "включать посудомойку",
      "загружать посудомойку",
      "включать / загружать посудомойку"
    ],
    "e": "poner el lavavajillas — включать / загружать посудомойку."
  },
  {
    "id": "study_chores_poner_lavavajillas_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я включаю посудомойку вечером.»: Yo ___ por la noche.",
    "a": [
      "pongo el lavavajillas"
    ],
    "e": "Pongo el lavavajillas por la noche. — Я включаю посудомойку вечером."
  },
  {
    "id": "study_chores_hacer_cama_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: заправлять кровать.",
    "a": [
      "hacer la cama",
      "hacer cama"
    ],
    "e": "Правильный вариант: hacer la cama."
  },
  {
    "id": "study_chores_hacer_cama_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: hacer la cama.",
    "a": [
      "заправлять кровать"
    ],
    "e": "hacer la cama — заправлять кровать."
  },
  {
    "id": "study_chores_hacer_cama_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я заправляю кровать каждое утро.»: Yo ___ cada mañana.",
    "a": [
      "hago la cama"
    ],
    "e": "Hago la cama cada mañana. — Я заправляю кровать каждое утро."
  },
  {
    "id": "study_chores_lavar_ropa_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: стирать.",
    "a": [
      "lavar la ropa",
      "lavar ropa"
    ],
    "e": "Правильный вариант: lavar la ropa."
  },
  {
    "id": "study_chores_lavar_ropa_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: lavar la ropa.",
    "a": [
      "стирать",
      "стирать одежду"
    ],
    "e": "lavar la ropa — стирать."
  },
  {
    "id": "study_chores_lavar_ropa_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я стираю по воскресеньям.»: Yo ___ los domingos.",
    "a": [
      "lavo la ropa"
    ],
    "e": "Lavo la ropa los domingos. — Я стираю по воскресеньям."
  },
  {
    "id": "study_chores_tender_ropa_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: развешивать бельё.",
    "a": [
      "tender la ropa",
      "tender ropa"
    ],
    "e": "Правильный вариант: tender la ropa."
  },
  {
    "id": "study_chores_tender_ropa_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: tender la ropa.",
    "a": [
      "развешивать бельё"
    ],
    "e": "tender la ropa — развешивать бельё."
  },
  {
    "id": "study_chores_tender_ropa_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я развешиваю бельё на балконе.»: Yo ___ en el balcón.",
    "a": [
      "tiendo la ropa"
    ],
    "e": "Tiendo la ropa en el balcón. — Я развешиваю бельё на балконе."
  },
  {
    "id": "study_chores_planchar_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: гладить.",
    "a": [
      "planchar"
    ],
    "e": "Правильный вариант: planchar."
  },
  {
    "id": "study_chores_planchar_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: planchar.",
    "a": [
      "гладить"
    ],
    "e": "planchar — гладить."
  },
  {
    "id": "study_chores_planchar_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я глажу рубашку на завтра.»: Yo ___ la camisa.",
    "a": [
      "plancho"
    ],
    "e": "Plancho la camisa para mañana. — Я глажу рубашку на завтра."
  },
  {
    "id": "study_chores_tirar_basura_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: выбрасывать мусор.",
    "a": [
      "tirar la basura",
      "tirar basura"
    ],
    "e": "Правильный вариант: tirar la basura."
  },
  {
    "id": "study_chores_tirar_basura_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: tirar la basura.",
    "a": [
      "выбрасывать мусор",
      "выносить мусор"
    ],
    "e": "tirar la basura — выбрасывать мусор."
  },
  {
    "id": "study_chores_tirar_basura_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я выбрасываю мусор перед выходом.»: Yo ___ antes de salir.",
    "a": [
      "tiro la basura"
    ],
    "e": "Tiro la basura antes de salir. — Я выбрасываю мусор перед выходом."
  },
  {
    "id": "study_chores_cocinar_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: готовить.",
    "a": [
      "cocinar"
    ],
    "e": "Правильный вариант: cocinar."
  },
  {
    "id": "study_chores_cocinar_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: cocinar.",
    "a": [
      "готовить"
    ],
    "e": "cocinar — готовить."
  },
  {
    "id": "study_chores_cocinar_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я готовлю ужин дома.»: Yo ___ la cena.",
    "a": [
      "cocino"
    ],
    "e": "Cocino la cena en casa. — Я готовлю ужин дома."
  },
  {
    "id": "study_chores_preparar_comida_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: готовить еду.",
    "a": [
      "preparar la comida",
      "preparar comida"
    ],
    "e": "Правильный вариант: preparar la comida."
  },
  {
    "id": "study_chores_preparar_comida_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: preparar la comida.",
    "a": [
      "готовить еду"
    ],
    "e": "preparar la comida — готовить еду."
  },
  {
    "id": "study_chores_preparar_comida_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я готовлю еду для всей семьи.»: Yo ___ para la familia.",
    "a": [
      "preparo la comida"
    ],
    "e": "Preparo la comida para toda la familia. — Я готовлю еду для всей семьи."
  },
  {
    "id": "study_chores_poner_mesa_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: накрывать на стол.",
    "a": [
      "poner la mesa",
      "poner mesa"
    ],
    "e": "Правильный вариант: poner la mesa."
  },
  {
    "id": "study_chores_poner_mesa_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: poner la mesa.",
    "a": [
      "накрывать на стол"
    ],
    "e": "poner la mesa — накрывать на стол."
  },
  {
    "id": "study_chores_poner_mesa_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Я накрываю на стол перед ужином.»: Yo ___ antes de cenar.",
    "a": [
      "pongo la mesa"
    ],
    "e": "Pongo la mesa antes de cenar. — Я накрываю на стол перед ужином."
  },
  {
    "id": "study_chores_quitar_mesa_es",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Вспомни",
    "q": "Переведи на испанский: убирать со стола.",
    "a": [
      "quitar la mesa",
      "quitar mesa"
    ],
    "e": "Правильный вариант: quitar la mesa."
  },
  {
    "id": "study_chores_quitar_mesa_ru",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "Узнай",
    "q": "Переведи на русский: quitar la mesa.",
    "a": [
      "убирать со стола"
    ],
    "e": "quitar la mesa — убирать со стола."
  },
  {
    "id": "study_chores_quitar_mesa_ctx",
    "topic": "chores",
    "foodCat": "chores",
    "skill": "В контексте",
    "q": "Вставь пропущенную часть по переводу «Мы убираем со стола после еды.»: Nosotros ___ después de comer.",
    "a": [
      "quitamos la mesa"
    ],
    "e": "Quitamos la mesa después de comer. — Мы убираем со стола после еды."
  },
  {
    "id": "choice_chores_limpiar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: убирать / чистить.",
    "a": [
      "limpiar"
    ],
    "options": [
      "limpiar",
      "ordenar",
      "hacer la limpieza",
      "barrer"
    ],
    "e": "limpiar — убирать / чистить."
  },
  {
    "id": "choice_chores_ordenar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: наводить порядок.",
    "a": [
      "ordenar"
    ],
    "options": [
      "ordenar",
      "hacer la limpieza",
      "barrer",
      "fregar el suelo"
    ],
    "e": "ordenar — наводить порядок."
  },
  {
    "id": "choice_chores_hacer_limpieza",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: делать уборку.",
    "a": [
      "hacer la limpieza"
    ],
    "options": [
      "hacer la limpieza",
      "barrer",
      "fregar el suelo",
      "pasar la aspiradora"
    ],
    "e": "hacer la limpieza — делать уборку."
  },
  {
    "id": "choice_chores_barrer",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: подметать.",
    "a": [
      "barrer"
    ],
    "options": [
      "barrer",
      "fregar el suelo",
      "pasar la aspiradora",
      "quitar el polvo"
    ],
    "e": "barrer — подметать."
  },
  {
    "id": "choice_chores_fregar_suelo",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мыть пол.",
    "a": [
      "fregar el suelo"
    ],
    "options": [
      "fregar el suelo",
      "pasar la aspiradora",
      "quitar el polvo",
      "lavar los platos"
    ],
    "e": "fregar el suelo — мыть пол."
  },
  {
    "id": "choice_chores_pasar_aspiradora",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: пылесосить.",
    "a": [
      "pasar la aspiradora"
    ],
    "options": [
      "pasar la aspiradora",
      "quitar el polvo",
      "lavar los platos",
      "poner el lavavajillas"
    ],
    "e": "pasar la aspiradora — пылесосить."
  },
  {
    "id": "choice_chores_quitar_polvo",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: вытирать пыль.",
    "a": [
      "quitar el polvo"
    ],
    "options": [
      "quitar el polvo",
      "lavar los platos",
      "poner el lavavajillas",
      "hacer la cama"
    ],
    "e": "quitar el polvo — вытирать пыль."
  },
  {
    "id": "choice_chores_lavar_platos",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: мыть посуду.",
    "a": [
      "lavar los platos"
    ],
    "options": [
      "lavar los platos",
      "poner el lavavajillas",
      "hacer la cama",
      "lavar la ropa"
    ],
    "e": "lavar los platos — мыть посуду."
  },
  {
    "id": "choice_chores_poner_lavavajillas",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: включать / загружать посудомойку.",
    "a": [
      "poner el lavavajillas"
    ],
    "options": [
      "poner el lavavajillas",
      "hacer la cama",
      "lavar la ropa",
      "tender la ropa"
    ],
    "e": "poner el lavavajillas — включать / загружать посудомойку."
  },
  {
    "id": "choice_chores_hacer_cama",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: заправлять кровать.",
    "a": [
      "hacer la cama"
    ],
    "options": [
      "hacer la cama",
      "lavar la ropa",
      "tender la ropa",
      "planchar"
    ],
    "e": "hacer la cama — заправлять кровать."
  },
  {
    "id": "choice_chores_lavar_ropa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: стирать.",
    "a": [
      "lavar la ropa"
    ],
    "options": [
      "lavar la ropa",
      "tender la ropa",
      "planchar",
      "tirar la basura"
    ],
    "e": "lavar la ropa — стирать."
  },
  {
    "id": "choice_chores_tender_ropa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: развешивать бельё.",
    "a": [
      "tender la ropa"
    ],
    "options": [
      "tender la ropa",
      "planchar",
      "tirar la basura",
      "cocinar"
    ],
    "e": "tender la ropa — развешивать бельё."
  },
  {
    "id": "choice_chores_planchar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: гладить.",
    "a": [
      "planchar"
    ],
    "options": [
      "planchar",
      "tirar la basura",
      "cocinar",
      "preparar la comida"
    ],
    "e": "planchar — гладить."
  },
  {
    "id": "choice_chores_tirar_basura",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: выбрасывать мусор.",
    "a": [
      "tirar la basura"
    ],
    "options": [
      "tirar la basura",
      "cocinar",
      "preparar la comida",
      "poner la mesa"
    ],
    "e": "tirar la basura — выбрасывать мусор."
  },
  {
    "id": "choice_chores_cocinar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: готовить.",
    "a": [
      "cocinar"
    ],
    "options": [
      "cocinar",
      "preparar la comida",
      "poner la mesa",
      "quitar la mesa"
    ],
    "e": "cocinar — готовить."
  },
  {
    "id": "choice_chores_preparar_comida",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: готовить еду.",
    "a": [
      "preparar la comida"
    ],
    "options": [
      "preparar la comida",
      "poner la mesa",
      "quitar la mesa",
      "limpiar"
    ],
    "e": "preparar la comida — готовить еду."
  },
  {
    "id": "choice_chores_poner_mesa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: накрывать на стол.",
    "a": [
      "poner la mesa"
    ],
    "options": [
      "poner la mesa",
      "quitar la mesa",
      "limpiar",
      "ordenar"
    ],
    "e": "poner la mesa — накрывать на стол."
  },
  {
    "id": "choice_chores_quitar_mesa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: убирать со стола.",
    "a": [
      "quitar la mesa"
    ],
    "options": [
      "quitar la mesa",
      "limpiar",
      "ordenar",
      "hacer la limpieza"
    ],
    "e": "quitar la mesa — убирать со стола."
  },
  {
    "id": "audio_chores_limpiar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Limpio la cocina después de cenar.",
    "a": [
      "Limpio la cocina después de cenar."
    ],
    "e": "Я убираю кухню после ужина."
  },
  {
    "id": "audio_chores_ordenar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Ordeno mi habitación cada mañana.",
    "a": [
      "Ordeno mi habitación cada mañana."
    ],
    "e": "Я навожу порядок в комнате каждое утро."
  },
  {
    "id": "audio_chores_hacer_limpieza",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hacemos la limpieza los sábados.",
    "a": [
      "Hacemos la limpieza los sábados."
    ],
    "e": "Мы делаем уборку по субботам."
  },
  {
    "id": "audio_chores_barrer",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Barro la cocina después de cocinar.",
    "a": [
      "Barro la cocina después de cocinar."
    ],
    "e": "Я подметаю кухню после готовки."
  },
  {
    "id": "audio_chores_fregar_suelo",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Friego el suelo de la cocina.",
    "a": [
      "Friego el suelo de la cocina."
    ],
    "e": "Я мою пол на кухне."
  },
  {
    "id": "audio_chores_pasar_aspiradora",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Paso la aspiradora en el salón.",
    "a": [
      "Paso la aspiradora en el salón."
    ],
    "e": "Я пылесошу в гостиной."
  },
  {
    "id": "audio_chores_quitar_polvo",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quito el polvo de los muebles.",
    "a": [
      "Quito el polvo de los muebles."
    ],
    "e": "Я вытираю пыль с мебели."
  },
  {
    "id": "audio_chores_lavar_platos",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lavo los platos después de comer.",
    "a": [
      "Lavo los platos después de comer."
    ],
    "e": "Я мою посуду после еды."
  },
  {
    "id": "audio_chores_poner_lavavajillas",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pongo el lavavajillas por la noche.",
    "a": [
      "Pongo el lavavajillas por la noche."
    ],
    "e": "Я включаю посудомойку вечером."
  },
  {
    "id": "audio_chores_hacer_cama",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hago la cama cada mañana.",
    "a": [
      "Hago la cama cada mañana."
    ],
    "e": "Я заправляю кровать каждое утро."
  },
  {
    "id": "audio_chores_lavar_ropa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Lavo la ropa los domingos.",
    "a": [
      "Lavo la ropa los domingos."
    ],
    "e": "Я стираю по воскресеньям."
  },
  {
    "id": "audio_chores_tender_ropa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tiendo la ropa en el balcón.",
    "a": [
      "Tiendo la ropa en el balcón."
    ],
    "e": "Я развешиваю бельё на балконе."
  },
  {
    "id": "audio_chores_planchar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Plancho la camisa para mañana.",
    "a": [
      "Plancho la camisa para mañana."
    ],
    "e": "Я глажу рубашку на завтра."
  },
  {
    "id": "audio_chores_tirar_basura",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tiro la basura antes de salir.",
    "a": [
      "Tiro la basura antes de salir."
    ],
    "e": "Я выбрасываю мусор перед выходом."
  },
  {
    "id": "audio_chores_cocinar",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cocino la cena en casa.",
    "a": [
      "Cocino la cena en casa."
    ],
    "e": "Я готовлю ужин дома."
  },
  {
    "id": "audio_chores_preparar_comida",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Preparo la comida para toda la familia.",
    "a": [
      "Preparo la comida para toda la familia."
    ],
    "e": "Я готовлю еду для всей семьи."
  },
  {
    "id": "audio_chores_poner_mesa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pongo la mesa antes de cenar.",
    "a": [
      "Pongo la mesa antes de cenar."
    ],
    "e": "Я накрываю на стол перед ужином."
  },
  {
    "id": "audio_chores_quitar_mesa",
    "topic": "chores",
    "foodCat": "chores",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Quitamos la mesa después de comer.",
    "a": [
      "Quitamos la mesa después de comer."
    ],
    "e": "Мы убираем со стола после еды."
  },
  {
    "id": "match_recent_chores_clean",
    "topic": "chores",
    "foodCat": "chores",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини действия по уборке с переводом.",
    "pairs": [
      [
        "limpiar",
        "убирать / чистить"
      ],
      [
        "ordenar",
        "наводить порядок"
      ],
      [
        "barrer",
        "подметать"
      ],
      [
        "fregar el suelo",
        "мыть пол"
      ],
      [
        "pasar la aspiradora",
        "пылесосить"
      ],
      [
        "quitar el polvo",
        "вытирать пыль"
      ]
    ],
    "a": [
      "убирать / чистить | наводить порядок | подметать | мыть пол | пылесосить | вытирать пыль"
    ],
    "displayAnswer": "limpiar — убирать / чистить · ordenar — наводить порядок · barrer — подметать · fregar el suelo — мыть пол · pasar la aspiradora — пылесосить · quitar el polvo — вытирать пыль",
    "e": "Внутри задания действия разведены по конкретному виду уборки."
  },
  {
    "id": "match_recent_chores_home",
    "topic": "chores",
    "foodCat": "chores",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини домашние дела с переводом.",
    "pairs": [
      [
        "lavar los platos",
        "мыть посуду"
      ],
      [
        "hacer la cama",
        "заправлять кровать"
      ],
      [
        "lavar la ropa",
        "стирать"
      ],
      [
        "tender la ropa",
        "развешивать бельё"
      ],
      [
        "planchar",
        "гладить"
      ],
      [
        "tirar la basura",
        "выбрасывать мусор"
      ]
    ],
    "a": [
      "мыть посуду | заправлять кровать | стирать | развешивать бельё | гладить | выбрасывать мусор"
    ],
    "displayAnswer": "lavar los platos — мыть посуду · hacer la cama — заправлять кровать · lavar la ropa — стирать · tender la ropa — развешивать бельё · planchar — гладить · tirar la basura — выбрасывать мусор",
    "e": "Каждое действие связано с отдельным бытовым результатом."
  },
  {
    "id": "match_recent_chores_table",
    "topic": "chores",
    "foodCat": "chores",
    "type": "match",
    "skill": "Новая лексика · соответствия",
    "q": "Соедини действия на кухне и за столом с переводом.",
    "pairs": [
      [
        "hacer la limpieza",
        "делать уборку"
      ],
      [
        "cocinar",
        "готовить"
      ],
      [
        "preparar la comida",
        "готовить еду"
      ],
      [
        "poner la mesa",
        "накрывать на стол"
      ],
      [
        "quitar la mesa",
        "убирать со стола"
      ],
      [
        "poner el lavavajillas",
        "включать / загружать посудомойку"
      ]
    ],
    "a": [
      "делать уборку | готовить | готовить еду | накрывать на стол | убирать со стола | включать / загружать посудомойку"
    ],
    "displayAnswer": "hacer la limpieza — делать уборку · cocinar — готовить · preparar la comida — готовить еду · poner la mesa — накрывать на стол · quitar la mesa — убирать со стола · poner el lavavajillas — включать / загружать посудомойку",
    "e": "Формулировки специально различают общее «готовить» и устойчивое «готовить еду»."
  },
  {
    "id": "passage_recent_chores_cleaning",
    "topic": "chores",
    "foodCat": "chores",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Уборка по шагам: расставь слова по однозначным пропускам.",
    "template": "Primero hay que {{0}} las migas del suelo. Después hay que {{1}} con agua. Para limpiar la alfombra, conviene {{2}} por ella. De los estantes hay que {{3}}.",
    "blanks": [
      "barrer",
      "fregar el suelo",
      "pasar la aspiradora",
      "quitar el polvo"
    ],
    "a": [
      "barrer | fregar el suelo | pasar la aspiradora | quitar el polvo"
    ],
    "displayAnswer": "Primero hay que barrer las migas del suelo. Después hay que fregar el suelo con agua. Para limpiar la alfombra, conviene pasar la aspiradora por ella. De los estantes hay que quitar el polvo.",
    "e": "Объект действия делает каждый пропуск однозначным.",
    "ruTranslation": "Сначала нужно подмести крошки с пола. Затем нужно вымыть пол водой. Чтобы почистить ковёр, удобно пропылесосить его. С полок нужно вытереть пыль."
  },
  {
    "id": "passage_recent_chores_laundry",
    "topic": "chores",
    "foodCat": "chores",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Стирка и одежда: расставь слова по однозначным пропускам.",
    "template": "Primero hay que {{0}} en la lavadora. Después hay que {{1}} en el balcón. Cuando la camisa esté seca, se puede {{2}}.",
    "blanks": [
      "lavar la ropa",
      "tender la ropa",
      "planchar"
    ],
    "a": [
      "lavar la ropa | tender la ropa | planchar"
    ],
    "displayAnswer": "Primero hay que lavar la ropa en la lavadora. Después hay que tender la ropa en el balcón. Cuando la camisa esté seca, se puede planchar.",
    "e": "Этапы идут в естественной последовательности: стирка → сушка → глажка.",
    "ruTranslation": "Сначала нужно постирать одежду в стиральной машине. Затем нужно развесить бельё на балконе. Когда рубашка высохнет, её можно погладить."
  },
  {
    "id": "passage_recent_chores_table",
    "topic": "chores",
    "foodCat": "chores",
    "type": "cloze-passage",
    "skill": "Новая лексика · клоуз",
    "q": "Кухня и стол: расставь слова по однозначным пропускам.",
    "template": "Antes de cenar hay que {{0}}. Después de comer tengo que {{1}}; si uso la máquina, puedo {{2}}. Cuando todos terminan de comer, ayudamos a {{3}}.",
    "blanks": [
      "poner la mesa",
      "lavar los platos",
      "poner el lavavajillas",
      "quitar la mesa"
    ],
    "a": [
      "poner la mesa | lavar los platos | poner el lavavajillas | quitar la mesa"
    ],
    "displayAnswer": "Antes de cenar hay que poner la mesa. Después de comer tengo que lavar los platos; si uso la máquina, puedo poner el lavavajillas. Cuando todos terminan de comer, ayudamos a quitar la mesa.",
    "e": "Маркеры «перед ужином», «после еды» и «машина» разводят близкие действия.",
    "ruTranslation": "Перед ужином нужно накрыть на стол. После еды мне нужно помыть посуду; если я использую машину, я могу включить посудомоечную машину. Когда все заканчивают есть, мы помогаем убрать со стола."
  }
];

export const choresTopic = {
  id: "chores",
  title: "Домашние дела",
  icon: "🧹",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
