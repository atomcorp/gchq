"use client";

import React from "react";

import {
  staticRoutes,
  dynamicRoutes,
  invertedDynamicRoutes,
  keyCoordsArray,
} from "@/components/cyber-security/consts";

import css from "./page.module.css";
import useGame from "@/components/cyber-security/useGame";

type pointType = "start" | "finish" | "key" | "";

const grid: pointType[][] = [
  ["start", "", "", "", "", "finish"],
  ["", "", "key", "key", "", ""],
];

const escapeCoords = [0, 5];

const playerPosition = [];

type route = number[][][];

const routesToString = (routes: route) =>
  routes.map((route) => {
    return route.toString();
  });

const canMove = (
  proposedMove: string,
  dynamicRoute: Record<string, boolean>
): boolean => {
  if (staticRoutes[proposedMove]) {
    return true;
  }
  if (dynamicRoute[proposedMove]) {
    return true;
  }

  return false;
};

const defaultState = { playerPostion: "0,0", isInverted: false };

export default function Page() {
  const { state, move, reset } = useGame();
  return (
    <main className={css.container}>
      {grid.map((points, level) => (
        <div className={css.level} key={level}>
          {points.map((point, index) => {
            const playerPosition = [level, index].toString();
            return (
              <button
                type="button"
                onClick={() => {
                  move([level, index]);
                }}
                key={index}
              >
                {point}
                {state.playerPosition === playerPosition ? "true" : ""}
              </button>
            );
          })}
        </div>
      ))}
      <p>Is won: {state.status === "finish" ? "Won" : ""}</p>
      <p>Move: {state.moves}</p>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </main>
  );
}
