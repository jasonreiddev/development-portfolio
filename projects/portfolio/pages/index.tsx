import type { NextPage } from 'next';
import { Layout } from '../../component-library/stories/Layout/Layout';
import { layoutProps } from '../layoutProps';

const Home: NextPage = () => {
  return (
    <Layout {...layoutProps}>
      <h2>Homepage</h2>
    </Layout>
  );
};

export default Home;
