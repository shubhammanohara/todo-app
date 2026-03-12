import { useEffect, useState } from 'react';

const useThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            return storedTheme || 'cmyk';
        }
        return 'cmyk';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'cmyk' ? 'synthwave' : 'cmyk'));
    };

    return { theme, toggleTheme };
};

export default useThemeToggle;
