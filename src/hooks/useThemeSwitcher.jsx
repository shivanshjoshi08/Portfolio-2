import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('dark', 'light');
		root.classList.add(theme);
		// ← removed localStorage.setItem, so nothing is saved
	}, [theme]);

	return [theme, setTheme];
};

export default useThemeSwitcher;