import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div>
                <label>{this.props.text}</label>
            </div>
        );
    }
}

export default ChildComponent;