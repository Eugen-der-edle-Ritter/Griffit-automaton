import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { setRule } from './ruleSlice';

import { Rule } from '@/modules/types';

export interface RuleSwitcherProps {
  label: string;
  options: Rule[];
}

export const RuleSwitcher: FC<RuleSwitcherProps> = ({ label, options }) => {
  const dispatch = useDispatch();
  return (
    <Div>
      <Label>{label}: </Label>
      <Select onChange={(e) => dispatch(setRule(e.target.value))}>
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
`;
const Option = styled.option``;
