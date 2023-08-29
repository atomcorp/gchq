import { renderHook, act } from "@testing-library/react";

import useGame from "../useGame";

test("it should render the initial state", () => {
  const { result } = renderHook(() => useGame());

  expect(result.current.state).toEqual({
    playerPosition: [0, 0],
    isInverted: false,
    status: "start",
    moves: 0,
  });
});

test("it should move the player", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 1]);
  });

  expect(result.current.state.playerPosition).toEqual([0, 1]);
});

test("it should not move the player if not a valid static move", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 1]);
  });
  act(() => {
    result.current.move([0, 0]);
  });

  expect(result.current.state.playerPosition).toEqual([0, 1]);
});

test("it should move the player if a valid dynamic move", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });

  expect(result.current.state.playerPosition).toEqual([0, 3]);
});

test("it should not move the player if not a valid dynamic move", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });
  act(() => {
    result.current.move([0, 0]);
  });

  expect(result.current.state.playerPosition).toEqual([0, 3]);
});

test("it should move multiple valid moves", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });
  act(() => {
    result.current.move([0, 4]);
  });
  act(() => {
    result.current.move([1, 4]);
  });

  expect(result.current.state.playerPosition).toEqual([1, 4]);
});

test("it should invert the dynamic routes when the player moves to a key", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });
  act(() => {
    result.current.move([0, 4]);
  });
  act(() => {
    result.current.move([1, 4]);
  });
  act(() => {
    result.current.move([1, 1]);
  });
  act(() => {
    result.current.move([1, 2]);
  });
  act(() => {
    result.current.move([1, 1]);
  });

  expect(result.current.state.playerPosition).toEqual([1, 1]);
  expect(result.current.state.isInverted).toEqual(true);
});

test("it should increment moves when the player moves", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });
  act(() => {
    result.current.move([0, 4]);
  });

  expect(result.current.state.moves).toEqual(2);
});

test("it should not increment moves when the player moves to an invalid position", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });
  act(() => {
    result.current.move([0, 0]);
  });

  expect(result.current.state.moves).toEqual(1);
});

it("should update the game status when player starts", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });

  expect(result.current.state.status).toEqual("playing");
});

it("should update the game status when player finishes", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });
  act(() => {
    result.current.move([0, 4]);
  });
  act(() => {
    result.current.move([1, 4]);
  });
  act(() => {
    result.current.move([1, 3]);
  });
  act(() => {
    result.current.move([1, 4]);
  });
  act(() => {
    result.current.move([1, 5]);
  });
  act(() => {
    result.current.move([0, 5]);
  });

  expect(result.current.state.status).toEqual("finish");
});

it("should default the game state", () => {
  const { result } = renderHook(() => useGame());

  act(() => {
    result.current.move([0, 3]);
  });
  act(() => {
    result.current.move([0, 4]);
  });
  act(() => {
    result.current.reset();
  });

  expect(result.current.state).toEqual({
    playerPosition: [0, 0],
    isInverted: false,
    status: "start",
    moves: 0,
  });
});
