import React, { FC, ChangeEvent } from 'react'
import { Input } from './styledComponents'

export const TextInput: FC<{
	label: string
	value: string
	valid?: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = ({ label, value, valid = true, onChange }) => {
	console.log('valid', valid)
	return (
		<div
			style={{
				height: 60,
			}}
		>
			{value.length > 0 && (
				<p
					style={{
						position: 'relative',
						top: 6,
						left: 8,
						fontSize: 10,
						margin: 0,
						background: '#fff',
						paddingLeft: 4,
						paddingRight: 4,
					}}
				>
					{label}
				</p>
			)}

			{value.length === 0 && (
				<div
					style={{
						position: 'relative',
						top: 0,
						height: 11,
					}}
				/>
			)}
			<Input valid={valid} type="text" value={value} onChange={onChange} placeholder={label} />
		</div>
	)
}
