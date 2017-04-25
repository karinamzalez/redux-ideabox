/*jshint esversion: 6 */
import { fromJS, setIn, Map, getIn } from 'immutable';

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
      const map1 = fromJS(state.getIn(['ideas', action.payload.index]));
      const map2 = map1.set(action.payload.key, action.payload.value);
      return state
        .setIn(['ideas', action.payload.index], map2);
    default:
      return state;
  }
};

export default ideas;
