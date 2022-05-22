import Page from '../components/others/Page/Page'
import Box from '@mui/material/Box'
import About from '../container/About/About'
import Header from '../container/Header/Header'
import Work from '../container/Work/Work'
import Skills from '../container/Skills/Skills'
import Footer from '../container/Footer/Footer'
import VerticalTimeLine from '../components/others/VerticalTimeLine/VerticalTimeLine'

const Home = () => (
	<Page pageTitle="David Marí">
		<Box>
			<Header />
			<About />
			<Work />
			<Skills />
			<VerticalTimeLine />
			<Footer />
		</Box>
	</Page>
)

export default Home
