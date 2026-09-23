export const IMPOSTER_TASKS = [
  {
    id: "imposter_01",
    type: "spot_the_imposter",
    topic: "present",
    skill: "Ser или estar",
    mood: "confident",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот хвастается в ресторане:",
    tokens: [
      { text: "La", isError: false },
      { text: "sopa", isError: false },
      { text: "es", isError: true, correct: "está", explanation: "Суп горячий прямо сейчас — это временное состояние, поэтому нужен глагол estar." },
      { text: "muy", isError: false },
      { text: "caliente.", isError: false }
    ],
    translation: "Суп очень горячий."
  },
  {
    id: "imposter_02",
    type: "spot_the_imposter",
    topic: "prepositions",
    skill: "Por или para",
    mood: "chatty",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот вручает подарок:",
    tokens: [
      { text: "Este", isError: false },
      { text: "regalo", isError: false },
      { text: "es", isError: false },
      { text: "por", isError: true, correct: "para", explanation: "Когда подарок предназначен кому-то, нужен para: regalo para ti." },
      { text: "ti.", isError: false }
    ],
    translation: "Этот подарок для тебя."
  },
  {
    id: "imposter_03",
    type: "spot_the_imposter",
    topic: "agreement",
    skill: "Согласование рода",
    mood: "confident",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот рассуждает о проблеме:",
    tokens: [
      { text: "El", isError: false },
      { text: "problema", isError: false },
      { text: "es", isError: false },
      { text: "muy", isError: false },
      { text: "buena.", isError: true, correct: "bueno", explanation: "Problema — существительное мужского рода, несмотря на окончание -a. Поэтому прилагательное тоже должно быть в мужском роде: bueno." }
    ],
    translation: "Проблема очень хорошая."
  },
  {
    id: "imposter_04",
    type: "spot_the_imposter",
    topic: "agreement",
    skill: "Muy или mucho",
    mood: "chatty",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот жалуется на погоду:",
    tokens: [
      { text: "Hoy", isError: false },
      { text: "hace", isError: false },
      { text: "muy", isError: true, correct: "mucho", explanation: "Calor — существительное, поэтому здесь употребляется mucho: hace mucho calor." },
      { text: "calor.", isError: false }
    ],
    translation: "Сегодня очень жарко."
  },
  {
    id: "imposter_05",
    type: "spot_the_imposter",
    topic: "present",
    skill: "Ser или estar",
    mood: "confident",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот описывает подругу:",
    tokens: [
      { text: "Ella", isError: false },
      { text: "tiene", isError: false },
      { text: "20", isError: false },
      { text: "años", isError: false },
      { text: "y", isError: false },
      { text: "es", isError: false },
      { text: "muy", isError: false },
      { text: "simpática,", isError: false },
      { text: "pero", isError: false },
      { text: "hoy", isError: false },
      { text: "es", isError: true, correct: "está", explanation: "«Сегодня грустная» описывает временное состояние, поэтому нужен estar: hoy está triste." },
      { text: "triste.", isError: false }
    ],
    translation: "Ей 20 лет, и она очень милая, но сегодня грустная."
  },
  {
    id: "imposter_06",
    type: "spot_the_imposter",
    topic: "agreement",
    skill: "Род существительных",
    mood: "chatty",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот показывает карту города:",
    tokens: [
      { text: "La", isError: true, correct: "El", explanation: "Mapa оканчивается на -a, но это существительное мужского рода: el mapa." },
      { text: "mapa", isError: false },
      { text: "es", isError: false },
      { text: "muy", isError: false },
      { text: "grande.", isError: false }
    ],
    translation: "Карта очень большая."
  }
];
