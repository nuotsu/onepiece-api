import React from 'react'

const chars = [
	'…',
]

const Char = ({ value }) => (
	<code
		style={{
			cursor: 'pointer',
			padding: '.25em .5em',
			borderRadius: '.25em',
		}}
		onClick={() => navigator.clipboard.writeText(value)}
	>
		{value}
	</code>
)

export default (
	<div style={{
		display: 'flex',
		flexWrap: 'wrap',
		gap: '0 .5em',
		marginTop: '.25em'
	}}>
		{chars?.map(char => <Char value={char} />)}
	</div>
)
