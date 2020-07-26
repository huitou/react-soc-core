/*
    Collected Object Model.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { withCollector } from 'r-socs-core';

import ObjectCollector from './collector';
import ObjectModel from './component';

const CldObjectModel = withCollector(ObjectCollector)(ObjectModel);

export default CldObjectModel;
