module.exports = {
  publicPath: './',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,

  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }, // 设置代理
    // before: app => {}
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
