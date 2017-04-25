/*jshint esversion: 6 */
import { fromJS, setIn, Map } from 'immutable';

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
        .set('ideas', state.get('ideas').push(action.payload.ideaObject));
    case REMOVE_IDEA:
      return state
        .set('ideas', state.get('ideas').delete(action.payload.index));
    case UPDATE_IDEA:
      state.get('ideas').get(action.payload.index)[action.payload.key] = action.payload.value;
    default:
      return state;
  }
};

export default ideas;
