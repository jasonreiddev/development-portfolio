import { Story } from '@storybook/react';

import { InputField, InputFieldProps } from './InputField';

export default {
  component: InputField,
  title: 'Components/Input Field',
  args: {
    title: 'Input',
    name: 'Input',
    placeholder: 'Input...',
    type: 'text',
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
export const Password = Template.bind({});
export const NoText = Template.bind({});

Password.args = {
  ...Default.args,
  title: 'Password',
  placeholder: 'Password...',
  type: 'Password',
};

NoText.args = {
  ...Default.args,
  title: '',
};
