// @ts-ignore
import { SALLING_API_KEY } from '$env/static/private';

const baseUrl: string = "https://api.sallinggroup.com";

function addAuthHeader(options) {
	const token = SALLING_API_KEY;

	return {
		...options,
		headers: {
			...options.headers,
			Authorization: `Bearer ${token}`
		}
	};
}

const client = {
  async Get<T>(endpoint : string): Promise<T> {
		const fullUrl = `${baseUrl}${endpoint}`;
		const config = addAuthHeader({method: 'GET'})

		return await handleResponse(await fetch(fullUrl, config));
	},

	async GetRemote(endpoint : string) {
		const fullUrl = `${baseUrl}${endpoint}`;
		const config = addAuthHeader({method: 'GET'})

		return await fetch(fullUrl, config);
	}
}

async function handleResponse<T>(response : Response): Promise<T> {
	if(!response.ok) {
		throw Error();
	}

	return response.json();
}
export default client;

