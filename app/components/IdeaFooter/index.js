/*jshint esversion: 6 */

import React, { PropTypes } from 'react';

const IdeaFooter = ({ idea, i, updateIdea }) => {

  const upvote = (quality) => {
    return quality === 'swill' ? 'good' : 'great';
  };

  const downvote = (quality) => {
    return quality === 'great' ? 'good' : 'swill';
  };

  return (
    <footer>
      <button className="up"
        onClick={ () => updateIdea(i, 'quality', upvote(idea.quality))}>&uarr;
      </button>
      <button className="down"
        onClick={ () => updateIdea(i, 'quality', downvote(idea.quality))}>&darr;
      </button>
      <p>quality: <span>{ idea.quality }</span> </p>
    </footer>
  );
};

IdeaFooter.PropTypes = {
  idea: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  updateIdea: PropTypes.func.isRequired
}

export default IdeaFooter;
