import { Story } from '@storybook/react';

import { FrequentlyAskedQuestion, FrequentlyAskedQuestionProps } from './FrequentlyAskedQuestion';
import { ColorPair } from 'helpers/media';

export default {
  title: 'Components/Frequently Asked Question',
  component: FrequentlyAskedQuestion,
};

const Template: Story<FrequentlyAskedQuestionProps> = (args) => (
  <FrequentlyAskedQuestion {...args} />
);

export const CSS = Template.bind({});
CSS.args = {
  question: 'What does “CSS” stand for?',
  answer: 'Cool Styling Strategy',
};

export const HTML = Template.bind({});
HTML.args = {
  question: 'What does “HTML” stand for?',
  answer: 'He Took My Legs',
  colorPair: ColorPair.Primary,
  colorPairContent: ColorPair.Secondary,
};

export const JS = Template.bind({});
JS.args = {
  question: 'What does “JS” stand for?',
  answer: 'Jake Stringer',
  colorPair: ColorPair.Secondary,
  colorPairContent: ColorPair.Tertiary,
};

export const _Minimum = Template.bind({});
