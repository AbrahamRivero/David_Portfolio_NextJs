import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { useSelector } from 'react-redux'
import { skills } from '../../constants/data'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import styles from '../../../styles/Skills.module.scss'

const Skills = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)

	return (
		<>
			<Box bgcolor="#2f3347" flex={1} width="100%" flexDirection="column">
				{isEnglishSelected ? (
					<Box display="flex" flexDirection="column" alignItems="center">
						<h2 className="head-text">
							<span>Skills</span>
						</h2>
						<StyledTypography variant="body1" margin={2.5}>
							I've worked with a range a technologies in my career.
						</StyledTypography>
					</Box>
				) : (
					<Box display="flex" flexDirection="column" alignItems="center">
						<h2 className="head-text">
							<span>Habilidades</span>
						</h2>
						<StyledTypography variant="body1" margin={2.5}>
							He trabajado con un amplio rango de tecnologías en mi carrera.
						</StyledTypography>
					</Box>
				)}

				<Grid
					container
					spacing={1}
					className={`${styles.app__skills_container}`}
				>
					<StyledGridItem item xl={12}>
						<motion.div className={`${styles.app__skills_list}`}>
							{skills.map(skill => (
								<motion.div
									whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 0.5 }}
									className={`${styles.app__skills_item} app__flex`}
									key={skill.title}
								>
									<div
										className="app__flex"
										style={{ backgroundColor: skill.bgColor }}
									>
										<img src={skill.icon} alt={skill.title} />
									</div>
									<p className="p-text-experiences">{skill.title}</p>
								</motion.div>
							))}
						</motion.div>
					</StyledGridItem>
				</Grid>
			</Box>
		</>
	)
}

export default AppWrap(
	MotionWrap(Skills, `${styles.app__skills}`),
	'skills',
	'app__skillsBg'
)

const StyledGridItem = styled(Grid)(({ theme }) => ({
	['@media(min-width:2000px)']: {
		maxWidth: '90% !important',
	},
	['@media(max-width:1920px)']: {
		maxWidth: '65% !important',
	},
	['@media(min-width:1200px)']: {
		maxWidth: '80%',
	},
	['@media(min-width:900px)']: {
		maxWidth: '80%',
	},
	['@media(min-width:600px)']: {
		maxWidth: '80%',
	},
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
	color: theme.palette.white,
}))
