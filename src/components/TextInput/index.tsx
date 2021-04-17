import React, { FC, ChangeEvent } from 'react'
import { Input, Label } from './styledComponents'

export const TextInput: FC<{
	label: string
	value: string
	valid?: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = ({ label, value, valid = true, onChange }) => {
	return (
		<div
			style={{
				height: 60,
			}}
		>
			{value.length > 0 && <Label>{label}</Label>}

			{value.length === 0 && (
				<div
					style={{
						position: 'relative',
						top: 0,
						height: 18,
					}}
				/>
			)}
			<Input valid={valid} type="text" value={value} onChange={onChange} placeholder={label} />
		</div>
	)
}
