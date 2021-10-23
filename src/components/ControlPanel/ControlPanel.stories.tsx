import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ControlPanel, ControlPanelProps } from './ControlPanel';

export default {
  component: ControlPanel,
  title: 'Control Panel/ControlPanel',
} as Meta;

const Template: Story<ControlPanelProps> = (args) => <ControlPanel {...args} />;

export const PanelExample = Template.bind({});

PanelExample.args = {};
