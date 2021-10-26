import React from 'react';
import { store } from '@/automaton/automaton';
import { Provider } from 'react-redux';

import { Story, Meta } from '@storybook/react';

import { RuleSwitcher, RuleSwitcherProps } from './RuleSwitcher';

export default {
  component: RuleSwitcher,
  title: 'Control Panel/RuleSwitcher',
} as Meta;

const Template: Story<RuleSwitcherProps> = (args) => (
  <Provider store={store}>
    <RuleSwitcher {...args} />
  </Provider>
);

export const RuleSwitcherExample = Template.bind({});

RuleSwitcherExample.args = {
  label: 'Label',
  options: ['Hash', 'Demons', 'Venus'],
};
