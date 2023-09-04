import { renderHook, act } from "@testing-library/react";

import useGame from "../useGame";

test("it should render the initial state", () => {
  const { result } = renderHook(() => useGame());

  expect(result.current.state).toEqual({
    playerPosition: [1, 5],
    isInverted: false,
    status: "start",
    moves: 0,
  });
});

test("it should move the player", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([3, 5]);
  });

  expect(result.current.state.playerPosition).toEqual([3, 5]);
});

test("it should not move the player if not a valid static move", () => {
  const { result } = renderHook(() => useGame());

  // start at 1/5, move to 3/5, then try to move back to 1/5
  act(() => {
    result.current.move([3, 5]);
  });
  act(() => {
    result.current.move([1, 5]);
  });

  expect(result.current.state.playerPosition).toEqual([3, 5]);
});

test("it should move the player if a valid dynamic move", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([1, 1]);
  });

  expect(result.current.state.playerPosition).toEqual([1, 1]);
});

test("it should not move the player if not a valid dynamic move", () => {
  const { result } = renderHook(() => useGame());

  // start at 1/5, move to 1/1, then try to move back to 1/5
  act(() => {
    result.current.move([1, 1]);
  });
  act(() => {
    result.current.move([1, 5]);
  });

  expect(result.current.state.playerPosition).toEqual([1, 1]);
});

test("it should move multiple valid moves", () => {
  const { result } = renderHook(() => useGame());

  // start at 1,5 move to 2,7, then 4,7, then to 4,3
  act(() => {
    result.current.move([2, 7]);
  });
  act(() => {
    result.current.move([4, 7]);
  });
  act(() => {
    result.current.move([4, 3]);
  });

  expect(result.current.state.playerPosition).toEqual([4, 3]);
});

test("it should invert the dynamic routes when the player moves to a key", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([2, 7]);
  });
  act(() => {
    result.current.move([4, 7]);
  });
  act(() => {
    result.current.move([4, 3]);
  });
  act(() => {
    result.current.move([3, 1]);
  });
  act(() => {
    result.current.move([5, 1]);
  });
  act(() => {
    result.current.move([3, 1]);
  });

  expect(result.current.state.playerPosition).toEqual([3, 1]);
  expect(result.current.state.isInverted).toEqual(true);
});

test("it should increment moves when the player moves", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([2, 7]);
  });
  act(() => {
    result.current.move([4, 7]);
  });

  expect(result.current.state.moves).toEqual(2);
});

test("it should not increment moves when the player moves to an invalid position", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([3, 5]);
  });
  act(() => {
    result.current.move([1, 5]);
  });

  expect(result.current.state.moves).toEqual(1);
});

it("should update the game status when player starts", () => {
  const { result } = renderHook(() => useGame());

  expect(result.current.state.status).toEqual("start");

  act(() => {
    result.current.move([3, 5]);
  });

  expect(result.current.state.status).toEqual("playing");
});

it("should update the game status when player finishes", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([2, 7]);
  });
  act(() => {
    result.current.move([4, 7]);
  });
  act(() => {
    result.current.move([4, 3]);
  });
  act(() => {
    result.current.move([2, 3]);
  });
  act(() => {
    result.current.move([4, 3]);
  });
  act(() => {
    result.current.move([6, 3]);
  });
  act(() => {
    result.current.move([6, 7]);
  });

  expect(result.current.state.status).toEqual("finish");
});

it("should default the game state when reset", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([2, 7]);
  });
  act(() => {
    result.current.move([4, 7]);
  });
  act(() => {
    result.current.reset();
  });

  expect(result.current.state).toEqual({
    playerPosition: [1, 5],
    isInverted: false,
    status: "start",
    moves: 0,
  });
});
