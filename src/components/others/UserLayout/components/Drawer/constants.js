import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import BoltIcon from '@mui/icons-material/Bolt'
import ContactsIcon from '@mui/icons-material/Contacts'

export const navigationDrawerLinks = [
	{
		linkName: 'Home',
		linkNameEsp: 'Inicio',
		linkUrl: '/',
		icon: <HomeIcon />,
	},
	{
		linkName: 'Works',
		linkNameEsp: 'Proyectos',
		linkUrl: '/works',
		icon: <WorkIcon />,
	},
	{
		linkName: 'Experiences',
		linkNameEsp: 'Experiencias',
		linkUrl: 'experiences',
		icon: <AutoStoriesIcon />,
	},
]

export const navigationDrawerRefs = [
	{
		linkName: 'Skills',
		linkNameEsp: 'Habilidades',
		linkUrl: '#skills',
		icon: <BoltIcon />,
	},
	{
		linkName: 'Contact',
		linkNameEsp: 'Contacto',
		linkUrl: '#contact',
		icon: <ContactsIcon />,
	},
]
