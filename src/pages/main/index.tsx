import axios from 'axios';
import { useEffect } from 'react';
import { BsArrowUpLeft, BsCloudRainHeavy } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import {
	MdOutlineLocationOn,
	MdOutlineWaterDrop,
	MdSearch,
} from 'react-icons/md';
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import { WiCloudy } from 'react-icons/wi';
import { ReactComponent as PartialSunny } from '../../assets/w_partial_sunny.svg';
import { Forecasts, MainPageLayout } from './styles';

/*
http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20210628&base_time=0500&nx=55&ny=127
*/

/*
	.container.main
		.inner-main
			.toggle-buttons
				label.dark-mode
					input[checkbox]
					span.slider
				label.temperature-unit
					input[checkbox]
					span.slider
			section.address
				.address-bar
					font-icon
					span * 3,
					button.btn-search > font-icon
				.search-bar
					input[text]
					ul.auto-complete
						li.auto-complete-item
							span > b
							font-icon
			.weather
				svg-icon
			.temperature
				span, font-icon
			.date-info
				p
				.day-time
					span.day
					span.time
			.categories
				.category
					font-icon
					span.category-name
					span.category-value
					span.unit
			.forecasts
				.forecast
					.temperature
						span, font-icon
					.weather
						font-icon
					.date-info
						span * 2

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

	return (
		<MainPageLayout>
			<section className="inner-main">
				<div className="toggle-buttons">
					<label className="btn-toggle dark-mode">
						<input type="checkbox" name="dark-mode" />
						<span className="slider"></span>
					</label>
					<label className="btn-toggle temperature-unit">
						<input type="checkbox" name="temperature-unit" />
						<span className="slider"></span>
					</label>
				</div>
				<section className="address">
					<div className="address-bar">
						<div>
							<MdOutlineLocationOn />
							<span>인천</span>
							<span>미추홀구</span>
							<span>용현동</span>
						</div>
						<button type="button" className="btn-search">
							<MdSearch />
						</button>
					</div>
					<div className="search-bar">
						<input type="text" name="search-keyword" className="invalid" />
						<p className="hint">
							지역명을 다시 입력해 주세요. (예시: 서울특별시 종로구 사직동)
						</p>
						<ul className="auto-complete">
							<li className="auto-complete-item">
								<p>
									<b>인천</b>&nbsp;
									<span>미추홀구</span>
								</p>
								<BsArrowUpLeft />
							</li>
							<li className="auto-complete-item">
								<p>
									<b>인천</b>&nbsp;
									<span>미추홀구</span>
								</p>
								<BsArrowUpLeft />
							</li>
							<li className="auto-complete-item">
								<p>
									<b>인천</b>&nbsp;
									<span>미추홀구</span>
								</p>
								<BsArrowUpLeft />
							</li>
							<li className="auto-complete-item">
								<p>
									<b>인천</b>&nbsp;
									<span>미추홀구</span>
								</p>
								<BsArrowUpLeft />
							</li>
							<li className="auto-complete-item">
								<p>
									<b>인천</b>&nbsp;
									<span>미추홀구</span>
								</p>
								<BsArrowUpLeft />
							</li>
						</ul>
					</div>
				</section>
				<div className="weather">
					<PartialSunny />
				</div>
				<div className="temperature">
					<span>27</span>
					<RiCelsiusLine />
				</div>
				<div className="date-info">
					<p>2023년 05월 26일</p>
					<div className="day-time">
						<span className="day">금요일</span>
						<span className="time">16시 00분</span>
					</div>
				</div>
				<div className="categories">
					<div className="category">
						<CiLocationArrow1 style={{ transform: 'rotate(45deg)' }} />
						<span className="category-name">풍속</span>
						<span className="category-value">10</span>
						<span className="unit">km/h</span>
					</div>
					<div className="category">
						<BsCloudRainHeavy />
						<span className="category-name">풍속</span>
						<span className="category-value">10</span>
						<span className="unit">km/h</span>
					</div>
					<div className="category">
						<MdOutlineWaterDrop />
						<span className="category-name">풍속</span>
						<span className="category-value">10</span>
						<span className="unit">km/h</span>
					</div>
					<div className="category">
						<MdOutlineWaterDrop />
						<span className="category-name">풍속</span>
						<span className="category-value">10</span>
						<span className="unit">km/h</span>
					</div>
				</div>
				<Forecasts>
					<div className="forecast">
						<div className="temperature">
							<span>24</span>
							<RiFahrenheitLine />
						</div>
						<div className="weather">
							<WiCloudy />
						</div>
						<div className="date-info">
							<p>05월 26일</p>
							<p>14:00</p>
						</div>
					</div>
					<div className="forecast">
						<div className="temperature">
							<span>24</span>
							<RiFahrenheitLine />
						</div>
						<div className="weather">
							<WiCloudy />
						</div>
						<div className="date-info">
							<p>05월 26일</p>
							<p>14:00</p>
						</div>
					</div>
				</Forecasts>
			</section>
		</MainPageLayout>
	);
}

export default MainPage;
