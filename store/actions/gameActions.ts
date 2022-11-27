import { AppActions } from '../types/types';
import { ThunkActionApp } from '../store';
import {
  SET_CURSOR_POSITION,
  SET_BARRIER_DIMENSIONS,
  SET_GAME_CONTAINER_DIMENSIONS,
} from '../types/types';

// SET_CURSOR_POSITION
export const set_cursor_position = (x: number, y: number): AppActions => ({
  type: SET_CURSOR_POSITION,
  payload: {
    x,
    y,
  },
});

// SET_BARRIER_DIMENSIONS
export const set_barrier_dimensions = (
  x: number,
  y: number,
  height: number,
  width: number
): AppActions => ({
  type: SET_BARRIER_DIMENSIONS,
  payload: {
    x,
    y,
    height,
    width,
  },
});

// SET_GAME_CONTAINER_DIMENSIONS
export const set_game_container_dimensions = (
  height: number,
  width: number
): AppActions => ({
  type: SET_GAME_CONTAINER_DIMENSIONS,
  payload: {
    height,
    width,
  },
});

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
