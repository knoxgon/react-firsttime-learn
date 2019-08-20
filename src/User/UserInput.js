import React from 'react';

export default class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return(
            <div>
                <input onChange={this.props.changed} value={this.props.enteredName}/>
            </div>
        );
    }
}