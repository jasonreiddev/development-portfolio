import { Story } from '@storybook/react';

import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
};

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

export const Flip = Template.bind({});
Flip.args = {
  url: 'https://jasonreid.dev/',
  title: `Jason's Reid Development Portfolio`,
  image: 'https://picsum.photos/900/600?grayscale&blur=2',
  alt: 'Picsum Photo, grey-scale and blur',
  text: `Hi, I'm Jason Reid, a software developer from Yorkshire. I started my software development career in January of 2019 as an apprentice at Bradford Council and am now a support developer at NetConstruct. I am currently working as a CRO Frontend Developer at WMG Agency & Equation Digital on secondment.`,
  tags: ['Development', 'Portfolio', 'React', 'Gatsby'],
  flipContent: (
    <>
      <h3>Test</h3>
      <p>
        Hi, I&apos;m Jason Reid, a software developer from Yorkshire. I started my software
        development career in January of 2019 as an apprentice at Bradford Council and am now a
        support developer at NetConstruct. I am currently working as a CRO Frontend Developer at WMG
        Agency & Equation Digital on secondment.
      </p>
      <p>
        <a href="https://jasonreid.dev/">Find out more</a>
      </p>
    </>
  ),
};

export const Minimum = Template.bind({});
