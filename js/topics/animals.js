/**
 * Animals topic.
 *
 * Один файл содержит все данные темы:
 * - учебные карточки;
 * - упражнения;
 * - прямые пути к изображениям.
 */

const CATEGORY_TITLES = {
    pets: "Домашние",
    farm: "Ферма",
    wild: "Дикие",
    birds: "Птицы",
    sea: "Морские",
    reptiles: "Рептилии и амфибии"
  };
  
  const RAW_ANIMALS = [
    [
      "dog",
      "pets",
      "el perro",
      "perro",
      "мужской род",
      "собака",
      "El perro juega en el parque.",
      "Собака играет в парке.",
      "Mi perro duerme junto a la cama.",
      "Моя собака спит рядом с кроватью."
    ],
    [
      "cat",
      "pets",
      "el gato",
      "gato",
      "мужской род",
      "кот, кошка",
      "El gato duerme en el sofá.",
      "Кот спит на диване.",
      "La gata bebe agua.",
      "Кошка пьёт воду."
    ],
    [
      "rabbit",
      "pets",
      "el conejo",
      "conejo",
      "мужской род",
      "кролик",
      "El conejo come una zanahoria.",
      "Кролик ест морковь.",
      "El conejo tiene orejas largas.",
      "У кролика длинные уши."
    ],
    [
      "hamster",
      "pets",
      "el hámster",
      "hámster",
      "мужской род",
      "хомяк",
      "El hámster es pequeño.",
      "Хомяк маленький.",
      "Mi hámster corre por la noche.",
      "Мой хомяк бегает ночью."
    ],
    [
      "mouse",
      "pets",
      "el ratón",
      "ratón",
      "мужской род",
      "мышь",
      "El ratón es muy pequeño.",
      "Мышь очень маленькая.",
      "Veo un ratón cerca de la caja.",
      "Я вижу мышь рядом с коробкой."
    ],
    [
      "turtle",
      "pets",
      "la tortuga",
      "tortuga",
      "женский род",
      "черепаха",
      "La tortuga camina despacio.",
      "Черепаха ходит медленно.",
      "Mi tortuga come verduras.",
      "Моя черепаха ест овощи."
    ],
    [
      "horse",
      "farm",
      "el caballo",
      "caballo",
      "мужской род",
      "лошадь",
      "El caballo corre por el campo.",
      "Лошадь бежит по полю.",
      "El caballo es marrón.",
      "Лошадь коричневая."
    ],
    [
      "cow",
      "farm",
      "la vaca",
      "vaca",
      "женский род",
      "корова",
      "La vaca come hierba.",
      "Корова ест траву.",
      "La vaca vive en la granja.",
      "Корова живёт на ферме."
    ],
    [
      "pig",
      "farm",
      "el cerdo",
      "cerdo",
      "мужской род",
      "свинья",
      "El cerdo está en la granja.",
      "Свинья находится на ферме.",
      "El cerdo es rosa.",
      "Свинья розовая."
    ],
    [
      "sheep",
      "farm",
      "la oveja",
      "oveja",
      "женский род",
      "овца",
      "La oveja tiene lana blanca.",
      "У овцы белая шерсть.",
      "Las ovejas comen hierба.",
      "Овцы едят траву."
    ],
    [
      "goat",
      "farm",
      "la cabra",
      "cabra",
      "женский род",
      "коза",
      "La cabra sube a una roca.",
      "Коза забирается на камень.",
      "La cabra come hojas.",
      "Коза ест листья."
    ],
    [
      "chicken",
      "farm",
      "la gallina",
      "gallina",
      "женский род",
      "курица",
      "La gallina pone huevos.",
      "Курица несёт яйца.",
      "La gallina camina por la granja.",
      "Курица ходит по ферме."
    ],
    [
      "lion",
      "wild",
      "el león",
      "león",
      "мужской род",
      "лев",
      "El león vive en África.",
      "Лев живёт в Африке.",
      "El león tiene una gran melena.",
      "У льва большая грива."
    ],
    [
      "tiger",
      "wild",
      "el tigre",
      "tigre",
      "мужской род",
      "тигр",
      "El tigre tiene rayas.",
      "У тигра есть полосы.",
      "El tigre es un animal salvaje.",
      "Тигр — дикое животное."
    ],
    [
      "bear",
      "wild",
      "el oso",
      "oso",
      "мужской род",
      "медведь",
      "El oso vive en el bosque.",
      "Медведь живёт в лесу.",
      "El oso es grande.",
      "Медведь большой."
    ],
    [
      "elephant",
      "wild",
      "el elefante",
      "elefante",
      "мужской род",
      "слон",
      "El elefante tiene una trompa larga.",
      "У слона длинный хобот.",
      "El elefante es muy grande.",
      "Слон очень большой."
    ],
    [
      "giraffe",
      "wild",
      "la jirafa",
      "jirafa",
      "женский род",
      "жираф",
      "La jirafa tiene el cuello largo.",
      "У жирафа длинная шея.",
      "La jirafa come hojas.",
      "Жираф ест листья."
    ],
    [
      "monkey",
      "wild",
      "el mono",
      "mono",
      "мужской род",
      "обезьяна",
      "El mono sube al árbol.",
      "Обезьяна залезает на дерево.",
      "El mono come fruta.",
      "Обезьяна ест фрукты."
    ],
    [
      "eagle",
      "birds",
      "el águila",
      "águila",
      "женский род · с el",
      "орёл",
      "El águila vuela muy alto.",
      "Орёл летает очень высоко.",
      "El águila tiene alas grandes.",
      "У орла большие крылья."
    ],
    [
      "owl",
      "birds",
      "el búho",
      "búho",
      "мужской род",
      "сова",
      "El búho duerme de día.",
      "Сова спит днём.",
      "El búho ve bien de noche.",
      "Сова хорошо видит ночью."
    ],
    [
      "parrot",
      "birds",
      "el loro",
      "loro",
      "мужской род",
      "попугай",
      "El loro tiene plumas de colores.",
      "У попугая разноцветные перья.",
      "Mi loro imita palabras.",
      "Мой попугай повторяет слова."
    ],
    [
      "duck",
      "birds",
      "el pato",
      "pato",
      "мужской род",
      "утка",
      "El pato nada en el lago.",
      "Утка плавает в озере.",
      "El pato tiene un pico amarillo.",
      "У утки жёлтый клюв."
    ],
    [
      "penguin",
      "birds",
      "el pingüino",
      "pingüino",
      "мужской род",
      "пингвин",
      "El pingüino vive en zonas frías.",
      "Пингвин живёт в холодных регионах.",
      "El pingüino nada muy bien.",
      "Пингвин очень хорошо плавает."
    ],
    [
      "flamingo",
      "birds",
      "el flamenco",
      "flamenco",
      "мужской род",
      "фламинго",
      "El flamenco tiene plumas rosas.",
      "У фламинго розовые перья.",
      "El flamenco tiene patas largas.",
      "У фламинго длинные ноги."
    ],
    [
      "fish",
      "sea",
      "el pez",
      "pez",
      "мужской род",
      "рыба (живое животное)",
      "El pez nada en el agua.",
      "Рыба плавает в воде.",
      "Este pez es azul.",
      "Эта рыба синяя."
    ],
    [
      "shark",
      "sea",
      "el tiburón",
      "tiburón",
      "мужской род",
      "акула",
      "El tiburón vive en el mar.",
      "Акула живёт в море.",
      "El tiburón tiene muchos dientes.",
      "У акулы много зубов."
    ],
    [
      "dolphin",
      "sea",
      "el delfín",
      "delfín",
      "мужской род",
      "дельфин",
      "El delfín salta fuera del agua.",
      "Дельфин выпрыгивает из воды.",
      "Los delfines son muy inteligentes.",
      "Дельфины очень умные."
    ],
    [
      "whale",
      "sea",
      "la ballena",
      "ballena",
      "женский род",
      "кит",
      "La ballena es enorme.",
      "Кит огромный.",
      "La ballena vive en el océano.",
      "Кит живёт в океане."
    ],
    [
      "octopus",
      "sea",
      "el pulpo",
      "pulpo",
      "мужской род",
      "осьминог",
      "El pulpo tiene ocho brazos.",
      "У осьминога восемь щупалец.",
      "El pulpo vive en el mar.",
      "Осьминог живёт в море."
    ],
    [
      "crab",
      "sea",
      "el cangrejo",
      "cangrejo",
      "мужской род",
      "краб",
      "El cangrejo camina de lado.",
      "Краб ходит боком.",
      "El cangrejo tiene dos pinzas.",
      "У краба две клешни."
    ],
    [
      "snake",
      "reptiles",
      "la serpiente",
      "serpiente",
      "женский род",
      "змея",
      "La serpiente no tiene patas.",
      "У змеи нет ног.",
      "La serpiente se mueve por el suelo.",
      "Змея ползёт по земле."
    ],
    [
      "crocodile",
      "reptiles",
      "el cocodrilo",
      "cocodrilo",
      "мужской род",
      "крокодил",
      "El cocodrilo vive cerca del agua.",
      "Крокодил живёт рядом с водой.",
      "El cocodrilo tiene dientes grandes.",
      "У крокодила большие зубы."
    ],
    [
      "lizard",
      "reptiles",
      "el lagarto",
      "lagarto",
      "мужской род",
      "ящерица",
      "El lagarto toma el sol.",
      "Ящерица греется на солнце.",
      "El lagarto tiene una cola larga.",
      "У ящерицы длинный хвост."
    ],
    [
      "frog",
      "reptiles",
      "la rana",
      "rana",
      "женский род",
      "лягушка",
      "La rana salta cerca del agua.",
      "Лягушка прыгает рядом с водой.",
      "La rana es verde.",
      "Лягушка зелёная."
    ],
    [
      "salamander",
      "reptiles",
      "la salamandra",
      "salamandra",
      "женский род",
      "саламандра",
      "La salamandra vive en lugares húmedos.",
      "Саламандра живёт во влажных местах.",
      "La salamandra tiene una cola larga.",
      "У саламандры длинный хвост."
    ],
    [
      "tortoise",
      "reptiles",
      "la tortuga terrestre",
      "tortuga terrestre",
      "женский род",
      "сухопутная черепаха",
      "La tortuga terrestre vive en tierra.",
      "Сухопутная черепаха живёт на земле.",
      "La tortuga terrestre camina despacio.",
      "Сухопутная черепаха ходит медленно."
    ]
  ];
  
  const STUDY_ITEMS = RAW_ANIMALS.map(function (row) {
    const [
      id,
      category,
      word,
      base,
      gender,
      translation,
      exampleEs1,
      exampleRu1,
      exampleEs2,
      exampleRu2
    ] = row;
  
    return {
      id,
      category,
      translation,
      image: `assets/picture-labels/animals/${id}.webp`,
      cat: category,
      word,
      base,
      gender,
      tr: translation,
      ru: [translation],
      answers: [base, word],
      examples: [
        [exampleEs1, exampleRu1],
        [exampleEs2, exampleRu2]
      ],
      cloze: exampleEs1.replace(base, "___"),
      clozeAnswers: [base],
      meta: {
        categoryTitle: CATEGORY_TITLES[category]
      }
    };
  });
  
  function getDecoys(word) {
    const result = STUDY_ITEMS
      .filter(function (item) {
        return item.id !== word.id && item.category === word.category;
      })
      .map(function (item) {
        return item.translation;
      });
  
    for (
      let index = STUDY_ITEMS.length - 1;
      result.length < 3 && index >= 0;
      index -= 1
    ) {
      const item = STUDY_ITEMS[index];
  
      if (
        item.id !== word.id &&
        !result.includes(item.translation)
      ) {
        result.push(item.translation);
      }
    }
  
    return result.slice(0, 3);
  }
  
  function buildExercises() {
    const exercises = [];
  
    STUDY_ITEMS.forEach(function (word) {
      exercises.push({
        id: `animals_${word.id}_es`,
        topic: "animals",
        foodCat: word.category,
        type: "text",
        skill: "Перевод на испанский",
        q: `Переведи на испанский: ${word.translation}.`,
        a: word.answers.slice(),
        e: `${word.word} — ${word.translation}.`
      });
  
      exercises.push({
        id: `animals_${word.id}_ru`,
        topic: "animals",
        foodCat: word.category,
        type: "text",
        skill: "Перевод на русский",
        q: `Переведи на русский: ${word.word}.`,
        a: word.ru.slice(),
        e: `${word.word} — ${word.translation}.`
      });
  
      exercises.push({
        id: `animals_${word.id}_choice`,
        topic: "animals",
        foodCat: word.category,
        type: "choice",
        skill: "Выбери перевод",
        q: `Что означает «${word.word}»?`,
        options: [
          word.translation,
          ...getDecoys(word)
        ],
        a: [word.translation],
        e: `${word.word} — ${word.translation}.`
      });
  
      exercises.push({
        id: `animals_${word.id}_ctx`,
        topic: "animals",
        foodCat: word.category,
        type: "text",
        skill: "Слово в контексте",
        q: `Вставь пропущенное слово: ${word.cloze}`,
        a: word.clozeAnswers.slice(),
        e:
          `Правильное предложение: ${word.examples[0][0]}` +
          ` — ${word.examples[0][1]}`
      });
  
      exercises.push({
        id: `visual_animals_${word.id}`,
        originalId: `animals_${word.id}_es`,
        topic: "animals",
        foodCat: word.category,
        type: "picture-label",
        skill: "Картинка → слово",
        q: "Что изображено? Напиши по-испански.",
        pictureSrc: word.image,
        pictureScene: `animal-${word.id}`,
        pictureHint:
          "Посмотри на иллюстрацию и напиши название животного " +
          "по-испански. Артикль можно не писать.",
        pictureLabels: [
          {
            side: "left",
            top: 50,
            markerX: 50,
            markerY: 50,
            reveal: word.word,
            answers: word.answers.slice()
          }
        ],
        a: [word.word],
        displayAnswer: word.word,
        e: `${word.word} — ${word.translation}.`
      });
    });
  
    Object.keys(CATEGORY_TITLES).forEach(function (category) {
      const words = STUDY_ITEMS
        .filter(function (word) {
          return word.category === category;
        })
        .slice(0, 6);
  
      exercises.push({
        id: `animals_match_${category}`,
        topic: "animals",
        foodCat: category,
        type: "match",
        skill: "Соедини соответствия",
        q: "Соедини животных с испанскими названиями.",
        pairs: words.map(function (word) {
          return [word.translation, word.word];
        }),
        a: [
          words
            .map(function (word) {
              return word.word;
            })
            .join(" | ")
        ],
        displayAnswer: words
          .map(function (word) {
            return `${word.translation} — ${word.word}`;
          })
          .join(" · "),
        e: "Повтори названия этой группы."
      });
    });
  
    return exercises;
  }
  
  const EXERCISES = buildExercises();
  
  export const animalsTopic = {
    id: "animals",
    title: "Животные",
    icon: "🐾",
    studyItems: STUDY_ITEMS,
    exercises: EXERCISES
  };