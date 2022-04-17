import { TextCard } from '../../component-library/stories/widgets/TextCard/TextCard';
import { PageTitle } from '../../component-library/stories/components/PageTitle/PageTitle';
import { client } from 'projects/helpers/client';
import { CardProps } from 'projects/component-library/stories/components/Card/Card';
import { mapProjectToCard, Project } from './projects';
import { CardGrid } from 'projects/component-library/stories/components/CardGrid/CardGrid';
import { mapPositionToCard, Position } from './employment';

type HomeProps = { projectData: Project[]; positionData: Position[] };

export const getStaticProps = async (): Promise<{ props: HomeProps }> => {
  let res = await client.fetch(
    `
    *[_type == "position" && hideOnEmployment == false && currentJob == true]
  `,
  );
  const positionData = await res;

  res = await client.fetch(
    `
    *[_type == "project" && featured == true]
  `,
  );
  const projectData = await res;

  return {
    props: {
      positionData,
      projectData,
    },
  };
};

const Home = ({ projectData, positionData }: HomeProps): JSX.Element => {
  const Positions: CardProps[] = [];
  positionData?.map((position: Position) => Positions.push(mapPositionToCard(position)));

  const Projects: CardProps[] = [];
  projectData?.map((project: Project) => Projects.push(mapProjectToCard(project)));
  return (
    <>
      <PageTitle text="Welcome to my portfolio!" />
      <TextCard>
        <>
          Hi, I&apos;m Jason Reid, a software developer from Yorkshire. I started my software
          development career in January of 2019 as an apprentice at Bradford Council and am now a
          support developer at NetConstruct. <br />
          <br />
          The best place to contact me is via
          <a href="https://www.linkedin.com/in/jasonreiddev">LinkedIn</a>.
        </>
      </TextCard>

      {Positions.length > 0 && (
        <>
          <PageTitle text={`Current Position${Positions.length > 1 ? 's' : ''}`} />
          <CardGrid cards={Positions} size={300} />
        </>
      )}

      {Projects.length > 0 && (
        <>
          <PageTitle text="Featured Projects" />
          <CardGrid cards={Projects} size={300} />
        </>
      )}
    </>
  );
};

export default Home;
