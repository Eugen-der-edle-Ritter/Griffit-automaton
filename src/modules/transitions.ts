interface INeighbors {
  top: number;
  right: number;
  bottom: number;
  left: number;
  rightTop: number;
  rightBottom: number;
  leftBottom: number;
  leftTop: number;
}

/** HASH RULE **/
export function hashRule(
  cell: number,
  neighbors: INeighbors,
  states: number
): number {
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
  return Math.min(Math.floor(neighboursSum / 8) + 5, states - 1);
}

/** RULE WITH DEMONS **/
export function demonsRule(
  cell: number,
  neighbors: INeighbors,
  states: number
): number {
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
export function mercuryRule(cell: number, neighbors: INeighbors): number {
  if (cell === 0) {
    return (
      2 * (neighbors.leftTop % 2 ^ neighbors.rightTop % 2) + (neighbors.top % 2)
    );
  }
  if (cell === 1) {
    return (
      2 * (neighbors.leftTop % 2 ^ neighbors.leftBottom % 2) +
      (neighbors.left % 2)
    );
  }
  if (cell === 2) {
    return (
      2 * (neighbors.leftBottom % 2 ^ neighbors.rightBottom % 2) +
      (neighbors.bottom % 2)
    );
  }
  return (
    2 * (neighbors.rightBottom % 2 ^ neighbors.rightTop % 2) +
    (neighbors.right % 2)
  );
}
