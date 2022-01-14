import { Layout } from '../../Layout/Layout';
import { HelloWorldStyles } from './helloWorld.styles';
import { TextCard } from '../../widgets/TextCard/TextCard';

export interface HelloWorldProps {
  text?: string;
}

export const HelloWorld = ({ text }: HelloWorldProps): JSX.Element => (
  <Layout menuLinks={[]} likesMockDBValue={7734} title="Hello World">
    <HelloWorldStyles>
      <TextCard>
        <h2>{text}</h2>
      </TextCard>
    </HelloWorldStyles>
  </Layout>
);
