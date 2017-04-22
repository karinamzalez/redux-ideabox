/*jshint esversion: 6 */
import { combineReducers } from 'redux';

const ideas = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
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

const inputs = (state = {}, action) => {
  switch (action.type) {
    case 'TITLE_INPUT':
      return Object.assign({}, state, {
        titleString: action.titleString
      });

    case 'BODY_INPUT':
      return Object.assign({}, state, {
        bodyString: action.bodyString
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  ideas,
  inputs
});

export default rootReducer;
