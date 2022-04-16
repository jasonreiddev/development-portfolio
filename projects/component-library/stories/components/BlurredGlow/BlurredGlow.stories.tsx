import { Story } from '@storybook/react';

import { BlurredGlow } from './BlurredGlow';

export default {
  title: 'Components/Blurred Glow',
  component: BlurredGlow,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => <BlurredGlow />;

export const Minimum = Template.bind({});
