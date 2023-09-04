import React from "react";

import css from "./Node.module.css";

type Props = {
  move: (nextPlayerPosition: number[]) => void;
  points: number[];
  children: React.ReactNode;
};

type CSSVars = React.CSSProperties & {
  "--track-row": number;
  "--track-col": number;
};

const Node = ({ move, points, children }: Props) => (
  <div
    /*
     * map our grid to CSS Grid tracks
     * our grid is zero indexed
     * also grid area is row / col
     * rather than normal x / y
     * so we invert those points
     */
    style={
      {
        "--track-col": points[0] + 1,
        "--track-row": points[1] + 1,
      } as CSSVars
    }
    className={css.nodeContainer}
  >
    <button
      className={css.nodeButton}
      onClick={() => {
        move(points);
      }}
    >
      {children}
    </button>
  </div>
);

export default Node;
