import { Story } from '@storybook/react';

import { RisingText, ClampTextProps } from './RisingText';

export default {
  title: 'Components/Rising Text',
  component: RisingText,
};

const Template: Story<ClampTextProps> = (args) => <RisingText {...args} />;

export const Short = Template.bind({});
Short.args = {
  text: 'Short Text!',
  color: 'red',
};

export const Long = Template.bind({});
Long.args = {
  text: 'Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.',
};

export const Minimum = Template.bind({});
