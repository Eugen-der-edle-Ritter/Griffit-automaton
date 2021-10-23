import { Cell } from './types';

export interface INeighbours {
  top: Cell;
  right: Cell;
  bottom: Cell;
  left: Cell;
  rightTop: Cell;
  rightBottom: Cell;
  leftBottom: Cell;
  leftTop: Cell;
}
