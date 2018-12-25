
/*
  CounterView - A pure view component

  Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.

  Licensed under the MIT License.
  See LICENSE file in the project root for full license information.
*/

import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class CounterView extends Component {
    static propTypes = {
        hifu: PropTypes.object.isRequired,
        hefu: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className='counter'>
                <div><label>{`Count: ${this.props.hifu.value}`}</label></div>
                <button onClick={this.props.hefu.click}>Click</button>
            </div>
        );
    }
}
