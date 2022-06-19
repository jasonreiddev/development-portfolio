import { Story } from '@storybook/react';

import { TypingEffect, TypingEffectProps } from './TypingEffect';

export default {
  component: TypingEffect,
  title: 'Components/Typing Effect',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<TypingEffectProps> = (args: TypingEffectProps) => <TypingEffect {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  strings: ["Jason Reid's", 'Development Portfolio.'],
};

export const _Minimum = Template.bind({});
