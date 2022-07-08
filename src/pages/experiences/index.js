import { Fragment } from 'react'
import Page from '../../components/others/Page/Page'
import ExperiencesComponent from '../../container/Experiences/Experiences'
import Box from '@mui/material/Box'

const Experiences = () => (
	<Page pageTitle="Experiences">
		<Fragment>
			<Box marginTop={10}>
				<ExperiencesComponent />
			</Box>
		</Fragment>
	</Page>
)

export default Experiences
