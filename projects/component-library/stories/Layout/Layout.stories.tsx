import { Story } from '@storybook/react';

import { Layout, LayoutProps } from './Layout';

export default {
  title: 'Layout',
  parameters: {
    layout: 'fullscreen',
  },
  component: Layout,
};

const menuLinks = [
  {
    name: '',
    nameOverrideNav: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects/1',
  },
];

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Next.js Component Library',
  menuLinks: menuLinks,
};

export const Loading = Template.bind({});
Loading.args = {
  title: 'Next.js Component Library',
  menuLinks: menuLinks,
  loading: true,
};

export const Minimum = Template.bind({});
