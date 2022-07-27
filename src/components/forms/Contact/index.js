import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	CUSTOMER_NAME_FIELD,
	CUSTOMER_EMAIL_FIELD,
	DESCRIPTION_FIELD,
} from './constants'
import withHoc from '../../hocs/withHoc'
import * as yup from 'yup'
import Contact from './Contact'

const validationSchema = yup
	.object({
		[CUSTOMER_EMAIL_FIELD]: yup.string().trim().email().required(),
		[CUSTOMER_NAME_FIELD]: yup.string().required(),
		[DESCRIPTION_FIELD]: yup.string().required(),
	})
	.required()

const withContainer = withHoc(() => {
	const [loading, setLoading] = useState(false)
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			[CUSTOMER_NAME_FIELD]: '',
			[CUSTOMER_EMAIL_FIELD]: '',
			[DESCRIPTION_FIELD]: '',
		},
	})

	const handlerSubmit = async ({
		customerName,
		customerEmail,
		description,
	}) => {
		setLoading(true)
		try {
			const reqBody = { customerName, customerEmail, description }
			const response = await fetch('/api/feedback', {
				method: 'POST',
				body: JSON.stringify(reqBody),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const json = await response.json()
		} catch (err) {
			console.log(err)
		}

		reset()
		setLoading(false)
	}

	return {
		handleSubmit: handleSubmit(handlerSubmit),
		register,
		loading,
		isFormSubmitted,
		validationErrors: errors,
	}
})

export default withContainer(Contact)
