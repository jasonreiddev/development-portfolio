import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SmallText } from './SmallText';

export default {
  title: 'Components/Small Text',
  component: SmallText,
} as ComponentMeta<typeof SmallText>;

const Template: ComponentStory<typeof SmallText> = (args) => <SmallText {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  text: 'Hello',
};

export const World = Template.bind({});
World.args = {
  text: 'World',
};

export const Minimum = Template.bind({});
Minimum.args = {};
