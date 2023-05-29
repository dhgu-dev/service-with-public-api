import { ToggleButtonLayout } from './ToggleButton.styles';

interface Props {
	name: string;
	onToggle?: React.ChangeEventHandler<HTMLInputElement>;
	checked?: boolean;
	labelOn: string;
	labelOff: string;
}

function ToggleButton({
	name,
	onToggle,
	checked = false,
	labelOn,
	labelOff,
}: Props) {
	return (
		<ToggleButtonLayout $labelOn={labelOn} $labelOff={labelOff}>
			<input
				type="checkbox"
				name={name}
				onChange={onToggle}
				defaultChecked={checked}
			/>
			<span className="slider"></span>
		</ToggleButtonLayout>
	);
}

export default ToggleButton;
