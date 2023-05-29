import { useEffect, useState } from 'react';

export default function useTheme() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);

	return {
		theme,
		toggleTheme: () =>
			setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
	};
}
