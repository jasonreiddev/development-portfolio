import { Story } from '@storybook/react';

import { IconButton, IconButtonProps, Icon } from './IconButton';
import { ColorPair } from '../../../../helpers/media';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const PrimaryMail = Template.bind({});
PrimaryMail.args = {
  icon: Icon.Mail,
  primary: true,
  label: 'Mail',
  ariaLabel: 'Mail',
  colorPair: ColorPair.Primary,
};

export const PrimaryMailActive = Template.bind({});
PrimaryMailActive.args = {
  icon: Icon.Mail,
  active: true,
  primary: true,
  label: 'Mail',
  ariaLabel: 'Mail',
  colorPair: ColorPair.Primary,
};

export const PrimaryNone = Template.bind({});
PrimaryNone.args = {
  icon: Icon.None,
  primary: true,
  label: 'Mail?',
  ariaLabel: 'Mail?',
};

export const SecondaryRefresh = Template.bind({});
SecondaryRefresh.args = {
  icon: Icon.Refresh,
  label: 'Refresh',
  ariaLabel: 'Refresh',
  colorPair: ColorPair.Secondary,
};

export const LargeRefreshActive = Template.bind({});
LargeRefreshActive.args = {
  icon: Icon.Refresh,
  active: true,
  size: 'large',
  label: 'Refresh',
  ariaLabel: 'Refresh',
};

export const SmallRefresh = Template.bind({});
SmallRefresh.args = {
  icon: Icon.Refresh,
  size: 'small',
  label: 'Refresh',
  ariaLabel: 'Refresh',
};

export const _Minimum = Template.bind({});
