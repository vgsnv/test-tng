import { Options } from 'api/http'

export type PostTenantsFail = {
	timestamp: string
	status: number
	error: string
	message: string
	path: string
}

export type PostTenantsSuccess = {
	id: string
	lastName: string
	firstName: string
	tenantName: string
	propertyName: string
	email: string
	active: boolean
}

type Body = {
	tenantName: string
	propertyName: string
	email: string
	lastName: string
	firstName: string
}

export const post_tenants = (body: Body): Options => {
	return {
		url: 'api/tenants',
		method: 'POST',
		body,
	}
}
