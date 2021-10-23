import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { store } from '@/app/store';

import { Display, hexToByteTransform, renderCanvas } from './Display';

jest.mock('react-redux', () => ({
  __esModule: true,
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

it('Display renders correctly', () => {
  const mockDispatch = jest.fn();

  (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  (useSelector as jest.Mock).mockReturnValue(['#fff', '#aaa', '#ccc']);

  const { asFragment } = render(
    <Provider store={store}>
      <Display cellsState={[]} width={100} height={100} />
    </Provider>
  );

  expect(asFragment).toMatchSnapshot();
});

it('testing hex to byte transform', () => {
  expect(hexToByteTransform(['#fff', '#aaa', '#ccc'])).toEqual([
    [255, 255, 255],
    [170, 170, 170],
    [204, 204, 204],
  ]);
});

it('testing canvas imageData fill', () => {
  // Create a canvas element
  const [width, height] = [2, 2];
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  // Get the drawing context
  const context: CanvasRenderingContext2D = canvas.getContext(
    '2d'
  ) as CanvasRenderingContext2D;

  expect(
    renderCanvas(
      context,
      [
        [1, 4],
        [6, 2],
      ],
      width,
      height,
      [
        [255, 255],
        [170, 170],
      ]
    )
  ).toEqual([
    [255, 255, 255],
    [170, 170, 170],
    [204, 204, 204],
  ]);
});
