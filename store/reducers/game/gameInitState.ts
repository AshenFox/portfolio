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
  game_container_dimensions: {
    height: number;
    width: number;
    scrollLeft: number;
    scrollTop: number;
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
  game_container_dimensions: {
    height: 0,
    width: 0,
    scrollLeft: 0,
    scrollTop: 0,
  },
};

export default gameInitState;
