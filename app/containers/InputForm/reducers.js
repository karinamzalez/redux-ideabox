/*jshint esversion: 6 */
import { fromJS } from 'immutable';

import {
  ADD_IDEA,
} from './constants';

const initialState = fromJS({
  ideas: [],
});

const ideas = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IDEA:
      return state
        .set('ideas', action.ideaObject);
    case 'REMOVE_IDEA':
      return state.filter(
        idea => idea.id !== action.id
      );
    default:
      return state;
  }
};

export default ideas;
