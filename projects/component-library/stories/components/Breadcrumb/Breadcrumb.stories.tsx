import { Story } from '@storybook/react';

import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<BreadcrumbProps> = (args: BreadcrumbProps) => <Breadcrumb {...args} />;

export const Portfolio = Template.bind({});
Portfolio.args = {
  path: '/projects/Next.js',
  siteName: 'Jason Reid Development Portfolio',
};

export const FormattingText = Template.bind({});
FormattingText.args = {
  path: '/-requires-trim-/no-trim/---requires---trim---/TestCapitals/projects/%25100%20Decoded/Next.js/?page=3',
  siteName: 'Next.js Component Library',
};

export const Minimum = Template.bind({});
