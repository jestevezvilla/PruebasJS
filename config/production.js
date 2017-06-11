const merge = require('webpack-merge');
const baseConfig = require('./base');

const productionConfig = {};

module.exports = () => merge(baseConfig, productionConfig);

