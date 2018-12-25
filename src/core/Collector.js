/*
  This is a generic Collector class which may be
  used directly for hoisting child handles or
  used as base class for concrete Collector classes.

  Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.
  Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

const getHandleNode = (inputNode) => {
  const outputNode = { hifu: {}, hefu: {} };
  inputNode.hfu && inputNode.hfu.hifu && Object
    .entries(inputNode.hfu.hifu)
    .reduce((acc, cur) => { acc[cur[0]] = cur[1]; return acc; }, outputNode.hifu);
  inputNode.hfu && inputNode.hfu.hefu && Object
    .entries(inputNode.hfu.hefu)
    .reduce((acc, cur) => { acc[cur[0]] = cur[1]; return acc; }, outputNode.hefu);
  inputNode.children && Object
    .entries(inputNode.children)
    .reduce((acc, cur) => { acc[cur[0]] = getHandleNode(cur[1]); return acc; }, outputNode);
  return outputNode;
}

const getValueAndHandleNode = (inputNode) => {
  const outputNode = { hifu: {}, hefu: {} };
  inputNode.hfu && inputNode.hfu.hifu && Object
    .entries(inputNode.hfu.hifu)
    .reduce((acc, cur) => { acc[cur[0]] = cur[1](); return acc; }, outputNode.hifu);
  inputNode.hfu && inputNode.hfu.hefu && Object
    .entries(inputNode.hfu.hefu)
    .reduce((acc, cur) => { acc[cur[0]] = cur[1]; return acc; }, outputNode.hefu);
  inputNode.children && Object
    .entries(inputNode.children)
    .reduce((acc, cur) => { acc[cur[0]] = getValueAndHandleNode(cur[1]); return acc; }, outputNode);
  return outputNode;
}

class Collector {
  /*
    Mandatory declaration, overridable.
  */
  static handleMap = {
    hfu: {
      hifu: { /* getXxx: 'getXxx', xxx: 'getXxx' */ },
      hefu: { /* setAaa: 'setBbb' */ },
    },
  };

  /*
    Constructor expects a configuration object of the following shape:
      { register: (Collector) => () => any, name: string }
  */

  constructor({ name, register }) {
    this._name = name;
    this._changeEventHandle = register(this);
    this._isChangeEventSwitchOn = true;
    this._childLInterfaces = {};

    this.getName = this.getName.bind(this);
    this.setChangeEventSwitchOn = this.setChangeEventSwitchOn.bind(this);
    this.setChangeEventSwitchOff = this.setChangeEventSwitchOff.bind(this);
    this.changeEveneHandle = this.changeEveneHandle.bind(this);

    this.hfuRegister = this.hfuRegister.bind(this);
    this.hfuUnregister = this.hfuUnregister.bind(this);

    this.childInterfaceRegister = this.childInterfaceRegister.bind(this);
    this.childInterfaceUnregister = this.childInterfaceUnregister.bind(this);

    this.handleTree = this.handleTree.bind(this);
    this.valueAndHandleTree = this.valueAndHandleTree.bind(this);

    this.counter = 0;
  }

  getName() {
    return this._name;
  };

  setChangeEventSwitchOn() {
    this._isChangeEventSwitchOn = true;
  };
  setChangeEventSwitchOff() {
    this._isChangeEventSwitchOn = false;
  };

  changeEveneHandle() {
    if (this._isChangeEventSwitchOn) {
      this._changeEventHandle();
    }
  };

  hfuRegister(hfu) {
    this.hfu = hfu;
  };
  hfuUnregister() {
    this.hfu = undefined;
  };

  childInterfaceRegister(childLInterface) {
    if (this._childLInterfaces[childLInterface.getName()]) {
      if (this.counter === 0) {
        this.counter++;
        setTimeout(() => this.childInterfaceRegister(childLInterface), 0);
      } else {
        // eslint-disable-next-line
        throw 'Name of child collector is NOT unique.';
      }
    } else {
      this._childLInterfaces[childLInterface.getName()] = childLInterface;
      this.counter = 0;
    };
    return this.changeEveneHandle;
  };

  childInterfaceUnregister(childLInterface) {
    this._childLInterfaces[childLInterface.getName()] = undefined;
    return childLInterface;
  };

  handleTree() {
    return getHandleNode(this);
  }

  valueAndHandleTree() {
    return getValueAndHandleNode(this);
  }
}

export default Collector;