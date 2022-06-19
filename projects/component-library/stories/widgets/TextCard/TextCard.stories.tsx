import { Story } from '@storybook/react';
import { ColorPair } from '../../../../helpers/media';

import { TextCard, TextCardProps } from './TextCard';

export default {
  title: 'Widgets/Text Card',
  component: TextCard,
  argTypes: {
    colorPair: { control: { type: 'select', options: ColorPair } },
  },
};

const Template: Story<TextCardProps> = (args) => <TextCard {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  text: `Hello World!`,
  colorPair: ColorPair.Primary,
};

export const HelloWorldFitContent = Template.bind({});
HelloWorldFitContent.args = {
  text: `Hello World!`,
  fitContent: true,
  colorPair: ColorPair.Secondary,
};

export const _Minimum = Template.bind({});
