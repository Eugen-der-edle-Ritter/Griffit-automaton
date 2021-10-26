import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { RootState } from '@/automaton/automaton';
import { StepForwardOutlined, StepBackwardOutlined } from '@ant-design/icons';

import { PlayToggler } from './playToggler/PlayToggler';
import { RuleSwitcher } from './ruleSwitcher/RuleSwitcher';
import { ColorRandomizer } from './colorRandomizer/ColorRandomizer';

export const ControlPanel: FC = () => {
  const dispatch = useDispatch();
  const { past, future, isPlaying } = useSelector((state: RootState) => {
    return {
      past: state.cells.past,
      future: state.cells.future,
      isPlaying: state.play.value,
    };
  });
  const canUndo: boolean = past.length > 0;
  const canRedo: boolean = future.length > 0;

  return (
    <Section>
      <Wrapper>
        <Button
          data-testid="undo"
          onClick={() => dispatch(UndoActionCreators.undo())}
          disabled={!canUndo}
        >
          <StepBackwardOutlined />
        </Button>
        <PlayToggler value={!isPlaying} />
        <Button
          data-testid="redo"
          onClick={() => dispatch(UndoActionCreators.redo())}
          disabled={!canRedo}
        >
          <StepForwardOutlined />
        </Button>
      </Wrapper>
      <RuleSwitcher label="Rule" options={['Hash', 'Demons', 'Venus']} />
      <ColorRandomizer />
    </Section>
  );
};

const Section = styled.section`
  margin: 1rem auto 0;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1d20;
  border-radius: 0.7rem 0.7rem 0 0;
`;
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
  &:disabled {
    cursor: not-allowed;
  }
`;
const Wrapper = styled.div``;
