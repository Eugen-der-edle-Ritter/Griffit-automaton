import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface ToggleProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Toggle: FC<ToggleProps> = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

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
