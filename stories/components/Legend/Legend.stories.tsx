import { Story } from '@storybook/react';
import Legend from './Legend';

const meta = {
  component: Legend,
  title: 'Components/Legend',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: Story = () => <Legend />;

export const Default = Template.bind({});
