import { setLocale } from 'yup'
import {
	INVALID_EMAIL_ERROR_TXT,
	REQUIRED_FIELD_ERROR_TXT,
} from '../constants/validation-errors'

setLocale({
	mixed: {
		required: REQUIRED_FIELD_ERROR_TXT,
	},
	string: {
		email: INVALID_EMAIL_ERROR_TXT,
	},
})
