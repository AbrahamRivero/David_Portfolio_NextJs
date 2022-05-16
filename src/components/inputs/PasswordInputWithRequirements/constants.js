import {
	atLeast1LowerCase,
	atLeast1Number,
	atLeast1UpperCase,
	noWhiteSpaces,
} from 'validation/helpers'

export const REQUIREMENTS = [
	{
		text: 'No whitespaces',
		validate: val => noWhiteSpaces(val),
	},
	{
		text: 'Between 8 and 30 characters long',
		validate: val => val.length >= 8 && val.length <= 30,
	},
	{
		text: 'At least one numeric character',
		validate: val => atLeast1Number(val),
	},
	{
		text: 'At least one upper case character',
		validate: val => atLeast1UpperCase(val),
	},
	{
		text: 'At least one lower case character',
		validate: val => atLeast1LowerCase(val),
	},
]
