import { Story } from '@storybook/react';

import { ContactCard, ContactCardProps } from './ContactCard';

export default {
  title: 'Components/Contact Card',
  component: ContactCard,
};

const Template: Story<ContactCardProps> = (args) => <ContactCard {...args} />;

export const Jason = Template.bind({});
Jason.args = {
  avatarSrc: 'https://picsum.photos/200/300',
  name: 'Jason Reid',
  email: 'JasonReidD@gmail.com',
};

export const Jake = Template.bind({});
Jake.args = {
  avatarSrc: 'https://picsum.photos/200/300',
  name: 'Jake Stringer',
  email: 'JakeStringer@actual.help',
};

export const Minimum = Template.bind({});
