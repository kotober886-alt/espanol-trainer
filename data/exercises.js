// Supplemental exercise data shared by registered topics.
// Context fill-ins live here so they can be expanded without duplicating topic modules.

export const BUILTIN_EXERCISES = [];
export const SPECIAL_EXERCISES = [];
export const MATCH_EXERCISES = [];
export const CLOZE_EXERCISES = [];

export const CONTEXT_FILL_EXERCISES = [
  {
    id: "fill_routine_01",
    type: "fill_in_choice",
    topic: "routine",
    foodCat: "morning",
    sentence: "Yo me ___ las manos.",
    translation: "Я мою руки.",
    answer: "lavo",
    options: ["lavo", "lava", "lavas", "lavamos"],
    hint: "С yo и возвратным me используется форма lavo."
  },
  {
    id: "fill_routine_02",
    type: "fill_in_choice",
    topic: "routine",
    foodCat: "morning",
    sentence: "Ella se ___ a las siete.",
    translation: "Она просыпается в семь.",
    answer: "despierta",
    options: ["despierta", "despierto", "despertamos", "levantan"],
    hint: "Для ella глагол despertarse принимает форму se despierta."
  },
  {
    id: "fill_routine_03",
    type: "fill_in_choice",
    topic: "routine",
    foodCat: "evening",
    sentence: "Nosotros ___ acostamos tarde.",
    translation: "Мы ложимся спать поздно.",
    answer: "nos",
    options: ["nos", "me", "se", "os"],
    hint: "С nosotros возвратное местоимение — nos."
  },
  {
    id: "fill_routine_04",
    type: "fill_in_choice",
    topic: "routine",
    foodCat: "morning",
    sentence: "¿A qué hora te ___?",
    translation: "Во сколько ты встаёшь?",
    answer: "levantas",
    options: ["levantas", "levanto", "levanta", "levantamos"],
    hint: "С tú используется форма te levantas."
  },
  {
    id: "fill_routine_05",
    type: "fill_in_choice",
    topic: "routine",
    foodCat: "evening",
    sentence: "Antes de dormir, él se ___ los dientes.",
    translation: "Перед сном он чистит зубы.",
    answer: "cepilla",
    options: ["cepilla", "cepillo", "cepillan", "cepillamos"],
    hint: "С él нужна форма se cepilla."
  },
  {
    id: "fill_routine_06",
    type: "fill_in_choice",
    topic: "routine",
    foodCat: "morning",
    sentence: "Los niños se ___ solos.",
    translation: "Дети одеваются сами.",
    answer: "visten",
    options: ["visten", "viste", "visto", "vestimos"],
    hint: "Vestirse меняет e→i: ellos se visten."
  },
  {
    id: "fill_routine_07",
    type: "fill_in",
    topic: "routine",
    foodCat: "morning",
    sentence: "Yo me ___ después de correr.",
    translation: "Я принимаю душ после пробежки.",
    answer: "ducho",
    hint: "С yo: me ducho."
  },
  {
    id: "fill_routine_08",
    type: "fill_in",
    topic: "routine",
    foodCat: "morning",
    sentence: "Los domingos nos ___ tarde.",
    translation: "По воскресеньям мы просыпаемся поздно.",
    answer: "despertamos",
    hint: "С nosotros: nos despertamos."
  },

  {
    id: "fill_prep_01",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "La farmacia está ___ lado del banco.",
    translation: "Аптека рядом с банком.",
    answer: "al",
    options: ["al", "del", "en", "por"],
    hint: "Устойчивое сочетание: al lado de — рядом с."
  },
  {
    id: "fill_prep_02",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "El parque está ___ de mi casa.",
    translation: "Парк перед моим домом.",
    answer: "delante",
    options: ["delante", "detrás", "dentro", "fuera"],
    hint: "Delante de означает «перед»."
  },
  {
    id: "fill_prep_03",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "Mi mochila está ___ de la puerta.",
    translation: "Мой рюкзак за дверью.",
    answer: "detrás",
    options: ["detrás", "delante", "dentro", "sobre"],
    hint: "Detrás de означает «за, позади»."
  },
  {
    id: "fill_prep_04",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "El agua está ___ del vaso.",
    translation: "Вода внутри стакана.",
    answer: "dentro",
    options: ["dentro", "fuera", "detrás", "debajo"],
    hint: "Dentro de означает «внутри»."
  },
  {
    id: "fill_prep_05",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "El perro se quedó ___ de la casa.",
    translation: "Собака осталась снаружи дома.",
    answer: "fuera",
    options: ["fuera", "dentro", "encima", "cerca"],
    hint: "Fuera de означает «снаружи, вне»."
  },
  {
    id: "fill_prep_06",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "El gato duerme ___ la mesa.",
    translation: "Кот спит под столом.",
    answer: "bajo",
    options: ["bajo", "sobre", "entre", "detrás"],
    hint: "Bajo обозначает нахождение снизу."
  },
  {
    id: "fill_prep_07",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "La lámpara está ___ la mesa.",
    translation: "Лампа находится на столе.",
    answer: "sobre",
    options: ["sobre", "bajo", "detrás", "entre"],
    hint: "Sobre означает «на, поверх»."
  },
  {
    id: "fill_prep_08",
    type: "fill_in_choice",
    topic: "prepositions",
    foodCat: "place",
    sentence: "El banco está ___ la farmacia y el cine.",
    translation: "Банк находится между аптекой и кинотеатром.",
    answer: "entre",
    options: ["entre", "sobre", "dentro", "junto"],
    hint: "Entre используется для положения между двумя объектами."
  },

  {
    id: "fill_gustar_01",
    type: "fill_in_choice",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "A mí me ___ los gatos.",
    translation: "Мне нравятся коты.",
    answer: "gustan",
    options: ["gustan", "gusta", "gusto", "gustamos"],
    hint: "С существительным во множественном числе используется gustan."
  },
  {
    id: "fill_gustar_02",
    type: "fill_in_choice",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "A nosotros ___ interesa aprender español.",
    translation: "Нам интересно учить испанский.",
    answer: "nos",
    options: ["nos", "me", "les", "te"],
    hint: "Для «нам» перед interesa используется nos."
  },
  {
    id: "fill_gustar_03",
    type: "fill_in_choice",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "¿A ti te ___ bailar?",
    translation: "Тебе нравится танцевать?",
    answer: "gusta",
    options: ["gusta", "gustan", "gustas", "gusto"],
    hint: "Инфинитив bailar воспринимается как одно действие: te gusta bailar."
  },
  {
    id: "fill_gustar_04",
    type: "fill_in_choice",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "A Marta le ___ las películas de misterio.",
    translation: "Марте нравятся фильмы-детективы.",
    answer: "encantan",
    options: ["encantan", "encanta", "encanto", "encantamos"],
    hint: "Las películas — множественное число, поэтому encantan."
  },
  {
    id: "fill_gustar_05",
    type: "fill_in_choice",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "A ellos no les ___ esperar.",
    translation: "Им не нравится ждать.",
    answer: "gusta",
    options: ["gusta", "gustan", "gusto", "gustamos"],
    hint: "Перед инфинитивом esperar используется gusta."
  },
  {
    id: "fill_gustar_06",
    type: "fill_in_choice",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "A mí me ___ mucho esta canción.",
    translation: "Мне очень нравится эта песня.",
    answer: "encanta",
    options: ["encanta", "encantan", "encanto", "encantas"],
    hint: "Esta canción — единственное число, поэтому encanta."
  },
  {
    id: "fill_gustar_07",
    type: "fill_in",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "A Laura le ___ los ruidos fuertes.",
    translation: "Лауре мешают громкие звуки.",
    answer: "molestan",
    hint: "Los ruidos — множественное число: le molestan."
  },
  {
    id: "fill_gustar_08",
    type: "fill_in",
    topic: "gustar",
    foodCat: "gustar",
    sentence: "A nosotros nos ___ viajar en tren.",
    translation: "Нам нравится путешествовать на поезде.",
    answer: "gusta",
    hint: "Перед инфинитивом viajar используется gusta."
  },

  {
    id: "fill_agreement_01",
    type: "fill_in_choice",
    topic: "agreement",
    foodCat: "contractions",
    sentence: "Voy ___ cine con amigos.",
    translation: "Я иду в кино с друзьями.",
    answer: "al",
    options: ["al", "del", "a la", "en el"],
    hint: "a + el = al."
  },
  {
    id: "fill_agreement_02",
    type: "fill_in_choice",
    topic: "agreement",
    foodCat: "contractions",
    sentence: "Regresamos ___ centro muy tarde.",
    translation: "Мы возвращаемся из центра очень поздно.",
    answer: "del",
    options: ["del", "al", "de la", "en"],
    hint: "de + el = del."
  },
  {
    id: "fill_agreement_03",
    type: "fill_in_choice",
    topic: "agreement",
    foodCat: "contractions",
    sentence: "Es el libro ___ profesora.",
    translation: "Это книга преподавательницы.",
    answer: "de la",
    options: ["de la", "del", "al", "a la"],
    hint: "Перед существительным женского рода la слияния нет: de la profesora."
  },
  {
    id: "fill_agreement_04",
    type: "fill_in_choice",
    topic: "agreement",
    foodCat: "contractions",
    sentence: "Salimos ___ restaurante después de cenar.",
    translation: "Мы вышли из ресторана после ужина.",
    answer: "del",
    options: ["del", "al", "en el", "de la"],
    hint: "de + el restaurante = del restaurante."
  },
  {
    id: "fill_agreement_05",
    type: "fill_in_choice",
    topic: "agreement",
    foodCat: "contractions",
    sentence: "Mañana voy ___ médico.",
    translation: "Завтра я иду к врачу.",
    answer: "al",
    options: ["al", "del", "a la", "en"],
    hint: "a + el médico = al médico."
  },
  {
    id: "fill_agreement_06",
    type: "fill_in_choice",
    topic: "agreement",
    foodCat: "contractions",
    sentence: "La puerta ___ hotel está cerrada.",
    translation: "Дверь отеля закрыта.",
    answer: "del",
    options: ["del", "al", "de la", "en el"],
    hint: "de + el hotel = del hotel."
  }
];
