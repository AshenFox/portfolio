import {
  ContactFormActions,
  SET_TEXTAREA_VALUE,
  SET_ACTIVE_FIELD,
  SET_ACTIVE_FIELD_VALUE,
  SET_ACTIVE_FIELD_TRANSITIONED,
  SET_ACTIVE_FIELD_ISERROR,
  GO_TO_NEXT,
  CHANGE_ACTIVE_FIELD,
} from '../../types/types';
import initialState, { ContactFormState } from './contactFormInitState';

const contactFormReducer = (
  state = initialState,
  action: ContactFormActions
): ContactFormState => {
  const { payload, type } = action;

  switch (type) {
    case SET_TEXTAREA_VALUE:
      return {
        ...state,
        textarea_value: payload.value,
      };

    case SET_ACTIVE_FIELD_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [state.active_field]: {
            ...state.fields[state.active_field],
            value: payload.value,
          },
        },
      };

    case SET_ACTIVE_FIELD:
      return {
        ...state,
        active_field: payload.value,
      };

    case SET_ACTIVE_FIELD_TRANSITIONED:
      return {
        ...state,
        fields: {
          ...state.fields,
          [state.active_field]: {
            ...state.fields[state.active_field],
            transitioned: payload.value,
          },
        },
      };

    case SET_ACTIVE_FIELD_ISERROR:
      return {
        ...state,
        fields: {
          ...state.fields,
          [state.active_field]: {
            ...state.fields[state.active_field],
            is_error: payload.value,
          },
        },
      };

    case GO_TO_NEXT:
      return {
        ...state,
        fields: {
          ...state.fields,
          [state.active_field]: {
            ...state.fields[state.active_field],
            value: state.textarea_value,
          },
        },
        active_field: state.fields[state.active_field].next,
        textarea_value: '',
      };

    case CHANGE_ACTIVE_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [state.active_field]: {
            ...state.fields[state.active_field],
            value: state.textarea_value,
          },
        },
        active_field: payload.field,
        textarea_value: state.fields[payload.field].value,
      };

    default:
      return state;
  }
};

export default contactFormReducer;
