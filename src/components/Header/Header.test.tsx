import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Header } from './Header';

it('Header renders correctly', () => {
  const { asFragment } = render(
    <Router>
      <Header
        sections={[
          { id: 0, path: '/', title: 'Main' },
          { id: 1, path: '/about', title: 'About' },
        ]}
      />
    </Router>
  );

  expect(asFragment).toMatchSnapshot();
});
