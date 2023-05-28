import axios from 'axios';
import { useEffect } from 'react';
import { BsCloudRainHeavy } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { MdOutlineWaterDrop } from 'react-icons/md';
import AddressBar from '../../components/AddressBar';
import Category, { ICategory } from '../../components/Category/Category';
import DarkModeToggleButton from '../../components/DarkModeToggleButton';
import DateInfo from '../../components/DateInfo';
import { IForecast } from '../../components/Forecast/Forecast';
import ForecastSlider from '../../components/ForecastSlider';
import SearchBar from '../../components/SearchBar';
import Temperature from '../../components/Temperature';
import TemperatureUnitToggleButton from '../../components/TemperatureUnitToggleButton';
import Weather from '../../components/Weather';
import { MainPageLayout } from './styles';

/*
http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20210628&base_time=0500&nx=55&ny=127
*/

function MainPage() {
	const apiCall = async () => {
		try {
			const response = await axios.get(
				'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
				{
					params: {
						serviceKey: process.env.REACT_APP_API_KEY,
						pageNo: 35,
						numOfRows: 12,
						dataType: 'JSON',
						base_date: '20230523',
						base_time: '0200',
						nx: 55,
						ny: 127,
					},
				},
			);
			console.log(JSON.stringify(response.data.response.body));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		apiCall();
	}, []);

	const categories: ICategory[] = [
		{
			icon: <CiLocationArrow1 style={{ transform: 'rotate(45deg)' }} />,
			name: '풍속',
			value: 10,
			unit: 'm/s',
		},
		{
			icon: <MdOutlineWaterDrop />,
			name: '습도',
			value: 23,
			unit: '%',
		},
		{
			icon: <BsCloudRainHeavy />,
			name: '강수확률',
			value: 15,
			unit: '%',
		},
	];

	const forecasts: IForecast[] = [
		{
			temperature: 27,
			unit: 'Celsius',
			weather: 'rain',
			month: '05',
			date: '26',
			hour: '14',
			minute: '30',
		},
		{
			temperature: 27,
			unit: 'Fahrenheit',
			weather: 'sunny',
			month: '05',
			date: '26',
			hour: '14',
			minute: '30',
		},
		{
			temperature: 27,
			unit: 'Celsius',
			weather: 'snow_rain',
			month: '05',
			date: '26',
			hour: '14',
			minute: '30',
		},
		{
			temperature: 27,
			unit: 'Fahrenheit',
			weather: 'partial_sunny',
			month: '05',
			date: '26',
			hour: '14',
			minute: '30',
		},
		{
			temperature: 27,
			unit: 'Fahrenheit',
			weather: 'partial_sunny',
			month: '05',
			date: '26',
			hour: '14',
			minute: '30',
		},
	];

	return (
		<MainPageLayout>
			<section className="inner-main">
				<div className="toggle-buttons">
					<DarkModeToggleButton />
					<TemperatureUnitToggleButton />
				</div>
				<section className="address">
					<AddressBar address={['서울특별시', '종로구', '사직동']} />
					<SearchBar />
				</section>
				<Weather type="rain" />
				<Temperature value={27} unit="Celsius" />
				<DateInfo />
				<div className="categories">
					{categories.map((category, idx) => (
						<Category key={idx} data={category} />
					))}
				</div>
				<ForecastSlider data={forecasts} />
			</section>
		</MainPageLayout>
	);
}

export default MainPage;
