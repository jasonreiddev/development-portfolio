import { Story } from '@storybook/react';
import { useState } from 'react';

import { Select, SelectProps } from './Select';
import { ColorPair } from 'helpers/media';

export default {
  component: Select,
  title: 'Components/Select',
  parameters: {
    layout: 'centered',
  },
};

const Template: Story<SelectProps> = (args: SelectProps) => {
  const [value, setValue] = useState('newest');
  return <Select {...args} value={value} onChange={(ev) => setValue(ev.target.value)} />;
};

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  options: ['Hello', 'World', ':)'],
};

export const HelloWorldColor = Template.bind({});
HelloWorldColor.args = {
  ...HelloWorld.args,
  colorPair: ColorPair.Primary,
};

export const _Minimum = Template.bind({});
