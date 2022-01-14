import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Seo } from './Seo';

export default {
  title: 'Widgets/SEO',
  component: Seo,
} as ComponentMeta<typeof Seo>;

const Template: ComponentStory<typeof Seo> = (args) => <Seo {...args} />;

export const Minimum = Template.bind({});
Minimum.args = {};
