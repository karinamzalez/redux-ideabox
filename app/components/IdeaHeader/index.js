/*jshint esversion: 6 */

import React, { PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';

const IdeaHeader = ({ idea }) => {
  return (
    <div>
      <h2>
        <ContentEditable
          html={ idea.title }
          disabled={ false }
          onChange{ (e) => updateIdea(i, 'title', e.target.value) }/>
      </h2>
      <button className="remove"
        onClick={ () => removeIdea(i) }>x</button>
    </div>
  );
};

export default Header;
