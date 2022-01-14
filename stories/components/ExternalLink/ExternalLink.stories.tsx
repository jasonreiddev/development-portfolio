import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExternalLink } from './ExternalLink';

export default {
  title: 'Components/External Link',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args} />;

export const Self = Template.bind({});
Self.args = {
  to: 'http://localhost:6006/?path=/story/externallink--self',
  text: 'This Story',
};

export const Story = Template.bind({});
Story.args = {
  to: 'http://localhost:6006/?path=/story/example-introduction--page',
  text: 'Welcome to Storybook',
};

export const Minimum = Template.bind({});
Minimum.args = {};
