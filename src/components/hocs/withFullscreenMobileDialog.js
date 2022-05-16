import { useTheme } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// eslint-disable-next-line react/display-name
const withFullscreenMobileDialog =
	Component =>
	({ ...props }) => {
		const theme = useTheme()
		const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
		return <Component fullScreen={fullScreen} {...props} />
	}

export default withFullscreenMobileDialog
