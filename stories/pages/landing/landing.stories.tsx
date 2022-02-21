import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Landing } from './landing';

export default {
  title: 'Pages/Landing',
  parameters: {
    layout: 'fullscreen',
  },
  component: Landing,
} as ComponentMeta<typeof Landing>;

const Template: ComponentStory<typeof Landing> = (args) => <Landing {...args} />;

export const YarnStorybook = Template.bind({});

export const StorybookUrl = Template.bind({});
StorybookUrl.args = {
  storybookUrl: 'http://localhost:6006',
};

export const Minimum = Template.bind({});
Minimum.args = {};
