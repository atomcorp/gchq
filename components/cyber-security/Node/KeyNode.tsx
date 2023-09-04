import Node from "./Node";

type Props = {
  move: (nextPlayerPosition: number[]) => void;
  points: number[];
};

const KeyNode = ({ move, points }: Props) => (
  <Node move={move} points={points}>
    <svg viewBox="0 0 24 24">
      <path d="M 7 5 C 3.134 5 0 8.134 0 12 C 0 15.866 3.134 19 7 19 C 10.170669 19 12.846171 16.890989 13.707031 14 L 18 14 L 18 17 L 22 17 L 22 14 L 24 14 L 24 10 L 13.707031 10 C 12.846171 7.1090112 10.170669 5 7 5 z M 7 9 C 8.657 9 10 10.343 10 12 C 10 13.657 8.657 15 7 15 C 5.343 15 4 13.657 4 12 C 4 10.343 5.343 9 7 9 z"></path>
    </svg>
  </Node>
);

export default KeyNode;
