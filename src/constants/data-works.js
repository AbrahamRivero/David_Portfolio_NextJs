const timeNow = new Date()
export const works = [
	{
		title: 'About Me',
		titleEsp: 'About Me',
		description: `This is my first serious approach to the world of web design while I was taking the Web Design Postgraduate course at ESAT.
        This first project consisted of an About Me, a kind of digital cover letter. My idea, from the beginning, was to make a simple design that I could expand
        in the future with new information, new projects that I have been doing... It is the first draft of the web you are viewing right now.`,
		descriptionEsp: `Esta es mi primera aproximación seria al mundo del diseño web mientras cursaba el Postgrado de Diseño Web de la ESAT.
        Este primer proyecto consistía en un About Me, una especie de carta de presentación digital. Mi idea, desde el principio, era hacer un diseño sencillo
        que pudiese ampliar en el futuro con nueva información, nuevos proyectos que he ido realizando… Es el primer borrador de la web que estás visualizando en este momento.`,
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
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: 'Portfolio',
		titleEsp: 'Portfolio',
		description: `This was the final work done for the web design postgraduate course at ESAT.
        The goal of the project was to make our portfolio website using React or Wordpress.
        I chose to use Wordpress because I thought it would be more useful to learn how to use it.
        The idea I wanted to carry out with this project was a clean website, without distractions for the user, in which the only thing he could do was to keep scrolling down
        so that the only thing that could distract him were the images of several of the works he had been doing.`,
		descriptionEsp: `Este fue el trabajo final realizado para el postgrado de diseño web de la ESAT.
        El objetivo del proyecto era realizar nuestra web portfolio usando React o Wordpress.
        Yo opté por usar Wordpress ya que consideraba que me sería más útil aprender a manejarlo.
        La idea que quise llevar a cabo con este proyecto era la de una web limpia, sin distracciones para el usuario, en la que lo único
        que pudiese hacer es seguir bajando para que lo único que pudiese distraerlo fuesen las imágenes de varios de los trabajos que había ido realizando.
        `,
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
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: `Som L'Horta`,
		titleEsp: `Som L'Horta`,
		description: `This is the second project I did during the Postgraduate course at ESAT.
        The idea of the project was to make a responsive website for a product or service.
        I decided to borrow the project of some friends to make this website.
        Their project was "Som L'Horta" and consisted of a company that sells fruits and vegetables from the field to home, without intermediaries.
        I wanted the design of this website to be a clean design, not full of information, trying to find a sense of freshness and proximity to the user as these are some of the values that promoted in Som L'Horta.
        `,
		descriptionEsp: `Este es el segundo proyecto que realicé durante el Postgrado en la ESAT.
        La idea del proyecto era realizar una web responsive para un producto o servicio.
        Yo decidí tomar prestado el proyecto de unos amigos para realizar esta web.
        Su proyecto era “Som L’Horta” y consistía en una empresa de venta de frutas y verduras del campo a casa, prescindiendo de intermediarios.
        Quise que el diseño de esta web fuese un diseño limpio, que no estuviese lleno de información,
        tratando de buscar una sensación de frescura y proximidad hacia el usuario ya que son algunos de los valores que promovían en Som L’Horta.
        `,
		tag: 'UI/UX',
		tagEsp: 'UI/UX',
		tools: ['WordPress'],
		imagesUrls: [
			`/assets/UXUI/Som L'Horta PC 1.jpg`,
			`/assets/UXUI/Som L'Horta PC 2.jpg`,
			`/assets/UXUI/Som L'Horta PC 3.jpg`,
			`/assets/UXUI/Som L'Horta PC 4.jpg`,
			`/assets/UXUI/Som L'Horta movil 1.jpg`,
			`/assets/UXUI/Som L'Horta movil 2.jpg`,
			`/assets/UXUI/Som L'Horta movil 3.jpg`,
		],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: 'Defendants in the Procés',
		titleEsp: 'Acusados por el Procés',
		description: `This image shows the different accused for the Catalonia independence
        attempt. It shows the crimes of which each of those involved
        is accused and the penalties requested by the Prosecutor's Office.`,
		descriptionEsp: `Esta imagen muestra a los diferentes acusados por el intento
        de independencia de Cataluña. Muestra los delitos de los que se acusa
        a cada uno de los involucrados y las penas que solicita la Fiscalía.`,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [`/assets/INFOGRAFIAS/Acusados por el Procés.jpg`],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: 'Ebola Cell',
		titleEsp: 'Célula del Ébola',
		description: `This is an infographic made during the Ebola outbreak in 2014. This image shows the different parts of a virus cell and explains its different components.`,
		descriptionEsp: `Se trata de una infografía realizada durante el brote de Ébola en el año 2014. En esta imagen se muestran las diferentes partes de una célula del virus y se explican sus diferentes componentes.`,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [`/assets/INFOGRAFIAS/Célula Ébola.jpg`],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: 'The 7 Wonders of the Ancient World',
		titleEsp: 'Las 7 Maravillas del Mundo Moderno',
		description: `This map shows the location of the 7 wonders of the modern world and gives us an image of what they look like and a short paragraph telling us their history.`,
		descriptionEsp: `Este mapa muestra la localización de las 7 maravillas del mundo moderno y nos ofrece una imagen de cómo son y un pequeño párrafo que nos cuenta su historia.`,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [
			`/assets/INFOGRAFIAS/Maravillas  Mundo Moderno.jpg`,
			`/assets/INFOGRAFIAS/Maravillas Mundo Antiguo.jpg`,
		],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: '',
		titleEsp: '',
		description: ``,
		descriptionEsp: ``,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: '',
		titleEsp: '',
		description: ``,
		descriptionEsp: ``,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: '',
		titleEsp: '',
		description: ``,
		descriptionEsp: ``,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: '',
		titleEsp: '',
		description: ``,
		descriptionEsp: ``,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: '',
		titleEsp: '',
		description: ``,
		descriptionEsp: ``,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
	{
		title: '',
		titleEsp: '',
		description: ``,
		descriptionEsp: ``,
		tag: 'Infographic',
		tagEsp: 'Infografía',
		tools: ['WordPress'],
		imagesUrls: [],
		id: `${Math.random(1, 100)} + ${timeNow.getTime()}`,
	},
]
