import React, { Component } from "react";
import { shallow, mount } from "enzyme";

import LInterface from "./LInterface";
import { withLInterface } from "./withLInterface";

class Placeholder extends Component {
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

    it("mounts simply the component ignoring the interface", () => {
      const wrapper = shallow(<InterfacedComponent />);
      expect(wrapper.find(Placeholder).length).toEqual(1);
    });

    it("mounts simply the component ignoring the interface", () => {
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

    it("mounts the component and set the interface instance", () => {
      const role = { name: 'test' };
      const InterfacedComponent = InterfacedComponentFunc(undefined, role)
      const wrapper = shallow(<InterfacedComponent />);
      expect(wrapper.find(Placeholder).length).toEqual(1);
      expect(role.interface instanceof LInterface).toEqual(true);
    });

    it("mounts the component and set the interface instance", () => {
      const role = { name: 'test' };
      const InterfacedComponent = InterfacedComponentFunc(undefined, role)
      const wrapper = mount(<InterfacedComponent />);
      expect(wrapper.find(Placeholder).length).toEqual(1);
      expect(wrapper.find("div").length).toEqual(1);
      expect(role.interface instanceof LInterface).toEqual(true);
      console.log(role.interface);
    });
  });

});
