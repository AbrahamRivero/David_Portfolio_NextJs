import { hasErrorCode } from 'helpers/graphQL'
import { useSnackbar } from 'notistack'
import { INTERNAL_SERVER_ERROR } from 'constants/alert-errors'
// eslint-disable-next-line react/display-name
const useGraphQLErrorProcessors = () => {
	const { enqueueSnackbar } = useSnackbar()

	const globalErrorProcessor = errorObj => {
		// TODO: Log the error
		console.log(errorObj)
		enqueueSnackbar(INTERNAL_SERVER_ERROR, { variant: 'error' })
	}

	const processGraphQLErrors = ({
		errorObj,
		errorMap = [],
		globalErrorFallback = true,
	}) => {
		let errorsFound = 0
		for (let i = 0; i < errorMap.length; i++) {
			const { errorCode, errorHandler } = errorMap[i]
			if (hasErrorCode(errorObj, errorCode)) {
				errorHandler()
				errorsFound++
			}
		}
		!errorsFound && globalErrorFallback && globalErrorProcessor(errorObj)
	}

	return { processGraphQLErrors, globalErrorProcessor }
}

export default useGraphQLErrorProcessors
