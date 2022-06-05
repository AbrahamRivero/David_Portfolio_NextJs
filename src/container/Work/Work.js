import React, { Fragment } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import WorkCard from '../../components/others/WorkCard/WorkCard'
import {
	EDITORIALDESIGN_URL,
	GRAPHICDESIGN_URL,
	INFOGRAPHIC_URL,
	UI_UX_URL,
} from '../../constants/urls'

import styles from '../../../styles/Work.module.scss'
import { Box } from '@mui/material'

const Work = () => {
	return (
		<Fragment>
			<h2 className="head-text">
				My Creative <span>Portfolio</span> Section
			</h2>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-around"
				flexWrap="wrap"
				marginTop="30px"
			>
				<WorkCard
					imageUrl="/assets/Post_Valldigna.jpg"
					title="Diseño Gráfico"
					url={GRAPHICDESIGN_URL}
				/>
				<WorkCard
					imageUrl="/assets/Maravillas Mundo Antiguo.jpg"
					title="Infografías"
					url={INFOGRAPHIC_URL}
				/>
				<WorkCard
					imageUrl="/assets/3D EXTRA 2.jpg"
					title="Diseño Editorial"
					url={EDITORIALDESIGN_URL}
				/>
				<WorkCard
					imageUrl="/assets/Post_Valldigna.jpg"
					title="Bienvenido @Usuario"
					url={UI_UX_URL}
				/>
			</Box>
		</Fragment>
	)
}

export default AppWrap(
	MotionWrap(Work, `${styles.app__works}`),
	'work',
	'app__workBg'
)
