import { Story } from '@storybook/react';

import { PageTitle, PageTitleProps } from './PageTitle';

export default {
  title: 'Components/Small Text',
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

export const Minimum = Template.bind({});
