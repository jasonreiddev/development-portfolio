import { Story } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { ColorPair } from 'helpers/media';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkbox',
  colorPair: ColorPair.Primary,
  checked: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Checkbox',
  colorPair: ColorPair.Secondary,
  checked: true,
};

export const _Minimum = Template.bind({});
