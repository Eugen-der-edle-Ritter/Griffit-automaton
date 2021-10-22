import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSpeed } from './speedSlice';
import { RootState } from '@/app/store';

export interface SliderProps {
  label: string;
}

export const Slider: FC<SliderProps> = ({ label }) => {
  const speed: number = useSelector((state: RootState) => state.speed.value);
  const dispatch = useDispatch();
  return (
    <>
      <Label>{label}: </Label>
      <Range
        type="range"
        min={1}
        max={100}
        value={speed}
        onChange={(e) => dispatch(setSpeed(e.target.value))}
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
