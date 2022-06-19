import { Story } from '@storybook/react';

import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';
import { ColorPair } from '../../../../helpers/media';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    colorPair: { control: { type: 'select', options: ColorPair } },
  },
};

const Template: Story<BreadcrumbProps> = (args: BreadcrumbProps) => <Breadcrumb {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  path: '/projects/Next.js',
  siteName: 'Jason Reid Development Portfolio',
  colorPair: ColorPair.DefaultLink,
};

export const FormattingText = Template.bind({});
FormattingText.args = {
  path: '/-requires-trim-/no-trim/---requires---trim---/TestCapitals/projects/%25100%20Decoded/Next.js/?page=3',
  siteName: 'Next.js Component Library',
  colorPair: ColorPair.SecondaryInactive,
};

export const _Minimum = Template.bind({});
