/*jshint esversion: 6 */

import React, { PropTypes } from 'react';

import IdeaHeader from 'components/IdeaHeader';
import IdeaFooter from 'components/IdeaFooter';
import Ul from './Ul';
import Idea from './Idea';

const IdeasList = ({ ideas, removeIdea, updateIdea }) => {
  return (
    <Ul>
      {
        ideas.length ?
        ideas.map((idea, i) => {

          const ideaProps = { idea, i, updateIdea, removeIdea }

          return  <Idea key={i}>
                    <IdeaHeader { ...ideaProps } />
                    <IdeaFooter { ...ideaProps } />
                  </Idea> })
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
