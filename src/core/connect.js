/*
  This is the logic model connector which is used to connect
  a logic model instance to a visual, logic or other component
  and to inject values and handles provided by the logic model.

  Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.
  Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import PropTypes from 'prop-types';

export const connect = (LModel, name) => (WrappedComponent) => {
    const root = {
        lInterface: undefined,
        ref: React.createRef(),
    };

    const changeEventHandle = () => {
        root.ref.current && root.ref.current.forceUpdate();
    };

    const register = (interfaceInstance) => {
        root.lInterface = interfaceInstance;
        return changeEventHandle;
    };

    const ldConfig = { name, register };

    class Wrapper extends React.Component {
        render() {
            return root.lInterface
                ? <WrappedComponent {...this.props} {...root.lInterface.valueAndHandleTree()} />
                : null;
        }
    }

    return (props) => {
        return (
            <React.Fragment>
                <Wrapper {...props} ref={root.ref} />
                <LModel {...props} ldConfig={ldConfig} />
            </React.Fragment>
        );
    };
};