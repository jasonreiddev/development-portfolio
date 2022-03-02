import { Layout } from '../../Layout/Layout';
import { WidgetTestStyles } from './widgetTest.styles';

// List all widgets, comment out if not required
import { CardGridFilterable } from '../../widgets/CardGridFilterable/CardGridFilterable';
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

// Components
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { CardData } from '../../widgets/CardGridFilterable/CardGridFilterable.stories';

export interface WidgetTestProps {
  text?: string;
}

export const WidgetTest = ({ text }: WidgetTestProps): JSX.Element => (
  <Layout menuLinks={[]} likesMockDBValue={7734} title="Widget Test">
    <WidgetTestStyles>
      <TextCard>
        <AccountDropdown username={'Jason'} />
      </TextCard>
      <IconButtonGroup />
      <LoginForm />
      <TextCard>
        <PathBreadcrumb />
      </TextCard>
      <TextCard>
        <>
          <h2>{text}</h2>
          <ProgressBar progress={69} />
        </>
      </TextCard>
      <TextCard>
        <CardGridFilterable cards={CardData} />
      </TextCard>
    </WidgetTestStyles>
  </Layout>
);
