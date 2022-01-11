import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageContactCard } from "./contactCard";
import * as HeaderStories from "../../components/ContactCard/ContactCard.stories";

export default {
  title: "Pages/Contact Card",
  component: PageContactCard,
} as ComponentMeta<typeof PageContactCard>;

const Template: ComponentStory<typeof PageContactCard> = (args) => (
  <PageContactCard {...args} />
);

export const Jason = Template.bind({});
Jason.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  backgroundColor: "rgba(255, 200, 235, 1)",
  ...HeaderStories.Jason.args,
};

export const Jake = Template.bind({});
Jake.args = {
  backgroundColor: "rgba(25, 255, 0, 0.5)",
  ...HeaderStories.Jake.args,
};
