import { Fragment } from 'react'
import { abouts } from '../../constants/data-abouts'
import { useSelector } from 'react-redux'
import { StyledWrapper } from './AboutStyles'
import TiangleSvg from './TiangleSvg'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'

import styles from '../../../styles/About.module.scss'

const About = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Box bgcolor="#2e3141">
			<Box className={styles.app__profiles}>
				{abouts.map((about, index) => (
					<Fragment key={about.title + index}>
						{index === 0 && (
							<TiangleSvg type="A" colorA="#4a4e65" colorB="#2e3141" />
						)}
						<StyledWrapper index={index}>
							{index % 2 === 0 ? (
								<Fragment>
									<img src={about.image} alt={about.title} className="image" />
									<AboutTextContainer>
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
									</AboutTextContainer>
								</Fragment>
							) : (
								<Fragment>
									<AboutTextContainer>
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
									</AboutTextContainer>
									<img src={about.image} alt={about.title} className="image" />
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
							<TiangleSvg type="A" colorA="#2f3347" colorB="#3e4258" />
						)}
					</Fragment>
				))}
			</Box>
		</Box>
	)
}

export default About

const AboutTextContainer = styled(Box)(({ theme }) => ({
	width: '550px',
	['@media(max-width:768px)']: {
		width: '600px',
	},
}))
