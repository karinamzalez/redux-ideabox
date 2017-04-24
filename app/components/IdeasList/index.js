/*jshint esversion: 6 */

import React, { PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';

import Ul from './Ul';

const IdeasList = (props) => {
  const { ideas, removeIdea, updateIdea } = props;

  const upvote = (quality) => {
    return quality === 'swill' ? 'good' : 'great';
  };

  const downvote = (quality) => {
    return quality === 'great' ? 'good' : 'swill';
  };

  return (
    <Ul>
      {
        ideas.length ?
        ideas.map((idea, i) => {
          return  <li key={i}>
                    <header>
                      <h2>
                        <ContentEditable
                          html={ idea.title }
                          disabled={ false }
                          onChange={ (e) => updateIdea(i, 'title', e.target.value)} />
                      </h2>
                      <button className="remove"
                        onClick={ () => removeIdea(i) }>X
                      </button>
                    </header>
                    <ContentEditable
                      html={ idea.body }
                      disabled={ false }
                      onChange={ (e) => updateIdea(i, 'body', e.target.value)} />
                    <footer>
                      <button className="up"
                        onClick={ () => updateIdea(i, 'quality', upvote(idea.quality))}>&uarr;
                      </button>
                      <button className="down"
                        onClick={ () => updateIdea(i, 'quality', downvote(idea.quality))}>&darr;
                      </button>
                      <p>quality: {idea.quality } </p>
                    </footer>
                  </li> })
        : ""
      }
    </Ul>
  )
};

IdeasList.PropTypes = {
  ideas: React.PropTypes.array,
  removeIdea: React.PropTypes.func,
  updateIdea: React.PropTypes.func,
}

export default IdeasList;
