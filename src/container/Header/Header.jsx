import React from 'react'
import Box from '@mui/material/Box'
import styled from '@mui/system/styled'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'

import styles from '../../../styles/Header.module.scss'

const Header = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Box className={`${styles.app__header} app__flex`}>
			<Box>
				<img src="/logo.png" width={200} height={120} />
			</Box>
			<h2 className="head-text">
				Hello, <span>I am David</span> <br />
				The <span>designer</span> you <span>need</span>
			</h2>
		</Box>
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
