import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponentBis extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div>
                <label>{`I am a different child impl: ${this.props.text}`}</label>
            </div>
        );
    }
}

export default ChildComponentBis;