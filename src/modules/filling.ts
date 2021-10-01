import { cell } from './types';
import { hashRule, demonsRule, mercuryRule } from './transitions';

/* RANDOM FILLING */
export function randomFill(
  states: number,
  height: number,
  width: number
): cell[][] {
  const result: cell[][] = [];
  for (let y = 0; y < height; y++) {
    const row: cell[] = [];
    for (let x = 0; x < width; x++) {
      const cell: cell = Math.floor(Math.random() * states) as cell;
      row[x] = cell;
    }
    result[y] = row;
  }
  return result;
}

/* FILLING BY RULE */
export function transitionFill(
  rule: string,
  field: cell[][],
  states: number,
  height: number,
  width: number
): cell[][] {
  return field.map((row, y, arr) => {
    return row.map((cell, x) => {
      // CELL'S NEIGHBOURS
      const neighbors = {
        top: arr[(y + 1) % height][x],
        right: arr[y][(x + 1) % width],
        bottom: arr[(y + height - 1) % height][x],
        left: arr[y][(x + width - 1) % width],
        rightTop: arr[(y + 1) % height][(x + 1) % width],
        rightBottom: arr[(y + height - 1) % height][(x + 1) % width],
        leftBottom: arr[(y + height - 1) % height][(x + width - 1) % width],
        leftTop: arr[(y + 1) % height][(x + width - 1) % width],
      };
      // CHANGE CELL STATE VIA SELECTED RULE
      if (rule === 'hash') {
        return hashRule(cell, neighbors, states);
      }
      if (rule === 'demons') {
        return demonsRule(cell, neighbors, states);
      }
      return mercuryRule(cell, neighbors);
    });
  });
}
