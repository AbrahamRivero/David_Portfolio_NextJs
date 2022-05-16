import { styled } from '@mui/system'
import Button from '@mui/material/Button'

export const LinkButton = styled(Button, {
	shouldForwardProp: prop => prop !== 'currentURL',
})(({ currentURL, href, theme }) => {
	const currentLinkProps =
		currentURL === href
			? {
					color: theme.palette.primary.main,
					borderBottom: `3px ${theme.palette.primary.main} solid`,
			  }
			: { color: theme.palette.text.secondary }
	return {
		...currentLinkProps,
	}
})
