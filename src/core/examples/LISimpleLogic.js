/*
  Sample Collector.

  Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.
  Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import LInterface from '../LInterface';

export default class LISimpleLogic extends LInterface {
    static handleMap = {
        hfu: {
            hifu: { value: 'getTestState' },
            hefu: { click: 'handleClick' },
        },
    };
}