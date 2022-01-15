import { Layout } from '../../Layout/Layout';
import { WidgetTestStyles } from './widgetTest.styles';

import { IconButtonGroup } from '../../widgets/IconButtonGroup/IconButtonGroup';
import { LoginForm } from '../../widgets/LoginForm/LoginForm';
// import { PaginatedPosts } from '../../widgets/PaginatedPosts/PaginatedPosts';
import { TextCard } from '../../widgets/TextCard/TextCard';

export interface WidgetTestProps {
  text?: string;
}

export const WidgetTest = ({ text }: WidgetTestProps): JSX.Element => (
  <Layout menuLinks={[]} likesMockDBValue={7734} title="Hello World">
    <WidgetTestStyles>
      <IconButtonGroup />
      <LoginForm />
      {/* <PaginatedPosts /> */}
      <TextCard>
        <h2>{text}</h2>
      </TextCard>
    </WidgetTestStyles>
  </Layout>
);
