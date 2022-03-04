import { Story } from '@storybook/react';

import { FooterCard, FooterCardProps } from './FooterCard';

export default {
  title: 'Widgets/FooterCard',
  component: FooterCard,
};

const Template: Story<FooterCardProps> = (args) => <FooterCard {...args} />;

export const Jason = Template.bind({});
Jason.args = {
  text: `© ${new Date().getFullYear()} Jason Reid`,
};

export const Minimum = Template.bind({});
