import React, { FC } from 'react';
import styled from '@emotion/styled';

import { width, height } from '@/constants/constants';

export interface ICellProps {
  color: string;
}

export const CellItem: FC<ICellProps> = React.memo(({ color }) => (
  <Cell color={color} />
));

const Cell = styled.div`
  width: 1px;
  height: 1px;
  background-color: ${(props) => props.color};
`;
