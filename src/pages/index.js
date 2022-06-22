import Page from '../components/others/Page/Page'
import Box from '@mui/material/Box'
import About from '../container/About/About'
import Header from '../container/Header/Header'
import Works from '../container/Work/Works'
import Skills from '../container/Skills/Skills'
import Footer from '../container/Footer/Footer'
import Experiences from '../container/Experiences/Experiences'
import { Fragment } from 'react'

const Home = () => (
	<Page pageTitle='David Marí'>
		<Fragment>
			<Header />
			<About />
			<Works />
			<Skills />
			<Experiences />
			<Footer />
		</Fragment>
	</Page>
)

export default Home
