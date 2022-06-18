import type { AppProps } from 'next/app';
import { LayoutProvider } from '../../helpers/layoutContext';
import { defaultLayoutProps } from '../defaultLayoutProps';
import { useEffect, useState } from 'react';
import { Layout } from 'projects/component-library/stories/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = (): void => {
    setScrollOffset(window.scrollY);
  };

  return (
    <LayoutProvider>
      <Layout {...defaultLayoutProps} scrollOffset={scrollOffset}>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  );
}

export default MyApp;
