/*
  Counter - A composite component made of a model one and a view one.

  Copyright (c) 2018 Riverside Software Engineering Ltd. All rights reserved.

  Licensed under the MIT License.
  See LICENSE file in the project root for full license information.
*/

import { connect } from '../../connect';
import CounterModel from './model';
import CounterView from './view';

const Counter = connect(CounterModel, 'Counter')(CounterView);

export default Counter;
