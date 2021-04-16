import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { Button } from './styledComponents'

export const Home: FC = () => {
	let history = useHistory()

	const handleSubmit = () => {
		history.push('/check-activation-code')
	}

	return (
		<div>
			<Button onClick={handleSubmit}>Confirm Registration</Button>
		</div>
	)
}
