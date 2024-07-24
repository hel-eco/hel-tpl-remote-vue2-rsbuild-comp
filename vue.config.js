const webpack = require('webpack');
const helDevUtils = require('hel-dev-utils');
const appInfo = require('./appInfo');
// const webpack = require('webpack');

module.exports = {
  publicPath: appInfo.getPublicPathOrUrl(),
  productionSourceMap: true,
  outputDir: helDevUtils.cst.HEL_DIST_DIR,
  configureWebpack: config => {
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = appInfo.jsonpFnName;
    config.externals = appInfo.externals;
    config.optimization = {
      splitChunks: {
        maxSize: 6000000,
      },
    };

    config.devServer = {
      // 开启跨域，方便本机上别的项目调试当前模块
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      },
    };

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 2
      }),
    );

    // if user want to inject env var
    // config.plugins.push(new webpack.DefinePlugin({
    //   "process.env": {
    //     VUE_APP_XXX: JSON.stringify('xxx'),
    //   }
    // }));
  },
};
