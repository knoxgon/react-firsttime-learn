import React from 'react';
import './User.css'

export default class UserOutput extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }
    render() {
        return(
            <div className="userOutput">
                <p onClick={this.props.changed}>{this.props.username}</p>
                <p></p>
            </div>
        );
    }
}