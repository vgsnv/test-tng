import { Options } from 'api/http'

export type PostTenantsActivateFail = {
	timestamp: string
	status: number
	error: string
	message: string
	path: string
}

export type PostTenantsActivateSuccess = {}

type UrlParams = {
	id: string
	code: string
}

export const post_tenants_activate = (urlParams: UrlParams): Options => {
	const { id, code } = urlParams
	return {
		url: `/tenants/${id}/activate?otp=${code}`,
		method: 'POST',
		body: null,
	}
}
