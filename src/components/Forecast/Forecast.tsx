import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import {
	WiCloudy,
	WiDayCloudy,
	WiDaySunny,
	WiRain,
	WiShowers,
	WiSleet,
	WiSnow,
} from 'react-icons/wi';
import { WeatherType } from '../Weather/Weather';
import { ForecastLayout } from './Forecast.styles';

export interface IForecast {
	temperature: number;
	unit: 'Celsius' | 'Fahrenheit';
	weather: WeatherType;
	month: string;
	date: string;
	hour: string;
	minute: string;
}

interface Props {
	data: IForecast;
}

function Forecast({
	data: { temperature, unit, weather, month, date, hour, minute },
}: Props) {
	let weatherIcon = null;
	switch (weather) {
		case 'sunny':
			weatherIcon = <WiDaySunny />;
			break;
		case 'partial_sunny':
			weatherIcon = <WiDayCloudy />;
			break;
		case 'cloudy':
			weatherIcon = <WiCloudy />;
			break;
		case 'rain':
			weatherIcon = <WiShowers />;
			break;
		case 'rain_hard':
			weatherIcon = <WiRain />;
			break;
		case 'snow':
			weatherIcon = <WiSnow />;
			break;
		case 'snow_rain':
			weatherIcon = <WiSleet />;
			break;
	}

	return (
		<ForecastLayout>
			<div className="temperature">
				<span>{temperature}</span>
				{unit === 'Celsius' ? <RiCelsiusLine /> : <RiFahrenheitLine />}
			</div>
			<div className="weather">{weatherIcon}</div>
			<div className="date-info">
				<p>
					{month}월 {date}일
				</p>
				<p>
					{hour}:{minute}
				</p>
			</div>
		</ForecastLayout>
	);
}

export default Forecast;
