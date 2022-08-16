import { combineReducers } from 'redux';
import sectionSliderReducer from './game/sectionSliderReducer';

export default combineReducers({
  sslider: sectionSliderReducer,
});
