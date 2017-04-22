/*jshint esversion: 6 */

import React from 'react';
import { connect } from 'react-redux';

import InputForm from 'components/InputForm';
import { updateTitleInput, updateBodyInput, addIdea } from 'actions.js';

const mapStateToProps = state => {
  return {
    titleString: state.inputs.titleString,
    bodyString: state.inputs.bodyString
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTitleInput: (titleString) => {
      dispatch(updateTitleInput(titleString));
    },
    updateBodyInput: (bodyString) => {
      dispatch(updateBodyInput(bodyString));
    },
    addIdea: (titleString, bodyString, e) => {
      e.preventDefault();
      const ideaObject = {
        title: titleString,
        body: bodyString,
        quality: 'swill',
        id: Date.now()
      };
      dispatch(addIdea(ideaObject));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
