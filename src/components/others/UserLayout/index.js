import { useSelector, useDispatch } from 'react-redux'
import withHoc from '../../hocs/withHoc'
import { useRouter } from 'next/router'
import { extractURLPath } from '../../../helpers/utils'
import UserLayout from './UserLayout'

const withContainer = withHoc(() => {
	const dispatch = useDispatch()
	const { asPath } = useRouter()
	const currentURL = extractURLPath(asPath)
	return {
		currentURL,
	}
})

export default withContainer(UserLayout)
