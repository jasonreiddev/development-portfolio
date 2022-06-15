import { Story } from '@storybook/react';

import { Legend } from './Legend';

export default {
  component: Legend,
  title: 'Components/Legend',
  parameters: {
    layout: 'centered',
  },
};

const Template: Story = () => <Legend />;

export const _Minimum = Template.bind({});
