import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { TAGS_SET } from 'store/allTags/actions'
import { useDispatch } from 'react-redux'
import { SEARCH_TAGS } from './queries.gql'

const useInitTags = () => {
	const dispatch = useDispatch()
	const [getAllTags, { loading, error, data }] = useLazyQuery(
		SEARCH_TAGS,
		{
			onCompleted({ searchTags }) {
				dispatch(TAGS_SET(searchTags.map(({ id, tagName, tagShortDescription }) => ({ id, tagName, tagShortDescription }))))
			},
			onError() {
				dispatch(TAGS_SET([]))
			},
		}
	)

	useEffect(() => {
		getAllTags()
	}, [])

	return { loading, error, data }
}

export default useInitTags
