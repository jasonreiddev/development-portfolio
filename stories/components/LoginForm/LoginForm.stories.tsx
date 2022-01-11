import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginForm } from "./LoginForm";

export default {
  title: "Components/Login Form",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Email = Template.bind({});
Email.args = {
  placeHolder: "me@you.com",
  type: "email",
  PasswordPlaceHolder: "Enter your password",
  showPassword: false,
};

export const Username = Template.bind({});
Username.args = {
  placeHolder: "Enter your username",
  type: "text",
  PasswordPlaceHolder: "Enter your password",
  showPassword: false,
};

export const UsernameShowPassword = Template.bind({});
UsernameShowPassword.args = {
  placeHolder: "Enter your username",
  type: "text",
  PasswordPlaceHolder: "Enter your password",
  showPassword: true,
};
