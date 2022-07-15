import { Fragment } from 'react'
import { theme } from '../../../../../theme'
import { MediaMobile, MediaDesktop } from '../../../Media'
import styled from '@mui/system/styled'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Switch from '../../../LanguageSwitch/Switch'
import NavigationDrawer from '../Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/MenuSharp'

const AppBar = () => {
	return (
		<Fragment>
			<StyledAppBar position="fixed">
				<FlexToolbar disableGutters>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						width={1}
						id="BOX"
					>
						<Box display="flex" alignItems="center" width="100%">
							<NavigationDrawer>
								<IconButton size="large" edge="start" aria-label="menu">
									<MenuIcon htmlColor={theme.palette.white} />
								</IconButton>
							</NavigationDrawer>
							<Box
								display="flex"
								justifyContent="flex-end"
								width="100%"
								id="BOX2"
							>
								<MediaDesktop
									component="div"
									alignItems="center"
									display="flex"
								>
									<Box
										display="flex"
										justifyContent="space-between"
										alignItems="center"
										width="100%"
									>
										<Switch />
									</Box>
								</MediaDesktop>
							</Box>
						</Box>
					</Box>
				</FlexToolbar>
			</StyledAppBar>
		</Fragment>
	)
}

export default AppBar

const FlexToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: `${theme.spacing(1.3)} ${theme.spacing(1)}`,

	[theme.breakpoints.down('lg')]: {
		justifyContent: 'center',
		padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
	},
}))

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
	backgroundColor: '#2e3141',
	color: theme.palette.text.primary,
	padding: '0 14px',
	[theme.breakpoints.only('lg')]: {
		padding: '0 7%',
	},
	[theme.breakpoints.up('xl')]: {
		padding: '0 10% ',
	},
}))
