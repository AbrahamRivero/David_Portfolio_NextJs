import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { USER_LOGIN, USER_LOGOUT } from 'store/auth/actions'
import { useDispatch } from 'react-redux'
import { GET_USER_ACCOUNT } from './queries.gql'

const useInitAuth = () => {
	const dispatch = useDispatch()
	const [getUserAccountQuery, { loading, error, data }] = useLazyQuery(
		GET_USER_ACCOUNT,
		{
			onCompleted({ getUserAccount }) {
				dispatch(USER_LOGIN({ ...getUserAccount }))
			},
			onError() {
				dispatch(USER_LOGOUT())
			},
		}
	)

	useEffect(() => {
		getUserAccountQuery()
	}, [])

	return { loading, error, data }
}

export default useInitAuth
