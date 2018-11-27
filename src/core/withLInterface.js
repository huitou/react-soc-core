import React from 'react';

export const withLInterface = (LInterface) => (WrappedComponent) => {
  class ExtendedComponent extends WrappedComponent {
    constructor(props) {
      super(props);
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
      this.lInterface.hfuRegister({});
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
