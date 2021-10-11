import React, { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { Toggle } from './Toggle';
import { Switch } from './Switch';

export interface ControlPanelProps {
  handleStop: () => void;
  handleStart: () => void;
  handleRule: (event: ChangeEvent) => void;
}

export const ControlPanel: FC<ControlPanelProps> = ({
  handleStop,
  handleStart,
  handleRule,
}) => (
  <Section>
    <Wrapper>
      <Toggle label="start" onClick={handleStop}>
        Stop
      </Toggle>
      <Toggle label="start" onClick={handleStart}>
        Start
      </Toggle>
    </Wrapper>
    <Switch
      label="Rule"
      options={['Hash', 'Demons', 'Venus']}
      onChange={handleRule}
    />
  </Section>
);

const Section = styled.section`
  margin: 1rem auto 0;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1d20;
  border-radius: 0.7rem 0.7rem 0 0;
`;
const Wrapper = styled.div``;
