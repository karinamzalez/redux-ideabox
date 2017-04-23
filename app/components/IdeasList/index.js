/*jshint esversion: 6 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Ul from './Ul';

const IdeasList = (props) => {
  const { ideas, removeIdea } = props;

  return (
    <Ul styleClass="idea-list">
      {
        ideas.length ?
        ideas.map((idea, i) => {
          return <li key={i}>
                  <header>
                    <h2>{idea.title}</h2>
                    <button className="remove" onClick={ () => removeIdea(i) }>X</button>
                  </header>
                  <p>{idea.body}</p>
                  <footer>
                  <button>up</button>
                  <button>down</button>
                  <p>quality: <span>{idea.quality}</span> </p>
                  </footer>
                </li>
        })
        : "blerp"
      }
    </Ul>
  )
};

export default IdeasList;
