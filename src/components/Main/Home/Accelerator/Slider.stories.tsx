import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Slider, SliderProps } from './Slider';

export default {
  component: Slider,
  title: 'Components/Slider',
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Slider',
};
