import React from "react";
import { LInterfacedCompositeLogicComponent } from './LInterfacedLogicComponents';

let counter = 0;
const changeEventHandle = () => {
  console.log(`Example3 - Change event number ${++counter}`);
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

const Example3 = (props) => (
  <div>
    <div>Example 3 - Interfaced composite logic component Parent-Child.</div>
    <LInterfacedCompositeLogicComponent ldConfig={ldConfig} />
  </div>
);

export default Example3
