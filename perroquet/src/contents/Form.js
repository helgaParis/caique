import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' , firstname:''};
  }
  myChangeHandlerUserName = (event) => {
    this.setState({username: event.target.value});
  }

  myChangeHandlerFirstName = (event) => {
    this.setState({firstname: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.firstname}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandlerUserName}
      />
      <p>Enter your firstname:</p>
      <input
        type='text'
        onChange={this.myChangeHandlerFirstName}
      />
      <label for="toto">Zone texte</label>
      <textarea id="toto" name="toto" rows="4" cols="50">Ecrire un commentaire</textarea>
      </form>
    );
  }
}

// ReactDOM.render(<Form />, document.getElementById('root'));

export default Form
