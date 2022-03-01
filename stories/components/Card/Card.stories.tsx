import Card, { CardProps } from './Card';
import { Meta, Story } from '@storybook/react';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  url: 'https://jasonreid.dev/',
  title: `Jason's Reid Development Portfolio`,
  image: 'https://picsum.photos/900/600?grayscale&blur=2',
  alt: 'Picsum Photo, grey-scale and blur',
  text: `Hi, I'm Jason Reid, a software developer from Yorkshire. I started my software development career in January of 2019 as an apprentice at Bradford Council and am now a support developer at NetConstruct. I am currently working as a CRO Frontend Developer at WMG Agency & Equation Digital on secondment.`,
  tags: ['Development', 'Portfolio', 'React', 'Gatsby'],
};
