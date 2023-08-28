/**
 * This is a little weird, but this transform is necessary
 * for things to make sense elsewhere
 *
 * Esentially the input is a string of y,x
 * This corresponds to the grid in the game, which is
 * [
 *  [1,2,3,4,5,6] // lower
 *  [7,8,9,10,11,12] // upper
 * ]
 * So [0,1] is the first row, first column - y, x
 *
 * This gets inverted in css, so lower visually appears on the bottom
 * and the rows greater than 2 are wrapper around so the final grid looks like
 *
 * [
 *  [
 *    7,8,9,
 *    10,11,12
 *  ],
 *  [
 *    1,2,3,
 *    4,5,6
 *  ]
 * ]
 *
 * For character positioning we need to match the visual grid
 * so y become the inverse of the input, and we add 1 if x is greater than 2
 *
 * We offset by 2.5 to take into account the wrapping row
 * is itself offset by 50% of the cell width
 */

const getPlayerPosition = (yAndXtoString: string) => {
  const [y, x] = yAndXtoString.split(",");
  let xInt = parseInt(x, 10);
  let yInt = y === "1" ? 0 : 2;
  if (xInt > 2) {
    yInt++;
  }
  if (xInt > 2) {
    xInt = xInt - 2.5;
  }

  return {
    x: xInt,
    y: yInt,
  };
};

export default getPlayerPosition;
