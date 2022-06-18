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
    name: 'Employment',
    link: '/employment/1',
  },
  {
    name: 'Projects',
    link: '/projects/1',
  },
  {
    name: 'Blog',
    link: '/blog/1',
  },
];

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  menuLinks: menuLinks,
  title: 'Portfolio',
};

export const Projects = Template.bind({});
Projects.args = {
  menuLinks: menuLinks,
  title: 'Projects',
};

export const _Minimum = Template.bind({});
