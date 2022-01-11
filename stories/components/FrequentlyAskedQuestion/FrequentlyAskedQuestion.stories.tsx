import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FrequentlyAskedQuestion } from './FrequentlyAskedQuestion';

export default {
  title: 'Components/Frequently Asked Question',
  component: FrequentlyAskedQuestion,
} as ComponentMeta<typeof FrequentlyAskedQuestion>;

const Template: ComponentStory<typeof FrequentlyAskedQuestion> = (args) => (
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
};

export const JS = Template.bind({});
JS.args = {
  question: 'What does “JS” stand for?',
  answer: 'Jake Stringer',
};
