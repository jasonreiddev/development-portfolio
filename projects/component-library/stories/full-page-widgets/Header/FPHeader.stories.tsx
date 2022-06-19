import { Story } from '@storybook/react';

import { FPHeader, FPHeaderProps } from './FPHeader';
import * as HeaderStories from '../../widgets/Header/Header.stories';
import * as TypingEffectStories from '../../components/TypingEffect/TypingEffect.stories';
import { HeaderProps } from '../../widgets/Header/Header';
import { TypingEffectProps } from '../../components/TypingEffect/TypingEffect';

export default {
  title: 'Full Page Widgets/Header',
  component: FPHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<FPHeaderProps> = (args) => <FPHeader {...args} />;

export const FPPortfolio = Template.bind({});
FPPortfolio.args = {
  headerProps: HeaderStories.Portfolio.args as HeaderProps,
  typingEffectProps: TypingEffectStories.Portfolio.args as TypingEffectProps,
};

export const FPPortfolioScrolled = Template.bind({});
FPPortfolioScrolled.args = {
  ...FPPortfolio.args,
  scrollOffset: 1,
};

export const restrictHeight = Template.bind({});
restrictHeight.args = {
  ...FPPortfolio.args,
  fullHeight: false,
};

export const _Minimum = Template.bind({});
