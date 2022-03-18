import { useRef } from 'react';

import { Dropdown, Icon, DropdownItem } from '../../components/Dropdown/Dropdown';
import { clickOutside } from '../../../../helpers/clickOutside';
// import useUser, { UserContextType } from '../../../context/UserContext';

export interface AccountDropdownProps {
  username: string;
}

export const AccountDropdown = ({ username }: AccountDropdownProps): JSX.Element => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = clickOutside(dropdownRef, false);
  const toggleActive = (): void => setIsActive(!isActive);
  // const { signOut }: UserContextType = useUser();

  // Used to prevent storybook error
  const safeSignOut: () => void = toggleActive.bind({});
  // if (typeof signOut == 'function') {
  //   safeSignOut = signOut.bind({});
  // }

  const pages: DropdownItem[] = [
    {
      danger: false,
      href: '/account',
      text: 'Account',
    },
  ];

  const actions: DropdownItem[] = [
    {
      danger: true,
      onClick: safeSignOut,
      text: 'Sign out',
    },
  ];

  const dropdownItemGroups: DropdownItem[][] = [pages, actions];

  return (
    <Dropdown
      text={username}
      icon={Icon.Account}
      expand={true}
      active={isActive}
      fullWidth={false}
      dropdownRef={dropdownRef}
      toggleActive={toggleActive}
      dropdownItemGroups={dropdownItemGroups}
    />
  );
};
