import { Story } from '@storybook/react';

import { CheckboxList, CheckboxListProps } from './CheckboxList';

export default {
  title: 'Widgets/Checkbox List',
  component: CheckboxList,
};

const Template: Story<CheckboxListProps> = (args) => <CheckboxList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { value: 'Hello', checked: true },
    { value: 'World', checked: true },
  ],
};

export const _Minimum = Template.bind({});
