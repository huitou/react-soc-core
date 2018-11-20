import React, { Component } from "react";
import { shallow, mount } from "enzyme";

import LInterface from "./LInterface";
import { withLInterface } from "./withLInterface";

let lInterface;
const NAME = 'TestInterface';
const parentChangeEventHandleMock = jest.fn();
const parentRegisterMock = jest.fn((interfaceInstance) => {
  lInterface = interfaceInstance;
  return parentChangeEventHandleMock;
});
const ldConfig = {
  name: NAME,
  register: parentRegisterMock,
}

class LogicComponent extends Component {
  state = { test: true };

  handleClick = () => {
    this.setState(
      (state) => ({ test: !state.test })
    );
  };

  render() {
    return <div className='test' onClick={this.handleClick}/>;
  }
}

describe("withLInterface function", () => {
  describe("when called with a LInterface class parameter", () => {
    it("returns a wrapper function", () => {
      const wrapperFunction = withLInterface(LInterface);
      expect(typeof wrapperFunction).toBe('function');
    });
  });

  describe("when the returned wrapper function is called", () => {
    it("returns a function component", () => {
      const FunctionComponent = withLInterface(LInterface)(LogicComponent);
      expect(typeof FunctionComponent).toBe('function');
    });
  });

  describe("when the function component is mounted with proper props", () => {

    let FunctionComponent, enzymeWrapper, enzymeWrapper_ExtendedComponent;
    beforeEach(() => {
      lInterface = undefined;
      FunctionComponent = withLInterface(LInterface)(LogicComponent);
      enzymeWrapper = mount(<FunctionComponent ldConfig={ldConfig} />);
      enzymeWrapper_ExtendedComponent = enzymeWrapper.find('ExtendedComponent');
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("render an extended component with the wrapped logic component content", () => {
      expect(enzymeWrapper_ExtendedComponent.length).toBe(1);
      expect(enzymeWrapper.find('.test').length).toBe(1);
    });

    it("render an extended component passing lInterface prop", () => {
      expect(enzymeWrapper_ExtendedComponent.length).toBe(1);
      expect(enzymeWrapper_ExtendedComponent.prop('lInterface')).toBeDefined();
      expect(enzymeWrapper_ExtendedComponent.prop('ldConfig')).not.toBeDefined();
    });

    it("parentRegister is called", () => {
      expect(parentRegisterMock).toHaveBeenCalled();
    });

    it("the lInterface's _changeEventHandle is registered", () => {
      expect(lInterface._changeEventHandle).toBeDefined();
    });

    it("the wrapped logic component's hfu is registered in lInterface", () => {
      expect(lInterface.hfu).toBeDefined();
    });

    it("the parent's change event handle has benn called once", () => {
      expect(parentChangeEventHandleMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("when the function component is unmounted", () => {
    it("lInterface's hfu is unregistered", () => {
      lInterface = undefined;
      const FunctionComponent = withLInterface(LInterface)(LogicComponent);
      const enzymeWrapper = mount(<FunctionComponent ldConfig={ldConfig} />);
      enzymeWrapper.unmount();

      expect(lInterface.hfu).not.toBeDefined();
    });
  });
});