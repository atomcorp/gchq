import Node from "./Node";

type Props = {
  move: (nextPlayerPosition: number[]) => void;
  points: number[];
};

const MoveNode = ({ move, points }: Props) => (
  <Node move={move} points={points}>
    <svg viewBox="0 0 100 100">
      <path
        d="
         M2,50
         A50,10 0 0,0 98,50
         A50,10 0 0,0 2,50
         L2,75
         A50,10,0 0,0 98,75
         L98,50             
         "
        style={{
          stroke: "#660000",
        }}
      />
    </svg>
  </Node>
);

export default MoveNode;
