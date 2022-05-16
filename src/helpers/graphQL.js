export const hasErrorCode = (errorResponse = {}, errorCode) =>
	errorResponse.graphQLErrors?.some(val => val.extensions.code === errorCode)

export const rawFetchAPI = async ({ query, variables }) => {
	const res = await fetch(process.env.NEXT_PUBLIC_API_HOST, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}