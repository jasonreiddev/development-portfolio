import { Story } from '@storybook/react';

import { Footer, FooterProps } from './Footer';
import { ColorPair } from 'helpers/media';

export default {
  component: Footer,
  title: 'Components/Footer',
};

const Template: Story<FooterProps> = (args: FooterProps) => <Footer {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  title: 'Portfolio :)',
};

export const PortfolioGreen = Template.bind({});
PortfolioGreen.args = {
  title: 'Portfolio <3',
  colorPair: ColorPair.Secondary,
};

export const _Minimum = Template.bind({});
