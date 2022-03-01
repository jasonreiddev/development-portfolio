import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageContactCard } from './contactCard';
import * as ContactCardStories from '../../components/ContactCard/ContactCard.stories';

export default {
  title: 'Pages/Contact Card',
  parameters: {
    layout: 'fullscreen',
  },
  component: PageContactCard,
} as ComponentMeta<typeof PageContactCard>;

const Template: ComponentStory<typeof PageContactCard> = (args) => <PageContactCard {...args} />;

export const Jason = Template.bind({});
Jason.args = {
  backgroundColor: 'var(--color-secondary)',
  ...ContactCardStories.Jason.args,
};

export const JasonNoBackground = Template.bind({});
JasonNoBackground.args = {
  ...ContactCardStories.Jason.args,
};

export const Jake = Template.bind({});
Jake.args = {
  backgroundColor: 'var(--color-tertiary)',
  ...ContactCardStories.Jake.args,
};

export const Minimum = Template.bind({});
Minimum.args = {};
