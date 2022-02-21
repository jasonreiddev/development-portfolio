import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ClampText } from './ClampText';

export default {
  title: 'Components/ClampText',
  component: ClampText,
} as ComponentMeta<typeof ClampText>;

const Template: ComponentStory<typeof ClampText> = (args) => <ClampText {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  text: 'Hello, this text should clamp after one line! Hello, this text should clamp after one line! Hello, this text should clamp after one line! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines!',
  lines: 1,
};

export const HelloTwo = Template.bind({});
HelloTwo.args = {
  text: 'Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines! Hello, this text should clamp after two lines!',
  lines: 2,
};

export const ZeroLines = Template.bind({});
ZeroLines.args = {
  text: 'Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! Hello, this text will not clamp (set to 0)! ',
  lines: 0,
};

export const Minimum = Template.bind({});
Minimum.args = {};
