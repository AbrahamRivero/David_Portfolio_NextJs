import { styled } from '@mui/system'
import MuiAppBar from '@mui/material/AppBar'
import { LinkButton } from '../../CommonStyles'
import { MediaMobile } from '../../../Media'
import { MediaDesktop } from '../../../Media'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/MenuSharp'
import HamburgerMenu from '../HamburguerMenu'
import Switch from '../../../LanguageSwitch/Switch'
import { Button } from '@mui/material'

const AppBar = () => (
	<Box flexGrow={1}>
		<StyledAppBar position="sticky">
			<FlexToolbar disableGutters>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					width={1}
					id="BOX"
				>
					<Box display="flex" alignItems="center" width="100%">
						<MediaMobile>
							<HamburgerMenu>
								<IconButton size="large" edge="start" aria-label="menu">
									<MenuIcon />
								</IconButton>
							</HamburgerMenu>
						</MediaMobile>

						<Box display="flex" justifyContent="space-between" width="100%">
							<LogoWrapper>
								<img src="/logo.png" width={90} height={50} />
							</LogoWrapper>

							<MediaDesktop
								component="div"
								alignItems="center"
								display="flex"
								width="65%"
							>
								<Box display="flex" justifyContent="space-between" width="100%">
									<Box display="flex" flexDirection="row">
										{['home', 'about', 'work', 'skills', 'contact'].map(
											item => (
												<li className="app__flex p-text" key={`link-${item}`}>
													<div />
													{/* <LinkButton color='success' href={`#${item}`}>{item}</LinkButton> */}
													<StyledLinkButton href={`#${item}`}>
														{item}
													</StyledLinkButton>
												</li>
											)
										)}
									</Box>
									<Switch />
								</Box>
							</MediaDesktop>
						</Box>
					</Box>
				</Box>
			</FlexToolbar>
		</StyledAppBar>
	</Box>
)

export default AppBar

const FlexToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: `${theme.spacing(3)} ${theme.spacing(1)}`,

	[theme.breakpoints.down('lg')]: {
		justifyContent: 'center',
		padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
	},
}))

const LogoWrapper = styled(Box)(({ theme }) => ({
	cursor: 'pointer',
	[theme.breakpoints.down('lg')]: {
		flexGrow: 1,
	},
	'&& img': {
		position: 'relative',
		top: '5px',
		left: '-8px',
	},
}))

const StyledLinkButton = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}))

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
	backgroundColor: '#2e3141',
	color: theme.palette.text.primary,
	padding: '0 14px',
	[theme.breakpoints.only('lg')]: {
		padding: '0 10%',
	},
	[theme.breakpoints.up('xl')]: {
		padding: '0 13% ',
	},
}))