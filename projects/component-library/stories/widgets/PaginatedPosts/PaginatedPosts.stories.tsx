import { Story } from '@storybook/react';

import { PaginatedPosts, PaginatedPostsProps } from './PaginatedPosts';

export default {
  title: 'Widgets/Paginated Posts',
  component: PaginatedPosts,
};

const Template: Story<PaginatedPostsProps> = (args) => <PaginatedPosts {...args} />;

export const _Minimum = Template.bind({});
