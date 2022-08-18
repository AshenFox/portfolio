import { AppActions } from '../types/types';
import {
  SET_TEXTAREA_VALUE,
  SET_ACTIVE_FIELD,
  SET_ACTIVE_FIELD_VALUE,
  SET_ACTIVE_FIELD_TRANSITIONED,
  SET_ACTIVE_FIELD_ISERROR,
  GO_TO_NEXT,
  CHANGE_ACTIVE_FIELD,
} from '../types/types';
import { FieldName } from '../reducers/form/contactFormInitState';
import { ThunkActionApp } from '../store';

// SET_TEXTAREA_VALUE
export const set_textarea_value = (value: string): AppActions => ({
  type: SET_TEXTAREA_VALUE,
  payload: {
    value,
  },
});

// SET_ACTIVE_FIELD_VALUE
export const set_active_field_value = (value: string): AppActions => ({
  type: SET_ACTIVE_FIELD_VALUE,
  payload: {
    value,
  },
});

// SET_ACTIVE_FIELD
export const set_active_field = (value: FieldName): AppActions => ({
  type: SET_ACTIVE_FIELD,
  payload: {
    value,
  },
});

// SET_ACTIVE_FIELD_TRANSITIONED
export const set_active_field_transitioned = (value: boolean): AppActions => ({
  type: SET_ACTIVE_FIELD_TRANSITIONED,
  payload: {
    value,
  },
});

// SET_ACTIVE_FIELD_ISERROR
export const set_active_field_iserror = (value: boolean): AppActions => ({
  type: SET_ACTIVE_FIELD_ISERROR,
  payload: {
    value,
  },
});

// GO_TO_NEXT
export const go_to_next = () => <ThunkActionApp>(async (dispatch, getState) => {
    const {
      form: { active_field, fields },
    } = getState();

    const { next } = fields[active_field];

    if (next)
      dispatch({
        type: GO_TO_NEXT,
      });
  });

// CHANGE_ACTIVE_FIELD
export const change_active_field = (field: FieldName) => <ThunkActionApp>(async (
    dispatch,
    getState
  ) => {
    const {
      form: { active_field },
    } = getState();

    if (field !== active_field)
      dispatch({
        type: CHANGE_ACTIVE_FIELD,
        payload: {
          field,
        },
      });
  });

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
