/*jshint esversion: 6 */
import React from 'react';

import Wrapper from './Wrapper.js';

const InputForm = (props) => {
  return (
    <Wrapper>
      <h1>idea<span>box</span></h1>
      <form>
        <input type="text" id="idea-title"
        placeholder=" title" />
        <input type="text" id="idea-body"
          placeholder=" body" />
        <br />
        <button type="submit" className="submit-btn">
          Save
        </button>
      </form>
    </Wrapper>
  );
};

export default InputForm;
