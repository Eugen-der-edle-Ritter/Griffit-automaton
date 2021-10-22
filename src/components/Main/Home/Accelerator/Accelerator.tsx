import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Slider } from './Slider';

export const Accelerator: FC = () => {
  return (
    <Section>
      <Slider label="Speed" />
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
