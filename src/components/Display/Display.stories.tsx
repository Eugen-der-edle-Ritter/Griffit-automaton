import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Display, DisplayProps } from './Display';

export default {
  component: Display,
  title: 'Display/Display',
} as Meta;

const Template: Story<DisplayProps> = (args) => <Display {...args} />;

export const DisplayExample = Template.bind({});
