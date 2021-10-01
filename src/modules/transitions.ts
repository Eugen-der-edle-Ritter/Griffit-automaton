import { cell } from './types';

interface INeighbors {
  top: cell;
  right: cell;
  bottom: cell;
  left: cell;
  rightTop: cell;
  rightBottom: cell;
  leftBottom: cell;
  leftTop: cell;
}

/** HASH RULE **/
export function hashRule(
  cell: cell,
  neighbors: INeighbors,
  states: number
): cell {
  const neighboursSum =
    neighbors.top +
    neighbors.right +
    neighbors.bottom +
    neighbors.left +
    neighbors.rightTop +
    neighbors.rightBottom +
    neighbors.leftBottom +
    neighbors.leftTop;
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
  return Math.min(Math.floor(neighboursSum / 8) + 5, states - 1) as cell;
}

/** RULE WITH DEMONS **/
export function demonsRule(
  cell: cell,
  neighbors: INeighbors,
  states: number
): cell {
  const nextState = (cell + 1) % states;
  if (
    neighbors.top === nextState ||
    neighbors.right === nextState ||
    neighbors.bottom === nextState ||
    neighbors.left === nextState
  ) {
    return nextState;
  }
  return cell;
}

/** MERCURY RULE **/
export function mercuryRule(cell: cell, neighbors: INeighbors): cell {
  if (cell === 0) {
    return (2 * (neighbors.leftTop % 2 ^ neighbors.rightTop % 2) +
      (neighbors.top % 2)) as cell;
  }
  if (cell === 1) {
    return (2 * (neighbors.leftTop % 2 ^ neighbors.leftBottom % 2) +
      (neighbors.left % 2)) as cell;
  }
  if (cell === 2) {
    return (2 * (neighbors.leftBottom % 2 ^ neighbors.rightBottom % 2) +
      (neighbors.bottom % 2)) as cell;
  }
  return (2 * (neighbors.rightBottom % 2 ^ neighbors.rightTop % 2) +
    (neighbors.right % 2)) as cell;
}
