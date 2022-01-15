import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';
import { Meta, Story } from '@storybook/react';

const meta: Meta<BreadcrumbProps> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

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
