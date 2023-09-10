import React from "react";
import { produce } from "immer";

import {
  staticRoutes,
  dynamicRoutes,
  invertedDynamicRoutes,
  keyCoordsArray,
  playerPoint,
  finishPoint,
} from "./consts";

type status = "start" | "finish" | "playing";

type stateType = {
  playerPosition: number[];
  isInverted: boolean;
  status: status;
  moves: number;
};

const initialState: stateType = {
  playerPosition: playerPoint,
  isInverted: false,
  status: "start",
  moves: 0,
};

const validateMove = (
  currentPosition: number[],
  nextPosition: number[],
  isInverted: boolean
) => {
  const proposedMove = [currentPosition, nextPosition].toString();
  if (staticRoutes[proposedMove]) {
    return true;
  }
  if (
    !isInverted
      ? dynamicRoutes[proposedMove]
      : invertedDynamicRoutes[proposedMove]
  ) {
    return true;
  }
  return false;
};

const isKeyPosition = (playerPosition: string) => {
  return keyCoordsArray.includes(playerPosition);
};

const useGame = () => {
  const [state, setState] = React.useState(initialState);
  const move = (nextPlayerPosition: number[]) => {
    if (
      !validateMove(state.playerPosition, nextPlayerPosition, state.isInverted)
    ) {
      return;
    }

    const nextPlayerPositionStringy = nextPlayerPosition.toString();

    const isInverted = isKeyPosition(nextPlayerPositionStringy)
      ? !state.isInverted
      : state.isInverted;

    const isFinish = nextPlayerPositionStringy === finishPoint.toString();

    setState(
      produce(state, (draft) => {
        draft.playerPosition = nextPlayerPosition;
        draft.isInverted = isInverted;
        draft.moves++;
        draft.status = !isFinish ? "playing" : "finish";
      })
    );
  };
  const reset = () => {
    setState(initialState);
  };
  return { state, move, reset };
};

export default useGame;
