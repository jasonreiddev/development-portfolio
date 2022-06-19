import { Story } from '@storybook/react';
import { Device } from '../../../../helpers/media';

import { IfWidth, IfWidthProps } from './IfWidth';

export default {
  title: 'Components/If Width',
  component: IfWidth,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#ffffff' }],
    },
  },
};

const Template: Story<IfWidthProps> = (args) => <IfWidth {...args} />;

export const AFromTabletB = Template.bind({});
AFromTabletB.args = {
  falseChildren: 'A',
  minWidth: Device.Tablet,
  children: 'B',
};

export const AOnlyTabletB = Template.bind({});
AOnlyTabletB.args = {
  falseChildren: 'A',
  minWidth: Device.Tablet,
  children: 'B',
  maxWidth: Device.DesktopSmall,
  // A
};

export const NoneFromTabletB = Template.bind({});
NoneFromTabletB.args = {
  // None
  minWidth: Device.Tablet,
  children: 'B',
};

export const NoneOnlyTabletB = Template.bind({});
NoneOnlyTabletB.args = {
  // None
  minWidth: Device.Tablet,
  children: 'B',
  maxWidth: Device.DesktopSmall,
  // None
};

export const _Minimum = Template.bind({});
