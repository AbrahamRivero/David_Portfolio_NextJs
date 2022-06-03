import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { AppWrap, MotionWrap } from '../../wrapper'
import Box from '@mui/material/Box'
import VerticalTimeLine from '../../components/others/VerticalTimeLine/VerticalTimeLine'

const Experiences = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			<Box display="flex" flexDirection="column">
				{isEnglishSelected ? (
					<h2 className="head-text">Experiences</h2>
				) : (
					<h2 className="head-text">Experiencias</h2>
				)}
				<VerticalTimeLine />
			</Box>
		</Fragment>
	)
}

export default AppWrap(MotionWrap(Experiences), 'experiences', 'app__aboutBg')
