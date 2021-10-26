import React from 'react';
import { store } from '@/automaton/automaton';
import { Provider } from 'react-redux';

import { Story, Meta } from '@storybook/react';

import { ColorRandomizer } from './ColorRandomizer';

export default {
  component: ColorRandomizer,
  title: 'Control Panel/ColorRandomizer',
} as Meta;

const Template: Story = (args) => (
  <Provider store={store}>
    <ColorRandomizer {...args} />
  </Provider>
);

export const ColorRandomizerExample = Template.bind({});

ColorRandomizerExample.args = {};
