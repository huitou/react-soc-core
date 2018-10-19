import React, { Component } from "react";
import { shallow, mount } from "enzyme";

import LInterface from "./LInterface";
import { withLInterface } from "./withLInterface";

const HEFP = { hefp1: jest.fn() };
const HIFP = { hifp1: jest.fn() };

class Placeholder extends Component {
  hefp = HEFP;
  hifp = HIFP;

  render() {
    return <div />;
  }
}

describe("Core", () => {

  describe("when used without parameters href and role", () => {
    let InterfacedComponent;
    beforeEach(() => {
      InterfacedComponent = withLInterface(Placeholder, LInterface)();
    });

    it("mounts a component with interface without getting interface's reference", () => {
      const wrapper = shallow(<InterfacedComponent />);
      expect(wrapper.find(Placeholder).length).toEqual(1);
    });

    it("mounts a component with interface without getting interface's reference", () => {
      const wrapper = mount(<InterfacedComponent />);
      expect(wrapper.find(Placeholder).length).toEqual(1);
      expect(wrapper.find("div").length).toEqual(1);
    });
  });

  describe("when used with parameter role", () => {
    let InterfacedComponentFunc;
    beforeEach(() => {
      InterfacedComponentFunc = withLInterface(Placeholder, LInterface);
    });

    it("mounts a component with interface and gets interface's reference", () => {
      const role = { name: 'test' };
      const InterfacedComponent = InterfacedComponentFunc(undefined, role)
      const wrapper = shallow(<InterfacedComponent />);
      expect(role.interface instanceof LInterface).toEqual(true);
    });

    it("mounts a component with interface's hefp and hifp set", () => {
      const role = { name: 'test' };
      const InterfacedComponent = InterfacedComponentFunc(undefined, role)
      const wrapper = mount(<InterfacedComponent />);
      expect(role.interface.hefp()).toEqual(HEFP);
      expect(role.interface.hifp()).toEqual(HIFP);
    });
  });

  describe("when used with parameters hefc and role", () => {
    let InterfacedComponentFunc;
    beforeEach(() => {
      InterfacedComponentFunc = withLInterface(Placeholder, LInterface);
    });

    it("mounts a component with interface's hefc set", () => {
      const hefc = { test: jest.fn() }
      const role = { name: 'test' };
      const InterfacedComponent = InterfacedComponentFunc(hefc, role)
      const wrapper = shallow(<InterfacedComponent />);
      expect(role.interface.hefc()).toEqual(hefc);
    });
  });

});
