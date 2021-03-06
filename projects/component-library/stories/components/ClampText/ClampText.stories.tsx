import { Story } from '@storybook/react';

import { ClampText, ClampTextProps } from './ClampText';

export default {
  title: 'Components/Clamp Text',
  component: ClampText,
};

const Template: Story<ClampTextProps> = (args) => <ClampText {...args} />;

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

export const _Minimum = Template.bind({});
