import { Story } from '@storybook/react';

import { Seo, SeoProps } from './Seo';

export default {
  title: 'Widgets/SEO',
  component: Seo,
};

const Template: Story<SeoProps> = (args) => <Seo {...args} />;

export const _Minimum = Template.bind({});
