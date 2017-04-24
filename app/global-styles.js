import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  h1 {
    color: #00a79d;
    font-size: 3.5em;
    font-weight: 700;
    margin: 30px;
    font-family: 'Roboto Slab', serif;
  }

  span {
    color: #6d6e71;
  }

  input {
    border: 2px solid #d1d3d4;
    font-size: 1em;
    height: 30px;
    margin-bottom: 15px;
    max-width: 500px;
    min-width: 500px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }

  .submit-btn {
    background: #00a79d;
    border: none;
    color: #ffffff;
    font-size: 1em;
    height: 35px;
    margin-bottom: 5px;
    max-width: 500px;
    width: 100%;
  }

  .submit-btn:hover {
    background: #045e55;
  }

  li {
      justify-content: center;
      max-width: 500px;
      width: 100%;
  }

  li header {
      margin-top: 25px;
  }

  li h2 {
      color: #6d6e71;
      display: inline;
      font-size: 1.5em;
      font-weight: 700;
  }

  li p {
      color: #939598;
      margin: 15px 0px;
  }

  .remove {
      background: url(./images/delete.svg) no-repeat;
      border: none;
      display: inline;
      float: right;
      margin-top: -2em;
      height: 30px;
      justify-content: right;
      width: 30px;
  }

  .remove:hover {
      background: url(./images/delete-hover.svg) no-repeat;
      height: 30px;
      width: 30px;
  }

  footer {
    align-items: center;
    border-bottom: 2px solid #d1d3d4;
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
  }

  footer button {
      display: inline-block;
      float: left;
  }

  footer p {
      align-items: center;
      font-size: 1em;
      left: 0;
  }

`;
