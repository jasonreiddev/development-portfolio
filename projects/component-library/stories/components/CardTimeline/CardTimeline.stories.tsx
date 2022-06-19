import { Story } from '@storybook/react';

import { CardTimelineProps, CardTimeline } from './CardTimeline';
import { ColorPair } from '../../../../helpers/media';

export default {
  title: 'Components/Card Timeline',
  component: CardTimeline,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<CardTimelineProps> = (args: CardTimelineProps) => <CardTimeline {...args} />;

export const Cards = Template.bind({});
Cards.args = {
  size: 200,
  cards: [
    {
      url: 'https://jasonreid.dev/',
      title: "Jason Reid's Development Portfolio",
      image: 'https://picsum.photos/900/600?grayscale&blur=2',
      alt: 'Picsum Photo, grey-scale and blur',
      text: `Hi, I'm Jason Reid, a software developer from Yorkshire. I started my software development career in January of 2019 as an apprentice at Bradford Council and am now a support developer at NetConstruct. I am currently working as a CRO Frontend Developer at WMG Agency & Equation Digital on secondment.`,
      tags: ['Development', 'Portfolio', 'React', 'Gatsby'],
      modifyWidth: 2,
    },
    {
      url: 'https://github.com/jasonreiddev/nextjs',
      title: 'Next.js Component Library',
      image: 'https://picsum.photos/900/300',
      text: `In this project you will find SSR styled-components with Next.js, using storybook and typescript that I have built primarily for training purposes. Some of these components have been brought across from my development portfolio whereas others have been built from the ground up.`,
      tags: ['Development', 'Next.js', 'React'],
      modifyWidth: 2,
    },
    {
      url: 'https://www.linkedin.com/in/jasonreiddev/',
      title: 'LinkedIn',
      text: 'Contact me on LinkedIn!',
      tags: ['Social-2', 'Social-1', '1Social', '2Social'],
    },
    {
      url: 'https://github.com/jasonreiddev',
      title: 'GitHub',
      image: 'https://picsum.photos/900/900',
      tags: ['Development', 'Social'],
    },
    {
      url: 'https://twitter.com/jasonreiddev',
      title: 'Twitter',
      tags: ['Social'],
    },
    {
      title:
        'Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.',
      text: 'Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.',
      tags: ['Short text', 'Antidisestablishmentarianism', 'Long text. Long text.'],
    },
    {
      title:
        'Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.',
      text: 'Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.',
      tags: ['Short text', 'Antidisestablishmentarianism', 'Long text. Long text.'],
      modifyWidth: 'full',
    },
  ],
};

export const PrimaryCards = Template.bind({});
PrimaryCards.args = {
  ...Cards.args,
  size: 300,
  colorPair: ColorPair.Primary,
};

export const LargeCards = Template.bind({});
LargeCards.args = {
  ...Cards.args,
  size: 300,
};

export const _Minimum = Template.bind({});
