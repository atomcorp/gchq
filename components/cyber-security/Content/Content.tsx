import useGame from "@/components/cyber-security/useGame";

import css from "./Content.module.css";

type Props = {
  moves: number;
  status: "start" | "finish" | "playing";
  reset: () => void;
};

const Content = ({ moves, status, reset }: Props) => {
  return (
    <section className={css.container}>
      <p>
        Move: {moves} {status === "finish" ? " | Won!" : ""}
      </p>
      <button type="button" onClick={reset}>
        Reset
      </button>

      <p>
        Rudolph needs to escape from this cyberspace maze by reaching the flag.
        He starts where indicated and can move North/East/South/West to points
        along the same layer, or he can Ascend/Descend between layers (as shown
        by the dashed lines).
      </p>
      <p>
        He can only go in the direction of the arrows. If he touches a key, then
        ALL the gold arrows will swap direction. What is his shortest route to
        get to the flag – and can you describe it using one 7-letter word?
      </p>
      {/* <Controls
          playerPosition={state.playerPosition}
          handleClick={({ level, index }) => {
            move([level, index]);
          }}
          reset={reset}
        /> */}
    </section>
  );
};

export default Content;
