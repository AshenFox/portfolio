import { AppActions } from '../types/types';
import {
  SET_TEXTAREA_VALUE,
  SET_ACTIVE_FIELD,
  SET_ACTIVE_FIELD_VALUE,
  SET_ACTIVE_FIELD_TRANSITIONED,
  SET_ACTIVE_FIELD_ISERROR,
} from '../types/types';
import { FieldName } from '../reducers/form/contactFormInitState';

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

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
