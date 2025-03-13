// @ts-ignore
function addAuthHeader(options) {
	const token = "d64a0e9a-3dd5-4dda-bbb9-862dab5ce3f2";

	return {
		...options,
		headers: {
			...options.headers,
			Authorization: `Bearer ${token}`
		}
	};
}

const client = {
	async Get(url : string , endpoint : string) {
		const fullUrl = `${url}${endpoint}`;
		const config = addAuthHeader({method: 'GET'})

		return await handleResponse(await fetch(fullUrl, config));
	},

	async GetRemote(url : string, endpoint : string) {
		const fullUrl = `${url}${endpoint}`;
		const config = addAuthHeader({method: 'GET'})

		return await fetch(fullUrl, config);
	}
}

async function handleResponse(response : Response) {
	if(!response.ok) {
		throw Error();
	}

	return response.json();
}
export default client;

