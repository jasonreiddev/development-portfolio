/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextCard } from '../../component-library/stories/widgets/TextCard/TextCard';
import { PageTitle } from '../../component-library/stories/components/PageTitle/PageTitle';
import { client } from 'projects/helpers/client';
import { CardProps } from 'projects/component-library/stories/components/Card/Card';
import { mapProjectToCard, Project } from './projects';
import { CardGrid } from 'projects/component-library/stories/components/CardGrid/CardGrid';
import { mapPositionToCard, Position } from './employment';
import { fetchEntries } from '../contentfulPosts';
import { mapBlogPostToCard } from './blog';
import { ExternalLink } from 'projects/component-library/stories/components/ExternalLink/ExternalLink';

type HomeProps = { projectData: Project[]; positionData: Position[]; blogPostData: any };

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

  let blogPostData = '';
  res = await fetchEntries(3);
  if (typeof res !== 'undefined') {
    blogPostData = await res.map((p: any) => {
      return p.fields;
    });
  }

  return {
    props: {
      positionData,
      projectData,
      blogPostData,
    },
  };
};

const Home = ({ projectData, positionData, blogPostData }: HomeProps): JSX.Element => {
  const Positions: CardProps[] = [];
  positionData?.map((position: Position) => Positions.push(mapPositionToCard(position)));

  const Projects: CardProps[] = [];
  projectData?.map((project: Project) => Projects.push(mapProjectToCard(project)));

  const BlogPosts: CardProps[] = [];
  blogPostData?.map((blogPost: any) => BlogPosts.push(mapBlogPostToCard(blogPost)));

  return (
    <>
      <PageTitle text="Welcome to my portfolio!" />
      <TextCard>
        <>
          Hi, I&apos;m Jason Reid, a software developer from Yorkshire. I started my software
          development career in January of 2019 as an apprentice at Bradford Council and am now a
          support developer at NetConstruct. <br />
          <br />
          The best place to contact me is via&nbsp;
          <ExternalLink to="https://www.linkedin.com/in/jasonreiddev" text="LinkedIn" />.
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

      {BlogPosts.length > 0 && (
        <>
          <PageTitle text="Recent Blog Posts" />
          <CardGrid cards={BlogPosts} size={300} />
        </>
      )}

      <TextCard fitContent={false}>
        <>
          This site was built using:
          <ul>
            <li>- Next.js</li>
            <li>- Styled Components</li>
            <li>- Storybook</li>
          </ul>
          For more information, you can view the&nbsp;
          <ExternalLink to="https://github.com/jasonreiddev/nextjs" text="project's repository" />
          &nbsp;on Github.
        </>
      </TextCard>
    </>
  );
};

export default Home;
