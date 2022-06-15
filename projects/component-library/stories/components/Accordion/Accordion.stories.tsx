import { Story } from '@storybook/react';

import { Accordion, AccordionProps } from './Accordion';
import { ColorPair } from '../../../../helpers/media';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    colorPair: { control: { type: 'select', options: ColorPair } },
    colorPairContent: { control: { type: 'select', options: ColorPair } },
  },
};

const Template: Story<AccordionProps> = (args: AccordionProps) => <Accordion {...args} />;

export const CSS = Template.bind({});
CSS.args = {
  title: 'What does “CSS” stand for?',
  children: 'Cool Styling Strategy',
  colorPair: ColorPair.Primary,
  colorPairContent: ColorPair.Secondary,
};

export const CSSActive = Template.bind({});
CSSActive.args = {
  title: 'What does “CSS” stand for?',
  children: 'Cool Styling Strategy',
  active: true,
  colorPair: ColorPair.Secondary,
  colorPairContent: ColorPair.Tertiary,
};

export const _Minimum = Template.bind({});
