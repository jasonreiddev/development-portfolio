import { Story } from '@storybook/react';

import { SearchableDropdown, SearchableDropdownProps } from './SearchableDropdown';

// const callbackFunction = (chosenOptions: string[]): void => {
//   console.info(chosenOptions);
// };

export default {
  title: 'Components/Searchable Dropdown',
  component: SearchableDropdown,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<SearchableDropdownProps> = (args: SearchableDropdownProps) => (
  <SearchableDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // searchFieldCallback: callbackFunction,
};

export const LotsOfResults = Template.bind({});
LotsOfResults.args = {
  // searchFieldCallback: callbackFunction,
};

export const _Minimum = Template.bind({});
