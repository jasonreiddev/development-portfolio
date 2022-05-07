import { Story } from '@storybook/react';

import { EmblaCarousel, EmblaCarouselProps } from './EmblaCarousel';

export default {
  title: 'Components/Embla Carousel',
  component: EmblaCarousel,
};

const Template: Story<EmblaCarouselProps> = (args) => <EmblaCarousel {...args} />;

export const Five = Template.bind({});
Five.args = {
  slides: ['one', 'two', 'three', 'four', 'five'],
};

export const Options = Template.bind({});
Options.args = {
  slides: Array.from(Array(5).keys()),
  emblaOptions: {
    align: 1,
    axis: 'x',
    containScroll: '',
    direction: 'ltr',
    dragFree: true,
    draggable: true,
    inViewThreshold: 1,
    loop: true,
    skipSnaps: true,
    slidesToScroll: 1,
    speed: 1,
    startIndex: 1,
  },
};

export const Minimum = Template.bind({});
