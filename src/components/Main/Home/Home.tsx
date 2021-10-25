import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Cell, Rule } from '../../../modules/types';

import { useInterval } from './hooks/useInterval';

import { ControlPanel } from './ControlPanel/ControlPanel';
import { Display } from './Display/Display';
import { Accelerator } from './Accelerator/Accelerator';

import { randomFill, transitionFill } from '../../../modules/filling';

// import { useInterval } from '@/hooks/useInterval';

const statesCount = 16;

export const Home: FC = () => {
  const [width] = useState<number>(500);
  const [height] = useState<number>(500);
  const [cellsState, setCellsState] = useState<Cell[][]>([]);
  const [rule, setRule] = useState<Rule>('Hash');
  const [speed, setSpeed] = useState<number>(50);
  const [isPlaying, setPlaying] = useState<boolean>(true);

  useEffect(() => {
    const randomState: Cell[][] = randomFill(statesCount, height, width);
    setCellsState(randomState);
  }, []);
  useInterval(
    () => {
      setCellsState((cellsState) =>
        transitionFill(rule, cellsState, statesCount, height, width)
      );
    },
    isPlaying ? Math.floor(70 / speed) + 50 : null
  );

  const stopTimer = () => {
    setPlaying(false);
  };
  const startTimer = () => {
    setPlaying(true);
  };

  const handleRule = (event: ChangeEvent) => {
    const randomState: Cell[][] = randomFill(statesCount, height, width);
    setCellsState(randomState);
    setRule((event.target as HTMLTextAreaElement).value as Rule);
  };

  const handleSpeed = (event: ChangeEvent) => {
    setSpeed(Number((event.target as HTMLTextAreaElement).value));
  };

  return (
    <>
      <Header>
        <Title>Cyclic cellular automaton</Title>
      </Header>
      <Main>
        <ControlPanel
          handleStop={stopTimer}
          handleStart={startTimer}
          handleRule={handleRule}
        />
        <Display cellsState={cellsState} width={width} height={height} />
        <Accelerator speed={speed} handleSpeed={handleSpeed} />
      </Main>
    </>
  );
};

const Header = styled.header``;
const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`;
const Title = styled.h1`
  margin: 3rem;
  text-align: center;
  font-size: 2.5rem;
`;
