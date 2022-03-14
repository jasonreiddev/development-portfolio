// src/context/state.js
import { createContext, useState } from 'react';
import { defaultLayoutProps } from './defaultLayoutProps';
import { LayoutProps } from '../component-library/stories/Layout/Layout';

const LayoutPropsContext = createContext<LayoutProps>(defaultLayoutProps);

export function LayoutPropProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [layoutProps] = useState(defaultLayoutProps);
  return <LayoutPropsContext.Provider value={layoutProps}>{children}</LayoutPropsContext.Provider>;
}
