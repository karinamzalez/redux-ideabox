/*jshint esversion: 6 */
import { fromJS, List } from 'immutable';

import {
  ADD_IDEA,
  REMOVE_IDEA,
  UPDATE_IDEA,
  UPVOTE_IDEA,
  DOWNVOTE_IDEA,
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
      return state
      .set('ideas', state.get('ideas'));
    default:
      return state;
  }
};

export default ideas;
