import React, { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

export interface SwitchProps {
  label: string;
  options: string[];
  onChange: (event: ChangeEvent) => void;
}

export const Switch: FC<SwitchProps> = ({ label, options, onChange }) => (
  <Div>
    <Label>{label}: </Label>
    <Select onChange={onChange}>
      {options.map((option, index) => (
        <Option key={index}>{option}</Option>
      ))}
    </Select>
  </Div>
);

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
