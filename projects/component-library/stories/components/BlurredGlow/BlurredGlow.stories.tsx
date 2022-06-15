import { Story } from '@storybook/react';

import { BlurredGlow, BlurredGlowProps } from './BlurredGlow';
import { ColorPair } from '../../../../helpers/media';

export default {
  title: 'Components/Blurred Glow',
  component: BlurredGlow,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    colorPair: { control: { type: 'select', options: ColorPair } },
  },
};

const Template: Story = (args: BlurredGlowProps) => <BlurredGlow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorPair: ColorPair.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  colorPair: ColorPair.Secondary,
};

export const _Minimum = Template.bind({});
