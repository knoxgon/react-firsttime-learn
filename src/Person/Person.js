import React from 'react';

export default class Person extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.props = props;
    this.state = state;
  }
  render() {
    return (
      <div className="person">
        <h3>I'm {this.props.name}</h3>
        <p onClick={this.props.click}>Age: {this.props.age}</p>
        <input onChange={this.props.change} value={this.props.name}/>
      </div>
    )
  }
}
