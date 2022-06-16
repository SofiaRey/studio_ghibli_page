import { shuffle } from "./utils.js";

const data = [
  {
    id: "0",
    title: "El castillo en el cielo",
    original_title: "天空の城ラピュタ",
    image: "images/el_castillo_en_el_cielo/castillo_en_el_cielo.jpeg",
    image_banner:
      "images/el_castillo_en_el_cielo/castillo_en_el_cielo_banner.webp",
    description:
      "La huérfana Sheeta ha heredado un misterioso cristal que la vincula al mítico reino del cielo de Laputa. Con la ayuda del ingenioso Pazu y de una divertida banda de piratas del cielo, se dirige a las ruinas de la que fuera una gran civilización. Sheeta y Pazu deben burlar al malvado Muska, que planea utilizar la ciencia de Laputa para convertirse en el gobernante del mundo.",
    director: "Hayao Miyazaki",
    release_date: "1986",
    running_time: "124",
    rt_score: "95",
    people: [
      "Lusheeta Toel Ul Laputa",
      "Pazu",
      "Captain Dola",
      "Colonel Muska",
      "General Mouro",
      "Uncle Pom",
      "Laputian Robot",
    ],
    gallery: [
      "images/el_castillo_en_el_cielo/castillo_en_el_cielo_gallery_1.webp",
      "images/el_castillo_en_el_cielo/castillo_en_el_cielo_gallery_2.webp",
      "images/el_castillo_en_el_cielo/castillo_en_el_cielo_gallery_3.jpeg",
    ],
  },
  {
    id: "1",
    title: "La tumba de las luciérnagas",
    original_title: "火垂るの墓",
    image:
      "images/la_tumba_de_las_luciernagas/la_tumba_de_las_luciernagas.jpeg",
    image_banner:
      "images/la_tumba_de_las_luciernagas/la_tumba_de_las_luciernagas_banner.jpeg",
    description:
      "En la última parte de la Segunda Guerra Mundial, un niño y su hermana, huérfanos cuando su madre muere en el bombardeo de Tokio, se ven obligados a sobrevivir por su cuenta en lo que queda de la vida civil en Japón. La trama sigue a este niño y a su hermana mientras hacen lo posible por sobrevivir en el campo japonés, luchando contra el hambre, los prejuicios y el orgullo en su propia y silenciosa batalla personal.",
    director: "Isao Takahata",
    release_date: "1988",
    running_time: "89",
    rt_score: "97",
    people: [],
    gallery: [
      "images/la_tumba_de_las_luciernagas/la_tumba_de_las_luciernagas_gallery1.jpeg",
      "images/la_tumba_de_las_luciernagas/la_tumba_de_las_luciernagas_gallery2.jpeg",
      "images/la_tumba_de_las_luciernagas/la_tumba_de_las_luciernagas_gallery3.png",
    ],
  },
  {
    id: "2",
    title: "Mi vecino Totoro",
    original_title: "となりのトトロ",
    image: "images/mi_vecino_totoro/mi_vecino_totoro.jpeg",
    image_banner: "images/mi_vecino_totoro/mi_vecino_totoro_banner.webp",
    description:
      "Dos hermanas se trasladan al campo con su padre para estar más cerca de su madre hospitalizada, y descubren que los árboles de los alrededores están habitados por Totoros, espíritus mágicos del bosque. Cuando la menor se escapa de casa, la hermana mayor busca la ayuda de los espíritus para encontrarla.",
    director: "Hayao Miyazaki",
    release_date: "1988",
    running_time: "86",
    rt_score: "93",
    people: [
      "Satsuki Kusakabe",
      "Mei Kusakabe",
      "Tatsuo Kusakabe",
      "Yasuko Kusakabe",
      "Totoro",
      "Chu Totoro",
      "Chibi Totoro",
      "Catbus",
      "Granny",
      "Kanta Ōgaki",
    ],
    gallery: [
      "images/mi_vecino_totoro/mi_vecino_totoro_gallery1.jpeg",
      "images/mi_vecino_totoro/mi_vecino_totoro_gallery2.jpeg",
      "images/mi_vecino_totoro/mi_vecino_totoro_gallery3.jpeg",
    ],
  },
  {
    id: "3",
    title: "Kiki: Entregas a domicilio",
    original_title: "魔女の宅急便",
    image: "images/kiki_entregas_a_domicilio/kiki_entregas_a_domicilio.jpeg",
    image_banner:
      "images/kiki_entregas_a_domicilio/kiki_entregas_a_domicilio_banner.webp",
    description:
      "Una joven bruja, en su año obligatorio de vida independiente, encuentra dificultades para adaptarse a una nueva comunidad mientras se mantiene dirigiendo un servicio de mensajería aérea.",
    director: "Hayao Miyazaki",
    release_date: "1989",
    running_time: "102",
    rt_score: "96",
    people: ["Kiki", "Jiji", "Osono", "Ursula", "Tombo", "Madame"],
    gallery: [
      "images/kiki_entregas_a_domicilio/kiki_entregas_a_domicilio_gallery1.webp",
      "images/kiki_entregas_a_domicilio/kiki_entregas_a_domicilio_gallery2.jpeg",
      "images/kiki_entregas_a_domicilio/kiki_entregas_a_domicilio_gallery3.png",
    ],
  },
  {
    id: "4",
    title: "Recuerdos del ayer",
    original_title: "おもひでぽろぽろ",
    image: "images/recuerdos_del_ayer/recuerdos_del_ayer.jpeg",
    image_banner: "images/recuerdos_del_ayer/recuerdos_del_ayer_banner.jpeg",
    description:
      "Es 1982, y Taeko tiene 27 años, es soltera y ha vivido toda su vida en Tokio. Decide visitar a su familia en el campo, y mientras el tren viaja por la noche, los recuerdos de sus años de juventud se agolpan: los primeros e inmaduros atisbos de romance, el inicio de la pubertad y las frustraciones de las matemáticas y los chicos. En la estación se encuentra con el joven granjero Toshio, y los encuentros con él comienzan a reconectarla con anhelos olvidados. En los cambios líricos entre el presente y el pasado, Taeko contempla el arco de su vida y se pregunta si ha sido fiel a los sueños de su infancia.",
    director: "Isao Takahata",
    release_date: "1991",
    running_time: "118",
    rt_score: "100",
    people: [],
    gallery: [
      "images/recuerdos_del_ayer/recuerdos_del_ayer_gallery1.jpeg",
      "images/recuerdos_del_ayer/recuerdos_del_ayer_gallery2.jpeg",
      "images/recuerdos_del_ayer/recuerdos_del_ayer_gallery3.jpeg",
    ],
  },
  {
    id: "5",
    title: "Porco Rosso",
    original_title: "紅の豚",
    image: "images/porco_rosso/porco_rosso.jpeg",
    image_banner: "images/porco_rosso/porco_rosso_banner.webp",
    description:
      "Porco Rosso, conocida en Japón como Cerdo Carmesí (Kurenai no Buta) es la sexta película de animación de Hayao Miyazaki, estrenada en 1992. Nos presenta a un as de caza italiano de la Primera Guerra Mundial, que ahora vive como cazarrecompensas independiente persiguiendo 'piratas aéreos' en el mar Adriático. Ha recibido una maldición que ha cambiado su cabeza por la de un cerdo. Antes se llamaba Marco Pagot, pero ahora es conocido en todo el mundo como 'Porco Rosso', que en italiano significa 'Cerdo Rojo'.",
    director: "Hayao Miyazaki",
    release_date: "1992",
    running_time: "93",
    rt_score: "94",
    people: [],
    gallery: [
      "images/porco_rosso/porco_rosso_gallery1.jpeg",
      "images/porco_rosso/porco_rosso_gallery2.webp",
      "images/porco_rosso/porco_rosso_gallery3.jpeg",
    ],
  },
  {
    id: "6",
    title: "Pom Poko",
    original_title: "平成狸合戦ぽんぽこ",
    image: "images/pom_poko/pom_poko.jpeg",
    image_banner: "images/pom_poko/pom_poko_banner.webp",
    description:
      "A medida que el desarrollo de la ciudad humana invade el hábitat de bosques y praderas de la población de mapaches, éstos se enfrentan a la posibilidad real de extinguirse. En respuesta, los mapaches emprenden una lucha desesperada para detener la construcción y preservar su hogar.",
    director: "Isao Takahata",
    release_date: "1994",
    running_time: "119",
    rt_score: "78",
    people: [],
    gallery: [
      "images/pom_poko/pom_poko_gallery1.jpeg",
      "images/pom_poko/pom_poko_gallery2.jpeg",
      "images/pom_poko/pom_poko_gallery3.jpeg",
    ],
  },
  {
    id: "7",
    title: "Susurros del corazón",
    original_title: "耳をすませば",
    image: "images/susurros_del_corazon/susurros_del_corazon.jpeg",
    image_banner:
      "images/susurros_del_corazon/susurros_del_corazon_banner.jpeg",
    description:
      "Shizuku vive una vida sencilla, dominada por su amor a las historias y a la escritura. Un día se da cuenta de que todos los libros de la biblioteca que tiene han sido sacados previamente por la misma persona: 'Seiji Amasawa'. Curiosa por saber quién es, Shizuku conoce a un chico de su edad que le resulta exasperante, pero descubre con sorpresa que es su 'Príncipe de los Libros'. A medida que se va acercando a él, se da cuenta de que sólo lee todos esos libros para acercarse a ella. El chico Seiji aspira a ser fabricante de violines en Italia, y son sus sueños los que hacen que Shizuku se dé cuenta de que no tiene un camino claro en su vida. Sabiendo que su fuerza reside en la escritura, pone a prueba su talento escribiendo una historia sobre Baron, una estatuilla de gato que pertenecía al abuelo de Seiji.",
    director: "Yoshifumi Kondō",
    release_date: "1995",
    running_time: "111",
    rt_score: "91",
    people: [],
    gallery: [
      "images/susurros_del_corazon/susurros_del_corazon_gallery1.jpeg",
      "images/susurros_del_corazon/susurros_del_corazon_gallery2.jpeg",
      "images/susurros_del_corazon/susurros_del_corazon_gallery3.webp",
    ],
  },
  {
    id: "8",
    title: "La princesa Mononoke",
    original_title: "もののけ姫",
    image: "images/princesa_mononoke/princesa_mononoke.jpeg",
    image_banner: "images/princesa_mononoke/princesa_mononoke_banner.jpeg",
    description:
      "Ashitaka, un príncipe de la desaparecida tribu Ainu, es maldecido por un dios jabalí endemoniado y debe viajar al oeste para encontrar una cura. En el camino, se encuentra con San, una joven humana que lucha por proteger el bosque, y con Lady Eboshi, que intenta destruirlo. Ashitaka debe encontrar la manera de equilibrar este conflicto.",
    director: "Hayao Miyazaki",
    release_date: "1997",
    running_time: "134",
    rt_score: "92",
    people: [
      "Ashitaka",
      "San",
      "Yakul",
      "Shishigami",
      "Moro",
      "Eboshi",
      "Jigo",
      "Kohroku",
      "Gonza",
      "Hii-sama",
    ],
    gallery: [
      "images/princesa_mononoke/princesa_mononoke_gallery1.png",
      "images/princesa_mononoke/princesa_mononoke_gallery2.jpeg",
      "images/princesa_mononoke/princesa_mononoke_gallery3.jpeg",
    ],
  },
  {
    id: "9",
    title: "Mis vecinos los Yamada",
    original_title: "ホーホケキョ となりの山田くん",
    image: "images/mis_vecinos_los_yamada/mis_vecinos_los_yamada.jpeg",
    image_banner:
      "images/mis_vecinos_los_yamada/mis_vecinos_los_yamada_banner.webp",
    description:
      "Los Yamada son una típica familia japonesa de clase media en el Tokio urbano y esta película nos muestra una variedad de episodios de sus vidas. Con historias que van de lo humorístico a lo desgarrador, vemos a esta familia enfrentarse a los pequeños conflictos, problemas y alegrías de la vida a su manera.",
    director: "Isao Takahata",
    release_date: "1999",
    running_time: "104",
    rt_score: "75",
    people: [],
    gallery: [
      "images/mis_vecinos_los_yamada/mis_vecinos_los_yamada_gallery1.jpeg",
      "images/mis_vecinos_los_yamada/mis_vecinos_los_yamada_gallery2.jpeg",
      "images/mis_vecinos_los_yamada/mis_vecinos_los_yamada_gallery3.jpeg",
    ],
  },
  {
    id: "10",
    title: "El viaje de Chihiro",
    original_title: "千と千尋の神隠し",
    image: "images/el_viaje_de_chihiro/el_viaje_de_chihiro.jpeg",
    image_banner: "images/el_viaje_de_chihiro/el_viaje_de_chihiro_banner.jpeg",
    description:
      "El viaje de Chihiro es una película de animación japonesa ganadora de un Oscar que trata sobre una niña de diez años que se aleja de sus padres por un camino que lleva a un mundo gobernado por extraños e inusuales animales con aspecto de monstruos. Sus padres han sido transformados en cerdos junto con otros dentro de una casa de baños llena de estas criaturas. ¿Llegará a ver el mundo como era antes?",
    director: "Hayao Miyazaki",
    release_date: "2001",
    running_time: "124",
    rt_score: "97",
    people: ["Chihiro Ogino", "Haku"],
    gallery: [
      "images/el_viaje_de_chihiro/el_viaje_de_chihiro_gallery1.webp",
      "images/el_viaje_de_chihiro/el_viaje_de_chihiro_gallery2.webp",
      "images/el_viaje_de_chihiro/el_viaje_de_chihiro_gallery3.jpeg",
    ],
  },
  {
    id: "11",
    title: "El regreso del gato",
    original_title: "猫の恩返し",
    image: "images/el_regreso_del_gato/el_regreso_del_gato.jpeg",
    image_banner: "images/el_regreso_del_gato/el_regreso_del_gato_banner.jpeg",
    description:
      "Haru, una colegiala aburrida de su rutina ordinaria, salva la vida de un gato insólito y, de repente, su mundo se transforma más allá de lo que jamás imaginó. El Rey de los Gatos recompensa su buena acción con una avalancha de regalos, ¡incluida una propuesta de matrimonio muy impactante para su hijo! Haru se embarca en un inesperado viaje al Reino de los Gatos, donde sus ojos se abren a un mundo completamente distinto.",
    director: "Hiroyuki Morita",
    release_date: "2002",
    running_time: "75",
    rt_score: "89",
    people: [],
    gallery: [
      "images/el_regreso_del_gato/el_regreso_del_gato_gallery1.jpeg",
      "images/el_regreso_del_gato/el_regreso_del_gato_gallery2.jpeg",
      "images/el_regreso_del_gato/el_regreso_del_gato_gallery3.jpeg",
    ],
  },
  {
    id: "12",
    title: "El increíble castillo vagabundo",
    original_title: "ハウルの動く城",
    image:
      "images/el_increible_castillo_vagabundo/el_increible_castillo_vagabundo.jpeg",
    image_banner:
      "images/el_increible_castillo_vagabundo/el_increible_castillo_vagabundo_banner.jpeg",
    description:
      "Cuando Sophie, una joven tímida, es maldecida con un cuerpo viejo por una bruja rencorosa, su única posibilidad de romper el hechizo reside en un joven mago autocomplaciente pero inseguro y en sus compañeros de viaje a pie.",
    director: "Hayao Miyazaki",
    release_date: "2004",
    running_time: "119",
    rt_score: "87",
    people: [],
    gallery: [
      "images/el_increible_castillo_vagabundo/el_increible_castillo_vagabundo_gallery1.jpeg",
      "images/el_increible_castillo_vagabundo/el_increible_castillo_vagabundo_gallery2.webp",
      "images/el_increible_castillo_vagabundo/el_increible_castillo_vagabundo_gallery3.jpeg",
    ],
  },
  {
    id: "13",
    title: "Cuentos de Terramar",
    original_title: "ゲド戦記",
    image: "images/cuentos_de_terramar/cuentos_de_terramar.jpeg",
    image_banner: "images/cuentos_de_terramar/cuentos_de_terramar_banner.png",
    description:
      "Algo extraño ha llegado a la tierra. El reino se está deteriorando. La gente está empezando a actuar de forma extraña... Lo que es aún más extraño es que la gente está empezando a ver dragones, que no deberían entrar en el mundo de los humanos. Debido a todos estos extraños acontecimientos, Ged, un mago errante, investiga la causa. Durante su viaje, conoce al príncipe Arren, un joven adolescente angustiado. Aunque Arren puede parecer un joven adolescente tímido, tiene un severo lado oscuro, que le otorga fuerza, odio, despiadado y no tiene piedad, especialmente cuando se trata de proteger a Teru. Para la bruja Kumo esta es una oportunidad perfecta. Puede utilizar los 'miedos' del chico contra el mismo que le ayudaría, Ged.",
    director: "Gorō Miyazaki",
    release_date: "2006",
    running_time: "116",
    rt_score: "41",
    people: [],
    gallery: [
      "images/cuentos_de_terramar/cuentos_de_terramar_gallery1.jpeg",
      "images/cuentos_de_terramar/cuentos_de_terramar_gallery2.webp",
      "images/cuentos_de_terramar/cuentos_de_terramar_gallery3.jpeg",
    ],
  },
  {
    id: "14",
    title: "Ponyo y el secreto de la sirenita",
    original_title: "崖の上のポニョ",
    image:
      "images/ponyo_y_el_secreto_de_la_sirenita/ponyo_y_el_secreto_de_la_sirenita.jpeg",
    image_banner:
      "images/ponyo_y_el_secreto_de_la_sirenita/ponyo_y_el_secreto_de_la_sirenita_banner.jpeg",
    description:
      "Hijo de un marinero, Sosuke, de 5 años, vive una vida tranquila en un acantilado junto al mar con su madre Lisa. Un fatídico día, encuentra un precioso pez de colores atrapado en una botella en la playa y, al rescatarlo, le pone el nombre de Ponyo. Pero no es un pez dorado cualquiera. Hija de un magistral mago y de una diosa del mar, Ponyo utiliza la magia de su padre para transformarse en una joven y rápidamente se enamora de Sosuke, pero el uso de tan poderosa hechicería provoca un peligroso desequilibrio en el mundo. Mientras la luna se acerca cada vez más a la tierra y el padre de Ponyo envía las poderosas olas del océano a buscar a su hija, los dos niños se embarcan en la aventura de su vida para salvar el mundo y cumplir los sueños de Ponyo de convertirse en humana.",
    director: "Hayao Miyazaki",
    release_date: "2008",
    running_time: "100",
    rt_score: "92",
    people: [],
    gallery: [
      "images/ponyo_y_el_secreto_de_la_sirenita/ponyo_y_el_secreto_de_la_sirenita_gallery1.jpeg",
      "images/ponyo_y_el_secreto_de_la_sirenita/ponyo_y_el_secreto_de_la_sirenita_gallery2.jpeg",
      "images/ponyo_y_el_secreto_de_la_sirenita/ponyo_y_el_secreto_de_la_sirenita_gallery3.webp",
    ],
  },
  {
    id: "15",
    title: "El mundo secreto de Arriety",
    original_title: "借りぐらしのアリエッティ",
    image:
      "images/el_mundo_secreto_de_arriety/el_mundo_secreto_de_arriety.jpeg",
    image_banner:
      "images/el_mundo_secreto_de_arriety/el_mundo_secreto_de_arriety_banner.jpeg",
    description:
      "Arrietty, de 14 años, y el resto de la familia del Reloj viven en un pacífico anonimato mientras construyen su propio hogar con objetos 'prestados' por los habitantes humanos de la casa. Sin embargo, la vida cambia para los Relojes cuando un niño humano descubre a Arrietty.",
    director: "Hiromasa Yonebayashi",
    release_date: "2010",
    running_time: "94",
    rt_score: "95",
    people: [],
    gallery: [
      "images/el_mundo_secreto_de_arriety/el_mundo_secreto_de_arriety_gallery1.jpeg",
      "images/el_mundo_secreto_de_arriety/el_mundo_secreto_de_arriety_gallery2.jpeg",
      "images/el_mundo_secreto_de_arriety/el_mundo_secreto_de_arriety_gallery3.jpeg",
    ],
  },
  {
    id: "16",
    title: "La colina de las amapolas",
    original_title: "コクリコ坂から",
    image: "images/la_colina_de_las_amapolas/la_colina_de_las_amapolas.jpeg",
    image_banner:
      "images/la_colina_de_las_amapolas/la_colina_de_las_amapolas_banner.jpeg",
    description:
      "La historia se sitúa en 1963 en Yokohama. La mansión Kokuriko se encuentra en una colina con vistas al puerto. Una chica de 16 años, Umi, vive en esa casa. Todas las mañanas iza una bandera de señalización frente al mar. La bandera significa 'Rezo por un viaje seguro'. Un chico de 17 años, Shun, siempre ve esta bandera desde el mar cuando va en un remolcador a la escuela. Poco a poco, la pareja se siente atraída por el otro, pero se enfrentan a una prueba repentina. Aun así, siguen adelante sin huir de enfrentarse a las dificultades de la realidad.",
    director: "Gorō Miyazaki",
    release_date: "2011",
    running_time: "91",
    rt_score: "83",
    people: [],
    gallery: [
      "images/la_colina_de_las_amapolas/la_colina_de_las_amapolas_gallery1.webp",
      "images/la_colina_de_las_amapolas/la_colina_de_las_amapolas_gallery2.jpeg",
      "images/la_colina_de_las_amapolas/la_colina_de_las_amapolas_gallery3.jpeg",
    ],
  },
  {
    id: "17",
    title: "El viento se levanta",
    original_title: "風立ちぬ",
    image: "images/el_viento_se_levanta/el_viento_se_levanta.jpeg",
    image_banner:
      "images/el_viento_se_levanta/el_viento_se_levanta_banner.jpeg",
    description:
      "El ingeniero japonés Jiro Horikoshi, cuya carrera incluye la creación del avión de combate A-6M de la Segunda Guerra Mundial, se inspira en su amor por el vuelo.",
    director: "Hayao Miyazaki",
    release_date: "2013",
    running_time: "126",
    rt_score: "89",
    people: [],
    gallery: [
      "images/el_viento_se_levanta/el_viento_se_levanta_gallery1.jpeg",
      "images/el_viento_se_levanta/el_viento_se_levanta_gallery2.jpeg",
      "images/el_viento_se_levanta/el_viento_se_levanta_gallery3.jpeg",
    ],
  },
  {
    id: "18",
    title: "El cuento de la princesa Kaguya",
    original_title: "かぐや姫の物語",
    image:
      "images/el_cuento_de_la_princesa_kaguya/el_cuento_de_la_princesa_kaguya.jpeg",
    image_banner:
      "images/el_cuento_de_la_princesa_kaguya/el_cuento_de_la_princesa_kaguya_banner.jpeg",
    description:
      "Un cortador de bambú llamado Sanuki no Miyatsuko descubre una niña en miniatura dentro de un brote de bambú brillante. Creyendo que es una presencia divina, él y su esposa deciden criarla como propia, llamándola 'Princesa'.",
    director: "Isao Takahata",
    release_date: "2013",
    running_time: "137",
    rt_score: "100",
    people: [],
    gallery: [
      "images/el_cuento_de_la_princesa_kaguya/el_cuento_de_la_princesa_kaguya_gallery1.jpeg",
      "images/el_cuento_de_la_princesa_kaguya/el_cuento_de_la_princesa_kaguya_gallery2.jpeg",
      "images/el_cuento_de_la_princesa_kaguya/el_cuento_de_la_princesa_kaguya_gallery3.jpeg",
    ],
  },
  {
    id: "19",
    title: "El recuerdo de Marnie",
    original_title: "思い出のマーニー",
    image: "images/el_recuerdo_de_marnie/el_recuerdo_de_marnie.jpeg",
    image_banner:
      "images/el_recuerdo_de_marnie/el_recuerdo_de_marnie_banner.jpeg",
    description:
      "La película sigue a Anna Sasaki, que vive con sus parientes en la ciudad costera. Anna se encuentra con una mansión abandonada cercana, donde conoce a Marnie, una misteriosa chica que le pide que prometa ocultar sus secretos a todo el mundo. A medida que avanza el verano, Anna pasa más tiempo con Marnie y, finalmente, Anna descubre la verdad sobre su familia y la acogida.",
    director: "Hiromasa Yonebayashi",
    release_date: "2014",
    running_time: "103",
    rt_score: "92",
    people: [],
    gallery: [
      "images/el_recuerdo_de_marnie/el_recuerdo_de_marnie_gallery1.jpeg",
      "images/el_recuerdo_de_marnie/el_recuerdo_de_marnie_gallery2.jpeg",
      "images/el_recuerdo_de_marnie/el_recuerdo_de_marnie_gallery3.jpeg",
    ],
  },
  {
    id: "20",
    title: "La tortuga roja",
    original_title: "レッドタートル ある島の物語",
    image: "images/la_tortuga_roja/la_tortuga_roja.jpeg",
    image_banner: "images/la_tortuga_roja/la_tortuga_roja_banner.jpeg",
    description:
      "Un hombre a la deriva por una tormenta se despierta en una playa. Descubre que se encuentra en una isla desierta con abundante agua dulce, fruta y un denso bosque de bambú. Construye una balsa de bambú e intenta navegar, pero su balsa es destruida por un monstruo invisible en el mar, lo que le obliga a volver a la isla. Lo intenta de nuevo con otra balsa más grande, pero la criatura vuelve a frustrarlo. Un tercer intento termina de nuevo con la balsa destruida, pero esta vez se enfrenta a una tortuga roja gigante, que le mira fijamente, y le obliga a volver a la isla.",
    director: "Michaël Dudok de Wit",
    release_date: "2016",
    running_time: "80",
    rt_score: "93",
    people: [],
    gallery: [
      "images/la_tortuga_roja/la_tortuga_roja_gallery1.jpeg",
      "images/la_tortuga_roja/la_tortuga_roja_gallery2.webp",
      "images/la_tortuga_roja/la_tortuga_roja_gallery3.jpeg",
    ],
  },
  {
    id: "21",
    title: "Earwig y la bruja",
    original_title: "アーヤと魔女",
    image: "images/earwig_y_la_bruja/earwig_y_la_bruja.jpeg",
    image_banner: "images/earwig_y_la_bruja/earwig_y_la_bruja_banner.webp",
    description:
      "Una niña huérfana, Earwig, es adoptada por una bruja y llega a una casa espeluznante llena de misterio y magia.",
    director: "Gorō Miyazaki",
    release_date: "2021",
    running_time: "82",
    rt_score: "30",
    people: [],
    gallery: [
      "images/earwig_y_la_bruja/earwig_y_la_bruja_gallery1.jpeg",
      "images/earwig_y_la_bruja/earwig_y_la_bruja_gallery2.png",
      "images/earwig_y_la_bruja/earwig_y_la_bruja_gallery3.webp",
    ],
  },
];

