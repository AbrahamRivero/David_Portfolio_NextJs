import { useState } from 'react'
import withHoc from 'components/hocs/withHoc'
import PasswordInput from './PasswordInput'

const withContainer = withHoc(({ onChange }) => {
	const [password, setPassword] = useState('')
	const [textVisibility, setTextVisibility] = useState(false)
	const handleOnChange = event => {
		setPassword(event.target.value)
		onChange && onChange(event)
	}
	return {
		handleToggleVisibility: () => {
			setTextVisibility(!textVisibility)
		},
		onChange: handleOnChange,
		password,
		textVisibility
	}
})

export default withContainer(PasswordInput)
