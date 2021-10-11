import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

interface IHeaderItem {
  id: number;
  path: string;
  title: string;
}

export interface HeaderProps {
  sections: IHeaderItem[];
}

export const Header: FC<HeaderProps> = ({ sections }) => {
  return (
    <Nav>
      {sections.map((item) => (
        <li key={item.id}>
          <NavLink
            exact
            to={item.path}
            activeStyle={{
              background: 'hsla(273, 100%, 25%, 80%)',
              fontWeight: 'bold',
            }}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </Nav>
  );
};

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  background: hsla(273, 100%, 25%, 70%);
  font-size: 1.5rem;
  & a {
    display: block;
    padding: 1rem;
    color: #e6e6e6;
    text-decoration: none;
  }
  & a:hover {
    background: hsla(273, 100%, 25%, 40%);
  }
`;
