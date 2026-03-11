import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
        >
            <div className={`toggle-track ${theme}`}>
                <FaSun className="icon sun" />
                <FaMoon className="icon moon" />
                <div className="toggle-thumb"></div>
            </div>
        </button>
    );
};

export default ThemeToggle;