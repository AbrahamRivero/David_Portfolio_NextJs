import { Fragment, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { AppWrap, MotionWrap } from '../../wrapper'
import { works } from '../../constants/data-works'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import styled from '@mui/system/styled'
import Link from 'next/link'

import styles from '../../../styles/Work.module.scss'

const Works = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	const [filterWork, setFilterWork] = useState([])
	const [activeFilter, setActiveFilter] = useState('Editorial Design')
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
	const [worksFetching, setWorks] = useState([])

	useEffect(() => {
		setWorks(works)
		setFilterWork(works.filter(work => work.tag.includes(activeFilter)))
	}, [])

	const handleWorkFilter = item => {
		setActiveFilter(item)
		setAnimateCard([{ y: 100, opacity: 0 }])

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }])

			if (item === 'All' || item === 'Todos') {
				setFilterWork(worksFetching)
			} else {
				{
					isEnglishSelected
						? setFilterWork(
								worksFetching.filter(work => work.tag.includes(item))
						  )
						: setFilterWork(
								worksFetching.filter(work => work.tagEsp.includes(item))
						  )
				}
			}
		}, 500)
	}

	return (
		<Fragment>
			<h2 className="head-text">
				<span>{isEnglishSelected ? 'My Portfolio' : 'Mi Portafolio'}</span>
			</h2>

			{isEnglishSelected ? (
				<div className={styles.app__work_filter}>
					{[
						'Editorial Design',
						'Infographic',
						'Graphic Design',
						'UI/UX',
						'All',
					].map((item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`${styles.app__work_filter_item} app__flex p-text ${
								activeFilter === item ? `${styles.item_active}` : ''
							}`}
						>
							{item}
						</div>
					))}
				</div>
			) : (
				<div className={styles.app__work_filter}>
					{[
						'Diseño Editorial',
						'Infografía',
						'Diseño Gráfico',
						'UI/UX',
						'Todos',
					].map((item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`${styles.app__work_filter_item} app__flex p-text ${
								activeFilter === item ? `${styles.item_active}` : ''
							}`}
						>
							{item}
						</div>
					))}
				</div>
			)}

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={styles.app__work_portfolio}
			>
				{filterWork.map((work, index) => (
					<Link href={`/works/${work.id}`} key={index}>
						<Tooltip
							title={
								<Fragment>
									<Typography color="inherit">
										{isEnglishSelected ? work.title : work.titleEsp}
									</Typography>
								</Fragment>
							}
							key={index}
						>
							<div
								className={`${styles.app__work_item} app__flex ${styles.app__flex_img}`}
								key={index}
							>
								<div className={`${styles.app__work_img} app__flex`}>
									<img src={work.imagesUrls[0]} alt={work.title} />
								</div>

								<div className={`${styles.app__work_content} app__flex`}>
									<div className={`${styles.app__work_tag} app__flex`}>
										<p className="p-text">
											{isEnglishSelected ? work.tag : work.tagEsp}
										</p>
									</div>
								</div>
							</div>
						</Tooltip>
					</Link>
				))}
			</motion.div>
		</Fragment>
	)
}

export default AppWrap(
	MotionWrap(Works, `${styles.app__works}`),
	'work',
	'app__workBg'
)
