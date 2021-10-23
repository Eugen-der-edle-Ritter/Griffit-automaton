import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/automaton/automaton';
import styled from '@emotion/styled';

import { Cell } from '@/types';
import { height, scale } from '@/constants/constants';

export interface DisplayProps {
  cellsState: Cell[][];
  width: number;
  height: number;
}

export const hexToByteTransform = (colors: string[]): number[][] => {
  return colors.map((color) => {
    return [
      parseInt(color.charAt(1) + color.charAt(1), 16),
      parseInt(color.charAt(2) + color.charAt(2), 16),
      parseInt(color.charAt(3) + color.charAt(3), 16),
    ];
  });
};

export const renderCanvas = (
  context: CanvasRenderingContext2D,
  cellsState: Cell[][],
  width: number,
  height: number,
  byteArr: number[][]
): ImageData => {
  const imageData = context.getImageData(0, 0, width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const offset = (width * y + x) * 4;
      imageData.data[offset] = byteArr[cellsState[y][x]][0];
      imageData.data[offset + 1] = byteArr[cellsState[y][x]][1];
      imageData.data[offset + 2] = byteArr[cellsState[y][x]][2];
    }
  }
  return imageData;
};

export const Display: FC<DisplayProps> = ({ cellsState, width, height }) => {
  const colors: string[] = useSelector(
    (state: RootState) => state.colors.value
  );
  const byteArr: number[][] = hexToByteTransform(colors);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (canvas) {
      const context: CanvasRenderingContext2D = canvas.getContext(
        '2d'
      ) as CanvasRenderingContext2D;
      //Our first draw
      context.fillStyle = '#000';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, []);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (cellsState.length > 0 && canvas) {
      const context: CanvasRenderingContext2D = canvas.getContext(
        '2d'
      ) as CanvasRenderingContext2D;

      const data = renderCanvas(context, cellsState, width, height, byteArr);

      context.putImageData(data, 0, 0);
    }
  }, [cellsState]);
  return (
    <Section>
      <Canvas ref={canvasRef} width={width} height={height}></Canvas>
    </Section>
  );
};

const Section = styled.section`
  margin-top: ${height / 4}px;
  height: ${height}px;
  transform: scale(${scale});
`;
const Canvas = styled.canvas``;
