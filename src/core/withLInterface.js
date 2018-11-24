import React from 'react';

export const withLInterface = (LInterface) => (WrappedComponent) => (props) => {
  const lInterface = new LInterface(props.ldConfig);

  class ExtendedComponent extends WrappedComponent {
    render() {
      const { lInterface, level } = this.props;
      // console.log('extended rende() at level ', level);
      lInterface.setChangeEventSwitchOff();
      return super.render && super.render();
    }

    componentDidMount() {
      const { lInterface, level } = this.props;
      // console.log('extended componentDidMount at level ', level);
      super.componentDidMount && super.componentDidMount();
      lInterface.hfuRegister({});
      lInterface.setChangeEventSwitchOn();
      lInterface.changeEveneHandle();
    }

    componentDidUpdate() {
      const { lInterface, level } = this.props;
      // console.log('extended componentDidUpdate at level ', level);
      super.componentDidUpdate && super.componentDidUpdate();
      lInterface.setChangeEventSwitchOn();
      lInterface.changeEveneHandle();
    }

    componentWillUnmount() {
      const { lInterface, level } = this.props;
      // console.log('extended componentWillUnmount at level ', level);
      lInterface.hfuUnregister();
      super.componentWillUnmount && super.componentWillUnmount();
    }
  }

  return (
    <ExtendedComponent {...props} ldConfig={undefined} lInterface={lInterface} />
  );
}
