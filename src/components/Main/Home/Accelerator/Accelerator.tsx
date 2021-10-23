import React, { FC } from 'react';
import styled from '@emotion/styled';

import { height } from '@/constants/constants';

import { Slider } from './Slider';

export const Accelerator: FC = () => {
  return (
    <Section>
      <Slider label="Speed" />
    </Section>
  );
};

const Section = styled.section`
  margin-top: ${height / 4}px;
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1d20;
  border-radius: 0 0 0.7rem 0.7rem;
  text-align: center;
`;
