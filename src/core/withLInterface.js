import React from 'react';

export const withLInterface = (LInterface) => (WrappedComponent) => {
  class ExtendedComponent extends WrappedComponent {
    render() {
      const { lInterface } = this.props;
      // console.log('extended rende() at level ', this.props.level);
      lInterface.setChangeEventSwitchOff();
      return super.render && super.render();
    }

    componentDidMount() {
      const { lInterface } = this.props;
      // console.log('extended componentDidMount at level ', this.props.level);
      super.componentDidMount && super.componentDidMount();
      lInterface.hfuRegister({});
      lInterface.setChangeEventSwitchOn();
      lInterface.changeEveneHandle();
    }

    componentDidUpdate() {
      const { lInterface } = this.props;
      // console.log('extended componentDidUpdate at level ', this.props.level);
      super.componentDidUpdate && super.componentDidUpdate();
      lInterface.setChangeEventSwitchOn();
      lInterface.changeEveneHandle();
    }

    componentWillUnmount() {
      const { lInterface } = this.props;
      // console.log('extended componentWillUnmount at level ', this.props.level);
      lInterface.hfuUnregister();
      super.componentWillUnmount && super.componentWillUnmount();
    }
  }

  return (props) => {
    const lInterface = new LInterface(props.ldConfig);

    return (
      <ExtendedComponent {...props} ldConfig={undefined} lInterface={lInterface} />
    );
  }
}
