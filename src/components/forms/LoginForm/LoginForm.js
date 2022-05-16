import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import PasswordInput from 'components/inputs/PasswordInput'
import { REGISTER_URL } from 'constants/urls'
import { EMAIL_FIELD_NAME, PASSWORD_FIELD_NAME } from './constants'

const LoginForm = ({
	handleSubmit,
	registerField,
	loading,
	invalidCredentials,
	validationErrors,
	keepMeLoggedIn,
	setKeepMeLoggedIn,
	onForgotPasswordClick,
	hideRegisterLink,
}) => (
	<Fragment>
		<Typography component="h1" variant="h1" textAlign="center">
			Welcome Back
		</Typography>
		<Typography component="h2" variant="body1" textAlign="center">
			Login with your credentials
		</Typography>
		{invalidCredentials && (
			<Fade in>
				<Box mt={1}>
					<Alert severity="error">Invalid username and/or password</Alert>
				</Box>
			</Fade>
		)}
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<TextField
				margin="normal"
				disabled={loading}
				fullWidth
				label="Email Address"
				autoComplete="email"
				autoFocus
				error={!!validationErrors[EMAIL_FIELD_NAME]}
				helperText={validationErrors[EMAIL_FIELD_NAME]?.message}
				inputProps={{
					...registerField(EMAIL_FIELD_NAME),
				}}
			/>
			<PasswordInput
				margin="normal"
				disabled={loading}
				fullWidth
				label="Password"
				autoComplete="current-password"
				error={!!validationErrors[PASSWORD_FIELD_NAME]}
				helperText={validationErrors[PASSWORD_FIELD_NAME]?.message}
				inputProps={{
					...registerField(PASSWORD_FIELD_NAME),
				}}
			/>
			<FormControlLabel
				control={
					<Checkbox
						disabled={loading}
						color="primary"
						checked={keepMeLoggedIn}
						onClick={() => setKeepMeLoggedIn(!keepMeLoggedIn)}
					/>
				}
				label="Keep me logged in"
			/>
			<SubmitBtn
				type="submit"
				fullWidth
				variant="gradient"
				loading={loading}
				sx={{ mt: 3, mb: 1 }}
			>
				Login
			</SubmitBtn>
			<Grid container>
				<Grid item xs my="auto">
					<Link href="#" onClick={onForgotPasswordClick} variant="body2">
						Forgot password?
					</Link>
				</Grid>
				{!hideRegisterLink && (
					<Grid item my="auto">
						<Typography component="div" variant="body2">
							Not a member?&nbsp;
							<NextLink href={REGISTER_URL} passHref>
								<Link variant="body2">Sign Up</Link>
							</NextLink>
						</Typography>
					</Grid>
				)}
			</Grid>
		</Box>
	</Fragment>
)

LoginForm.propTypes = {
	handleSubmit: PropTypes.func,
	invalidCredentials: PropTypes.bool,
	keepMeLoggedIn: PropTypes.bool,
	loading: PropTypes.bool,
	registerField: PropTypes.func,
	setKeepMeLoggedIn: PropTypes.func,
	validationErrors: PropTypes.shape(),
	hideRegisterLink: PropTypes.bool,
}

export default LoginForm

const SubmitBtn = styled(LoadingButton)(({ theme }) => ({
	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(1),
}))
