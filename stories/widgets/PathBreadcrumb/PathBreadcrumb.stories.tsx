import { PathBreadcrumb } from './PathBreadcrumb';

export default {
  title: 'Widgets/Breadcrumb',
  component: PathBreadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <PathBreadcrumb />;
