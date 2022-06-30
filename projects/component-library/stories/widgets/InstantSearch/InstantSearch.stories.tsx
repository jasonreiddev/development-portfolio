import { Story } from '@storybook/react';

import { InstantSearch, InstantSearchProps } from './InstantSearch';

export default {
  title: 'Widgets/InstantSearch',
  component: InstantSearch,
};

const Template: Story<InstantSearchProps> = (args) => <InstantSearch {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  indexName: 'portfolio',
  title: 'Search',
};

export const _Minimum = Template.bind({});
