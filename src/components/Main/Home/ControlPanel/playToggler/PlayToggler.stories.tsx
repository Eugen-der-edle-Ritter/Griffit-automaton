import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PlayToggler, PlayTogglerProps } from './PlayToggler';

export default {
  component: PlayToggler,
  title: 'Control Panel/PlayToggler',
} as Meta;

const Template: Story<PlayTogglerProps> = (args) => <PlayToggler {...args} />;

export const PlayTogglerExample = Template.bind({});

PlayTogglerExample.args = {
  value: true,
};
