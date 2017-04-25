/*jshint esversion: 6 */

import React, { PropTypes } from 'react';

const IdeaFooter = ({ idea, i, updateIdea, removeIdea}) => {

  const upvote = (quality) => {
    return quality === 'swill' ? 'good' : 'great';
  };

  const downvote = (quality) => {
    return quality === 'great' ? 'good' : 'swill';
  };

  return (
    <div>
      <button className="up"
        onClick={ () => updateIdea(i, 'quality', upvote(idea.quality))}>&uarr;
      </button>
      <button className="down"
        onClick={ () => updateIdea(i, 'quality', downvote(idea.quality))}>&darr;
      </button>
      <p>quality: <span>{ idea.quality }</span> </p>
    </div>
  )
};

export default IdeaFooter;
