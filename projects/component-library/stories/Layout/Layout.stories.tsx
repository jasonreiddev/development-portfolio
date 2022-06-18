import { Story } from '@storybook/react';
import { FPHeaderProps } from '../full-page-widgets/Header/FPHeader';
import * as FPHeaderStories from '../full-page-widgets/Header/FPHeader.stories';

import { Layout, LayoutProps } from './Layout';

export default {
  title: 'Layout',
  parameters: {
    layout: 'fullscreen',
  },
  component: Layout,
};

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const PortfolioLayout = Template.bind({});
PortfolioLayout.args = {
  fpHeaderProps: FPHeaderStories.FPPortfolio.args as FPHeaderProps,
};

export const Loading = Template.bind({});
Loading.args = {
  fpHeaderProps: FPHeaderStories.FPPortfolio.args as FPHeaderProps,
  loading: true,
};

export const _Minimum = Template.bind({});
