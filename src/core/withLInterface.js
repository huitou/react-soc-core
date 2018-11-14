import React from 'react';

export const withLInterface = (LInterface) => (WrappedComponent) => (props) => {

  const lInterface = new LInterface(props.ldConfig);

  class ExtendedComponent extends WrappedComponent {
    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      console.log('in componentDidMount() of ExtendedComponent.');
    }
  }

  return (
    <ExtendedComponent {...props} ldConfig={undefined} lInterface={lInterface} />
  );

}