import { createContext, useContext, useEffect, useState } from 'react';
import { defaultLayoutProps } from '../../projects/portfolio/defaultLayoutProps';
import {
  IconButton,
  Icon,
} from '../../projects/component-library/stories/components/IconButton/IconButton';

export interface ILayoutContext {
  dark: boolean;
  toggleDark?: () => void;
  pageTitle: string;
  updatePageTitle?: (pageTitle: string) => void;
}

// updated from preference on mount

const defaultState = {
  dark: true,
  pageTitle: '',
};

export const LayoutContext = createContext<ILayoutContext>(defaultState);

export const LayoutProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);
  const [pageTitle, setPageTitle] = useState('');

  const toggleDark = (): void => {
    localStorage.setItem('dark', (!dark).toString());
    setDark(!dark);
  };

  const updatePageTitle = (pageTitle: string): void => {
    setPageTitle(pageTitle);
  };

  useEffect(() => {
    const dark = localStorage.getItem('dark');
    if (dark == undefined) {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setDark(false);
      }
    } else {
      if (dark == 'false') {
        setDark(false);
      }
    }
  }, []);

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
  const handleOnClick = (): void => {
    toggleDark && toggleDark();
  };
  return (
    <>
      <IconButton
        onClick={() => {
          handleOnClick();
        }}
        icon={dark ? Icon.Moon : Icon.Sun}
        size="small"
        active={true}
      />
    </>
  );
};
