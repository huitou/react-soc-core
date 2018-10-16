import React from "react";

// hefc, hefp and hifp shape:
const hefc_handle_presence = {
  /* handle_name: true/false, */
};
const hefp_handle_presence = {
  /* handle_name: true/false, */
};
const hifp_handle_presence = {
  /* handle_name: true/false, */
};

class LInterface {
  constructor(hefc, role) {
    this._role = role;
    this._hefc = hefc;
    this._ref = undefined;

    // hefc, hefp and hifp shape check:
    this._isHefcHandle = handle => hefc_handle_presence[handle];
    this._isHefpHandle = handle => hefp_handle_presence[handle];
    this._isHifpHandle = handle => hifp_handle_presence[handle];

    // hefc, hefp and hifp handle availability check:
    this._isHefcHandleAvailable = handle => this._href[handle];
    this._isHefpHandleAvailable = handle =>
      this._ref &&
      this._ref.current &&
      this._ref.current.hefp &&
      this._ref.current.hefp[handle];
    this._isHifpHandleAvailable = handle =>
      this._ref &&
      this._ref.current &&
      this._ref.current.hifp &&
      this._ref.current.hifp[handle];

    // hefc, hefp and hifp invocation logging:
    this._hefcLog = (handle, params, res) => {};
    this._hefpLog = (handle, params, res) => {};
    this._hifpLog = (handle, params, res) => {};
  }

  role = () => this._role;
  hefc = (handle, params) => {
    if (this._isHefcHandle(handle) && this._isHefcHandleAvailable(handle)) {
      const res = this._hefc[handle](...params);
      this._hefcLog(handle, params, res);
      return res;
    } else {
      throw Error(
        `Error of hefc ${handle}: defined: ${this._isHefcHandle(
          handle
        )}, available: ${this._isHefcHandleAvailable(handle)}`
      );
    }
  };
  hefp = (handle, params) => {
    if (this._isHefpHandle(handle) && this._isHefpHandleAvailable(handle)) {
      const res = this._ref.current.hefp[handle](...params);
      this._hefpLog(handle, params, res);
      return res;
    } else {
      throw Error(
        `Error of hefp ${handle}: defined: ${this._isHefpHandle(
          handle
        )}, available: ${this._isHefpHandleAvailable(handle)}`
      );
    }
  };
  hifp = (handle, params) => {
    if (this._isHifpHandle(handle) && this._isHifpHandleAvailable(handle)) {
      const res = this._ref.current.hifp[handle](...params);
      this._hifpLog(handle, params, res);
      return res;
    } else {
      throw Error(
        `Error of hifp ${handle}: defined: ${this._isHifpHandle(
          handle
        )}, available: ${this._isHifpHandleAvailable(handle)}`
      );
    }
  };
}

export default LInterface;
