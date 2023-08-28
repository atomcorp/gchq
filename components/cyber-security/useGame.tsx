import React from "react";
import { produce } from "immer";

import {
  staticRoutes,
  dynamicRoutes,
  invertedDynamicRoutes,
  keyCoordsArray,
} from "./consts";

type status = "start" | "finish" | "playing";

type stateType = {
  playerPosition: string;
  isInverted: boolean;
  status: status;
  moves: number;
};

const initialState: stateType = {
  playerPosition: "0,0",
  isInverted: false,
  status: "start",
  moves: 0,
};

const validateMove = (
  currentPosition: string,
  nextPosition: string,
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
    const nextPlayerPositionStringy = nextPlayerPosition.toString();

    if (
      !validateMove(
        state.playerPosition,
        nextPlayerPositionStringy,
        state.isInverted
      )
    ) {
      return;
    }

    const isInverted = isKeyPosition(nextPlayerPositionStringy)
      ? !state.isInverted
      : state.isInverted;

    const isFinish = nextPlayerPositionStringy === "0,5";

    setState(
      produce(state, (draft) => {
        draft.playerPosition = nextPlayerPositionStringy;
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
