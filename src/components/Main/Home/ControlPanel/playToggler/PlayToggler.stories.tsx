import React from 'react';
import { store } from '@/automaton/automaton';
import { Provider } from 'react-redux';

import { Story, Meta } from '@storybook/react';

import { PlayToggler, PlayTogglerProps } from './PlayToggler';

export default {
  component: PlayToggler,
  title: 'Control Panel/PlayToggler',
} as Meta;

const Template: Story<PlayTogglerProps> = (args) => (
  <Provider store={store}>
    <PlayToggler {...args} />
  </Provider>
);

export const PlayTogglerExample = Template.bind({});

PlayTogglerExample.args = {
  value: true,
};
