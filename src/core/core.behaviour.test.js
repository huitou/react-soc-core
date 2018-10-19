import React, { Component } from "react";
import { shallow, mount } from "enzyme";

import LInterface from "./LInterface";
import { withLInterface } from "./withLInterface";

const NAME = 'test';

const hefc1 = jest.fn();
const hefp1 = jest.fn();
const hifp1 = jest.fn();

const HEFC = { hefc1 };
const HEFP = { hefp1 };
const HIFP = { hifp1 };

class ChildComponent extends Component {
  hefp = HEFP;
  hifp = HIFP;

  render() {
    return <div onClick={() => this.props.lInterface.callHefc('hefc1')}/>;
  }
}

describe("Core", () => {

  describe("when used without parameters href and role", () => {
    let InterfacedComponent;
    beforeEach(() => {
      InterfacedComponent = withLInterface(ChildComponent, LInterface)();
    });

    it("mounts a component with interface without getting interface's reference", () => {
      const wrapper = shallow(<InterfacedComponent />);
      expect(wrapper.find(ChildComponent).length).toEqual(1);
    });

    it("mounts a component with interface without getting interface's reference", () => {
      const wrapper = mount(<InterfacedComponent />);
      expect(wrapper.find(ChildComponent).length).toEqual(1);
      expect(wrapper.find("div").length).toEqual(1);
    });
  });

  describe("when used with parameter role", () => {
    let InterfacedComponentFunc;
    beforeEach(() => {
      InterfacedComponentFunc = withLInterface(ChildComponent, LInterface);
    });

    it("mounts a component with interface and gets circular reference of interface", () => {
      const role = { name: NAME };
      const InterfacedComponent = InterfacedComponentFunc(undefined, role)
      const wrapper = shallow(<InterfacedComponent />);
      expect(role.interface.role()).toBe(role);
      expect(role.name).toBe(NAME);
      expect(role.interface instanceof LInterface).toEqual(true);
    });

    it("mounts a component with interface's hefp and hifp set", () => {
      const role = { name: NAME };
      const InterfacedComponent = InterfacedComponentFunc(undefined, role)
      const wrapper = mount(<InterfacedComponent />);
      expect(role.interface.hefp()).toEqual(HEFP);
      expect(role.interface.hifp()).toEqual(HIFP);
    });
  });

  describe("when used with parameters hefc and role", () => {
    let InterfacedComponentFunc;
    beforeEach(() => {
      InterfacedComponentFunc = withLInterface(ChildComponent, LInterface);
    });

    it("mounts a component with interface's hefc set", () => {
      const hefc = HEFC;
      const role = { name: NAME };
      const InterfacedComponent = InterfacedComponentFunc(hefc, role)
      const wrapper = shallow(<InterfacedComponent />);
      expect(role.interface.hefc()).toEqual(hefc);
    });

    it("does NOT give parent access to handles provided by child", () => {
      const hefc = HEFC;
      const role = { name: NAME };
      const InterfacedComponent = InterfacedComponentFunc(hefc, role)
      const wrapper = mount(<InterfacedComponent />);
      expect(() => role.interface.callHefp('hefp1')).toThrow('Error of hefp hefp1: defined: false, available: true');
      expect(() => role.interface.callHifp('hifp1')).toThrow('Error of hifp hifp1: defined: false, available: true');
      expect(hefp1).not.toHaveBeenCalled();
      expect(hifp1).not.toHaveBeenCalled();
    });

    it("does NOT give child access to handles provided by parent", () => {
      const hefc = HEFC;
      const role = { name: NAME };
      const InterfacedComponent = InterfacedComponentFunc(hefc, role)
      const wrapper = mount(<InterfacedComponent />);
      expect(() => wrapper.find("div").simulate('click')).toThrow('Error of hefc hefc1: defined: false, available: true');
      expect(hefc1).not.toHaveBeenCalled();
    });
  });

});
