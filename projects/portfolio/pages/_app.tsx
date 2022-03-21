import type { AppProps } from 'next/app';
import { LayoutProvider } from '../../helpers/layoutContext';
import { Layout } from '../../component-library/stories/Layout/Layout';
import { defaultLayoutProps } from '../defaultLayoutProps';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <LayoutProvider>
      <Layout {...defaultLayoutProps}>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  );
}

export default MyApp;
