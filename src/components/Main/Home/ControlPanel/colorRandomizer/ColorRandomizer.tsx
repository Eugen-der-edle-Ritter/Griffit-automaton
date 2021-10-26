import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { BgColorsOutlined } from '@ant-design/icons';

import { setColors } from './colorSlice';

const randomColors = () => {
  const possibleValues = 'abcdef0123456789';
  const newColors = [];
  for (let i = 0; i < 16; i++) {
    newColors.push(
      '#' +
        possibleValues[Math.round(Math.random() * 15)] +
        '' +
        possibleValues[Math.round(Math.random() * 15)] +
        '' +
        possibleValues[Math.round(Math.random() * 15)]
    );
  }
  return newColors;
};

export const ColorRandomizer: FC = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(setColors(randomColors()))}>
      <BgColorsOutlined />
    </Button>
  );
};

const Button = styled.button`
  margin: 0 0.3rem;
  padding: 0.3rem 0.7rem;
  color: #e6e6e6;
  background-color: #383b40;
  border-radius: 0.5rem;
  border: 0.5px solid #010101;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #383b405e;
  }
`;
