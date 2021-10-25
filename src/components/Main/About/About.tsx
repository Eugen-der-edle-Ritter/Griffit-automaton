import React, { FC } from 'react';

import styled from '@emotion/styled';

export const About: FC = () => {
  return (
    <>
      <Title>About cellular automatons</Title>
      <Description>
        A cyclic cellular automaton is a kind of cellular automaton rule
        developed by David Griffeath and studied by several other cellular
        automaton researchers. In this system, each cell remains unchanged until
        some neighboring cell has a modular value exactly one unit larger than
        that of the cell itself, at which point it copies its neighbor's value.
        One-dimensional cyclic cellular automata can be interpreted as systems
        of interacting particles, while cyclic cellular automata in higher
        dimensions exhibit complex spiraling behavior.
      </Description>
    </>
  );
};

const Title = styled.h1`
  margin: 3rem;
  text-align: center;
  font-size: 2.5rem;
`;
const Description = styled.div`
  max-width: 70vw;
  margin: 0 auto;
  font-size: 1.5rem;
  font-style: italic;
`;
