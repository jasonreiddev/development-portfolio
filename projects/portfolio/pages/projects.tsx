import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/client';
// import { CardGridFilterable } from '../../component-library/stories/widgets/CardGridFilterable/CardGridFilterable';

const Projects: NextPage = () => {
  const { updatePageTitle } = useContext(LayoutContext);
  updatePageTitle && updatePageTitle('Projects');

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async (): Promise<any> => {
      const promise = await client.fetch(
        `
        *[_type == "project"]
      `,
      );
      const response = await promise;
      setProjects(response);
    };
    fetchProjects();
  }, []);

  return (
    <>
      <h2>Projects</h2>
      {/* <CardGridFilterable cards={projects}/> */}
      {projects &&
        projects.length > 0 &&
        projects.map(
          ({ _id, projectTitle = '', slug = '', lastWorkedOn = '', excerpt = '' }) =>
            slug && (
              <li key={_id}>
                <a href={`/projects/${slug}`}>{projectTitle}</a> (
                {new Date(lastWorkedOn).toDateString()})<p>{excerpt}</p>
              </li>
            ),
        )}
    </>
  );
};

export default Projects;
