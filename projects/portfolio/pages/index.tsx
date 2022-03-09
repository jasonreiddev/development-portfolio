import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Layout } from '../../component-library/stories/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout menuLinks={[]} likesMockDBValue={7734} title="Widget Test">
      Test
    </Layout>
  );
};

export default Home;
