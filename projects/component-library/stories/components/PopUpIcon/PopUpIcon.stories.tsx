import { Story } from '@storybook/react';

import { PopUpIcon } from './PopUpIcon';

export default {
  title: 'Components/Pop-up Icon',
  component: PopUpIcon,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => <PopUpIcon />;

export const Minimum = Template.bind({});
