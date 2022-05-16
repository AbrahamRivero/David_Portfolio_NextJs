import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckIcon from '@mui/icons-material/CheckOutlined'
import ClearIcon from '@mui/icons-material/ClearOutlined'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import PasswordInput from 'components/inputs/PasswordInput'

const PasswordInputWithTooltip = ({
	handleOpen,
	open,
	password,
	requirements,
	theme,
	tooltipPlacement = 'right',
	meetAllRequirements,
	...props
}) => (
	<LightTooltip
		arrow
		open={open}
		placement={tooltipPlacement}
		meetAllRequirements={meetAllRequirements}
		title={
			<Box marginX={1} marginY={1}>
				<Typography variant="subtitle1">Passwords requirements:</Typography>
				<List dense>
					{requirements.map(({ text, meetRequirement }, idx) => (
						<ListItem disableGutters key={idx}>
							<ListItemIcon sx={{ minWidth: 30 }}>
								{password.length && meetRequirement ? (
									<SuccessIcon />
								) : (
									<ErrorIcon />
								)}
							</ListItemIcon>
							<ListItemText>
								<Typography variant="subtitle2">{text}</Typography>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Box>
		}
	>
		<Box>
			<PasswordInput
				onBlur={() => handleOpen(false)}
				onFocus={() => handleOpen(true)}
				{...props}
			/>
		</Box>
	</LightTooltip>
)
PasswordInputWithTooltip.propTypes = {
	handleOpen: PropTypes.func,
	open: PropTypes.bool,
	password: PropTypes.string,
	requirements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	tooltipPlacement: PropTypes.string,
}

export default PasswordInputWithTooltip

const SuccessIcon = styled(CheckIcon)(({ theme }) => ({
	color: theme.palette.success.light,
}))

const ErrorIcon = styled(ClearIcon)(({ theme }) => ({
	color: theme.palette.error.light,
}))

const LightTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme, meetAllRequirements }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: theme.shadows[1],
		fontSize: 11,
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: !meetAllRequirements
			? theme.palette.error.light
			: theme.palette.success.light,
	},
	[`& .${tooltipClasses.arrow}::before`]: {
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[1],
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: !meetAllRequirements
			? theme.palette.error.light
			: theme.palette.success.light,
	},
}))
