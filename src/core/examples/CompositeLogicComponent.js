import React, { Component } from "react";
import PropTypes from 'prop-types';

import {
  CollectedSimpleLogicComponent1,
  /* CollectedSimpleLogicComponent2 // This choice requires static binding hence too rigid. */
} from './CollectedLogicComponents'

// This choice makes only one CollectedSimpleLogicComponent2 hence no unnecessary unmounting.
import CollectorWrapper from './CollectorWrapper';
import SimpleLogicComponent2 from './SimpleLogicComponent2';
const CollectedSimpleLogicComponent2 = CollectorWrapper(SimpleLogicComponent2);

const NAME = 'CompositeLogicComponent';

class CompositeLogicComponent extends Component {
  static propTypes = {
    ldConfig: PropTypes.object.isRequired,
  };

  state = { test: true };

  handleClick = () => {
    this.setState(
      (state) => ({ test: !state.test })
    );
  };

  render() {
    const ldConfig1 = {
      name: 'Child-1',
      register: this.collector.childCollectorRegister,
      unregister: this.collector.childCollectorUnregister,
    };
    const ldConfig2 = {
      name: 'Child-2',
      register: this.collector.childCollectorRegister,
      unregister: this.collector.childCollectorUnregister,
    };

    // This choice makes every time a new CollectedSimpleLogicComponent2 class hence unmounting the previous.
    // const CollectedSimpleLogicComponent2 = CollectorWrapper(SimpleLogicComponent2);

    return (
      <div className='compositeLogicComponent'>
        <div onClick={this.handleClick}>{`${NAME}`}</div>
        <CollectedSimpleLogicComponent1 ldConfig={ldConfig1} />
        <CollectedSimpleLogicComponent2 ldConfig={ldConfig2} />
      </div>)
    ;
  }
}

export default CompositeLogicComponent;
