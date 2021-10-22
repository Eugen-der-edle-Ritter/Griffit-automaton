import reducer, { setRule } from './ruleSlice';

import { Rule } from '@/types';

interface IRuleState {
  value: Rule;
}

it('should change rule', () => {
  const previousState: IRuleState = { value: 'Hash' };
  expect(reducer(previousState, setRule('Demons'))).toEqual({
    value: 'Demons',
  });
});
