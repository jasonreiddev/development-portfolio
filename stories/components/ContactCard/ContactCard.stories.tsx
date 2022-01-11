import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContactCard } from "./ContactCard";

export default {
  title: "Components/Contact Card",
  component: ContactCard,
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = (args) => (
  <ContactCard {...args} />
);

export const Jason = Template.bind({});
Jason.args = {
  avatarSrc: "https://picsum.photos/200/300",
  name: "Jason Reid",
  email: "JasonReidD@gmail.com",
};

export const Jake = Template.bind({});
Jake.args = {
  avatarSrc: "https://picsum.photos/200/300",
  name: "Jake Stringer",
  email: "JakeStringer@actual.help",
};
