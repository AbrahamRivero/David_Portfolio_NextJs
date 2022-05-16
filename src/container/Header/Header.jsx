import React from 'react'

import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typed from 'react-typed'
import styled from '@mui/system/styled'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'

import styles from '../../../styles/Header.module.scss'

const Header = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<div className={`${styles.app__header} app__flex`}>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={styles.app__header_img}
			>
				<StyledBox className={styles.typedContainer}>
					<Grid container justify="center" justifyContent="center">
						<Avatar className={styles.avatar} alt="David Marí López" />
					</Grid>
					<Typography className={styles.title} variant="h4">
						{isEnglishSelected ? (
							<Typed strings={['Hello, I am David']} typeSpeed={40} />
						) : (
							<Typed strings={['Hola, Soy David']} typeSpeed={40} />
						)}
					</Typography>

					<Typography className={styles.subtitle} variant="h5">
						{isEnglishSelected ? (
							<Typed
								strings={[
									'Inphographic Designer',
									'Publications Designer',
									'Web Designer',
								]}
								typeSpeed={30}
								backSpeed={50}
								loop
							/>
						) : (
							<Typed
								strings={[
									'Diseñador de Infografías',
									'Diseñador de Publicaciones',
									'Diseñador Web',
								]}
								typeSpeed={30}
								backSpeed={50}
								loop
							/>
						)}
					</Typography>
				</StyledBox>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src="/assets/circle.svg"
					alt="profile_circle"
					className={styles.overlay_circle}
				/>
			</motion.div>
		</div>
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
