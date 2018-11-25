import React, { Component, Fragment } from 'react';

class InterfaceAttacher extends Component {
  render() {
    const { lInterface, level } = this.props;
    console.log('decorator render() at level ', level);
    lInterface.setChangeEventSwitchOff();
    return (<Fragment>{this.props.children}</Fragment>);
  }

  componentDidMount() {
    const { lInterface, level } = this.props;
    console.log('decorator componentDidMount at level ', level);
    // super.componentDidMount && super.componentDidMount();
    // lInterface.hfuRegister({});
    lInterface.setChangeEventSwitchOn();
    lInterface.changeEveneHandle();
  }

  componentDidUpdate() {
    const { lInterface, level } = this.props;
    console.log('decorator componentDidUpdate at level ', level);
    // super.componentDidUpdate && super.componentDidUpdate();
    lInterface.setChangeEventSwitchOn();
    lInterface.changeEveneHandle();
  }

  componentWillUnmount() {
    const { level } = this.props;
    console.log('decorator componentWillUnmount at level ', level);
    // lInterface.hfuUnregister();
    // super.componentWillUnmount && super.componentWillUnmount();
  }
}

export default InterfaceAttacher;
