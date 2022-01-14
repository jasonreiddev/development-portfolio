import { ComponentStory } from '@storybook/react';

import { PaginatedPosts } from './PaginatedPosts';

export default {
  title: 'Widgets/Paginated Posts',
  component: PaginatedPosts,
};

const Template: ComponentStory<typeof PaginatedPosts> = (args) => <PaginatedPosts {...args} />;

export const Minimum = Template.bind({});
Minimum.args = {};
