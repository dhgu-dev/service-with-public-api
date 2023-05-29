import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import fetchWeatherFields from '../../api/fetchWeatherFields';
import { WeatherType } from '../../components/Weather/Weather';
import { baseAtom, loadingAtom, pageNoAtom } from '../../recoil/weather';
import LatGrid from './LatGrid';
import {
	Category,
	Forecast,
	PTYCodeKey,
	PTY_CODE,
	SKYCodeKey,
	SKY_CODE,
	WeatherField,
} from './types';

function getUpdatedForecasts(fields: WeatherField[], forecasts: Forecast[]) {
	const result = [...forecasts];

	fields.forEach((field) => {
		const forecast = result.find(
			(forecast) =>
				field.fcstDate === forecast.fcstDate &&
				field.fcstTime === forecast.fcstTime,
		);

		if (!forecast) {
			result.push({
				fcstDate: field.fcstDate,
				fcstTime: field.fcstTime,
				categories: { [field.category]: field.fcstValue },
			});
			return;
		}

		const newFcstValue = isCodeValue(field.category)
			? mapCodeToText(field.fcstValue, field.category)
			: field.fcstValue;

		forecast.categories = {
			...forecast.categories,
			[field.category]: newFcstValue,
		};
	});

	return result;
}

function isCodeValue(category: Category) {
	return category === 'SKY' || category === 'PTY';
}

function mapCodeToText(code: number | string, category: Category) {
	if (category === 'SKY') {
		return SKY_CODE[code as SKYCodeKey];
	}

	if (category === 'PTY') {
		return PTY_CODE[code as PTYCodeKey];
	}

	return code;
}

export function getWeatherType(forecast: Forecast): WeatherType {
	const pty = forecast.categories['PTY'];
	const sky = forecast.categories['SKY'];

	if (pty) {
		switch (pty) {
			case '비':
				return 'rain';
			case '비/눈':
				return 'snow_rain';
			case '눈':
				return 'snow';
			case '소나기':
				return 'rain_hard';
		}
	}

	switch (sky) {
		case '맑음':
			return 'sunny';
		case '구름많음':
			return 'partial_sunny';
		default:
			return 'cloudy';
	}
}

export default function useWeather() {
	const [pageNo, setPageNo] = useRecoilState(pageNoAtom);
	const [base, setBase] = useRecoilState(baseAtom);
	const [weather, setWeather] = useState<{ forecasts: Forecast[] }>({
		forecasts: [],
	});
	const [maxPage, setMaxPage] = useState(1);
	const latGrid = new LatGrid();
	const setLoading = useSetRecoilState(loadingAtom);

	useEffect(() => {
		const tid = setTimeout(() => setLoading(false), 2000);
		return () => {
			clearTimeout(tid);
		};
	}, [setLoading]);

	useEffect(() => {
		const triggeredPageNo = pageNo;
		fetchWeatherFields(base, pageNo).then((res) => {
			if (!res) return;

			if (triggeredPageNo === 1) {
				setWeather({
					forecasts: getUpdatedForecasts(res.body.items.item, []),
				});
			} else {
				setWeather((prev) => ({
					forecasts: getUpdatedForecasts(res.body.items.item, prev.forecasts),
				}));
			}
			setMaxPage(Math.floor(res.body.totalCount / 96));
		});
	}, [pageNo, base, setLoading]);

	const fetchMore = () =>
		setPageNo((prev) => (prev < maxPage ? prev + 1 : prev));

	const search = (text: string) => {
		const { nx, ny, address } = latGrid.findCoordByAddress(text);
		console.log(`nx: ${nx}, ny: ${ny}, address: ${address}`);
		if (nx === -1 && ny === -1) return address;

		setBase((prev) => ({ ...prev, nx: nx, ny: ny }));
		setPageNo(1);
		return address;
	};

	const getRecommendKeywords = (text: string) => {
		return latGrid.getRecommends(text);
	};

	return {
		fetchMore,
		weather,
		search,
		getRecommendKeywords,
	};
}
