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

  li h2 {
      color: #6d6e71;
      display: inline;
      font-size: 1.5em;
      font-weight: 700;
      margin-bottom: 1em;
  }

  .body {
      color: #939598;
      margin: 15px 0px;
  }

  .remove {
      background: #d5d6d7;
      color: white;
      border: none;
      display: inline;
      float: right;
      margin-top: -2em;
      height: 30px;
      justify-content: right;
      width: 30px;
      border-radius: 50px;
  }

  .remove:hover {
      background: #bd0f0f;
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

  .down:hover {
    background-color: #fdbd2c;
  }

  .up:hover {
    background-color: #1BCD00;
  }

  footer button {
    background: #d5d6d7;
    color: white;
    display: inline-block;
    float: left;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 20px;
  }

  footer p {
      align-items: center;
      font-size: 1em;
      left: 0;
  }

`;
