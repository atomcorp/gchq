import React from "react";
import css from "./Line.module.css";

type Props = {
  points: string[];
  color?: string;
};

const calcRelativeTriangle = (multiplier: number) => {
  const width = 10 * multiplier;
  const height = 7 * multiplier;
  const refY = 3.5 * multiplier;
  const polygon = `0 0, ${width} ${refY}, 0 ${height}`;
  return {
    width,
    height,
    refY,
    polygon,
  };
};

const Line = ({ points, color }: Props) => {
  const id = React.useId();
  const { width, height, refY, polygon } = calcRelativeTriangle(1.7);
  return (
    <svg className={css.line} viewBox="0 0 7 8" preserveAspectRatio="none">
      <marker
        id={id}
        markerWidth={width}
        markerHeight={height}
        refX="-10"
        refY={refY}
        orient="auto-start-reverse"
        fill={color}
        strokeWidth={1}
        stroke="black"
      >
        <polygon points={polygon} />
      </marker>
      {points.map((point) => (
        <polyline
          key={point}
          points={point}
          stroke="black"
          strokeDasharray="4"
          markerMid={`url(#${id})`}
          vectorEffect="non-scaling-stroke"
          fill="none"
        />
      ))}
    </svg>
  );
};

export default Line;
