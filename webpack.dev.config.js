const path = require('path');
const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('webpack-dev', {
  entry: path.resolve(__dirname, 'example'),
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@testnau/frontend-component-footer': path.resolve(__dirname, 'src'),
    },
  },
});
