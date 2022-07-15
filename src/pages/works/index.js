import { Fragment } from 'react'
import Page from '../../components/others/Page/Page'
import WorksComponent from '../../container/Work/Works'
import Box from '@mui/material/Box'

const Works = () => (
	<Page pageTitle="Works">
		<Fragment>
			<WorksComponent />
		</Fragment>
	</Page>
)

export default Works
