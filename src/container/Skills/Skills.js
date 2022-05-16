import React, { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import styles from '../../../styles/Skills.module.scss'
import { useSelector } from 'react-redux'

const Skills = () => {
	const [experiences, setExperiences] = useState([])
	const [skills, setSkills] = useState([])
	const [workExperiences, setWorkExperiences] = useState([])

	const isEnglishSelected = useSelector(state => state.language.isEnglish)

	useEffect(() => {
		const query = '*[_type == "experiences"]'
		const skillsQuery = '*[_type == "skills"]'
		const workExperiencesQuery = '*[_type == "workExperience"]'

		client.fetch(query).then(data => {
			setExperiences(data)
		})

		client.fetch(skillsQuery).then(data => {
			setSkills(data)
		})

		client.fetch(workExperiencesQuery).then(data => {
			setWorkExperiences(data)
		})
	}, [])

	return (
		<>
			{isEnglishSelected ? (
				<h2 className="head-text">Skills & Experiences</h2>
			) : (
				<h2 className="head-text">Habilidades y Experiencias</h2>
			)}

			<div className={`${styles.app__skills_container}`}>
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
				<div className={`${styles.app__skills_exp}`}>
					{experiences.map(experience => (
						<motion.div
							className={`${styles.app__skills_exp_item}`}
							key={experience.year}
						>
							<div className={`${styles.app__skills_exp_year}`}>
								<p className="bold-text-experiences">{experience.year}</p>
							</div>
							<motion.div className={`${styles.app__skills_exp_works}`}>
								{experience.works.map(work => (
									<Fragment key={work._ref}>
										{workExperiences
											.filter(
												workExperience => workExperience._id === work._ref
											)
											.map(workExperienceFiltered => (
												<Fragment key={workExperienceFiltered._id}>
													<motion.div
														whileInView={{ opacity: [0, 1] }}
														transition={{ duration: 0.5 }}
														className={`${styles.app__skills_exp_work}`}
														data-tip
														data-for={work.name}
														key={work._ref}
													>
														<h4 className="bold-text-experiences">
															{workExperienceFiltered.name}
														</h4>
														<p className="p-text-experiences">
															{workExperienceFiltered.company}
														</p>
													</motion.div>
													<ReactTooltip
														id={workExperienceFiltered.name}
														effect="solid"
														arrowColor="#fff"
														className={`${styles.skills_tooltip}`}
													>
														{workExperienceFiltered.desc}
													</ReactTooltip>
												</Fragment>
											))}
									</Fragment>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(Skills, `${styles.app__skills}`),
	'skills',
	'app__skillsBg'
)
