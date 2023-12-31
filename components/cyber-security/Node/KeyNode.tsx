import Node from "./Node";

import css from "./Node.module.css";

type Props = {
  move: (nextPlayerPosition: number[]) => void;
  points: number[];
};

const KeyNode = ({ move, points }: Props) => (
  <Node move={move} points={points}>
    <div className={css.key}>🔑</div>
  </Node>
);

export default KeyNode;
