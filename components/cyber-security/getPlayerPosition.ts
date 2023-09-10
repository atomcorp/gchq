const getPlayerPosition = ([y, x]: number[]) => {
  let xInt = x;
  let yInt = y === 1 ? 0 : 2;
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
