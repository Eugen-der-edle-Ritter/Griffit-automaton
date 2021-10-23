import React, { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';

import { Slider } from './Slider';

export interface AcceleratorProps {
  speed: number;
  handleSpeed: (event: ChangeEvent) => void;
}

export const Accelerator: FC<AcceleratorProps> = ({ speed, handleSpeed }) => {
  return (
    <Section>
      <Slider value={speed} label="Speed" handleSpeed={handleSpeed} />
    </Section>
  );
};

const Section = styled.section`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1d20;
  border-radius: 0 0 0.7rem 0.7rem;
  text-align: center;
`;
