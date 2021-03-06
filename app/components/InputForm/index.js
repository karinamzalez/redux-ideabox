/*jshint esversion: 6 */
import React, { PropTypes, Component } from 'react';

import Wrapper from './Wrapper.js';
import IdeasList from 'containers/IdeasList';

export default class InputForm extends Component {
  constructor(){
    super();
    this.state = {
      titleString: "",
      bodyString: ""
    };
  }

  setIdeaState(key, value) {
    this.setState({
      [key]: value
    });
  }

  clearFields(){
    this.setState({titleString: '', bodyString: ''});
  }

  createIdea(e) {
    e.preventDefault();
    const ideaObject = {
      title: this.state.titleString,
      body: this.state.bodyString,
      quality: 'swill',
      id: Date.now()
    };
    this.props.addIdea(ideaObject);
    this.clearFields();
  }

  render(){
    return (
      <div>
        <Wrapper>
          <h1>idea<span>box</span></h1>
          <form name="ideaForm">
            <input type="text" id="idea-title"
              value={this.state.titleString}
              placeholder=" title"
              onChange={ (e) => this.setIdeaState('titleString', e.target.value) } />
            <br />
            <input type="text" id="idea-body"
              placeholder=" body"
              value={this.state.bodyString}
              onChange={ (e) => this.setIdeaState('bodyString', e.target.value) } />
            <br />
            <button className="submit-btn"
              onClick={ (e) => this.createIdea(e) }>Save
            </button>
          </form>
        </Wrapper>
        
        <IdeasList />
      </div>
    );
  }
}

InputForm.PropTypes = {
  addIdea: React.PropTypes.func.isRequired,
}
