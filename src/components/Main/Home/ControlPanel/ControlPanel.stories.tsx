import React from 'react';
import { store } from '@/automaton/automaton';
import { Provider } from 'react-redux';

import { Story, Meta } from '@storybook/react';

import { ControlPanel } from './ControlPanel';

export default {
  component: ControlPanel,
  title: 'Control Panel/ControlPanel',
} as Meta;

const Template: Story = (args) => (
  <Provider store={store}>
    <ControlPanel {...args} />
  </Provider>
);

export const PanelExample = Template.bind({});

PanelExample.args = {};
