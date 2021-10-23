import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Header, HeaderProps } from './Header';

export default {
  component: Header,
  title: 'Layouts/Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

export const HeaderExample = Template.bind({});

HeaderExample.args = {
  sections: [
    { id: 0, path: 'section1', title: 'Section #1' },
    { id: 1, path: 'section2', title: 'section #2' },
  ],
};
