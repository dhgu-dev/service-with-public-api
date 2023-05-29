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
		const response = await axios.get<T>(url, config);
		return response.data;
	}
}

export default HttpClient;
