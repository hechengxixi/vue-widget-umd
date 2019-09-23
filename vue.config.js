var path = require('path');

module.exports = {
  // 选项...
  configureWebpack:{
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'VueWidget.js',
        library: 'VueWidget',
        libraryTarget: "umd"
    },
    externals: {
        vue: {
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
            root: 'Vue'
        }
    },
    mode:'development'
  },
  filenameHashing: false,
  // 组件目录为'http://127.0.0.1:5501/webpack-vueWidget-lib/vue-widget/dist'
  publicPath: process.env.NODE_ENV === 'production'
    ? 'http://127.0.0.1:5501/webpack-vueWidget-lib/vue-widget/dist'
    : '/'
}