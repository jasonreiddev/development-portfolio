import Modal, { ModalProps } from './Modal.tsx';
import { Meta, Story } from '@storybook/react';

const meta: Meta<ModalProps> = {
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

export default meta;

const Template: Story<ModalProps> = (args: ModalProps) => <Modal {...args} />;

export const Default = Template.bind({});
