import React from "react";
import PropTypes from 'prop-types';

import LInterface from '../LInterface';
import { withLInterface } from '../withLInterface';

import LogicComponent from './LogicComponent';

let counter = 0;
const changeEventHandle = () => {
  console.log(counter++);
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
  <InterfacedLogicComponent ldConfig={ldConfig} level={props.level}/>
);

Example1.prototype = {
  level: PropTypes.number, 
};

export default Example1
