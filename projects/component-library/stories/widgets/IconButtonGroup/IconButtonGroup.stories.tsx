import { Story } from '@storybook/react';

import { IconButtonGroup, IconButtonGroupProps } from './IconButtonGroup';

export default {
  title: 'Widgets/Icon Button Group',
  component: IconButtonGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<IconButtonGroupProps> = (args) => <IconButtonGroup {...args} />;

export const Large = Template.bind({});
Large.args = {
  iconButtonSize: 'large',
  fitContent: true,
};

export const Small = Template.bind({});
Small.args = {
  iconButtonSize: 'small',
  fitContent: true,
};

export const _Minimum = Template.bind({});
