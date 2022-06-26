import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import styles from '../../../styles/Skills.module.scss'
import { useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import { skills } from '../../constants/data'

const Skills = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	/* const [skills, setSkills] = useState([])


	useEffect(() => {
		const skillsQuery = '*[_type == "skills"]'

		client.fetch(skillsQuery).then(data => {
			setSkills(data)
		})
	}, []) */

	return (
		<>
			{isEnglishSelected ? (
				<h2 className="head-text">
					<span>Skills</span>
				</h2>
			) : (
				<h2 className="head-text">
					<span>Habilidades</span>
				</h2>
			)}

			<div className={`${styles.app__skills_container}`}>
				<Grid item className={`${styles.app__skills_grid}`}>
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
				</Grid>
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(Skills, `${styles.app__skills}`),
	'skills',
	'app__skillsBg'
)
