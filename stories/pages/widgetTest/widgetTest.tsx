import { Layout } from '../../Layout/Layout';
import { WidgetTestStyles } from './widgetTest.styles';

// List all widgets, comment out if not required
import { CardGridFilterable } from '../../widgets/CardGridFilterable/CardGridFilterable';
import * as CardGridStories from '../../components/CardGrid/CardGrid.stories';
import { AccountDropdown } from '../../widgets/Dropdown/AccountDropdown';
// import { FooterCard } from '../../widgets/FooterCard/FooterCard'; // layout
// import { Header } from '../../widgets/Header/Header'; // layout
import { IconButtonGroup } from '../../widgets/IconButtonGroup/IconButtonGroup';
// import { Like } from '../../widgets/Like/Like'; // layout
import { LoginForm } from '../../widgets/LoginForm/LoginForm';
// import { PaginatedPosts } from '../../widgets/PaginatedPosts/PaginatedPosts'; // w.i.p
import { PathBreadcrumb } from '../../widgets/PathBreadcrumb/PathBreadcrumb';
// import { Seo } from '../../widgets/Seo/Seo'; // layout
// import { Share } from '../../widgets/Share/Share'; // layout
import { TextCard } from '../../widgets/TextCard/TextCard';

export interface WidgetTestProps {
  text: string;
}

export const WidgetTest = ({ text }: WidgetTestProps): JSX.Element => (
  <Layout menuLinks={[]} likesMockDBValue={7734} title="Widget Test">
    <WidgetTestStyles>
      <TextCard>
        <>{text}</>
      </TextCard>
      <TextCard>
        <AccountDropdown username={'Jason'} />
      </TextCard>
      <IconButtonGroup />
      <LoginForm />
      <TextCard>
        <PathBreadcrumb />
      </TextCard>
      {CardGridStories.Cards.args?.cards && (
        <TextCard>
          <CardGridFilterable cards={CardGridStories.Cards.args.cards} />
        </TextCard>
      )}
    </WidgetTestStyles>
  </Layout>
);
