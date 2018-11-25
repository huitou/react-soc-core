import React, { Component } from "react";
import PropTypes from 'prop-types';

const NAME = 'SimpleLogicComponent1';

class SimpleLogicComponent1 extends Component {
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
    return (
      <div className='simpleLogicComponent1'>
        <div onClick={this.handleClick}>{`${NAME}`}</div>
      </div>)
    ;
  }
}

export default SimpleLogicComponent1;
