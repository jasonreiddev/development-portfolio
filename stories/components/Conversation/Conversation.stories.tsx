import { Story } from '@storybook/react';

import { Conversation, ConversationProps, Icon, ConversationItem } from './Conversation';

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
  args: {
    chatName: 'Nancy',
    icon: 1,
    active: true,
    fullWidth: false,
    conversationItemGroups: conversationItemGroups,
  },
  argTypes: {
    icon: { control: { type: 'select', options: Icon } },
  },
};

const Template: Story<ConversationProps> = (args: ConversationProps) => <Conversation {...args} />;

export const Default = Template.bind({});

export const FullWidth = Template.bind({});

FullWidth.args = {
  fullWidth: true,
};
