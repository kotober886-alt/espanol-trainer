/**
 * Foods topic.
 * Pure data + exercise generation; no DOM or globals.
 */

const FOOD_CATEGORIES = [
      {id:"all",title:"Все продукты"},
      {id:"base",title:"Базовые"},
      {id:"meat",title:"Мясо и птица"},
      {id:"seafood",title:"Морепродукты"},
      {id:"desserts",title:"Десерты"},
      {id:"drinks",title:"Напитки"},
      {id:"dishes",title:"Основные блюда"},
      {id:"grocery",title:"Бакалея"}
    ];
const FOOD_WORDS = [
      {id:"bread",cat:"grocery",word:"el pan",base:"pan",gender:"мужской род",tr:"хлеб",ru:["хлеб"],answers:["pan","el pan"],art:"bread",
        examples:[["Compro pan fresco.","Я покупаю свежий хлеб."],["El pan está en la mesa.","Хлеб находится на столе."]],
        cloze:"Compro ___ fresco.",clozeAnswers:["pan"]},
      {id:"milk",cat:"base",word:"la leche",base:"leche",gender:"женский род",tr:"молоко",ru:["молоко"],answers:["leche","la leche"],art:"milk",
        examples:[["Bebo leche por la mañana.","Я пью молоко утром."],["Necesitamos un litro de leche.","Нам нужен литр молока."]],
        cloze:"Bebo ___ por la mañana.",clozeAnswers:["leche"]},
      {id:"cheese",cat:"base",word:"el queso",base:"queso",gender:"мужской род",tr:"сыр",ru:["сыр"],answers:["queso","el queso"],art:"cheese",
        examples:[["Me gusta el queso.","Мне нравится сыр."],["Este queso es muy suave.","Этот сыр очень нежный."]],
        cloze:"Me gusta el ___.",clozeAnswers:["queso"]},
      {id:"egg",cat:"base",word:"el huevo",base:"huevo",gender:"мужской род",tr:"яйцо",ru:["яйцо"],answers:["huevo","el huevo"],art:"egg",
        examples:[["Como un huevo en el desayuno.","Я ем яйцо на завтрак."],["Los huevos están en la nevera.","Яйца находятся в холодильнике."]],
        cloze:"Como un ___ en el desayuno.",clozeAnswers:["huevo"]},
      {id:"rice",cat:"grocery",word:"el arroz",base:"arroz",gender:"мужской род",tr:"рис",ru:["рис"],answers:["arroz","el arroz"],art:"rice",
        examples:[["Cocinamos arroz con verduras.","Мы готовим рис с овощами."],["Quiero una porción de arroz.","Я хочу порцию риса."]],
        cloze:"Cocinamos ___ con verduras.",clozeAnswers:["arroz"]},
      {id:"pasta",cat:"grocery",word:"la pasta",base:"pasta",gender:"женский род",tr:"макароны, паста",ru:["макароны","паста","макароны паста"],answers:["pasta","la pasta"],art:"pasta",
        examples:[["Hoy comemos pasta.","Сегодня мы едим пасту."],["La pasta está caliente.","Паста горячая."]],
        cloze:"Hoy comemos ___.",clozeAnswers:["pasta"]},
      {id:"chicken",cat:"meat",word:"el pollo",base:"pollo",gender:"мужской род",tr:"курица, куриное мясо",ru:["курица","куриное мясо","курятина"],answers:["pollo","el pollo"],art:"chicken",
        examples:[["Como pollo con patatas.","Я ем курицу с картофелем."],["El pollo está en el horno.","Курица находится в духовке."]],
        cloze:"Como ___ con patatas.",clozeAnswers:["pollo"]},
      {id:"fish",cat:"seafood",word:"el pescado",base:"pescado",gender:"мужской род",tr:"рыба как продукт",ru:["рыба","рыба как продукт"],answers:["pescado","el pescado"],art:"assets/picture-labels/foods/fish.webp",
        examples:[["Prefiero el pescado.","Я предпочитаю рыбу."],["Compramos pescado fresco.","Мы покупаем свежую рыбу."]],
        cloze:"Prefiero el ___.",clozeAnswers:["pescado"]},
      {id:"meat",cat:"meat",word:"la carne",base:"carne",gender:"женский род",tr:"мясо",ru:["мясо"],answers:["carne","la carne"],art:"meat",
        examples:[["No como mucha carne.","Я не ем много мяса."],["La carne está lista.","Мясо готово."]],
        cloze:"No como mucha ___.",clozeAnswers:["carne"]},
      {id:"potato",cat:"base",word:"la patata",base:"patata",gender:"женский род",tr:"картофель, картофелина",ru:["картофель","картошка","картофелина"],answers:["patata","la patata","papa","la papa"],art:"potato",
        examples:[["Pelo una patata.","Я чищу картофелину."],["Necesito dos patatas.","Мне нужны две картофелины."]],
        cloze:"Pelo una ___.",clozeAnswers:["patata","papa"]},
      {id:"tomato",cat:"base",word:"el tomate",base:"tomate",gender:"мужской род",tr:"помидор",ru:["помидор","томат"],answers:["tomate","el tomate"],art:"tomato",
        examples:[["Corto un tomate.","Я режу помидор."],["Los tomates están maduros.","Помидоры спелые."]],
        cloze:"Corto un ___.",clozeAnswers:["tomate"]},
      {id:"apple",cat:"base",word:"la manzana",base:"manzana",gender:"женский род",tr:"яблоко",ru:["яблоко"],answers:["manzana","la manzana"],art:"apple",
        examples:[["Como una manzana.","Я ем яблоко."],["La manzana es roja.","Яблоко красное."]],
        cloze:"Como una ___.",clozeAnswers:["manzana"]},
      {id:"banana",cat:"base",word:"el plátano",base:"plátano",gender:"мужской род",tr:"банан",ru:["банан"],answers:["plátano","el plátano","banana","la banana"],art:"banana",
        examples:[["Compro plátanos.","Я покупаю бананы."],["El plátano está maduro.","Банан спелый."]],
        cloze:"El ___ está maduro.",clozeAnswers:["plátano"]},
      {id:"orange",cat:"base",word:"la naranja",base:"naranja",gender:"женский род",tr:"апельсин",ru:["апельсин"],answers:["naranja","la naranja"],art:"orange",
        examples:[["Quiero zumo de naranja.","Я хочу апельсиновый сок."],["La naranja es dulce.","Апельсин сладкий."]],
        cloze:"La ___ es dulce.",clozeAnswers:["naranja"]},
      {id:"water",cat:"drinks",word:"el agua",base:"agua",gender:"женский род",tr:"вода",ru:["вода"],answers:["agua","el agua"],art:"water",
        examples:[["Bebo agua todos los días.","Я пью воду каждый день."],["Quiero un vaso de agua.","Я хочу стакан воды."]],
        cloze:"Bebo ___ todos los días.",clozeAnswers:["agua"]},
      {id:"coffee",cat:"drinks",word:"el café",base:"café",gender:"мужской род",tr:"кофе",ru:["кофе"],answers:["café","el café"],art:"coffee",
        examples:[["Tomo café sin azúcar.","Я пью кофе без сахара."],["El café está caliente.","Кофе горячий."]],
        cloze:"Tomo ___ sin azúcar.",clozeAnswers:["café"]},
      {id:"tea",cat:"drinks",word:"el té",base:"té",gender:"мужской род",tr:"чай",ru:["чай"],answers:["té","el té"],art:"tea",
        examples:[["Bebo té por la tarde.","Я пью чай после обеда."],["Prefiero el té verde.","Я предпочитаю зелёный чай."]],
        cloze:"Bebo ___ por la tarde.",clozeAnswers:["té"]},
      {id:"salt",cat:"grocery",word:"la sal",base:"sal",gender:"женский род",tr:"соль",ru:["соль"],answers:["sal","la sal"],art:"salt",
        examples:[["Añade un poco de sal.","Добавь немного соли."],["La sal está en la mesa.","Соль находится на столе."]],
        cloze:"Añade un poco de ___.",clozeAnswers:["sal"]},
      {id:"beef",cat:"meat",word:"la ternera",base:"ternera",gender:"женский род",tr:"говядина, телятина",ru:["говядина","телятина","говядина телятина"],answers:["ternera","la ternera","carne de ternera","la carne de ternera"],art:"meat",
        examples:[["Compro ternera para la cena.","Я покупаю говядину на ужин."],["La ternera está muy tierna.","Говядина очень нежная."]],
        cloze:"Compro ___ para la cena.",clozeAnswers:["ternera","carne de ternera"]},
      {id:"pork",cat:"meat",word:"la carne de cerdo",base:"carne de cerdo",gender:"женский род",tr:"свинина",ru:["свинина"],answers:["carne de cerdo","la carne de cerdo","cerdo","el cerdo"],art:"meat",
        examples:[["No como carne de cerdo.","Я не ем свинину."],["La carne de cerdo está en la nevera.","Свинина находится в холодильнике."]],
        cloze:"No como carne de ___.",clozeAnswers:["cerdo"]},
      {id:"turkey",cat:"meat",word:"el pavo",base:"pavo",gender:"мужской род",tr:"индейка",ru:["индейка","индюшка"],answers:["pavo","el pavo"],art:"chicken",
        examples:[["Hoy cocinamos pavo.","Сегодня мы готовим индейку."],["El pavo tiene poca grasa.","В индейке мало жира."]],
        cloze:"Hoy cocinamos ___.",clozeAnswers:["pavo"]},
      {id:"ham",cat:"meat",word:"el jamón",base:"jamón",gender:"мужской род",tr:"ветчина, хамон",ru:["ветчина","хамон","ветчина хамон"],answers:["jamón","el jamón"],art:"meat",
        examples:[["Quiero un bocadillo de jamón.","Я хочу бутерброд с ветчиной."],["El jamón está muy rico.","Хамон очень вкусный."]],
        cloze:"Quiero un bocadillo de ___.",clozeAnswers:["jamón"]},
      {id:"sausage",cat:"meat",word:"la salchicha",base:"salchicha",gender:"женский род",tr:"сосиска, колбаска",ru:["сосиска","колбаска","сосиска колбаска"],answers:["salchicha","la salchicha"],art:"sausage",
        examples:[["Como una salchicha con pan.","Я ем сосиску с хлебом."],["Las salchichas están calientes.","Сосиски горячие."]],
        cloze:"Como una ___ con pan.",clozeAnswers:["salchicha"]},

      {id:"salmon",cat:"seafood",word:"el salmón",base:"salmón",gender:"мужской род",tr:"лосось",ru:["лосось"],answers:["salmón","el salmón"],art:"assets/picture-labels/foods/salmon.webp",
        examples:[["El salmón está en el horno.","Лосось находится в духовке."],["Me gusta el salmón con arroz.","Мне нравится лосось с рисом."]],
        cloze:"Me gusta el ___ con arroz.",clozeAnswers:["salmón"]},
      {id:"tuna",cat:"seafood",word:"el atún",base:"atún",gender:"мужской род",tr:"тунец",ru:["тунец"],answers:["atún","el atún"],art:"assets/picture-labels/foods/tuna.webp",
        examples:[["La ensalada lleva atún.","В салате есть тунец."],["Compro una lata de atún.","Я покупаю банку тунца."]],
        cloze:"Compro una lata de ___.",clozeAnswers:["atún"]},
      {id:"shrimp",cat:"seafood",word:"la gamba / el camarón",base:"gamba / camarón",gender:"женский род (gamba) / мужской род (camarón)",tr:"креветка",ru:["креветка","креветки"],answers:["gamba","la gamba","gambas","las gambas","camarón","el camarón","camaron","el camaron","camarones","los camarones"],art:"assets/picture-labels/foods/shrimp.webp",
        examples:[["En España se usa «gamba».","В Испании употребляется «gamba»."],["En América Latina se usa «camarón».","В Латинской Америке употребляется «camarón»."]],
        cloze:"Compramos ___ para la cena.",clozeAnswers:["gamba","gambas","camarón","camaron","camarones"]},
      {id:"mejillones",cat:"seafood",word:"los mejillones",base:"mejillones",gender:"мужской род, множественное число",tr:"мидии",ru:["мидии"],answers:["mejillones","los mejillones"],art:"assets/picture-labels/foods/mejillones.webp",
        examples:[["Los mejillones están listos.","Мидии готовы."],["Nunca como mejillones.","Я никогда не ем мидии."]],
        cloze:"Nunca como ___.",clozeAnswers:["mejillones"]},
      {id:"squid",cat:"seafood",word:"el calamar",base:"calamar",gender:"мужской род",tr:"кальмар",ru:["кальмар"],answers:["calamar","el calamar"],art:"assets/picture-labels/foods/squid.webp",
        examples:[["El calamar está muy tierno.","Кальмар очень нежный."],["Quiero calamar a la plancha.","Я хочу кальмара на гриле."]],
        cloze:"Quiero ___ a la plancha.",clozeAnswers:["calamar"]},
      {id:"octopus",cat:"seafood",word:"el pulpo",base:"pulpo",gender:"мужской род",tr:"осьминог",ru:["осьминог"],answers:["pulpo","el pulpo"],art:"assets/picture-labels/octopus.webp",
        examples:[["Probamos pulpo en Galicia.","Мы пробуем осьминога в Галисии."],["El pulpo está delicioso.","Осьминог очень вкусный."]],
        cloze:"El ___ está delicioso.",clozeAnswers:["pulpo"]},
      {id:"seafood",cat:"seafood",word:"el marisco",base:"marisco",gender:"мужской род",tr:"морепродукты",ru:["морепродукты","морепродукт"],answers:["marisco","el marisco","mariscos","los mariscos"],art:"assets/picture-labels/marisco.webp",
        examples:[["Me gusta mucho el marisco.","Я очень люблю морепродукты."],["La paella lleva marisco.","В паэлье есть морепродукты."]],
        cloze:"La paella lleva ___.",clozeAnswers:["marisco","mariscos"]},

      {id:"cookie",cat:"desserts",word:"la galleta",base:"galleta",gender:"женский род",tr:"печенье",ru:["печенье","печенька"],answers:["galleta","la galleta"],art:"cookie",
        examples:[["Como una galleta con café.","Я ем печенье с кофе."],["Estas galletas tienen chocolate.","В этом печенье есть шоколад."]],
        cloze:"Como una ___ con café.",clozeAnswers:["galleta"]},
      {id:"cake",cat:"desserts",word:"la tarta",base:"tarta",gender:"женский род",tr:"торт, пирог",ru:["торт","пирог","торт пирог"],answers:["tarta","la tarta","pastel","el pastel"],art:"cake",
        examples:[["La tarta es de chocolate.","Торт шоколадный."],["Preparo una tarta para mi cumpleaños.","Я готовлю торт на свой день рождения."]],
        cloze:"La ___ es de chocolate.",clozeAnswers:["tarta","pastel"]},
      {id:"icecream",cat:"desserts",word:"el helado",base:"helado",gender:"мужской род",tr:"мороженое",ru:["мороженое"],answers:["helado","el helado"],art:"icecream",
        examples:[["Quiero un helado de vainilla.","Я хочу ванильное мороженое."],["El helado está muy frío.","Мороженое очень холодное."]],
        cloze:"Quiero un ___ de vainilla.",clozeAnswers:["helado"]},
      {id:"chocolate",cat:"desserts",word:"el chocolate",base:"chocolate",gender:"мужской род",tr:"шоколад",ru:["шоколад"],answers:["chocolate","el chocolate"],art:"chocolate",
        examples:[["Me encanta el chocolate negro.","Я обожаю тёмный шоколад."],["Esta tarta lleva chocolate.","В этом торте есть шоколад."]],
        cloze:"Me encanta el ___ negro.",clozeAnswers:["chocolate"]},
      {id:"candy",cat:"desserts",word:"el caramelo",base:"caramelo",gender:"мужской род",tr:"конфета, карамель",ru:["конфета","карамель","конфета карамель"],answers:["caramelo","el caramelo"],art:"candy",
        examples:[["El niño come un caramelo.","Ребёнок ест конфету."],["No quiero más caramelos.","Я больше не хочу конфет."]],
        cloze:"El niño come un ___.",clozeAnswers:["caramelo"]},
      {id:"muffin",cat:"desserts",word:"la magdalena",base:"magdalena",gender:"женский род",tr:"кекс",ru:["кекс","маффин"],answers:["magdalena","la magdalena","muffin","el muffin"],art:"muffin",
        examples:[["Desayuno una magdalena.","Я завтракаю кексом."],["La magdalena está muy esponjosa.","Кекс очень воздушный."]],
        cloze:"Desayuno una ___.",clozeAnswers:["magdalena"]},
      {id:"flan",cat:"desserts",word:"el flan",base:"flan",gender:"мужской род",tr:"флан, карамельный пудинг",ru:["флан","карамельный пудинг","пудинг"],answers:["flan","el flan"],art:"flan",
        examples:[["De postre quiero flan.","На десерт я хочу флан."],["El flan lleva huevos y leche.","Во флане есть яйца и молоко."]],
        cloze:"De postre quiero ___.",clozeAnswers:["flan"]},

      {id:"juice",cat:"drinks",word:"el zumo",base:"zumo",gender:"мужской род",tr:"сок",ru:["сок"],answers:["zumo","el zumo","jugo","el jugo"],art:"juice",
        examples:[["Bebo zumo de naranja.","Я пью апельсиновый сок."],["El zumo está en la nevera.","Сок находится в холодильнике."]],
        cloze:"Bebo ___ de naranja.",clozeAnswers:["zumo","jugo"]},
      {id:"lemonade",cat:"drinks",word:"la limonada",base:"limonada",gender:"женский род",tr:"лимонад",ru:["лимонад"],answers:["limonada","la limonada"],art:"juice",
        examples:[["La limonada está muy fría.","Лимонад очень холодный."],["Preparo limonada con hielo.","Я готовлю лимонад со льдом."]],
        cloze:"Preparo ___ con hielo.",clozeAnswers:["limonada"]},
      {id:"soda",cat:"drinks",word:"el refresco",base:"refresco",gender:"мужской род",tr:"газированный напиток",ru:["газировка","газированный напиток","прохладительный напиток"],answers:["refresco","el refresco"],art:"soda",
        examples:[["No bebo muchos refrescos.","Я не пью много газировки."],["Quiero un refresco sin azúcar.","Я хочу газировку без сахара."]],
        cloze:"Quiero un ___ sin azúcar.",clozeAnswers:["refresco"]},
      {id:"wine",cat:"drinks",word:"el vino",base:"vino",gender:"мужской род",tr:"вино",ru:["вино"],answers:["vino","el vino"],art:"wine",
        examples:[["Prefiero el vino blanco.","Я предпочитаю белое вино."],["La botella de vino está en la mesa.","Бутылка вина находится на столе."]],
        cloze:"Prefiero el ___ blanco.",clozeAnswers:["vino"]},
      {id:"beer",cat:"drinks",word:"la cerveza",base:"cerveza",gender:"женский род",tr:"пиво",ru:["пиво"],answers:["cerveza","la cerveza"],art:"beer",
        examples:[["Quiero una cerveza sin alcohol.","Я хочу безалкогольное пиво."],["La cerveza está fría.","Пиво холодное."]],
        cloze:"Quiero una ___ sin alcohol.",clozeAnswers:["cerveza"]},
      {id:"hotchocolate",cat:"drinks",word:"el chocolate caliente",base:"chocolate caliente",gender:"мужской род",tr:"горячий шоколад",ru:["горячий шоколад"],answers:["chocolate caliente","el chocolate caliente"],art:"coffee",
        examples:[["En invierno bebo chocolate caliente.","Зимой я пью горячий шоколад."],["El chocolate caliente lleva leche.","В горячем шоколаде есть молоко."]],
        cloze:"En invierno bebo chocolate ___.",clozeAnswers:["caliente"]},

      {id:"soup",cat:"dishes",word:"la sopa",base:"sopa",gender:"женский род",tr:"суп",ru:["суп"],answers:["sopa","la sopa"],art:"soup",
        examples:[["La sopa está caliente.","Суп горячий."],["Hoy preparo sopa de verduras.","Сегодня я готовлю овощной суп."]],
        cloze:"Hoy preparo ___ de verduras.",clozeAnswers:["sopa"]},
      {id:"salad",cat:"dishes",word:"la ensalada",base:"ensalada",gender:"женский род",tr:"салат",ru:["салат"],answers:["ensalada","la ensalada"],art:"salad",
        examples:[["Quiero una ensalada pequeña.","Я хочу маленький салат."],["La ensalada lleva tomate y atún.","В салате есть помидор и тунец."]],
        cloze:"Quiero una ___ pequeña.",clozeAnswers:["ensalada"]},
      {id:"omelette",cat:"dishes",word:"la tortilla",base:"tortilla",gender:"женский род",tr:"омлет, тортилья",ru:["омлет","тортилья","омлет тортилья"],answers:["tortilla","la tortilla"],art:"egg",
        examples:[["La tortilla lleva huevos y patatas.","В тортилье есть яйца и картофель."],["Comemos tortilla para cenar.","Мы едим тортилью на ужин."]],
        cloze:"Comemos ___ para cenar.",clozeAnswers:["tortilla"]},
      {id:"sandwich",cat:"dishes",word:"el bocadillo",base:"bocadillo",gender:"мужской род",tr:"бутерброд, сэндвич",ru:["бутерброд","сэндвич","бутерброд сэндвич"],answers:["bocadillo","el bocadillo","sándwich","el sándwich"],art:"sandwich",
        examples:[["Quiero un bocadillo de queso.","Я хочу бутерброд с сыром."],["El bocadillo está listo.","Бутерброд готов."]],
        cloze:"Quiero un ___ de queso.",clozeAnswers:["bocadillo","sándwich"]},
      {id:"pizza",cat:"dishes",word:"la pizza",base:"pizza",gender:"женский род",tr:"пицца",ru:["пицца"],answers:["pizza","la pizza"],art:"pizza",
        examples:[["Pedimos una pizza grande.","Мы заказываем большую пиццу."],["La pizza lleva queso y tomate.","В пицце есть сыр и помидор."]],
        cloze:"Pedimos una ___ grande.",clozeAnswers:["pizza"]},
      {id:"paella",cat:"dishes",word:"la paella",base:"paella",gender:"женский род",tr:"паэлья",ru:["паэлья"],answers:["paella","la paella"],art:"rice",
        examples:[["La paella lleva arroz y marisco.","В паэлье есть рис и морепродукты."],["Hoy comemos paella.","Сегодня мы едим паэлью."]],
        cloze:"Hoy comemos ___.",clozeAnswers:["paella"]},
      {id:"stew",cat:"dishes",word:"el guiso",base:"guiso",gender:"мужской род",tr:"рагу, тушёное блюдо",ru:["рагу","тушёное блюдо","тушеное блюдо"],answers:["guiso","el guiso"],art:"soup",
        examples:[["El guiso lleva carne y patatas.","В рагу есть мясо и картофель."],["Mi abuela prepara un guiso delicioso.","Моя бабушка готовит вкусное рагу."]],
        cloze:"El ___ lleva carne y patatas.",clozeAnswers:["guiso"]},
      {id:"puree",cat:"dishes",word:"el puré",base:"puré",gender:"мужской род",tr:"пюре",ru:["пюре"],answers:["puré","el puré"],art:"puree",
        examples:[["Quiero puré de patatas.","Я хочу картофельное пюре."],["El puré está muy suave.","Пюре очень нежное."]],
        cloze:"Quiero ___ de patatas.",clozeAnswers:["puré"]},

      {id:"flour",cat:"grocery",word:"la harina",base:"harina",gender:"женский род",tr:"мука",ru:["мука"],answers:["harina","la harina"],art:"bag",
        examples:[["Necesito harina para la tarta.","Мне нужна мука для торта."],["La harina está en el armario.","Мука находится в шкафу."]],
        cloze:"Necesito ___ para la tarta.",clozeAnswers:["harina"]},
      {id:"sugar",cat:"grocery",word:"el azúcar",base:"azúcar",gender:"мужской род",tr:"сахар",ru:["сахар"],answers:["azúcar","el azúcar"],art:"sugar",
        examples:[["Tomo café sin azúcar.","Я пью кофе без сахара."],["Añade una cucharada de azúcar.","Добавь ложку сахара."]],
        cloze:"Tomo café sin ___.",clozeAnswers:["azúcar"]},
      {id:"oil",cat:"grocery",word:"el aceite",base:"aceite",gender:"мужской род",tr:"масло растительное",ru:["масло","растительное масло"],answers:["aceite","el aceite","aceite vegetal","el aceite vegetal"],art:"bottle",
        examples:[["Cocino con aceite de oliva.","Я готовлю с оливковым маслом."],["Necesitamos un poco de aceite.","Нам нужно немного масла."]],
        cloze:"Cocino con ___ de oliva.",clozeAnswers:["aceite"]},
      {id:"vinegar",cat:"grocery",word:"el vinagre",base:"vinagre",gender:"мужской род",tr:"уксус",ru:["уксус"],answers:["vinagre","el vinagre"],art:"bottle",
        examples:[["La ensalada lleva aceite y vinagre.","В салате есть масло и уксус."],["No me gusta mucho el vinagre.","Я не очень люблю уксус."]],
        cloze:"La ensalada lleva aceite y ___.",clozeAnswers:["vinagre"]},
      {id:"butter",cat:"grocery",word:"la mantequilla",base:"mantequilla",gender:"женский род",tr:"сливочное масло",ru:["сливочное масло","масло"],answers:["mantequilla","la mantequilla"],art:"butter",
        examples:[["Como pan con mantequilla.","Я ем хлеб со сливочным маслом."],["La mantequilla está en la nevera.","Сливочное масло находится в холодильнике."]],
        cloze:"Como pan con ___.",clozeAnswers:["mantequilla"]},
      {id:"jam",cat:"grocery",word:"la mermelada",base:"mermelada",gender:"женский род",tr:"варенье, джем",ru:["варенье","джем","варенье джем"],answers:["mermelada","la mermelada"],art:"jar",
        examples:[["Desayuno pan con mermelada.","Я завтракаю хлебом с вареньем."],["La mermelada es de fresa.","Это клубничное варенье."]],
        cloze:"Desayuno pan con ___.",clozeAnswers:["mermelada"]},
      {id:"honey",cat:"grocery",word:"la miel",base:"miel",gender:"женский род",tr:"мёд",ru:["мёд","мед"],answers:["miel","la miel"],art:"honey",
        examples:[["Pongo miel en el té.","Я кладу мёд в чай."],["La miel es muy dulce.","Мёд очень сладкий."]],
        cloze:"Pongo ___ en el té.",clozeAnswers:["miel"]},
      {id:"lentils",cat:"grocery",word:"las lentejas",base:"lentejas",gender:"женский род, множественное число",tr:"чечевица",ru:["чечевица"],answers:["lentejas","las lentejas"],art:"lentils",
        examples:[["Hoy comemos lentejas.","Сегодня мы едим чечевицу."],["Las lentejas tienen mucha proteína.","В чечевице много белка."]],
        cloze:"Hoy comemos ___.",clozeAnswers:["lentejas"]},
      {id:"beans",cat:"grocery",word:"las judías",base:"judías",gender:"женский род, множественное число",tr:"фасоль",ru:["фасоль"],answers:["judías","las judías","frijoles","los frijoles"],art:"beans",
        examples:[["El guiso lleva judías.","В рагу есть фасоль."],["Compramos judías blancas.","Мы покупаем белую фасоль."]],
        cloze:"El guiso lleva ___.",clozeAnswers:["judías","frijoles"]}

    ];

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


