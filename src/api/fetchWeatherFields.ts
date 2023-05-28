import { WeatherApiResponse, WeatherField } from '../services/weather/types';
import HttpClient from './HttpClient';

export default async function fetchWeatherFields(
	base: Pick<WeatherField, 'baseDate' | 'baseTime' | 'nx' | 'ny'>,
	pageNo: number,
) {
	try {
		const { response } = await HttpClient.getInstance().get<{
			response: WeatherApiResponse;
		}>(
			'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
			{
				params: {
					serviceKey: process.env.REACT_APP_API_KEY,
					pageNo: pageNo,
					numOfRows: 96,
					dataType: 'JSON',
					base_date: base.baseDate,
					base_time: base.baseTime,
					nx: base.nx,
					ny: base.ny,
				},
			},
		);

		if (response.header.resultCode !== '00') {
			throw new Error('Api Response Error');
		}

		return response;
	} catch (error) {
		console.error(error);
	}
}
