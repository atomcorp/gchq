import getPlayerPosition from "../getPlayerPosition";

it("should return the an x/y coords from string", () => {
  const coords = getPlayerPosition("0,0");
  expect(coords).toEqual({ x: 0, y: 2 });
});

it("should invert the y coord", () => {
  const coords = getPlayerPosition("1,1");
  expect(coords).toEqual({ x: 1, y: 0 });
});

it("should increment the y if x is great than 2", () => {
  const coords = getPlayerPosition("0,3");
  expect(coords).toEqual({ x: 0.5, y: 3 });
});

it("should loop x and add half if it is greater than 2", () => {
  const coords = getPlayerPosition("0,5");
  expect(coords).toEqual({ x: 2.5, y: 3 });
});

it("should invert and increment y on the upper level", () => {
  const coords = getPlayerPosition("1,4");
  expect(coords).toEqual({ x: 1.5, y: 1 });
});