const STUDY_ITEMS = enrichStudyItems(FOOD_WORDS, FOOD_CATEGORIES);

function buildExercises() {
  const items = [];

  STUDY_ITEMS.forEach(function (word) {
    items.push({
      id:"food_"+word.id+"_es",
      topic:"foods",
      foodCat:word.cat,
      skill:"Вспомни слово",
      q:"Переведи на испанский: "+word.tr+".",
      a:word.answers,
      e:"Базовая форма: "+word.word+"."
    });

    items.push({
      id:"food_"+word.id+"_ru",
      topic:"foods",
      foodCat:word.cat,
      skill:"Узнай слово",
      q:"Переведи на русский: "+word.word+".",
      a:russianAnswers(word),
      e:word.word+" — "+word.tr+"."
    });

    items.push({
      id:"food_"+word.id+"_ctx",
      topic:"foods",
      foodCat:word.cat,
      skill:"Слово в контексте",
      q:clozeQuestion(word,"пропущенное слово"),
      a:word.clozeAnswers,
      e:word.examples[0][0]+" — "+word.examples[0][1]
    });
  });

  return items;
}

export const foodsTopic = {
  id:"foods",
  title:"Продукты питания",
  icon:"◉",
  studyItems:STUDY_ITEMS,
  exercises:buildExercises()
};
