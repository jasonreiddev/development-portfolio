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
    'Loading HTML....',
    'Loaded HTML.',
    'Loading CSS....',
    'Loaded CSS.',
    'Loading JavaScript.',
    'Loaded JavaScript.',
  ],
  progress: 50,
  total: 100,
};

export const _Minimum = Template.bind({});
