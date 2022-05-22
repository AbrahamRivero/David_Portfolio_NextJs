import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import styled from '@mui/system/styled'

import styles from '../../../styles/About.module.scss'

const About = () => {
	const [abouts, setAbouts] = useState([])

	useEffect(() => {
		const query = '*[_type == "abouts"]'

		client.fetch(query).then(data => {
			setAbouts(data)
		})
	}, [])

	return (
		<>
			{/* className={styles.app__profile_item} */}
			<h2 className="head-text">
				I Know that <span>Good Design</span> <br />
				means <span>Good Business</span>
			</h2>
			<div className={styles.app__profiles}>
				{abouts.map((about, index) => (
					<StyledWrapper
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						key={about.title + index}
						index={index}
					>
						{index % 2 === 0 ? 'es par' : 'es impar'}
						<img
							src={urlFor(about.imgUrl)}
							alt={about.title}
							className="image"
						/>
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</StyledWrapper>
				))}
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(About, `${styles.app__about}`),
	'about',
	'app__aboutBg'
)

const StyledWrapper = styled(({ ...props }) => <motion.div {...props} />)(
	({ theme, index }) => ({
		width: '250px',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
		margin: '2rem',
		boxShadow: '0 0 0 1px #413f3f1a',
		borderRadius: '14px',
		padding: ' 1rem',
		backgroundColor: index % 2 == 0 ? '#e5e5e5' : '#413f3f1a',

		'& img': {
			width: '100%',
			height: '170px',
			borderRadius: '15px',
			objectFit: 'cover',
		},

		'& h2': {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
		},

		'& p': {
			overflowY: 'auto',
			height: '150px',
			padding: '5px',
			textAlign: 'center',
		},

		['@media(min-width:2000px)']: {
			width: '370px',
			margin: '2rem 4rem',

			'& img': {
				height: '320px',
			},
		},

		'& ::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0)',
		},

		'& ::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
			borderRadius: '15px',
		},
	})
)
