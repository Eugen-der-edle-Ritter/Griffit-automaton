import React from 'react';
import { store } from '@/automaton/automaton';
import { Provider } from 'react-redux';

import { Story, Meta } from '@storybook/react';

import { Slider, SliderProps } from './Slider';

export default {
  component: Slider,
  title: 'Footer/Slider',
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <Provider store={store}>
    <Slider {...args} />
  </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Slider',
};
