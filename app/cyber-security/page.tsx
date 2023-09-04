"use client";

import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

import Line from "@/components/cyber-security/Line/Line";

import useGame from "@/components/cyber-security/useGame";

import css from "./page.module.css";
import {
  staticLinePoints,
  dynamicLinePoints,
  invertedDynamicLinePoints,
  nodePoints,
  keyPoints,
} from "@/components/cyber-security/consts";
import MoveNode from "@/components/cyber-security/Node/MoveNode";
import Content from "@/components/cyber-security/Content/Content";
import KeyNode from "@/components/cyber-security/Node/KeyNode";

const spring = {
  type: "spring",
  damping: 40,
  stiffness: 300,
  restDelta: 0.01,
};

const getTranslate = (x: number, y: number) => {
  return `translate(calc(${x} * 100%), calc(${y} * 100%))`;
};

export default function Page() {
  const { state, move, reset } = useGame();

  const [x, y] = state.playerPosition;

  const invertableLinePoints = !state.isInverted
    ? dynamicLinePoints
    : invertedDynamicLinePoints;
  return (
    <main className={css.container}>
      <header>
        <h1 className={css.title}>Cyber Security</h1>
        <section className={css.content}>
          <p>Source: https://www.gchq.gov.uk/news/xmaschallenge2022</p>
        </section>
      </header>

      <div className={css.game}>
        <div className={css.lines}>
          <Line points={staticLinePoints} />
          <Line points={invertableLinePoints} color="#DAA520" />
        </div>

        <div className={css.grid}>
          {nodePoints.map((points, key) => (
            <MoveNode key={points.toString()} move={move} points={points} />
          ))}
          {keyPoints.map((points, key) => (
            <KeyNode key={points.toString()} move={move} points={points} />
          ))}
          {/* TODO: add finish svg */}
          <motion.div
            initial={false}
            layout="position"
            transition={spring}
            animate={{
              transform: getTranslate(x, y),
            }}
            className={css.player}
          >
            <div className={css.playerIcon}>🦌</div>
          </motion.div>
        </div>
      </div>
      <Content moves={state.moves} status={state.status} reset={reset} />
    </main>
  );
}
