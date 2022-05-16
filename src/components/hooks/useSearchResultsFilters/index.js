import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
	DEFAULT_DISTANCE_FILTER,
	DEFAULT_RATING_FILTER,
	DISTANCE_URL_PARAM,
	RATING_URL_PARAM,
} from './constants'
import { updateURLQueryParams } from 'helpers/utils'

const useSearchResultsFilters = pushUrlOnValuesChanged => {
	const [distance, setDistance] = useState(DEFAULT_DISTANCE_FILTER)
	const [rating, setRating] = useState(DEFAULT_RATING_FILTER)
	const [hoveredRating, setHoveredRating] = useState(-1)

	const [isInitialiced, setIsInitialiced] = useState(false)
	const { query, push } = useRouter()

	const newQuery = updateURLQueryParams(query, {
		[RATING_URL_PARAM]: rating,
		[DISTANCE_URL_PARAM]: distance,
	})

	const showResetBtn =
		distance !== DEFAULT_DISTANCE_FILTER || rating !== DEFAULT_RATING_FILTER

	const pushUrl = () => {
		newQuery.length && push(newQuery, undefined, { shallow: true })
	}

	useEffect(() => {
		if (isInitialiced && pushUrlOnValuesChanged) {
			pushUrl()
		} else {
			setIsInitialiced(true)
		}
	}, [distance, rating])

	const updateDistance = val => {
		setDistance(val)
	}

	const updateRating = val => {
		setRating(val)
	}

	const updateHoveredRating = val => {
		setHoveredRating(val)
	}

	const resetFilters = () => {
		updateDistance(DEFAULT_DISTANCE_FILTER)
		updateRating(DEFAULT_RATING_FILTER)
		updateHoveredRating(-1)
	}

	const updateFilterFromQueryParams = () => {
		const rating = query[RATING_URL_PARAM]
			? +query[RATING_URL_PARAM]
			: DEFAULT_RATING_FILTER
		const distance = query[DISTANCE_URL_PARAM]
			? +query[DISTANCE_URL_PARAM]
			: DEFAULT_DISTANCE_FILTER

		updateDistance(distance)
		updateRating(rating)
	}

	return {
		rating,
		distance,
		hoveredRating,
		showResetBtn,
		updateDistance,
		updateRating,
		updateHoveredRating,
		resetFilters,
		pushUrl,
		updateFilterFromQueryParams,
	}
}

export default useSearchResultsFilters
