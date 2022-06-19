import { Story } from '@storybook/react';

import { BasicCarousel, BasicCarouselProps } from './BasicCarousel';

export default {
  title: 'Components/Basic Carousel',
  component: BasicCarousel,
};

const Template: Story<BasicCarouselProps> = (args) => <BasicCarousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  images: [
    { src: 'https://picsum.photos/1600/900', altText: 'Picsum Photo' },
    { src: 'https://picsum.photos/1600/900', altText: 'Picsum Photo' },
  ],
};

export const _Minimum = Template.bind({});
