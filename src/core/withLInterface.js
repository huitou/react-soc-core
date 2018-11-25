import React from 'react';
import InterfaceAttacher from './InterfaceAttacher';

/*
  ATTENTION: This solution will not capture changes from leaf logic components.
             A possible solution is to create a dummy component as leaf.
*/

export const withLInterface = (LInterface) => (WrappedComponent) => (props) => {
  const lInterface = new LInterface(props.ldConfig);

  return (
    <InterfaceAttacher {...props} ldConfig={undefined} lInterface={lInterface}>
      <WrappedComponent {...props} ldConfig={undefined} lInterface={lInterface} />
    </InterfaceAttacher>
  );
}
