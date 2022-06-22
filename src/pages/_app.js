import { Fragment, useEffect } from 'react'
import '../validation'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { theme } from '../theme'
import CssBaseline from '@mui/material/CssBaseline'
import store from '../store/index'
import PropTypes from 'prop-types'

import UserLayout from '../components/others/UserLayout'

import '../../styles/global.scss'

const MyApp = ({ Component, pageProps }) => {
	/* 	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, []) */
	return (
		<Fragment>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<UserLayout>
						<Component {...pageProps} />
					</UserLayout>
				</ThemeProvider>
			</Provider>
		</Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default MyApp
