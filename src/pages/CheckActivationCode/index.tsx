import { SmallInput } from 'components/SmallInput'
import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const CheckActiovationCode: FC = () => {
	const location = useLocation<{ id: string }>()

	const [cells, setCells] = useState(['', '', '', '', '', ''])
	const id = location.state.id

	useEffect(() => {
		console.log('cells', cells)
		if (cells.every((x) => x.length > 0)) {
			console.log('hello cells full', cells)
		}
	}, [cells])

	return (
		<div>
			<SmallInput
				cells={cells}
				onChangeCell={(newVal, i) => {
					setCells(cells.map((x, index) => (index === i ? newVal : x)))
				}}
			/>
			Check Code
		</div>
	)
}
