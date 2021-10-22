import React from 'react';
import { Story, Meta } from '@storybook/react';

import { RuleSwitcher, RuleSwitcherProps } from './RuleSwitcher';

export default {
  component: RuleSwitcher,
  title: 'Control Panel/RuleSwitcher',
} as Meta;

const Template: Story<RuleSwitcherProps> = (args) => <RuleSwitcher {...args} />;

export const RuleSwitcherExample = Template.bind({});

RuleSwitcherExample.args = {
  label: 'Label',
  options: ['Hash', 'Demons', 'Venus'],
};
