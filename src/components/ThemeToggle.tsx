import { useTheme } from '../theme/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  const label = theme === 'light' ? 'Dark mode' : 'Light mode'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

