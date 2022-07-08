import { Fragment } from 'react'
import Page from '../components/others/Page/Page'
import About from '../container/About/About'
import Header from '../container/Header/Header'
import Skills from '../container/Skills/Skills'
import Footer from '../container/Footer/Footer'

const Home = () => (
	<Page pageTitle="David Marí">
		<Fragment>
			<Header />
			<About />
			<Skills />
			<Footer />
		</Fragment>
	</Page>
)

export default Home
