import { alpha, styled } from '@mui/system'
import PropTypes from 'prop-types'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'
import { Fragment } from 'react'

const MenuRouteLink = ({ urlLink, currentURL, onClick, Icon, text }) => (
	<Fragment>
		{urlLink ? (
			<Link href={urlLink} passHref>
				<ListItemLinkButton button onClick={onClick} currentURL={currentURL}>
					{Icon && (
						<ListIcon>
							<Icon
								color={currentURL === urlLink ? 'primary' : undefined}
								fontSize="medium"
							/>
						</ListIcon>
					)}
					<ListItemText primary={text} />
				</ListItemLinkButton>
			</Link>
		) : (
			<ListItemLinkButton button onClick={onClick} currentURL={currentURL}>
				{Icon && (
					<ListIcon>
						<Icon
							color={currentURL === urlLink ? 'primary' : undefined}
							fontSize="medium"
						/>
					</ListIcon>
				)}
				<ListItemText primary={text} />
			</ListItemLinkButton>
		)}
	</Fragment>
)

MenuRouteLink.propTypes = {
	currentURL: PropTypes.string,
	Icon: PropTypes.shape(),
	onClick: PropTypes.func,
	text: PropTypes.string,
	urlLink: PropTypes.string,
}

export default MenuRouteLink

const ListIcon = styled(ListItemIcon)(() => ({
	minWidth: '35px',
}))

const ListItemLinkButton = styled(ListItem, {
	shouldForwardProp: prop => prop !== 'currentURL',
})(({ currentURL, href, theme }) => {
	const currentLinkProps =
		currentURL === href
			? {
					color: theme.palette.primary.main,
					backgroundColor: alpha(theme.palette.primary.main, 0.1),
					borderRight: `3px ${theme.palette.primary.main} solid`,
			  }
			: { color: theme.palette.text.secondary }
	return {
		...currentLinkProps,
	}
})
