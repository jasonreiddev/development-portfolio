import { Story } from '@storybook/react';

import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const FirstProjectPage = Template.bind({});
FirstProjectPage.args = {
  pageSize: 5,
  totalCount: 20,
  currentPage: 1,
  base: '/projects',
};

export const LastProjectPage = Template.bind({});
LastProjectPage.args = {
  pageSize: 5,
  totalCount: 20,
  currentPage: 1,
  base: '/projects',
};

export const Minimum = Template.bind({});
