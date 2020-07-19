const babelJest = require('babel-jest');
const entriaBabel = require('@playground/babel');

module.exports = babelJest.createTransformer(entriaBabel);
