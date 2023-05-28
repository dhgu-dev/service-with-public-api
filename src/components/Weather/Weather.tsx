import { ReactComponent as Cloudy } from '../../assets/w_cloudy.svg';
import { ReactComponent as PartialSunny } from '../../assets/w_partial_sunny.svg';
import { ReactComponent as Rain } from '../../assets/w_rain.svg';
import { ReactComponent as RainHard } from '../../assets/w_rain_hard.svg';
import { ReactComponent as Snow } from '../../assets/w_snow.svg';
import { ReactComponent as SnowRain } from '../../assets/w_snow_rain.svg';
import { ReactComponent as Sunny } from '../../assets/w_sunny.svg';
import { WeatherLayout } from './Weather.styles';

export type WeatherType =
	| 'sunny'
	| 'partial_sunny'
	| 'cloudy'
	| 'rain'
	| 'rain_hard'
	| 'snow'
	| 'snow_rain';

type Props = {
	type: WeatherType;
};

function Weather({ type }: Props) {
	let WeatherIcon = null;
	switch (type) {
		case 'sunny':
			WeatherIcon = <Sunny />;
			break;
		case 'partial_sunny':
			WeatherIcon = <PartialSunny />;
			break;
		case 'cloudy':
			WeatherIcon = <Cloudy />;
			break;
		case 'rain':
			WeatherIcon = <Rain />;
			break;
		case 'rain_hard':
			WeatherIcon = <RainHard />;
			break;
		case 'snow':
			WeatherIcon = <Snow />;
			break;
		case 'snow_rain':
			WeatherIcon = <SnowRain />;
			break;
	}

	return <WeatherLayout>{WeatherIcon}</WeatherLayout>;
}

export default Weather;
