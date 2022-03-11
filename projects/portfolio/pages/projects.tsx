import type { NextPage } from 'next';
import { Layout } from '../../component-library/stories/Layout/Layout';
import { layoutProps } from '../layoutProps';

const Projects: NextPage = () => {
  return (
    <Layout {...layoutProps} pageTitle="Projects">
      <h2>Projects</h2>
    </Layout>
  );
};

export default Projects;
