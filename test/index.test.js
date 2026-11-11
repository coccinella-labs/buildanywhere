// Copyright (c) 2025 Build-Anywhere Pipeline
// SPDX-License-Identifier: MIT

const assert = require('assert');
const { message } = require('../index.js');

const tests = [
  {
    name: 'exports the expected greeting',
    fn: () => assert.strictEqual(message, 'Hello, build-anywhere world!'),
  },
];

let failures = 0;
for (const t of tests) {
  try {
    t.fn();
    console.log(`ok - ${t.name}`);
  } catch (err) {
    failures += 1;
    console.error(`not ok - ${t.name}`);
    console.error(err.message);
  }
}
process.exit(failures === 0 ? 0 : 1);
