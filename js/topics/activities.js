/**
 * Занятия и увлечения topic.
 * Declarative Topic Contract data; no DOM or global state.
 */

const STUDY_ITEMS = [
  {
    "id": "do_sport",
    "cat": "sport",
    "word": "hacer deporte",
    "base": "hacer deporte",
    "gender": "hacer + существительное",
    "tr": "заниматься спортом",
    "ru": [
      "заниматься спортом"
    ],
    "answers": [
      "hacer deporte"
    ],
    "art": "do_sport",
    "examples": [
      [
        "Hago deporte tres veces por semana.",
        "Я занимаюсь спортом три раза в неделю."
      ],
      [
        "Es importante hacer deporte con regularidad.",
        "Важно регулярно заниматься спортом."
      ]
    ],
    "cloze": "Me gusta ___ después del trabajo.",
    "clozeAnswers": [
      "hacer deporte"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "gym",
    "cat": "sport",
    "word": "ir al gimnasio",
    "base": "ir al gimnasio",
    "gender": "ir a + место",
    "tr": "ходить в спортзал",
    "ru": [
      "ходить в спортзал",
      "ходить в тренажёрный зал",
      "ходить в тренажерный зал"
    ],
    "answers": [
      "ir al gimnasio"
    ],
    "art": "gym",
    "examples": [
      [
        "Voy al gimnasio por la tarde.",
        "Я хожу в спортзал вечером."
      ],
      [
        "Mañana quiero ir al gimnasio.",
        "Завтра я хочу пойти в спортзал."
      ]
    ],
    "cloze": "Voy ___ por la tarde.",
    "clozeAnswers": [
      "al gimnasio"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "yoga",
    "cat": "sport",
    "word": "hacer yoga",
    "base": "hacer yoga",
    "gender": "hacer + занятие",
    "tr": "заниматься йогой",
    "ru": [
      "заниматься йогой",
      "делать йогу"
    ],
    "answers": [
      "hacer yoga",
      "practicar yoga"
    ],
    "art": "yoga",
    "examples": [
      [
        "Hago yoga antes de desayunar.",
        "Я занимаюсь йогой перед завтраком."
      ],
      [
        "Mi hermana practica yoga en casa.",
        "Моя сестра занимается йогой дома."
      ]
    ],
    "cloze": "Los domingos me gusta ___.",
    "clozeAnswers": [
      "hacer yoga",
      "practicar yoga"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "run",
    "cat": "sport",
    "word": "correr",
    "base": "correr",
    "gender": "глагол на -er",
    "tr": "бегать",
    "ru": [
      "бегать",
      "бег"
    ],
    "answers": [
      "correr"
    ],
    "art": "run",
    "examples": [
      [
        "Corro cinco kilómetros los sábados.",
        "По субботам я бегаю пять километров."
      ],
      [
        "Me gusta correr por el parque.",
        "Мне нравится бегать в парке."
      ]
    ],
    "cloze": "Me gusta ___ por el parque.",
    "clozeAnswers": [
      "correr"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "swim",
    "cat": "sport",
    "word": "nadar",
    "base": "nadar",
    "gender": "глагол на -ar",
    "tr": "плавать",
    "ru": [
      "плавать"
    ],
    "answers": [
      "nadar"
    ],
    "art": "swim",
    "examples": [
      [
        "Nadamos en la piscina municipal.",
        "Мы плаваем в городском бассейне."
      ],
      [
        "Quiero aprender a nadar mejor.",
        "Я хочу научиться лучше плавать."
      ]
    ],
    "cloze": "En verano me gusta ___.",
    "clozeAnswers": [
      "nadar"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "cycle",
    "cat": "sport",
    "word": "montar en bicicleta",
    "base": "montar en bicicleta",
    "gender": "montar en + транспорт",
    "tr": "кататься на велосипеде",
    "ru": [
      "кататься на велосипеде",
      "ездить на велосипеде"
    ],
    "answers": [
      "montar en bicicleta",
      "ir en bicicleta"
    ],
    "art": "cycle",
    "examples": [
      [
        "Monto en bicicleta los fines de semana.",
        "По выходным я катаюсь на велосипеде."
      ],
      [
        "Vamos a montar en bicicleta por el río.",
        "Мы собираемся покататься на велосипеде вдоль реки."
      ]
    ],
    "cloze": "Los domingos suelo ___.",
    "clozeAnswers": [
      "montar en bicicleta",
      "ir en bicicleta"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "football",
    "cat": "sport",
    "word": "jugar al fútbol",
    "base": "jugar al fútbol",
    "gender": "jugar a + спорт",
    "tr": "играть в футбол",
    "ru": [
      "играть в футбол"
    ],
    "answers": [
      "jugar al fútbol"
    ],
    "art": "football",
    "examples": [
      [
        "Jugamos al fútbol después de clase.",
        "Мы играем в футбол после занятий."
      ],
      [
        "A mi hermano le gusta jugar al fútbol.",
        "Моему брату нравится играть в футбол."
      ]
    ],
    "cloze": "Los viernes vamos a ___.",
    "clozeAnswers": [
      "jugar al fútbol"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "tennis",
    "cat": "sport",
    "word": "jugar al tenis",
    "base": "jugar al tenis",
    "gender": "jugar a + спорт",
    "tr": "играть в теннис",
    "ru": [
      "играть в теннис"
    ],
    "answers": [
      "jugar al tenis"
    ],
    "art": "tennis",
    "examples": [
      [
        "Juego al tenis con una amiga.",
        "Я играю в теннис с подругой."
      ],
      [
        "¿Quieres jugar al tenis mañana?",
        "Хочешь завтра поиграть в теннис?"
      ]
    ],
    "cloze": "Los sábados suelo ___.",
    "clozeAnswers": [
      "jugar al tenis"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "dance",
    "cat": "sport",
    "word": "bailar",
    "base": "bailar",
    "gender": "глагол на -ar",
    "tr": "танцевать",
    "ru": [
      "танцевать"
    ],
    "answers": [
      "bailar"
    ],
    "art": "dance",
    "examples": [
      [
        "Me encanta bailar salsa.",
        "Я обожаю танцевать сальсу."
      ],
      [
        "Bailamos juntos en la fiesta.",
        "Мы танцуем вместе на вечеринке."
      ]
    ],
    "cloze": "Me encanta ___ salsa.",
    "clozeAnswers": [
      "bailar"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "train",
    "cat": "sport",
    "word": "entrenar",
    "base": "entrenar",
    "gender": "глагол на -ar",
    "tr": "тренироваться",
    "ru": [
      "тренироваться"
    ],
    "answers": [
      "entrenar",
      "entrenarse"
    ],
    "art": "train",
    "examples": [
      [
        "Entreno cuatro días a la semana.",
        "Я тренируюсь четыре дня в неделю."
      ],
      [
        "Tenemos que entrenar más.",
        "Нам нужно больше тренироваться."
      ]
    ],
    "cloze": "Intento ___ con regularidad.",
    "clozeAnswers": [
      "entrenar",
      "entrenarme"
    ],
    "meta": {
      "categoryTitle": "Спорт",
      "categoryOrder": 1,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "videogames",
    "cat": "games",
    "word": "jugar a videojuegos",
    "base": "jugar a videojuegos",
    "gender": "jugar a + игра",
    "tr": "играть в видеоигры",
    "ru": [
      "играть в видеоигры",
      "играть в компьютерные игры"
    ],
    "answers": [
      "jugar a videojuegos",
      "jugar a los videojuegos"
    ],
    "art": "videogames",
    "examples": [
      [
        "Juego a videojuegos después de cenar.",
        "Я играю в видеоигры после ужина."
      ],
      [
        "No quiero jugar a videojuegos toda la noche.",
        "Я не хочу играть в видеоигры всю ночь."
      ]
    ],
    "cloze": "A veces me gusta ___.",
    "clozeAnswers": [
      "jugar a videojuegos",
      "jugar a los videojuegos"
    ],
    "meta": {
      "categoryTitle": "Игры",
      "categoryOrder": 2,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "boardgames",
    "cat": "games",
    "word": "jugar a juegos de mesa",
    "base": "jugar a juegos de mesa",
    "gender": "jugar a + игра",
    "tr": "играть в настольные игры",
    "ru": [
      "играть в настольные игры"
    ],
    "answers": [
      "jugar a juegos de mesa",
      "jugar a los juegos de mesa"
    ],
    "art": "boardgames",
    "examples": [
      [
        "Jugamos a juegos de mesa con amigos.",
        "Мы играем в настольные игры с друзьями."
      ],
      [
        "Este fin de semana vamos a jugar a juegos de mesa.",
        "В эти выходные мы будем играть в настольные игры."
      ]
    ],
    "cloze": "Con amigos solemos ___.",
    "clozeAnswers": [
      "jugar a juegos de mesa",
      "jugar a los juegos de mesa"
    ],
    "meta": {
      "categoryTitle": "Игры",
      "categoryOrder": 2,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "cards",
    "cat": "games",
    "word": "jugar a las cartas",
    "base": "jugar a las cartas",
    "gender": "jugar a + игра",
    "tr": "играть в карты",
    "ru": [
      "играть в карты"
    ],
    "answers": [
      "jugar a las cartas"
    ],
    "art": "cards",
    "examples": [
      [
        "Mis abuelos juegan a las cartas.",
        "Мои бабушка и дедушка играют в карты."
      ],
      [
        "¿Sabes jugar a las cartas?",
        "Ты умеешь играть в карты?"
      ]
    ],
    "cloze": "Después de cenar vamos a ___.",
    "clozeAnswers": [
      "jugar a las cartas"
    ],
    "meta": {
      "categoryTitle": "Игры",
      "categoryOrder": 2,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "chess",
    "cat": "games",
    "word": "jugar al ajedrez",
    "base": "jugar al ajedrez",
    "gender": "jugar a + игра",
    "tr": "играть в шахматы",
    "ru": [
      "играть в шахматы"
    ],
    "answers": [
      "jugar al ajedrez"
    ],
    "art": "chess",
    "examples": [
      [
        "Aprendo a jugar al ajedrez.",
        "Я учусь играть в шахматы."
      ],
      [
        "Jugamos al ajedrez en el café.",
        "Мы играем в шахматы в кафе."
      ]
    ],
    "cloze": "Estoy aprendiendo a ___.",
    "clozeAnswers": [
      "jugar al ajedrez"
    ],
    "meta": {
      "categoryTitle": "Игры",
      "categoryOrder": 2,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "puzzles",
    "cat": "games",
    "word": "hacer puzles",
    "base": "hacer puzles",
    "gender": "hacer + существительное",
    "tr": "собирать пазлы",
    "ru": [
      "собирать пазлы",
      "делать пазлы"
    ],
    "answers": [
      "hacer puzles",
      "hacer puzzles"
    ],
    "art": "puzzles",
    "examples": [
      [
        "Me relaja hacer puzles.",
        "Собирание пазлов меня расслабляет."
      ],
      [
        "Hacemos un puzle de mil piezas.",
        "Мы собираем пазл из тысячи деталей."
      ]
    ],
    "cloze": "Los domingos me gusta ___.",
    "clozeAnswers": [
      "hacer puzles",
      "hacer puzzles"
    ],
    "meta": {
      "categoryTitle": "Игры",
      "categoryOrder": 2,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "online",
    "cat": "games",
    "word": "jugar en línea",
    "base": "jugar en línea",
    "gender": "jugar + обстоятельство",
    "tr": "играть онлайн",
    "ru": [
      "играть онлайн",
      "играть по сети"
    ],
    "answers": [
      "jugar en línea",
      "jugar online"
    ],
    "art": "online",
    "examples": [
      [
        "Juego en línea con mis amigos.",
        "Я играю онлайн с друзьями."
      ],
      [
        "Podemos jugar en línea esta noche.",
        "Сегодня вечером мы можем поиграть онлайн."
      ]
    ],
    "cloze": "Podemos ___ esta noche.",
    "clozeAnswers": [
      "jugar en línea",
      "jugar online"
    ],
    "meta": {
      "categoryTitle": "Игры",
      "categoryOrder": 2,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "level",
    "cat": "games",
    "word": "pasar un nivel",
    "base": "pasar un nivel",
    "gender": "глагол + существительное",
    "tr": "проходить уровень",
    "ru": [
      "проходить уровень",
      "пройти уровень"
    ],
    "answers": [
      "pasar un nivel",
      "superar un nivel"
    ],
    "art": "level",
    "examples": [
      [
        "No puedo pasar este nivel.",
        "Я не могу пройти этот уровень."
      ],
      [
        "Mi hermano pasa el nivel sin ayuda.",
        "Мой брат проходит уровень без помощи."
      ]
    ],
    "cloze": "Intento ___ difícil.",
    "clozeAnswers": [
      "pasar un nivel",
      "superar un nivel"
    ],
    "meta": {
      "categoryTitle": "Игры",
      "categoryOrder": 2,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "books",
    "cat": "learning",
    "word": "leer libros",
    "base": "leer libros",
    "gender": "глагол + существительное",
    "tr": "читать книги",
    "ru": [
      "читать книги"
    ],
    "answers": [
      "leer libros"
    ],
    "art": "books",
    "examples": [
      [
        "Leo libros antes de dormir.",
        "Я читаю книги перед сном."
      ],
      [
        "Me gusta leer libros de historia.",
        "Мне нравится читать исторические книги."
      ]
    ],
    "cloze": "Por la noche suelo ___.",
    "clozeAnswers": [
      "leer libros"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "news",
    "cat": "learning",
    "word": "leer las noticias",
    "base": "leer las noticias",
    "gender": "глагол + существительное",
    "tr": "читать новости",
    "ru": [
      "читать новости"
    ],
    "answers": [
      "leer las noticias",
      "leer noticias"
    ],
    "art": "news",
    "examples": [
      [
        "Leo las noticias por la mañana.",
        "Я читаю новости утром."
      ],
      [
        "Prefiero leer las noticias en el móvil.",
        "Я предпочитаю читать новости в телефоне."
      ]
    ],
    "cloze": "Antes del trabajo suelo ___.",
    "clozeAnswers": [
      "leer las noticias",
      "leer noticias"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "spanish",
    "cat": "learning",
    "word": "estudiar español",
    "base": "estudiar español",
    "gender": "глагол + язык",
    "tr": "учить испанский",
    "ru": [
      "учить испанский",
      "изучать испанский"
    ],
    "answers": [
      "estudiar español",
      "aprender español"
    ],
    "art": "spanish",
    "examples": [
      [
        "Estudio español todos los días.",
        "Я учу испанский каждый день."
      ],
      [
        "Quiero estudiar español en Madrid.",
        "Я хочу учить испанский в Мадриде."
      ]
    ],
    "cloze": "Todos los días intento ___.",
    "clozeAnswers": [
      "estudiar español",
      "aprender español"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "languages",
    "cat": "learning",
    "word": "practicar idiomas",
    "base": "practicar idiomas",
    "gender": "глагол + существительное",
    "tr": "практиковать языки",
    "ru": [
      "практиковать языки",
      "заниматься языками"
    ],
    "answers": [
      "practicar idiomas",
      "practicar los idiomas"
    ],
    "art": "languages",
    "examples": [
      [
        "Practico idiomas con hablantes nativos.",
        "Я практикую языки с носителями."
      ],
      [
        "Internet ayuda a practicar idiomas.",
        "Интернет помогает практиковать языки."
      ]
    ],
    "cloze": "Quiero ___ cada semana.",
    "clozeAnswers": [
      "practicar idiomas",
      "practicar los idiomas"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "learn",
    "cat": "learning",
    "word": "aprender algo nuevo",
    "base": "aprender algo nuevo",
    "gender": "глагол + дополнение",
    "tr": "узнавать что-то новое",
    "ru": [
      "узнавать что-то новое",
      "учить что-то новое",
      "узнавать новое"
    ],
    "answers": [
      "aprender algo nuevo"
    ],
    "art": "learn",
    "examples": [
      [
        "Intento aprender algo nuevo cada día.",
        "Я стараюсь каждый день узнавать что-то новое."
      ],
      [
        "Viajar permite aprender algo nuevo.",
        "Путешествия позволяют узнать что-то новое."
      ]
    ],
    "cloze": "Cada día quiero ___.",
    "clozeAnswers": [
      "aprender algo nuevo"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "homework",
    "cat": "learning",
    "word": "hacer los deberes",
    "base": "hacer los deberes",
    "gender": "hacer + существительное",
    "tr": "делать домашнее задание",
    "ru": [
      "делать домашнее задание",
      "делать уроки"
    ],
    "answers": [
      "hacer los deberes",
      "hacer la tarea"
    ],
    "art": "homework",
    "examples": [
      [
        "Hago los deberes después de clase.",
        "Я делаю домашнее задание после занятий."
      ],
      [
        "Tengo que hacer los deberes hoy.",
        "Сегодня мне нужно сделать домашнее задание."
      ]
    ],
    "cloze": "Después de clase voy a ___.",
    "clozeAnswers": [
      "hacer los deberes",
      "hacer la tarea"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "notes",
    "cat": "learning",
    "word": "tomar apuntes",
    "base": "tomar apuntes",
    "gender": "глагол + существительное",
    "tr": "делать записи, конспектировать",
    "ru": [
      "делать записи",
      "конспектировать",
      "делать конспект"
    ],
    "answers": [
      "tomar apuntes",
      "hacer apuntes"
    ],
    "art": "notes",
    "examples": [
      [
        "Tomo apuntes durante la clase.",
        "Я делаю записи во время занятия."
      ],
      [
        "Es útil tomar apuntes a mano.",
        "Полезно конспектировать от руки."
      ]
    ],
    "cloze": "Durante la clase suelo ___.",
    "clozeAnswers": [
      "tomar apuntes",
      "hacer apuntes"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "podcast",
    "cat": "learning",
    "word": "escuchar un pódcast",
    "base": "escuchar un pódcast",
    "gender": "глагол + существительное",
    "tr": "слушать подкаст",
    "ru": [
      "слушать подкаст",
      "послушать подкаст"
    ],
    "answers": [
      "escuchar un pódcast",
      "escuchar un podcast",
      "escuchar pódcast",
      "escuchar podcast"
    ],
    "art": "podcast",
    "examples": [
      [
        "Escucho un pódcast camino al trabajo.",
        "Я слушаю подкаст по дороге на работу."
      ],
      [
        "Vamos a escuchar un pódcast en español.",
        "Мы послушаем подкаст на испанском."
      ]
    ],
    "cloze": "De camino al trabajo suelo ___.",
    "clozeAnswers": [
      "escuchar un pódcast",
      "escuchar un podcast"
    ],
    "meta": {
      "categoryTitle": "Чтение и учёба",
      "categoryOrder": 3,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "draw",
    "cat": "creative",
    "word": "dibujar",
    "base": "dibujar",
    "gender": "глагол на -ar",
    "tr": "рисовать карандашом",
    "ru": [
      "рисовать",
      "рисовать карандашом"
    ],
    "answers": [
      "dibujar"
    ],
    "art": "draw",
    "examples": [
      [
        "Me gusta dibujar retratos.",
        "Мне нравится рисовать портреты."
      ],
      [
        "Dibujo cuando tengo tiempo libre.",
        "Я рисую, когда у меня есть свободное время."
      ]
    ],
    "cloze": "En mi tiempo libre me gusta ___.",
    "clozeAnswers": [
      "dibujar"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "paint",
    "cat": "creative",
    "word": "pintar",
    "base": "pintar",
    "gender": "глагол на -ar",
    "tr": "рисовать красками",
    "ru": [
      "рисовать красками",
      "рисовать"
    ],
    "answers": [
      "pintar"
    ],
    "art": "paint",
    "examples": [
      [
        "Pinto paisajes con acuarela.",
        "Я рисую пейзажи акварелью."
      ],
      [
        "Queremos pintar juntos este fin de semana.",
        "Мы хотим порисовать вместе в эти выходные."
      ]
    ],
    "cloze": "Los domingos me gusta ___.",
    "clozeAnswers": [
      "pintar"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "photos",
    "cat": "creative",
    "word": "hacer fotos",
    "base": "hacer fotos",
    "gender": "hacer + существительное",
    "tr": "фотографировать",
    "ru": [
      "фотографировать",
      "делать фотографии",
      "делать фото"
    ],
    "answers": [
      "hacer fotos",
      "sacar fotos",
      "tomar fotos"
    ],
    "art": "photos",
    "examples": [
      [
        "Me gusta hacer fotos de la ciudad.",
        "Мне нравится фотографировать город."
      ],
      [
        "Hacemos muchas fotos durante los viajes.",
        "Во время путешествий мы делаем много фотографий."
      ]
    ],
    "cloze": "Durante los viajes suelo ___.",
    "clozeAnswers": [
      "hacer fotos",
      "sacar fotos",
      "tomar fotos"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "videos",
    "cat": "creative",
    "word": "editar vídeos",
    "base": "editar vídeos",
    "gender": "глагол + существительное",
    "tr": "монтировать видео",
    "ru": [
      "монтировать видео",
      "редактировать видео"
    ],
    "answers": [
      "editar vídeos",
      "editar videos"
    ],
    "art": "videos",
    "examples": [
      [
        "Edito vídeos para mi trabajo.",
        "Я монтирую видео для работы."
      ],
      [
        "Aprendo a editar vídeos mejor.",
        "Я учусь лучше монтировать видео."
      ]
    ],
    "cloze": "Para mi trabajo tengo que ___.",
    "clozeAnswers": [
      "editar vídeos",
      "editar videos"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "stories",
    "cat": "creative",
    "word": "escribir historias",
    "base": "escribir historias",
    "gender": "глагол + существительное",
    "tr": "писать истории",
    "ru": [
      "писать истории",
      "сочинять истории"
    ],
    "answers": [
      "escribir historias"
    ],
    "art": "stories",
    "examples": [
      [
        "Me gusta escribir historias cortas.",
        "Мне нравится писать короткие истории."
      ],
      [
        "Quiero escribir historias cortas en español.",
        "Я хочу писать короткие истории на испанском."
      ]
    ],
    "cloze": "Sueño con ___.",
    "clozeAnswers": [
      "escribir historias"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "crafts",
    "cat": "creative",
    "word": "hacer manualidades",
    "base": "hacer manualidades",
    "gender": "hacer + существительное",
    "tr": "заниматься рукоделием",
    "ru": [
      "заниматься рукоделием",
      "делать поделки"
    ],
    "answers": [
      "hacer manualidades"
    ],
    "art": "crafts",
    "examples": [
      [
        "Hacemos manualidades con papel.",
        "Мы делаем поделки из бумаги."
      ],
      [
        "A los niños les encanta hacer manualidades.",
        "Дети обожают заниматься рукоделием."
      ]
    ],
    "cloze": "Los fines de semana hacemos ___.",
    "clozeAnswers": [
      "manualidades"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "guitar",
    "cat": "creative",
    "word": "tocar la guitarra",
    "base": "tocar la guitarra",
    "gender": "глагол + инструмент",
    "tr": "играть на гитаре",
    "ru": [
      "играть на гитаре"
    ],
    "answers": [
      "tocar la guitarra",
      "tocar guitarra"
    ],
    "art": "guitar",
    "examples": [
      [
        "Toco la guitarra desde hace dos años.",
        "Я играю на гитаре два года."
      ],
      [
        "Mi amigo aprende a tocar la guitarra.",
        "Мой друг учится играть на гитаре."
      ]
    ],
    "cloze": "Estoy aprendiendo a ___.",
    "clozeAnswers": [
      "tocar la guitarra",
      "tocar guitarra"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "cook",
    "cat": "creative",
    "word": "cocinar",
    "base": "cocinar",
    "gender": "глагол на -ar",
    "tr": "готовить",
    "ru": [
      "готовить",
      "готовить еду"
    ],
    "answers": [
      "cocinar"
    ],
    "art": "cook",
    "examples": [
      [
        "Me gusta cocinar para mis amigos.",
        "Мне нравится готовить для друзей."
      ],
      [
        "Cocinamos juntos los domingos.",
        "По воскресеньям мы готовим вместе."
      ]
    ],
    "cloze": "Los domingos solemos ___.",
    "clozeAnswers": [
      "cocinar"
    ],
    "meta": {
      "categoryTitle": "Творчество",
      "categoryOrder": 4,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "movies",
    "cat": "leisure",
    "word": "ver películas",
    "base": "ver películas",
    "gender": "глагол + существительное",
    "tr": "смотреть фильмы",
    "ru": [
      "смотреть фильмы",
      "смотреть кино"
    ],
    "answers": [
      "ver películas",
      "ver peliculas"
    ],
    "art": "movies",
    "examples": [
      [
        "Vemos películas los viernes.",
        "По пятницам мы смотрим фильмы."
      ],
      [
        "Me gusta ver películas en versión original.",
        "Мне нравится смотреть фильмы в оригинале."
      ]
    ],
    "cloze": "Los viernes solemos ___.",
    "clozeAnswers": [
      "ver películas",
      "ver peliculas"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "series",
    "cat": "leisure",
    "word": "ver series",
    "base": "ver series",
    "gender": "глагол + существительное",
    "tr": "смотреть сериалы",
    "ru": [
      "смотреть сериалы"
    ],
    "answers": [
      "ver series"
    ],
    "art": "series",
    "examples": [
      [
        "Veo series antes de dormir.",
        "Я смотрю сериалы перед сном."
      ],
      [
        "Esta noche vamos a ver una serie.",
        "Сегодня вечером мы посмотрим сериал."
      ]
    ],
    "cloze": "Antes de dormir suelo ___.",
    "clozeAnswers": [
      "ver series"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "music",
    "cat": "leisure",
    "word": "escuchar música",
    "base": "escuchar música",
    "gender": "глагол + существительное",
    "tr": "слушать музыку",
    "ru": [
      "слушать музыку"
    ],
    "answers": [
      "escuchar música",
      "escuchar musica"
    ],
    "art": "music",
    "examples": [
      [
        "Escucho música mientras trabajo.",
        "Я слушаю музыку во время работы."
      ],
      [
        "Me relaja escuchar música tranquila.",
        "Спокойная музыка помогает мне расслабиться."
      ]
    ],
    "cloze": "Mientras trabajo me gusta ___.",
    "clozeAnswers": [
      "escuchar música",
      "escuchar musica"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "walk",
    "cat": "leisure",
    "word": "pasear",
    "base": "pasear",
    "gender": "глагол на -ar",
    "tr": "гулять",
    "ru": [
      "гулять",
      "прогуливаться"
    ],
    "answers": [
      "pasear",
      "dar un paseo"
    ],
    "art": "walk",
    "examples": [
      [
        "Paseamos por el centro después de cenar.",
        "После ужина мы гуляем по центру."
      ],
      [
        "Me gusta pasear sin prisa.",
        "Мне нравится гулять не спеша."
      ]
    ],
    "cloze": "Después de cenar solemos ___.",
    "clozeAnswers": [
      "pasear",
      "dar un paseo"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "travel",
    "cat": "leisure",
    "word": "viajar",
    "base": "viajar",
    "gender": "глагол на -ar",
    "tr": "путешествовать",
    "ru": [
      "путешествовать"
    ],
    "answers": [
      "viajar"
    ],
    "art": "travel",
    "examples": [
      [
        "Nos encanta viajar en tren.",
        "Мы обожаем путешествовать на поезде."
      ],
      [
        "Quiero viajar por España.",
        "Я хочу путешествовать по Испании."
      ]
    ],
    "cloze": "En vacaciones me gusta ___.",
    "clozeAnswers": [
      "viajar"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "shopping",
    "cat": "leisure",
    "word": "ir de compras",
    "base": "ir de compras",
    "gender": "устойчивое выражение",
    "tr": "ходить за покупками",
    "ru": [
      "ходить за покупками",
      "ходить по магазинам"
    ],
    "answers": [
      "ir de compras"
    ],
    "art": "shopping",
    "examples": [
      [
        "Vamos de compras el sábado.",
        "В субботу мы идём за покупками."
      ],
      [
        "No me gusta ir de compras con prisa.",
        "Я не люблю ходить по магазинам в спешке."
      ]
    ],
    "cloze": "El sábado vamos a ___.",
    "clozeAnswers": [
      "ir de compras"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "rest",
    "cat": "leisure",
    "word": "descansar",
    "base": "descansar",
    "gender": "глагол на -ar",
    "tr": "отдыхать",
    "ru": [
      "отдыхать"
    ],
    "answers": [
      "descansar"
    ],
    "art": "rest",
    "examples": [
      [
        "Necesito descansar después del trabajo.",
        "Мне нужно отдохнуть после работы."
      ],
      [
        "Los domingos descanso en casa.",
        "По воскресеньям я отдыхаю дома."
      ]
    ],
    "cloze": "Después del trabajo quiero ___.",
    "clozeAnswers": [
      "descansar"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "friends",
    "cat": "leisure",
    "word": "quedar con amigos",
    "base": "quedar con amigos",
    "gender": "глагол + con",
    "tr": "встречаться с друзьями",
    "ru": [
      "встречаться с друзьями",
      "встретиться с друзьями"
    ],
    "answers": [
      "quedar con amigos",
      "quedar con los amigos"
    ],
    "art": "friends",
    "examples": [
      [
        "El sábado quedamos con amigos.",
        "В субботу мы встречаемся с друзьями."
      ],
      [
        "Me gusta quedar con amigos en una cafetería.",
        "Мне нравится встречаться с друзьями в кафе."
      ]
    ],
    "cloze": "El sábado solemos ___.",
    "clozeAnswers": [
      "quedar con amigos",
      "quedar con los amigos"
    ],
    "meta": {
      "categoryTitle": "Досуг",
      "categoryOrder": 5,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "hike",
    "cat": "outdoors",
    "word": "ir de excursión",
    "base": "ir de excursión",
    "gender": "устойчивое выражение",
    "tr": "ходить в поход, на экскурсию",
    "ru": [
      "ходить в поход",
      "ходить на экскурсию",
      "ездить на экскурсию"
    ],
    "answers": [
      "ir de excursión",
      "ir de excursion",
      "hacer una excursión",
      "hacer una excursion"
    ],
    "art": "hike",
    "examples": [
      [
        "Mañana vamos de excursión a la montaña.",
        "Завтра мы идём в поход в горы."
      ],
      [
        "Me gusta ir de excursión en primavera.",
        "Мне нравится ходить в походы весной."
      ]
    ],
    "cloze": "En primavera solemos ___.",
    "clozeAnswers": [
      "ir de excursión",
      "ir de excursion",
      "hacer una excursión",
      "hacer una excursion"
    ],
    "meta": {
      "categoryTitle": "На природе",
      "categoryOrder": 6,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "camp",
    "cat": "outdoors",
    "word": "acampar",
    "base": "acampar",
    "gender": "глагол на -ar",
    "tr": "ходить в поход с палаткой",
    "ru": [
      "ходить в поход с палаткой",
      "разбивать лагерь",
      "кемпинг"
    ],
    "answers": [
      "acampar",
      "ir de camping"
    ],
    "art": "camp",
    "examples": [
      [
        "Acampamos cerca del lago.",
        "Мы разбиваем лагерь рядом с озером."
      ],
      [
        "Nunca acampo en invierno.",
        "Я никогда не хожу в поход с палаткой зимой."
      ]
    ],
    "cloze": "En verano queremos ___.",
    "clozeAnswers": [
      "acampar",
      "ir de camping"
    ],
    "meta": {
      "categoryTitle": "На природе",
      "categoryOrder": 6,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "plants",
    "cat": "outdoors",
    "word": "cuidar las plantas",
    "base": "cuidar las plantas",
    "gender": "глагол + существительное",
    "tr": "ухаживать за растениями",
    "ru": [
      "ухаживать за растениями"
    ],
    "answers": [
      "cuidar las plantas",
      "cuidar de las plantas"
    ],
    "art": "plants",
    "examples": [
      [
        "Cuido las plantas cada mañana.",
        "Я ухаживаю за растениями каждое утро."
      ],
      [
        "Mi vecina cuida las plantas cuando viajo.",
        "Моя соседка ухаживает за растениями, когда я путешествую."
      ]
    ],
    "cloze": "Cada mañana tengo que ___.",
    "clozeAnswers": [
      "cuidar las plantas",
      "cuidar de las plantas"
    ],
    "meta": {
      "categoryTitle": "На природе",
      "categoryOrder": 6,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "dog",
    "cat": "outdoors",
    "word": "pasear al perro",
    "base": "pasear al perro",
    "gender": "глагол + a",
    "tr": "выгуливать собаку",
    "ru": [
      "выгуливать собаку",
      "гулять с собакой"
    ],
    "answers": [
      "pasear al perro",
      "pasear con el perro"
    ],
    "art": "dog",
    "examples": [
      [
        "Paseo al perro antes del trabajo.",
        "Я выгуливаю собаку перед работой."
      ],
      [
        "Nos turnamos para pasear al perro.",
        "Мы по очереди выгуливаем собаку."
      ]
    ],
    "cloze": "Antes del trabajo suelo ___.",
    "clozeAnswers": [
      "pasear al perro",
      "pasear con el perro"
    ],
    "meta": {
      "categoryTitle": "На природе",
      "categoryOrder": 6,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "picnic",
    "cat": "outdoors",
    "word": "hacer un pícnic",
    "base": "hacer un pícnic",
    "gender": "hacer + существительное",
    "tr": "устраивать пикник",
    "ru": [
      "устраивать пикник",
      "делать пикник"
    ],
    "answers": [
      "hacer un pícnic",
      "hacer un picnic",
      "ir de pícnic",
      "ir de picnic"
    ],
    "art": "picnic",
    "examples": [
      [
        "Hacemos un pícnic en el parque.",
        "Мы устраиваем пикник в парке."
      ],
      [
        "Si hace sol, vamos a hacer un pícnic.",
        "Если будет солнечно, мы устроим пикник."
      ]
    ],
    "cloze": "Si hace sol, vamos a ___.",
    "clozeAnswers": [
      "hacer un pícnic",
      "hacer un picnic",
      "ir de pícnic",
      "ir de picnic"
    ],
    "meta": {
      "categoryTitle": "На природе",
      "categoryOrder": 6,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "fish",
    "cat": "outdoors",
    "word": "pescar",
    "base": "pescar",
    "gender": "глагол на -ar",
    "tr": "ловить рыбу",
    "ru": [
      "ловить рыбу",
      "рыбачить"
    ],
    "answers": [
      "pescar",
      "ir de pesca"
    ],
    "art": "fishing",
    "examples": [
      [
        "Mi abuelo va a pescar los domingos.",
        "По воскресеньям мой дедушка ходит рыбачить."
      ],
      [
        "Aprendo a pescar en el río.",
        "Я учусь ловить рыбу в реке."
      ]
    ],
    "cloze": "Los domingos le gusta ___.",
    "clozeAnswers": [
      "pescar",
      "ir de pesca"
    ],
    "meta": {
      "categoryTitle": "На природе",
      "categoryOrder": 6,
      "allCategoryTitle": "Все занятия"
    }
  },
  {
    "id": "garden",
    "cat": "outdoors",
    "word": "hacer jardinería",
    "base": "hacer jardinería",
    "gender": "hacer + существительное",
    "tr": "заниматься садоводством",
    "ru": [
      "заниматься садоводством",
      "заниматься садом"
    ],
    "answers": [
      "hacer jardinería",
      "hacer jardineria"
    ],
    "art": "garden",
    "examples": [
      [
        "Hago jardinería los fines de semana.",
        "По выходным я занимаюсь садоводством."
      ],
      [
        "La jardinería me ayuda a relajarme.",
        "Садоводство помогает мне расслабиться."
      ]
    ],
    "cloze": "Los fines de semana me gusta ___.",
    "clozeAnswers": [
      "hacer jardinería",
      "hacer jardineria"
    ],
    "meta": {
      "categoryTitle": "На природе",
      "categoryOrder": 6,
      "allCategoryTitle": "Все занятия"
    }
  }
];

const EXERCISES = [
  {
    "id": "activity_do_sport_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: заниматься спортом.",
    "a": [
      "hacer deporte"
    ],
    "e": "Полезное выражение: hacer deporte."
  },
  {
    "id": "activity_do_sport_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer deporte.",
    "a": [
      "заниматься спортом"
    ],
    "e": "hacer deporte — заниматься спортом."
  },
  {
    "id": "activity_do_sport_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я занимаюсь спортом три раза в неделю.»: Me gusta ___ después del trabajo.",
    "a": [
      "hacer deporte"
    ],
    "e": "Hago deporte tres veces por semana. — Я занимаюсь спортом три раза в неделю."
  },
  {
    "id": "activity_gym_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: ходить в спортзал.",
    "a": [
      "ir al gimnasio"
    ],
    "e": "Полезное выражение: ir al gimnasio."
  },
  {
    "id": "activity_gym_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: ir al gimnasio.",
    "a": [
      "ходить в спортзал",
      "ходить в тренажёрный зал",
      "ходить в тренажерный зал"
    ],
    "e": "ir al gimnasio — ходить в спортзал."
  },
  {
    "id": "activity_gym_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я хожу в спортзал вечером.»: Voy ___ por la tarde.",
    "a": [
      "al gimnasio"
    ],
    "e": "Voy al gimnasio por la tarde. — Я хожу в спортзал вечером."
  },
  {
    "id": "activity_yoga_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: заниматься йогой.",
    "a": [
      "hacer yoga",
      "practicar yoga"
    ],
    "e": "Полезное выражение: hacer yoga."
  },
  {
    "id": "activity_yoga_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer yoga.",
    "a": [
      "заниматься йогой",
      "делать йогу"
    ],
    "e": "hacer yoga — заниматься йогой."
  },
  {
    "id": "activity_yoga_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я занимаюсь йогой перед завтраком.»: Los domingos me gusta ___.",
    "a": [
      "hacer yoga",
      "practicar yoga"
    ],
    "e": "Hago yoga antes de desayunar. — Я занимаюсь йогой перед завтраком."
  },
  {
    "id": "activity_run_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: бегать.",
    "a": [
      "correr"
    ],
    "e": "Полезное выражение: correr."
  },
  {
    "id": "activity_run_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: correr.",
    "a": [
      "бегать",
      "бег"
    ],
    "e": "correr — бегать."
  },
  {
    "id": "activity_run_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «По субботам я бегаю пять километров.»: Me gusta ___ por el parque.",
    "a": [
      "correr"
    ],
    "e": "Corro cinco kilómetros los sábados. — По субботам я бегаю пять километров."
  },
  {
    "id": "activity_swim_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: плавать.",
    "a": [
      "nadar"
    ],
    "e": "Полезное выражение: nadar."
  },
  {
    "id": "activity_swim_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: nadar.",
    "a": [
      "плавать"
    ],
    "e": "nadar — плавать."
  },
  {
    "id": "activity_swim_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мы плаваем в городском бассейне.»: En verano me gusta ___.",
    "a": [
      "nadar"
    ],
    "e": "Nadamos en la piscina municipal. — Мы плаваем в городском бассейне."
  },
  {
    "id": "activity_cycle_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: кататься на велосипеде.",
    "a": [
      "montar en bicicleta",
      "ir en bicicleta"
    ],
    "e": "Полезное выражение: montar en bicicleta."
  },
  {
    "id": "activity_cycle_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: montar en bicicleta.",
    "a": [
      "кататься на велосипеде",
      "ездить на велосипеде"
    ],
    "e": "montar en bicicleta — кататься на велосипеде."
  },
  {
    "id": "activity_cycle_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «По выходным я катаюсь на велосипеде.»: Los domingos suelo ___.",
    "a": [
      "montar en bicicleta",
      "ir en bicicleta"
    ],
    "e": "Monto en bicicleta los fines de semana. — По выходным я катаюсь на велосипеде."
  },
  {
    "id": "activity_football_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть в футбол.",
    "a": [
      "jugar al fútbol"
    ],
    "e": "Полезное выражение: jugar al fútbol."
  },
  {
    "id": "activity_football_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: jugar al fútbol.",
    "a": [
      "играть в футбол"
    ],
    "e": "jugar al fútbol — играть в футбол."
  },
  {
    "id": "activity_football_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мы играем в футбол после занятий.»: Los viernes vamos a ___.",
    "a": [
      "jugar al fútbol"
    ],
    "e": "Jugamos al fútbol después de clase. — Мы играем в футбол после занятий."
  },
  {
    "id": "activity_tennis_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть в теннис.",
    "a": [
      "jugar al tenis"
    ],
    "e": "Полезное выражение: jugar al tenis."
  },
  {
    "id": "activity_tennis_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: jugar al tenis.",
    "a": [
      "играть в теннис"
    ],
    "e": "jugar al tenis — играть в теннис."
  },
  {
    "id": "activity_tennis_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я играю в теннис с подругой.»: Los sábados suelo ___.",
    "a": [
      "jugar al tenis"
    ],
    "e": "Juego al tenis con una amiga. — Я играю в теннис с подругой."
  },
  {
    "id": "activity_dance_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: танцевать.",
    "a": [
      "bailar"
    ],
    "e": "Полезное выражение: bailar."
  },
  {
    "id": "activity_dance_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: bailar.",
    "a": [
      "танцевать"
    ],
    "e": "bailar — танцевать."
  },
  {
    "id": "activity_dance_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я обожаю танцевать сальсу.»: Me encanta ___ salsa.",
    "a": [
      "bailar"
    ],
    "e": "Me encanta bailar salsa. — Я обожаю танцевать сальсу."
  },
  {
    "id": "activity_train_es",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: тренироваться.",
    "a": [
      "entrenar",
      "entrenarse"
    ],
    "e": "Полезное выражение: entrenar."
  },
  {
    "id": "activity_train_ru",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: entrenar.",
    "a": [
      "тренироваться"
    ],
    "e": "entrenar — тренироваться."
  },
  {
    "id": "activity_train_ctx",
    "topic": "activities",
    "foodCat": "sport",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я тренируюсь четыре дня в неделю.»: Intento ___ con regularidad.",
    "a": [
      "entrenar",
      "entrenarme"
    ],
    "e": "Entreno cuatro días a la semana. — Я тренируюсь четыре дня в неделю."
  },
  {
    "id": "activity_videogames_es",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть в видеоигры.",
    "a": [
      "jugar a videojuegos",
      "jugar a los videojuegos"
    ],
    "e": "Полезное выражение: jugar a videojuegos."
  },
  {
    "id": "activity_videogames_ru",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: jugar a videojuegos.",
    "a": [
      "играть в видеоигры",
      "играть в компьютерные игры"
    ],
    "e": "jugar a videojuegos — играть в видеоигры."
  },
  {
    "id": "activity_videogames_ctx",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я играю в видеоигры после ужина.»: A veces me gusta ___.",
    "a": [
      "jugar a videojuegos",
      "jugar a los videojuegos"
    ],
    "e": "Juego a videojuegos después de cenar. — Я играю в видеоигры после ужина."
  },
  {
    "id": "activity_boardgames_es",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть в настольные игры.",
    "a": [
      "jugar a juegos de mesa",
      "jugar a los juegos de mesa"
    ],
    "e": "Полезное выражение: jugar a juegos de mesa."
  },
  {
    "id": "activity_boardgames_ru",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: jugar a juegos de mesa.",
    "a": [
      "играть в настольные игры"
    ],
    "e": "jugar a juegos de mesa — играть в настольные игры."
  },
  {
    "id": "activity_boardgames_ctx",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мы играем в настольные игры с друзьями.»: Con amigos solemos ___.",
    "a": [
      "jugar a juegos de mesa",
      "jugar a los juegos de mesa"
    ],
    "e": "Jugamos a juegos de mesa con amigos. — Мы играем в настольные игры с друзьями."
  },
  {
    "id": "activity_cards_es",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть в карты.",
    "a": [
      "jugar a las cartas"
    ],
    "e": "Полезное выражение: jugar a las cartas."
  },
  {
    "id": "activity_cards_ru",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: jugar a las cartas.",
    "a": [
      "играть в карты"
    ],
    "e": "jugar a las cartas — играть в карты."
  },
  {
    "id": "activity_cards_ctx",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мои бабушка и дедушка играют в карты.»: Después de cenar vamos a ___.",
    "a": [
      "jugar a las cartas"
    ],
    "e": "Mis abuelos juegan a las cartas. — Мои бабушка и дедушка играют в карты."
  },
  {
    "id": "activity_chess_es",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть в шахматы.",
    "a": [
      "jugar al ajedrez"
    ],
    "e": "Полезное выражение: jugar al ajedrez."
  },
  {
    "id": "activity_chess_ru",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: jugar al ajedrez.",
    "a": [
      "играть в шахматы"
    ],
    "e": "jugar al ajedrez — играть в шахматы."
  },
  {
    "id": "activity_chess_ctx",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я учусь играть в шахматы.»: Estoy aprendiendo a ___.",
    "a": [
      "jugar al ajedrez"
    ],
    "e": "Aprendo a jugar al ajedrez. — Я учусь играть в шахматы."
  },
  {
    "id": "activity_puzzles_es",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: собирать пазлы.",
    "a": [
      "hacer puzles",
      "hacer puzzles"
    ],
    "e": "Полезное выражение: hacer puzles."
  },
  {
    "id": "activity_puzzles_ru",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer puzles.",
    "a": [
      "собирать пазлы",
      "делать пазлы"
    ],
    "e": "hacer puzles — собирать пазлы."
  },
  {
    "id": "activity_puzzles_ctx",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Собирание пазлов меня расслабляет.»: Los domingos me gusta ___.",
    "a": [
      "hacer puzles",
      "hacer puzzles"
    ],
    "e": "Me relaja hacer puzles. — Собирание пазлов меня расслабляет."
  },
  {
    "id": "activity_online_es",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть онлайн.",
    "a": [
      "jugar en línea",
      "jugar online"
    ],
    "e": "Полезное выражение: jugar en línea."
  },
  {
    "id": "activity_online_ru",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: jugar en línea.",
    "a": [
      "играть онлайн",
      "играть по сети"
    ],
    "e": "jugar en línea — играть онлайн."
  },
  {
    "id": "activity_online_ctx",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я играю онлайн с друзьями.»: Podemos ___ esta noche.",
    "a": [
      "jugar en línea",
      "jugar online"
    ],
    "e": "Juego en línea con mis amigos. — Я играю онлайн с друзьями."
  },
  {
    "id": "activity_level_es",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: проходить уровень.",
    "a": [
      "pasar un nivel",
      "superar un nivel"
    ],
    "e": "Полезное выражение: pasar un nivel."
  },
  {
    "id": "activity_level_ru",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: pasar un nivel.",
    "a": [
      "проходить уровень",
      "пройти уровень"
    ],
    "e": "pasar un nivel — проходить уровень."
  },
  {
    "id": "activity_level_ctx",
    "topic": "activities",
    "foodCat": "games",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я не могу пройти этот уровень.»: Intento ___ difícil.",
    "a": [
      "pasar un nivel",
      "superar un nivel"
    ],
    "e": "No puedo pasar este nivel. — Я не могу пройти этот уровень."
  },
  {
    "id": "activity_books_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: читать книги.",
    "a": [
      "leer libros"
    ],
    "e": "Полезное выражение: leer libros."
  },
  {
    "id": "activity_books_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: leer libros.",
    "a": [
      "читать книги"
    ],
    "e": "leer libros — читать книги."
  },
  {
    "id": "activity_books_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я читаю книги перед сном.»: Por la noche suelo ___.",
    "a": [
      "leer libros"
    ],
    "e": "Leo libros antes de dormir. — Я читаю книги перед сном."
  },
  {
    "id": "activity_news_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: читать новости.",
    "a": [
      "leer las noticias",
      "leer noticias"
    ],
    "e": "Полезное выражение: leer las noticias."
  },
  {
    "id": "activity_news_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: leer las noticias.",
    "a": [
      "читать новости"
    ],
    "e": "leer las noticias — читать новости."
  },
  {
    "id": "activity_news_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я читаю новости утром.»: Antes del trabajo suelo ___.",
    "a": [
      "leer las noticias",
      "leer noticias"
    ],
    "e": "Leo las noticias por la mañana. — Я читаю новости утром."
  },
  {
    "id": "activity_spanish_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: учить испанский.",
    "a": [
      "estudiar español",
      "aprender español"
    ],
    "e": "Полезное выражение: estudiar español."
  },
  {
    "id": "activity_spanish_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: estudiar español.",
    "a": [
      "учить испанский",
      "изучать испанский"
    ],
    "e": "estudiar español — учить испанский."
  },
  {
    "id": "activity_spanish_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я учу испанский каждый день.»: Todos los días intento ___.",
    "a": [
      "estudiar español",
      "aprender español"
    ],
    "e": "Estudio español todos los días. — Я учу испанский каждый день."
  },
  {
    "id": "activity_languages_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: практиковать языки.",
    "a": [
      "practicar idiomas",
      "practicar los idiomas"
    ],
    "e": "Полезное выражение: practicar idiomas."
  },
  {
    "id": "activity_languages_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: practicar idiomas.",
    "a": [
      "практиковать языки",
      "заниматься языками"
    ],
    "e": "practicar idiomas — практиковать языки."
  },
  {
    "id": "activity_languages_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я практикую языки с носителями.»: Quiero ___ cada semana.",
    "a": [
      "practicar idiomas",
      "practicar los idiomas"
    ],
    "e": "Practico idiomas con hablantes nativos. — Я практикую языки с носителями."
  },
  {
    "id": "activity_learn_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: узнавать что-то новое.",
    "a": [
      "aprender algo nuevo"
    ],
    "e": "Полезное выражение: aprender algo nuevo."
  },
  {
    "id": "activity_learn_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: aprender algo nuevo.",
    "a": [
      "узнавать что-то новое",
      "учить что-то новое",
      "узнавать новое"
    ],
    "e": "aprender algo nuevo — узнавать что-то новое."
  },
  {
    "id": "activity_learn_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я стараюсь каждый день узнавать что-то новое.»: Cada día quiero ___.",
    "a": [
      "aprender algo nuevo"
    ],
    "e": "Intento aprender algo nuevo cada día. — Я стараюсь каждый день узнавать что-то новое."
  },
  {
    "id": "activity_homework_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: делать домашнее задание.",
    "a": [
      "hacer los deberes",
      "hacer la tarea"
    ],
    "e": "Полезное выражение: hacer los deberes."
  },
  {
    "id": "activity_homework_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer los deberes.",
    "a": [
      "делать домашнее задание",
      "делать уроки"
    ],
    "e": "hacer los deberes — делать домашнее задание."
  },
  {
    "id": "activity_homework_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я делаю домашнее задание после занятий.»: Después de clase voy a ___.",
    "a": [
      "hacer los deberes",
      "hacer la tarea"
    ],
    "e": "Hago los deberes después de clase. — Я делаю домашнее задание после занятий."
  },
  {
    "id": "activity_notes_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: делать записи, конспектировать.",
    "a": [
      "tomar apuntes",
      "hacer apuntes"
    ],
    "e": "Полезное выражение: tomar apuntes."
  },
  {
    "id": "activity_notes_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: tomar apuntes.",
    "a": [
      "делать записи",
      "конспектировать",
      "делать конспект",
      "делать записи, конспектировать"
    ],
    "e": "tomar apuntes — делать записи, конспектировать."
  },
  {
    "id": "activity_notes_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я делаю записи во время занятия.»: Durante la clase suelo ___.",
    "a": [
      "tomar apuntes",
      "hacer apuntes"
    ],
    "e": "Tomo apuntes durante la clase. — Я делаю записи во время занятия."
  },
  {
    "id": "activity_podcast_es",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: слушать подкаст.",
    "a": [
      "escuchar un pódcast",
      "escuchar un podcast",
      "escuchar pódcast",
      "escuchar podcast"
    ],
    "e": "Полезное выражение: escuchar un pódcast."
  },
  {
    "id": "activity_podcast_ru",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: escuchar un pódcast.",
    "a": [
      "слушать подкаст",
      "послушать подкаст"
    ],
    "e": "escuchar un pódcast — слушать подкаст."
  },
  {
    "id": "activity_podcast_ctx",
    "topic": "activities",
    "foodCat": "learning",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я слушаю подкаст по дороге на работу.»: De camino al trabajo suelo ___.",
    "a": [
      "escuchar un pódcast",
      "escuchar un podcast"
    ],
    "e": "Escucho un pódcast camino al trabajo. — Я слушаю подкаст по дороге на работу."
  },
  {
    "id": "activity_draw_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: рисовать карандашом.",
    "a": [
      "dibujar"
    ],
    "e": "Полезное выражение: dibujar."
  },
  {
    "id": "activity_draw_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: dibujar.",
    "a": [
      "рисовать",
      "рисовать карандашом"
    ],
    "e": "dibujar — рисовать карандашом."
  },
  {
    "id": "activity_draw_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мне нравится рисовать портреты.»: En mi tiempo libre me gusta ___.",
    "a": [
      "dibujar"
    ],
    "e": "Me gusta dibujar retratos. — Мне нравится рисовать портреты."
  },
  {
    "id": "activity_paint_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: рисовать красками.",
    "a": [
      "pintar"
    ],
    "e": "Полезное выражение: pintar."
  },
  {
    "id": "activity_paint_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: pintar.",
    "a": [
      "рисовать красками",
      "рисовать"
    ],
    "e": "pintar — рисовать красками."
  },
  {
    "id": "activity_paint_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я рисую пейзажи акварелью.»: Los domingos me gusta ___.",
    "a": [
      "pintar"
    ],
    "e": "Pinto paisajes con acuarela. — Я рисую пейзажи акварелью."
  },
  {
    "id": "activity_photos_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: фотографировать.",
    "a": [
      "hacer fotos",
      "sacar fotos",
      "tomar fotos"
    ],
    "e": "Полезное выражение: hacer fotos."
  },
  {
    "id": "activity_photos_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer fotos.",
    "a": [
      "фотографировать",
      "делать фотографии",
      "делать фото"
    ],
    "e": "hacer fotos — фотографировать."
  },
  {
    "id": "activity_photos_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мне нравится фотографировать город.»: Durante los viajes suelo ___.",
    "a": [
      "hacer fotos",
      "sacar fotos",
      "tomar fotos"
    ],
    "e": "Me gusta hacer fotos de la ciudad. — Мне нравится фотографировать город."
  },
  {
    "id": "activity_videos_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: монтировать видео.",
    "a": [
      "editar vídeos",
      "editar videos"
    ],
    "e": "Полезное выражение: editar vídeos."
  },
  {
    "id": "activity_videos_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: editar vídeos.",
    "a": [
      "монтировать видео",
      "редактировать видео"
    ],
    "e": "editar vídeos — монтировать видео."
  },
  {
    "id": "activity_videos_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я монтирую видео для работы.»: Para mi trabajo tengo que ___.",
    "a": [
      "editar vídeos",
      "editar videos"
    ],
    "e": "Edito vídeos para mi trabajo. — Я монтирую видео для работы."
  },
  {
    "id": "activity_stories_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: писать истории.",
    "a": [
      "escribir historias"
    ],
    "e": "Полезное выражение: escribir historias."
  },
  {
    "id": "activity_stories_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: escribir historias.",
    "a": [
      "писать истории",
      "сочинять истории"
    ],
    "e": "escribir historias — писать истории."
  },
  {
    "id": "activity_stories_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мне нравится писать короткие истории.»: Sueño con ___.",
    "a": [
      "escribir historias"
    ],
    "e": "Me gusta escribir historias cortas. — Мне нравится писать короткие истории."
  },
  {
    "id": "activity_crafts_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: заниматься рукоделием.",
    "a": [
      "hacer manualidades"
    ],
    "e": "Полезное выражение: hacer manualidades."
  },
  {
    "id": "activity_crafts_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer manualidades.",
    "a": [
      "заниматься рукоделием",
      "делать поделки"
    ],
    "e": "hacer manualidades — заниматься рукоделием."
  },
  {
    "id": "activity_crafts_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мы делаем поделки из бумаги.»: Los fines de semana hacemos ___.",
    "a": [
      "manualidades"
    ],
    "e": "Hacemos manualidades con papel. — Мы делаем поделки из бумаги."
  },
  {
    "id": "activity_guitar_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: играть на гитаре.",
    "a": [
      "tocar la guitarra",
      "tocar guitarra"
    ],
    "e": "Полезное выражение: tocar la guitarra."
  },
  {
    "id": "activity_guitar_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: tocar la guitarra.",
    "a": [
      "играть на гитаре"
    ],
    "e": "tocar la guitarra — играть на гитаре."
  },
  {
    "id": "activity_guitar_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я играю на гитаре два года.»: Estoy aprendiendo a ___.",
    "a": [
      "tocar la guitarra",
      "tocar guitarra"
    ],
    "e": "Toco la guitarra desde hace dos años. — Я играю на гитаре два года."
  },
  {
    "id": "activity_cook_es",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: готовить.",
    "a": [
      "cocinar"
    ],
    "e": "Полезное выражение: cocinar."
  },
  {
    "id": "activity_cook_ru",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: cocinar.",
    "a": [
      "готовить",
      "готовить еду"
    ],
    "e": "cocinar — готовить."
  },
  {
    "id": "activity_cook_ctx",
    "topic": "activities",
    "foodCat": "creative",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мне нравится готовить для друзей.»: Los domingos solemos ___.",
    "a": [
      "cocinar"
    ],
    "e": "Me gusta cocinar para mis amigos. — Мне нравится готовить для друзей."
  },
  {
    "id": "activity_movies_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: смотреть фильмы.",
    "a": [
      "ver películas",
      "ver peliculas"
    ],
    "e": "Полезное выражение: ver películas."
  },
  {
    "id": "activity_movies_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: ver películas.",
    "a": [
      "смотреть фильмы",
      "смотреть кино"
    ],
    "e": "ver películas — смотреть фильмы."
  },
  {
    "id": "activity_movies_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «По пятницам мы смотрим фильмы.»: Los viernes solemos ___.",
    "a": [
      "ver películas",
      "ver peliculas"
    ],
    "e": "Vemos películas los viernes. — По пятницам мы смотрим фильмы."
  },
  {
    "id": "activity_series_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: смотреть сериалы.",
    "a": [
      "ver series"
    ],
    "e": "Полезное выражение: ver series."
  },
  {
    "id": "activity_series_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: ver series.",
    "a": [
      "смотреть сериалы"
    ],
    "e": "ver series — смотреть сериалы."
  },
  {
    "id": "activity_series_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я смотрю сериалы перед сном.»: Antes de dormir suelo ___.",
    "a": [
      "ver series"
    ],
    "e": "Veo series antes de dormir. — Я смотрю сериалы перед сном."
  },
  {
    "id": "activity_music_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: слушать музыку.",
    "a": [
      "escuchar música",
      "escuchar musica"
    ],
    "e": "Полезное выражение: escuchar música."
  },
  {
    "id": "activity_music_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: escuchar música.",
    "a": [
      "слушать музыку"
    ],
    "e": "escuchar música — слушать музыку."
  },
  {
    "id": "activity_music_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я слушаю музыку во время работы.»: Mientras trabajo me gusta ___.",
    "a": [
      "escuchar música",
      "escuchar musica"
    ],
    "e": "Escucho música mientras trabajo. — Я слушаю музыку во время работы."
  },
  {
    "id": "activity_walk_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: гулять.",
    "a": [
      "pasear",
      "dar un paseo"
    ],
    "e": "Полезное выражение: pasear."
  },
  {
    "id": "activity_walk_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: pasear.",
    "a": [
      "гулять",
      "прогуливаться"
    ],
    "e": "pasear — гулять."
  },
  {
    "id": "activity_walk_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «После ужина мы гуляем по центру.»: Después de cenar solemos ___.",
    "a": [
      "pasear",
      "dar un paseo"
    ],
    "e": "Paseamos por el centro después de cenar. — После ужина мы гуляем по центру."
  },
  {
    "id": "activity_travel_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: путешествовать.",
    "a": [
      "viajar"
    ],
    "e": "Полезное выражение: viajar."
  },
  {
    "id": "activity_travel_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: viajar.",
    "a": [
      "путешествовать"
    ],
    "e": "viajar — путешествовать."
  },
  {
    "id": "activity_travel_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мы обожаем путешествовать на поезде.»: En vacaciones me gusta ___.",
    "a": [
      "viajar"
    ],
    "e": "Nos encanta viajar en tren. — Мы обожаем путешествовать на поезде."
  },
  {
    "id": "activity_shopping_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: ходить за покупками.",
    "a": [
      "ir de compras"
    ],
    "e": "Полезное выражение: ir de compras."
  },
  {
    "id": "activity_shopping_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: ir de compras.",
    "a": [
      "ходить за покупками",
      "ходить по магазинам"
    ],
    "e": "ir de compras — ходить за покупками."
  },
  {
    "id": "activity_shopping_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «В субботу мы идём за покупками.»: El sábado vamos a ___.",
    "a": [
      "ir de compras"
    ],
    "e": "Vamos de compras el sábado. — В субботу мы идём за покупками."
  },
  {
    "id": "activity_rest_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: отдыхать.",
    "a": [
      "descansar"
    ],
    "e": "Полезное выражение: descansar."
  },
  {
    "id": "activity_rest_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: descansar.",
    "a": [
      "отдыхать"
    ],
    "e": "descansar — отдыхать."
  },
  {
    "id": "activity_rest_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мне нужно отдохнуть после работы.»: Después del trabajo quiero ___.",
    "a": [
      "descansar"
    ],
    "e": "Necesito descansar después del trabajo. — Мне нужно отдохнуть после работы."
  },
  {
    "id": "activity_friends_es",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: встречаться с друзьями.",
    "a": [
      "quedar con amigos",
      "quedar con los amigos"
    ],
    "e": "Полезное выражение: quedar con amigos."
  },
  {
    "id": "activity_friends_ru",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: quedar con amigos.",
    "a": [
      "встречаться с друзьями",
      "встретиться с друзьями"
    ],
    "e": "quedar con amigos — встречаться с друзьями."
  },
  {
    "id": "activity_friends_ctx",
    "topic": "activities",
    "foodCat": "leisure",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «В субботу мы встречаемся с друзьями.»: El sábado solemos ___.",
    "a": [
      "quedar con amigos",
      "quedar con los amigos"
    ],
    "e": "El sábado quedamos con amigos. — В субботу мы встречаемся с друзьями."
  },
  {
    "id": "activity_hike_es",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: ходить в поход, на экскурсию.",
    "a": [
      "ir de excursión",
      "ir de excursion",
      "hacer una excursión",
      "hacer una excursion"
    ],
    "e": "Полезное выражение: ir de excursión."
  },
  {
    "id": "activity_hike_ru",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: ir de excursión.",
    "a": [
      "ходить в поход",
      "ходить на экскурсию",
      "ездить на экскурсию",
      "ходить в поход, на экскурсию"
    ],
    "e": "ir de excursión — ходить в поход, на экскурсию."
  },
  {
    "id": "activity_hike_ctx",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Завтра мы идём в поход в горы.»: En primavera solemos ___.",
    "a": [
      "ir de excursión",
      "ir de excursion",
      "hacer una excursión",
      "hacer una excursion"
    ],
    "e": "Mañana vamos de excursión a la montaña. — Завтра мы идём в поход в горы."
  },
  {
    "id": "activity_camp_es",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: ходить в поход с палаткой.",
    "a": [
      "acampar",
      "ir de camping"
    ],
    "e": "Полезное выражение: acampar."
  },
  {
    "id": "activity_camp_ru",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: acampar.",
    "a": [
      "ходить в поход с палаткой",
      "разбивать лагерь",
      "кемпинг"
    ],
    "e": "acampar — ходить в поход с палаткой."
  },
  {
    "id": "activity_camp_ctx",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мы разбиваем лагерь рядом с озером.»: En verano queremos ___.",
    "a": [
      "acampar",
      "ir de camping"
    ],
    "e": "Acampamos cerca del lago. — Мы разбиваем лагерь рядом с озером."
  },
  {
    "id": "activity_plants_es",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: ухаживать за растениями.",
    "a": [
      "cuidar las plantas",
      "cuidar de las plantas"
    ],
    "e": "Полезное выражение: cuidar las plantas."
  },
  {
    "id": "activity_plants_ru",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: cuidar las plantas.",
    "a": [
      "ухаживать за растениями"
    ],
    "e": "cuidar las plantas — ухаживать за растениями."
  },
  {
    "id": "activity_plants_ctx",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я ухаживаю за растениями каждое утро.»: Cada mañana tengo que ___.",
    "a": [
      "cuidar las plantas",
      "cuidar de las plantas"
    ],
    "e": "Cuido las plantas cada mañana. — Я ухаживаю за растениями каждое утро."
  },
  {
    "id": "activity_dog_es",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: выгуливать собаку.",
    "a": [
      "pasear al perro",
      "pasear con el perro"
    ],
    "e": "Полезное выражение: pasear al perro."
  },
  {
    "id": "activity_dog_ru",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: pasear al perro.",
    "a": [
      "выгуливать собаку",
      "гулять с собакой"
    ],
    "e": "pasear al perro — выгуливать собаку."
  },
  {
    "id": "activity_dog_ctx",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Я выгуливаю собаку перед работой.»: Antes del trabajo suelo ___.",
    "a": [
      "pasear al perro",
      "pasear con el perro"
    ],
    "e": "Paseo al perro antes del trabajo. — Я выгуливаю собаку перед работой."
  },
  {
    "id": "activity_picnic_es",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: устраивать пикник.",
    "a": [
      "hacer un pícnic",
      "hacer un picnic",
      "ir de pícnic",
      "ir de picnic"
    ],
    "e": "Полезное выражение: hacer un pícnic."
  },
  {
    "id": "activity_picnic_ru",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer un pícnic.",
    "a": [
      "устраивать пикник",
      "делать пикник"
    ],
    "e": "hacer un pícnic — устраивать пикник."
  },
  {
    "id": "activity_picnic_ctx",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «Мы устраиваем пикник в парке.»: Si hace sol, vamos a ___.",
    "a": [
      "hacer un pícnic",
      "hacer un picnic",
      "ir de pícnic",
      "ir de picnic"
    ],
    "e": "Hacemos un pícnic en el parque. — Мы устраиваем пикник в парке."
  },
  {
    "id": "activity_fish_es",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: ловить рыбу.",
    "a": [
      "pescar",
      "ir de pesca"
    ],
    "e": "Полезное выражение: pescar."
  },
  {
    "id": "activity_fish_ru",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: pescar.",
    "a": [
      "ловить рыбу",
      "рыбачить"
    ],
    "e": "pescar — ловить рыбу."
  },
  {
    "id": "activity_fish_ctx",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «По воскресеньям мой дедушка ходит рыбачить.»: Los domingos le gusta ___.",
    "a": [
      "pescar",
      "ir de pesca"
    ],
    "e": "Mi abuelo va a pescar los domingos. — По воскресеньям мой дедушка ходит рыбачить."
  },
  {
    "id": "activity_garden_es",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Вспомни выражение",
    "q": "Переведи на испанский: заниматься садоводством.",
    "a": [
      "hacer jardinería",
      "hacer jardineria"
    ],
    "e": "Полезное выражение: hacer jardinería."
  },
  {
    "id": "activity_garden_ru",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Узнай выражение",
    "q": "Переведи на русский: hacer jardinería.",
    "a": [
      "заниматься садоводством",
      "заниматься садом"
    ],
    "e": "hacer jardinería — заниматься садоводством."
  },
  {
    "id": "activity_garden_ctx",
    "topic": "activities",
    "foodCat": "outdoors",
    "skill": "Фраза в контексте",
    "q": "Вставь пропущенное выражение по переводу «По выходным я занимаюсь садоводством.»: Los fines de semana me gusta ___.",
    "a": [
      "hacer jardinería",
      "hacer jardineria"
    ],
    "e": "Hago jardinería los fines de semana. — По выходным я занимаюсь садоводством."
  },
  {
    "id": "choice_activities_do_sport",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: заниматься спортом.",
    "a": [
      "hacer deporte"
    ],
    "options": [
      "hacer deporte",
      "ir al gimnasio",
      "hacer yoga",
      "correr"
    ],
    "e": "hacer deporte — заниматься спортом."
  },
  {
    "id": "choice_activities_gym",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ходить в спортзал.",
    "a": [
      "ir al gimnasio"
    ],
    "options": [
      "ir al gimnasio",
      "hacer yoga",
      "correr",
      "nadar"
    ],
    "e": "ir al gimnasio — ходить в спортзал."
  },
  {
    "id": "choice_activities_yoga",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: заниматься йогой.",
    "a": [
      "hacer yoga"
    ],
    "options": [
      "hacer yoga",
      "correr",
      "nadar",
      "montar en bicicleta"
    ],
    "e": "hacer yoga — заниматься йогой."
  },
  {
    "id": "choice_activities_run",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: бегать.",
    "a": [
      "correr"
    ],
    "options": [
      "correr",
      "nadar",
      "montar en bicicleta",
      "jugar al fútbol"
    ],
    "e": "correr — бегать."
  },
  {
    "id": "choice_activities_swim",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: плавать.",
    "a": [
      "nadar"
    ],
    "options": [
      "nadar",
      "montar en bicicleta",
      "jugar al fútbol",
      "jugar al tenis"
    ],
    "e": "nadar — плавать."
  },
  {
    "id": "choice_activities_cycle",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: кататься на велосипеде.",
    "a": [
      "montar en bicicleta"
    ],
    "options": [
      "montar en bicicleta",
      "jugar al fútbol",
      "jugar al tenis",
      "bailar"
    ],
    "e": "montar en bicicleta — кататься на велосипеде."
  },
  {
    "id": "choice_activities_football",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть в футбол.",
    "a": [
      "jugar al fútbol"
    ],
    "options": [
      "jugar al fútbol",
      "jugar al tenis",
      "bailar",
      "entrenar"
    ],
    "e": "jugar al fútbol — играть в футбол."
  },
  {
    "id": "choice_activities_tennis",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть в теннис.",
    "a": [
      "jugar al tenis"
    ],
    "options": [
      "jugar al tenis",
      "bailar",
      "entrenar",
      "hacer deporte"
    ],
    "e": "jugar al tenis — играть в теннис."
  },
  {
    "id": "choice_activities_dance",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: танцевать.",
    "a": [
      "bailar"
    ],
    "options": [
      "bailar",
      "entrenar",
      "hacer deporte",
      "ir al gimnasio"
    ],
    "e": "bailar — танцевать."
  },
  {
    "id": "choice_activities_train",
    "topic": "activities",
    "foodCat": "sport",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: тренироваться.",
    "a": [
      "entrenar"
    ],
    "options": [
      "entrenar",
      "hacer deporte",
      "ir al gimnasio",
      "hacer yoga"
    ],
    "e": "entrenar — тренироваться."
  },
  {
    "id": "choice_activities_videogames",
    "topic": "activities",
    "foodCat": "games",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть в видеоигры.",
    "a": [
      "jugar a videojuegos"
    ],
    "options": [
      "jugar a videojuegos",
      "jugar en línea",
      "pasar un nivel",
      "jugar a juegos de mesa"
    ],
    "e": "jugar a videojuegos — играть в видеоигры."
  },
  {
    "id": "choice_activities_boardgames",
    "topic": "activities",
    "foodCat": "games",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть в настольные игры.",
    "a": [
      "jugar a juegos de mesa"
    ],
    "options": [
      "jugar a juegos de mesa",
      "pasar un nivel",
      "jugar a videojuegos",
      "jugar a las cartas"
    ],
    "e": "jugar a juegos de mesa — играть в настольные игры."
  },
  {
    "id": "choice_activities_cards",
    "topic": "activities",
    "foodCat": "games",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть в карты.",
    "a": [
      "jugar a las cartas"
    ],
    "options": [
      "jugar a las cartas",
      "jugar a videojuegos",
      "jugar a juegos de mesa",
      "jugar al ajedrez"
    ],
    "e": "jugar a las cartas — играть в карты."
  },
  {
    "id": "choice_activities_chess",
    "topic": "activities",
    "foodCat": "games",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть в шахматы.",
    "a": [
      "jugar al ajedrez"
    ],
    "options": [
      "jugar al ajedrez",
      "jugar a juegos de mesa",
      "jugar a las cartas",
      "hacer puzles"
    ],
    "e": "jugar al ajedrez — играть в шахматы."
  },
  {
    "id": "choice_activities_puzzles",
    "topic": "activities",
    "foodCat": "games",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: собирать пазлы.",
    "a": [
      "hacer puzles"
    ],
    "options": [
      "hacer puzles",
      "jugar a las cartas",
      "jugar al ajedrez",
      "jugar en línea"
    ],
    "e": "hacer puzles — собирать пазлы."
  },
  {
    "id": "choice_activities_online",
    "topic": "activities",
    "foodCat": "games",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть онлайн.",
    "a": [
      "jugar en línea"
    ],
    "options": [
      "jugar en línea",
      "jugar al ajedrez",
      "hacer puzles",
      "pasar un nivel"
    ],
    "e": "jugar en línea — играть онлайн."
  },
  {
    "id": "choice_activities_level",
    "topic": "activities",
    "foodCat": "games",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: проходить уровень.",
    "a": [
      "pasar un nivel"
    ],
    "options": [
      "pasar un nivel",
      "hacer puzles",
      "jugar en línea",
      "jugar a videojuegos"
    ],
    "e": "pasar un nivel — проходить уровень."
  },
  {
    "id": "choice_activities_books",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: читать книги.",
    "a": [
      "leer libros"
    ],
    "options": [
      "leer libros",
      "aprender algo nuevo",
      "hacer los deberes",
      "tomar apuntes"
    ],
    "e": "leer libros — читать книги."
  },
  {
    "id": "choice_activities_news",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: читать новости.",
    "a": [
      "leer las noticias"
    ],
    "options": [
      "leer las noticias",
      "hacer los deberes",
      "tomar apuntes",
      "escuchar un pódcast"
    ],
    "e": "leer las noticias — читать новости."
  },
  {
    "id": "choice_activities_spanish",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: учить испанский.",
    "a": [
      "estudiar español"
    ],
    "options": [
      "estudiar español",
      "tomar apuntes",
      "escuchar un pódcast",
      "leer libros"
    ],
    "e": "estudiar español — учить испанский."
  },
  {
    "id": "choice_activities_languages",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: практиковать языки.",
    "a": [
      "practicar idiomas"
    ],
    "options": [
      "practicar idiomas",
      "escuchar un pódcast",
      "leer libros",
      "leer las noticias"
    ],
    "e": "practicar idiomas — практиковать языки."
  },
  {
    "id": "choice_activities_learn",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: узнавать что-то новое.",
    "a": [
      "aprender algo nuevo"
    ],
    "options": [
      "aprender algo nuevo",
      "leer libros",
      "leer las noticias",
      "estudiar español"
    ],
    "e": "aprender algo nuevo — узнавать что-то новое."
  },
  {
    "id": "choice_activities_homework",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: делать домашнее задание.",
    "a": [
      "hacer los deberes"
    ],
    "options": [
      "hacer los deberes",
      "leer las noticias",
      "estudiar español",
      "practicar idiomas"
    ],
    "e": "hacer los deberes — делать домашнее задание."
  },
  {
    "id": "choice_activities_notes",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: делать записи, конспектировать.",
    "a": [
      "tomar apuntes"
    ],
    "options": [
      "tomar apuntes",
      "estudiar español",
      "practicar idiomas",
      "aprender algo nuevo"
    ],
    "e": "tomar apuntes — делать записи, конспектировать."
  },
  {
    "id": "choice_activities_podcast",
    "topic": "activities",
    "foodCat": "learning",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: слушать подкаст.",
    "a": [
      "escuchar un pódcast"
    ],
    "options": [
      "escuchar un pódcast",
      "practicar idiomas",
      "aprender algo nuevo",
      "hacer los deberes"
    ],
    "e": "escuchar un pódcast — слушать подкаст."
  },
  {
    "id": "choice_activities_draw",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рисовать карандашом.",
    "a": [
      "dibujar"
    ],
    "options": [
      "dibujar",
      "hacer manualidades",
      "tocar la guitarra",
      "cocinar"
    ],
    "e": "dibujar — рисовать карандашом."
  },
  {
    "id": "choice_activities_paint",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: рисовать красками.",
    "a": [
      "pintar"
    ],
    "options": [
      "pintar",
      "tocar la guitarra",
      "cocinar",
      "dibujar"
    ],
    "e": "pintar — рисовать красками."
  },
  {
    "id": "choice_activities_photos",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: фотографировать.",
    "a": [
      "hacer fotos"
    ],
    "options": [
      "hacer fotos",
      "cocinar",
      "dibujar",
      "pintar"
    ],
    "e": "hacer fotos — фотографировать."
  },
  {
    "id": "choice_activities_videos",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: монтировать видео.",
    "a": [
      "editar vídeos"
    ],
    "options": [
      "editar vídeos",
      "dibujar",
      "pintar",
      "hacer fotos"
    ],
    "e": "editar vídeos — монтировать видео."
  },
  {
    "id": "choice_activities_stories",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: писать истории.",
    "a": [
      "escribir historias"
    ],
    "options": [
      "escribir historias",
      "pintar",
      "hacer fotos",
      "editar vídeos"
    ],
    "e": "escribir historias — писать истории."
  },
  {
    "id": "choice_activities_crafts",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: заниматься рукоделием.",
    "a": [
      "hacer manualidades"
    ],
    "options": [
      "hacer manualidades",
      "hacer fotos",
      "editar vídeos",
      "escribir historias"
    ],
    "e": "hacer manualidades — заниматься рукоделием."
  },
  {
    "id": "choice_activities_guitar",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: играть на гитаре.",
    "a": [
      "tocar la guitarra"
    ],
    "options": [
      "tocar la guitarra",
      "editar vídeos",
      "escribir historias",
      "hacer manualidades"
    ],
    "e": "tocar la guitarra — играть на гитаре."
  },
  {
    "id": "choice_activities_cook",
    "topic": "activities",
    "foodCat": "creative",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: готовить.",
    "a": [
      "cocinar"
    ],
    "options": [
      "cocinar",
      "escribir historias",
      "hacer manualidades",
      "tocar la guitarra"
    ],
    "e": "cocinar — готовить."
  },
  {
    "id": "choice_activities_movies",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: смотреть фильмы.",
    "a": [
      "ver películas"
    ],
    "options": [
      "ver películas",
      "descansar",
      "quedar con amigos",
      "ver series"
    ],
    "e": "ver películas — смотреть фильмы."
  },
  {
    "id": "choice_activities_series",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: смотреть сериалы.",
    "a": [
      "ver series"
    ],
    "options": [
      "ver series",
      "quedar con amigos",
      "ver películas",
      "escuchar música"
    ],
    "e": "ver series — смотреть сериалы."
  },
  {
    "id": "choice_activities_music",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: слушать музыку.",
    "a": [
      "escuchar música"
    ],
    "options": [
      "escuchar música",
      "ver películas",
      "ver series",
      "pasear"
    ],
    "e": "escuchar música — слушать музыку."
  },
  {
    "id": "choice_activities_walk",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: гулять.",
    "a": [
      "pasear"
    ],
    "options": [
      "pasear",
      "ver series",
      "escuchar música",
      "viajar"
    ],
    "e": "pasear — гулять."
  },
  {
    "id": "choice_activities_travel",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: путешествовать.",
    "a": [
      "viajar"
    ],
    "options": [
      "viajar",
      "escuchar música",
      "pasear",
      "ir de compras"
    ],
    "e": "viajar — путешествовать."
  },
  {
    "id": "choice_activities_shopping",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ходить за покупками.",
    "a": [
      "ir de compras"
    ],
    "options": [
      "ir de compras",
      "pasear",
      "viajar",
      "descansar"
    ],
    "e": "ir de compras — ходить за покупками."
  },
  {
    "id": "choice_activities_rest",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: отдыхать.",
    "a": [
      "descansar"
    ],
    "options": [
      "descansar",
      "viajar",
      "ir de compras",
      "quedar con amigos"
    ],
    "e": "descansar — отдыхать."
  },
  {
    "id": "choice_activities_friends",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: встречаться с друзьями.",
    "a": [
      "quedar con amigos"
    ],
    "options": [
      "quedar con amigos",
      "ir de compras",
      "descansar",
      "ver películas"
    ],
    "e": "quedar con amigos — встречаться с друзьями."
  },
  {
    "id": "choice_activities_hike",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ходить в поход, на экскурсию.",
    "a": [
      "ir de excursión"
    ],
    "options": [
      "ir de excursión",
      "hacer jardinería",
      "acampar",
      "cuidar las plantas"
    ],
    "e": "ir de excursión — ходить в поход, на экскурсию."
  },
  {
    "id": "choice_activities_camp",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ходить в поход с палаткой.",
    "a": [
      "acampar"
    ],
    "options": [
      "acampar",
      "ir de excursión",
      "cuidar las plantas",
      "pasear al perro"
    ],
    "e": "acampar — ходить в поход с палаткой."
  },
  {
    "id": "choice_activities_plants",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ухаживать за растениями.",
    "a": [
      "cuidar las plantas"
    ],
    "options": [
      "cuidar las plantas",
      "acampar",
      "pasear al perro",
      "hacer un pícnic"
    ],
    "e": "cuidar las plantas — ухаживать за растениями."
  },
  {
    "id": "choice_activities_dog",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: выгуливать собаку.",
    "a": [
      "pasear al perro"
    ],
    "options": [
      "pasear al perro",
      "cuidar las plantas",
      "hacer un pícnic",
      "pescar"
    ],
    "e": "pasear al perro — выгуливать собаку."
  },
  {
    "id": "choice_activities_picnic",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: устраивать пикник.",
    "a": [
      "hacer un pícnic"
    ],
    "options": [
      "hacer un pícnic",
      "pasear al perro",
      "pescar",
      "hacer jardinería"
    ],
    "e": "hacer un pícnic — устраивать пикник."
  },
  {
    "id": "choice_activities_fish",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: ловить рыбу.",
    "a": [
      "pescar"
    ],
    "options": [
      "pescar",
      "hacer un pícnic",
      "hacer jardinería",
      "ir de excursión"
    ],
    "e": "pescar — ловить рыбу."
  },
  {
    "id": "choice_activities_garden",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "choice",
    "skill": "Быстрый тест",
    "q": "Выбери испанский вариант: заниматься садоводством.",
    "a": [
      "hacer jardinería"
    ],
    "options": [
      "hacer jardinería",
      "pescar",
      "ir de excursión",
      "acampar"
    ],
    "e": "hacer jardinería — заниматься садоводством."
  },
  {
    "id": "audio_activities_do_sport",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hago deporte tres veces por semana.",
    "a": [
      "Hago deporte tres veces por semana."
    ],
    "e": "Я занимаюсь спортом три раза в неделю."
  },
  {
    "id": "audio_activities_gym",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Voy al gimnasio por la tarde.",
    "a": [
      "Voy al gimnasio por la tarde."
    ],
    "e": "Я хожу в спортзал вечером."
  },
  {
    "id": "audio_activities_yoga",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hago yoga antes de desayunar.",
    "a": [
      "Hago yoga antes de desayunar."
    ],
    "e": "Я занимаюсь йогой перед завтраком."
  },
  {
    "id": "audio_activities_run",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Corro cinco kilómetros los sábados.",
    "a": [
      "Corro cinco kilómetros los sábados."
    ],
    "e": "По субботам я бегаю пять километров."
  },
  {
    "id": "audio_activities_swim",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nadamos en la piscina municipal.",
    "a": [
      "Nadamos en la piscina municipal."
    ],
    "e": "Мы плаваем в городском бассейне."
  },
  {
    "id": "audio_activities_cycle",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Monto en bicicleta los fines de semana.",
    "a": [
      "Monto en bicicleta los fines de semana."
    ],
    "e": "По выходным я катаюсь на велосипеде."
  },
  {
    "id": "audio_activities_football",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Jugamos al fútbol después de clase.",
    "a": [
      "Jugamos al fútbol después de clase."
    ],
    "e": "Мы играем в футбол после занятий."
  },
  {
    "id": "audio_activities_tennis",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Juego al tenis con una amiga.",
    "a": [
      "Juego al tenis con una amiga."
    ],
    "e": "Я играю в теннис с подругой."
  },
  {
    "id": "audio_activities_dance",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me encanta bailar salsa.",
    "a": [
      "Me encanta bailar salsa."
    ],
    "e": "Я обожаю танцевать сальсу."
  },
  {
    "id": "audio_activities_train",
    "topic": "activities",
    "foodCat": "sport",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Entreno cuatro días a la semana.",
    "a": [
      "Entreno cuatro días a la semana."
    ],
    "e": "Я тренируюсь четыре дня в неделю."
  },
  {
    "id": "audio_activities_videogames",
    "topic": "activities",
    "foodCat": "games",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Juego a videojuegos después de cenar.",
    "a": [
      "Juego a videojuegos después de cenar."
    ],
    "e": "Я играю в видеоигры после ужина."
  },
  {
    "id": "audio_activities_boardgames",
    "topic": "activities",
    "foodCat": "games",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Jugamos a juegos de mesa con amigos.",
    "a": [
      "Jugamos a juegos de mesa con amigos."
    ],
    "e": "Мы играем в настольные игры с друзьями."
  },
  {
    "id": "audio_activities_cards",
    "topic": "activities",
    "foodCat": "games",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Mis abuelos juegan a las cartas.",
    "a": [
      "Mis abuelos juegan a las cartas."
    ],
    "e": "Мои бабушка и дедушка играют в карты."
  },
  {
    "id": "audio_activities_chess",
    "topic": "activities",
    "foodCat": "games",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Aprendo a jugar al ajedrez.",
    "a": [
      "Aprendo a jugar al ajedrez."
    ],
    "e": "Я учусь играть в шахматы."
  },
  {
    "id": "audio_activities_puzzles",
    "topic": "activities",
    "foodCat": "games",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me relaja hacer puzles.",
    "a": [
      "Me relaja hacer puzles."
    ],
    "e": "Собирание пазлов меня расслабляет."
  },
  {
    "id": "audio_activities_online",
    "topic": "activities",
    "foodCat": "games",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Juego en línea con mis amigos.",
    "a": [
      "Juego en línea con mis amigos."
    ],
    "e": "Я играю онлайн с друзьями."
  },
  {
    "id": "audio_activities_level",
    "topic": "activities",
    "foodCat": "games",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "No puedo pasar este nivel.",
    "a": [
      "No puedo pasar este nivel."
    ],
    "e": "Я не могу пройти этот уровень."
  },
  {
    "id": "audio_activities_books",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Leo libros antes de dormir.",
    "a": [
      "Leo libros antes de dormir."
    ],
    "e": "Я читаю книги перед сном."
  },
  {
    "id": "audio_activities_news",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Leo las noticias por la mañana.",
    "a": [
      "Leo las noticias por la mañana."
    ],
    "e": "Я читаю новости утром."
  },
  {
    "id": "audio_activities_spanish",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Estudio español todos los días.",
    "a": [
      "Estudio español todos los días."
    ],
    "e": "Я учу испанский каждый день."
  },
  {
    "id": "audio_activities_languages",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Practico idiomas con hablantes nativos.",
    "a": [
      "Practico idiomas con hablantes nativos."
    ],
    "e": "Я практикую языки с носителями."
  },
  {
    "id": "audio_activities_learn",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Intento aprender algo nuevo cada día.",
    "a": [
      "Intento aprender algo nuevo cada día."
    ],
    "e": "Я стараюсь каждый день узнавать что-то новое."
  },
  {
    "id": "audio_activities_homework",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hago los deberes después de clase.",
    "a": [
      "Hago los deberes después de clase."
    ],
    "e": "Я делаю домашнее задание после занятий."
  },
  {
    "id": "audio_activities_notes",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Tomo apuntes durante la clase.",
    "a": [
      "Tomo apuntes durante la clase."
    ],
    "e": "Я делаю записи во время занятия."
  },
  {
    "id": "audio_activities_podcast",
    "topic": "activities",
    "foodCat": "learning",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Escucho un pódcast camino al trabajo.",
    "a": [
      "Escucho un pódcast camino al trabajo."
    ],
    "e": "Я слушаю подкаст по дороге на работу."
  },
  {
    "id": "audio_activities_draw",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta dibujar retratos.",
    "a": [
      "Me gusta dibujar retratos."
    ],
    "e": "Мне нравится рисовать портреты."
  },
  {
    "id": "audio_activities_paint",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Pinto paisajes con acuarela.",
    "a": [
      "Pinto paisajes con acuarela."
    ],
    "e": "Я рисую пейзажи акварелью."
  },
  {
    "id": "audio_activities_photos",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta hacer fotos de la ciudad.",
    "a": [
      "Me gusta hacer fotos de la ciudad."
    ],
    "e": "Мне нравится фотографировать город."
  },
  {
    "id": "audio_activities_videos",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Edito vídeos para mi trabajo.",
    "a": [
      "Edito vídeos para mi trabajo."
    ],
    "e": "Я монтирую видео для работы."
  },
  {
    "id": "audio_activities_stories",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta escribir historias cortas.",
    "a": [
      "Me gusta escribir historias cortas."
    ],
    "e": "Мне нравится писать короткие истории."
  },
  {
    "id": "audio_activities_crafts",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hacemos manualidades con papel.",
    "a": [
      "Hacemos manualidades con papel."
    ],
    "e": "Мы делаем поделки из бумаги."
  },
  {
    "id": "audio_activities_guitar",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Toco la guitarra desde hace dos años.",
    "a": [
      "Toco la guitarra desde hace dos años."
    ],
    "e": "Я играю на гитаре два года."
  },
  {
    "id": "audio_activities_cook",
    "topic": "activities",
    "foodCat": "creative",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Me gusta cocinar para mis amigos.",
    "a": [
      "Me gusta cocinar para mis amigos."
    ],
    "e": "Мне нравится готовить для друзей."
  },
  {
    "id": "audio_activities_movies",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vemos películas los viernes.",
    "a": [
      "Vemos películas los viernes."
    ],
    "e": "По пятницам мы смотрим фильмы."
  },
  {
    "id": "audio_activities_series",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Veo series antes de dormir.",
    "a": [
      "Veo series antes de dormir."
    ],
    "e": "Я смотрю сериалы перед сном."
  },
  {
    "id": "audio_activities_music",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Escucho música mientras trabajo.",
    "a": [
      "Escucho música mientras trabajo."
    ],
    "e": "Я слушаю музыку во время работы."
  },
  {
    "id": "audio_activities_walk",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Paseamos por el centro después de cenar.",
    "a": [
      "Paseamos por el centro después de cenar."
    ],
    "e": "После ужина мы гуляем по центру."
  },
  {
    "id": "audio_activities_travel",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Nos encanta viajar en tren.",
    "a": [
      "Nos encanta viajar en tren."
    ],
    "e": "Мы обожаем путешествовать на поезде."
  },
  {
    "id": "audio_activities_shopping",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Vamos de compras el sábado.",
    "a": [
      "Vamos de compras el sábado."
    ],
    "e": "В субботу мы идём за покупками."
  },
  {
    "id": "audio_activities_rest",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Necesito descansar después del trabajo.",
    "a": [
      "Necesito descansar después del trabajo."
    ],
    "e": "Мне нужно отдохнуть после работы."
  },
  {
    "id": "audio_activities_friends",
    "topic": "activities",
    "foodCat": "leisure",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "El sábado quedamos con amigos.",
    "a": [
      "El sábado quedamos con amigos."
    ],
    "e": "В субботу мы встречаемся с друзьями."
  },
  {
    "id": "audio_activities_hike",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Mañana vamos de excursión a la montaña.",
    "a": [
      "Mañana vamos de excursión a la montaña."
    ],
    "e": "Завтра мы идём в поход в горы."
  },
  {
    "id": "audio_activities_camp",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Acampamos cerca del lago.",
    "a": [
      "Acampamos cerca del lago."
    ],
    "e": "Мы разбиваем лагерь рядом с озером."
  },
  {
    "id": "audio_activities_plants",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Cuido las plantas cada mañana.",
    "a": [
      "Cuido las plantas cada mañana."
    ],
    "e": "Я ухаживаю за растениями каждое утро."
  },
  {
    "id": "audio_activities_dog",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Paseo al perro antes del trabajo.",
    "a": [
      "Paseo al perro antes del trabajo."
    ],
    "e": "Я выгуливаю собаку перед работой."
  },
  {
    "id": "audio_activities_picnic",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hacemos un pícnic en el parque.",
    "a": [
      "Hacemos un pícnic en el parque."
    ],
    "e": "Мы устраиваем пикник в парке."
  },
  {
    "id": "audio_activities_fish",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Mi abuelo va a pescar los domingos.",
    "a": [
      "Mi abuelo va a pescar los domingos."
    ],
    "e": "По воскресеньям мой дедушка ходит рыбачить."
  },
  {
    "id": "audio_activities_garden",
    "topic": "activities",
    "foodCat": "outdoors",
    "type": "audio",
    "skill": "Аудиодиктант",
    "q": "Прослушай и запиши предложение по-испански.",
    "audio": "Hago jardinería los fines de semana.",
    "a": [
      "Hago jardinería los fines de semana."
    ],
    "e": "По выходным я занимаюсь садоводством."
  },
  {
    "id": "sort_auto_activities_0",
    "topic": "activities",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Занятия и увлечения» по подходящим колонкам. Набор 1 из 2.",
    "sortColumns": [
      {
        "id": "sport",
        "title": "Спорт"
      },
      {
        "id": "games",
        "title": "Игры"
      },
      {
        "id": "learning",
        "title": "Чтение и учёба"
      }
    ],
    "sortTokens": [
      {
        "id": "activities_0_sport_do_sport",
        "text": "hacer deporte",
        "category": "sport"
      },
      {
        "id": "activities_0_sport_gym",
        "text": "ir al gimnasio",
        "category": "sport"
      },
      {
        "id": "activities_0_sport_yoga",
        "text": "hacer yoga",
        "category": "sport"
      },
      {
        "id": "activities_0_games_videogames",
        "text": "jugar a videojuegos",
        "category": "games"
      },
      {
        "id": "activities_0_games_boardgames",
        "text": "jugar a juegos de mesa",
        "category": "games"
      },
      {
        "id": "activities_0_games_cards",
        "text": "jugar a las cartas",
        "category": "games"
      },
      {
        "id": "activities_0_learning_books",
        "text": "leer libros",
        "category": "learning"
      },
      {
        "id": "activities_0_learning_news",
        "text": "leer las noticias",
        "category": "learning"
      },
      {
        "id": "activities_0_learning_spanish",
        "text": "estudiar español",
        "category": "learning"
      }
    ],
    "a": [
      "sport | sport | sport | games | games | games | learning | learning | learning"
    ],
    "displayAnswer": "Спорт: hacer deporte, ir al gimnasio, hacer yoga · Игры: jugar a videojuegos, jugar a juegos de mesa, jugar a las cartas · Чтение и учёба: leer libros, leer las noticias, estudiar español",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  },
  {
    "id": "sort_auto_activities_1",
    "topic": "activities",
    "foodCat": "all",
    "type": "category-sort",
    "skill": "Распредели по категориям",
    "q": "Распредели слова темы «Занятия и увлечения» по подходящим колонкам. Набор 2 из 2.",
    "sortColumns": [
      {
        "id": "creative",
        "title": "Творчество"
      },
      {
        "id": "leisure",
        "title": "Досуг"
      },
      {
        "id": "outdoors",
        "title": "На природе"
      }
    ],
    "sortTokens": [
      {
        "id": "activities_1_creative_videos",
        "text": "editar vídeos",
        "category": "creative"
      },
      {
        "id": "activities_1_creative_stories",
        "text": "escribir historias",
        "category": "creative"
      },
      {
        "id": "activities_1_creative_crafts",
        "text": "hacer manualidades",
        "category": "creative"
      },
      {
        "id": "activities_1_leisure_walk",
        "text": "pasear",
        "category": "leisure"
      },
      {
        "id": "activities_1_leisure_travel",
        "text": "viajar",
        "category": "leisure"
      },
      {
        "id": "activities_1_leisure_shopping",
        "text": "ir de compras",
        "category": "leisure"
      },
      {
        "id": "activities_1_outdoors_dog",
        "text": "pasear al perro",
        "category": "outdoors"
      },
      {
        "id": "activities_1_outdoors_picnic",
        "text": "hacer un pícnic",
        "category": "outdoors"
      },
      {
        "id": "activities_1_outdoors_fish",
        "text": "pescar",
        "category": "outdoors"
      }
    ],
    "a": [
      "creative | creative | creative | leisure | leisure | leisure | outdoors | outdoors | outdoors"
    ],
    "displayAnswer": "Творчество: editar vídeos, escribir historias, hacer manualidades · Досуг: pasear, viajar, ir de compras · На природе: pasear al perro, hacer un pícnic, pescar",
    "e": "Категории не пересекаются внутри этого задания; каждое слово используется один раз."
  }
];

export const activitiesTopic = {
  id: "activities",
  title: "Занятия и увлечения",
  icon: "★",
  studyItems: STUDY_ITEMS,
  exercises: EXERCISES
};
