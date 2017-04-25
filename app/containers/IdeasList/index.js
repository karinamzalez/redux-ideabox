/*jshint esversion: 6 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import IdeasList from 'components/IdeasList';
import { removeIdea, updateIdea } from '../App/actions';
import { makeSelectIdeas } from '../App/selectors';

const mapStateToProps = createStructuredSelector({
  ideas: makeSelectIdeas()
});

const mapDispatchToProps = dispatch => {
  return {
    removeIdea: (index) => {
      dispatch(removeIdea(index));
    },
    updateIdea: (index, key, value) => {
      dispatch(updateIdea({index, key, value}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeasList);
