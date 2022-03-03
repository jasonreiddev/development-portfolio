import { Story } from '@storybook/react';

import { Like, LikeProps } from './Like';

export default {
  title: 'Widgets/Like',
  component: Like,
};

const Template: Story<LikeProps> = (args) => <Like {...args} />;

export const Liked = Template.bind({});
Liked.args = {
  liked: true,
};

export const FirstLike = Template.bind({});
FirstLike.args = {
  liked: false,
};

export const Minimum = Template.bind({});
