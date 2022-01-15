import { Meta, Story } from '@storybook/react';
import LoadingProgress, { LoadingProgressProps } from './LoadingProgress';

const meta: Meta<LoadingProgressProps> = {
  component: LoadingProgress,
  title: 'Components/Loading Progress',
  args: {},
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: Story<LoadingProgressProps> = (args) => <LoadingProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  log: [
    'Loading Peabody....',
    'Loaded Peabody.',
    'Loading CH & Co....',
    'Loading WCHT....',
    'Loaded WCHT.',
    'Loaded CH & Co.',
  ],
  progress: 50,
  total: 100,
};
