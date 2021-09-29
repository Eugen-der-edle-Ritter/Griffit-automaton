import { hashRule, demonsRule, mercuryRule } from './transitions';

/* RANDOM FILLING */
export function randomFill(
  states: number,
  height: number,
  width: number
): number[][] {
  const result: number[][] = [];
  for (let y = 0; y < height; y++) {
    const row: number[] = [];
    for (let x = 0; x < width; x++) {
      row[x] = Math.floor(Math.random() * states);
    }
    result[y] = row;
  }
  return result;
}

/* FILLING BY RULE */
export function transitionFill(
  rule: string,
  field: number[][],
  states: number,
  height: number,
  width: number
): number[][] {
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
