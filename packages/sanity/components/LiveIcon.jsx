import { useState, useEffect } from 'react'
import Icon from './Icon'

const LiveIcon = ({ number }) => {
	const [$spoiler, set$spoiler] = useState(number)

	useEffect(() => {
		async function groq(query) {
			const data = await fetch(`https://i9654vp3.api.sanity.io/v2021-10-21/data/query/production?query=${ query }`)
			const { result } = await data.json()
			set$spoiler(result)
		}

		groq`*[_type == 'global'][0].spoiler`
	}, [])

	return Icon(number > $spoiler ? '⚠️' : '📕')()
}

export default LiveIcon
