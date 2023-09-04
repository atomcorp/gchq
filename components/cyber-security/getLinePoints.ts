const getMidPoint = (start: number, finish: number) => {
  // get difference between the points
  // half it
  // add to lowest point

  let [lowest, highest] = [start, finish].sort();
  const diff = (highest - lowest) / 2;
  const point = lowest + diff;
  return point;
};

const calculateMidPoint = (start: number[], finish: number[]) => {
  const x = getMidPoint(start[0], finish[0]);
  const y = getMidPoint(start[1], finish[1]);

  return [x, y];
};

const getLinePoints = (coords: number[][]) => {
  const start = coords[0];
  const finish = coords[1];

  const mid = calculateMidPoint(start, finish);

  return [start, mid, finish];
};

export default getLinePoints;
