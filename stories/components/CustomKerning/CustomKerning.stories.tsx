import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomKerning } from './CustomKerning';

export default {
  title: 'Components/CustomKerning',
  component: CustomKerning,
} as ComponentMeta<typeof CustomKerning>;

const Template: ComponentStory<typeof CustomKerning> = (args) => <CustomKerning {...args} />;

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
    { letters: 'V', letterSpacing: '0px' },
    { letters: 'EY!', letterSpacing: '1px' },
  ],
};

export const JasonReid = Template.bind({});
JasonReid.args = {
  kernGroups: [
    { letters: 'Jason Reid', letterSpacing: '0px' },
    { letters: ' :)', letterSpacing: '5px' },
  ],
};

export const Minimum = Template.bind({});
Minimum.args = {};
