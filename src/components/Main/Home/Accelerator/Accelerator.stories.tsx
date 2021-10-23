import React from 'react';
import { store } from '@/app/store';
import { Provider } from 'react-redux';

import { Story, Meta } from '@storybook/react';

import { Accelerator } from './Accelerator';

export default {
  component: Accelerator,
  title: 'Footer/Accelerator',
} as Meta;

const Template: Story = (args) => (
  <Provider store={store}>
    <Accelerator {...args} />
  </Provider>
);

export const AcceleratorExample = Template.bind({});

AcceleratorExample.args = {};
