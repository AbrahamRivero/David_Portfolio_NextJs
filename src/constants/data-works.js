function generateUUID() {
	var d = new Date().getTime()
	var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
	})
	return uuid
}

export const works = [
	{
		title: 'About Me',
		titleEsp: 'About Me',
		description:
			'This is my first serious approach to the world of web design while I was taking the Web Design Postgraduate course at ESAT.\n        This first project consisted of an About Me, a kind of digital cover letter. My idea, from the beginning, was to make a simple design that I could expand\n        in the future with new information, new projects that I have been doing... It is the first draft of the web you are viewing right now.',
		descriptionEsp:
			'Esta es mi primera aproximación seria al mundo del diseño web mientras cursaba el Postgrado de Diseño Web de la ESAT.\n        Este primer proyecto consistía en un About Me, una especie de carta de presentación digital. Mi idea, desde el principio, era hacer un diseño sencillo\n        que pudiese ampliar en el futuro con nueva información, nuevos proyectos que he ido realizando… Es el primer borrador de la web que estás visualizando en este momento.',
		tag: 'UI/UX',
		tagEsp: 'UI/UX',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/UXUI/About-Me-PC-1.jpg',
			'/assets/UXUI/About-Me-PC-2.jpg',
			'/assets/UXUI/About-Me-PC-3.jpg',
			'/assets/UXUI/About-Me-movil-1.jpg',
			'/assets/UXUI/About-Me-movil-2.jpg',
		],
		id: 'af537c29563f44edaa85086c69bc5928',
	},
	{
		title: 'Portfolio',
		titleEsp: 'Portfolio',
		description:
			'This was the final work done for the web design postgraduate course at ESAT.\n        The goal of the project was to make our portfolio website using React or Wordpress.\n        I chose to use Wordpress because I thought it would be more useful to learn how to use it.\n        The idea I wanted to carry out with this project was a clean website, without distractions for the user, in which the only thing he could do was to keep scrolling down\n        so that the only thing that could distract him were the images of several of the works he had been doing.',
		descriptionEsp:
			'Este fue el trabajo final realizado para el postgrado de diseño web de la ESAT.\n        El objetivo del proyecto era realizar nuestra web portfolio usando React o Wordpress.\n        Yo opté por usar Wordpress ya que consideraba que me sería más útil aprender a manejarlo.\n        La idea que quise llevar a cabo con este proyecto era la de una web limpia, sin distracciones para el usuario, en la que lo único\n        que pudiese hacer es seguir bajando para que lo único que pudiese distraerlo fuesen las imágenes de varios de los trabajos que había ido realizando.\n        ',
		tag: 'UI/UX',
		tagEsp: 'UI/UX',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/UXUI/Portfolio PC 1.jpg',
			'/assets/UXUI/Portfolio PC 2.jpg',
			'/assets/UXUI/Portfolio PC 3.jpg',
			'/assets/UXUI/Portfolio movil 1.jpg',
			'/assets/UXUI/Portfolio movil 2.jpg',
		],
		id: '0adb478693ab4f0c98c291708ebc403b',
	},
	{
		title: "Som L'Horta",
		titleEsp: "Som L'Horta",
		description:
			'This is the second project I did during the Postgraduate course at ESAT.\n        The idea of the project was to make a responsive website for a product or service.\n        I decided to borrow the project of some friends to make this website.\n        Their project was "Som L\'Horta" and consisted of a company that sells fruits and vegetables from the field to home, without intermediaries.\n        I wanted the design of this website to be a clean design, not full of information, trying to find a sense of freshness and proximity to the user as these are some of the values that promoted in Som L\'Horta.\n        ',
		descriptionEsp:
			'Este es el segundo proyecto que realicé durante el Postgrado en la ESAT.\n        La idea del proyecto era realizar una web responsive para un producto o servicio.\n        Yo decidí tomar prestado el proyecto de unos amigos para realizar esta web.\n        Su proyecto era “Som L’Horta” y consistía en una empresa de venta de frutas y verduras del campo a casa, prescindiendo de intermediarios.\n        Quise que el diseño de esta web fuese un diseño limpio, que no estuviese lleno de información,\n        tratando de buscar una sensación de frescura y proximidad hacia el usuario ya que son algunos de los valores que promovían en Som L’Horta.\n        ',
		tag: 'UI/UX',
		tagEsp: 'UI/UX',
		tools: ['WordPress'],
		imagesUrls: [
			"/assets/UXUI/Som L'Horta PC 1.jpg",
			"/assets/UXUI/Som L'Horta PC 2.jpg",
			"/assets/UXUI/Som L'Horta PC 3.jpg",
			"/assets/UXUI/Som L'Horta PC 4.jpg",
			"/assets/UXUI/Som L'Horta movil 1.jpg",
			"/assets/UXUI/Som L'Horta movil 2.jpg",
			"/assets/UXUI/Som L'Horta movil 3.jpg",
		],
		id: 'd7c3e58bd19a4127bdcb3d4d729330b0',
	},
	{
		title: 'Defendants in the Procés',
		titleEsp: 'Acusados por el Procés',
		description:
			"This image shows the different accused for the Catalonia independence\n        attempt. It shows the crimes of which each of those involved\n        is accused and the penalties requested by the Prosecutor's Office.",
		descriptionEsp:
			'Esta imagen muestra a los diferentes acusados por el intento\n        de independencia de Cataluña. Muestra los delitos de los que se acusa\n        a cada uno de los involucrados y las penas que solicita la Fiscalía.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: ['/assets/INFOGRAFIAS/Acusados por el Procés.jpg'],
		id: '88df2767e87a42bc81c704ab7a580b9c',
	},
	{
		title: 'Ebola Cell',
		titleEsp: 'Célula del Ébola',
		description:
			'This is an infographic made during the Ebola outbreak in 2014. This image shows the different parts of a virus cell and explains its different components.',
		descriptionEsp:
			'Se trata de una infografía realizada durante el brote de Ébola en el año 2014. En esta imagen se muestran las diferentes partes de una célula del virus y se explican sus diferentes componentes.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: ['/assets/INFOGRAFIAS/Célula Ébola.jpg'],
		id: '1b15d80581aa48b2834ac76bccf79a6d',
	},
	{
		title: 'The 7 Wonders of the Ancient World',
		titleEsp: 'Las 7 Maravillas del Mundo Moderno',
		description:
			'This map shows the location of the 7 wonders of the modern world and gives us an image of what they look like and a short paragraph telling us their history.',
		descriptionEsp:
			'Este mapa muestra la localización de las 7 maravillas del mundo moderno y nos ofrece una imagen de cómo son y un pequeño párrafo que nos cuenta su historia.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/INFOGRAFIAS/Maravillas  Mundo Moderno.jpg',
			'/assets/INFOGRAFIAS/Maravillas Mundo Antiguo.jpg',
		],
		id: 'f6b204a363cc47efb23d4b5dbdae1811',
	},
	{
		title: 'Marquez VS Dovizioso',
		titleEsp: 'Marquez VS Dovizioso',
		description:
			'This infographic shows the evolution of the fight between Márquez and Dovizioso. It shows us the data obtained by both riders throughout a whole MotoGP season.',
		descriptionEsp:
			'Esta infografía muestra la evolución de la lucha entre Márquez y Dovizioso. Nos muestra los datos obtenidos por ambos motoristas a lo largo de toda una temporada de MotoGP.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: ['/assets/INFOGRAFIAS/Marquez VS Dovizioso.jpg'],
		id: 'e6e2f4f1cebc44d38b8e43d95a1a00a5',
	},
	{
		title: 'Spread of viruses',
		titleEsp: 'Propagación de los virus',
		description:
			'This infographic shows the method of virus propagation. The idea for this image came about during the 2014 Ebola epidemic.',
		descriptionEsp:
			'Esta infografía muestra el método de propagación de los virus. La idea de esta imagen surgió durante la epidemia de Ébola del año 2014.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: ['/assets/INFOGRAFIAS/Propagación Ébola.jpg'],
		id: 'd0d641337693492e8ce3ff113de9d36d',
	},
	{
		title: 'Measles',
		titleEsp: 'El sarampión',
		description:
			'This infographic tries to explain in a clear way what measles is, its symptoms and interesting facts about the disease. This idea was born after the outbreak of this disease in Italy and Israel in 2018.',
		descriptionEsp:
			'Esta infografía trata de explicar de manera clara qué es el sarampión, sus síntomas y datos de interés relativos a la enfermedad. Esta idea nació tras el brote de esta enfermedad en Italia e Israel en el año 2018.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: ['/assets/INFOGRAFIAS/Sarampión.jpg'],
		id: 'f75811dfb7d244cca5d914ad5da33ca3',
	},
	{
		title: 'Blood types and donations',
		titleEsp: 'Tipos de sangre y las donaciones',
		description:
			'The first chart shows the basic composition of each of the major blood groups. Depending on the antigen and antibody it has (or not) it is classified in one way or another.\n\t\tThe second chart shows the relationship between the different types of blood to know to whom you can donate blood and from whom you can receive it.\n\t\t',
		descriptionEsp:
			'La primera tabla muestra la composición básica de cada uno de los principales grupos sanguíneos. Dependiendo del antígeno y el anticuerpo que tiene (o no) se clasifica de una manera u otra.\n\t\tLa segunda tabla muestra la relación entre los diferentes tipos de sangre para saber a quien se le puede donar sangre y de quien se puede recibir.\n\t\t',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/INFOGRAFIAS/Tabla 1 Sangre.jpg',
			'/assets/INFOGRAFIAS/Tabla 2 Sangre.jpg',
		],
		id: '8a2ef64092c44e93863d055b0099c576',
	},
	{
		title: 'Types of stars',
		titleEsp: 'Tipos de estrellas',
		description:
			'This infographic, designed for National Geographic magazine, tells us about the main classification of stars. It provides information about each type of star along with a comparison of sizes and their temperatures.',
		descriptionEsp:
			'Esta infografía, diseñada para la revista National Geographic, nos habla sobre la principal clasificación de las estrellas. Ofrece información sobre cada tipo de estrellas junto a una comparativa de tamaños y sus temperaturas.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: ['/assets/INFOGRAFIAS/Tipos de estrellas.jpg'],
		id: 'c0d5e56b35c14873b6d7f4181b71a4bc',
	},
	{
		title: 'Valencia Basket in the 2017 Euroleague',
		titleEsp: 'Valencia Basket en la Euroliga de 2017',
		description:
			'This circle shows the score obtained by Valencia Basket in each of its games during the 2017 Euroleague basketball.',
		descriptionEsp:
			'Este círculo muestra la puntuación obtenida por el Valencia Basket en cada uno de sus partidos durante la Euroliga de baloncesto de 2017.',
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: ['/assets/INFOGRAFIAS/Valencia Basket.jpg'],
		id: 'bbedfeb48b81406a8217790b56abdcbd',
	},
	{
		title: 'Murcia Book Fair Posters',
		titleEsp: 'Carteles de la Feria del libro de Murcia',
		description:
			'Consists of posters for Social Networks (both post and stories) with the different signatures of authors who would go to the Murcia Book Fair with Editorial Sargantana and NPQ Editores.',
		descriptionEsp:
			'Consiste en los carteles para Redes Sociales (tanto post como stories) con las diferentes firmas de autores que irían a la Feria del libro de Murcia con la Editorial Sargantana y NPQ Editores.',
		tag: 'Graphic Design',
		tagEsp: 'Diseño Gráfico',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO GRÁFICO/FERIA MURCIA/Post_Murcia_NPQ.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA MURCIA/Post_Murcia_Sargantana.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA MURCIA/Stories_Murcia_NPQ.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA MURCIA/Stories_Murcia_Sargantana.jpg',
		],
		id: '29efe7c3adea41a886f440adc33c126a',
	},
	{
		title: 'Valencia Book Fair Posters',
		titleEsp: 'Carteles de la Feria del libro de Valencia',
		description:
			'It consists of a small sample of posters for Social Networks (both post and stories) with the different signatures of authors who would go to the Valencia Book Fair with Editorial Sargantana, NPQ Editores and Editorial Brief.',
		descriptionEsp:
			'Consiste en una pequeña muestra de los carteles para Redes Sociales (tanto post como stories) con las diferentes firmas de autores que irían a la Feria del libro de Valencia con la Editorial Sargantana, NPQ Editores y la Editorial Brief.',
		tag: 'Graphic Design',
		tagEsp: 'Diseño Gráfico',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO GRÁFICO/FERIA VALENCIA/Brief 14-24.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA VALENCIA/NPQ 16.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA VALENCIA/NPQ 23.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA VALENCIA/Sargantana 16 Tarde.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA VALENCIA/Sargantana 17 Tarde.jpg',
		],
		id: '4d7ea081e0084b2ba46a7d4c03e69e19',
	},
	{
		title: 'Vall dels Llibres Posters',
		titleEsp: 'Carteles de la Vall dels Llibres',
		description:
			'These are the posters for Social Networks (both post and stories) for the 1st edition of the Valldigna book fair. It shows the different authors of Editorial Sargantana who went to sign at this fair.',
		descriptionEsp:
			'Se trata de los carteles para Redes Sociales (tanto post como stories) para la 1ª edición de la feria del libro de la Valldigna. Muestra los diferentes autores de la Editorial Sargantana que fueron a firmar a esta Feria.',
		tag: 'Graphic Design',
		tagEsp: 'Diseño Gráfico',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO GRÁFICO/FERIA VALLDIGNA/Post_Valldigna.jpg',
			'/assets/DISEÑO GRÁFICO/FERIA VALLDIGNA/Stories_Valldigna.jpg',
		],
		id: '596a8742f45743b68eb25cd7e3e69a29',
	},
	{
		title: 'Catalog of activities for schools',
		titleEsp: 'Catálogo de actividades para colegios',
		description:
			'One of the projects I did for Grupo Editorial Sargantana. It is a catalog that explains different activities aimed at different grades of the school stage. It explains what the activity consists of and provides information such as the materials needed and the price.',
		descriptionEsp:
			'Uno de los proyectos que realicé para el Grupo Editorial Sargantana. Se trata de un catálogo en el que se explican diferentes actividades orientadas a distintos cursos de la etapa escolar. Se explica en qué consiste la actividad y se ofrecen datos como los materiales necesarios y el precio.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ACTIVIDADES/Catalogo actividades 1.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ACTIVIDADES/Catalogo actividades 2.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ACTIVIDADES/Catalogo actividades 3.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ACTIVIDADES/Catalogo actividades 4.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ACTIVIDADES/Catalogo actividades 5.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ACTIVIDADES/Catalogo actividades 6.jpg',
		],
		id: '2a1703df7e304130b8f076641acec3d7',
	},
	{
		title: 'Catalog for schools',
		titleEsp: 'Catálogo para colegios',
		description:
			'This was another of the projects I did for Grupo Editorial Sargantana. It is a catalog to sell books to schools. It shows the different titles of the publishing house that may be of interest to a school, classified by age.',
		descriptionEsp:
			'Este proyecto fue otro de los que realicé para el Grupo Editorial Sargantana. Se trata de un catálogo para vender libros a colegios. Se muestran los diferentes títulos de la editorial que pueden interesar a un colegio, clasificados por edades.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO EDITORIAL/CATÁLOGO COLEGIOS/Catálogo colegios 1.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO COLEGIOS/Catálogo colegios 2.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO COLEGIOS/Catálogo colegios 3.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO COLEGIOS/Catálogo colegios 4.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO COLEGIOS/Catálogo colegios 5.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO COLEGIOS/Catálogo colegios 6.jpg',
		],
		id: 'dedf19db34b14f6bb3ff8c3921b63e4a',
	},
	{
		title: 'Aleta Ediciones Catalog',
		titleEsp: 'Catálogo de Aleta Ediciones',
		description:
			'One of the projects I did for Grupo Editorial Sargantana. It is a catalog that shows the comics published by the publisher. First the novelties are shown and then the products in stock.',
		descriptionEsp:
			'Uno de los proyectos que realicé para el Grupo Editorial Sargantana. Se trata de un catálogo en el que se muestran los cómics publicados por la editorial. Primero se muestran las novedades y luego los productos en stock.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ALETA/Catálogo Aleta 1.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ALETA/Catálogo Aleta 2.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ALETA/Catálogo Aleta 3.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ALETA/Catálogo Aleta 4.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ALETA/Catálogo Aleta 5.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO ALETA/Catálogo Aleta 6.jpg',
		],
		id: '67d219b9edde4c4d8fc8d561d06f2a97',
	},
	{
		title: 'Grupo Editorial Sargantana Catalog',
		titleEsp: 'Catálogo Grupo Editorial Sargantana ',
		description:
			'This project is the general catalog for Grupo Editorial Sargantana. It includes the works of the 5 publishing houses that are included under the name of the group. It is designed in a modular way to be able to extract the catalog of each of the publishers and print it separately.',
		descriptionEsp:
			'Este proyecto es el catálogo general para el Grupo Editorial Sargantana. En él se incluyen las obras de las 5 editoriales que se engloban bajo el nombre del grupo. Está diseñado de forma modular para poder extraer el catálogo de cada una de las editoriales e imprimirlo por separado.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO EDITORIAL/CATÁLOGO GENERAL/Catálogo general 1.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO GENERAL/Catálogo general 2.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO GENERAL/Catálogo general 3.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO GENERAL/Catálogo general 4.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO GENERAL/Catálogo general 5.jpg',
			'/assets/DISEÑO EDITORIAL/CATÁLOGO GENERAL/Catálogo general 6.jpg',
		],
		id: '152e37d7bf114ee2b9bcc6e31b4b8aa4',
	},
	{
		title: 'Polvo de estrellas',
		titleEsp: 'Polvo de estrellas',
		description:
			'Publication created for my Final Degree Project (FDP). It consists of a supplement for the Levante-EMV newspaper of scientific and health journalism. The publication model was based entirely on the style of Levante-EMV.\n\t\tI decided to do this project as a TFG because of my interest in the world of publication design and science journalism. It was a good opportunity to bring together two of my passions.\n\t\t',
		descriptionEsp:
			'Publicación creada para mi Trabajo de Fin de Grado (TFG). Consiste en un suplemento para el periódico Levante-EMV de periodismo científico y sanitario. El modelo de publicación se basó enteramente en el estilo del Levante-EMV.\n\t\tDecidí hacer este proyecto como TFG debido a mi interés por el mundo del diseño de publicaciones y el periodismo científico. Fue una buena oportunidad para juntar dos de mis pasiones.\n\t\t',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO EDITORIAL/POLVO DE ESTRELLAS/1.jpg',
			'/assets/DISEÑO EDITORIAL/POLVO DE ESTRELLAS/2.jpg',
			'/assets/DISEÑO EDITORIAL/POLVO DE ESTRELLAS/3.jpg',
			'/assets/DISEÑO EDITORIAL/POLVO DE ESTRELLAS/4.jpg',
		],
		id: '68ae3bdc7838479fb35bbf5f83682e0d',
	},
	{
		title: '93 años de historia del Rotary Club de Valencia',
		titleEsp: '93 años de historia del Rotary Club de Valencia',
		description:
			'Book designed during my time working for Editorial Sargantana. It consists of two main parts: the first is the digitalization of the book 50 años de historia del Rotary Club de Valencia and the second is the update of that book with the relevant events in the history of the club until 2021.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Se compone de dos partes principales: la primera es la digitalización del libro 50 años del Rotary Club de Valencia y la segunda es la actualización de ese libro con los acontecimientos relevantes en la historia del club hasta llegar al año 2021.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: [
			'/assets/DISEÑO EDITORIAL/LIBROS/93 AÑOS DEL ROTARY CLUB DE VALENCIA.jpg',
		],
		id: '60f91e457b384193a6c055659a939a43',
	},
	{
		title: 'Albericontes 1',
		titleEsp: 'Albericontes 1',
		description:
			'Book designed during my time working for Editorial Sargantana. It consists of a compilation of stories written by primary school students from different schools in Alberic.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Consiste en una recopilación de historias escritas por alumnos de primaria de diferentes colegios de Alberic.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: ['/assets/DISEÑO EDITORIAL/LIBROS/ALBERICONTES.jpg'],
		id: 'feed396b61c142f5aa96155ea12e7155',
	},
	{
		title: 'Bajo la esfera de la indigencia',
		titleEsp: 'Bajo la esfera de la indigencia',
		description:
			'Book designed during my time working for Editorial Sargantana. This novel tells the story of a high school teacher who enlists in the Navy and ends up in poverty while traveling through France.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Esta novela nos relata la historia de un profesor de liceo que se alista en la Marina y acaba en la pobreza mientras recorre Francia.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress', 'Adobe InDesign','Adobe XD','Adobe XD','Adobe XD','Adobe XD','Adobe XD'],
		imagesUrls: [
			'/assets/DISEÑO EDITORIAL/LIBROS/BAJO LA ESFERA DE LA INDIGENCIA.jpg',
		],
		id: 'e4ea783076e749bfadefbbb4b80a6d73',
	},
	{
		title: 'Cronología local Ayora',
		titleEsp: 'Cronología local Ayora',
		description:
			'Book designed during my time working for Editorial Sargantana. It brings together different events that have taken place over several centuries of the history of the town of Ayora.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Agrupa diferentes sucesos acontecidos durante varios siglos de historia de la Villa de Ayora.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: ['/assets/DISEÑO EDITORIAL/LIBROS/CRONOLOGIA LOCAL AYORA.jpg'],
		id: '5603fb8c0e0c4af7933ba0600b8f853f',
	},
	{
		title: 'Cuenca en 50 acuarelas',
		titleEsp: 'Cuenca en 50 acuarelas',
		description:
			'The first book I designed during my time working for Editorial Sargantana. It consists of a collection of watercolors, designed by Antonio Ponce, which portray the city of Cuenca.',
		descriptionEsp:
			'El primer libro que diseñé durante mi etapa trabajando para la Editorial Sargantana. Consiste en una recopilación de acuarelas, diseñadas por Antonio Ponce, que retratan la ciudad de Cuenca.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: ['/assets/DISEÑO EDITORIAL/LIBROS/CUENCA EN 50 ACUARELAS.jpg'],
		id: 'd8cd051f255745d58f0ae931d76a99ea',
	},
	{
		title: 'Día y Noche',
		titleEsp: 'Día y Noche',
		description:
			'Book designed during my time working for Editorial Sargantana. Fantasy story written in which narrates the adventures of two gods, Día y Noche, and their fight against powerful enemies to save their world.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Historia de fantasía escrita en la que narra las aventuras de dos dioses, Día y Noche, y su lucha contra poderosos enemigos para salvar su mundo.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: ['/assets/DISEÑO EDITORIAL/LIBROS/DÍA Y NOCHE.jpg'],
		id: '8e58d14f6b06491982f69fdbfb624405',
	},
	{
		title: 'Gracias por leerme',
		titleEsp: 'Gracias por leerme',
		description:
			'Book designed during my time working for Editorial Sargantana. It tells the story of a girl who exchanges correspondence with a writer and shows us how their relationship evolves without meeting in person.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Cuenta la historia de una chica que intercambia correspondencia con un escritor y nos enseña cómo va evolucionando su relación sin conocerse en persona.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: ['/assets/DISEÑO EDITORIAL/LIBROS/GRACIAS POR LEERME.jpg'],
		id: 'c36f2dce012e479ea0420602e412c69c',
	},
	{
		title: 'La danza del pulpo',
		titleEsp: 'La danza del pulpo',
		description:
			'Book designed during my time working for Editorial Sargantana. It tells the story of an art appraiser who gets involved in the investigation of the murder of a friend of hers.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Cuenta la historia de una tasadora de arte que se ve envuelta en la investigación del asesinato de un amigo suyo.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: ['/assets/DISEÑO EDITORIAL/LIBROS/LA DANZA DEL PULPO.jpg'],
		id: '813920cfd25f4102aa2d3b8525582ab8',
	},
	{
		title: 'La obra maestra. Obertura.',
		titleEsp: 'La obra maestra. Obertura.',
		description:
			'Book designed during my time working for Editorial Sargantana. First part of a trilogy that places us in Madrid while we accompany the protagonist during the investigation of an attack.',
		descriptionEsp:
			'Libro diseñado durante mi etapa trabajando para la Editorial Sargantana. Primera parte de una trilogía que nos sitúa en Madrid mientras acompañamos al protagonista durante la investigación de un atentado.',
		tag: 'Editorial Design',
		tagEsp: 'Diseño Editorial',
		tools: ['WordPress'],
		imagesUrls: ['/assets/DISEÑO EDITORIAL/LIBROS/LA OBRA MAESTRA.jpg'],
		id: '8a46c72277564389b5a66795621c2c92',
	},
]
