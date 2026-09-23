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
  },
  {
    id: "imposter_07",
    type: "spot_the_imposter",
    topic: "practical",
    skill: "Возраст · tener",
    mood: "confident",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот заполняет анкету на ресепшене отеля:",
    tokens: [
      { text: "Yo", isError: false },
      { text: "soy", isError: true, correct: "tengo", explanation: "В испанском возраст выражается через глагол tener (tengo años), а не ser!" },
      { text: "tres", isError: false },
      { text: "años", isError: false },
      { text: "y", isError: false },
      { text: "busco", isError: false },
      { text: "una", isError: false },
      { text: "habitación.", isError: false }
    ],
    translation: "Мне три года, и я ищу номер."
  },
  {
    id: "imposter_08",
    type: "spot_the_imposter",
    topic: "practical",
    skill: "Ложные друзья переводчика",
    mood: "chatty",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот оправдывается за разбитую чашку кофе:",
    tokens: [
      { text: "Lo", isError: false },
      { text: "siento,", isError: false },
      { text: "estoy", isError: false },
      { text: "muy", isError: false },
      { text: "embarazada", isError: true, correct: "avergonzada", explanation: "Embarazada означает 'беременна'! Если тебе стыдно или неловко, используй avergonzado/avergonzada." },
      { text: "por", isError: false },
      { text: "el", isError: false },
      { text: "desastre.", isError: false }
    ],
    translation: "Простите, мне очень неловко за этот беспорядок."
  },
  {
    id: "imposter_09",
    type: "spot_the_imposter",
    topic: "practical",
    skill: "Погода · hacer",
    mood: "confident",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот зовет гулять в парк:",
    tokens: [
      { text: "El", isError: false },
      { text: "día", isError: false },
      { text: "está", isError: false },
      { text: "bonito", isError: false },
      { text: "porque", isError: false },
      { text: "está", isError: true, correct: "hace", explanation: "О погоде говорим через глагол hacer: hace buen tiempo / hace sol / hace calor!" },
      { text: "buen", isError: false },
      { text: "tiempo.", isError: false }
    ],
    translation: "День красивый, потому что стоит хорошая погода."
  },
  {
    id: "imposter_10",
    type: "spot_the_imposter",
    topic: "city",
    skill: "Род исключений · el mapa",
    mood: "thinking",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот изучает карту метро в центре города:",
    tokens: [
      { text: "¿Puedes", isError: false },
      { text: "ayudarme?", isError: false },
      { text: "No", isError: false },
      { text: "entiendo", isError: false },
      { text: "esta", isError: true, correct: "este", explanation: "Слово mapa — мужского рода (el mapa), несмотря на окончание -a! Правильно: este mapa." },
      { text: "mapa", isError: false },
      { text: "del", isError: false },
      { text: "centro.", isError: false }
    ],
    translation: "Можешь помочь? Я не понимаю эту карту центра."
  },
  {
    id: "imposter_11",
    type: "spot_the_imposter",
    topic: "practical",
    skill: "Кафе · la cuenta",
    mood: "chatty",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот подзывает официанта в кафе:",
    tokens: [
      { text: "Camarero,", isError: false },
      { text: "¿me", isError: false },
      { text: "trae", isError: false },
      { text: "el", isError: true, correct: "la", explanation: "Счёт в ресторане женского рода — la cuenta!" },
      { text: "cuenta,", isError: false },
      { text: "por", isError: false },
      { text: "favor?", isError: false }
    ],
    translation: "Официант, принесите счёт, пожалуйста?"
  },
  {
    id: "imposter_12",
    type: "spot_the_imposter",
    topic: "prepositions",
    skill: "Предлоги цели · para",
    mood: "confident",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот хвастается билетом на поезд:",
    tokens: [
      { text: "Compré", isError: false },
      { text: "este", isError: false },
      { text: "billete", isError: false },
      { text: "por", isError: true, correct: "para", explanation: "Для направления или цели назначения используется предлог para (para Madrid)!" },
      { text: "viajar", isError: false },
      { text: "a", isError: false },
      { text: "Madrid", isError: false },
      { text: "mañana.", isError: false }
    ],
    translation: "Я купил этот билет, чтобы поехать в Мадрид завтра."
  },
  {
    id: "imposter_13",
    type: "spot_the_imposter",
    topic: "present",
    skill: "Состояние · estar",
    mood: "chatty",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот жалуется на тяжелый учебный день:",
    tokens: [
      { text: "Hoy", isError: false },
      { text: "he", isError: false },
      { text: "estudiado", isError: false },
      { text: "mucho", isError: false },
      { text: "y", isError: false },
      { text: "ahora", isError: false },
      { text: "soy", isError: true, correct: "estoy", explanation: "Усталость — это временное состояние, поэтому используется estar cansado/a, а не ser!" },
      { text: "muy", isError: false },
      { text: "cansado.", isError: false }
    ],
    translation: "Сегодня я много учился и сейчас очень устал."
  },
  {
    id: "imposter_14",
    type: "spot_the_imposter",
    topic: "gustar",
    skill: "Gustar · согласование",
    mood: "confident",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот заказывает тапас:",
    tokens: [
      { text: "A", isError: false },
      { text: "mí", isError: false },
      { text: "me", isError: false },
      { text: "gusta", isError: true, correct: "gustan", explanation: "Если предмет во множественном числе (las tapas), то глагол gustar согласуется с ним: me gustan!" },
      { text: "mucho", isError: false },
      { text: "las", isError: false },
      { text: "tapas", isError: false },
      { text: "con", isError: false },
      { text: "pescado.", isError: false }
    ],
    translation: "Мне очень нравятся тапас с рыбой."
  },
  {
    id: "imposter_15",
    type: "spot_the_imposter",
    topic: "calendar",
    skill: "Время · ser",
    mood: "thinking",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот торопится на встречу:",
    tokens: [
      { text: "Tenemos", isError: false },
      { text: "que", isError: false },
      { text: "correr", isError: false },
      { text: "porque", isError: false },
      { text: "hay", isError: true, correct: "son", explanation: "Время в испанском называют через глагол ser во множественном числе: son las tres!" },
      { text: "las", isError: false },
      { text: "tres", isError: false },
      { text: "en", isError: false },
      { text: "punto.", isError: false }
    ],
    translation: "Нам нужно бежать, потому что уже ровно три часа."
  },
  {
    id: "imposter_16",
    type: "spot_the_imposter",
    topic: "practical",
    skill: "Tener hambre",
    mood: "chatty",
    q: "Спаси кота от ошибки",
    contextTitle: "Кот просит перекусить после долгой прогулки:",
    tokens: [
      { text: "Vamos", isError: false },
      { text: "a", isError: false },
      { text: "comer", isError: false },
      { text: "algo", isError: false },
      { text: "porque", isError: false },
      { text: "soy", isError: true, correct: "tengo", explanation: "Голод и жажду в испанском 'имеют': tener hambre / tener sed, а не ser hambre!" },
      { text: "mucha", isError: false },
      { text: "hambre.", isError: false }
    ],
    translation: "Пойдем поедим что-нибудь, потому что я очень голоден."
  }
];
