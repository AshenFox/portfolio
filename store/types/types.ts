// game
export const RESET_ALL_GAME_FIELDS = 'RESET_ALL_GAME_FIELDS';

export interface ResetAllGameFieldsAction {
  type: typeof RESET_ALL_GAME_FIELDS;
  payload?: {};
}

export type GameActions = ResetAllGameFieldsAction;

// ===========

export type AppActions = GameActions;
