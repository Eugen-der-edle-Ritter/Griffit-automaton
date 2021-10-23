import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { setRule } from './ruleSlice';

import { Rule } from '@/modules/types';
import { RootState } from '@/app/store';

export interface RuleSwitcherProps {
  label: string;
  options: Rule[];
}

export const RuleSwitcher: FC<RuleSwitcherProps> = ({ label, options }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.play.value);
  return (
    <Div>
      <Label>{label}: </Label>
      <Select
        data-testid="select"
        onChange={(e) => dispatch(setRule(e.target.value))}
        disabled={isPlaying}
      >
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Div>
  );
};

const Div = styled.div``;
const Label = styled.label`
  margin-right: 0.5rem;
  color: #e6e6e6;
  font-size: 0.85rem;
`;
const Select = styled.select`
  height: 1.6rem;
  padding-left: 0.2rem;
  color: #dddddd;
  background-color: #383b40;
  border: 0.5px solid #010101;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
const Option = styled.option``;
