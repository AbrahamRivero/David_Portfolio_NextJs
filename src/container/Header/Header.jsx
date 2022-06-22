import { Fragment } from 'react'
import Box from '@mui/material/Box'
import styled from '@mui/system/styled'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'

import styles from '../../../styles/Header.module.scss'

const Header = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			<Box className={`${styles.app__header} app__flex`}>
				<Box>
					{isEnglishSelected ? (
						<img src="/assets/logoENG.png" width={400} height={240} />
					) : (
						<img src="/assets/logo.png" width={400} height={240} />
					)}
				</Box>
				{isEnglishSelected ? (
					<h2 className="head-text">
						Hello, <span>I am David</span> <br />
						The <span>designer</span> you <span>need</span>
					</h2>
				) : (
					<h2 className="head-text">
						Hola, <span>Soy David</span> <br />
						El <span>diseñador</span> que <span>necesitas</span>
					</h2>
				)}
			</Box>
		</Fragment>
	)
}

export default AppWrap(Header, 'home', 'home')

const StyledBox = styled(Box)(({ theme }) => ({
	['@media(max-width:1200px)']: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		width: 'max-content !important',

		'& .MuiTypography-h4': {
			fontSize: '1.75rem',
		},
		'& .MuiTypography-h5': {
			fontSize: '1.25rem',
		},
	},
}))

/* const LogoWrapper = styled(Box)(({ theme }) => ({
	cursor: 'pointer',
	[theme.breakpoints.down('lg')]: {
		flexGrow: 1,
	},
	'&& img': {
		position: 'relative',
		top: '5px',
		left: '-8px',
	},
})) */
