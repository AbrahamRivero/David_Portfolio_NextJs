import { Fragment } from 'react'
import { styled } from '@mui/system'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Head from 'next/head'

const Page = ({ pageTitle, pageHead, backgroundColorPage, children }) => {
	return (
		<Fragment>
			<Head>
				<title>PortFolio - {pageTitle}</title>
				{pageHead}
			</Head>
			<main>
				<PageContentWrapper bgcolor={backgroundColorPage}>
					{children}
				</PageContentWrapper>
			</main>
		</Fragment>
	)
}

Page.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	pageHead: PropTypes.element,
	children: PropTypes.any,
}

export default Page

const PageContentWrapper = styled(Box)(({ theme }) => ({
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	/* [theme.breakpoints.up('lg')]: {
		padding: '15px 13%',
	},
	[theme.breakpoints.only('lg')]: {
		padding: '15px 10%',
	},
	[theme.breakpoints.down('lg')]: {
		padding: '15px 4%',
	}, */
}))

/* const PageContentWrapper = styled(({ className, ...props }) => (
	<Box {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
})) */
