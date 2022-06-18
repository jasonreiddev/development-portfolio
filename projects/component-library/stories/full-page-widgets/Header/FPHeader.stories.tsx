import { Story } from '@storybook/react';

import { FPHeader, FPHeaderProps } from './FPHeader';
import * as HeaderStories from '../../widgets/Header/Header.stories';
import { HeaderProps } from '../../widgets/Header/Header';

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
};

export const FPPortfolioScrolled = Template.bind({});
FPPortfolioScrolled.args = {
  ...FPPortfolio.args,
  scrollOffset: 1,
};

export const overrideHeight = Template.bind({});
FPPortfolioScrolled.args = {
  ...FPPortfolio.args,
  overrideHeight: 160px,
};

export const _Minimum = Template.bind({});
