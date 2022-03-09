import { Story } from '@storybook/react';

import { LoadingProgress, LoadingProgressProps } from './LoadingProgress';

export default {
  component: LoadingProgress,
  title: 'Components/Loading Progress',
  parameters: {
    layout: 'centered',
  },
};

const Template: Story<LoadingProgressProps> = (args) => <LoadingProgress {...args} />;

export const Tempo = Template.bind({});
Tempo.args = {
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

export const Minimum = Template.bind({});
