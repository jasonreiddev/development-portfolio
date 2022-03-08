import { Story } from '@storybook/react';

import { HoverColor, HoverColorProps, Icon } from './HoverColor';

export default {
  title: 'Components/Hover Color',
  component: HoverColor,
};

const Template: Story<HoverColorProps> = (args) => <HoverColor {...args} />;

export const LogOut = Template.bind({});
LogOut.args = {
  text: 'Log Out',
  icon: Icon.LogOut,
  date: '12/01/2000',
};

export const Mail = Template.bind({});
Mail.args = {
  text: 'Log Out',
  icon: Icon.Mail,
  date: '12/01/2000',
};

export const Minimum = Template.bind({});
