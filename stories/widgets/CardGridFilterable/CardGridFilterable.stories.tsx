import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardGridFilterable } from './CardGridFilterable';

export default {
  title: 'Widgets/Card Grid Filterable',
  component: CardGridFilterable,
} as ComponentMeta<typeof CardGridFilterable>;

const Template: ComponentStory<typeof CardGridFilterable> = (args) => (
  <CardGridFilterable {...args} />
);

export const Cards = Template.bind({});
Cards.args = {
  cards: [
    {
      url: 'https://jasonreid.dev/',
      title: "Jason Reid's Development Portfolio",
      image: 'https://picsum.photos/900/600?grayscale&blur=2',
      alt: 'Picsum Photo, grey-scale and blur',
      text: `Hi, I'm Jason Reid, a software developer from Yorkshire. I started my software development career in January of 2019 as an apprentice at Bradford Council and am now a support developer at NetConstruct. I am currently working as a CRO Frontend Developer at WMG Agency & Equation Digital on secondment.`,
      tags: ['Development', 'Portfolio', 'React', 'Gatsby'],
      doubleWidth: true,
    },
    {
      url: 'https://github.com/jasonreiddev/nextjs',
      title: 'Next.js Component Library',
      image: 'https://picsum.photos/900/300',
      text: `In this project you will find SSR styled-components with Next.js, using storybook and typescript that I have built primarily for training purposes. Some of these components have been brought across from my development portfolio whereas others have been built from the ground up.`,
      tags: ['Development', 'Next.js', 'React'],
    },
    {
      url: 'https://www.linkedin.com/in/jasonreiddev/',
      title: 'LinkedIn',
      text: 'Contact me on LinkedIn!',
      tags: ['Social2', 'Social', 'Zocial', 'Zocial2'],
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
      url: 'https://twitter.com/jasonreiddev',
      title:
        'agshagsh ga hagg hagsgahsg aghshg shgaghs gaggshgh gaghgs ghasg agsg hags gg ags hagsh ga aghs hgsahhs ggagshgahgshagsghagsgahsghghsghaghsgh as ha gshaghs ghag ghghsahgahgh ahggs hag hag s ghs ghagghahghkgskh ghah hasgs ahgshg g hasghaghsgag hujh uhuok h kh ukhuh kh uh uh khukhhhuk kuhkuhukhkuhklo',
      text: 'hfwhf uhuihfuhw hw h ukhuh kh uh uh khukhhhuk kuhkuhukhkuhklo hhuhuhu hushu  sukhukdsk ksddkk dshghyidusgy g tdgywuidywgd gd wddw hasg agsg hags gg ags hagsh ga aghs hgsahhs ggagshgahgshagsghagsgahsghghsghaghsgh as ha gshaghs ghag ghghsah hgsahhs hff uehwiufhuwh fwufh hhwuihwlfhdk hiwlkfhd huiwfefe',
      tags: ['efesfsff', 'dqddhjdhjhkadfkbfkebkfjhekfefererfefedfe', 'fwefwfwef'],
    },
  ],
};

export const Minimum = Template.bind({});
Minimum.args = {};
