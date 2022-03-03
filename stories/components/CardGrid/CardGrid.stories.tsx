import { Story } from '@storybook/react';

import { CardGridProps, CardGrid } from './CardGrid';
import { CardData } from '../../widgets/CardGridFilterable/CardGridFilterable.stories';

export default {
  title: 'Components/Card Grid',
  component: CardGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<CardGridProps> = (args: CardGridProps) => <CardGrid {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  cards: CardData,
};
