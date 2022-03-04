import { Story } from '@storybook/react';

import { SearchableDropdown, SearchableDropdownProps } from './SearchableDropdown';

const callbackFunction = (chosenOptions: string[]): void => {
  console.info(chosenOptions);
};

export default {
  component: SearchableDropdown,
  title: 'Components/Searchable Dropdown',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<SearchableDropdownProps> = (args) => <SearchableDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchFieldCallback: callbackFunction,
};

export const LotsOfResults = Template.bind({});
LotsOfResults.args = {
  searchFieldCallback: callbackFunction,
};

export const Minimum = Template.bind({});
