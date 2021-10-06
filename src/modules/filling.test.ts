import { randomFill, transitionFill } from './filling';

/* Testing random filling */

describe('random filling', () => {
  const flatArr: number[] = randomFill(10, 10, 10).flat();
  const sum: number = flatArr.reduce(
    (prevEl: number, curEl: number) => prevEl + curEl
  );

  it('state sum greater than min value', () => {
    expect(sum).toBeGreaterThanOrEqual(0);
  });
  it('state sum less than max value', () => {
    expect(sum).toBeLessThanOrEqual(1000);
  });
});

/* Testing filling by hash rule */

describe('transition filling Hash', () => {
  const flatArr: number[] = transitionFill(
    'Hash',
    [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ],
    10,
    3,
    3
  ).flat();
  const sum: number = flatArr.reduce(
    (prevEl: number, curEl: number) => prevEl + curEl
  );

  it('state sum greater than min value', () => {
    expect(sum).toBeGreaterThanOrEqual(0);
  });
  it('state sum less than max value', () => {
    expect(sum).toBeLessThanOrEqual(300);
  });
});

/* Testing filling by Demons rule */

describe('transition filling Demons', () => {
  const flatArr: number[] = transitionFill(
    'Demons',
    [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ],
    10,
    3,
    3
  ).flat();
  const sum: number = flatArr.reduce(
    (prevEl: number, curEl: number) => prevEl + curEl
  );

  it('state sum greater than min value', () => {
    expect(sum).toBeGreaterThanOrEqual(0);
  });
  it('state sum less than max value', () => {
    expect(sum).toBeLessThanOrEqual(300);
  });
});

/* Testing filling by mercury rule */

describe('transition filling Venus', () => {
  const flatArr: number[] = transitionFill(
    'Venus',
    [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ],
    10,
    3,
    3
  ).flat();
  const sum: number = flatArr.reduce(
    (prevEl: number, curEl: number) => prevEl + curEl
  );

  it('state sum greater than min value', () => {
    expect(sum).toBeGreaterThanOrEqual(0);
  });
  it('state sum less than max value', () => {
    expect(sum).toBeLessThanOrEqual(300);
  });
});
