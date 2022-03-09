import { Story } from '@storybook/react';

import { Carousel, CarouselProps } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  images: [
    { src: 'https://picsum.photos/1600/900', altText: 'Picsum Photo' },
    { src: 'https://picsum.photos/1600/900', altText: 'Picsum Photo' },
  ],
};

export const Minimum = Template.bind({});
