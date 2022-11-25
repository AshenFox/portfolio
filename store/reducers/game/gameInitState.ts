export interface GameState {
  cursor_position: {
    x: number;
    y: number;
  };
  barrier_dimensions: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

// =========================

const gameInitState: GameState = {
  cursor_position: {
    x: 0,
    y: 0,
  },
  barrier_dimensions: {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  },
};

export default gameInitState;
