import { Story } from '@storybook/react';

import { CustomKerning, CustomKerningProps } from './CustomKerning';

export default {
  title: 'Components/Custom Kerning',
  component: CustomKerning,
};

const Template: Story<CustomKerningProps> = (args) => <CustomKerning {...args} />;

export const Hello = Template.bind({});
Hello.args = {
  kernGroups: [
    { letters: 'He', letterSpacing: '0px' },
    { letters: 'll', letterSpacing: '-1px' },
    { letters: 'o', letterSpacing: '1px' },
  ],
};

export const Wavey = Template.bind({});
Wavey.args = {
  kernGroups: [
    { letters: 'W', letterSpacing: '0px' },
    { letters: 'A', letterSpacing: '-2px' },
    { letters: 'VEY!', letterSpacing: '0px' },
  ],
};

export const JasonReid = Template.bind({});
JasonReid.args = {
  kernGroups: [
    { letters: 'Jason Reid', letterSpacing: '0px' },
    { letters: ' :)', letterSpacing: '5px' },
  ],
};

export const _Minimum = Template.bind({});
