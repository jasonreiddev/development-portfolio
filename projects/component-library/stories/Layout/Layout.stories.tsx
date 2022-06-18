import { Story } from '@storybook/react';

import { Layout, LayoutProps } from './Layout';
import * as HeaderStories from '../widgets/Header/Header.stories';
import { HeaderProps } from '../widgets/Header/Header';

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
  headerProps: HeaderStories.Portfolio.args as HeaderProps,
};

export const Loading = Template.bind({});
Loading.args = {
  headerProps: HeaderStories.Portfolio.args as HeaderProps,
  loading: true,
};

export const _Minimum = Template.bind({});
