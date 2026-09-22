/**
 * Смешанная практика topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [];

const EXERCISES = [
  {
    "id": "passage_weekday_routine",
    "topic": "all",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Текст с пропусками",
    "q": "Обычный рабочий день: расставь слова по однозначным пропускам.",
    "template": "El {{0}} yo {{1}} a las siete. Después {{2}} y tomo café con leche; luego {{3}} al trabajo. Mi oficina {{4}} cerca del metro.",
    "blanks": [
      "lunes",
      "me levanto",
      "desayuno",
      "voy",
      "está"
    ],
    "a": [
      "lunes | me levanto | desayuno | voy | está"
    ],
    "displayAnswer": "El lunes yo me levanto a las siete. Después desayuno y tomo café con leche; luego voy al trabajo. Mi oficina está cerca del metro.",
    "ruTranslation": "В понедельник я встаю в семь. Потом завтракаю и пью кофе с молоком; затем иду на работу. Мой офис находится рядом с метро.",
    "e": "Каждое слово из банка используется один раз."
  },
  {
    "id": "passage_neighborhood",
    "topic": "all",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Текст с пропусками",
    "q": "В моём районе: расставь слова по однозначным пропускам.",
    "template": "En mi barrio {{0}} una farmacia. La farmacia {{1}} al lado del {{2}}. El banco {{3}} a las seis y yo {{4}} allí los viernes.",
    "blanks": [
      "hay",
      "está",
      "banco",
      "cierra",
      "voy"
    ],
    "a": [
      "hay | está | banco | cierra | voy"
    ],
    "displayAnswer": "En mi barrio hay una farmacia. La farmacia está al lado del banco. El banco cierra a las seis y yo voy allí los viernes.",
    "ruTranslation": "В моём районе есть аптека. Аптека находится рядом с банком. Банк закрывается в шесть, и по пятницам я хожу туда.",
    "e": "Каждое слово из банка используется один раз."
  },
  {
    "id": "passage_shopping",
    "topic": "all",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Текст с пропусками",
    "q": "Покупки одежды: расставь слова по однозначным пропускам.",
    "template": "El sábado quiero comprar {{0}} chaqueta negra y unos zapatos {{1}}. La chaqueta {{2}} cara, pero los zapatos {{3}} baratos.",
    "blanks": [
      "una",
      "cómodos",
      "es",
      "son"
    ],
    "a": [
      "una | cómodos | es | son"
    ],
    "displayAnswer": "El sábado quiero comprar una chaqueta negra y unos zapatos cómodos. La chaqueta es cara, pero los zapatos son baratos.",
    "ruTranslation": "В субботу я хочу купить чёрную куртку и удобные туфли. Куртка дорогая, но туфли дешёвые.",
    "e": "Каждое слово из банка используется один раз."
  },
  {
    "id": "passage_family_food",
    "topic": "all",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Текст с пропусками",
    "q": "Семейный обед: расставь слова по однозначным пропускам.",
    "template": "Los domingos mi familia {{0}} junta. Yo {{1}} pollo, mi hermana no {{2}} el marisco y a mi padre le {{3}} los postres.",
    "blanks": [
      "come",
      "prefiero",
      "soporta",
      "encantan"
    ],
    "a": [
      "come | prefiero | soporta | encantan"
    ],
    "displayAnswer": "Los domingos mi familia come junta. Yo prefiero pollo, mi hermana no soporta el marisco y a mi padre le encantan los postres.",
    "ruTranslation": "По воскресеньям моя семья ест вместе. Я предпочитаю курицу, моя сестра не выносит морепродукты, а мой отец обожает десерты.",
    "e": "Каждое слово из банка используется один раз."
  },
  {
    "id": "passage_past_today",
    "topic": "all",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Текст с пропусками",
    "q": "Вчера, сегодня и завтра: расставь слова по однозначным пропускам.",
    "template": "Ayer Ana {{0}} al cine con sus amigos. Hoy {{1}} trabajado en casa porque {{2}} cansada. Mañana {{3}} a descansar.",
    "blanks": [
      "fue",
      "ha",
      "está",
      "va"
    ],
    "a": [
      "fue | ha | está | va"
    ],
    "displayAnswer": "Ayer Ana fue al cine con sus amigos. Hoy ha trabajado en casa porque está cansada. Mañana va a descansar.",
    "ruTranslation": "Вчера Ана ходила в кино с друзьями. Сегодня она работала дома, потому что устала. Завтра она собирается отдыхать.",
    "e": "Каждое слово из банка используется один раз."
  },
  {
    "id": "passage_likes_hobbies",
    "topic": "all",
    "foodCat": "all",
    "type": "cloze-passage",
    "skill": "Текст с пропусками",
    "q": "Что нам нравится: расставь слова по однозначным пропускам.",
    "template": "A mí me {{0}} leer, pero a mi novio le {{1}} los videojuegos. Los sábados nosotros {{2}} a videojuegos juntos y después {{3}} con amigos en una cafetería.",
    "blanks": [
      "gusta",
      "encantan",
      "jugamos",
      "quedamos"
    ],
    "a": [
      "gusta | encantan | jugamos | quedamos"
    ],
    "displayAnswer": "A mí me gusta leer, pero a mi novio le encantan los videojuegos. Los sábados nosotros jugamos a videojuegos juntos y después quedamos con amigos en una cafetería.",
    "ruTranslation": "Мне нравится читать, а мой парень обожает видеоигры. По субботам мы вместе играем в видеоигры, а потом встречаемся с друзьями в кафе.",
    "e": "Каждое слово из банка используется один раз."
  }
];

export const mixedTopic = {
  id: "__mixed",
  title: "Смешанная практика",
  icon: "✦",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
