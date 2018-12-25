import React from "react";
import { CollectedCompositeLogicComponent } from './CollectedLogicComponents';

let counter = 0;
const changeEventHandle = () => {
  // console.log(`Example3 - Change event number ${++counter}`);
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

const Example3 = (props) => (
  <div>
    <div>Example 3 - Collected composite logic component Parent-Child.</div>
    <CollectedCompositeLogicComponent ldConfig={ldConfig} />
  </div>
);

export default Example3
