import { api } from 'api'
import { PostTenantsFail, PostTenantsSuccess, post_tenants } from 'api/resources/tenants/post_tenants/post_tenants'
import { TextInput } from 'components/TextInput'
import React, { FC, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, FormItem } from './styledComponents'

const isNotEmptyFiels = (value: string): boolean => {
	return value.length > 0
}

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateEmail = (mail: string): boolean => {
	return re.test(mail.toLowerCase())
}

export const Home: FC = () => {
	let history = useHistory()

	const [isFirstRender, setIsFirstRender] = useState(true)

	const [orgName, setOrgName] = useState('')
	const [propName, setPropName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')

	const onSave = async () => {
		try {
			const res = await api<PostTenantsSuccess | PostTenantsFail>(
				post_tenants({
					tenantName: orgName,
					propertyName: propName,
					email: email,
					lastName: lastName,
					firstName: firstName,
				})
			)

			if ('id' in res) {
				history.push('/check-activation-code', {
					id: res.id,
				})
			} else {
				console.log('hello', res.message)
			}
		} catch (error) {
			alert(
				'Скорее всего такой пользотель уже есть на локальном сервере, ну или он просто сломался. В любом случае не расстраивайтесь, а попробуйте перезагрузить страницу :)'
			)
		}
	}

	const handleSubmit = () => {
		setIsFirstRender(false)

		if (
			isNotEmptyFiels(orgName) &&
			isNotEmptyFiels(propName) &&
			isNotEmptyFiels(firstName) &&
			isNotEmptyFiels(lastName) &&
			isNotEmptyFiels(email)
		) {
			onSave()
		}
	}

	return (
		<div
			style={{
				margin: 20,
			}}
		>
			<FormItem>
				<TextInput
					valid={isFirstRender || isNotEmptyFiels(orgName)}
					label={'Organization Name'}
					value={orgName}
					onChange={(e) => setOrgName(e.target.value)}
				/>
			</FormItem>

			<FormItem>
				<TextInput
					valid={isFirstRender || isNotEmptyFiels(propName)}
					label={'Property Name'}
					value={propName}
					onChange={(e) => setPropName(e.target.value)}
				/>
			</FormItem>

			<FormItem>
				<TextInput
					valid={isFirstRender || isNotEmptyFiels(firstName)}
					label={'Your First Name'}
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</FormItem>

			<FormItem>
				<TextInput
					valid={isFirstRender || isNotEmptyFiels(lastName)}
					label={'Your Last Name'}
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</FormItem>

			<FormItem>
				<TextInput
					valid={isFirstRender || validateEmail(email)}
					label={'Your Email Name'}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormItem>

			<Button onClick={handleSubmit}>Confirm Registration</Button>
		</div>
	)
}
