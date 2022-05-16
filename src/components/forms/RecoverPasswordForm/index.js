import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { FORGOT_PASSWORD } from './mutations.gql'
import withHoc from 'components/hocs/withHoc'
import {
	RECOVER_EMAIL_NAME_FIELD,
	RE_CAPTCHA_TOKEN_FIELD,
	EMAIL_NOT_FOUND_TEXT,
} from './constants'
import { EMAIL_NOT_FOUND } from 'constants/graphql-errors'
import { yupResolver } from '@hookform/resolvers/yup'
import { userEmail } from 'validation/schemas'
import * as yup from 'yup'
import useProcessGraphQLErrors from 'components/hooks/useProcessGraphQLErrors'
import RecoverPasswordForm from './RecoverPasswordForm'

const validationSchema = yup
	.object({
		[RECOVER_EMAIL_NAME_FIELD]: userEmail.required(),
		[RE_CAPTCHA_TOKEN_FIELD]: yup.string().required(),
	})
	.required()

const withContainer = withHoc(
	({ onFormSubmit, onAPICallComplete, onAPICallError }) => {
		const [formSubmitted, setFormSubmitted] = useState(false)
		const [sendTo, setSendTo] = useState('')

		const {
			register,
			handleSubmit: handleSubmitRHF,
			formState: { errors },
			setValue,
			setError,
		} = useForm({
			resolver: yupResolver(validationSchema),
		})
		const { processGraphQLErrors } = useProcessGraphQLErrors()

		const changeReCaptchaTokenHandler = reCaptchaToken => {
			setValue(RE_CAPTCHA_TOKEN_FIELD, reCaptchaToken)
		}

		const [forgotPassword, { loading }] = useMutation(FORGOT_PASSWORD, {
			onCompleted () {
				onAPICallComplete && onAPICallComplete()
				setFormSubmitted(true)
			},
			onError (errorObj) {
				onAPICallError && onAPICallError()
				processGraphQLErrors({
					errorObj,
					errorMap: [
						{
							errorCode: EMAIL_NOT_FOUND,
							errorHandler: () => {
								setError(RECOVER_EMAIL_NAME_FIELD, {
									type: 'manual',
									message: EMAIL_NOT_FOUND_TEXT,
								})
							},
						},
					],
				})
			},
		})

		const handleSubmit = ({ recoveryEmail, reCaptchaToken }) => {
			onFormSubmit && onFormSubmit()
			forgotPassword({
				variables: {
					emailAddress: recoveryEmail,
					reCaptchaToken: reCaptchaToken,
				},
			})
			setSendTo(recoveryEmail)
		}

		return {
			sendTo,
			loading,
			changeReCaptchaTokenHandler,
			registerField: register,
			validationErrors: errors,
			formSubmitted,
			handleSubmit: handleSubmitRHF(handleSubmit),
		}
	}
)

export default withContainer(RecoverPasswordForm)
