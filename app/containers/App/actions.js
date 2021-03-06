/*jshint esversion: 6 */
import {
  ADD_IDEA,
  REMOVE_IDEA,
  UPDATE_IDEA,
} from './constants';

export const addIdea = (ideaObject) => {
  return {
    type: ADD_IDEA,
    payload: {
      ideaObject: ideaObject
    }
  };
};

export const removeIdea = (index) => {
  return {
    type: REMOVE_IDEA,
    payload: {
      index: index
    }
  };
};

export const updateIdea = ({ index, key, value }) => {
  return value ? {
    type: UPDATE_IDEA,
    payload: {
      index: index,
      key: key,
      value: value,
    }
  } : {
    type: UPDATE_IDEA,
    payload: {
      index: index,
      key: key,
      value: ' ',
    }
  };
};
