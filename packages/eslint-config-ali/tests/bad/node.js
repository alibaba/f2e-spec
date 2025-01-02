// 'no-var'
var fs = require('fs');

// 'node/prefer-global/buffer'
// 'quotes'
const { Buffer } = require("buffer");
// 'node/no-new-require'
// 'new-cap'
const util = new require('util');

// 'no-console'
console.log(util);
// 'semi'
// 'no-unused-vars'
const b = Buffer.alloc(16)

// 'node/prefer-promises/fs'
fs.readFile('../node.ts', 'utf-8', (err, data) => {
  // 'no-console'
  console.log(err, data);
});

exports = fs;
// 'eol-last'