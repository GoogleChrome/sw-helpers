/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const {parallel, series} = require('gulp');

const {lint} = require('./lint');
const {test_integration} = require('./test-integration');
const {test_node} = require('./test-node');

module.exports = {
  // The node and integration tests both muck with process.env.NODE_ENV, and
  // therefore can't be run in parallel.
  test: parallel(lint, series(test_node, test_integration)),
};
