import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Accelerator, AcceleratorProps } from './Accelerator';

export default {
  component: Accelerator,
  title: 'Components/Accelerator',
} as Meta;

const Template: Story<AcceleratorProps> = (args) => <Accelerator {...args} />;

export const AcceleratorExample = Template.bind({});

AcceleratorExample.args = {};
