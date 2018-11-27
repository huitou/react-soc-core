import React, { Component } from "react";
import PropTypes from 'prop-types';

const NAME = 'SimpleLogicComponent2';

class SimpleLogicComponent2 extends Component {
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
    return (
      <div className='simpleLogicComponent2'>
        <div onClick={this.handleClick}>{`${NAME}`}</div>
      </div>)
    ;
  }
}

export default SimpleLogicComponent2;
