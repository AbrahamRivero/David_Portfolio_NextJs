import styled from '@mui/system/styled'
import { motion } from 'framer-motion'

export const StyledWrapper = styled(({ ...props }) => (
	<motion.div {...props} />
))(({ theme, index }) => ({
	margin: '-1px',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	display: 'flex',
	width: '100%',
	height: '400px',
	boxShadow: '0 0 0 1px #413f3f1a',
	padding: ' 1rem',
	backgroundColor: index % 2 == 0 ? '#4A4E65' : '#3e4258',

	'& img': {
		width: '300px',
		height: '300px',
		borderRadius: '50%',
		objectFit: 'cover',
	},

	'& h2': {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},

	'& p': {
		overflowY: 'auto',
		height: '170px',
		padding: '5px',
		textAlign: 'center',
	},
	'& ::-webkit-scrollbar-track': {
		boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0)',
	},

	'& ::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: '15px',
	},
}))
