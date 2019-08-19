import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="appie">
        <h1>Hello there </h1>
        <p>I'm {this.props.name} and am {this.props.age} years old</p>
        <Person>I do here</Person>
      </div>
    )
    //    return React.createElement('div', { className: 'appie' }, React.createElement('h1', null, 'Hi there'), React.createElement('p', null, 'I\'m here'));
  }
}

export default App;
