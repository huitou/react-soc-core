import React from 'react';

export const withChild = (ChildComponent) => (ParentComponent) => (props) => {
    return (
        <ParentComponent child={ChildComponent} {...props} />
    );
}
