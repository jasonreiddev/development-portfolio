import { ReactNode } from 'react';
import { PathBreadcrumb } from './PathBreadcrumb';
import { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Widgets/Breadcrumb',
  component: PathBreadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = (): ReactNode => <PathBreadcrumb />;
