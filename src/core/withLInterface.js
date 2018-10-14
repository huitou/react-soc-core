import React from 'react';

export const withLInterface = (ChildComponent, LInterface) => (hefc, role) => (props) => {
    const interface = new LInterface(hefc, role);
    const ref = React.createRef();

    interface._ref = ref;
    role.interface = interface   // This is a cyclic reference.

    return (<ChildComponent ref={ref} interface={interface} {...props} />)
};
