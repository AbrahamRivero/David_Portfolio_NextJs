import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import Navbar from './components/Navbar/Navbar'

const UserLayout = ({ children, ...props }) => {
	return (
		<Box>
			<Navbar />
			{children}
			
		</Box>
	)
}

UserLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.shape()]),
}

export default UserLayout
