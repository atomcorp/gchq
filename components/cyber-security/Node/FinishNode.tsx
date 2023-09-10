import Node from "./Node";

import css from "./Node.module.css";

type Props = {
  move: (nextPlayerPosition: number[]) => void;
  points: number[];
};

const FinishNode = ({ move, points }: Props) => (
  <Node move={move} points={points}>
    <div className={css.finish}>🚩</div>
  </Node>
);

export default FinishNode;
