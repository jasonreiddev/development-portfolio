import { Story } from '@storybook/react';

import { WallArt, WallArtProps } from './WallArt';
import { ColorPair } from 'helpers/media';

export default {
  title: 'Components/Wall Art',
  component: WallArt,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<WallArtProps> = (args) => <WallArt {...args} />;

export const Picsum = Template.bind({});
Picsum.args = {
  src: 'https://picsum.photos/300/400',
  alt: 'Alt text!',
  width: 300,
  caption: 'Caption',
};

export const PicsumColor = Template.bind({});
PicsumColor.args = {
  ...Picsum.args,
  colorPair: ColorPair.Primary,
};

export const SrcOnly = Template.bind({});
SrcOnly.args = {
  src: 'https://picsum.photos/300/400',
};

export const _Minimum = Template.bind({});
