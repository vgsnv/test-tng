import { api } from 'api'
import {
	PostTenantsActivateFail,
	post_tenants_activate,
} from 'api/resources/tenants/post_tenants/post_tenants_activate'
import { SmallInput } from 'components/SmallInput'
import React, { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Description, Info, InfoWrap, MainContent, MainContentHeader, MainContentSubHeader } from './styledComponents'

const defaultCells = ['', '', '', '', '', '']

export const CheckActiovationCode: FC = () => {
	const location = useLocation<{ id: string }>()
	const history = useHistory()

	const [cells, setCells] = useState(defaultCells)
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
			setCells(defaultCells)

			console.log('errrr', error)
			alert('Неправильный статус')
		}
	}

	const handleChangeCells = (newVal: string, i: number): void => {
		setCells(cells.map((x, index) => (index === i ? newVal : x)))
	}

	return (
		<MainContent>
			<MainContentHeader>Check your email for a code</MainContentHeader>
			<MainContentSubHeader>
				We’ve sent a 6-character code to juan.rodriguez@nh-hotels.com. The code expires shortly, so please enter it
				soon.
			</MainContentSubHeader>
			<SmallInput cells={cells} onChangeCell={handleChangeCells} />

			<Description>Can’t find your code? Check your spam folder!</Description>

			<InfoWrap>
				<Info>Terms of Service</Info>
				<Info>Privacy Policy</Info>
				<Info>Contact Us</Info>
			</InfoWrap>
		</MainContent>
	)
}
