import { useState } from 'react';
import { BsCloudRainHeavy } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { MdOutlineWaterDrop } from 'react-icons/md';
import AddressBar from '../../components/AddressBar';
import Category, { ICategory } from '../../components/Category/Category';
import DarkModeToggleButton from '../../components/DarkModeToggleButton';
import DateInfo from '../../components/DateInfo';
import { IForecast } from '../../components/Forecast/Forecast';
import ForecastSlider from '../../components/ForecastSlider';
import LoadingBoundary from '../../components/LoadingBoundary';
import SearchBar from '../../components/SearchBar';
import Temperature from '../../components/Temperature';
import TemperatureUnitToggleButton from '../../components/TemperatureUnitToggleButton';
import Weather from '../../components/Weather';
import useTemperatureUnit from '../../hooks/useTemperatureUnit';
import useWeather, { getWeatherType } from '../../services/weather/useWeather';
import { MainPageLayout } from './styles';

function MainPage() {
	const { weather, fetchMore } = useWeather();
	const { calculateWithUnit, toggleUnit, unit } = useTemperatureUnit();
	const [hideSearchBar, setHideSearchBar] = useState(true);
	const [address, setAddress] = useState(['서울특별시', '종로구', '사직동']);

	const handleSubmitAddress = (address: string[]) => {
		setAddress(address);
		setHideSearchBar(true);
	};

	const categories: ICategory[] = [
		{
			icon: <CiLocationArrow1 style={{ transform: 'rotate(45deg)' }} />,
			name: '풍속',
			value: weather.forecasts[0]?.categories['WSD'],
			unit: 'm/s',
		},
		{
			icon: <MdOutlineWaterDrop />,
			name: '습도',
			value: weather.forecasts[0]?.categories['REH'],
			unit: '%',
		},
		{
			icon: <BsCloudRainHeavy />,
			name: '강수확률',
			value: weather.forecasts[0]?.categories['POP'],
			unit: '%',
		},
	];

	const forecasts: IForecast[] = weather.forecasts.map(
		(forecast) =>
			({
				temperature: calculateWithUnit(forecast.categories['TMP']),
				unit: unit,
				weather: getWeatherType(forecast),
				month: forecast.fcstDate.slice(4, 6),
				date: forecast.fcstDate.slice(6),
				hour: forecast.fcstTime.slice(0, 2),
				minute: forecast.fcstTime.slice(2),
			} as IForecast),
	);

	return (
		<MainPageLayout>
			<LoadingBoundary>
				<section className="inner-main">
					<div className="toggle-buttons">
						<DarkModeToggleButton />
						<TemperatureUnitToggleButton
							checked={unit === 'Fahrenheit'}
							onToggle={toggleUnit}
						/>
					</div>
					<section className="address">
						<AddressBar
							address={address}
							onClick={() => setHideSearchBar((prev) => !prev)}
						/>
						<SearchBar
							hidden={hideSearchBar}
							onSubmitKeyword={handleSubmitAddress}
						/>
					</section>
					<Weather
						type={
							weather.forecasts[0]
								? getWeatherType(weather.forecasts[0])
								: 'sunny'
						}
					/>
					<Temperature
						value={
							calculateWithUnit(weather.forecasts[0]?.categories['TMP']) || 20
						}
						unit={unit}
					/>
					<DateInfo />
					<div className="categories">
						{categories.map((category, idx) => (
							<Category key={idx} data={category} />
						))}
					</div>
					<ForecastSlider data={forecasts} onChange={fetchMore} />
				</section>
			</LoadingBoundary>
		</MainPageLayout>
	);
}

export default MainPage;
