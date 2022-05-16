import { Fragment } from 'react'
import { styled } from '@mui/system'
import {
	DISPLAY_NAME,
	EMAIL_FIELD_NAME,
	PASSWORD_FIELD_NAME,
	RE_CAPTCHA_TOKEN_FIELD,
} from './constants'
import { LOGIN_URL } from 'constants/urls'
import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from 'constants/keys'
import PropTypes from 'prop-types'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PasswordInputWithRequirements from 'components/inputs/PasswordInputWithRequirements'
import NextLink from 'next/link'
import Captcha from 'components/others/Captcha'

const RegisterForm = ({
	isDesktop,
	handleSubmit,
	loading,
	password,
	validationErrors,
	registerField,
	hideLoginLink,
	changeReCaptchaTokenHandler,
}) => (
	<Fragment>
		<Typography component='h1' variant='h1' textAlign='center'>
			Register
		</Typography>
		<Typography component='h2' variant='body1' textAlign='center'>
			Create your account today!
		</Typography>
		<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<TextField
				fullWidth
				margin='normal'
				label='Your Name'
				disabled={loading}
				autoFocus
				error={!!validationErrors[DISPLAY_NAME]}
				helperText={validationErrors[DISPLAY_NAME]?.message}
				inputProps={{
					...registerField(DISPLAY_NAME),
				}}
			/>
			<TextField
				margin='normal'
				fullWidth
				label='Email Address'
				disabled={loading}
				error={!!validationErrors[EMAIL_FIELD_NAME]}
				helperText={validationErrors[EMAIL_FIELD_NAME]?.message}
				inputProps={{
					...registerField(EMAIL_FIELD_NAME),
				}}
			/>
			<PasswordInputWithRequirements
				margin='normal'
				label='Password'
				disabled={loading}
				tooltipPlacement={isDesktop ? 'right' : 'top'}
				fullWidth
				error={!!validationErrors[PASSWORD_FIELD_NAME]}
				helperText={validationErrors[PASSWORD_FIELD_NAME]?.message}
				password={password}
				inputProps={{
					...registerField(PASSWORD_FIELD_NAME),
				}}
			/>

			<Captcha
				sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
				changeReCaptchaTokenHandler={changeReCaptchaTokenHandler}
				hasError={validationErrors[RE_CAPTCHA_TOKEN_FIELD]}
			/>

			<SubmitBtn type='submit' loading={loading} fullWidth variant='gradient'>
				Create Account
			</SubmitBtn>
			{!hideLoginLink && (
				<Typography component='div' variant='body2' textAlign='center'>
					Already have an account?&nbsp;
					<NextLink href={LOGIN_URL} passHref>
						<Link variant='body2'>Log in</Link>
					</NextLink>
				</Typography>
			)}
		</Box>
	</Fragment>
)

RegisterForm.propTypes = {
	handleSubmit: PropTypes.func,
	isDesktop: PropTypes.bool,
	password: PropTypes.string,
	loading: PropTypes.bool,
	registerField: PropTypes.func,
	validationErrors: PropTypes.shape(),
	hideLoginLink: PropTypes.bool,
	changeReCaptchaTokenHandler: PropTypes.func,
}

export default RegisterForm

const SubmitBtn = styled(LoadingButton)(({ theme }) => ({
	marginTop: theme.spacing(2),
	marginBottom: theme.spacing(1),
}))
