import { Dispatch, SetStateAction } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { doc, getDoc, setDoc } from '@firebase/firestore';

import { Layout } from '../../component-library/stories/Layout/Layout';
import { GlobalStyles } from '../../component-library/styles/GlobalStyles';
import { firestore } from '../../component-library/helpers/useFirebase';

const Home: NextPage = () => {
  const docRef = doc(firestore, 'likes', `${process.env.NEXT_PUBLIC_FIREBASE_LIKE_DOC_ID}`);

  async function getLikesDBValue(
    setLikesFunction: Dispatch<SetStateAction<number>>,
  ): Promise<void> {
    getDoc(docRef).then((result) => {
      if (result.exists()) {
        setLikesFunction(result.data().value);
      }
    });
  }

  function setLikesDBValue(value: number): void {
    setDoc(docRef, { value: value });
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <GlobalStyles />
      <Layout
        menuLinks={[]}
        getLikesDBValue={getLikesDBValue}
        setLikesDBValue={setLikesDBValue}
        title="Portfolio"
      ></Layout>
    </>
  );
};

export default Home;
