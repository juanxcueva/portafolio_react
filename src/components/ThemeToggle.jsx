import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../i18n/useLanguage';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useLanguage();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
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