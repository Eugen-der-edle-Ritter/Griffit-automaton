import '../public/style.css';
import { cell } from './modules/types';
import { randomFill, transitionFill } from './modules/filling';

/* INITILIZE AUTOMATA STATE */
const statesArr: string[] = [
  '#113',
  '#014',
  '#b16',
  '#54f',
  '#74f',
  '#fff',
  '#add',
  '#4fc',
  '#185',
  '#8c4',
  '#ef6',
  '#4bd',
  '#27f',
  '#33f',
  '#059',
  '#567',
];
const states: number = statesArr.length;

/* INTERFACE FOR GLOBAL CANVAS AUTOMATON CELL */
interface ICell {
  width: number;
  height: number;
}

window.onload = () => {
  /* GET CANVAS CONTEXT */
  const canvas: HTMLCanvasElement = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

  const { width, height }: ICell = canvas;

  /* DRAW EMPTY RECTANGLE */
  context!.fillRect(0, 0, width, height);

  /* SUBSCRIBE ON TRANSITION-TYPE TOGGLER */
  const ruleSelector: HTMLElement | null =
    document.querySelector('.ruleSelector');
  if (ruleSelector) {
    ruleSelector.addEventListener('change', (e): void => {
      const newRule: string = (e.target as HTMLTextAreaElement).value;
      clearInterval(timer);
      field = randomFill(byteArr.length, height, width);
      timer = drawAutomata(newRule);
    });
  }

  /* TRANSFORM HEX STRING INTO BYTE ARRAYS */
  const byteArr: number[][] = colorTransform(statesArr);

  console.log(byteArr, 'hi')

  /* DEFINE AND FILL 2d ARRAY OF CELL STATES BY RANDOM VALUES */
  let field: cell[][] = randomFill(byteArr.length, height, width);

  /* TRANSFORMING CANVAS CELL'S STATES THROUGH THE TIME */
  let timer = drawAutomata('hash');

  function drawAutomata(rule: string) {
    const timer = setInterval(() => {
      field = transitionFill(rule, field, states, height, width);
      draw();
    }, 50);
    return timer;
  }

  /* CONVERTING HEX INTO BYTE ARRAY */
  function colorTransform(colorArr: string[]): number[][] {
    return colorArr.map((el, i) => {
      return [
        parseInt(colorArr[i].charAt(1) + colorArr[i].charAt(1), 16),
        parseInt(colorArr[i].charAt(2) + colorArr[i].charAt(2), 16),
        parseInt(colorArr[i].charAt(3) + colorArr[i].charAt(3), 16),
      ];
    });
  }

  /* RENDERING CANVAS GRID */
  function draw(): void {
    const imageData = context!.getImageData(0, 0, width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const offset = (width * y + x) * 4;
        imageData.data[offset] = byteArr[field[y][x]][0];
        imageData.data[offset + 1] = byteArr[field[y][x]][1];
        imageData.data[offset + 2] = byteArr[field[y][x]][2];
      }
    }
    context!.putImageData(imageData, 0, 0);
  }
};
