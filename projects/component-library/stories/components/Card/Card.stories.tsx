import { Story } from '@storybook/react';

import { Card, CardProps } from './Card';
import { ColorPair } from 'helpers/media';

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

export const FlipColors = Template.bind({});
FlipColors.args = {
  ...Flip.args,
  image: undefined,
  colorPair: ColorPair.Primary,
  colorPairButton: ColorPair.Secondary,
  colorPairBack: ColorPair.Tertiary,
};

export const FullText = Template.bind({});
FullText.args = {
  url: 'https://jasonreid.dev/',
  title: `Jason's Reid Development Portfolio`,
  image: 'https://picsum.photos/900/600?grayscale&blur=2',
  alt: 'Picsum Photo, grey-scale and blur',
  text: `Hi, I'm Jason Reid, a software developer from Yorkshire. I started my software development career in January of 2019 as an apprentice at Bradford Council and am now a support developer at NetConstruct. I am currently working as a CRO Frontend Developer at WMG Agency & Equation Digital on secondment.`,
  fullText: true,
};

export const _Minimum = Template.bind({});
