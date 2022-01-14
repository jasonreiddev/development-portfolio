import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Widgets/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

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

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Home = Template.bind({});
Home.args = {
  menuLinks: menuLinks,
  title: 'Home',
};

export const Projects = Template.bind({});
Projects.args = {
  menuLinks: menuLinks,
  title: 'Projects',
};

export const Minimum = Template.bind({});
Minimum.args = {};
