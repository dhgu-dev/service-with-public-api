import axios, { AxiosRequestConfig } from 'axios';

class HttpClient {
	private static instance: HttpClient;

	private constructor() {}

	public static getInstance() {
		if (!HttpClient.instance) {
			HttpClient.instance = new HttpClient();
		}
		return HttpClient.instance;
	}

	public async get<T>(url: string, config: AxiosRequestConfig) {
		try {
			const response = await axios.get<T>(url, config);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export default HttpClient;
