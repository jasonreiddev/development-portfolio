import { Story } from '@storybook/react';

import { PopUpIcon } from './PopUpIcon';

export default {
  title: 'Components/PopUpIcon',
  component: PopUpIcon,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => <PopUpIcon />;

export const Minimum = Template.bind({});
