import { Story } from '@storybook/react';

import { Conversation, ConversationProps, ConversationItem } from './Conversation';
import { ColorPair, Icon } from '../../../../helpers/media';

const goodMorning: ConversationItem[] = [
  {
    sentByMe: false,
    text: 'Good Morning!',
  },
  {
    sentByMe: true,
    text: 'Morning :)',
  },
  {
    sentByMe: false,
    text: 'Have a good day <3',
  },
  {
    sentByMe: false,
    text: 'You too :D x',
  },
];

const goodNight: ConversationItem[] = [
  {
    sentByMe: true,
    text: `I'm so tired after today, going to have an early night, see you tomorrow :/`,
  },
  {
    sentByMe: false,
    text: 'No worries, sleep well :)',
  },
];

const conversationItemGroups: ConversationItem[][] = [goodMorning, goodNight];

export default {
  title: 'Components/Conversation',
  component: Conversation,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    icon: { control: { type: 'select', options: Icon } },
  },
};

const Template: Story<ConversationProps> = (args: ConversationProps) => <Conversation {...args} />;

export const Nancy = Template.bind({});
Nancy.args = {
  chatName: 'Nancy',
  icon: 1,
  active: true,
  fullWidth: false,
  conversationItemGroups: conversationItemGroups,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  chatName: 'Nancy',
  icon: 1,
  active: true,
  fullWidth: true,
  conversationItemGroups: conversationItemGroups,
};

export const FullWidthColors = Template.bind({});
FullWidthColors.args = {
  ...FullWidth.args,
  colorPair: ColorPair.Primary,
  colorPairSentByMe: ColorPair.Secondary,
};

export const _Minimum = Template.bind({});
