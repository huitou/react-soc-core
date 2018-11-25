import React, { Component } from "react";
import PropTypes from 'prop-types';

import {
  LInterfacedSimpleLogicComponent1,
  /* LInterfacedSimpleLogicComponent2 // This choice requires static binding hence too rigid. */
} from './LInterfacedLogicComponents'

// This choice makes only one LInterfacedSimpleLogicComponent2 hence no unnecessary unmounting.
import LInterfaceWrapper from './LInterfaceWrapper';
import SimpleLogicComponent2 from './SimpleLogicComponent2';
const LInterfacedSimpleLogicComponent2 = LInterfaceWrapper(SimpleLogicComponent2);

const NAME = 'CompositeLogicComponent';

class CompositeLogicComponent extends Component {
  static propTypes = {
    lInterface: PropTypes.object.isRequired,
  };

  state = { test: true };

  handleClick = () => {
    this.setState(
      (state) => ({ test: !state.test })
    );
  };

  render() {
    const { lInterface } = this.props;
    const ldConfig1 = { name: 'Child-1', register: lInterface.childInterfaceRegister };
    const ldConfig2 = { name: 'Child-2', register: lInterface.childInterfaceRegister };

    // This choice makes every time a new LInterfacedSimpleLogicComponent2 class hence unmounting the previous.
    // const LInterfacedSimpleLogicComponent2 = LInterfaceWrapper(SimpleLogicComponent2);

    return (
      <div className='compositeLogicComponent'>
        <div onClick={this.handleClick}>{`${NAME}`}</div>
        <LInterfacedSimpleLogicComponent1 ldConfig={ldConfig1} />
        <LInterfacedSimpleLogicComponent2 ldConfig={ldConfig2} />
      </div>)
    ;
  }
}

export default CompositeLogicComponent;
