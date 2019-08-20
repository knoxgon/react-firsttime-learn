import React from 'react';
import './App.css';
//import Person from './Person/Person';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      usernames: [
        {fn: "Volkan"},
        {fn: "Daniel"},
        {fn: "Phillip"}
      ]
    }
  }

  onClickHandler = (name) => {
    this.setState({
      usernames: [
        {fn: name},
        {fn: "Daniel"},
        {fn: "Phillip"}
      ]
    })
  }

  onChangeHandler = (event) => {
    this.setState({
      usernames: [
        {fn: event.target.value},
        {fn: "Daniel"},
        {fn: "Phillip"}
      ]
    })
  }

  render() {
    return(
      <div>
        <UserOutput username={this.state.usernames[0].fn} changed={this.onClickHandler.bind(this, "Raspudden")}></UserOutput>
        <UserOutput username={this.state.usernames[1].fn}></UserOutput>
        <UserOutput username={this.state.usernames[2].fn}></UserOutput>
        <UserInput changed={(event) => this.onChangeHandler(event)}
                   enteredName={this.state.usernames[0].fn}
                   value={this.state.usernames[0].fn}>
        </UserInput>
      </div>
    );
  }

/*  state = {
    persons: [
      {fullName: 'Alex Trusk', age: '32'},
      {fullName: 'Ronnie Alcatraz', age: '86'},
      {fullName: 'Jack Jones', age: '54'},
    ]
  }
  
  buttonSwitchHandler = (name) => {
    this.setState({
      persons: [
        {fullName: 'Alexis Trust', age: '33'},
        {fullName: name, age: '11'},
        {fullName: 'JEX', age: '55'}
      ]
    })
  }
  
  inputChangedHandler = (event) => {
    this.setState({
      persons: [
        {fullName: 'Alexis Trust', age: '33'},
        {fullName: 'Whats', age: '11'},
        {fullName: event.target.value, age: '55'}
      ]
    })
  }
  
  render() {
    return (
      <div className="appie">
        <h1>Hello there </h1>
        <p>I'm {this.props.name} and am {this.props.age} years old</p>
        <button onClick={this.buttonSwitchHandler.bind(this, 'Brock')}>Switcher</button>
        <Person name={this.state.persons[0].fullName} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].fullName} age={this.state.persons[1].age} click={() => this.buttonSwitchHandler('Vince')}></Person>
        <Person name={this.state.persons[2].fullName} age={this.state.persons[2].age} changed={(event) => this.inputChangedHandler(event)}></Person>
      </div>
    )
    //    return React.createElement('div', { className: 'appie' }, React.createElement('h1', null, 'Hi there'), React.createElement('p', null, 'I\'m here'));
  }*/
}

export default App;
