const calcRelativeTriangle = (multiplier: number) => {
  const width = 10 * multiplier;
  const height = 7 * multiplier;
  const refY = 3.5 * multiplier;
  const polygon = `0 0, ${width} ${refY}, 0 ${height}`;
  return {
    width,
    height,
    refY,
    polygon,
  };
};

const { width, height, refY, polygon } = calcRelativeTriangle(1.7);

const Marker = ({ id, color }: { id: string; color?: string }) => {
  return (
    <marker
      id={id}
      markerWidth={width}
      markerHeight={height}
      refX="-10"
      refY={refY}
      orient="auto-start-reverse"
      fill={color}
      strokeWidth={1}
      stroke="black"
    >
      <polygon points={polygon} />
    </marker>
  );
};

export default Marker;
