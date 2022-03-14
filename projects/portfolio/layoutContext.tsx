import { createContext, useContext, useState } from 'react';

export interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: false,
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = (): void => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const ToggleDarkMode = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDark && toggleDark();
  };
  return (
    <>
      <h1>{dark ? '🌙' : '🌞'}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  );
};
