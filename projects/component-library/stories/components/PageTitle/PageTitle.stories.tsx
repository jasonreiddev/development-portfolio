import { Story } from '@storybook/react';

import { PageTitle, PageTitleProps } from './PageTitle';

export default {
  title: 'Components/Page Title',
  component: PageTitle,
};

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  text: 'Hello',
};

export const World = Template.bind({});
World.args = {
  text: 'World',
};

export const _Minimum = Template.bind({});
