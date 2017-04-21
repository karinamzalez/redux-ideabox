/*jshint esversion: 6 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Header = () => {
  return (
    <header>
      <h1><FormattedMessage {...messages.title} /></h1>
    </header>
  );
};

export default Header;
