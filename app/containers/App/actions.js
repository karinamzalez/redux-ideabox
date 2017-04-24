/*jshint esversion: 6 */
import {
  ADD_IDEA,
  REMOVE_IDEA,
  UPDATE_IDEA,
  UPVOTE_IDEA,
  DOWNVOTE_IDEA,
} from './constants';

export const addIdea = (ideaObject) => {
  return {
    type: ADD_IDEA,
    ideaObject: ideaObject
  };
};

export const removeIdea = (index) => {
  return {
    type: REMOVE_IDEA,
    index: index,
  };
};

export const updateIdea = (index, ideaObject) => {
  return {
    type: UPDATE_IDEA,
    index: index,
    ideaObject: ideaObject,
  };
};
