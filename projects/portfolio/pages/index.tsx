import type { NextPage } from 'next';
import { TextCard } from '../../component-library/stories/widgets/TextCard/TextCard';
import { PageTitle } from '../../component-library/stories/components/PageTitle/PageTitle';

const Home: NextPage = () => {
  return (
    <>
      <PageTitle text="Welcome to my portfolio!" />
      <TextCard>
        Hi, I'm Jason Reid, a software developer from Yorkshire. I started my software development
        career in January of 2019 as an apprentice at Bradford Council and am now a support
        developer at NetConstruct. I am currently working as a CRO Frontend Developer at WMG Agency
        & Equation Digital on secondment.
      </TextCard>
    </>
  );
};

export default Home;
