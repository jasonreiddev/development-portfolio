import { Story } from '@storybook/react';

import Modal, { ModalProps } from './Modal.tsx';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    children: 'Children',
    active: true,
  },
};

const Template: Story<ModalProps> = (args: ModalProps) => <Modal {...args} />;

export const Default = Template.bind({});
