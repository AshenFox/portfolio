import { GameActions } from './../../types/types';
import { RESET_ALL_GAME_FIELDS } from '../../types/types';
import initialState, { GameState } from './gameInitState';

const GameReducer = (state = initialState, action: GameActions): GameState => {
  const { payload, type } = action;

  switch (type) {
    case RESET_ALL_GAME_FIELDS:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default GameReducer;
