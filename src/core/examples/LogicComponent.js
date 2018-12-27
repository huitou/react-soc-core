import React, { Component } from "react";
import PropTypes from 'prop-types';

import Collector from "../Collector";
import { withCollector } from "../withCollector";

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
    const { level } = this.props;
    // console.log('orginal rende() at level ', level);
    const Nested = withCollector(Collector)(LogicComponent);
    const nestedHset = {
      name: `Nested-${NAME}`,
      register: this.collector.childCollectorRegister,
      unregister: this.collector.childCollectorUnregister,
    };

    return (
      <div>
        <div className={ level ? `test-level${level}` : 'test'} onClick={this.handleClick}>
          {`${NAME}-Level-${level}`}
        </div>
        { level ? <Nested hset={nestedHset} level={ level - 1 } /> : null }
      </div>)
    ;
  }
}

export default LogicComponent;
