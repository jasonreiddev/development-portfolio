import { Story } from '@storybook/react';

import { SmallText, SmallTextProps } from './SmallText';

export default {
  title: 'Components/Small Text',
  component: SmallText,
};

const Template: Story<SmallTextProps> = (args) => <SmallText {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  text: 'Hello',
};

export const World = Template.bind({});
World.args = {
  text: 'World',
};

export const Minimum = Template.bind({});
