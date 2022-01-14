import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Like } from './Like';

export default {
  title: 'Widgets/Like',
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />;

export const Liked = Template.bind({});
Liked.args = {
  likes: 1337,
  liked: true,
};

export const FirstLike = Template.bind({});
FirstLike.args = {
  likes: 0,
  liked: false,
};

export const Minimum = Template.bind({});
Minimum.args = {};
