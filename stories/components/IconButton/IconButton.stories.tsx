import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton, Icon } from './IconButton';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const PrimaryMail = Template.bind({});
PrimaryMail.args = {
  icon: Icon.Mail,
  primary: true,
  label: 'Mail',
};

export const PrimaryMailActive = Template.bind({});
PrimaryMailActive.args = {
  icon: Icon.Mail,
  active: true,
  primary: true,
  label: 'Mail',
};

export const PrimaryNone = Template.bind({});
PrimaryNone.args = {
  icon: Icon.None,
  primary: true,
  label: 'Mail?',
};

export const SecondaryRefresh = Template.bind({});
SecondaryRefresh.args = {
  icon: Icon.Refresh,
  label: 'Refresh',
};

export const LargeRefreshActive = Template.bind({});
LargeRefreshActive.args = {
  icon: Icon.Refresh,
  active: true,
  size: 'large',
  label: 'Refresh',
};

export const SmallRefresh = Template.bind({});
SmallRefresh.args = {
  icon: Icon.Refresh,
  size: 'small',
  label: 'Refresh',
};

export const Minimum = Template.bind({});
Minimum.args = {};
