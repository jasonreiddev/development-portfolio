import { Story } from '@storybook/react';

import { Landing, LandingProps } from './landing';

export default {
  title: 'Pages/Landing',
  parameters: {
    layout: 'fullscreen',
  },
  component: Landing,
};

const Template: Story<LandingProps> = (args) => <Landing {...args} />;

export const YarnStorybook = Template.bind({});

export const StorybookUrl = Template.bind({});
StorybookUrl.args = {
  storybookUrl: 'http://localhost:6006',
};

export const _Minimum = Template.bind({});
