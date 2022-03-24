import { Story } from '@storybook/react';

import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<AccordionProps> = (args: AccordionProps) => <Accordion {...args} />;

export const CSS = Template.bind({});
CSS.args = {
  title: 'What does “CSS” stand for?',
  children: 'Cool Styling Strategy',
};

export const CSSActive = Template.bind({});
CSSActive.args = {
  title: 'What does “CSS” stand for?',
  children: 'Cool Styling Strategy',
  active: true,
};

export const Minimum = Template.bind({});
