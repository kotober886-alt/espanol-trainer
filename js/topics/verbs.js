/**
 * Core verbs topic.
 * Pure data + conjugation/exercise generation; no DOM or globals.
 */

function foundationItem(id,cat,word,label,tr,ru,answers,ex1,ex1ru,ex2,ex2ru,cloze,clozeAnswers){
      return {id:id,cat:cat,word:word,base:word,gender:label,tr:tr,ru:ru,answers:answers,art:null,examples:[[ex1,ex1ru],[ex2,ex2ru]],cloze:cloze,clozeAnswers:clozeAnswers};
    }

const VERB_CATEGORIES=[
      {id:"all",title:"Все глаголы"},
      {id:"core",title:"Самые нужные"},
      {id:"food",title:"Еда и напитки"},
      {id:"routine",title:"Распорядок дня"},
      {id:"home",title:"Дом"},
      {id:"work",title:"Работа и учёба"},
      {id:"shopping",title:"Покупки и дела"},
      {id:"communication",title:"Общение"},
      {id:"movement",title:"Передвижение"},
      {id:"plans",title:"Планы и решения"}
    ];
const VERB_WORDS=[
      foundationItem("ser","core","ser","неправильный","быть, являться",["быть","являться"],["ser"],"Soy diseñadora.","Я дизайнер.","Madrid es una ciudad grande.","Мадрид — большой город.","Madrid ___ una ciudad grande.",["es"]),
      foundationItem("estar","core","estar","неправильный","быть, находиться",["быть","находиться"],["estar"],"Estoy en casa.","Я дома.","Estamos un poco cansados.","Мы немного устали.","Ahora ___ en casa.",["estoy"]),
      foundationItem("tener","core","tener","неправильный","иметь",["иметь","иметь у себя"],["tener"],"Tengo un gato.","У меня есть кот.","Ella tiene tiempo libre.","У неё есть свободное время.","Yo ___ un gato.",["tengo"]),
      foundationItem("hacer","core","hacer","неправильный","делать",["делать"],["hacer"],"Hago deporte los lunes.","Я занимаюсь спортом по понедельникам.","¿Qué haces hoy?","Что ты делаешь сегодня?","¿Qué ___ hoy?",["haces"]),
      foundationItem("ir","core","ir","неправильный","идти, ехать",["идти","ехать"],["ir"],"Voy al trabajo en metro.","Я еду на работу на метро.","Vamos al cine esta noche.","Сегодня вечером мы идём в кино.","Yo ___ al trabajo.",["voy"]),
      foundationItem("venir","core","venir","неправильный","приходить, приезжать",["приходить","приезжать"],["venir"],"Vengo de Madrid.","Я приезжаю из Мадрида.","¿Vienes conmigo?","Ты идёшь со мной?","¿___ conmigo?",["vienes"]),
      foundationItem("querer","core","querer","неправильный","хотеть, любить",["хотеть","любить"],["querer"],"Quiero un café.","Я хочу кофе.","Queremos viajar por España.","Мы хотим путешествовать по Испании.","Yo ___ un café.",["quiero"]),
      foundationItem("poder","core","poder","неправильный","мочь",["мочь"],["poder"],"Puedo ayudarte.","Я могу тебе помочь.","Hoy no podemos ir.","Сегодня мы не можем пойти.","Yo ___ ayudarte.",["puedo"]),
      foundationItem("deber","core","deber","глагол на -er","быть должным, следует",["быть должным","следует","должен"],["deber"],"Debo trabajar mañana.","Завтра я должна работать.","Debes descansar más.","Тебе следует больше отдыхать.","Tú ___ descansar más.",["debes"]),
      foundationItem("saber","core","saber","неправильный","знать, уметь",["знать","уметь"],["saber"],"Sé la respuesta.","Я знаю ответ.","Sabemos nadar.","Мы умеем плавать.","Yo ___ la respuesta.",["sé","se"]),

      foundationItem("comer","food","comer","глагол на -er","есть, кушать",["есть","кушать"],["comer"],"Como a las dos.","Я ем в два часа.","Comemos juntos los domingos.","По воскресеньям мы едим вместе.","Nosotros ___ juntos.",["comemos"]),
      foundationItem("beber","food","beber","глагол на -er","пить",["пить"],["beber"],"Bebo mucha agua.","Я пью много воды.","Ellos beben café con leche.","Они пьют кофе с молоком.","Yo ___ mucha agua.",["bebo"]),
      foundationItem("tomar","food","tomar","глагол на -ar","брать; пить, принимать",["брать","пить","принимать"],["tomar"],"Tomo café por la mañana.","Я пью кофе по утрам.","Toma este medicamento después de comer.","Прими это лекарство после еды.","Yo ___ café por la mañana.",["tomo"]),
      foundationItem("desayunar","food","desayunar","глагол на -ar","завтракать",["завтракать"],["desayunar"],"Desayuno yogur y fruta.","Я ем йогурт и фрукты на завтрак.","Desayunamos antes de salir.","Мы завтракаем перед выходом.","Yo ___ yogur y fruta.",["desayuno"]),
      foundationItem("almorzar","food","almorzar","o → ue","обедать",["обедать"],["almorzar"],"Almuerzo con mis compañeros.","Я обедаю с коллегами.","Hoy almorzamos en casa.","Сегодня мы обедаем дома.","Yo ___ con mis compañeros.",["almuerzo"]),
      foundationItem("cenar","food","cenar","глагол на -ar","ужинать",["ужинать"],["cenar"],"Ceno a las ocho.","Я ужинаю в восемь.","¿Cenamos juntos hoy?","Мы сегодня ужинаем вместе?","Yo ___ a las ocho.",["ceno"]),
      foundationItem("cocinar","food","cocinar","глагол на -ar","готовить еду",["готовить","готовить еду"],["cocinar"],"Cocino pasta para la cena.","Я готовлю пасту на ужин.","Mi novio cocina muy bien.","Мой парень очень хорошо готовит.","Yo ___ pasta para la cena.",["cocino"]),
      foundationItem("preparar","food","preparar","глагол на -ar","готовить, подготавливать",["готовить","подготавливать"],["preparar"],"Preparo el desayuno.","Я готовлю завтрак.","Preparamos todo por la noche.","Мы готовим всё вечером.","Yo ___ el desayuno.",["preparo"]),
      foundationItem("pedir","food","pedir","e → i","просить, заказывать",["просить","заказывать"],["pedir"],"Pido una ensalada.","Я заказываю салат.","Pedimos la cuenta, por favor.","Мы просим счёт.","Yo ___ una ensalada.",["pido"]),
      foundationItem("probar","food","probar","o → ue","пробовать",["пробовать","попробовать"],["probar"],"Pruebo un postre nuevo.","Я пробую новый десерт.","¿Quieres probar la sopa?","Хочешь попробовать суп?","Yo ___ un postre nuevo.",["pruebo"]),

      foundationItem("vivir","routine","vivir","глагол на -ir","жить",["жить"],["vivir"],"Vivo en Madrid.","Я живу в Мадриде.","Mis padres viven cerca.","Мои родители живут рядом.","Yo ___ en Madrid.",["vivo"]),
      foundationItem("dormir","routine","dormir","o → ue","спать",["спать"],["dormir"],"Duermo ocho horas.","Я сплю восемь часов.","El gato duerme en el sofá.","Кот спит на диване.","Yo ___ ocho horas.",["duermo"]),
      foundationItem("despertarse","routine","despertarse","e → ie · возвратный","просыпаться",["просыпаться"],["despertarse"],"Me despierto a las siete.","Я просыпаюсь в семь.","Los domingos nos despertamos tarde.","По воскресеньям мы просыпаемся поздно.","Me ___ a las siete.",["despierto"]),
      foundationItem("levantarse","routine","levantarse","возвратный","вставать, подниматься",["вставать","подниматься"],["levantarse"],"Me levanto temprano.","Я встаю рано.","Ella se levanta a las ocho.","Она встаёт в восемь.","Me ___ temprano.",["levanto"]),
      foundationItem("acostarse","routine","acostarse","o → ue · возвратный","ложиться спать",["ложиться","ложиться спать"],["acostarse"],"Me acuesto antes de medianoche.","Я ложусь до полуночи.","Los niños se acuestan temprano.","Дети ложатся рано.","Me ___ antes de medianoche.",["acuesto"]),
      foundationItem("ducharse","routine","ducharse","возвратный","принимать душ",["принимать душ","мыться в душе"],["ducharse"],"Me ducho por la mañana.","Я принимаю душ утром.","Se ducha después del gimnasio.","Он принимает душ после спортзала.","Me ___ por la mañana.",["ducho"]),
      foundationItem("vestirse","routine","vestirse","e → i · возвратный","одеваться",["одеваться"],["vestirse"],"Me visto rápido.","Я быстро одеваюсь.","Ella se viste para el trabajo.","Она одевается на работу.","Me ___ rápido.",["visto"]),
      foundationItem("descansar","routine","descansar","глагол на -ar","отдыхать",["отдыхать"],["descansar"],"Descanso en casa por la noche.","Вечером я отдыхаю дома.","Necesitamos descansar un poco.","Нам нужно немного отдохнуть.","Yo ___ en casa.",["descanso"]),

      foundationItem("limpiar","home","limpiar","глагол на -ar","убирать, чистить",["убирать","чистить"],["limpiar"],"Limpio la cocina.","Я убираю кухню.","Limpiamos el piso los sábados.","Мы убираем квартиру по субботам.","Yo ___ la cocina.",["limpio"]),
      foundationItem("lavar","home","lavar","глагол на -ar","мыть, стирать",["мыть","стирать"],["lavar"],"Lavo los platos después de cenar.","Я мою посуду после ужина.","Hoy lavamos la ropa.","Сегодня мы стираем одежду.","Yo ___ los platos.",["lavo"]),
      foundationItem("ordenar","home","ordenar","глагол на -ar","наводить порядок, упорядочивать",["наводить порядок","упорядочивать"],["ordenar"],"Ordeno mi habitación.","Я навожу порядок в комнате.","Tenemos que ordenar el armario.","Нам нужно разобрать шкаф.","Yo ___ mi habitación.",["ordeno"]),
      foundationItem("guardar","home","guardar","глагол на -ar","класть на место, хранить",["класть на место","хранить","сохранять"],["guardar"],"Guardo la ropa en el armario.","Я убираю одежду в шкаф.","¿Dónde guardas las llaves?","Где ты хранишь ключи?","Yo ___ la ropa en el armario.",["guardo"]),
      foundationItem("abrir","home","abrir","глагол на -ir","открывать",["открывать","открыть"],["abrir"],"Abro la ventana.","Я открываю окно.","La tienda abre a las nueve.","Магазин открывается в девять.","Yo ___ la ventana.",["abro"]),
      foundationItem("cerrar","home","cerrar","e → ie","закрывать",["закрывать","закрыть"],["cerrar"],"Cierro la puerta.","Я закрываю дверь.","El supermercado cierra tarde.","Супермаркет закрывается поздно.","Yo ___ la puerta.",["cierro"]),
      foundationItem("poner","home","poner","неправильный","класть, ставить, надевать",["класть","ставить","надевать"],["poner"],"Pongo el teléfono sobre la mesa.","Я кладу телефон на стол.","Ponemos la mesa antes de cenar.","Мы накрываем на стол перед ужином.","Yo ___ el teléfono sobre la mesa.",["pongo"]),
      foundationItem("quitar","home","quitar","глагол на -ar","убирать, снимать",["убирать","снимать"],["quitar"],"Quito los platos de la mesa.","Я убираю тарелки со стола.","Se quita el abrigo en casa.","Дома она снимает пальто.","Yo ___ los platos de la mesa.",["quito"]),
      foundationItem("arreglar","home","arreglar","глагол на -ar","чинить, приводить в порядок",["чинить","приводить в порядок","исправлять"],["arreglar"],"Arreglo mi habitación.","Я привожу комнату в порядок.","Tenemos que arreglar la lámpara.","Нам нужно починить лампу.","Yo ___ mi habitación.",["arreglo"]),

      foundationItem("trabajar","work","trabajar","глагол на -ar","работать",["работать"],["trabajar"],"Trabajo en una empresa grande.","Я работаю в большой компании.","Mi amiga trabaja desde casa.","Моя подруга работает из дома.","Mi amiga ___ desde casa.",["trabaja"]),
      foundationItem("estudiar","work","estudiar","глагол на -ar","учиться, изучать",["учиться","изучать"],["estudiar"],"Estudio español todos los días.","Я учу испанский каждый день.","Ella estudia diseño.","Она изучает дизайн.","Yo ___ español todos los días.",["estudio"]),
      foundationItem("aprender","work","aprender","глагол на -er","учить, узнавать новое",["учить","изучать","узнавать новое"],["aprender"],"Aprendo palabras nuevas.","Я учу новые слова.","Aprendemos con la práctica.","Мы учимся на практике.","Yo ___ palabras nuevas.",["aprendo"]),
      foundationItem("enseñar","work","enseñar","глагол на -ar","учить кого-то, показывать",["обучать","учить кого-то","показывать"],["enseñar"],"Enseño el diseño a mi compañera.","Я показываю дизайн коллеге.","Mi profesor enseña español.","Мой преподаватель учит испанскому.","Yo ___ el diseño a mi compañera.",["enseño"]),
      foundationItem("leer","work","leer","глагол на -er","читать",["читать"],["leer"],"Leo antes de dormir.","Я читаю перед сном.","Él lee las noticias.","Он читает новости.","Él ___ las noticias.",["lee"]),
      foundationItem("escribir","work","escribir","глагол на -ir","писать",["писать"],["escribir"],"Escribo un mensaje.","Я пишу сообщение.","Ella escribe historias cortas.","Она пишет короткие истории.","Yo ___ un mensaje.",["escribo"]),
      foundationItem("empezar","work","empezar","e → ie","начинать",["начинать","начать"],["empezar"],"Empiezo a trabajar a las nueve.","Я начинаю работать в девять.","La clase empieza pronto.","Урок скоро начинается.","Yo ___ a trabajar a las nueve.",["empiezo"]),
      foundationItem("terminar","work","terminar","глагол на -ar","заканчивать",["заканчивать","закончить"],["terminar"],"Termino el trabajo a las seis.","Я заканчиваю работу в шесть.","Terminamos este proyecto mañana.","Мы заканчиваем этот проект завтра.","Yo ___ el trabajo a las seis.",["termino"]),
      foundationItem("planear","work","planear","глагол на -ar","планировать",["планировать"],["planear","planificar"],"Planeo la semana el domingo.","В воскресенье я планирую неделю.","Planeamos un viaje corto.","Мы планируем короткую поездку.","Yo ___ la semana el domingo.",["planeo"]),
      foundationItem("organizar","work","organizar","глагол на -ar","организовывать",["организовывать","организовать"],["organizar"],"Organizo mis tareas por la mañana.","Утром я организую свои задачи.","Ella organiza una reunión.","Она организует встречу.","Yo ___ mis tareas por la mañana.",["organizo"]),
      foundationItem("enviar","work","enviar","í в формах","отправлять",["отправлять","посылать"],["enviar"],"Envío el archivo por correo.","Я отправляю файл по почте.","Te envío la foto esta noche.","Я отправлю тебе фотографию вечером.","Yo ___ el archivo por correo.",["envío","envio"]),
      foundationItem("recibir","work","recibir","глагол на -ir","получать, принимать",["получать","принимать"],["recibir"],"Recibo muchos mensajes.","Я получаю много сообщений.","Recibimos el pedido mañana.","Мы получаем заказ завтра.","Yo ___ muchos mensajes.",["recibo"]),

      foundationItem("comprar","shopping","comprar","глагол на -ar","покупать",["покупать","купить"],["comprar"],"Compro comida después del trabajo.","Я покупаю продукты после работы.","Compramos pan y leche.","Мы покупаем хлеб и молоко.","Yo ___ comida después del trabajo.",["compro"]),
      foundationItem("pagar","shopping","pagar","глагол на -ar","платить",["платить","оплачивать"],["pagar"],"Pago con tarjeta.","Я плачу картой.","¿Pagamos la cuenta juntos?","Мы оплачиваем счёт вместе?","Yo ___ con tarjeta.",["pago"]),
      foundationItem("costar","shopping","costar","o → ue","стоить",["стоить"],["costar"],"Este vestido cuesta cincuenta euros.","Это платье стоит пятьдесят евро.","¿Cuánto cuestan los zapatos?","Сколько стоят туфли?","Este vestido ___ cincuenta euros.",["cuesta"]),
      foundationItem("elegir","shopping","elegir","e → i","выбирать",["выбирать","выбрать"],["elegir"],"Elijo la opción más sencilla.","Я выбираю самый простой вариант.","Ella elige un bolso negro.","Она выбирает чёрную сумку.","Yo ___ la opción más sencilla.",["elijo"]),
      foundationItem("llevar","shopping","llevar","глагол на -ar","нести, брать с собой, носить",["нести","брать с собой","носить"],["llevar"],"Llevo agua en el bolso.","Я ношу воду в сумке.","Ella lleva un vestido azul.","На ней синее платье.","Yo ___ agua en el bolso.",["llevo"]),
      foundationItem("traer","shopping","traer","неправильный","приносить, привозить",["приносить","привозить"],["traer"],"Traigo postre para todos.","Я приношу десерт для всех.","¿Puedes traer agua?","Можешь принести воды?","Yo ___ postre para todos.",["traigo"]),
      foundationItem("buscar","shopping","buscar","глагол на -ar","искать",["искать"],["buscar"],"Busco mis llaves.","Я ищу свои ключи.","Estamos buscando un regalo.","Мы ищем подарок.","Yo ___ mis llaves.",["busco"]),
      foundationItem("encontrar","shopping","encontrar","o → ue","находить, встречать",["находить","встречать"],["encontrar"],"Encuentro las llaves en la mesa.","Я нахожу ключи на столе.","No encontramos esta tienda.","Мы не можем найти этот магазин.","Yo ___ las llaves en la mesa.",["encuentro"]),
      foundationItem("necesitar","shopping","necesitar","глагол на -ar","нуждаться; нуждаться в чём-то",["нуждаться","нужно"],["necesitar"],"Necesito comprar pan.","Мне нужно купить хлеб.","Necesitamos más tiempo.","Нам нужно больше времени.","Yo ___ comprar pan.",["necesito"]),

      foundationItem("hablar","communication","hablar","глагол на -ar","говорить, разговаривать",["говорить","разговаривать"],["hablar"],"Hablo un poco de español.","Я немного говорю по-испански.","Hablamos del trabajo.","Мы говорим о работе.","Yo ___ español.",["hablo"]),
      foundationItem("decir","communication","decir","неправильный","говорить, сказать",["говорить","сказать"],["decir"],"Digo la verdad.","Я говорю правду.","¿Qué dices?","Что ты говоришь?","Yo ___ la verdad.",["digo"]),
      foundationItem("preguntar","communication","preguntar","глагол на -ar","спрашивать",["спрашивать","задать вопрос"],["preguntar"],"Pregunto la dirección.","Я спрашиваю дорогу.","Ella pregunta por el precio.","Она спрашивает о цене.","Yo ___ la dirección.",["pregunto"]),
      foundationItem("responder","communication","responder","глагол на -er","отвечать",["отвечать"],["responder","contestar"],"Respondo al mensaje.","Я отвечаю на сообщение.","Él responde con calma.","Он отвечает спокойно.","Yo ___ al mensaje.",["respondo"]),
      foundationItem("escuchar","communication","escuchar","глагол на -ar","слушать",["слушать"],["escuchar"],"Escucho música en el metro.","Я слушаю музыку в метро.","¿Me escuchas?","Ты меня слушаешь?","Yo ___ música en el metro.",["escucho"]),
      foundationItem("mirar","communication","mirar","глагол на -ar","смотреть на что-то",["смотреть","смотреть на"],["mirar"],"Miro una serie por la noche.","Вечером я смотрю сериал.","Mira esta foto.","Посмотри на эту фотографию.","Yo ___ una serie por la noche.",["miro"]),
      foundationItem("ver","communication","ver","неправильный","видеть, смотреть",["видеть","смотреть"],["ver"],"Veo a mis amigos el sábado.","Я вижусь с друзьями в субботу.","Vemos una película en casa.","Мы смотрим фильм дома.","Yo ___ a mis amigos el sábado.",["veo"]),
      foundationItem("llamar","communication","llamar","глагол на -ar","звонить, называть",["звонить","называть"],["llamar"],"Llamo a mi madre por la tarde.","Я звоню маме вечером.","Te llamamos mañana.","Мы позвоним тебе завтра.","Yo ___ a mi madre por la tarde.",["llamo"]),
      foundationItem("explicar","communication","explicar","глагол на -ar","объяснять",["объяснять"],["explicar"],"Explico el problema.","Я объясняю проблему.","La profesora explica la regla.","Преподавательница объясняет правило.","Yo ___ el problema.",["explico"]),

      foundationItem("salir","movement","salir","неправильный","выходить, уезжать",["выходить","уезжать"],["salir"],"Salgo de casa a las ocho.","Я выхожу из дома в восемь.","Salimos con amigos el viernes.","В пятницу мы встречаемся с друзьями.","Yo ___ de casa a las ocho.",["salgo"]),
      foundationItem("llegar","movement","llegar","глагол на -ar","приходить, приезжать, прибывать",["приходить","приезжать","прибывать"],["llegar"],"Llego al trabajo a las nueve.","Я приезжаю на работу в девять.","El autobús llega tarde.","Автобус приезжает поздно.","Yo ___ al trabajo a las nueve.",["llego"]),
      foundationItem("volver","movement","volver","o → ue","возвращаться",["возвращаться","вернуться"],["volver"],"Vuelvo a casa por la noche.","Я возвращаюсь домой вечером.","Volvemos el domingo.","Мы возвращаемся в воскресенье.","Yo ___ a casa por la noche.",["vuelvo"]),
      foundationItem("caminar","movement","caminar","глагол на -ar","ходить пешком, гулять",["ходить пешком","гулять"],["caminar"],"Camino hasta el metro.","Я иду пешком до метро.","Caminamos por el parque.","Мы гуляем по парку.","Yo ___ hasta el metro.",["camino"]),
      foundationItem("subir","movement","subir","глагол на -ir","подниматься, загружать",["подниматься","загружать"],["subir"],"Subo por las escaleras.","Я поднимаюсь по лестнице.","Subimos las fotos a la nube.","Мы загружаем фотографии в облако.","Yo ___ por las escaleras.",["subo"]),
      foundationItem("bajar","movement","bajar","глагол на -ar","спускаться, выходить из транспорта",["спускаться","выходить"],["bajar"],"Bajo en la próxima parada.","Я выхожу на следующей остановке.","Bajamos las escaleras.","Мы спускаемся по лестнице.","Yo ___ en la próxima parada.",["bajo"]),

      foundationItem("recordar","plans","recordar","o → ue","помнить, вспоминать",["помнить","вспоминать"],["recordar"],"Recuerdo esta palabra.","Я помню это слово.","¿Recuerdas su nombre?","Ты помнишь его имя?","Yo ___ esta palabra.",["recuerdo"]),
      foundationItem("olvidar","plans","olvidar","глагол на -ar","забывать",["забывать","забыть"],["olvidar"],"Olvido las llaves a veces.","Иногда я забываю ключи.","No olvidamos tu cumpleaños.","Мы не забываем твой день рождения.","Yo ___ las llaves a veces.",["olvido"]),
      foundationItem("decidir","plans","decidir","глагол на -ir","решать, принимать решение",["решать","принимать решение"],["decidir"],"Decido trabajar desde casa.","Я решаю работать из дома.","Decidimos ir mañana.","Мы решаем пойти завтра.","Yo ___ trabajar desde casa.",["decido"]),
      foundationItem("intentar","plans","intentar","глагол на -ar","пытаться, стараться",["пытаться","стараться"],["intentar"],"Intento hablar español.","Я стараюсь говорить по-испански.","Intentamos llegar temprano.","Мы пытаемся прийти рано.","Yo ___ hablar español.",["intento"]),
      foundationItem("quedar","plans","quedar","глагол на -ar","договариваться о встрече; оставаться",["договариваться о встрече","оставаться","встречаться"],["quedar"],"Quedo con una amiga el sábado.","В субботу я встречаюсь с подругой.","Nos quedan dos días.","У нас остаётся два дня.","Yo ___ con una amiga el sábado.",["quedo"]),
      foundationItem("esperar","plans","esperar","глагол на -ar","ждать, надеяться",["ждать","надеяться"],["esperar"],"Espero el autobús.","Я жду автобус.","Esperamos viajar en verano.","Мы надеемся поехать летом.","Yo ___ el autobús.",["espero"])
    ];
