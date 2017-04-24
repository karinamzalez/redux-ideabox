/*jshint esversion: 6 */

import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ContentEditable from 'react-contenteditable';

import messages from './messages';
import Ul from './Ul';

const IdeasList = (props) => {
  const { ideas, removeIdea, updateIdea } = props;

  return (
    <Ul styleClass="idea-list">
      {
        ideas.length ?
        ideas.map((idea, i) => {
          return <li key={i}>
                  <header>
                    <h2>
                      <ContentEditable
                        html={ idea.title }
                        disabled={ false }
                        onChange={ (e) => updateIdea(i, idea['title'] = e.target.value)} />
                    </h2>
                    <button
                      className="remove"
                      onClick={ () => removeIdea(i) }>X</button>
                  </header>
                  <ContentEditable
                    html={ idea.body }
                    disabled={ false }
                    onChange={ (e) => updateIdea(i, idea['body'] = e.target.value)} />
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
