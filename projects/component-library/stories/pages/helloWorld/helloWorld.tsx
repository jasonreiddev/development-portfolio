import { Layout } from '../../Layout/Layout';
import { HelloWorldStyles as s } from './helloWorld.styles';
import { TextCard } from '../../widgets/TextCard/TextCard';
import { defaultLayoutProps } from 'portfolio/defaultLayoutProps';

export interface HelloWorldProps {
  text?: string;
}

defaultLayoutProps.fpHeaderProps.headerProps.title = 'Hello World';
defaultLayoutProps.fpHeaderProps.headerProps.menuLinks = [];

export const HelloWorld = ({ text }: HelloWorldProps): JSX.Element => (
  <Layout {...defaultLayoutProps}>
    <TextCard>
      <s.Text>{text}</s.Text>
    </TextCard>
  </Layout>
);
