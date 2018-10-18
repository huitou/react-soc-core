import React from "react";

// hefc, hefp and hifp shape:
const hefc_handle_definition = {
  /* handle_name: true/false, */
};
const hefp_handle_definition = {
  /* handle_name: true/false, */
};
const hifp_handle_definition = {
  /* handle_name: true/false, */
};

export const DEFAULT_ROLE = { name: "default" };
export const DEFAULT_HEFC = {};

class LInterface {
  constructor(hefc = {}, role = DEFAULT_ROLE) {
    this._hefc_handle_definition = hefc_handle_definition;
    this._hefp_handle_definition = hefp_handle_definition;
    this._hifp_handle_definition = hifp_handle_definition;

    this._role = role;
    this._hefc = hefc;
    this._ref = undefined;

    // hefc, hefp and hifp shape check:
    this._isHefcHandleDefined = handle => !!hefc_handle_definition[handle];
    this._isHefpHandleDefined = handle => !!hefp_handle_definition[handle];
    this._isHifpHandleDefined = handle => !!hifp_handle_definition[handle];

    // hefc, hefp and hifp handle availability check:
    this._isHefcHandleAvailable = handle => !!this._hefc[handle];
    this._isHefpHandleAvailable = handle =>
      !!(
        this._ref &&
        this._ref.current &&
        this._ref.current.hefp &&
        this._ref.current.hefp[handle]
      );
    this._isHifpHandleAvailable = handle =>
      !!(
        this._ref &&
        this._ref.current &&
        this._ref.current.hifp &&
        this._ref.current.hifp[handle]
      );

    // hefc, hefp and hifp invocation logging:
    // TODO_INI: better logging to be defined.
    this._hefcLog = (handle, params, res) => {};
    this._hefpLog = (handle, params, res) => {};
    this._hifpLog = (handle, params, res) => {};
    // TODO_FIN
  }

  role = () => this._role;
  hefc = () => this._hefc;
  hefp = () => this._ref && this._ref.current && this._ref.current.hefp;
  hifp = () => this._ref && this._ref.current && this._ref.current.hifp;

  // TODO_INI: a better error construct is needed.
  callHefc = (handle, params = {}) => {
    if (this._isHefcHandleDefined(handle) && this._isHefcHandleAvailable(handle)) {
      const res = this._hefc[handle](...params);
      this._hefcLog(handle, params, res);
      return res;
    } else {
      throw Error(
        `Error of hefc ${handle}: defined: ${this._isHefcHandleDefined(
          handle
        )}, available: ${this._isHefcHandleAvailable(handle)}`
      );
    }
  };
  callHefp = (handle, params) => {
    if (this._isHefpHandleDefined(handle) && this._isHefpHandleAvailable(handle)) {
      const res = this._ref.current.hefp[handle](...params);
      this._hefpLog(handle, params, res);
      return res;
    } else {
      throw Error(
        `Error of hefp ${handle}: defined: ${this._isHefpHandleDefined(
          handle
        )}, available: ${this._isHefpHandleAvailable(handle)}`
      );
    }
  };
  callHifp = (handle, params) => {
    if (this._isHifpHandleDefined(handle) && this._isHifpHandleAvailable(handle)) {
      const res = this._ref.current.hifp[handle](...params);
      this._hifpLog(handle, params, res);
      return res;
    } else {
      throw Error(
        `Error of hifp ${handle}: defined: ${this._isHifpHandleDefined(
          handle
        )}, available: ${this._isHifpHandleAvailable(handle)}`
      );
    }
  };
  // TODO_FIN
}

export default LInterface;
