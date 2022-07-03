import { Story } from '@storybook/react';

import { InputField, InputFieldProps } from './InputField';
import { ColorPair } from 'helpers/media';

export default {
  component: InputField,
  title: 'Components/Input Field',
  parameters: {
    layout: 'centered',
  },
};

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const Text = Template.bind({});
Text.args = {
  title: 'Input',
  name: 'Input',
  placeholder: 'Input...',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  title: 'Password',
  name: 'Password',
  placeholder: 'Password...',
  type: 'Password',
  colorPair: ColorPair.Primary,
};

export const _Minimum = Template.bind({});
