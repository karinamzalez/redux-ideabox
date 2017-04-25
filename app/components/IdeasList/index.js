/*jshint esversion: 6 */

import React, { PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';

import IdeaHeader from 'components/IdeaHeader';
import IdeaFooter from 'components/IdeaFooter';
import Ul from './Ul';

const IdeasList = ({ ideas, removeIdea, updateIdea }) => {
  return (
    <Ul>
      {
        ideas.length ?
        ideas.map((idea, i) => {

          const ideaProps = { idea, i, updateIdea, removeIdea }

          return  <li key={i}>
                    <IdeaHeader { ...ideaProps } />
                    <IdeaFooter { ...ideaProps } />
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
