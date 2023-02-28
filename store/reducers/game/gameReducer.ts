import { GameActions } from './../../types/types';
import {
  SET_CURSOR_POSITION,
  SET_BARRIER_DIMENSIONS,
  SET_GAME_CONTAINER_DIMENSIONS,
  SET_GAME_CONTAINER_SCROLL,
} from '../../types/types';
import initialState, { GameState } from './gameInitState';

const gameReducer = (state = initialState, action: GameActions): GameState => {
  const { payload, type } = action;

  switch (type) {
    case SET_CURSOR_POSITION:
      return {
        ...state,
        cursor_position: {
          x: payload.x,
          y: payload.y,
        },
      };

    case SET_BARRIER_DIMENSIONS:
      return {
        ...state,
        barrier_dimensions: {
          x: payload.x,
          y: payload.y,
          height: payload.height,
          width: payload.width,
        },
      };

    case SET_GAME_CONTAINER_DIMENSIONS:
      return {
        ...state,
        game_container_dimensions: {
          ...state.game_container_dimensions,
          height: payload.height,
          width: payload.width,
        },
      };

    case SET_GAME_CONTAINER_SCROLL:
      return {
        ...state,
        game_container_dimensions: {
          ...state.game_container_dimensions,
          scrollLeft: payload.scrollLeft,
          scrollTop: payload.scrollTop,
        },
      };

    default:
      return state;
  }
};

export default gameReducer;
