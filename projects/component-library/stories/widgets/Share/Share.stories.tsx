import { Story } from '@storybook/react';

import { Share, ShareProps } from './Share';

export default {
  title: 'Widgets/Share',
  component: Share,
};

const Template: Story<ShareProps> = (args) => <Share {...args} />;

export const Twitter = Template.bind({});
Twitter.args = {
  text: 'Twitter',
};

export const _Minimum = Template.bind({});
