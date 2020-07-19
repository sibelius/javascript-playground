const config = require('@playground/babel');

const { createTransformer } = require('babel-jest');

module.exports = createTransformer({
  ...config,
});
