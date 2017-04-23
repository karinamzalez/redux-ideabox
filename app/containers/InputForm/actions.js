/*jshint esversion: 6 */
import {
  ADD_IDEA,
} from './constants';

export const addIdea = (ideaObject) => {
  return {
    type: ADD_IDEA,
    ideaObject: ideaObject
  };
};
