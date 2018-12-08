/*
  This is the Collector attacher which is used to
  put a Collector instance into a logic component.

  ...
  Please add copyright here.
*/

import React from 'react';

export const withLInterface = (LInterface) => (WrappedComponent) => {
  class ExtendedComponent extends WrappedComponent {
    constructor(props) {
      super(props);
      // console.log('extended constructor at level ', this.props.level);
      this.lInterface = new LInterface(props.ldConfig);
    }

    render() {
      // console.log('extended rende() at level ', this.props.level);
      this.lInterface.setChangeEventSwitchOff();
      return super.render && super.render();
    }

    componentDidMount() {
      // console.log('extended componentDidMount at level ', this.props.level);
      super.componentDidMount && super.componentDidMount();
      this.lInterface.hfuRegister(
        Object.entries(LInterface.handleMap.hfu).reduce(
          (acc, cur) => { acc[cur[0]] = this[cur[1]]; return acc },
          {}
        )
      );
      this.lInterface.setChangeEventSwitchOn();
      this.lInterface.changeEveneHandle();
    }

    componentDidUpdate() {
      // console.log('extended componentDidUpdate at level ', this.props.level);
      super.componentDidUpdate && super.componentDidUpdate();
      this.lInterface.setChangeEventSwitchOn();
      this.lInterface.changeEveneHandle();
    }

    componentWillUnmount() {
      const { unregister } = this.props.ldConfig;
      // console.log('extended componentWillUnmount at level ', this.props.level);
      this.lInterface.hfuUnregister();
      unregister && unregister(this.lInterface);
      super.componentWillUnmount && super.componentWillUnmount();
    }
  }

  return (props) => {
    return (<ExtendedComponent {...props} />);
  }
}
