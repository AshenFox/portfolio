import { Language } from './../language/languageInitState';
export type FieldName = 'name' | 'email' | 'message' | 'placeholder';

export interface Error {
  content: {
    [key in Language]: {
      title: string;
      message: string;
    };
  };
  test: (value: string) => boolean;
}

export interface Field {
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
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

class InvalidEmail implements Error {
  content = {
    ENG: {
      title: 'Ivalid email',
      message: "The email you've inputted is ivalid.",
    },
    RU: {
      title: 'Ошибочный email',
      message: 'Email который вы ввели содержит ошибки.',
    },
  };
  test = (value: string) => !emailTestRegExp.test(value);
}

class ShortMessage implements Error {
  content = {
    ENG: {
      title: 'Short message',
      message: 'Your message has to contain at least 5 characters.',
    },
    RU: {
      title: 'Короткое сообщение',
      message: 'Сообщение должно содержать не менее 5 символов.',
    },
  };
  test = (value: string) => value.length < 5;
}

class EmptyField implements Error {
  fieldValues = {
    ENG: {
      name: 'name',
      email: 'email',
      message: 'message',
    },
    RU: {
      name: 'имя',
      email: 'email',
      message: 'сообщение',
    },
  };
  test = (value: string) => !value;
  content = null;

  constructor(fieldName: FieldName) {
    this.content = {
      ENG: {
        title: `Empty ${this.fieldValues.ENG[fieldName]} field`,
        message: `You can't leave ${this.fieldValues.ENG[fieldName]} field empty.`,
      },
      RU: {
        title: `Пустое поле ${this.fieldValues.RU[fieldName]}`,
        message: `Нельзя оставить поле ${this.fieldValues.RU[fieldName]} пустым.`,
      },
    };
  }
}

const contactFormInitState: ContactFormState = {
  fields: {
    name: {
      icon_name: 'person',
      next: 'email',
      value: '',
      transitioned: false,
      errors: [new EmptyField('name')],
      is_error: null,
      errorID: '1',
    },
    email: {
      icon_name: 'mail',
      next: 'message',
      value: '',
      transitioned: false,
      errors: [new EmptyField('email'), new InvalidEmail()],
      is_error: null,
      errorID: '2',
    },
    message: {
      icon_name: 'pentosquare',
      next: null,
      value: '',
      transitioned: false,
      errors: [new EmptyField('message'), new ShortMessage()],
      is_error: null,
      errorID: '3',
    },
  },
  active_field: 'name',
  textarea_value: '',
};

export default contactFormInitState;
