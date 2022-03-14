import '../styles/globals.css';
// import { Layout } from '../../component-library/stories/Layout/Layout';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '../layoutContext';
import { Layout } from '../../component-library/stories/Layout/Layout';
import { defaultLayoutProps } from '../defaultLayoutProps';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Layout {...defaultLayoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
