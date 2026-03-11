// src/hooks/useTheme.js
import { useState, useEffect, useCallback } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        // Verificar si hay un tema guardado
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio-theme');
            if (saved) return saved;

            // Si no hay tema guardado, usar preferencia del sistema
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
        }
        return 'dark';
    });

    useEffect(() => {
        // Aplicar el tema al documento
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);

        // Actualizar el color de la barra de estado en móviles
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#121212' : '#f5f5f5');
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, []);

    const setSpecificTheme = useCallback((newTheme) => {
        if (newTheme === 'dark' || newTheme === 'light') {
            setTheme(newTheme);
        }
    }, []);

    return {
        theme,
        toggleTheme,
        setTheme: setSpecificTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light'
    };
};

export default useTheme;