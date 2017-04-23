/*jshint esversion: 6 */
import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

import {
  ADD_IDEA,
  TITLE_INPUT,
  BODY_INPUT,
} from './constants';

const initialState = fromJS({
  titleString: "",
  bodyString: "",
});

const ideas = (state = [], action) => {
  switch (action.type) {
    case ADD_IDEA:
      return [
          ...state,
          action.ideaObject
        ];
    case 'REMOVE_IDEA':
      return state.filter(
        idea => idea.id !== action.id
      );
    default:
      return state;
  }
};

const inputs = (state = initialState, action) => {
  switch (action.type) {
    case TITLE_INPUT:
      return state
        .set('titleString', action.titleString);
    case BODY_INPUT:
      return state
        .set('bodyString', action.bodyString);
    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   ideas,
//   inputs
// });

export default inputs;
