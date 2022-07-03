import { Story } from '@storybook/react';

import { Pagination, PaginationProps } from './Pagination';
import { ColorPair } from 'helpers/media';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template: Story<PaginationProps> = (args: PaginationProps) => <Pagination {...args} />;

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
  colorPair: ColorPair.Primary,
};

export const _Minimum = Template.bind({});
