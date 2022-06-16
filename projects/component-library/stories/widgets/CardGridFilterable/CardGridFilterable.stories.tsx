import { Story } from '@storybook/react';

import { CardGridFilterable, CardGridFilterableProps } from './CardGridFilterable';
import * as CardGridStories from '../../components/CardGrid/CardGrid.stories';

export default {
  title: 'Widgets/Card Grid Filterable',
  component: CardGridFilterable,
};

const Template: Story<CardGridFilterableProps> = (args) => <CardGridFilterable {...args} />;

export const Cards = Template.bind({});
Cards.args = {
  ...CardGridStories.Cards.args,
};

export const LargeCards = Template.bind({});
LargeCards.args = {
  ...CardGridStories.LargeCards.args,
};

export const _Minimum = Template.bind({});
