/*jshint esversion: 6 */
import { fromJS, List } from 'immutable';

import {
  ADD_IDEA,
  REMOVE_IDEA,
  UPVOTE_IDEA,
  DOWNVOTE_IDEA,
} from './constants';

const initialState = fromJS({
  ideas: []
});

const ideas = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_IDEA:
      return state
        .set('ideas', state.get('ideas').push(action.ideaObject));
    case REMOVE_IDEA:
      return state
        .set('ideas', state.get('ideas').delete(action.index));
    default:
      return state;
  }
};

export default ideas;
