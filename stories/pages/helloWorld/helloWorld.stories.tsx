import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelloWorld } from './helloWorld';

export default {
  title: 'Pages/Hello World!',
  parameters: {
    layout: 'fullscreen',
  },
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (args) => <HelloWorld {...args} />;

export const JustSayingHelloWorld = Template.bind({});
JustSayingHelloWorld.args = {
  text: 'Hello World!',
};

export const Minimum = Template.bind({});
Minimum.args = {};
