import React, { FC, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { Cell } from '../../types';

export interface DisplayProps {
  cellsState: Cell[][];
  width: number;
  height: number;
}

const colors: string[] = [
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

const stateColors: number[][] = colors.map((color, i) => {
  return [
    parseInt(color.charAt(1) + color.charAt(1), 16),
    parseInt(color.charAt(2) + color.charAt(2), 16),
    parseInt(color.charAt(3) + color.charAt(3), 16),
  ];
});

export const Display: FC<DisplayProps> = ({ cellsState, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      //Our first draw
      if (context) {
        context.fillStyle = '#000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      }
    }
  }, []);
  useEffect(() => {
    if (cellsState.length > 0) {
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext('2d');
        if (context) {
          const imageData = context.getImageData(0, 0, width, height);
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const offset = (width * y + x) * 4;
              imageData.data[offset] = stateColors[cellsState[y][x]][0];
              imageData.data[offset + 1] = stateColors[cellsState[y][x]][1];
              imageData.data[offset + 2] = stateColors[cellsState[y][x]][2];
            }
          }
          context.putImageData(imageData, 0, 0);
        }
      }
    }
  }, [cellsState]);
  return (
    <Section>
      <Canvas ref={canvasRef} width={width} height={height}></Canvas>
    </Section>
  );
};

const Section = styled.section`
  height: 500px;
`;
const Canvas = styled.canvas``;
