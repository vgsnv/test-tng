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

	const resJson = await res.json()

	if (!res.ok) {
		throw new Error(res.statusText) //{ code: 'SERVER_ERROR', status: res.status, message: res.message, error: res.error, path: res.path }
	}

	return resJson
}
