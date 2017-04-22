/*jshint esversion: 6 */

export const addIdea = (ideaObject) => {
  return {
    type: 'ADD_IDEA',
    ideaObject: ideaObject
  };
};

export const updateTitleInput = (titleString) => {
  return {
    type: 'TITLE_INPUT',
    titleString: titleString
  };
};

export const updateBodyInput = (bodyString) => {
  return {
    type: 'BODY_INPUT',
    bodyString: bodyString
  };
};
