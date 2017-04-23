/*jshint esversion: 6 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const IdeasList = (props) => {
  // const { ideas } = props;
  console.log(props.ideas);
  return (
    <div>
      {props.ideas[0] ? props.ideas[0].title : props.ideas}
    </div>
  );
};

export default IdeasList;
