import { useState } from 'react'
import { REQUIREMENTS } from './constants'
import withHoc from 'components/hocs/withHoc'
import PasswordInputWithRequirements from './PasswordInputWithRequirements'

export const withContainer = withHoc(({
	password = ''
}) => {
	const [showTooltip, setShowTooltip] = useState(false)
	const requirements = REQUIREMENTS.map(({ text, validate }) => ({
		text,
		meetRequirement: validate(password),
	}))
	const meetAllRequirements = REQUIREMENTS.every(({ validate }) =>
		validate(password)
	)
	return {
		handleOpen: setShowTooltip,
		open: showTooltip,
		password,
		requirements,
		meetAllRequirements
	}
})

export default withContainer(PasswordInputWithRequirements)
