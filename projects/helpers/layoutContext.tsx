import { createContext, useContext, useState } from 'react';
import { defaultLayoutProps } from '../../projects/portfolio/defaultLayoutProps';

export interface ILayoutContext {
  dark: boolean;
  toggleDark?: () => void;
  pageTitle: string;
  updatePageTitle?: (pageTitle: string) => void;
}

const defaultState = {
  dark: false,
  pageTitle: '',
};

export const LayoutContext = createContext<ILayoutContext>(defaultState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);
  const [pageTitle, setPageTitle] = useState('');

  const toggleDark = (): void => {
    setDark(!dark);
  };

  const updatePageTitle = (pageTitle: string): void => {
    setPageTitle(pageTitle);
  };

  return (
    <LayoutContext.Provider
      value={{
        ...defaultLayoutProps,
        dark,
        toggleDark,
        pageTitle,
        updatePageTitle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const ToggleDarkMode = (): JSX.Element => {
  const { dark, toggleDark } = useContext(LayoutContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    toggleDark && toggleDark();
  };
  return (
    <>
      <button onClick={handleOnClick}>{dark ? '🌙' : '🌞'}</button>
    </>
  );
};
