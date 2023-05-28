import useTheme from '../hooks/useTheme';
import ToggleButton from './ToggleButton';

function DarkModeToggleButton() {
	const { theme, toggleTheme } = useTheme();
	return (
		<ToggleButton
			name="dark-mode"
			labelOff="L"
			labelOn="D"
			checked={theme === 'dark'}
			onToggle={toggleTheme}
		/>
	);
}

export default DarkModeToggleButton;