const VERB_PERSONS=["yo","tú","él / ella / usted","nosotros / nosotras","vosotros / vosotras","ellos / ellas / ustedes"];
const VERB_PRESENT_OVERRIDES={
      ser:["soy","eres","es","somos","sois","son"],
      estar:["estoy","estás","está","estamos","estáis","están"],
      tener:["tengo","tienes","tiene","tenemos","tenéis","tienen"],
      hacer:["hago","haces","hace","hacemos","hacéis","hacen"],
      ir:["voy","vas","va","vamos","vais","van"],
      venir:["vengo","vienes","viene","venimos","venís","vienen"],
      querer:["quiero","quieres","quiere","queremos","queréis","quieren"],
      poder:["puedo","puedes","puede","podemos","podéis","pueden"],
      saber:["sé","sabes","sabe","sabemos","sabéis","saben"],
      almorzar:["almuerzo","almuerzas","almuerza","almorzamos","almorzáis","almuerzan"],
      pedir:["pido","pides","pide","pedimos","pedís","piden"],
      probar:["pruebo","pruebas","prueba","probamos","probáis","prueban"],
      dormir:["duermo","duermes","duerme","dormimos","dormís","duermen"],
      despertarse:["me despierto","te despiertas","se despierta","nos despertamos","os despertáis","se despiertan"],
      acostarse:["me acuesto","te acuestas","se acuesta","nos acostamos","os acostáis","se acuestan"],
      vestirse:["me visto","te vistes","se viste","nos vestimos","os vestís","se visten"],
      cerrar:["cierro","cierras","cierra","cerramos","cerráis","cierran"],
      poner:["pongo","pones","pone","ponemos","ponéis","ponen"],
      empezar:["empiezo","empiezas","empieza","empezamos","empezáis","empiezan"],
      enviar:["envío","envías","envía","enviamos","enviáis","envían"],
      costar:["cuesto","cuestas","cuesta","costamos","costáis","cuestan"],
      elegir:["elijo","eliges","elige","elegimos","elegís","eligen"],
      traer:["traigo","traes","trae","traemos","traéis","traen"],
      encontrar:["encuentro","encuentras","encuentra","encontramos","encontráis","encuentran"],
      decir:["digo","dices","dice","decimos","decís","dicen"],
      ver:["veo","ves","ve","vemos","veis","ven"],
      salir:["salgo","sales","sale","salimos","salís","salen"],
      volver:["vuelvo","vuelves","vuelve","volvemos","volvéis","vuelven"],
      recordar:["recuerdo","recuerdas","recuerda","recordamos","recordáis","recuerdan"]
    };

