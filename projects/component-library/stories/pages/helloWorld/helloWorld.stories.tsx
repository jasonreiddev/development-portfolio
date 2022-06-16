import { Story } from '@storybook/react';

import { HelloWorld, HelloWorldProps } from './helloWorld';

export default {
  title: 'Pages/Hello World!',
  parameters: {
    layout: 'fullscreen',
  },
  component: HelloWorld,
};

const Template: Story<HelloWorldProps> = (args) => <HelloWorld {...args} />;

export const JustSayingHelloWorld = Template.bind({});
JustSayingHelloWorld.args = {
  text: 'Hello World!',
};

export const _Minimum = Template.bind({});
