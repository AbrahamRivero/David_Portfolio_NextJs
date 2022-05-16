import { colors } from '@mui/material'

const white = '#FFFFFF'
const black = '#000000'

const palette = {
	black,
	white,
	primary: {
		contrastText: white,
		dark: '#0ebedf',
		main: '#0ebedf',
		light: '#0ebedf',
	},
	secondary: {
		contrastText: white,
		dark: '#0e55df',
		main: '#0e55df',
		light: '#0e55df',
	},
	success: {
		contrastText: white,
		dark: colors.green[900],
		main: colors.green[600],
		light: colors.green[400],
	},
	info: {
		contrastText: white,
		dark: colors.blue[900],
		main: colors.blue[600],
		light: colors.blue[400],
	},
	warning: {
		contrastText: white,
		dark: colors.orange[900],
		main: colors.orange[600],
		light: colors.orange[400],
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400],
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		light: colors.blueGrey[500],
		link: colors.blue[600],
	},
	background: {
		default: '#F4F6F8',
		paper: white,
		avatar: '#F4F6F8',
	},
	icon: colors.blueGrey[600],
	divider: colors.grey[300],
	hover: 'rgb(245, 245, 245)',
}

export default palette
