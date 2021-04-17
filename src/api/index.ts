import { http, Options } from 'api/http'
import { SERVER_URL } from 'constants/config'

export const api = async <T>(options: Options): Promise<T> => {
	try {
		const { url, method, body, signal } = options

		const path = `${SERVER_URL}/${url}`

		return await http(path, method, body, signal)
	} catch (error) {
		throw error
	}
}
