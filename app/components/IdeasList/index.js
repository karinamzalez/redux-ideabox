/*jshint esversion: 6 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const TopSection = () => {
  return (
    <div>
      <h1><FormattedMessage {...messages.title} /></h1>
    <div>
  );
};

export default Header;
