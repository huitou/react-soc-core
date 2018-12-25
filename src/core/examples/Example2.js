import React from "react";

import { LInterfacedSimpleLogicComponent1, LInterfacedSimpleLogicComponent2 } from './LInterfacedLogicComponents';

let counter = 0;
const changeEventHandle = () => {
  // console.log(`Example2 - Change event number ${++counter}`);
  // console.log('rootlInterface:', rootlInterface);
};

// eslint-disable-next-line
let rootlInterface = [];
const register = (interfaceInstance) => {
  rootlInterface.push(interfaceInstance);
  return changeEventHandle;
};

const name = 'RootInterface';
const ldConfig = {
  name,
  register,
}

const Example2 = (props) => (
  <div>
    <div>Example 2 - Interfaced simple logic component Siblings.</div>
    <LInterfacedSimpleLogicComponent1 ldConfig={ldConfig} />
    <LInterfacedSimpleLogicComponent2 ldConfig={ldConfig} />
    <LInterfacedSimpleLogicComponent1 ldConfig={ldConfig} />
  </div>
);

export default Example2
