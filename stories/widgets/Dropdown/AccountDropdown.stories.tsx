import { ReactNode } from 'react';
import { AccountDropdown, AccountDropdownProps } from './AccountDropdown';
import { Meta } from '@storybook/react';

const meta: Meta<AccountDropdownProps> = {
  title: 'Widgets/AccountDropdown',
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
