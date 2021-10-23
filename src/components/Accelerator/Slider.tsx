import React, { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

export interface SliderProps {
  label: string;
  value: number;
  handleSpeed: (event: ChangeEvent) => void;
}

export const Slider: FC<SliderProps> = ({ label, value, handleSpeed }) => {
  return (
    <>
      <Label>{label}: </Label>
      <Range
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={handleSpeed}
      />
    </>
  );
};

const Label = styled.label`
  margin-right: 0.5rem;
  color: #e6e6e6;
  font-size: 0.85rem;
`;
const Range = styled.input`
  cursor: pointer;
`;
