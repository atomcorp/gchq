"use client";

import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

import Line from "@/components/cyber-security/Line/Line";

import useGame from "@/components/cyber-security/useGame";
import getPlayerPosition from "@/components/cyber-security/getPlayerPosition";

import css from "./page.module.css";
import {
  staticLinePoints,
  dynamicLinePoints,
  invertedDynamicLinePoints,
} from "@/components/cyber-security/consts";
import Controls from "@/components/cyber-security/Controls/Controls";

type pointType = "" | "🚩" | "🔑" | "";

const grid: pointType[][] = [
  ["", "", "", "", "", "🚩"],
  ["", "", "🔑", "🔑", "", ""],
];

type PlayerCSS = CSSProperties & {
  "--x": number;
  "--y": number;
};

const spring = {
  type: "spring",
  damping: 40,
  stiffness: 300,
  restDelta: 0.01,
};

export default function Page() {
  const { state, move, reset } = useGame();
  const cellRef = React.useRef<HTMLButtonElement>(null);

  const cellWidth = cellRef.current?.clientWidth ?? 100;
  const cellHeight = cellRef.current?.clientHeight ?? 100;

  const { x, y } = getPlayerPosition(state.playerPosition);

  const invertableLinePoints = !state.isInverted
    ? dynamicLinePoints
    : invertedDynamicLinePoints;
  return (
    <main className={css.container}>
      <h1 className={css.title}>Cyber Security</h1>
      <section className={css.content}>
        <p>Source: https://www.gchq.gov.uk/news/xmaschallenge2022</p>
      </section>
      <div className={css.grid}>
        {grid.map((points, level) => (
          <div className={css.level} key={level}>
            {points.map((point, index) => {
              return (
                <button
                  tabIndex={-1}
                  ref={index === 0 ? cellRef : null}
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
        <div className={css.playerContainer}>
          <motion.div
            initial={false}
            transition={spring}
            animate={{
              x: x * cellWidth,
              y: y * cellHeight,
              scale: state.playerPosition[1] > 2 ? 1.2 : 1,
            }}
            className={css.player}
          >
            🦌
          </motion.div>
        </div>
        <div className={css.lines}>
          <Line points={staticLinePoints} />
          <Line points={invertableLinePoints} color="#DAA520" />
        </div>
      </div>
      <section className={css.content}>
        <p>
          Move: {state.moves} {state.status === "finish" ? " | Won!" : ""}
        </p>
        <button type="button" onClick={reset}>
          Reset
        </button>

        <p>
          Rudolph needs to escape from this cyberspace maze by reaching the
          flag. He starts where indicated and can move North/East/South/West to
          points along the same layer, or he can Ascend/Descend between layers
          (as shown by the dashed lines).
        </p>
        <p>
          He can only go in the direction of the arrows. If he touches a key,
          then ALL the gold arrows will swap direction. What is his shortest
          route to get to the flag – and can you describe it using one 7-letter
          word?
        </p>
        <Controls
          playerPosition={state.playerPosition}
          handleClick={({ level, index }) => {
            move([level, index]);
          }}
          reset={reset}
        />
      </section>
    </main>
  );
}
