"use client";

import React, { CSSProperties } from "react";

import Line from "@/components/cyber-security/Line/Line";

import useGame from "@/components/cyber-security/useGame";
import getPlayerPosition from "@/components/cyber-security/getPlayerPosition";

import css from "./page.module.css";
import { staticLinePoints } from "@/components/cyber-security/consts";

type pointType = "start" | "finish" | "key" | "";

const grid: pointType[][] = [
  ["start", "", "", "", "", "finish"],
  ["", "", "key", "key", "", ""],
];

type PlayerCSS = CSSProperties & {
  "--x": number;
  "--y": number;
};

export default function Page() {
  const { state, move, reset } = useGame();

  const { x, y } = getPlayerPosition(state.playerPosition);
  return (
    <main className={css.container}>
      <div className={css.grid}>
        {grid.map((points, level) => (
          <div className={css.level} key={level}>
            {points.map((point, index) => {
              const playerPosition = [level, index].toString();
              return (
                <button
                  data-coord={index + "/" + level}
                  className={css.cell}
                  type="button"
                  onClick={() => {
                    move([level, index]);
                  }}
                  key={index}
                >
                  {point}
                </button>
              );
            })}
          </div>
        ))}
        <div
          style={
            {
              "--x": x,
              "--y": y,
            } as PlayerCSS
          }
          className={css.player}
        >
          🦌
        </div>
        <div className={css.lines}>
          {/* <Line points="1,5 1,3 1,1" /> */}
          {/* 0,0 -> 1,0 */}
          {/* <Line points="1,5 1.5,6 2,7" /> */}
          {/* 0,0 -> 0,3 */}
          {/* <Line points="1,5 2,5 3,5" /> */}
          {staticLinePoints.map((points: string, index: number) => (
            <Line points={points} key={index} />
          ))}
        </div>
      </div>
      <p>Is won: {state.status === "finish" ? "Won" : ""}</p>
      <p>Move: {state.moves}</p>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </main>
  );
}
