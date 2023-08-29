import css from "./Line.module.css";

type Props = {
  points: string;
};

const Line = ({ points }: Props) => (
  <svg className={css.line} viewBox="0 0 7 8">
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="7"
      refX="0"
      refY="3.5"
      orient="auto-start-reverse"
    >
      <polygon points="0 0, 10 3.5, 0 7" />
    </marker>
    <polyline
      points={points}
      stroke="black"
      strokeDasharray="4"
      markerMid="url(#arrowhead)"
      vectorEffect="non-scaling-stroke"
      fill="none"
    />
  </svg>
);

export default Line;
