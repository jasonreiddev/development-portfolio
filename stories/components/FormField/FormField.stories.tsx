import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormField } from './FormField';

export default {
  title: 'Components/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />;

export const Name = Template.bind({});
Name.args = {
  name: 'name',
  displayName: 'Enter Name:',
  type: 'string',
  value: '',
};

export const Date = Template.bind({});
Date.args = {
  name: 'date',
  displayName: 'Enter Date:',
  type: 'string',
  value: '',
};

export const Minimum = Template.bind({});
Minimum.args = {};
