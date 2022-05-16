import { useMutation } from '@apollo/client'
import { USER_LOGIN as USER_LOGIN_ACTION } from 'store/auth/actions'
import { useDispatch } from 'react-redux'
import { USER_LOGIN } from './mutations.gql'

const useLogin = ({ onSuccess, onError } = {}) => {
	const dispatch = useDispatch()

	const [userLogin, { loading, error }] = useMutation(USER_LOGIN, {
		onCompleted({ login }) {
			dispatch(USER_LOGIN_ACTION({ ...login }))
			onSuccess && onSuccess(login)
		},
		onError(error) {
			onError && onError(error)
		},
	})

	return { userLogin, loading, error }
}

export default useLogin
