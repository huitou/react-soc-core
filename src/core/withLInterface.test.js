import React, { Component } from "react";
import PropTypes from 'prop-types';
import { shallow, mount } from "enzyme";

import LInterface from "./LInterface";
import { withLInterface } from "./withLInterface";

let rootlInterface;
const NAME = 'TestInterface';
const parentChangeEventHandleMock = jest.fn();
const parentRegisterMock = jest.fn((interfaceInstance) => {
  rootlInterface = interfaceInstance;
  return parentChangeEventHandleMock;
});
const rootLdConfig = {
  name: NAME,
  register: parentRegisterMock,
}

const LEVEL = 1;
class LogicComponent extends Component {
  static propTypes = {
    level: PropTypes.number,
  };
  static defaultProps = {
    level: 0,
  };

  state = { test: true };

  handleClick = () => {
    this.setState(
      (state) => ({ test: !state.test })
    );
  };

  render() {
    const { level, lInterface } = this.props;
    const Nested = withLInterface(LInterface)(LogicComponent);
    const nestedLdConfig = { name: `Nested-${NAME}`, register: lInterface.childInterfaceRegister };

    return (
      <div className={ level ? `test-level${level}` : 'test'} onClick={this.handleClick}>
        { level ? <Nested ldConfig={nestedLdConfig} level={ level - 1 } /> : null }
      </div>)
    ;
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
      rootlInterface = undefined;
      FunctionComponent = withLInterface(LInterface)(LogicComponent);
      enzymeWrapper = mount(<FunctionComponent ldConfig={rootLdConfig} level={LEVEL} />);
      enzymeWrapper_ExtendedComponent = enzymeWrapper.find('ExtendedComponent');
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("render an extended component with the wrapped logic component content", () => {
      expect(enzymeWrapper_ExtendedComponent.length).toBe(LEVEL + 1);
      expect(enzymeWrapper.find('.test').length).toBe(1);
    });

    it("render an extended component passing lInterface prop", () => {
      expect(enzymeWrapper_ExtendedComponent.length).toBe(LEVEL + 1);
      expect(enzymeWrapper_ExtendedComponent.first().prop('lInterface')).toBeDefined();
      expect(enzymeWrapper_ExtendedComponent.first().prop('ldConfig')).not.toBeDefined();
    });

    it("parentRegister is called", () => {
      expect(parentRegisterMock).toHaveBeenCalled();
    });

    it("the lInterface's _changeEventHandle is registered", () => {
      expect(rootlInterface._changeEventHandle).toBeDefined();
    });

    it("the wrapped logic component's hfu is registered in lInterface", () => {
      expect(rootlInterface.hfu).toBeDefined();
    });

    it("the parent's change event handle has benn called once", () => {
      expect(parentChangeEventHandleMock).toHaveBeenCalledTimes(1);
    });

    it("the parent's change event handle has benn called once when state changes", () => {
      expect(parentChangeEventHandleMock).toHaveBeenCalledTimes(1);
      enzymeWrapper.find('.test').simulate('click');
      expect(parentChangeEventHandleMock).toHaveBeenCalledTimes(2);
    });
  });

  describe("when the function component is unmounted", () => {
    it("lInterface's hfu is unregistered", () => {
      rootlInterface = undefined;
      const FunctionComponent = withLInterface(LInterface)(LogicComponent);
      const enzymeWrapper = mount(<FunctionComponent ldConfig={rootLdConfig} level={LEVEL} />);
      enzymeWrapper.unmount();

      expect(rootlInterface.hfu).not.toBeDefined();
    });
  });
});