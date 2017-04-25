/*jshint esversion: 6 */

import React, { PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';

import IdeaHeader from 'components/IdeaHeader';
import Ul from './Ul';

const IdeasList = ({ ideas, removeIdea, updateIdea }) => {

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
          const ideaComponentProps = {
            idea,
            i,
            updateIdea,
            removeIdea
          }
          return  <li key={i}>
                    <IdeaHeader { ...ideaComponentProps } />
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
                      <p>quality: <span>{ idea.quality }</span> </p>
                    </footer>
                  </li> })
        : ""
      }
    </Ul>
  )
};

IdeasList.PropTypes = {
  ideas: PropTypes.array.isRequired,
  removeIdea: PropTypes.func.isRequired,
  updateIdea: PropTypes.func.isRequired,
}

export default IdeasList;
