import type { NextPage } from 'next';
import { TextCard } from '../../component-library/stories/widgets/TextCard/TextCard';

const Home: NextPage = () => {
  return (
    <>
      <h2>Welcome to my portfolio</h2>
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
