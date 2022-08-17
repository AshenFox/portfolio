import { combineReducers } from 'redux';
import contactFormReducer from './form/contactFormReducer';
import sectionSliderReducer from './sslider/sectionSliderReducer';

export default combineReducers({
  sslider: sectionSliderReducer,
  form: contactFormReducer,
});
