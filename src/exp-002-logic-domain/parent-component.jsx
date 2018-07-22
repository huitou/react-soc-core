import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ParentComponent extends Component {
    static propTypes = {
        child: PropTypes.element.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        const ChildComp = this.props.child;
        
        return (
            <ChildComp text={`parent: ${this.props.text}`} />
        );
    }
}

export default ParentComponent;
