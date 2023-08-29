/**
 * Grid size
 * 7 tracks across
 * 8 tracks down
 */
// [
//   [0, 0],
//   [0, 1],
// ];

const translatePointsToCoords = (level: number, point: number) => {
  let x, y;

  y = level === 0 ? 5 : 1;

  if (point > 2) {
    x = (point - 2) * 2;
    y = y + 2;
  } else {
    x = point * 2 + 1;
  }

  return [x, y];
};

const getMidCoord = (start: number, finish: number) => {
  let [lowest, highest] = [start, finish].sort();
  const diff = (highest - lowest) / 2;
  const coord = lowest + diff;
  return coord;
};

const calculateMidCoords = (start: number[], finish: number[]) => {
  // get difference between the points
  // half it
  // add to lowest point
  const x = getMidCoord(start[0], finish[0]);
  const y = getMidCoord(start[1], finish[1]);

  return [x, y];
};

const getLinePoints = (coords: number[][]) => {
  const start = coords[0];
  const finish = coords[1];

  const startXY = translatePointsToCoords(start[0], start[1]);
  const finishXY = translatePointsToCoords(finish[0], finish[1]);
  const midXY = calculateMidCoords(startXY, finishXY);

  return [startXY, midXY, finishXY].join(" ");
};

export default getLinePoints;
