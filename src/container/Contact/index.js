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
	const personalEmail = 'riveromartinezabraham@gmail.com'
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
		/* const contact = {
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
		 */
		/* try{
			const options = {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'content-type': 'application/json',
					'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
					'X-RapidAPI-Key': 'c6cb68d467msh6445c18d85dc033p143943jsn6c91b3057cb1',
				},
				body: `{"personalizations":[{"to":[{"email":"${personalEmail}"}],"subject":"Hola, soy ${customerName} y quiero hablar contigo!"}],"from":{"email":"${customerEmail}"},"content":[{"type":"text/plain","value":"${description}"}]}`,
			}
			const response = await fetch(
				'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
				options
			)
			const json = await response.json()
			console.log(json)
		}
		catch(error){
			console.log(error)
		} */

		/* .then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err)) */
		const reqBody = { customerName, customerEmail, description }
		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err))

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
