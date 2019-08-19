import React from 'react';

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="person">
        <h3>Little bit information about myself</h3>
        <p>I was not always easy to get around</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
}