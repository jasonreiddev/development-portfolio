import { ComponentStory } from '@storybook/react';

import { Posts } from './Posts';

export default {
  title: 'Components/Posts',
  component: Posts,
};

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />;

export const Minimum = Template.bind({});
Minimum.args = {};
