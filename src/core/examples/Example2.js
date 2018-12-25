import React from "react";

import { CollectedSimpleLogicComponent1, CollectedSimpleLogicComponent2 } from './CollectedLogicComponents';

let counter = 0;
const changeEventHandle = () => {
  // console.log(`Example2 - Change event number ${++counter}`);
  // console.log('rootCollector:', rootCollector);
};

// eslint-disable-next-line
let rootCollector = [];
const register = (collectorInstance) => {
  rootCollector.push(collectorInstance);
  return changeEventHandle;
};

const name = 'RootCollector';
const ldConfig = {
  name,
  register,
}

const Example2 = (props) => (
  <div>
    <div>Example 2 - Collected simple logic component Siblings.</div>
    <CollectedSimpleLogicComponent1 ldConfig={ldConfig} />
    <CollectedSimpleLogicComponent2 ldConfig={ldConfig} />
    <CollectedSimpleLogicComponent1 ldConfig={ldConfig} />
  </div>
);

export default Example2
