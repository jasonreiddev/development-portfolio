import { Story } from '@storybook/react';

import { AccountDropdown, AccountDropdownProps } from './AccountDropdown';

export default {
  title: 'Widgets/Account Dropdown',
  component: AccountDropdown,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<AccountDropdownProps> = (args) => <AccountDropdown {...args} />;

export const LotsOfResults = Template.bind({});
LotsOfResults.args = {
  username: 'John',
};

export const _Minimum = Template.bind({});
