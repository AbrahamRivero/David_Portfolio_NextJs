import { Fragment } from 'react'
import PropTypes from 'prop-types'
import LoadingButton from '@mui/lab/LoadingButton'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import PasswordInput from 'components/inputs/PasswordInput'
import PasswordInputWithRequirements from 'components/inputs/PasswordInputWithRequirements'
import { LOGIN_URL } from 'constants/urls'
import { NEW_PASSWORD_FIELD, CONFIRM_PASSWORD_FIELD } from './constants'

const ResetPasswordForm = ({
	registerField,
	loading,
	invalidToken,
	validationErrors,
	newPassword,
	isDesktop,
	handleSubmit,
}) => (
	<Fragment>
		<Typography component="h1" variant="h1" textAlign="center">
			Reset Password
		</Typography>
		<Typography component="h2" variant="body1" textAlign="center">
			Enter your new password
		</Typography>
		{invalidToken && (
			<Fade in>
				<Box mt={1}>
					<Alert severity="error">
						Your token has expired, please request a new one{' '}
						<NextLink href={LOGIN_URL} passHref>
							<Link>here</Link>
						</NextLink>
					</Alert>
				</Box>
			</Fade>
		)}
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<PasswordInputWithRequirements
				margin="normal"
				label="New Password"
				tooltipPlacement={isDesktop ? 'right' : 'top'}
				disabled={loading}
				fullWidth
				error={!!validationErrors[NEW_PASSWORD_FIELD]}
				helperText={validationErrors[NEW_PASSWORD_FIELD]?.message}
				password={newPassword}
				inputProps={{
					...registerField(NEW_PASSWORD_FIELD),
				}}
			/>
			<PasswordInput
				fullWidth
				disabled={loading}
				margin="normal"
				label="Confirm Password"
				error={!!validationErrors[CONFIRM_PASSWORD_FIELD]}
				helperText={validationErrors[CONFIRM_PASSWORD_FIELD]?.message}
				inputProps={{
					...registerField(CONFIRM_PASSWORD_FIELD),
				}}
			/>
			<LoadingButton
				type="submit"
				fullWidth
				variant="gradient"
				loading={loading}
				sx={{ mt: 3, mb: 2 }}
			>
				Submit
			</LoadingButton>
		</Box>
	</Fragment>
)

ResetPasswordForm.propTypes = {
	handleSubmit: PropTypes.func,
	isDesktop: PropTypes.bool,
	invalidCredentials: PropTypes.bool,
	invalidToken: PropTypes.bool,
	loading: PropTypes.bool,
	newPassword: PropTypes.string,
	registerField: PropTypes.func,
	validationErrors: PropTypes.shape(),
}

export default ResetPasswordForm
