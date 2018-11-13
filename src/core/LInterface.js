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

  constructor({ register, name }) {
    this._parentRegister = register;
    this._name = namne;

    this._ref = undefined;

    this._childLInterfaces = [];
    this._changeEventHandle = this._register(this);
  }

  ownRegister = (childLInterface) => {
    this.__childLInterfaces.push(childLInterface);
  };

  hefu = () => this._ref && this._ref.current && this._ref.current.hefu;
  hifu = () => this._ref && this._ref.current && this._ref.current.hifu;
}

export default LInterface;