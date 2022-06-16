import { Story } from '@storybook/react';

import { Dropdown, DropdownProps, Icon, DropdownItem } from './Dropdown';
import { ColorPair } from '../../../../helpers/media';

const access: DropdownItem[] = [
  {
    danger: false,
    href: '#',
    text: 'View',
  },
  {
    danger: false,
    href: '#',
    text: 'Share',
  },
  {
    danger: false,
    href: '#',
    text: 'Copy Url',
  },
];

const edit: DropdownItem[] = [
  {
    danger: false,
    href: '#',
    text: 'Edit',
  },
  {
    danger: true,
    href: '#',
    text: 'Delete',
  },
];

const dropdownItemGroups: DropdownItem[][] = [access, edit];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    icon: { control: { type: 'select', options: Icon } },
  },
};

const Template: Story<DropdownProps> = (args: DropdownProps) => <Dropdown {...args} />;

export const Actions = Template.bind({});
Actions.args = {
  text: 'Actions',
  icon: 1,
  active: true,
  fullWidth: false,
  dropdownItemGroups: dropdownItemGroups,
};

export const ActionsColor = Template.bind({});
ActionsColor.args = {
  ...Actions.args,
  colorPair: ColorPair.Primary,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Actions.args,
  fullWidth: true,
  colorPair: ColorPair.Tertiary,
};

export const _Minimum = Template.bind({});
