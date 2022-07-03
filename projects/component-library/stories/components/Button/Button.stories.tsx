import { Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { ColorPair } from 'helpers/media';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorPair: { control: { type: 'select', options: ColorPair } },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorPair: ColorPair.Primary,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  colorPair: ColorPair.Secondary,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const _Minimum = Template.bind({});
