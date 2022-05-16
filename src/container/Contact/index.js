import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	CUSTOMER_NAME_FIELD,
	CUSTOMER_EMAIL_FIELD,
	DESCRIPTION_FIELD,
} from './constants'
import { client } from '../../client'
import withHoc from '../../components/hocs/withHoc'
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

	const handlerSubmit = ({ customerName, customerEmail, description }) => {
		setLoading(true)
		const contact = {
			_type: 'contact',
			name: customerName,
			email: customerEmail,
			message: description,
		}

		client
			.create(contact)
			.then(() => {
				setLoading(false)
				setIsFormSubmitted(true)
			})
			.catch(err => console.log(err))
		
		reset()
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
