import { Meta, Story } from '@storybook/react';
import { SearchableDropdownProps } from './SearchableDropdown';
import SearchableDropdown from './SearchableDropdown';

const callbackFunction = (chosenOptions: string[]): void => {
  console.info(chosenOptions);
};

const meta: Meta<SearchableDropdownProps> = {
  component: SearchableDropdown,
  title: 'Components/Searchable Dropdown',
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: Story<SearchableDropdownProps> = (args) => <SearchableDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchFieldCallback: callbackFunction,
};

export const LotsOfResults = Template.bind({});
LotsOfResults.args = {
  searchFieldCallback: callbackFunction,
};
