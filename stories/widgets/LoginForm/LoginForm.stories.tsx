import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  title: 'Widgets/Login Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Email = Template.bind({});
Email.args = {
  placeHolder: 'me@you.com',
  type: 'email',
  PasswordPlaceHolder: 'Enter your password',
  showPassword: false,
};

export const Username = Template.bind({});
Username.args = {
  placeHolder: 'Enter your username',
  type: 'text',
  PasswordPlaceHolder: 'Enter your password',
  showPassword: false,
};

export const UsernameShowPassword = Template.bind({});
UsernameShowPassword.args = {
  placeHolder: 'Enter your username',
  type: 'text',
  PasswordPlaceHolder: 'Enter your password',
  showPassword: true,
};

export const Minimum = Template.bind({});
Minimum.args = {};
