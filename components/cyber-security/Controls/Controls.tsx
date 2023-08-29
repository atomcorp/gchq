import { useEffect } from "react";

type Props = {
  playerPosition: number[];
  handleClick: (position: { level: number; index: number }) => void;
  reset: () => void;
};

const Controls = ({
  playerPosition: [level, index],
  handleClick,
  reset,
}: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowUp":
          handleClick({
            index: index - 3,
            level,
          });
          break;
        case "ArrowRight":
          handleClick({
            index: index + 1,
            level,
          });
          break;
        case "ArrowDown":
          handleClick({
            index: index + 3,
            level,
          });
          break;
        case "ArrowLeft":
          handleClick({
            index: index - 1,
            level,
          });
          break;
        case "Space":
          handleClick({
            level: level === 0 ? 1 : 0,
            index,
          });
          break;
        case "KeyR":
          reset();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick, index, level, reset]);

  return (
    <section>
      <h3>Controls:</h3>
      <p>Click the nodes.</p>
      <p>Keyboard controls</p>
      <ul>
        <li>North/East/South/West: Arrow keys</li>
        <li>Ascend/Descend: Space</li>
      </ul>
      <p>A11y buttons:</p>
      <button
        onClick={() => {
          handleClick({
            index: index - 3,
            level,
          });
        }}
      >
        North
      </button>
      <button
        onClick={() => {
          handleClick({
            index: index + 1,
            level,
          });
        }}
      >
        East
      </button>
      <button
        onClick={() => {
          handleClick({
            index: index + 3,
            level,
          });
        }}
      >
        South
      </button>
      <button
        onClick={() => {
          handleClick({
            index: index - 1,
            level,
          });
        }}
      >
        West
      </button>
      <button
        onClick={() => {
          handleClick({
            level: level + 1,
            index,
          });
        }}
      >
        Ascend
      </button>
      <button
        onClick={() => {
          handleClick({
            level: level - 1,
            index,
          });
        }}
      >
        Descend
      </button>
    </section>
  );
};

export default Controls;
