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
        .set('ideas', state.get('ideas').push(action.ideaObject));
    case REMOVE_IDEA:
      return state
        .set('ideas', state.get('ideas').delete(action.index));
    case UPDATE_IDEA:
      // type /payload ---> { type: "lol", payload: { index: 1, value: "lol", value: "hdhd" }

      const val = state.get('ideas').get(action.index)[action.key] = action.value;
      const lol = state.set('ideas', val);

      console.log('value:', val);
      console.log('state update:', lol);

      return lol;
    default:
      return state;
  }
};

export default ideas;
