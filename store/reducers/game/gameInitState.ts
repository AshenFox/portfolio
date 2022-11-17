export interface GameState {
  cursor_position: {
    x: number;
    y: number;
  };
}

// =========================

const gameInitState: GameState = {
  cursor_position: {
    x: 0,
    y: 0,
  },
};

export default gameInitState;
