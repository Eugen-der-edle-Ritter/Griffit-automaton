import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/automaton/automaton';
import styled from '@emotion/styled';

import { width, height } from '@/constants/constants';

import { Cell } from '@/types';

import { CellItem } from './Cell';

export interface DisplayBlocksProps {
  cellsState: Cell[][];
  width: number;
  height: number;
}

export const DisplayBlocks: FC<DisplayBlocksProps> = ({ cellsState }) => {
  const colors: string[] = useSelector(
    (state: RootState) => state.colors.value
  );
  return (
    <Section>
      {cellsState.length > 0
        ? cellsState.map((row, rIndex) => {
            return (
              <Row key={rIndex}>
                {row.map((el, index) => (
                  <CellItem color={colors[el]} key={index} />
                ))}
              </Row>
            );
          })
        : ''}
    </Section>
  );
};

const Section = styled.section`
  height: ${height}px;
`;
const Row = styled.div`
  width: ${width}px;
  display: flex;
`;
