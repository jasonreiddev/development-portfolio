import { Story } from '@storybook/react';

import { WidgetTest, WidgetTestProps } from './widgetTest';

export default {
  title: 'Pages/Widget Test',
  parameters: {
    layout: 'fullscreen',
  },
  component: WidgetTest,
};

const Template: Story<WidgetTestProps> = (args) => <WidgetTest {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World!',
};

export const Minimum = Template.bind({});
