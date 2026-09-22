/**
 * Clothes topic.
 * Pure data + exercise generation; no DOM or globals.
 */

const CLOTHING_CATEGORIES = [
      {id:"all",title:"Все слова"},
      {id:"clothes",title:"Одежда"},
      {id:"shoes",title:"Обувь"},
      {id:"accessories",title:"Аксессуары"},
      {id:"jewelry",title:"Украшения"},
      {id:"headwear",title:"Головные уборы"},
      {id:"bags",title:"Сумки"},
      {id:"tryon",title:"Примерка и размер"},
      {id:"store",title:"В магазине"}
    ];
function clothingWord(id,cat,word,base,gender,tr,ru,answers,art,examples,cloze,clozeAnswers){
      return {id:id,cat:cat,word:word,base:base,gender:gender,tr:tr,ru:ru,answers:answers,art:art,examples:examples,cloze:cloze,clozeAnswers:clozeAnswers};
    }

const CLOTHING_WORDS = [
      clothingWord("tshirt","clothes","la camiseta","camiseta","женский род","футболка",["футболка"],["camiseta","la camiseta"],"tshirt",
        [["Llevo una camiseta blanca.","На мне белая футболка."],["Esta camiseta es muy cómoda.","Эта футболка очень удобная."]],"Llevo una ___ blanca.",["camiseta"]),
      clothingWord("shirt","clothes","la camisa","camisa","женский род","рубашка",["рубашка"],["camisa","la camisa"],"shirt",
        [["Él lleva una camisa azul.","На нём синяя рубашка."],["Plancho la camisa para mañana.","Я глажу рубашку на завтра."]],"Él lleva una ___ azul.",["camisa"]),
      clothingWord("blouse","clothes","la blusa","blusa","женский род","блузка",["блузка"],["blusa","la blusa"],"blouse",
        [["La blusa combina con la falda.","Блузка сочетается с юбкой."],["Busco una blusa elegante.","Я ищу элегантную блузку."]],"Busco una ___ elegante.",["blusa"]),
      clothingWord("sweater","clothes","el jersey","jersey","мужской род","свитер",["свитер","джемпер"],["jersey","el jersey","suéter","el suéter"],"sweater",
        [["Me pongo un jersey de lana.","Я надеваю шерстяной свитер."],["Este jersey abriga mucho.","Этот свитер очень тёплый."]],"Me pongo un ___ de lana.",["jersey","suéter"]),
      clothingWord("cardigan","clothes","el cárdigan","cárdigan","мужской род","кардиган, кофта",["кардиган","кофта"],["cárdigan","cardigan","el cárdigan","el cardigan"],"cardigan",
        [["Llevo un cárdigan beige.","На мне бежевый кардиган."],["Este cárdigan es muy cómodo.","Этот кардиган очень удобный."]],"Llevo un ___ beige.",["cárdigan","cardigan"]),
      clothingWord("hoodie","clothes","la sudadera con capucha","sudadera con capucha","женский род","худи, толстовка с капюшоном",["худи","толстовка","толстовка с капюшоном"],["sudadera con capucha","la sudadera con capucha","sudadera","la sudadera"],"hoodie",
        [["Llevo una sudadera con capucha verde.","На мне зелёное худи."],["Esta sudadera con capucha es muy cómoda.","Это худи очень удобное."]],"Llevo una ___ verde.",["sudadera con capucha","sudadera"]),
      clothingWord("vest","clothes","el chaleco","chaleco","мужской род","жилет",["жилет"],["chaleco","el chaleco"],"vest",
        [["Lleva un chaleco beige.","На нём бежевый жилет."],["El chaleco combina con la camisa.","Жилет сочетается с рубашкой."]],"Lleva un ___ beige.",["chaleco"]),
      clothingWord("polo","clothes","el polo","polo","мужской род","поло",["поло","рубашка поло"],["polo","el polo"],"polo",
        [["Lleva un polo blanco.","На нём белое поло."],["Este polo es de algodón.","Это поло из хлопка."]],"Lleva un ___ blanco.",["polo"]),
      clothingWord("jacket","clothes","la chaqueta","chaqueta","женский род","куртка, пиджак",["куртка","пиджак","куртка пиджак"],["chaqueta","la chaqueta"],"jacket",
        [["Necesito una chaqueta ligera.","Мне нужна лёгкая куртка."],["La chaqueta tiene cuatro bolsillos.","У куртки четыре кармана."]],"Necesito una ___ ligera.",["chaqueta"]),
      clothingWord("coat","clothes","el abrigo","abrigo","мужской род","пальто",["пальто"],["abrigo","el abrigo"],"coat",
        [["Ponte el abrigo, hace frío.","Надень пальто, холодно."],["Mi abrigo es largo y negro.","Моё пальто длинное и чёрное."]],"Ponte el ___, hace frío.",["abrigo"]),
      clothingWord("dress","clothes","el vestido","vestido","мужской род","платье",["платье"],["vestido","el vestido"],"dress",
        [["Ella lleva un vestido rojo.","На ней красное платье."],["El vestido es para una fiesta.","Это платье для вечеринки."]],"Ella lleva un ___ rojo.",["vestido"]),
      clothingWord("skirt","clothes","la falda","falda","женский род","юбка",["юбка"],["falda","la falda"],"skirt",
        [["La falda me queda bien.","Юбка хорошо на мне сидит."],["Prefiero una falda larga.","Я предпочитаю длинную юбку."]],"Prefiero una ___ larga.",["falda"]),
      clothingWord("trousers","clothes","los pantalones","pantalones","мужской род, множественное число","брюки, штаны",["брюки","штаны","брюки штаны"],["pantalones","los pantalones"],"trousers",
        [["Estos pantalones son cómodos.","Эти брюки удобные."],["Necesito unos pantalones negros.","Мне нужны чёрные брюки."]],"Estos ___ son cómodos.",["pantalones"]),
      clothingWord("jeans","clothes","los vaqueros","vaqueros","мужской род, множественное число","джинсы",["джинсы"],["vaqueros","los vaqueros","jeans","los jeans"],"jeans",
        [["Siempre llevo vaqueros los viernes.","По пятницам я всегда ношу джинсы."],["Los vaqueros están en el armario.","Джинсы находятся в шкафу."]],"Siempre llevo ___ los viernes.",["vaqueros","jeans"]),
      clothingWord("shorts","clothes","los pantalones cortos","pantalones cortos","мужской род, множественное число","шорты",["шорты"],["pantalones cortos","los pantalones cortos","shorts","los shorts"],"shorts",
        [["En verano llevo pantalones cortos.","Летом я ношу шорты."],["Estos pantalones cortos son nuevos.","Эти шорты новые."]],"En verano llevo ___.",["pantalones cortos","shorts"]),
      clothingWord("suit","clothes","el traje","traje","мужской род","костюм",["костюм"],["traje","el traje"],"suit",
        [["Lleva traje para la entrevista.","Он надевает костюм на собеседование."],["El traje gris es muy elegante.","Серый костюм очень элегантный."]],"Lleva ___ para la entrevista.",["traje"]),
      clothingWord("pajamas","clothes","el pijama","pijama","мужской род","пижама",["пижама"],["pijama","el pijama"],"pajamas",
        [["Me pongo el pijama antes de dormir.","Я надеваю пижаму перед сном."],["Este pijama es de algodón.","Эта пижама из хлопка."]],"Me pongo el ___ antes de dormir.",["pijama"]),
      clothingWord("underwear","clothes","la ropa interior","ropa interior","женский род","нижнее бельё",["нижнее бельё","нижнее белье"],["ropa interior","la ropa interior"],"underwear",
        [["La ropa interior está en el cajón.","Нижнее бельё находится в ящике."],["Compro ropa interior de algodón.","Я покупаю хлопковое нижнее бельё."]],"La ___ está en el cajón.",["ropa interior"]),
      clothingWord("socks","clothes","los calcetines","calcetines","мужской род, множественное число","носки",["носки"],["calcetines","los calcetines"],"socks",
        [["Necesito un par de calcetines.","Мне нужна пара носков."],["Mis calcetines son verdes.","Мои носки зелёные."]],"Necesito un par de ___.",["calcetines"]),

      clothingWord("shoes","shoes","los zapatos","zapatos","мужской род, множественное число","туфли, обувь",["туфли","обувь","туфли обувь"],["zapatos","los zapatos"],"shoes",
        [["Estos zapatos me quedan pequeños.","Эти туфли мне малы."],["Limpio mis zapatos cada semana.","Я чищу свою обувь каждую неделю."]],"Estos ___ me quedan pequeños.",["zapatos"]),
      clothingWord("sneakers","shoes","las zapatillas deportivas","zapatillas deportivas","женский род, множественное число","кроссовки",["кроссовки"],["zapatillas deportivas","las zapatillas deportivas","tenis","los tenis"],"sneakers",
        [["Corro con zapatillas deportivas.","Я бегаю в кроссовках."],["Mis zapatillas deportivas son ligeras.","Мои кроссовки лёгкие."]],"Corro con ___.",["zapatillas deportivas","tenis"]),
      clothingWord("boots","shoes","las botas","botas","женский род, множественное число","сапоги, ботинки",["сапоги","ботинки","сапоги ботинки"],["botas","las botas"],"boots",
        [["Llevo botas cuando llueve.","Я ношу сапоги, когда идёт дождь."],["Las botas son de cuero.","Сапоги сделаны из кожи."]],"Llevo ___ cuando llueve.",["botas"]),
      clothingWord("ankleboots","shoes","los botines","botines","мужской род, множественное число","ботильоны, короткие ботинки",["ботильоны","короткие ботинки","ботильоны короткие ботинки"],["botines","los botines"],"ankleboots",
        [["Los botines combinan con el vestido.","Ботильоны сочетаются с платьем."],["Estos botines tienen cremallera.","У этих ботильонов есть молния."]],"Los ___ combinan con el vestido.",["botines"]),
      clothingWord("sandals","shoes","las sandalias","sandalias","женский род, множественное число","сандалии, босоножки",["сандалии","босоножки","сандалии босоножки"],["sandalias","las sandalias"],"sandals",
        [["Llevo sandalias en la playa.","На пляже я ношу сандалии."],["Estas sandalias son cómodas.","Эти сандалии удобные."]],"Llevo ___ en la playa.",["sandalias"]),
      clothingWord("heels","shoes","los zapatos de tacón","zapatos de tacón","мужской род, множественное число","туфли на каблуке",["туфли на каблуке"],["zapatos de tacón","los zapatos de tacón","tacones","los tacones"],"heels",
        [["Ella lleva zapatos de tacón.","Она носит туфли на каблуке."],["Estos tacones son muy altos.","Эти каблуки очень высокие."]],"Ella lleva ___.",["zapatos de tacón","tacones"]),
      clothingWord("slippers","shoes","las zapatillas de casa","zapatillas de casa","женский род, множественное число","домашние тапочки",["домашние тапочки","тапочки"],["zapatillas de casa","las zapatillas de casa"],"slippers",
        [["Me pongo las zapatillas de casa.","Я надеваю домашние тапочки."],["Las zapatillas están junto a la cama.","Тапочки стоят рядом с кроватью."]],"Me pongo las ___.",["zapatillas de casa"]),

      clothingWord("belt","accessories","el cinturón","cinturón","мужской род","ремень",["ремень"],["cinturón","el cinturón"],"belt",
        [["El cinturón es de cuero.","Ремень сделан из кожи."],["Necesito un cinturón más largo.","Мне нужен ремень подлиннее."]],"El ___ es de cuero.",["cinturón"]),
      clothingWord("scarf","accessories","la bufanda","bufanda","женский род","шарф",["шарф"],["bufanda","la bufanda"],"scarf",
        [["Me pongo una bufanda roja.","Я надеваю красный шарф."],["La bufanda es muy suave.","Шарф очень мягкий."]],"Me pongo una ___ roja.",["bufanda"]),
      clothingWord("gloves","accessories","los guantes","guantes","мужской род, множественное число","перчатки",["перчатки"],["guantes","los guantes"],"gloves",
        [["No encuentro mis guantes.","Я не могу найти свои перчатки."],["Lleva guantes porque hace frío.","Он носит перчатки, потому что холодно."]],"No encuentro mis ___.",["guantes"]),
      clothingWord("sunglasses","accessories","las gafas de sol","gafas de sol","женский род, множественное число","солнцезащитные очки",["солнцезащитные очки","солнечные очки"],["gafas de sol","las gafas de sol"],"sunglasses",
        [["Necesito gafas de sol.","Мне нужны солнцезащитные очки."],["Tus gafas de sol están en la mesa.","Твои солнцезащитные очки лежат на столе."]],"Necesito ___.",["gafas de sol"]),
      clothingWord("umbrella","accessories","el paraguas","paraguas","мужской род","зонт",["зонт"],["paraguas","el paraguas"],"umbrella",
        [["Lleva un paraguas, va a llover.","Возьми зонт, будет дождь."],["Mi paraguas es amarillo.","Мой зонт жёлтый."]],"Lleva un ___, va a llover.",["paraguas"]),
      clothingWord("tie","accessories","la corbata","corbata","женский род","галстук",["галстук"],["corbata","la corbata"],"tie",
        [["La corbata combina con la camisa.","Галстук сочетается с рубашкой."],["No llevo corbata al trabajo.","Я не ношу галстук на работу."]],"La ___ combina con la camisa.",["corbata"]),
      clothingWord("bowtie","accessories","la pajarita","pajarita","женский род","галстук-бабочка",["галстук-бабочка","бабочка"],["pajarita","la pajarita"],"bowtie",
        [["Lleva una pajarita negra.","На нём чёрный галстук-бабочка."],["La pajarita es para la boda.","Галстук-бабочка — для свадьбы."]],"Lleva una ___ negra.",["pajarita"]),
      clothingWord("handkerchief","accessories","el pañuelo","pañuelo","мужской род","платок",["платок"],["pañuelo","el pañuelo"],"handkerchief",
        [["Lleva un pañuelo en el cuello.","На ней платок на шее."],["El pañuelo tiene flores.","На платке цветочный узор."]],"Lleva un ___ en el cuello.",["pañuelo"]),

      clothingWord("necklace","jewelry","el collar","collar","мужской род","ожерелье, колье",["ожерелье","колье","ожерелье колье"],["collar","el collar"],"necklace",
        [["El collar es de plata.","Ожерелье сделано из серебра."],["Este collar es un regalo.","Это ожерелье — подарок."]],"El ___ es de plata.",["collar"]),
      clothingWord("bracelet","jewelry","la pulsera","pulsera","женский род","браслет",["браслет"],["pulsera","la pulsera"],"bracelet",
        [["Llevo una pulsera dorada.","Я ношу золотистый браслет."],["La pulsera tiene pequeñas piedras.","На браслете есть маленькие камни."]],"Llevo una ___ dorada.",["pulsera"]),
      clothingWord("ring","jewelry","el anillo","anillo","мужской род","кольцо",["кольцо"],["anillo","el anillo"],"ring",
        [["El anillo está en la caja.","Кольцо находится в коробке."],["Este anillo me queda grande.","Это кольцо мне велико."]],"El ___ está en la caja.",["anillo"]),
      clothingWord("earrings","jewelry","los pendientes","pendientes","мужской род, множественное число","серьги",["серьги"],["pendientes","los pendientes"],"earrings",
        [["Lleva unos pendientes pequeños.","Она носит маленькие серьги."],["Los pendientes son de oro.","Серьги сделаны из золота."]],"Lleva unos ___ pequeños.",["pendientes"]),
      clothingWord("watch","jewelry","el reloj","reloj","мужской род","наручные часы",["наручные часы","часы"],["reloj","el reloj"],"watch",
        [["Miro la hora en mi reloj.","Я смотрю время на своих часах."],["Su reloj tiene una correa marrón.","У его часов коричневый ремешок."]],"Miro la hora en mi ___.",["reloj"]),
      clothingWord("brooch","jewelry","el broche","broche","мужской род","брошь",["брошь"],["broche","el broche"],"brooch",
        [["El broche tiene forma de flor.","Брошь имеет форму цветка."],["Pone el broche en la chaqueta.","Она прикалывает брошь к пиджаку."]],"El ___ tiene forma de flor.",["broche"]),
      clothingWord("chain","jewelry","la cadena","cadena","женский род","цепочка",["цепочка","цепь"],["cadena","la cadena"],"chain",
        [["La cadena es muy fina.","Цепочка очень тонкая."],["Lleva una cadena de oro.","Он носит золотую цепочку."]],"La ___ es muy fina.",["cadena"]),

      clothingWord("hat","headwear","el sombrero","sombrero","мужской род","шляпа",["шляпа"],["sombrero","el sombrero"],"hat",
        [["El sombrero protege del sol.","Шляпа защищает от солнца."],["Lleva un sombrero de paja.","На нём соломенная шляпа."]],"El ___ protege del sol.",["sombrero"]),
      clothingWord("cap","headwear","la gorra","gorra","женский род","кепка, бейсболка",["кепка","бейсболка","кепка бейсболка"],["gorra","la gorra"],"cap",
        [["Me pongo una gorra para correr.","Я надеваю кепку для пробежки."],["La gorra tiene una visera larga.","У кепки длинный козырёк."]],"Me pongo una ___ para correr.",["gorra"]),
      clothingWord("beanie","headwear","el gorro","gorro","мужской род","шапка",["шапка"],["gorro","el gorro"],"beanie",
        [["Ponte el gorro, hace frío.","Надень шапку, холодно."],["Mi gorro es de lana.","Моя шапка шерстяная."]],"Ponte el ___, hace frío.",["gorro"]),
      clothingWord("beret","headwear","la boina","boina","женский род","берет",["берет"],["boina","la boina"],"beret",
        [["La boina es de color rojo.","Берет красного цвета."],["Lleva la boina un poco inclinada.","Она носит берет немного набок."]],"La ___ es de color rojo.",["boina"]),
      clothingWord("hood","headwear","la capucha","capucha","женский род","капюшон",["капюшон"],["capucha","la capucha"],"hood",
        [["Sube la capucha porque llueve.","Подними капюшон, потому что идёт дождь."],["La chaqueta tiene capucha.","У куртки есть капюшон."]],"Sube la ___ porque llueve.",["capucha"]),

      clothingWord("handbag","bags","el bolso","bolso","мужской род","сумка",["сумка","женская сумка"],["bolso","el bolso"],"handbag",
        [["El móvil está en mi bolso.","Телефон находится в моей сумке."],["Este bolso tiene una correa larga.","У этой сумки длинный ремешок."]],"El móvil está en mi ___.",["bolso"]),
      clothingWord("backpack","bags","la mochila","mochila","женский род","рюкзак",["рюкзак"],["mochila","la mochila"],"backpack",
        [["Llevo el portátil en la mochila.","Я ношу ноутбук в рюкзаке."],["La mochila es muy ligera.","Рюкзак очень лёгкий."]],"Llevo el portátil en la ___.",["mochila"]),
      clothingWord("wallet","bags","la cartera","cartera","женский род","кошелёк, портмоне",["кошелёк","кошелек","портмоне","кошелёк портмоне"],["cartera","la cartera"],"wallet",
        [["Guardo las tarjetas en la cartera.","Я храню карты в кошельке."],["No encuentro mi cartera.","Я не могу найти свой кошелёк."]],"Guardo las tarjetas en la ___.",["cartera"]),
      clothingWord("coinpurse","bags","el monedero","monedero","мужской род","кошелёк для мелочи",["кошелёк для мелочи","кошелек для мелочи","монетница"],["monedero","el monedero"],"coinpurse",
        [["Las monedas están en el monedero.","Монеты находятся в кошельке."],["El monedero es pequeño.","Кошелёк для мелочи маленький."]],"Las monedas están en el ___.",["monedero"]),
      clothingWord("suitcase","bags","la maleta","maleta","женский род","чемодан",["чемодан"],["maleta","la maleta"],"suitcase",
        [["Preparo la maleta para el viaje.","Я собираю чемодан для поездки."],["La maleta pesa mucho.","Чемодан много весит."]],"Preparo la ___ para el viaje.",["maleta"]),
      clothingWord("waistbag","bags","la riñonera","riñonera","женский род","поясная сумка",["поясная сумка"],["riñonera","la riñonera"],"waistbag",
        [["Guardo las llaves en la riñonera.","Я храню ключи в поясной сумке."],["La riñonera es práctica para caminar.","Поясная сумка удобна для прогулок."]],"Guardo las llaves en la ___.",["riñonera"]),

      clothingWord("size","tryon","la talla","talla","женский род","размер одежды",["размер одежды","размер"],["talla","la talla"],"size",
        [["¿Qué talla necesitas? — Necesito una talla M.","Какой размер тебе нужен? — Мне нужен размер M."],["¿Qué talla usas normalmente?","Какой размер ты обычно носишь?"]],"¿Qué ___ necesitas? — Necesito una talla M.",["talla"]),
      clothingWord("fittingroom","store","el probador","probador","мужской род","примерочная",["примерочная"],["probador","el probador","probadores","los probadores"],"fittingroom",
        [["¿Dónde están los probadores?","Где находятся примерочные?"],["El probador está al fondo de la tienda.","Примерочная находится в глубине магазина."]],"¿Dónde están los ___?",["probadores"]),
      clothingWord("bra","clothes","el sujetador","sujetador","мужской род","бюстгальтер",["бюстгальтер","лифчик"],["sujetador","el sujetador"],"bra",
        [["Necesito un sujetador cómodo.","Мне нужен удобный бюстгальтер."],["Este sujetador me queda bien.","Этот бюстгальтер мне хорошо подходит."]],"Necesito un ___ cómodo.",["sujetador"]),
      clothingWord("tights","clothes","las medias","medias","женский род, множественное число","колготки / чулки",["колготки","чулки"],["medias","las medias"],"",
        [["Lleva medias negras con el vestido.","Она носит чёрные колготки с платьем."],["Necesito unas medias para este vestido.","Мне нужны колготки к этому платью."]],"Lleva ___ negras con el vestido.",["medias"]),
      clothingWord("leggings","clothes","los leggings / las mallas","leggings / mallas","множественное число","легинсы",["легинсы"],["leggings","los leggings","mallas","las mallas"],"",
        [["Me pongo unos leggings para entrenar.","Я надеваю легинсы для тренировки."],["Las mallas son cómodas para hacer deporte.","Легинсы удобны для занятий спортом."]],"Me pongo unos ___ para entrenar.",["leggings","mallas"]),
      clothingWord("tracksuit","clothes","el chándal","chándal","мужской род","спортивный костюм",["спортивный костюм"],["chándal","chandal","el chándal","el chandal"],"",
        [["Llevo un chándal cuando hago deporte.","Я ношу спортивный костюм, когда занимаюсь спортом."],["Este chándal es muy cómodo.","Этот спортивный костюм очень удобный."]],"Llevo un ___ cuando hago deporte.",["chándal","chandal"]),
      clothingWord("swimsuit","clothes","el bañador","bañador","мужской род","купальник / плавки",["купальник","плавки"],["bañador","el bañador"],"",
        [["He metido el bañador en la maleta.","Я положил(а) купальник в чемодан."],["Necesito un bañador para la piscina.","Мне нужен купальник для бассейна."]],"He metido el ___ en la maleta.",["bañador"]),
      clothingWord("raincoat","clothes","el impermeable","impermeable","мужской род","дождевик",["дождевик"],["impermeable","el impermeable"],"",
        [["Ponte el impermeable porque está lloviendo.","Надень дождевик, потому что идёт дождь."],["Mi impermeable es ligero y cómodo.","Мой дождевик лёгкий и удобный."]],"Ponte el ___ porque está lloviendo.",["impermeable"]),
      clothingWord("flipflops","shoes","las chanclas","chanclas","женский род, множественное число","шлёпанцы",["шлёпанцы","сланцы"],["chanclas","las chanclas"],"",
        [["Llevo chanclas en la playa.","Я ношу шлёпанцы на пляже."],["Las chanclas están junto a la piscina.","Шлёпанцы лежат рядом с бассейном."]],"Llevo ___ en la playa.",["chanclas"]),
      clothingWord("rainboots","shoes","las botas de agua","botas de agua","женский род, множественное число","резиновые сапоги",["резиновые сапоги"],["botas de agua","las botas de agua"],"",
        [["Necesito botas de agua para la lluvia.","Мне нужны резиновые сапоги для дождя."],["Los niños llevan botas de agua.","Дети носят резиновые сапоги."]],"Necesito ___ para la lluvia.",["botas de agua"]),
      clothingWord("zipper","accessories","la cremallera","cremallera","женский род","молния",["молния"],["cremallera","la cremallera"],"zipper",
        [["La cremallera de la chaqueta está rota.","Молния на куртке сломана."],["Sube la cremallera del abrigo.","Застегни молнию на пальто."]],"La ___ de la chaqueta está rota.",["cremallera"]),
      clothingWord("button","accessories","el botón","botón","мужской род","пуговица",["пуговица"],["botón","boton","el botón","el boton"],"button",
        [["Falta un botón en la camisa.","На рубашке не хватает пуговицы."],["Este botón está suelto.","Эта пуговица плохо держится."]],"Falta un ___ en la camisa.",["botón","boton"]),

      clothingWord("try_on","tryon","probarse algo","probarse algo","фраза / возвратный глагол","примерять что-либо",["примерять что-либо","примерять"],["probarse algo","probarse"],"try_on",
        [["Quiero probarme esta chaqueta.","Я хочу примерить эту куртку."],["¿Puedo probarme estos zapatos?","Можно мне примерить эти туфли?"]],"Quiero ___ esta chaqueta.",["probarme"]),
      clothingWord("put_on","tryon","ponerse algo","ponerse algo","фраза / возвратный глагол","надевать что-либо",["надевать что-либо","надевать"],["ponerse algo","ponerse"],"put_on",
        [["Me pongo el abrigo antes de salir.","Я надеваю пальто перед выходом."],["Ponte la bufanda, hace frío.","Надень шарф, холодно."]],"Me ___ el abrigo antes de salir.",["pongo"]),
      clothingWord("take_off","tryon","quitarse algo","quitarse algo","фраза / возвратный глагол","снимать что-либо",["снимать что-либо","снимать"],["quitarse algo","quitarse"],"take_off",
        [["Me quito los zapatos al llegar a casa.","Я снимаю обувь, когда прихожу домой."],["Se quita el abrigo en casa.","Она снимает пальто дома."]],"Me ___ los zapatos al llegar a casa.",["quito"]),
      clothingWord("change_clothes","tryon","cambiarse de ropa","cambiarse de ropa","фраза / возвратный глагол","переодеваться",["переодеваться"],["cambiarse de ropa","cambiarse"],"change_clothes",
        [["Voy a cambiarme de ropa.","Я собираюсь переодеться."],["Me cambio de ropa después del trabajo.","Я переодеваюсь после работы."]],"Voy a ___ de ropa.",["cambiarme"]),
      clothingWord("fasten","tryon","abrocharse","abrocharse","возвратный глагол","застёгиваться",["застёгиваться","застегиваться"],["abrocharse"],"fasten",
        [["Me abrocho la chaqueta.","Я застёгиваю куртку."],["Abróchate el cinturón.","Застегни ремень."]],"Me ___ la chaqueta.",["abrocho"]),
      clothingWord("unfasten","tryon","desabrocharse","desabrocharse","возвратный глагол","расстёгиваться",["расстёгиваться","расстегиваться"],["desabrocharse"],"unfasten",
        [["Se desabrocha el abrigo.","Он расстёгивает пальто."],["Me desabrocho la chaqueta al entrar.","Я расстёгиваю куртку, когда захожу внутрь."]],"Se ___ el abrigo.",["desabrocha"]),
      clothingWord("fits_well","tryon","me queda bien","me queda bien","фраза","мне хорошо сидит / подходит",["мне хорошо сидит","мне подходит"],["me queda bien"],"fits_well",
        [["Esta camisa me queda bien.","Эта рубашка мне хорошо сидит."],["El vestido te queda muy bien.","Платье тебе очень идёт."]],"Esta camisa me ___ bien.",["queda"]),
      clothingWord("too_big","tryon","me queda grande","me queda grande","фраза","мне велико",["мне велико","велико"],["me queda grande"],"too_big",
        [["Este jersey me queda grande.","Этот свитер мне велик."],["La chaqueta me queda un poco grande.","Куртка мне немного велика."]],"Este jersey me queda ___.",["grande"]),
      clothingWord("too_small","tryon","me queda pequeño","me queda pequeño","фраза","мне мало",["мне мало","мало"],["me queda pequeño","me queda pequeña"],"too_small",
        [["El vestido me queda pequeño.","Платье мне мало."],["Esta camiseta me queda pequeña.","Эта футболка мне мала."]],"El vestido me queda ___.",["pequeño"]),
      clothingWord("too_tight","tryon","me aprieta","me aprieta","фраза","мне жмёт",["мне жмёт","жмёт","жмет"],["me aprieta","me aprietan"],"too_tight",
        [["Estos zapatos me aprietan.","Эти туфли мне жмут."],["El cinturón me aprieta un poco.","Ремень мне немного жмёт."]],"Estos zapatos me ___.",["aprietan"]),
      clothingWord("length_fit","tryon","me está largo / corto","me está largo / corto","фраза","мне длинно / коротко",["мне длинно","мне коротко"],["me está largo","me esta largo","me está corto","me esta corto"],"length_fit",
        [["Este pantalón me está un poco largo.","Эти брюки мне немного длинноваты."],["La falda me está demasiado corta.","Юбка мне слишком коротка."]],"Este pantalón me está un poco ___.",["largo"]),
      clothingWord("match_with","tryon","combinar con","combinar con","фраза / глагол","сочетаться с",["сочетаться с","сочетаться"],["combinar con"],"match_with",
        [["La camisa combina con estos pantalones.","Рубашка сочетается с этими брюками."],["¿Esta bufanda combina con el abrigo?","Этот шарф сочетается с пальто?"]],"La camisa ___ con estos pantalones.",["combina"]),
      clothingWord("on_sale","tryon","estar de oferta","estar de oferta","фраза","быть на распродаже / по акции",["быть на распродаже","быть по акции"],["estar de oferta"],"on_sale",
        [["Esta chaqueta está de oferta.","Эта куртка сейчас по акции."],["Los zapatos están de oferta esta semana.","Туфли на распродаже на этой неделе."]],"Esta chaqueta está de ___.",["oferta"]),

      clothingWord("another_size","store","¿Tiene otra talla?","¿Tiene otra talla?","фраза","У вас есть другой размер?",["у вас есть другой размер","есть другой размер"],["¿Tiene otra talla?","Tiene otra talla?"],"another_size",
        [["¿Tiene esta camisa en otra talla?","У вас есть эта рубашка в другом размере?"],["¿Tiene otra talla? Esta me queda pequeña.","У вас есть другой размер? Этот мне мал."]],"¿Tiene esta camisa en otra ___?",["talla"]),
      clothingWord("can_try_it","store","¿Puedo probármelo?","¿Puedo probármelo?","фраза","Можно это примерить?",["можно это примерить","могу я это примерить"],["¿Puedo probármelo?","Puedo probármelo?","¿Puedo probarmelo?","Puedo probarmelo?"],"can_try_it",
        [["Me gusta este abrigo. ¿Puedo probármelo?","Мне нравится это пальто. Можно его примерить?"],["¿Puedo probármelo antes de comprarlo?","Можно примерить это перед покупкой?"]],"Me gusta este abrigo. ¿Puedo ___?",["probármelo","probarmelo"]),
      clothingWord("where_fittingrooms","store","¿Dónde están los probadores?","¿Dónde están los probadores?","фраза","Где примерочные?",["где примерочные","где находятся примерочные"],["¿Dónde están los probadores?","Donde estan los probadores?","Dónde están los probadores?"],"where_fittingrooms",
        [["¿Dónde están los probadores?","Где находятся примерочные?"],["Los probadores están al fondo, a la derecha.","Примерочные находятся в глубине магазина, справа."]],"¿Dónde están los ___?",["probadores"]),
      clothingWord("take_it","store","Me lo llevo.","Me lo llevo.","фраза","Я это беру.",["я это беру","беру"],["Me lo llevo.","Me lo llevo"],"take_it",
        [["Me queda perfecto. Me lo llevo.","Сидит идеально. Я это беру."],["Gracias, me lo llevo.","Спасибо, я это беру."]],"Me queda perfecto. Me lo ___.",["llevo"])
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


const STUDY_ITEMS = enrichStudyItems(CLOTHING_WORDS, CLOTHING_CATEGORIES);

function buildExercises() {
  const items = [];

  STUDY_ITEMS.forEach(function (word) {
    items.push({
      id:"clothes_"+word.id+"_es",
      topic:"clothes",
      foodCat:word.cat,
      skill:"Вспомни слово",
      q:"Переведи на испанский: "+word.tr+".",
      a:word.answers,
      e:"Базовая форма: "+word.word+"."
    });

    items.push({
      id:"clothes_"+word.id+"_ru",
      topic:"clothes",
      foodCat:word.cat,
      skill:"Узнай слово",
      q:"Переведи на русский: "+word.word+".",
      a:russianAnswers(word),
      e:word.word+" — "+word.tr+"."
    });

    items.push({
      id:"clothes_"+word.id+"_ctx",
      topic:"clothes",
      foodCat:word.cat,
      skill:"Слово в контексте",
      q:clozeQuestion(word,"пропущенное слово"),
      a:word.clozeAnswers,
      e:word.examples[0][0]+" — "+word.examples[0][1]
    });
  });

  return items;
}

export const clothesTopic = {
  id:"clothes",
  title:"Одежда и аксессуары",
  icon:"◇",
  studyItems:STUDY_ITEMS,
  exercises:buildExercises()
};
