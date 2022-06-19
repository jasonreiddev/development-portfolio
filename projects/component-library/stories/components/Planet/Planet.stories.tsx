import { Story } from '@storybook/react';

import { Planet, PlanetProps } from './Planet';
import { ColorPair } from '../../../../helpers/media';

export default {
  title: 'Components/Planet',
  component: Planet,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<PlanetProps> = (args: PlanetProps) => <Planet {...args} />;

export const Color = Template.bind({});
Color.args = {
  colorPair: ColorPair.Primary,
  colorPairMoon: ColorPair.Secondary,
};

export const _Minimum = Template.bind({});
