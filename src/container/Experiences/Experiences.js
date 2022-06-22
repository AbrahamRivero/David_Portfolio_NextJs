import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { AppWrap, MotionWrap } from '../../wrapper'
import Box from '@mui/material/Box'
import VerticalTimeLine from '../../components/others/VerticalTimeLine/VerticalTimeLine'

import styles from '../../../styles/Experiences.module.scss'
const Experiences = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			<Box display="flex" flexDirection="column">
				{isEnglishSelected ? (
					<h2 className="head-text">
						<span>Experiences</span>
					</h2>
				) : (
					<h2 className="head-text">
						<span>Experiencias</span>
					</h2>
				)}
				<VerticalTimeLine />
			</Box>
		</Fragment>
	)
}

export default AppWrap(
	MotionWrap(Experiences, `${styles.app__experiences}`),
	'experiences',
	'app__aboutBg'
)
