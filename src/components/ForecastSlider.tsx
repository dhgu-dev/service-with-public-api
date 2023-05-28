import Slider from 'react-slick';
import styled from 'styled-components';
import Forecast, { IForecast } from './Forecast/Forecast';

const ForecastSliderLayout = styled.div`
	width: 50%;
	position: absolute;
	bottom: 30px;
`;

type Props = {
	data: IForecast[];
};

function ForecastSlider({ data }: Props) {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	return (
		<ForecastSliderLayout>
			<Slider {...settings}>
				{data.map((forecast, idx) => (
					<Forecast data={forecast} key={idx} />
				))}
			</Slider>
		</ForecastSliderLayout>
	);
}

export default ForecastSlider;
