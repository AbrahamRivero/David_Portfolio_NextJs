export const extractURLPath = (url = '') => url.split('?')[0]

export const replaceURLPlaceholders = (url, params) =>
	Object.keys(params).reduce((prevUrl, key) => {
		return prevUrl.replace(`[${key}]`, params[key])
	}, url)

export const updateURLQueryParams = (queryObj, newParamsObj) => {
	const encodedParams = Object.keys(newParamsObj).reduce(
		(prev, key) => ({
			...prev,
			[key]: encodeURIComponent(newParamsObj[key]),
		}),
		{}
	)
	const finalQueryObj = { ...queryObj, ...encodedParams }
	return Object.keys(finalQueryObj).reduce(
		(prev, key, idx) =>
			prev.concat(`${idx === 0 ? '?' : '&'}${key}=${finalQueryObj[key]}`),
		''
	)
}

export const textEllipsis = (text, maxLength) =>
	text.length > maxLength ? `${text.substring(0, maxLength)}...` : text

export const nArray = n => Array.from(Array(n))
