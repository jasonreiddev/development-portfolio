import { Story } from '@storybook/react';

import { PathBreadcrumb } from './PathBreadcrumb';

export default {
  title: 'Widgets/Breadcrumb',
  component: PathBreadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = (): JSX.Element => <PathBreadcrumb />;

export const _Minimum = Template.bind({});
