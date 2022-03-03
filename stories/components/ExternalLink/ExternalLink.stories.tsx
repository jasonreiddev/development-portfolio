import { Story } from '@storybook/react';

import { ExternalLink, ExternalLinkProps } from './ExternalLink';

export default {
  title: 'Components/External Link',
  component: ExternalLink,
};

const Template: Story<ExternalLinkProps> = (args) => <ExternalLink {...args} />;

export const Self = Template.bind({});
Self.args = {
  to: 'http://localhost:6006/?path=/story/externallink--self',
  text: 'This Story',
};

export const StoryBook = Template.bind({});
StoryBook.args = {
  to: 'http://localhost:6006/?path=/story/example-introduction--page',
  text: 'Welcome to Storybook',
};

export const Minimum = Template.bind({});
