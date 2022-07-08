import React, { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { AppWrap, MotionWrap } from '../../wrapper'
/* import { urlFor, client } from '../../client' */
import styled from '@mui/system/styled'

import styles from '../../../styles/About.module.scss'
import Box from '@mui/material/Box'
import TiangleSvg from './TiangleSvg'
import { abouts } from '../../constants/data'

const About = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Box bgcolor="#2e3141">
			<div className={styles.app__profiles}>
				{abouts.map((about, index) => (
					<Fragment key={about.title + index}>
						{index === 0 && (
							<TiangleSvg type="A" colorA="#4a4e65" colorB="#2e3141" />
						)}
						<StyledWrapper index={index}>
							{index % 2 === 0 ? (
								<Fragment>
									<img src={about.image} alt={about.title} className="image" />
									<Box width="500px">
										<h2
											className="bold-text"
											style={{ marginTop: 20, fontSize: '20px', color: '#fff' }}
										>
											{isEnglishSelected ? about.title : about.titleEsp}
										</h2>
										<hr />
										<p
											className="p-text"
											style={{
												marginTop: 10,
												fontSize: '15px',
												color: '#fff',
											}}
										>
											{isEnglishSelected
												? about.description
												: about.descriptionEsp}
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
											{isEnglishSelected ? about.title : about.titleEsp}
										</h2>
										<hr />
										<p
											className="p-text"
											style={{
												marginTop: 10,
												fontSize: '15px',
												color: '#fff',
											}}
										>
											{isEnglishSelected
												? about.description
												: about.descriptionEsp}
										</p>
									</Box>
									<img
										//src={urlFor(about.imgUrl)}
										src={about.image}
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
							<TiangleSvg
								type="A"
								colorA="#2f3347"
								colorB="#3e4258
"
							/>
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
			height: '170px',
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
