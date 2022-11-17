import { GameActions } from './../../types/types';
import { SET_CURSOR_POSITION } from '../../types/types';
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

    default:
      return state;
  }
};

export default gameReducer;
