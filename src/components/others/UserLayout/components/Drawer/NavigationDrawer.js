import { Fragment } from 'react'
import { navigationDrawerLinks, navigationDrawerRefs } from './constants'
import { useSelector } from 'react-redux'
import { theme } from '../../../../../theme'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import PropTypes from 'prop-types'
import styled from '@mui/system/styled'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'

const NavigationDrawer = ({ toggle, setToggle, currentURL }) => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	const navigationRefs = navigationDrawerRefs.map(navigationRef => (
		<ListItem
			key={navigationRef.linkName}
			disablePadding
			onClick={() => {
				setToggle(false)
			}}
		>
			<Link href={navigationRef.linkUrl}>
				<ListItemButton>
					<ListItemIcon>{navigationRef.icon}</ListItemIcon>
					<ListItemText
						primary={
							isEnglishSelected
								? navigationRef.linkName
								: navigationRef.linkNameEsp
						}
					/>
				</ListItemButton>
			</Link>
		</ListItem>
	))
	return (
		<Fragment>
			<IconButton
				size="large"
				edge="start"
				aria-label="menu"
				onClick={() => {
					setToggle(true)
				}}
			>
				{!toggle ? (
					<MenuIcon htmlColor={theme.palette.white} />
				) : (
					<CloseIcon htmlColor={theme.palette.white} />
				)}
			</IconButton>
			<StyledDrawer
				anchor="left"
				open={toggle}
				onClose={() => {
					setToggle(false)
				}}
			>
				<List>
					{navigationDrawerLinks.map(navigationLink => (
						<ListItem
							key={navigationLink.linkName}
							disablePadding
							onClick={() => {
								setToggle(false)
							}}
						>
							<Link href={navigationLink.linkUrl}>
								<ListItemButton>
									<ListItemIcon>{navigationLink.icon}</ListItemIcon>
									<ListItemText
										primary={
											isEnglishSelected
												? navigationLink.linkName
												: navigationLink.linkNameEsp
										}
									/>
								</ListItemButton>
							</Link>
						</ListItem>
					))}
					{(currentURL == '/' ||
						currentURL == '/#skills' ||
						currentURL == '/#contact') &&
						navigationRefs}
				</List>
			</StyledDrawer>
		</Fragment>
	)
}

export default NavigationDrawer

NavigationDrawer.propTypes = {
	toggle: PropTypes.bool,
	setToggle: PropTypes.func,
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
	fontFamily: 'sans-serif',
	'& .MuiDrawer-paper': {
		position: 'fixed',
		top: 0,
		bottom: 0,
		right: 0,
		zIndex: 5,

		padding: '1rem',

		width: '60%',
		height: '100vh',

		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',

		/* backgroundColor: '#282626f2', */
		backgroundSize: 'cover',
		backgroundRepeat: 'repeat',

		/* top box shadow */

		boxShadow: '0px 0px 20px rgba(168, 168, 168, 0.15)',

		[theme.breakpoints.up('md')]: {
			width: '25%',
		},

		'& .MuiIconButton-root': {
			width: '35px',
			height: '35px',
			color: '#fff',
			margin: '0.5rem 1rem',
		},

		'& .MuiList-root': {
			listStyle: 'none',
			margin: 0,
			padding: 0,
			height: '100%',
			width: '100%',

			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			flexDirection: 'column',

			'& .MuiListItem-root': {
				margin: '1rem',

				'& .MuiLink-root': {
					color: '#fff',
					textTransform: 'uppercase',
					fontSize: '1rem',
					fontWeight: 500,
					transition: 'all 0.3s ease-in-out',
					cursor: 'pointer',
					width: '100%',

					'&:hover': {
						color: '#313bac',
					},
				},
				'&:hover': {
					background: '#89bed359',
					width: '93%',
				},
			},
		},
		/* [theme.breakpoints.up('lg')]: {
			display: 'none',
		}, */
	},
}))
