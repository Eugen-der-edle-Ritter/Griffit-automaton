import { Rule, Cell, Field } from './types';
import { hashRule, demonsRule, venusRule } from './transitions';

/* RANDOM FILLING */
export function randomFill(
  states: number,
  height: number,
  width: number
): Field {
  const result: Field = [];
  for (let y = 0; y < height; y++) {
    const row: Cell[] = [];
    for (let x = 0; x < width; x++) {
      const cell: Cell = Math.floor(Math.random() * states) as Cell;
      row[x] = cell;
    }
    result[y] = row;
  }
  return result;
}

/* FILLING BY RULE */
export function transitionFill(
  rule: Rule,
  field: Field,
  states: number,
  height: number,
  width: number
): Field {
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
      if (rule === 'Hash') {
        return hashRule(cell, neighbors, states);
      }
      if (rule === 'Demons') {
        return demonsRule(cell, neighbors, states);
      }
      return venusRule(cell, neighbors);
    });
  });
}
