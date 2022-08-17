export interface Error {
  title: string;
  message: string;
  test: (value: string) => boolean;
}

export type ErrorCreator = (value?: string) => Error;

export interface ErrorCreatorsInterface {
  [key: string]: ErrorCreator;
}

export type FieldName = 'name' | 'email' | 'message';

export interface Field {
  placeholder: string;
  icon_name: string;
  next: FieldName;
  value: string;
  transitioned: boolean;
  errors: Error[];
  is_error: boolean;
  errorID: string;
}

export type Fields = {
  [key in FieldName]?: Field;
};

export interface ContactFormState {
  fields: Fields;
  active_field: FieldName;
  textarea_value: string;
}

// =========================

const emailTestRegExp: RegExp =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

const ErrorCreators: ErrorCreatorsInterface = {
  invalidEmail: () => ({
    title: 'Ivalid email',
    message: "The email you've inputted is ivalid.",
    test: (value: string) => !emailTestRegExp.test(value),
  }),
  shortMessage: () => ({
    title: 'Short message',
    message: 'Your message has to contain at least 5 characters.',
    test: (value: string) => value.length < 5,
  }),
  emptyField: (fieldName = 'placeholder') => ({
    title: `Empty ${fieldName} field`,
    message: `You can't leave ${fieldName} field empty.`,
    test: (value: string) => !value,
  }),
};

const { invalidEmail, shortMessage, emptyField } = ErrorCreators;

const contactFormInitState: ContactFormState = {
  fields: {
    name: {
      placeholder: 'Fill with your name',
      icon_name: 'person',
      next: 'email',
      value: '',
      transitioned: false,
      errors: [emptyField('name')],
      is_error: null,
      errorID: '1',
    },
    email: {
      placeholder: 'Your email address',
      icon_name: 'mail',
      next: 'message',
      value: '',
      transitioned: false,
      errors: [emptyField('email'), invalidEmail()],
      is_error: null,
      errorID: '2',
    },
    message: {
      placeholder: 'Write your message :)',
      icon_name: 'pentosquare',
      next: null,
      value: '',
      transitioned: false,
      errors: [emptyField('message'), shortMessage()],
      is_error: null,
      errorID: '3',
    },
  },
  active_field: 'name',
  textarea_value: '',
};

export default contactFormInitState;
