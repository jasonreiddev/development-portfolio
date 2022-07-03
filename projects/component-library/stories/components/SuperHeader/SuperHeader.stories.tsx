import { Story } from '@storybook/react';

import { SuperHeader, SuperHeaderProps } from './SuperHeader';
import { ColorPair } from 'helpers/media';

export default {
  component: SuperHeader,
  title: 'Components/Super Header',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<SuperHeaderProps> = (args: SuperHeaderProps) => <SuperHeader {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  title: "Jason Reid's",
  subTitle: 'Development Portfolio',
};

export const PortfolioGreen = Template.bind({});
PortfolioGreen.args = {
  ...Portfolio.args,
  colorPair: ColorPair.Secondary,
};

export const _Minimum = Template.bind({});
