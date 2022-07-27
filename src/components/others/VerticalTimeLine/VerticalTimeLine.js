import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { theme } from '../../../theme'
import { useSelector } from 'react-redux'
import { TimeLineData } from '../../../constants/data-timeLine'
import styled from '@mui/system/styled'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'

const VerticalTimeLine = () => {
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
								<Fragment key={experience.initialYear}>
									{experience.workExperiences.map(workExperienceFiltered => (
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
											<Typography
												variant="body1"
												component="span"
												marginTop={1.5}
											>
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
	backgroundColor: '#372E47',
	color: theme.palette.white,
}))
