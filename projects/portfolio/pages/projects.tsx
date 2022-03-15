import type { NextPage } from 'next';
import { useContext } from 'react';
import { LayoutContext } from '../../component-library/helpers/layoutContext';

const Projects: NextPage = () => {
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Projects');
  return <h2>Projects</h2>;
};

export default Projects;
