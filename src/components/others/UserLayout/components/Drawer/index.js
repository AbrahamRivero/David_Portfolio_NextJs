import { useState } from 'react'
import { useRouter } from 'next/router'
import { extractURLPath } from '../../../../../helpers/utils'
import withHoc from '../../../../hocs/withHoc'
import NavigationDrawer from './NavigationDrawer'

const withContainer = withHoc(() => {
	const [toggle, setToggle] = useState(false)
	const { asPath } = useRouter()
	const currentURL = extractURLPath(asPath)

	return {
		toggle,
		setToggle,
		currentURL,
	}
})

export default withContainer(NavigationDrawer)
