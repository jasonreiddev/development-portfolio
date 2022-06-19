import { Story } from '@storybook/react';

import { CardCarousel, CardCarouselProps } from './CardCarousel';
import * as CardGridStories from '../../components/CardGrid/CardGrid.stories';

export default {
  title: 'Widgets/Card Carousel',
  component: CardCarousel,
};

const Template: Story<CardCarouselProps> = (args) => <CardCarousel {...args} />;

export const Cards = Template.bind({});
Cards.args = {
  ...CardGridStories.Cards.args,
};

export const _Minimum = Template.bind({});
