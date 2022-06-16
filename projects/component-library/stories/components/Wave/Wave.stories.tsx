import { Story } from '@storybook/react';

import { Wave } from './Wave';

export default {
  title: 'Components/Wave',
  component: Wave,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => <Wave />;

export const _Minimum = Template.bind({});
