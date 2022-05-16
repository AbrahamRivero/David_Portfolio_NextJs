import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined'

const PasswordInput = ({
	textVisibility,
	handleToggleVisibility,
	InputProps,
	...props
}) => (
	<TextField
		InputProps={{
			...InputProps,
			endAdornment: (
				<InputAdornment key="eye" position="end">
					<IconButton onClick={handleToggleVisibility} size="small">
						{textVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
					</IconButton>
				</InputAdornment>
			),
		}}
		type={textVisibility ? 'text' : 'password'}
		{...props}
	/>
)
PasswordInput.propTypes = {
	handleOnChange: PropTypes.func,
	handleToggleVisibility: PropTypes.func,
	textVisibility: PropTypes.bool,
	InputProps: PropTypes.shape(),
}
export default PasswordInput
