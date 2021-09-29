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

describe('transition filling hash', () => {
  const flatArr: number[] = transitionFill(
    'hash',
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

/* Testing filling by demons rule */

describe('transition filling demons', () => {
  const flatArr: number[] = transitionFill(
    'demons',
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

describe('transition filling mercury', () => {
  const flatArr: number[] = transitionFill(
    'mercury',
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
