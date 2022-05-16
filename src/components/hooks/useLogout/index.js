import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { USER_LOGOUT } from 'store/auth/actions'
import { useDispatch } from 'react-redux'
import { LOGOUT } from './mutations.gql'

const useLogout = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const clearStateAndNavigateAway = async () => {
		await router.push('/')
		dispatch(USER_LOGOUT())
	}

	const [userLogout, { loading, error }] = useMutation(LOGOUT, {
		onCompleted() {
			clearStateAndNavigateAway()
		},
		onError() {
			clearStateAndNavigateAway()
		},
	})

	return { userLogout, loading, error }
}

export default useLogout
