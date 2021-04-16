import { TextInput } from 'components/TextInput'
import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, FormItem } from './styledComponents'

export const Home: FC = () => {
	let history = useHistory()

	const [orgName, setOrgName] = useState('')
	const [orgNameValid, setOrgNameValid] = useState(true)
	const [propName, setPropName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')

	useEffect(() => {
		if (orgName === '') {
			setOrgNameValid(false)
		} else {
			setOrgNameValid(true)
		}
	}, [orgName])

	const handleSubmit = () => {
		history.push('/check-activation-code')
	}

	return (
		<div
			style={{
				margin: 20,
			}}
		>
			<FormItem>
				<TextInput
					valid={orgNameValid}
					label={'Organization Name'}
					value={orgName}
					onChange={(e) => setOrgName(e.target.value)}
				/>
			</FormItem>

			<FormItem>
				<TextInput label={'Property Name'} value={propName} onChange={(e) => setPropName(e.target.value)} />
			</FormItem>

			<FormItem>
				<TextInput label={'Your First Name'} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
			</FormItem>

			<FormItem>
				<TextInput label={'Your Last Name'} value={lastName} onChange={(e) => setLastName(e.target.value)} />
			</FormItem>

			<FormItem>
				<TextInput label={'Your Email Name'} value={email} onChange={(e) => setEmail(e.target.value)} />
			</FormItem>

			<Button onClick={handleSubmit}>Confirm Registration</Button>
		</div>
	)
}
