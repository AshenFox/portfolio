import { combineReducers } from 'redux';
import contactFormReducer from './form/contactFormReducer';
import gameReducer from './game/gameReducer';
import languageReducer from './language/languageReducer';
import sectionSliderReducer from './sslider/sectionSliderReducer';

export default combineReducers({
  sslider: sectionSliderReducer,
  form: contactFormReducer,
  game: gameReducer,
  language: languageReducer,
});
