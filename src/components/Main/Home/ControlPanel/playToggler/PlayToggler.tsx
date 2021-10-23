import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';

import { runTimer } from '@/automaton/automaton';
import { setPlay } from './playSlice';

export interface PlayTogglerProps {
  value: boolean;
}

export const PlayToggler: FC<PlayTogglerProps> = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        if (value) {
          dispatch(setPlay(value));
          dispatch(runTimer());
        } else {
          dispatch(setPlay(value));
        }
      }}
    >
      {value ? <CaretRightOutlined /> : <PauseOutlined />}
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
