import { useState } from 'react'

const useFormSubmitted = () => {
	const [isFormSubmited, setIsFormSubmited] = useState(false)

	const isFormSubmitedHandler = () => {
		setIsFormSubmited(prevState => !prevState)
	}

	return { isFormSubmited, isFormSubmitedHandler }
}

export default useFormSubmitted
