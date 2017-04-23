/*jshint esversion: 6 */
import {
  ADD_IDEA,
  REMOVE_IDEA,
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
