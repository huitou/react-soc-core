/*
  This is a generic LInterface class which may be
  used directly for hoisting child interfaces or
  used as base class for concrete LInterfaces.

  ...
  Please add copyright here.
*/

class LInterface {
  /*
    Mandatory declaration, overridable.
  */
  static handleMap = {
    hfu: { /* xxx: 'yyy' */ },
  };

  /*
    Constructor expects a configuration object of the following shape:
      { register: (LInterface) => () => any, name: string }
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
        throw 'Name of child logic interface is NOT unique.';
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
}

export default LInterface;