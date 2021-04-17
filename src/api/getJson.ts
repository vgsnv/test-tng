export async function getJson<T extends Response>(res: T): Promise<T> {
	const contentType = res.headers.get('content-type')

	if (!contentType) {
		return
	}

	return contentType.startsWith('text/plain;') ? await res.text() : await res.json()
}
