import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WidgetTest } from './widgetTest';

export default {
  title: 'Pages/Widget Test',
  parameters: {
    layout: 'fullscreen',
  },
  component: WidgetTest,
} as ComponentMeta<typeof WidgetTest>;

const Template: ComponentStory<typeof WidgetTest> = (args) => <WidgetTest {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World!',
};

export const Minimum = Template.bind({});
Minimum.args = {};