function regularPresentForms(infinitive){
      const reflexive=/se$/.test(infinitive);
      const base=reflexive ? infinitive.slice(0,-2) : infinitive;
      const ending=base.slice(-2);
      const endings={ar:["o","as","a","amos","áis","an"],er:["o","es","e","emos","éis","en"],ir:["o","es","e","imos","ís","en"]}[ending];
      const stem=base.slice(0,-2);
      const forms=endings.map(function(suffix){return stem+suffix;});
      if(!reflexive) return forms;
      return ["me","te","se","nos","os","se"].map(function(pronoun,i){return pronoun+" "+forms[i];});
    }

const VERB_STUDY_WORDS=VERB_WORDS.map(function(item){
      const forms=VERB_PRESENT_OVERRIDES[item.id] || regularPresentForms(item.word);
      return Object.assign({},item,{table:{headers:["Лицо","Форма в Presente"],rows:VERB_PERSONS.map(function(person,i){return [person,forms[i]];})}});
    });


function categoryMeta(categories, categoryId) {
  const index = categories.findIndex(function (category) {
    return category.id === categoryId;
  });
  const category = index >= 0 ? categories[index] : null;

  return {
    categoryTitle: category ? category.title : categoryId,
    categoryOrder: index >= 0 ? index : 999
  };
}

