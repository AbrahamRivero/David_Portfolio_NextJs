import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import {
	DISPLAY_NAME,
	EMAIL_FIELD_NAME,
	PASSWORD_FIELD_NAME,
	RE_CAPTCHA_TOKEN_FIELD,
} from './constants'
import { EMAIL_IN_USE } from 'constants/graphql-errors'
import { EMAIL_IN_USE_ERROR_TXT } from 'constants/validation-errors'
import { yupResolver } from '@hookform/resolvers/yup'
import { userDisplayName, userEmail, userPassword } from 'validation/schemas'
import { CREATE_USER_ACCOUNT } from './mutations.gql'
import * as yup from 'yup'
import withHoc from 'components/hocs/withHoc'
import useDeviceType from 'components/hooks/useDeviceType'
import useLogin from 'components/hooks/useLogin'
import useProcessGraphQLErrors from 'components/hooks/useProcessGraphQLErrors'
import RegisterForm from './RegisterForm'

const validationSchema = yup
	.object({
		[DISPLAY_NAME]: userDisplayName.required(),
		[EMAIL_FIELD_NAME]: userEmail.required(),
		[PASSWORD_FIELD_NAME]: userPassword,
		[RE_CAPTCHA_TOKEN_FIELD]: yup.string().required(),
	})
	.required()

const withContainer = withHoc(({ onSuccess }) => {
	const { isDesktop } = useDeviceType()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		setError,
	} = useForm({
		resolver: yupResolver(validationSchema),
	})
	const { processGraphQLErrors } = useProcessGraphQLErrors()

	const changeReCaptchaTokenHandler = reCaptchaToken => {
		setValue(RE_CAPTCHA_TOKEN_FIELD, reCaptchaToken)
	}
	const password = watch(PASSWORD_FIELD_NAME)
	const { userLogin, loading: userLoginLoading } = useLogin({
		onSuccess,
	})

	const [createUserAccount, { loading: createAcctLoading }] = useMutation(
		CREATE_USER_ACCOUNT,
		{
			onCompleted ({ createUserAccount: data }) {
				userLogin({
					variables: {
						emailAddress: data.emailAddress,
						password,
					},
				})
			},
			onError (errorObj) {
				processGraphQLErrors({
					errorObj,
					errorMap: [
						{
							errorCode: EMAIL_IN_USE,
							errorHandler: () => {
								setError(EMAIL_FIELD_NAME, {
									type: 'manual',
									message: EMAIL_IN_USE_ERROR_TXT,
								})
							},
						},
					],
				})
			},
		}
	)

	const registerRequest = ({
		displayName,
		emailAddress,
		password,
		reCaptchaToken,
	}) => {
		createUserAccount({
			variables: {
				displayName,
				emailAddress,
				password,
				reCaptchaToken,
			},
		})
	}
	return {
		password,
		isDesktop,
		loading: createAcctLoading || userLoginLoading,
		handleSubmit: handleSubmit(registerRequest),
		registerField: register,
		validationErrors: errors,
		changeReCaptchaTokenHandler,
	}
})

export default withContainer(RegisterForm)
