import { useTheme } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// eslint-disable-next-line react/display-name
const useDeviceType = () => {
	const theme = useTheme()
	const isPhone = useMediaQuery(theme.breakpoints.down('sm'))
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
	const isTablet = useMediaQuery(theme.breakpoints.only('md'))

	return { isDesktop, isTablet, isPhone }
}

export default useDeviceType
