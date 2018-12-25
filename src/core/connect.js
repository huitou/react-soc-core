/*
  This is used to connect a model component instance to a React component
  and to inject values and handles provided by the model.

  Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.
  Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import PropTypes from 'prop-types';

export const connect = (LModel, name) => (WrappedComponent) => {
    const root = {
        collector: undefined,
        ref: React.createRef(),
    };

    const changeEventHandle = () => {
        root.ref.current && root.ref.current.forceUpdate();
    };

    const register = (collectorInstance) => {
        root.collector = collectorInstance;
        return changeEventHandle;
    };

    const ldConfig = { name, register };

    class Wrapper extends React.Component {
        render() {
            return root.collector
                ? <WrappedComponent {...this.props} {...root.collector.valueAndHandleTree()} />
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