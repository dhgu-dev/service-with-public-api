import ToggleButton from './ToggleButton';

type Props = {
	checked: boolean;
	onToggle: () => void;
};

function TemperatureUnitToggleButton({ checked, onToggle }: Props) {
	return (
		<ToggleButton
			name="temperature-unit"
			labelOff="C"
			labelOn="F"
			checked={checked}
			onToggle={onToggle}
		/>
	);
}

export default TemperatureUnitToggleButton;
