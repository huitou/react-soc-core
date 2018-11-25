import React from "react";
import PropTypes from 'prop-types';

import LInterface from '../LInterface';
import { withLInterface } from '../withLInterface';

import LogicComponent from './LogicComponent';

let counter = 0;
const changeEventHandle = () => {
  console.log(`Example1 - Change event number ${++counter}`);
};

// eslint-disable-next-line
let rootlInterface;
const register = (interfaceInstance) => {
  rootlInterface = interfaceInstance;
  return changeEventHandle;
};

const name = 'RootInterface';
const ldConfig = {
  name,
  register,
}

const InterfacedLogicComponent = withLInterface(LInterface)(LogicComponent);

const Example1 = (props) => (
  <div>
    <div>Example 1 - Interfaced nested logic component Nested Parent-Child.</div>
    <InterfacedLogicComponent ldConfig={ldConfig} level={props.level}/>
  </div>
);

Example1.prototype = {
  level: PropTypes.number, 
};

export default Example1
