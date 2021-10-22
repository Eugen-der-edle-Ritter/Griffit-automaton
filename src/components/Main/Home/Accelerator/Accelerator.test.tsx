import React from 'react';
import { render } from '@testing-library/react';

import { Accelerator } from './Accelerator';

it('Accelerator renders correctly', () => {
  const { asFragment } = render(<Accelerator />);

  expect(asFragment()).toMatchSnapshot();
});
