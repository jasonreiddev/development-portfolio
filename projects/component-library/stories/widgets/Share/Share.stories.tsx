import { Story } from '@storybook/react';

import { Share, ShareProps } from './Share';

export default {
  title: 'Widgets/Share',
  component: Share,
};

const Template: Story<ShareProps> = (args) => <Share {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  text: 'Share',
};

export const Minimum = Template.bind({});
