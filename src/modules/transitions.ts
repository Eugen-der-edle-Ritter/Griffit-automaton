import { Cell } from './types';
import { INeighbours } from './interfaces';

/** HASH RULE **/
export function hashRule(cell: Cell, n: INeighbours, states: number): Cell {
  const neighboursSum =
    n.top +
    n.right +
    n.bottom +
    n.left +
    n.rightTop +
    n.rightBottom +
    n.leftBottom +
    n.leftTop;
  if (cell === 0) {
    if (neighboursSum < 5) {
      return 0;
    }
    if (neighboursSum < 100) {
      return 2;
    }
    return 3;
  }
  if (cell === states - 1) {
    return 0;
  }
  return Math.min(Math.floor(neighboursSum / 8) + 5, states - 1) as Cell;
}

/** RULE WITH DEMONS **/
export function demonsRule(cell: Cell, n: INeighbours, states: number): Cell {
  const nextState: Cell = ((cell + 1) % states) as Cell;
  // return Object.values(n).includes(nextState) ? nextState : cell;
  if (
    n.top === nextState ||
    n.right === nextState ||
    n.bottom === nextState ||
    n.left === nextState
  ) {
    return nextState;
  }
  return cell;
}

/** MERCURY RULE **/
export function venusRule(cell: Cell, n: INeighbours): Cell {
  if (cell === 0) {
    return (2 * (n.leftTop % 2 ^ n.rightTop % 2) + (n.top % 2)) as Cell;
  }
  if (cell === 1) {
    return (2 * (n.leftTop % 2 ^ n.leftBottom % 2) + (n.left % 2)) as Cell;
  }
  if (cell === 2) {
    return (2 * (n.leftBottom % 2 ^ n.rightBottom % 2) +
      (n.bottom % 2)) as Cell;
  }
  return (2 * (n.rightBottom % 2 ^ n.rightTop % 2) + (n.right % 2)) as Cell;
}