function enrichStudyItems(words, categories) {
  return words.map(function (item) {
    return {
      ...item,
      meta: {
        ...(item.meta || {}),
        ...categoryMeta(categories, item.cat || item.category)
      }
    };
  });
}

function russianAnswers(word) {
  const explicit = Array.isArray(word && word.ru) ? word.ru : [];
  const meaning = word && word.tr ? [word.tr] : [];
  return Array.from(new Set(explicit.concat(meaning).filter(Boolean)));
}

function clozeQuestion(word, label) {
  const translation =
    word.examples && word.examples[0]
      ? word.examples[0][1]
      : word.tr;

  return "Вставь " + label + " по переводу «" + translation + "»: " + word.cloze;
}


const STUDY_ITEMS = enrichStudyItems(VERB_STUDY_WORDS, VERB_CATEGORIES);

function buildExercises() {
  const items = [];

  STUDY_ITEMS.forEach(function (word) {
    items.push({
      id:"study_verbs_"+word.id+"_es",
      topic:"verbs",
      foodCat:word.cat,
      skill:"Вспомни",
      q:"Переведи на испанский: "+word.tr+".",
      a:word.answers,
      e:"Правильный вариант: "+word.word+"."
    });

    items.push({
      id:"study_verbs_"+word.id+"_ru",
      topic:"verbs",
      foodCat:word.cat,
      skill:"Узнай",
      q:"Переведи на русский: "+word.word+".",
      a:russianAnswers(word),
      e:word.word+" — "+word.tr+"."
    });

    items.push({
      id:"study_verbs_"+word.id+"_ctx",
      topic:"verbs",
      foodCat:word.cat,
      skill:"В контексте",
      q:clozeQuestion(word,"пропущенную часть"),
      a:word.clozeAnswers,
      e:word.examples[0][0]+" — "+word.examples[0][1]
    });
  });

  return items;
}

export const verbsTopic = {
  id:"verbs",
  title:"Основные глаголы",
  icon:"⚡",
  studyItems:STUDY_ITEMS,
  exercises:buildExercises()
};
