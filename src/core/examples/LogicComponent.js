import React, { Component } from "react";
import PropTypes from 'prop-types';

import LInterface from "../LInterface";
import { withLInterface } from "../withLInterface";

const NAME = 'LogicComponent';

class LogicComponent extends Component {
  static propTypes = {
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
    const { level, lInterface } = this.props;
    // console.log('orginal rende() at level ', level);
    const Nested = withLInterface(LInterface)(LogicComponent);
    const nestedLdConfig = { name: `Nested-${NAME}`, register: lInterface.childInterfaceRegister };

    return (
      <div className={ level ? `test-level${level}` : 'test'}>
        <div onClick={this.handleClick}>{`${NAME}-Level-${level}`}</div>
        { level ? <Nested ldConfig={nestedLdConfig} level={ level - 1 } /> : null }
      </div>)
    ;
  }
}

export default LogicComponent;
