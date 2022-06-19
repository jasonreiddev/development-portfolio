import { Story } from '@storybook/react';

import { LoginForm, LoginFormProps } from './LoginForm';

export default {
  title: 'Widgets/Login Form',
  component: LoginForm,
};

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

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

export const _Minimum = Template.bind({});
