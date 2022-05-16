import * as yup from 'yup'
import {
	MAX_LENGTH_ERROR_TXT,
	INVALID_PASSWORD_ERROR_TXT,
} from '../constants/validation-errors'
import {
	atLeast1LowerCase,
	noWhiteSpaces,
	atLeast1Number,
	atLeast1UpperCase,
} from './helpers'

export const userDisplayName = yup
	.string()
	.trim()
	.max(100, MAX_LENGTH_ERROR_TXT.replace('[NUMBER]', 100))

export const userEmail = yup.string().trim().email()

export const userPassword = yup
	.string()
	.required()
	.test(
		'validPassword',
		INVALID_PASSWORD_ERROR_TXT,
		value =>
			noWhiteSpaces(value) &&
			atLeast1Number(value) &&
			atLeast1LowerCase(value) &&
			atLeast1UpperCase(value) &&
			value.length >= 8 &&
			value.length <= 30
	)
