import { Story } from '@storybook/react';
import React from 'react';
import Select from './Select';

const meta = {
  component: Select,
  title: 'Components/Select',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: Story = () => {
  const [value, setValue] = React.useState('newest');
  return <Select value={value} onChange={(ev) => setValue(ev.target.value)} />;
};

export const Default = Template.bind({});
