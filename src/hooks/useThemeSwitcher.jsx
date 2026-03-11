import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const getInitialTheme = () => {
		const stored = localStorage.getItem('theme');
		if (stored === 'dark' || stored === 'light') return stored;
		// Default to light theme for first-time visitors
		return 'light';
	};

	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('dark', 'light');
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return [theme, setTheme];
};

export default useThemeSwitcher;
