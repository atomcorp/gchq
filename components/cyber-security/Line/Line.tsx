import React from "react";
import css from "./Line.module.css";
import Marker from "./Marker";

type Props = {
  points: number[][][];
  color?: string;
};

const Line = ({ points, color }: Props) => {
  const id = React.useId();
  return (
    <svg className={css.line} viewBox="0 0 7 8" preserveAspectRatio="none">
      <Marker id={id} color={color} />
      {points.map((pointArr) => {
        const isVertical = pointArr[0][0] === pointArr[2][0];
        const pointStr = pointArr.toString();
        return (
          <polyline
            key={pointStr}
            points={pointStr}
            stroke="black"
            strokeDasharray={isVertical ? 4 : 0}
            markerMid={`url(#${id})`}
            vectorEffect="non-scaling-stroke"
            fill="none"
          />
        );
      })}
    </svg>
  );
};

export default Line;
