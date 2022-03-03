import { Story } from '@storybook/react';
import { useState } from 'react';

import { Select } from './Select';

export default {
  component: Select,
  title: 'Components/Select',
  parameters: {
    layout: 'centered',
  },
};

const Template: Story = () => {
  const [value, setValue] = useState('newest');
  return <Select value={value} onChange={(ev) => setValue(ev.target.value)} />;
};

export const Default = Template.bind({});
