import { Cell } from './types';
import { INeighbours } from './interfaces';

/** HASH RULE **/
export function hashRule(
  cell: Cell,
  neighbours: INeighbours,
  states: number
): Cell {
  const sum = neighboursSum(Object.values(neighbours));
  if (cell === 0) {
    if (sum < 5) {
      return 0;
    }
    if (sum < 100) {
      return 2;
    }
    return 3;
  }
  if (cell === states - 1) {
    return 0;
  }
  return Math.min(Math.floor(sum / 8) + 5, states - 1) as Cell;
}

/** RULE WITH DEMONS **/
export function demonsRule(
  cell: Cell,
  neighbours: INeighbours,
  states: number
): Cell {
  const nextState: Cell = ((cell + 1) % states) as Cell;
  return [
    neighbours.top,
    neighbours.right,
    neighbours.bottom,
    neighbours.left,
  ].includes(nextState)
    ? nextState
    : cell;
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

/** NEIGHBOURS SUM FUNCTION **/
export function neighboursSum(neighbours: Cell[]): number {
  return (neighbours as number[]).reduce((el: number, acc: number) => el + acc);
}
