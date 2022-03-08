import { Story } from '@storybook/react';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Components/Progress Bar',
};

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 75,
  total: 150,
};

export const None = Template.bind({});
None.args = {
  progress: 0,
  total: 300,
};

export const Compete = Template.bind({});
Compete.args = {
  progress: 100,
  total: 100,
};

export const Minimum = Template.bind({});
