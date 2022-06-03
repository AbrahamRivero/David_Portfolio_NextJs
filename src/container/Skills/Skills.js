import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import styles from '../../../styles/Skills.module.scss'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'

const Skills = () => {
	/* const [experiences, setExperiences] = useState([]) */
	const [skills, setSkills] = useState([])
	/* const [workExperiences, setWorkExperiences] = useState([]) */

	const isEnglishSelected = useSelector(state => state.language.isEnglish)

	useEffect(() => {
		const query = '*[_type == "experiences"]'
		const skillsQuery = '*[_type == "skills"]'
		const workExperiencesQuery = '*[_type == "workExperience"]'

		/* client.fetch(query).then(data => {
			setExperiences(data)
		}) */

		client.fetch(skillsQuery).then(data => {
			setSkills(data)
		})

	/* 	client.fetch(workExperiencesQuery).then(data => {
			setWorkExperiences(data)
		}) */
	}, [])

	return (
		<>
			{isEnglishSelected ? (
				<h2 className="head-text">Skills</h2>
			) : (
				<h2 className="head-text">Habilidades</h2>
			)}

			<div className={`${styles.app__skills_container}`}>
				<Grid item display="flex" lg={7}>
					<motion.div className={`${styles.app__skills_list}`}>
						{skills.map(skill => (
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className={`${styles.app__skills_item} app__flex`}
								key={skill.name}
							>
								<div
									className="app__flex"
									style={{ backgroundColor: skill.bgColor }}
								>
									<img src={urlFor(skill.icon)} alt={skill.name} />
								</div>
								<p className="p-text-experiences">{skill.name}</p>
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
