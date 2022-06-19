import { Story } from '@storybook/react';

import { Posts, PostsProps } from './Posts';

export default {
  title: 'Components/Posts',
  component: Posts,
};

const Template: Story<PostsProps> = (args) => <Posts {...args} />;

export const _Minimum = Template.bind({});
