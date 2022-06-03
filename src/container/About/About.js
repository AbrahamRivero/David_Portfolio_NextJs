import React, { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import styled from '@mui/system/styled'

import styles from '../../../styles/About.module.scss'
import Box from '@mui/material/Box'
import TiangleSvg from './TiangleSvg'

const About = () => {
	const [abouts, setAbouts] = useState([])

	useEffect(() => {
		const query = '*[_type == "abouts"]'

		client.fetch(query).then(data => {
			const sortData = data.reverse()
			setAbouts(sortData)
		})
	}, [])

	return (
		<Box bgcolor="#3e4258">
			{/* className={styles.app__profile_item} */}
			<h2 className="head-text" style={{ paddingTop: '50px' }}>
				I Know that <span>Good Design</span> <br />
				means <span>Good Business</span>
			</h2>
			<div className={styles.app__profiles}>
				{abouts.map((about, index) => (
					<Fragment key={about.title + index}>
						{index === 0 && (
							<TiangleSvg type="A" colorA="#4a4e65" colorB="#3e4258" />
						)}
						<StyledWrapper index={index}>
							{index % 2 === 0 ? (
								<Fragment>
									<img
										src={urlFor(about.imgUrl)}
										alt={about.title}
										className="image"
									/>
									<Box width="500px">
										<h2
											className="bold-text"
											style={{ marginTop: 20, fontSize: '20px', color: '#fff' }}
										>
											{about.title}
										</h2>
										<hr />
										<p
											className="p-text"
											style={{ marginTop: 10, fontSize: '15px', color: '#fff' }}
										>
											{about.description}
										</p>
									</Box>
								</Fragment>
							) : (
								<Fragment>
									<Box width="500px">
										<h2
											className="bold-text"
											style={{
												marginTop: 20,
												fontSize: '20px',
												color: '#fff',
												textAlign: 'left',
											}}
										>
											{about.title}
										</h2>
										<hr />
										<p
											className="p-text"
											style={{ marginTop: 10, fontSize: '15px', color: '#fff' }}
										>
											{about.description}
										</p>
									</Box>
									<img
										src={urlFor(about.imgUrl)}
										alt={about.title}
										className="image"
									/>
								</Fragment>
							)}
						</StyledWrapper>
						{index !== abouts.length - 1 && index % 2 !== 0 && (
							<TiangleSvg type="A" colorA="#4a4e65" colorB="#3e4258" />
						)}
						{index !== abouts.length - 1 && index % 2 === 0 && (
							<TiangleSvg type="B" colorA="#3e4258" colorB="#4a4e65" />
						)}
						{index === abouts.length - 1 && (
							<TiangleSvg type="B" colorA="#1e233d" colorB="#4a4e65" />
						)}
					</Fragment>
				))}
			</div>
		</Box>
	)
}

export default About

const StyledWrapper = styled(({ ...props }) => <motion.div {...props} />)(
	({ theme, index }) => ({
		margin: '-1px',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		display: 'flex',
		width: '100%',
		height: '400px',
		boxShadow: '0 0 0 1px #413f3f1a',
		padding: ' 1rem',
		backgroundColor: index % 2 == 0 ? '#4A4E65' : '#3e4258',

		'& img': {
			width: '300px',
			height: '300px',
			borderRadius: '50%',
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

		/* 	['@media(min-width:2000px)']: {
			width: '370px',
			margin: '2rem 4rem',

			'& img': {
				height: '320px',
			},
		}, */

		'& ::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0)',
		},

		'& ::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
			borderRadius: '15px',
		},
	})
)
