/*
  This is the Collector attacher which is used to
  put a Collector instance into a logic component.

  Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.
  Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';

export const withLInterface = (LogicInterface) => (WrappedComponent) => {
  class ExtendedComponent extends WrappedComponent {
    constructor(props) {
      super(props);
      // console.log('extended constructor at level ', this.props.level);
      this.lInterface = new LogicInterface(props.ldConfig);
    }

    render() {
      // console.log('extended rende() at level ', this.props.level);
      this.lInterface.setChangeEventSwitchOff();
      return super.render && super.render();
    }

    componentDidMount() {
      // console.log('extended componentDidMount at level ', this.props.level);
      super.componentDidMount && super.componentDidMount();

      if (LogicInterface.handleMap && LogicInterface.handleMap.hfu) {
        const hfu = { hifu: {}, hefu: {} };

        LogicInterface.handleMap.hfu.hifu &&
          Object.entries(LogicInterface.handleMap.hfu.hifu).reduce(
            (acc, cur) => { acc[cur[0]] = this[cur[1]]; return acc },
            hfu.hifu
          );
        LogicInterface.handleMap.hfu.hefu &&
          Object.entries(LogicInterface.handleMap.hfu.hefu).reduce(
            (acc, cur) => { acc[cur[0]] = this[cur[1]]; return acc },
            hfu.hefu
          );

        this.lInterface.hfuRegister(hfu);
      }

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
