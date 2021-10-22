import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ColorRandomizer } from './ColorRandomizer';

export default {
  component: ColorRandomizer,
  title: 'Control Panel/ColorRandomizer',
} as Meta;

const Template: Story = (args) => <ColorRandomizer {...args} />;

export const ColorRandomizerExample = Template.bind({});

ColorRandomizerExample.args = {};
