import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import styles from '../../../styles/Work.module.scss'

const Work = () => {
	const [works, setWorks] = useState([])
	const [filterWork, setFilterWork] = useState([])
	const [activeFilter, setActiveFilter] = useState('All')
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

	useEffect(() => {
		const query = '*[_type == "works"]'

		client.fetch(query).then(data => {
			setWorks(data)
			setFilterWork(data)
		})
	}, [])

	const handleWorkFilter = item => {
		setActiveFilter(item)
		setAnimateCard([{ y: 100, opacity: 0 }])

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }])

			if (item === 'All') {
				setFilterWork(works)
			} else {
				setFilterWork(works.filter(work => work.tags.includes(item)))
			}
		}, 500)
	}

	return (
		<>
			<h2 className="head-text">
				My Creative <span>Portfolio</span> Section
			</h2>

			<div className={styles.app__work_filter}>
				{['Editorial Design', 'Infographic', 'Graphic Design', 'All'].map(
					(item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`${styles.app__work_filter_item} app__flex p-text ${
								activeFilter === item ? `${styles.item_active}` : ''
							}`}
						>
							{item}
						</div>
					)
				)}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={styles.app__work_portfolio}
			>
				{filterWork.map((work, index) => (
					<div
						className={`${styles.app__work_item} app__flex ${styles.app__flex_img}`}
						key={index}
					>
						<div className={`${styles.app__work_img} app__flex`}>
							<img src={urlFor(work.imgUrl)} alt={work.name} />
						</div>

						<div className={`${styles.app__work_content} app__flex`}>
							<h4 className="bold-text">{work.title}</h4>
							<p
								className={`p-text ${styles.work_description}`}
								style={{ marginTop: 10 }}
							>
								{work.description}
							</p>

							<div className={`${styles.app__work_tag} app__flex`}>
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	)
}

export default AppWrap(
	MotionWrap(Work, `${styles.app__works}`),
	'work',
	'app__workBg'
)
