import { Story } from '@storybook/react';

import Modal, { ModalProps } from './Modal.tsx';
import { ColorPair } from '../../../../helpers/media';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<ModalProps> = (args: ModalProps) => <Modal {...args} />;

export const PlaceHolder = Template.bind({});
PlaceHolder.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  children: 'Children',
  active: true,
};

export const PlaceHolderColor = Template.bind({});
PlaceHolderColor.args = {
  ...PlaceHolder.args,
  colorPair: ColorPair.Primary,
};

export const _Minimum = Template.bind({});
