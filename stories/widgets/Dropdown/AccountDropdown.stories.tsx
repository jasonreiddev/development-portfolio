import { ReactNode } from 'react';
import { Meta } from '@storybook/react';

import { AccountDropdown, AccountDropdownProps } from './AccountDropdown';

const meta: Meta<AccountDropdownProps> = {
  title: 'Widgets/Account Dropdown',
  component: AccountDropdown,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    username: 'John',
  },
};

export default meta;

export const Default = (args: AccountDropdownProps): ReactNode => <AccountDropdown {...args} />;
