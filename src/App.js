import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      persons: [
        {fullName: 'Alex Trusk', age: '32', id: 'afa'},
        {fullName: 'Ronnie Alcatraz', age: '86', id: 'iads935'},
        {fullName: 'Jack Jones', age: '54', id: '6tfas'},
      ],
      displayPersons: false
    }
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

  togglePersons = () => {
    this.setState({
      displayPersons: !this.state.displayPersons
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {return p.id === id});
    const updatedPerson = {
      ...this.state.persons[personIndex] 
    }
    updatedPerson.fullName = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = updatedPerson;
    this.setState({persons: persons});
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  
  render() {
    return (
      <div className="appie">
        <h1>Hello there </h1>
        <p>I'm {this.props.name} and am {this.props.age} years old</p>
        <button onClick={this.buttonSwitchHandler.bind(this, 'Brock')}>Switcher</button>
        <button onClick={this.togglePersons}>Toggle Persons</button>
        {
          this.state.displayPersons ?
            <div>
              {/*<Person name={this.state.persons[0].fullName} age={this.state.persons[0].age}></Person>
              <Person name={this.state.persons[1].fullName} age={this.state.persons[1].age} click={() => this.buttonSwitchHandler('Vince')}></Person>
              <Person name={this.state.persons[2].fullName} age={this.state.persons[2].age} changed={(event) => this.inputChangedHandler(event)}></Person>*/}

              {this.state.persons.map((person, index) => {
                return <Person
                          click={() => this.deletePerson(index)}
                          name={person.fullName}
                          age={person.age}
                          key={person.id}
                          change={(event) => this.nameChangedHandler(event, person.id)}></Person>
              })}
            </div>
          : null
        }
      </div>
    )
    //    return React.createElement('div', { className: 'appie' }, React.createElement('h1', null, 'Hi there'), React.createElement('p', null, 'I\'m here'));
  }
}

export default App;
