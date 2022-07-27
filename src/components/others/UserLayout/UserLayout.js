import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import AppBar from './components/Navbar/Navbar'

const UserLayout = ({ children, ...props }) => {
	return (
		<Box>
			<AppBar />
			{children}
		</Box>
	)
}

UserLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.shape()]),
}

export default UserLayout
