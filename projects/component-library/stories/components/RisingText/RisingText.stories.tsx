import { Story } from '@storybook/react';

import { RisingText, RisingTextProps } from './RisingText';
import { ColorPair } from 'helpers/media';

export default {
  title: 'Components/Rising Text',
  component: RisingText,
};

const Template: Story<RisingTextProps> = (args) => <RisingText {...args} />;

export const Short = Template.bind({});
Short.args = {
  text: 'Short Text!',
  colorPair: ColorPair.Primary,
};

export const Long = Template.bind({});
Long.args = {
  text: 'Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.',
};

export const _Minimum = Template.bind({});
