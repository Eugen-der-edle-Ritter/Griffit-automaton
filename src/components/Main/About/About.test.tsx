import React from 'react';
import { render } from '@testing-library/react';

import { About } from './About';

it('About section renders correctly', () => {
  const { asFragment } = render(<About />);

  expect(asFragment()).toMatchSnapshot();
});
