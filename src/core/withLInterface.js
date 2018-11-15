import React from 'react';

export const withLInterface = (LInterface) => (WrappedComponent) => (props) => {
  const lInterface = new LInterface(props.ldConfig);

  class ExtendedComponent extends WrappedComponent {
    componentDidMount() {
      const { lInterface } = this.props;
      super.componentDidMount && super.componentDidMount();
      lInterface.hfuRegister({});
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