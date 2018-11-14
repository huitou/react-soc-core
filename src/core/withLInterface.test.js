import React, { Component } from "react";
import { shallow, mount } from "enzyme";

import LInterface from "./LInterface";
import { withLInterface } from "./withLInterface";

const NAME = 'TestInterface';
const parentChangeEventHandleMock = jest.fn();
const parentRegisterMock = jest.fn().mockReturnValue(parentChangeEventHandleMock);

const ldConfig = {
  name: NamedNodeMap,
  register: parentRegisterMock,
}

class LogicComponent extends Component {
  render() {
    return <div className='test' onClick={() => {}}/>;
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
    it("render a extended component with the wrapped logic component content", () => {
      const parentChangeEventHandleMock = jest.fn();
      const parentRegisterMock = jest.fn().mockReturnValue(parentChangeEventHandleMock);

      const FunctionComponent = withLInterface(LInterface)(LogicComponent);
      const enzymeWrapper = mount(<FunctionComponent ldConfig={ldConfig} />);
      const enzymeWrapper_ExtendedComponent = enzymeWrapper.find('ExtendedComponent');

      expect(enzymeWrapper_ExtendedComponent.length).toBe(1);
      expect(enzymeWrapper.find('.test').length).toBe(1);
    });

    it("render a extended component passing lInterface prop", () => {
      const parentChangeEventHandleMock = jest.fn();
      const parentRegisterMock = jest.fn().mockReturnValue(parentChangeEventHandleMock);

      const FunctionComponent = withLInterface(LInterface)(LogicComponent);
      const enzymeWrapper = mount(<FunctionComponent ldConfig={ldConfig} />);
      const enzymeWrapper_ExtendedComponent = enzymeWrapper.find('ExtendedComponent');

      expect(enzymeWrapper_ExtendedComponent.prop('lInterface')).toBeDefined();
      expect(enzymeWrapper_ExtendedComponent.prop('ldConfig')).not.toBeDefined();
    });
  });

});