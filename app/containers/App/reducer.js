/*jshint esversion: 6 */
import { fromJS, List } from 'immutable';

import {
  ADD_IDEA,
  REMOVE_IDEA,
  UPDATE_IDEA,
} from './constants';

const initialState = fromJS({
  ideas: []
});

const ideas = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IDEA:
      return state
        .set('ideas', state.get('ideas').push(action.ideaObject));
    case REMOVE_IDEA:
      return state
        .set('ideas', state.get('ideas').delete(action.index));
    case UPDATE_IDEA:
      state
      .set('ideas',  state.get('ideas').get(action.index)[action.key] = action.value);
      return state;
    default:
      return state;
  }
};

export default ideas;
