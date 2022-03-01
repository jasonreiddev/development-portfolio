import CardGrid, { CardProps } from './CardGrid';
import { Meta, Story } from '@storybook/react';

const meta: Meta<CardProps> = {
  title: 'Components/Card Grid',
  component: CardGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: Story<CardProps> = (args: CardProps) => <CardGrid {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  path: '/projects/Next.js',
  siteName: 'Jason Reid Development Portfolio',
};
