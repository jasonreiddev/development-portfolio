import { Story } from '@storybook/react';

import { PopUp, PopUpProps } from './PopUp';

export default {
  title: 'Components/Pop-up',
  component: PopUp,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<PopUpProps> = (args: PopUpProps) => <PopUp {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  children: 'Hello World',
};

export const _Minimum = Template.bind({});
