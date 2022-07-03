import { Story } from '@storybook/react';

import { ExternalLink, ExternalLinkProps } from './ExternalLink';
import { ColorPair } from 'helpers/media';

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

export const StoryBookColor = Template.bind({});
StoryBookColor.args = {
  ...StoryBook.args,
  colorPair: ColorPair.TertiaryInactive,
};

export const _Minimum = Template.bind({});
