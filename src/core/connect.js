/*
    It connects a model component to a target component and inject provided values and handles.

    Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';

export const connect = (ModelComponent, name) => (TargetComponent) => {
    class Wrapper extends React.Component {
        render() {
            const collector = this.props.getCollector();
            return collector
                ? <TargetComponent {...this.props} {...collector.valueAndHandleTree()} />
                : null;
        }
    }

    return (props) => {
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
        const getCollector = () => root.collector;

        return (
            <React.Fragment>
                <Wrapper {...props} ref={root.ref} getCollector={getCollector} />
                <ModelComponent {...props} ldConfig={ldConfig} />
            </React.Fragment>
        );
    };
};