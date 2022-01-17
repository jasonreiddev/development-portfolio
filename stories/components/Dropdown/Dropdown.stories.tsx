import Dropdown, { DropdownProps, Icon, DropdownItem } from './Dropdown';
import { Meta, Story } from '@storybook/react';

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

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    text: 'Actions',
    icon: 1,
    active: true,
    fullWidth: false,
    dropdownItemGroups: dropdownItemGroups,
  },
  argTypes: {
    icon: { control: { type: 'select', options: Icon } },
  },
};

export default meta;

const Template: Story<DropdownProps> = (args: DropdownProps) => <Dropdown {...args} />;

export const Default = Template.bind({});

export const FullWidth = Template.bind({});

FullWidth.args = {
  fullWidth: true,
};
