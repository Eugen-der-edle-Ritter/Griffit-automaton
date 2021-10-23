import { Cell } from './types';

/* Cell neighborhood */
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
