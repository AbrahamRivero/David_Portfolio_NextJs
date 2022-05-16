import { RECOVER_EMAIL_NAME_FIELD, RE_CAPTCHA_TOKEN_FIELD } from './constants'
import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from 'constants/keys'
import PropTypes from 'prop-types'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import styled from '@mui/system/styled'
import Captcha from 'components/others/Captcha'

const RecoverPasswordForm = ({
	formSubmitted,
	registerField,
	loading,
	validationErrors,
	handleSubmit,
	formRef,
	hideSubmit = false,
	sendTo,
	changeReCaptchaTokenHandler,
}) => {
	return !formSubmitted ? (
		<form ref={formRef} onSubmit={handleSubmit}>
			<Box>
				Enter your email address and we&apos;ll send you a link with which you
				can reset your password.
			</Box>
			<TextField
				disabled={loading}
				margin='normal'
				fullWidth
				label='Email Address'
				autoFocus
				error={!!validationErrors[RECOVER_EMAIL_NAME_FIELD]}
				helperText={validationErrors[RECOVER_EMAIL_NAME_FIELD]?.message}
				inputProps={{
					...registerField(RECOVER_EMAIL_NAME_FIELD),
				}}
			/>

			<Captcha
				sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
				changeReCaptchaTokenHandler={changeReCaptchaTokenHandler}
				hasError={validationErrors[RE_CAPTCHA_TOKEN_FIELD]}
			/>

			{!hideSubmit && (
				<StyledLoadingButton
					fullWidth
					variant='gradient'
					loading={loading}
					type='submit'
				>
					Submit
				</StyledLoadingButton>
			)}
		</form>
	) : (
		<Box>
			A link to reset your password has been sent to <b>{sendTo}</b>
		</Box>
	)
}

RecoverPasswordForm.propTypes = {
	formSubmitted: PropTypes.bool,
	formRef: PropTypes.shape(),
	registerField: PropTypes.func,
	sendTo: PropTypes.string,
	loading: PropTypes.bool,
	hideSubmit: PropTypes.bool,
	validationErrors: PropTypes.shape(),
	handleSubmit: PropTypes.func,
	changeReCaptchaTokenHandler: PropTypes.func,
}

export default RecoverPasswordForm

const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
	marginTop: theme.spacing(3),
	marginBottom: theme.spacing(1),
}))
