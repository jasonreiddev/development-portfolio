import { Story } from '@storybook/react';

import { ColorPairings } from './ColorPallet';

export default {
  title: 'Color Pallet',
  component: ColorPairings,
};

const Template: Story = (args) => <ColorPairings {...args} />;

export const Minimum = Template.bind({});
