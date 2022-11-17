import { AppActions } from '../types/types';
import { ThunkActionApp } from '../store';
import { SET_CURSOR_POSITION } from '../types/types';

// SET_CURSOR_POSITION
export const set_cursor_position = (x: number, y: number): AppActions => ({
  type: SET_CURSOR_POSITION,
  payload: {
    x,
    y,
  },
});

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
