/*
    Object Model.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { object } from 'prop-types';
import { mergeDeepRight } from 'ramda';

class ObjectModel extends React.Component {
    static propTypes = {
        initial: object
    };

    static defaultProps = {
        initial: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            initial: props.initial,
            value: props.initial,
        };
    }

    value = () => this.state.value;
    
    change = (obj) => {
        this.setState(({ value }) => ({ value: mergeDeepRight(value, obj) }));
    };

    reset = () => {
        this.setState(({ initial }) => ({ value: initial }));
    };

    render() {
        return null;
    }
}

export default ObjectModel;
