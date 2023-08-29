import getLinePoints from "../getLinePoints";
import { staticRoutesArrays, dynamicRoutesArrays } from "../consts";

it("should return horizontal static point", () => {
  const result = getLinePoints([
    [0, 0],
    [0, 1],
  ]);
  expect(result).toBe("1,5 2,5 3,5");
});

it("should return middle point in horizontal route", () => {
  const result = getLinePoints([
    [0, 0],
    [0, 1],
  ]);
  expect(result).toBe("1,5 2,5 3,5");
});

it("should do diagonal lines", () => {
  const result = getLinePoints([
    [0, 0],
    [0, 3],
  ]);
  expect(result).toBe("1,5 1.5,6 2,7");
});

it("should do vertical lines", () => {
  const result = getLinePoints([
    [0, 0],
    [1, 0],
  ]);
  expect(result).toBe("1,5 1,3 1,1");
});
