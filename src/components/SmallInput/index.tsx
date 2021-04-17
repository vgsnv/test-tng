import React, { FC, useEffect, useRef } from 'react'
import { Divider, Input, Line, Wrapper } from './styledComponents'

const isNan = (val: string): boolean => {
	return /^\d+$/.test(val)
}

export const SmallInput: FC<{
	cells: Array<string>
	onChangeCell: (newVal: string, i: number) => void
}> = ({ cells, onChangeCell }) => {
	const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

	useEffect(() => {
		if (cells.every((x) => x.length === 0)) {
			refs[0].current.focus()
		}
	}, [cells])

	const handleKeyDown = (numElement: number, e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code !== 'Backspace') {
			if (isNan(e.key)) {
				onChangeCell(e.key, numElement)
				if (numElement !== 5) refs[numElement + 1].current.focus()
			}
		} else {
			onChangeCell('', numElement - 1)
			if (numElement !== 0) refs[numElement - 1].current.focus()
		}
	}

	return (
		<div
			style={{
				margin: 30,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<Wrapper>
				<Input
					valid={true}
					maxLength={1}
					onChange={() => {}}
					ref={refs[0]}
					value={cells[0]}
					onKeyDown={(e) => handleKeyDown(0, e)}
				/>

				<Divider />

				<Input
					valid={true}
					maxLength={1}
					onChange={() => {}}
					ref={refs[1]}
					value={cells[1]}
					onKeyDown={(e) => handleKeyDown(1, e)}
				/>

				<Divider />

				<Input
					valid={true}
					maxLength={1}
					onChange={() => {}}
					ref={refs[2]}
					value={cells[2]}
					onKeyDown={(e) => handleKeyDown(2, e)}
				/>
			</Wrapper>

			<Line />

			<Wrapper>
				<Input
					valid={true}
					maxLength={1}
					onChange={() => {}}
					ref={refs[3]}
					value={cells[3]}
					onKeyDown={(e) => handleKeyDown(3, e)}
				/>

				<Divider />
				<Input
					valid={true}
					maxLength={1}
					onChange={() => {}}
					ref={refs[4]}
					value={cells[4]}
					onKeyDown={(e) => handleKeyDown(4, e)}
				/>

				<Divider />

				<Input
					valid={true}
					maxLength={1}
					onChange={() => {}}
					ref={refs[5]}
					value={cells[5]}
					onKeyDown={(e) => handleKeyDown(5, e)}
				/>
			</Wrapper>
		</div>
	)
}
