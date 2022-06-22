import { useState, useEffect, Fragment } from 'react'
import { AppWrap, MotionWrap } from '../../../wrapper'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import styled from '@mui/system/styled'
import { motion } from 'framer-motion'
import { theme } from '../../../theme'
import { urlFor, client } from '../../../client'
import { TimeLineData } from '../../../constants/data'
import { useSelector } from 'react-redux'

const VerticalTimeLine = () => {
	/* const [experiences, setExperiences] = useState([])
	const [workExperiences, setWorkExperiences] = useState([])
	useEffect(() => {
		const query = '*[_type == "experiences"]'
		const workExperiencesQuery = '*[_type == "workExperience"]'

		client.fetch(query).then(data => {
			const array = data.sort((a, b) => a.initialYear - b.initialYear)
			setExperiences(array)
		})
		client.fetch(workExperiencesQuery).then(data => {
			setWorkExperiences(data)
		})
	}, []) */
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			<Timeline position="alternate">
				{TimeLineData.map(experience => (
					<Fragment key={experience.initialYear}>
						<TimelineItem>
							<TimelineOppositeContent
								sx={{ m: 'auto 0' }}
								align="right"
								variant="body2"
								color="text.secondary"
							>
								<Typography
									variant="h3"
									component="span"
									color={theme.palette.white}
								>
									{`${experience.initialYear} - ${experience.lastYear}`}
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineConnector />
								<TimelineDot>{/* <FastfoodIcon /> */}</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent
								display="flex"
								flexDirection="column"
								sx={{ py: '12px', px: 2 }}
							>
								{/* {experience.works.map(work => (
									
								))} */}
								<Fragment key={experience.initialYear}>
									{experience.workExperiences
										//.filter(workExperience => workExperience._id === work._ref)
										.map(workExperienceFiltered => (
											<ExperienceContainer
												whileInView={{ opacity: [0, 1] }}
												transition={{ duration: 0.5, type: 'spring' }}
												data-tip
												data-for={experience.id}
												key={workExperienceFiltered.id}
											>
												<Typography
													variant="h3"
													component="span"
													fontWeight={600}
												>
													{isEnglishSelected
														? workExperienceFiltered.ocupation
														: workExperienceFiltered.ocupacion}
												</Typography>
												<Typography variant="body1" component="span">
													{isEnglishSelected
														? workExperienceFiltered.companyEsp
														: workExperienceFiltered.company}
												</Typography>
											</ExperienceContainer>
										))}
								</Fragment>
							</TimelineContent>
						</TimelineItem>
					</Fragment>
				))}
			</Timeline>
		</Fragment>
	)
}

export default VerticalTimeLine

const ExperienceContainer = styled(motion.div)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(1),
	margin: theme.spacing(1),
	borderRadius: '13px',
	//backgroundColor: '#a09b9b33',
	backgroundColor: '#171430',
	color: theme.palette.white,
}))
