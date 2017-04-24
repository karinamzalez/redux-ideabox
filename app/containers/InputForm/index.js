/*jshint esversion: 6 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import InputForm from 'components/InputForm';
import { addIdea, removeIdea, updateIdea } from '../App/actions';
import { makeSelectIdeas } from '../App/selectors';

const mapStateToProps = createStructuredSelector({
  ideas: makeSelectIdeas()
});

const mapDispatchToProps = dispatch => {
  return {
    addIdea: (ideaObject) => {
      dispatch(addIdea(ideaObject));
    },
    removeIdea: (index) => {
      dispatch(removeIdea(index));
    },
    updateIdea: (index, ideaObject) => {
      dispatch(updateIdea(index, ideaObject));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
