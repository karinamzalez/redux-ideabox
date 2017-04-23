/*jshint esversion: 6 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import InputForm from 'components/InputForm';
import { makeSelectTitle, makeSelectBody } from 'containers/App/selectors';
import { updateTitleInput, updateBodyInput, addIdea } from '../App/actions';

const mapStateToProps = createStructuredSelector({
  titleString: makeSelectTitle(),
  bodyString: makeSelectBody(),
});

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