const dataMusic = shuffle([
  {
    title: "El viaje de Chihiro",
    original_title: "千と千尋の神隠し",
    audio: "music/el_viaje_de_chihiro_soundtrack.mp3",
    background: "music/backgrounds/el_viaje_de_chihiro_music.webp",
  },
  {
    title: "Mi vecino Totoro",
    original_title: "となりのトトロ",
    audio: "music/mi_vecino_totoro_soundtrack.mp3",
    background: "music/backgrounds/mi_vecino_totoro_music.webp",
  },
  {
    title: "Princesa Mononoke",
    original_title: "もののけ姫",
    audio: "music/princesa_mononoke_soundtrack.mp3",
    background: "music/backgrounds/princesa_mononoke_music.gif",
  },
  {
    title: "El castillo en el cielo",
    original_title: "天空の城ラピュタ",
    audio: "music/el_castillo_en_el_cielo_soundtrack.mp3",
    background: "music/backgrounds/el_castillo_en_el_cielo_music.gif",
  },
]);

const slider = shuffle([
  "images/landscape1.png",
  "images/landscape2.jpeg",
  "images/landscape3.jpeg",
  "images/landscape4.jpeg",
  "images/landscape5.jpeg",
  "images/landscape6.jpeg",
  "images/landscape7.jpeg",
]);

export { data, dataMusic, slider };
