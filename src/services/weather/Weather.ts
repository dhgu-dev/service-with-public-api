import {
	Category,
	Forecast,
	PTYCodeKey,
	PTY_CODE,
	SKYCodeKey,
	SKY_CODE,
	WeatherField,
} from './types';

class Weather {
	private baseDate: string;
	private baseTime: string;
	private forecasts: Forecast[] = [];
	private nx: number;
	private ny: number;

	constructor({
		baseDate,
		baseTime,
		nx,
		ny,
	}: Pick<WeatherField, 'baseDate' | 'baseTime' | 'nx' | 'ny'>) {
		this.baseDate = baseDate;
		this.baseTime = baseTime;
		this.nx = nx;
		this.ny = ny;
	}

	public updateForecast(field: WeatherField) {
		const forecast = this.forecasts.find(
			(forecast) =>
				field.fcstDate === forecast.fcstDate &&
				field.fcstTime === forecast.fcstTime,
		);
		if (!forecast) {
			this.forecasts.push({
				fcstDate: field.fcstDate,
				fcstTime: field.fcstTime,
				categories: new Map(),
			});
			return;
		}

		const newFcstValue = this.isCodeValue(field.category)
			? this.mapCodeToText(field.fcstValue, field.category)
			: field.fcstValue;

		forecast.categories.set(field.category, newFcstValue);
	}

	private isCodeValue(category: Category) {
		return category === 'SKY' || category === 'PTY';
	}

	private mapCodeToText(code: number | string, category: Category) {
		if (category === 'SKY') {
			return SKY_CODE[code as SKYCodeKey];
		}

		if (category === 'PTY') {
			return PTY_CODE[code as PTYCodeKey];
		}

		return code;
	}
}

export default Weather;
