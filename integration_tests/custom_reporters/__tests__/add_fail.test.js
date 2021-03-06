/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

const add = require('../add');

describe('CustomReporters', () => {
  test('adds fail', () => {
    expect(add(1, 3)).toBe(231);
    expect(add(5, 7)).toBe(120);
    expect(add(2, 4)).toBe(6);
  });
});
