import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FooterCard } from './FooterCard';

export default {
  title: 'Widgets/FooterCard',
  component: FooterCard,
} as ComponentMeta<typeof FooterCard>;

const Template: ComponentStory<typeof FooterCard> = (args) => <FooterCard {...args} />;

export const Jason = Template.bind({});
Jason.args = {
  text: `© ${new Date().getFullYear()} Jason Reid`,
};

export const Minimum = Template.bind({});
Minimum.args = {};
