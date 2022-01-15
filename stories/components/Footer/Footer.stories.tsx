import { Story } from '@storybook/react';
import Footer from './Footer';
const meta = {
  component: Footer,
  title: 'Components/Footer',
};

export default meta;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
