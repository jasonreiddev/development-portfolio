import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageContactCard } from './contactCard';
import * as ContactCardStories from '../../components/ContactCard/ContactCard.stories';

export default {
  title: 'Pages/Contact Card',
  component: PageContactCard,
} as ComponentMeta<typeof PageContactCard>;

const Template: ComponentStory<typeof PageContactCard> = (args) => <PageContactCard {...args} />;

export const Jason = Template.bind({});
Jason.args = {
  backgroundColor: 'rgba(255, 200, 235, 1)',
  ...ContactCardStories.Jason.args,
};

export const Jake = Template.bind({});
Jake.args = {
  backgroundColor: 'rgba(25, 255, 0, 0.5)',
  ...ContactCardStories.Jake.args,
};
