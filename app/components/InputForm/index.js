/*jshint esversion: 6 */
import React from 'react';

import Wrapper from './Wrapper.js';

const InputForm = (props) => {
  return (
    <Wrapper>
      <h1>idea<span>box</span></h1>
      <form>
        <div>
          <input type="text" id="idea-title" placeholder="title" />
        </div>
        <div>
          <input type="text" id="idea-body" placeholder="body" />
        </div>
        <button type="submit" className="submit-btn" onClick={(e) => props.addIdea(props.titleString, props.bodyString, e)} >
          Create Idea
        </button>
      </form>
    </Wrapper>
  );
};

export default InputForm;
