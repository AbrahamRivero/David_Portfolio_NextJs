import { SEARCH_URL } from 'constants/urls'
import {
	LOCATION_URL_PARAM,
	PAGE_URL_PARAM,
	TAG_ID_URL_PARAM,
} from './constants'
import { useDispatch } from 'react-redux'
import { GLOBAL_SEARCH_SET_TAG } from 'store/globalSearch/actions'
import { useRouter } from 'next/router'

const useSearch = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const search = (tag, location) => {
		const url = `${SEARCH_URL}?${TAG_ID_URL_PARAM}=${tag}&${LOCATION_URL_PARAM}=${encodeURIComponent(
			location
		)}&${PAGE_URL_PARAM}=1`

		dispatch(
			GLOBAL_SEARCH_SET_TAG({
				tagId: +tag,
				location,
			})
		)

		router.push(url)
	}

	return { search }
}

export default useSearch
