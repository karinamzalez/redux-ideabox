/*jshint esversion: 6 */
import React from 'react';

import Wrapper from './Wrapper.js';

const InputForm = (props) => {
  return (
    <Wrapper>
      <h1>idea<span>box</span></h1>
      <form>
        <input type="text" id="idea-title"
        placeholder=" title" onKeyUp={(e) => props.updateTitleInput(e.targe.value)} />
        <input type="text" id="idea-body"
          placeholder=" body" onKeyUp={(e) => props.updateBodyInput(e.target.value)}/>
        <br />
        <button type="submit" className="submit-btn"
          onClick={(e) => props.addIdea(props.titleString, props.bodyString, e)}>
          Save
        </button>
      </form>
    </Wrapper>
  );
};

export default InputForm;
