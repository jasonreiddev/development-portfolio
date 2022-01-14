import { ComponentStory } from '@storybook/react';

import { Layout } from './Layout';

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

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Next.js Component Library',
  menuLinks: menuLinks,
  likesMockDBValue: 10,
};

export const Minimum = Template.bind({});
Minimum.args = {};
