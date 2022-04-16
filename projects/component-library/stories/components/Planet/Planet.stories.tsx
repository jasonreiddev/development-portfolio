import { Story } from '@storybook/react';

import { Planet } from './Planet';

export default {
  title: 'Components/Planet',
  component: Planet,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => <Planet />;

export const Minimum = Template.bind({});
