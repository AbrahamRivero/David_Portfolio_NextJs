import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useMutation } from '@apollo/client'
import {
	NEW_PASSWORD_FIELD,
	CONFIRM_PASSWORD_FIELD,
	RESET_PASSWORD_MSG,
} from './constants'
import { LOGIN_URL } from 'constants/urls'
import { INVALID_TOKEN } from 'constants/graphql-errors'
import { PASSWORD_MUST_MATCH_ERROR_TXT } from 'constants/validation-errors'
import { RESET_USER_PASSWORD } from './mutations.gql'
import { yupResolver } from '@hookform/resolvers/yup'
import withHoc from 'components/hocs/withHoc'
import * as yup from 'yup'
import { userPassword } from 'validation/schemas'
import useDeviceType from 'components/hooks/useDeviceType'
import useProcessGraphQLErrors from 'components/hooks/useProcessGraphQLErrors'
import ResetPasswordForm from './ResetPasswordForm'

const validationSchema = yup
	.object({
		[NEW_PASSWORD_FIELD]: userPassword.required(),
		[CONFIRM_PASSWORD_FIELD]: userPassword
			.required()
			.oneOf([yup.ref(NEW_PASSWORD_FIELD)], PASSWORD_MUST_MATCH_ERROR_TXT),
	})
	.required()

const withContainer = withHoc(() => {
	const { enqueueSnackbar } = useSnackbar()
	const { push, query } = useRouter()
	const { isDesktop } = useDeviceType()
	const { token } = query
	const [invalidToken, setInvalidToken] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		resolver: yupResolver(validationSchema),
	})
	const { processGraphQLErrors } = useProcessGraphQLErrors()

	const [resetPassword, { loading }] = useMutation(RESET_USER_PASSWORD, {
		onCompleted() {
			push(LOGIN_URL)
			enqueueSnackbar(RESET_PASSWORD_MSG, { variant: 'success' })
		},
		onError(errorObj) {
			processGraphQLErrors({
				errorObj,
				errorMap: [
					{
						errorCode: INVALID_TOKEN,
						errorHandler: () => setInvalidToken(true),
					},
				],
			})
		},
	})

	const onFormSubmit = ({ newPassword }) => {
		invalidToken && setInvalidToken(false)
		resetPassword({
			variables: {
				password: newPassword,
				token,
			},
		})
	}

	return {
		registerField: register,
		validationErrors: errors,
		invalidToken,
		loading,
		isDesktop,
		newPassword: watch(NEW_PASSWORD_FIELD),
		handleSubmit: handleSubmit(onFormSubmit)
	}
})

export default withContainer(ResetPasswordForm)
