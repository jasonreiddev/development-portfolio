import Head from 'next/head';

import { GlobalStyles } from '../styles/GlobalStyles';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js</title>
      </Head>
      <GlobalStyles dark={true} />
    </>
  );
}
