import { Story } from '@storybook/react';

import { TextCard, TextCardProps } from './TextCard';

export default {
  title: 'Widgets/Text Card',
  component: TextCard,
};

const Template: Story<TextCardProps> = (args) => <TextCard {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  text: `Hello World!`,
};

export const HelloWorldFitContent = Template.bind({});
HelloWorldFitContent.args = {
  text: `Hello World!`,
  fitContent: true,
};

export const Minimum = Template.bind({});
