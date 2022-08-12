import { combineReducers } from 'redux';
import gameReducer from './game/gameReducer';

export default combineReducers({
  game: gameReducer,
});
