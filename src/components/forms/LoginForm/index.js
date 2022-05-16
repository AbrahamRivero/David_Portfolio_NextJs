import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { show } from 'redux-modal'
import { hasErrorCode } from 'helpers/graphQL'
import { EMAIL_FIELD_NAME, PASSWORD_FIELD_NAME } from './constants'
import { RECOVER_PASSWORD_DIALOG_ID } from 'components/dialogs/RecoverPasswordDialog/constants'
import { INVALID_CREDENTIALS } from 'constants/graphql-errors'
import { SEARCH_URL } from 'constants/urls'
import { yupResolver } from '@hookform/resolvers/yup'
import withHoc from 'components/hocs/withHoc'
import * as yup from 'yup'
import { userEmail } from 'validation/schemas'
import useLogin from 'components/hooks/useLogin'
import LoginForm from './LoginForm'

const validationSchema = yup
	.object({
		[EMAIL_FIELD_NAME]: userEmail.required(),
		[PASSWORD_FIELD_NAME]: yup.string().required(),
	})
	.required()

const withContainer = withHoc(
	({ isDialog = false, onSuccess, onForgotPassword }) => {
		const dispatch = useDispatch()
		const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false)
		const [invalidCredentials, setInvalidCredentials] = useState(false)
		const {
			register,
			handleSubmit,
			formState: { errors },
			reset,
		} = useForm({
			resolver: yupResolver(validationSchema),
		})
		const { push } = useRouter()
		const { userLogin, loading } = useLogin({
			onSuccess: () => {
				onSuccess && onSuccess()
				!isDialog && push(SEARCH_URL)
			},
			onError: error => {
				if (hasErrorCode(error, INVALID_CREDENTIALS)) {
					setInvalidCredentials(true)
					reset()
				}
			},
		})

		const onFormSubmit = ({ email, password }) => {
			invalidCredentials && setInvalidCredentials(false)
			userLogin({
				variables: {
					emailAddress: email,
					password,
					extended: keepMeLoggedIn,
				},
			})
		}

		const onForgotPasswordClick = () => {
			onForgotPassword
				? onForgotPassword()
				: dispatch(show(RECOVER_PASSWORD_DIALOG_ID))
		}

		return {
			loading,
			validationErrors: errors,
			keepMeLoggedIn,
			invalidCredentials,
			registerField: register,
			setKeepMeLoggedIn,
			handleSubmit: handleSubmit(onFormSubmit),
			onForgotPasswordClick,
		}
	}
)

export default withContainer(LoginForm)
