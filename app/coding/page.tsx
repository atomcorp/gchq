"use client";

import React, { CSSProperties } from "react";
import css from "./page.module.css";

// export const metadata = {
//   title: "Coding",
// };

const colors = {
  gold: "orange",
  blue: "skyblue",
  green: "mediumseagreen",
  white: "white",
} as const;

type color = (typeof colors)[keyof typeof colors];

type Letter = {
  letter: string;
  color: color;
  id: number;
};

type Cell = CSSProperties & {
  "--color": string;
};

const startGrid = [
  { letter: "f", color: colors.gold, id: Math.random() },
  { letter: "o", color: colors.blue, id: Math.random() },
  { letter: "r", color: colors.white, id: Math.random() },
  { letter: "m", color: colors.blue, id: Math.random() },
  { letter: "a", color: colors.green, id: Math.random() },
  { letter: "t", color: colors.gold, id: Math.random() },
  { letter: "i", color: colors.blue, id: Math.random() },
  { letter: "o", color: colors.gold, id: Math.random() },
  { letter: "n", color: colors.green, id: Math.random() },
];

const blueOptions = ["p", "a", "r", "t"];
const greenOptions = ["e", "y", "e", "s"];
const goldOptions = ["u", "n", "c", "u", "r", "l"];

const getOptions = (color: color) => {
  if (color === colors.blue) {
    return blueOptions;
  }
  if (color === colors.green) {
    return greenOptions;
  }
  if (color === colors.gold) {
    return goldOptions;
  }
  if (color === colors.white) {
    return [];
  }
  throw new Error("Invalid color");
};

const answer = "carpentry";

export default function Home() {
  const [grid, setGrid] = React.useState<Letter[]>(startGrid);

  const handleChange = (letter: string, index: number) => {
    setGrid((currentGrid) => {
      const nextGrid = [...currentGrid];
      nextGrid[index] = {
        ...currentGrid[index],
        letter: letter,
      };
      return nextGrid;
    });
  };
  return (
    <main className={css.container}>
      <h1>Coding</h1>
      <p>Source: https://www.gchq.gov.uk/news/xmaschallenge2022</p>
      <ol className={css.grid}>
        {grid.map((cell, index) => {
          const options = getOptions(cell.color);
          const originalLetter = startGrid[index].letter;
          return (
            <li
              style={{ "--color": cell.color } as Cell}
              className={css.cell}
              key={cell.id}
            >
              {options.length > 0 ? (
                <select
                  className={css.select}
                  value={
                    options.includes(cell.letter) ? cell.letter : originalLetter
                  }
                  onChange={(event) => {
                    handleChange(event.target.value ?? originalLetter, index);
                  }}
                >
                  <option>{originalLetter}</option>
                  <optgroup label={options.join("")}>
                    {options.map((option, i) => (
                      <option key={i}>{option}</option>
                    ))}
                  </optgroup>
                </select>
              ) : (
                cell.letter
              )}
            </li>
          );
        })}
      </ol>
      <section>
        <p>WORD: {grid.map((cell) => cell.letter).join("")}</p>
      </section>
      <section className={css.explainer}>
        <ol>
          <li>Replace all the blue cells with a letter from PART</li>
          <li>Replace all the green cells with a letter from EYES</li>
          <li>Replace all the gold cells with a letter from UNCURL</li>
        </ol>
        <p>
          After each step you should have three 3-letter words in the rows of
          the grid, and you need to finish with a 9-letter word in the same
          formation as FORMATION.
        </p>
      </section>
      <button
        type="button"
        onClick={() => {
          setGrid(startGrid);
        }}
      >
        Reset
      </button>
    </main>
  );
}
