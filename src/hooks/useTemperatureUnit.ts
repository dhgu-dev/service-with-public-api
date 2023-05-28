import { useState } from 'react';

export default function useTemperatureUnit() {
	const [unit, setUnit] = useState<'Celsius' | 'Fahrenheit'>('Celsius');

	const calculateWithUnit = (value: string | number) => {
		if (unit === 'Celsius') return Number(value);
		return Math.floor(Number(value) * 1.8 + 32);
	};

	const onToggle = () => {
		if (unit === 'Celsius') {
			setUnit('Fahrenheit');
		} else {
			setUnit('Celsius');
		}
	};

	return {
		calculateWithUnit,
		unit,
		toggleUnit: onToggle,
	};
}
