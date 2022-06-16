import { Story } from '@storybook/react';

import { Header, HeaderProps } from './Header';

export default {
  title: 'Widgets/Header',
  component: Header,
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

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

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

export const _Minimum = Template.bind({});
