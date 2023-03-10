import { AppActions, SET_MENU_IS_EXITED } from '../types/types';
import { ThunkActionApp } from '../store';
import {
  SET_CONTENT_LOADED,
  SET_CONTENT_LOADER_ISAPPEARING,
  SET_CONTENT_LOADER_ISEXITED,
  SET_SHOW_SECTION_LOADER,
  SET_SHOW_NAVIGATION,
  SET_SHOW_MENU,
  SET_DIRECTION,
} from '../types/types';
import { getDir } from '../helpers/functions';

// SET_CONTENT_LOADED
export const set_content_loaded = (value: boolean): AppActions => ({
  type: SET_CONTENT_LOADED,
  payload: {
    value,
  },
});

// SET_CONTENT_LOADER_ISAPPEARING
export const set_content_loader_isappearing = (value: boolean): AppActions => ({
  type: SET_CONTENT_LOADER_ISAPPEARING,
  payload: {
    value,
  },
});

// SET_CONTENT_LOADER_ISEXITED
export const set_content_loader_isexited = (value: boolean): AppActions => ({
  type: SET_CONTENT_LOADER_ISEXITED,
  payload: {
    value,
  },
});

// SET_SHOW_SECTION_LOADER
export const set_show_section_loader = (value: boolean): AppActions => ({
  type: SET_SHOW_SECTION_LOADER,
  payload: {
    value,
  },
});

// SET_SHOW_NAVIGATION
export const set_show_navigation = (value: boolean): AppActions => ({
  type: SET_SHOW_NAVIGATION,
  payload: {
    value,
  },
});

// SET_SHOW_MENU
export const set_show_menu = (value: boolean): AppActions => ({
  type: SET_SHOW_MENU,
  payload: {
    value,
  },
});

// SET_MENU_IS_EXITED
export const set_menu_is_exited = (value: boolean): AppActions => ({
  type: SET_MENU_IS_EXITED,
  payload: {
    value,
  },
});

// SET_DIRECTION
export const set_direction = (pathname_to: string, pathname_from: string): AppActions => {
  const dir = getDir(pathname_to, pathname_from);

  return {
    type: SET_DIRECTION,
    payload: {
      value: dir,
    },
  };
};

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================

/* // SAVE_FLASHCARDS_ANSWER
export const save_flashcards_answer = (
  id: string,
  card_answer: 'correct' | 'incorrect'
): AppActions => ({
  type: SAVE_FLASHCARDS_ANSWER,
  payload: {
    id,
    card_answer,
  },
});

// SET_WRITE_IS_INIT
export const set_write_is_init = (value: boolean): AppActions => ({
  type: SET_WRITE_IS_INIT,
  payload: {
    value,
  },
}); */

/* // PREPARE_WRITE
export const prepare_write = () => <ThunkActionApp>(async (dispatch, getState) => {
    const {
      main: { cards },
    } = getState();

    dispatch(set_write_is_init(false));

    const remaining = Object.values(cards).map(({ _id, stage }) => ({
      id: _id,
      stage,
      ...card_fields,
    }));

    dispatch({
      type: RESET_ALL_GAME_FIELDS,
    });

    dispatch({
      type: PREPARE_WRITE,
      payload: {
        remaining,
      },
    });

    dispatch(set_write_is_init(true));
  });

// SET_WRITE_ANSWER_FIELD
export const set_write_answer_field = (value: string): AppActions => ({
  type: SET_WRITE_ANSWER_FIELD,
  payload: {
    value,
  },
});

// SET_WRITE_COPY_ANSWER_FIELD
export const set_write_copy_answer_field = (value: string): AppActions => ({
  type: SET_WRITE_COPY_ANSWER_FIELD,
  payload: {
    value,
  },
});

// CHECK_WRITE_ANSWER
export const check_write_answer = (not_know?: boolean) => <ThunkActionApp>(async (
    dispatch,
    getState
  ) => {
    const {
      game: {
        write: { remaining, answer },
      },
      main: { cards },
    } = getState();

    const id = remaining[remaining.length - 1].id;
    const card = cards[id];

    const formatedTerm = card.term.replace(/&nbsp;/g, ' ').trim();

    const payload: {
      card_answer: 'correct' | 'incorrect';
      answer: string;
    } = {
      card_answer: answer === formatedTerm && !not_know ? 'correct' : 'incorrect',
      answer: not_know ? '' : answer,
    };

    dispatch({
      type: CHECK_WRITE_ANSWER,
      payload,
    });
  });

// NEXT_WRITE_CARD
export const next_write_card = (): AppActions => ({
  type: NEXT_WRITE_CARD,
});

// OVERRIDE_WRITE_ANSWER
export const override_write_answer = (): AppActions => ({
  type: OVERRIDE_WRITE_ANSWER,
});

// NEXT_WRITE_ROUND
export const next_write_round = (): AppActions => ({
  type: NEXT_WRITE_ROUND,
});

// SET_FLASHCARDS_PROGRESS
export const set_flashcards_progress = (value: 'next' | 'prev') =>
  <ThunkActionApp>(async (dispatch, getState) => {
    const {
      main: { cards },
      game: {
        flashcards: { progress },
      },
    } = getState();

    if (!value) return;

    const cards_arr = Object.values(cards);
    const payload: {
      value?: number;
    } = {};

    if (value === 'next') {
      if (progress >= cards_arr.length) return;
      payload.value = 1;
    }

    if (value === 'prev') {
      if (progress <= 0) return;
      payload.value = -1;
    }

    dispatch({
      type: SET_FLASHCARDS_PROGRESS,
      payload,
    });
  });

// SHUFFLE_FLASHCARDS
export const shuffle_flashcards = (): AppActions => ({
  type: SHUFFLE_FLASHCARDS,
});

// SORT_FLASHCARDS
export const sort_flashcards = (): AppActions => ({
  type: SORT_FLASHCARDS,
});

// RESET_FLASHCARDS_PROGRESS
export const reset_flashcards_progress = () => <ThunkActionApp>(async (
    dispatch,
    getState
  ) => {
    dispatch({
      type: SET_FLASHCARDS_SIDE,
      payload: {
        value: 'definition',
      },
    });

    dispatch({
      type: RESET_FLASHCARDS_PROGRESS,
    });
  });

// SET_FLASHCARDS_SHUFFLED
export const set_flashcards_shuffled = (value: boolean): AppActions => ({
  type: SET_FLASHCARDS_SHUFFLED,
  payload: {
    value,
  },
});

// SET_FLASHCARDS_SIDE
export const set_flashcards_side = (value: 'definition' | 'term'): AppActions => ({
  type: SET_FLASHCARDS_SIDE,
  payload: {
    value,
  },
}); */
