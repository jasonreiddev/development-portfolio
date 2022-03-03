import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextCard } from './TextCard';

export default {
  title: 'Widgets/Text Card',
  component: TextCard,
} as ComponentMeta<typeof TextCard>;

const Template: ComponentStory<typeof TextCard> = (args) => <TextCard {...args} />;

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
Minimum.args = {};
