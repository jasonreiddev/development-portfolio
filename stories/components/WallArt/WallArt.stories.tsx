import { Story } from '@storybook/react';

import { WallArt, WallArtProps } from './WallArt';

export default {
  title: 'Components/Wall Art',
  component: WallArt,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<WallArtProps> = (args) => <WallArt {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/300/400',
  alt: 'Alt text!',
  width: 300,
  caption: 'Caption',
};

export const SrcOnly = Template.bind({});
SrcOnly.args = {
  src: 'https://picsum.photos/300/400',
};

export const Minimum = Template.bind({});
