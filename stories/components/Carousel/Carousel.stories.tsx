import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  images: [
    { src: 'https://picsum.photos/1600/900', altText: 'Picsum Photo' },
    { src: 'https://picsum.photos/1600/900', altText: 'Picsum Photo' },
  ],
};

export const Minimum = Template.bind({});
Minimum.args = {};
