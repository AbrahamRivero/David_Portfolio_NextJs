import { styled } from '@mui/system'
import { Fragment } from 'react'
import {
	SUBJECT_FIELD_NAME,
	CUSTOMER_NAME_FIELD,
	CUSTOMER_EMAIL_FIELD,
	DESCRIPTION_FIELD,
} from './constants'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import PropTypes from 'prop-types'

const ContactUsForm = ({
	handleSubmit,
	register,
	validationErrors,
	loading,
	initialSubjectsState,
	handleChange,
	subjects,
}) => (
	<Fragment>
		<StyledBox component="form" noValidate onSubmit={handleSubmit}>
			<FormControl fullWidth error={!!validationErrors[SUBJECT_FIELD_NAME]}>
				<InputLabel id={`${SUBJECT_FIELD_NAME}_ID`}>Subject</InputLabel>
				<StyledSelect
					labelId={`${SUBJECT_FIELD_NAME}_ID`}
					id="subjectSelect"
					value={initialSubjectsState}
					name={SUBJECT_FIELD_NAME}
					label="Subject"
					onChange={handleChange}
					inputProps={{ ...register(SUBJECT_FIELD_NAME) }}
				>
					{subjects.map(element => (
						<MenuItem key={element.id} value={element.id}>
							{element.subject}
						</MenuItem>
					))}
				</StyledSelect>
				<FormHelperText>
					{validationErrors[SUBJECT_FIELD_NAME]?.message}
				</FormHelperText>
			</FormControl>

			<TextField
				name={CUSTOMER_NAME_FIELD}
				margin="normal"
				fullWidth
				label="Your Name"
				autoComplete="name"
				error={!!validationErrors[CUSTOMER_NAME_FIELD]}
				helperText={validationErrors[CUSTOMER_NAME_FIELD]?.message}
				inputProps={{ ...register(CUSTOMER_NAME_FIELD) }}
			/>
			<TextField
				name={CUSTOMER_EMAIL_FIELD}
				margin="normal"
				fullWidth
				label="Email Address"
				autoComplete="email"
				error={!!validationErrors[CUSTOMER_EMAIL_FIELD]}
				helperText={validationErrors[CUSTOMER_EMAIL_FIELD]?.message}
				inputProps={{ ...register(CUSTOMER_EMAIL_FIELD) }}
			/>
			<TextField
				name={DESCRIPTION_FIELD}
				margin="normal"
				fullWidth
				placeholder="What can we help you with?"
				multiline
				rows={4}
				autoComplete="name"
				error={!!validationErrors[DESCRIPTION_FIELD]}
				helperText={validationErrors[DESCRIPTION_FIELD]?.message}
				inputProps={{ ...register(DESCRIPTION_FIELD) }}
			/>
			<SubmitBtn type="submit" fullWidth variant="gradient" loading={loading}>
				Submit
			</SubmitBtn>
		</StyledBox>
	</Fragment>
)

export default ContactUsForm

ContactUsForm.propTypes = {
	handleSubmit: PropTypes.func,
	register: PropTypes.func,
	validationErrors: PropTypes.shape(),
	loading: PropTypes.bool,
	initialSubjectsState: PropTypes.string,
	handleChange: PropTypes.func,
	subjects: PropTypes.array,
}

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

const StyledSelect = styled(Select)({
	textAlign: 'left',
})
