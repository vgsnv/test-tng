import { HEADERS } from 'constants/config'
import { getJson } from './getJson'

interface IHttpResponse<T> extends Response {
	parsedBody?: T
}
type FETCH_METHODS = 'GET' | 'POST'

export type Options = {
	url: string
	method: FETCH_METHODS
	body?: object
	signal?: AbortSignal
}

export const http = async <T>(url: string, method: FETCH_METHODS, body: object, signal: AbortSignal): Promise<T> => {
	const res = await fetch(url, {
		method: method,
		headers: HEADERS,
		credentials: 'include',
		body: JSON.stringify(body),
		signal: signal,
	})

	const contentType = res.headers.get('content-type')

	if (!res.ok) {
		throw new Error(res.statusText)
	}

	let result = null

	if (contentType === 'application/json') {
		result = await res.json()
	}

	return result
}
