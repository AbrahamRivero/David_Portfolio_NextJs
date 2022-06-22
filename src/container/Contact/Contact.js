import { Fragment } from 'react'
import {
	CUSTOMER_NAME_FIELD,
	CUSTOMER_EMAIL_FIELD,
	DESCRIPTION_FIELD,
} from './constants'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useSelector } from 'react-redux'

const Contact = ({
	handleSubmit,
	register,
	loading,
	validationErrors,
	isFormSubmitted,
}) => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			{!isFormSubmitted ? (
				<StyledBox component="form" noValidate onSubmit={handleSubmit}>
					<StyledTextField
						name={CUSTOMER_NAME_FIELD}
						margin="normal"
						fullWidth
						variant="filled"
						label={isEnglishSelected ? 'Your Name' : 'Nombre'}
						error={!!validationErrors[CUSTOMER_NAME_FIELD]}
						helperText={validationErrors[CUSTOMER_NAME_FIELD]?.message}
						inputProps={{ ...register(CUSTOMER_NAME_FIELD) }}
					/>
					<StyledTextField
						name={CUSTOMER_EMAIL_FIELD}
						margin="normal"
						fullWidth
						variant="filled"
						label={isEnglishSelected ? 'Email Address' : 'Email'}
						error={!!validationErrors[CUSTOMER_EMAIL_FIELD]}
						helperText={validationErrors[CUSTOMER_EMAIL_FIELD]?.message}
						inputProps={{ ...register(CUSTOMER_EMAIL_FIELD) }}
					/>
					<StyledTextField
						name={DESCRIPTION_FIELD}
						margin="normal"
						fullWidth
						variant="filled"
						label={isEnglishSelected ? 'Comments' : 'Comentarios'}
						multiline
						rows={4}
						error={!!validationErrors[DESCRIPTION_FIELD]}
						helperText={validationErrors[DESCRIPTION_FIELD]?.message}
						inputProps={{ ...register(DESCRIPTION_FIELD) }}
					/>
					<SubmitBtn
						type="submit"
						fullWidth
						variant="gradient"
						color="secondary"
						loading={loading}
					>
						{isEnglishSelected ? 'Submit' : 'Enviar'}
					</SubmitBtn>
				</StyledBox>
			) : (
				<Fragment>
					<StyledTaskAltIcon color="success" fontSize="large" />
					<StyledTypography spacingTop={1.5} variant="h3">
						Thank You
					</StyledTypography>
					<StyledTypography spacingTop={3} variant="body1" textAlign="center">
						We'll reach out to you as soon as we can regarding your inquiry.
					</StyledTypography>
				</Fragment>
			)}
		</Fragment>
	)
}

export default Contact

const StyledBox = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(1),
	textAlign: 'center',
}))

const SubmitBtn = styled(LoadingButton)(({ theme }) => ({
	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(1),
	[theme.breakpoints.up('lg')]: {
		width: '300px',
	},
	[theme.breakpoints.down('lg')]: {
		width: '200px',
	},
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& input': {
		color: 'white',
	},
	'& textarea': {
		color: 'white',
	},
}))

const StyledTypography = styled(({ spacingTop, spacingBottom, ...props }) => (
	<Typography {...props} />
))(({ theme, spacingTop, spacingBottom }) => ({
	marginTop: theme.spacing(spacingTop || 0),
	marginBottom: theme.spacing(spacingBottom || 0),
}))
const StyledTaskAltIcon = styled(TaskAltIcon)(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		fontSize: '60px',
	},
	[theme.breakpoints.down('lg')]: {
		fontSize: '50px',
	},
}))
