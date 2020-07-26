/*
    Object Model Collector.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { Collector } from 'r-socs-core';

export default class ObjectCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: {
                value: 'value',
            },
            hefu: {
                change: 'change',
                reset: 'reset',
            },
        },
    };
}
