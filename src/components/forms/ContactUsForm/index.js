import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { userDisplayName, userEmail } from 'validation/schemas'
import {
	SUBJECT_FIELD_NAME,
	CUSTOMER_NAME_FIELD,
	CUSTOMER_EMAIL_FIELD,
	DESCRIPTION_FIELD,
	DESCRIPTION_FIELD_MAX_LENGTH,
} from './constants'
import { useMutation } from '@apollo/client'
import { SEND_CONTACT_REQUEST } from './mutations.gql'
import { MAX_LENGTH_ERROR_TXT } from 'constants/validation-errors'
import withHoc from 'components/hocs/withHoc'
import * as yup from 'yup'
import useProcessGraphQLErrors from 'components/hooks/useProcessGraphQLErrors'
import ContactUsForm from './ContactUsForm'

const validationSchema = yup
	.object({
		[CUSTOMER_EMAIL_FIELD]: userEmail.required(),
		[CUSTOMER_NAME_FIELD]: userDisplayName.required(),
		[DESCRIPTION_FIELD]: yup
			.string()
			.max(
				DESCRIPTION_FIELD_MAX_LENGTH,
				MAX_LENGTH_ERROR_TXT.replace('[NUMBER]', DESCRIPTION_FIELD_MAX_LENGTH)
			)
			.required(),
		[SUBJECT_FIELD_NAME]: yup.string().required(),
	})
	.required()

const withContainer = withHoc(({ onSuccess }) => {
	const [initialSubjectsState, setInitialSubjectsState] = useState('')

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

	const { globalErrorProcessor } = useProcessGraphQLErrors()

	const [sendContactRequest, { loading }] = useMutation(SEND_CONTACT_REQUEST, {
		onCompleted(data) {
			reset()
			setInitialSubjectsState('')

			onSuccess && onSuccess(data)
		},
		onError(errorObj) {
			globalErrorProcessor(errorObj)
		},
	})

	const sendContactInfoRequest = async ({
		subjectId,
		customerName,
		customerEmail,
		description,
	}) => {
		await sendContactRequest({
			variables: {
				subjectId,
				customerName,
				customerEmail,
				description,
			},
		})
	}

	const handleChange = event => {
		setInitialSubjectsState(event.target.value)
	}

	return {
		handleSubmit: handleSubmit(sendContactInfoRequest),
		register,
		validationErrors: errors,
		loading,
		initialSubjectsState,
		handleChange,
	}
})

export default withContainer(ContactUsForm)
