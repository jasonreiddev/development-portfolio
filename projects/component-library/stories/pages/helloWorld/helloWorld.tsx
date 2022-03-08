import { Layout } from '../../Layout/Layout';
import { HelloWorldStyles as s } from './helloWorld.styles';
import { TextCard } from '../../widgets/TextCard/TextCard';

export interface HelloWorldProps {
  text?: string;
}

export const HelloWorld = ({ text }: HelloWorldProps): JSX.Element => (
  <Layout menuLinks={[]} likesMockDBValue={7734} title="Hello World">
    <TextCard>
      <s.Text>{text}</s.Text>
    </TextCard>
  </Layout>
);
