import '../styles/globals.css';
import { Layout } from '../../component-library/stories/Layout/Layout';

import type { AppProps } from 'next/app';
import { LayoutPropProvider } from '../layoutContext';
import { useLayoutProps } from '../layoutContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const layoutProps = useLayoutProps();

  return (
    <LayoutPropProvider>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </LayoutPropProvider>
  );
}

export default MyApp;
