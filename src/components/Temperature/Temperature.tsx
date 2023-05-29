import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import { TemperatureLayout } from './Temperature.styles';

type Props = {
	unit: 'Celsius' | 'Fahrenheit';
	value: number;
};

function Temperature({ unit, value }: Props) {
	return (
		<TemperatureLayout>
			<span>{value}</span>
			{unit === 'Celsius' ? <RiCelsiusLine /> : <RiFahrenheitLine />}
		</TemperatureLayout>
	);
}

export default Temperature;
