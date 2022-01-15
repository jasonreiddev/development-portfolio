import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButtonGroup } from './IconButtonGroup';

export default {
  title: 'Widgets/Icon Button Group',
  component: IconButtonGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconButtonGroup>;

const Template: ComponentStory<typeof IconButtonGroup> = (args) => <IconButtonGroup {...args} />;

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

export const Minimum = Template.bind({});
Minimum.args = {};
