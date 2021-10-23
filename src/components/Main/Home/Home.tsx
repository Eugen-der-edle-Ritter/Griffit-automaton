import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { Cell, Rule } from '@/types';
import { randomUpdate, RootState } from '@/app/store';

import { width, height, scale } from '@/constants/constants';

import { Accelerator } from './Accelerator/Accelerator';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { Display } from './Display/Display';
// import { DisplayBlocks as Display } from './Display/DisplayBlocks';

export const Home: FC = () => {
  const [cellsState, rule]: [Cell[][], Rule] = useSelector(
    (state: RootState) => [state.cells.present.value, state.rule.value]
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(randomUpdate());
  }, [rule]);

  return (
    <>
      <Header>
        <Title>Cyclic cellular automaton</Title>
      </Header>
      <Main>
        <ControlPanel />
        <Display cellsState={cellsState} width={width} height={height} />
        <Accelerator />
      </Main>
    </>
  );
};

const Header = styled.header``;
const Main = styled.main`
  max-width: ${width * scale}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin: 3rem;
  text-align: center;
  font-size: 2.5rem;
`;
