import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

export const StyledBox = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(1),
	textAlign: 'center',
}))

export const SubmitBtn = styled(LoadingButton)(({ theme }) => ({
	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(1),
	[theme.breakpoints.up('lg')]: {
		width: '300px',
	},
	[theme.breakpoints.down('lg')]: {
		width: '200px',
	},
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
	'& input': {
		color: 'white',
	},
	'& textarea': {
		color: 'white',
	},
}))

export const StyledTypography = styled(
	({ spacingTop, spacingBottom, ...props }) => <Typography {...props} />
)(({ theme, spacingTop, spacingBottom }) => ({
	marginTop: theme.spacing(spacingTop || 0),
	marginBottom: theme.spacing(spacingBottom || 0),
}))

export const StyledTaskAltIcon = styled(TaskAltIcon)(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		fontSize: '60px',
	},
	[theme.breakpoints.down('lg')]: {
		fontSize: '50px',
	},
}))
