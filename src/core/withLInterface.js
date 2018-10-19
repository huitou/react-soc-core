import React from "react";

export const withLInterface = (ChildComponent, LInterface) => (
  hefc,
  role
) => props => {
  const lInterface = new LInterface(hefc, role);
  const ref = React.createRef();

  lInterface._ref = ref;
  if (role) {
    role.interface = lInterface; // This is a cyclic reference.
  }

  return <ChildComponent ref={ref} lInterface={lInterface} {...props} />;
};
