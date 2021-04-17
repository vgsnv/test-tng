import React, { FC } from 'react'
import { useLocation } from 'react-router'

export const CheckActiovationCode: FC = () => {
	const location = useLocation<{ id: string }>()
	console.log('----------', location)

	const id = location.state.id

	return <div>Check Code</div>
}
