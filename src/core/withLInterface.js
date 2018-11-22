import React from 'react';

export const withLInterface = (LInterface) => (WrappedComponent) => (props) => {
  const lInterface = new LInterface(props.ldConfig);

  class ExtendedComponent extends WrappedComponent {
    constructor(props) {
      super(props);
      const { lInterface } = this.props;
      lInterface.setChangeEventSwitchOff();
    }

    componentDidMount() {
      const { lInterface } = this.props;
      super.componentDidMount && super.componentDidMount();
      lInterface.hfuRegister({});
      lInterface.setChangeEventSwitchOn();
      lInterface.changeEveneHandle();
      // console.log('componentDidMount at level ', level);
    }

    componentWillUnmount() {
      const { lInterface } = this.props;
      lInterface.hfuUnregister();
      super.componentWillUnmount && super.componentWillUnmount();
    }
  }

  return (
    <ExtendedComponent {...props} ldConfig={undefined} lInterface={lInterface} />
  );
}
