import { Fragment, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'
import { AppWrap, MotionWrap } from '../../wrapper'
import Typography from '@mui/material/Typography'
import styles from '../../../styles/Work.module.scss'
import { works } from '../../constants/data-works'
import { Tooltip } from '@mui/material'
import styled from '@mui/system/styled'

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

			if (item === 'All') {
				setFilterWork(worksFetching)
			} else {
				setFilterWork(worksFetching.filter(work => work.tag.includes(item)))
				console.log(filterWork)
			}
		}, 500)
	}

	return (
		<Fragment>
			<h2 className="head-text">
				<span>My Portfolio</span>
			</h2>

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

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className={styles.app__work_portfolio}
			>
				{filterWork.map((work, index) => (
					<StyledTooltip
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
								{/* <h5 className="bold-text">{work.title}</h5>
							<p
								className={`p-text ${styles.work_description}`}
								style={{ marginTop: 10 }}
							>
								{work.description}
							</p> */}

								<div className={`${styles.app__work_tag} app__flex`}>
									<p className="p-text">{work.tag}</p>
								</div>
							</div>
						</div>
					</StyledTooltip>
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

const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	color: 'rgba(0, 0, 0, 0.87)',
	maxWidth: 220,
	fontSize: theme.typography.pxToRem(12),
}))
