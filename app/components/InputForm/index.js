/*jshint esversion: 6 */
import React, { PropTypes } from 'react';

import Wrapper from './Wrapper.js';

const InputForm = ({ updateTitleInput, updateBodyInput, addIdea, titleString, bodyString}) => {
  return (
    <Wrapper>
      <h1>idea<span>box</span></h1>
      <form>
        <input type="text" id="idea-title"
        placeholder=" title" onChange={ (e) => updateTitleInput(e.target.value) } />
        <input type="text" id="idea-body"
          placeholder=" body" onChange={(e) => updateBodyInput(e.target.value)}/>
        <br />
        <button type="submit" className="submit-btn"
          onClick={(e) => addIdea(titleString, bodyString, e)}>
          Save
        </button>
      </form>
    </Wrapper>
  );
};

InputForm.PropTypes = {
  updateTitleInput: React.PropTypes.func,
  updateBodyInput: React.PropTypes.func,
  addIdea: React.PropTypes.func,
  titleString: React.PropTypes.string,
  bodyString: React.PropTypes.string,
}

export default InputForm;
