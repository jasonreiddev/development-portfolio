import { useContext } from 'react';
import { LayoutContext } from '../../helpers/layoutContext';
import { client } from '../../helpers/sanityClient';
import { CardGridFilterable } from '../../component-library/stories/widgets/CardGridFilterable/CardGridFilterable';
import { CardProps } from '../../component-library/stories/components/Card/Card';
import { Project } from 'projects/sanity/schemas/project';
import { mapProjectToCard } from 'projects/helpers/mapToCard';

type ProjectsProps = { data: Project[] };

export const getStaticProps = async (): Promise<{ props: ProjectsProps }> => {
  const res = await client.fetch(
    `
    *[_type == "project"] | order(lastWorkedOn desc)
  `,
  );
  const data = await res;

  return {
    props: {
      data,
    },
  };
};

const Projects = ({ data }: ProjectsProps): JSX.Element => {
  const { updatePageTitle, updatePageDescription } = useContext(LayoutContext);
  updatePageTitle?.('Projects');
  updatePageDescription?.("Projects I've developed");

  const Projects: CardProps[] = [];
  data.map((project: Project) => Projects.push(mapProjectToCard(project)));

  return <>{Projects.length > 0 && <CardGridFilterable cards={Projects} size={280} />}</>;
};

export default Projects;
