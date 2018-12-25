import React, { Component } from "react";
import PropTypes from 'prop-types';

import Collector from "../Collector";
import { withLInterface } from "../withLInterface";

const NAME = 'LogicComponent';

class LogicComponent extends Component {
  static propTypes = {
    ldConfig: PropTypes.object.isRequired,
    level: PropTypes.number,
  };
  static defaultProps = {
    level: 0,
  };

  state = { test: true };

  handleClick = () => {
    this.setState(
      (state) => ({ test: !state.test })
    );
  };

  render() {
    const { level } = this.props;
    // console.log('orginal rende() at level ', level);
    const Nested = withLInterface(Collector)(LogicComponent);
    const nestedLdConfig = {
      name: `Nested-${NAME}`,
      register: this.lInterface.childInterfaceRegister,
      unregister: this.lInterface.childInterfaceUnregister,
    };

    return (
      <div>
        <div className={ level ? `test-level${level}` : 'test'} onClick={this.handleClick}>
          {`${NAME}-Level-${level}`}
        </div>
        { level ? <Nested ldConfig={nestedLdConfig} level={ level - 1 } /> : null }
      </div>)
    ;
  }
}

export default LogicComponent;
