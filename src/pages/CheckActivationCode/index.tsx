import { api } from 'api'
import {
	PostTenantsActivateFail,
	post_tenants_activate,
} from 'api/resources/tenants/post_tenants/post_tenants_activate'
import { SmallInput } from 'components/SmallInput'
import React, { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

export const CheckActiovationCode: FC = () => {
	const location = useLocation<{ id: string }>()
	const history = useHistory()

	const [cells, setCells] = useState(['', '', '', '', '', ''])
	const id = location.state.id

	useEffect(() => {
		if (cells.every((x) => x.length > 0)) {
			onSave()
		}
	}, [cells])

	const onSave = async () => {
		try {
			await api<PostTenantsActivateFail>(
				post_tenants_activate({
					id: id,
					code: cells.join(''),
				})
			)

			history.push('/success')
		} catch (error) {
			console.log('errrr', error)
			alert('Неправильный статус')
		}
	}

	const handleChangeCells = (newVal: string, i: number): void => {
		setCells(cells.map((x, index) => (index === i ? newVal : x)))
	}

	return (
		<div>
			<SmallInput cells={cells} onChangeCell={handleChangeCells} />
		</div>
	)
}
