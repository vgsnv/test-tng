import { api } from 'api'
import { PostTenantsFail, PostTenantsSuccess, post_tenants } from 'api/resources/tenants/post_tenants/post_tenants'
import { TextInput } from 'components/TextInput'
import { validateEmail } from 'helpers'
import React, { FC, useState } from 'react'
import { useHistory } from 'react-router'
import {
	Button,
	ButtonText,
	FormItem,
	Header,
	MainContent,
	MainContentHeader,
	MainContentSubHeader,
	SubHeader,
	Terms,
} from './styledComponents'

const logo = require('assets/logo.png')

const isNotEmptyFiels = (value: string): boolean => {
	return value.length > 0
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
			validateEmail(email)
		) {
			onSave()
		}
	}

	return (
		<div
			style={{
				height: 900,
				width: 1440,
				display: 'flex',
				justifyContent: 'row',
			}}
		>
			<div
				style={{
					height: 900,
					width: 530,
					background: 'linear-gradient(180deg, #0466C8 0%, #023E7D 100%)',
				}}
			>
				<img src={logo} />
				<Header>Welcome to TNG4</Header>

				<SubHeader>The solution for the hospitality industry.</SubHeader>
			</div>

			<div
				style={{
					width: 910,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<MainContent>
					<MainContentHeader>
						We are thrilled to welcome you as a new part of the HRS global community.
					</MainContentHeader>
					<MainContentSubHeader>Please get started by completing the registration form below.</MainContentSubHeader>
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

					<Button onClick={handleSubmit}>
						<ButtonText>Confirm Registration</ButtonText>
					</Button>

					<Terms>
						By continuing, you’re agreeing to our{' '}
						<span style={{ color: '#0466C8' }}> Customer Terms of Service, Privacy Policy </span>
						and <span style={{ color: '#0466C8' }}> Cookie Policy.</span>
					</Terms>
				</MainContent>
			</div>
		</div>
	)
}
