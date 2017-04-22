/*jshint esversion: 6 */

import React from 'react';
import { connect } from 'react-redux';

import InputForm from 'components/InputForm';

const mapStateToProps = state => {
  return {
    titleString: state.inputs.titleString,
    bodyString: state.inputs.bodyString
  };
};
