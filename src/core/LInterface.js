/*
  This is a generic LInterface class which may be
  used directly for hoisting "free" hefu/hifu or
  used as base class for concrete LInterfaces.

  ...
  Please add copy right here.
*/

import React from "react";

class LInterface {
/*
  An interface constructor expects a configuration object of the following shape:
    {
      register: (LInterface) => () => any
      name: string
    }
*/ 

  constructor({ name, register }) {
    this._name = name;
    this._parentInterfaceRegister = register;
    this._changeEventHandle = this._parentInterfaceRegister(this);
    this._isChangeEventSwitchOn = true;
    this._childLInterfaces = [];
  }

  setChangeEventSwitchOn = () => {
    this._isChangeEventSwitchOn = true;
  };
  setChangeEventSwitchOff = () => {
    this._isChangeEventSwitchOn = false;
  };

  changeEveneHandle = () => {
    if (this._isChangeEventSwitchOn) {
      this._changeEventHandle();
    }
  };

  hfuRegister = ({ hefu, hifu }) => {
    this.hfu = { hefu, hifu };
  };
  hfuUnregister = () => {
    this.hfu = undefined;
  };

  childInterfaceRegister = (childLInterface) => {
    this.__childLInterfaces.push(childLInterface);
  };
}

export default LInterface;