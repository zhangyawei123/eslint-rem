// const ThreeExamples = require('import-three-examples')

module.exports = {
  publicPath: './',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
 /*  chainWebpack: config => {
    // 配置所有threejs里面案例使用的方法
    ThreeExamples.forEach((v) => {
        if (~v.use.indexOf('imports')) {
            config.module
                .rule(`${v.test}_i`)
                .test(require.resolve(v.test))
                .use(v.use)
                .loader(v.use)
        } else {
            config.module
                .rule(`${v.test}_e`)
                .test(require.resolve(v.test))
                .use(v.use)
                .loader(v.use)
        }
    })
  }, */
  // 配置所有threejs里面案例使用的方法2
  configureWebpack: {
    module: {
      rules: [
        {
          test: require.resolve('three/examples/js/controls/OrbitControls'),
          use: 'imports-loader?THREE=three'
        },
        {
          test: require.resolve('three/examples/js/loaders/MTLLoader'),
          use: 'imports-loader?THREE=three'
        },
        {
          test: require.resolve('three/examples/js/loaders/OBJLoader'),
          use: 'imports-loader?THREE=three'
        },
        {
          test: require.resolve('three/examples/js/objects/Sky'),
          use: 'imports-loader?THREE=three'
        },
        {
          test: require.resolve('three/examples/js/objects/Water'),
          use: 'imports-loader?THREE=three'
        },
        {
          test: require.resolve('three/examples/js/controls/OrbitControls'),
          use: 'exports-loader?THREE.OrbitControls'
        },
        {
          test: require.resolve('three/examples/js/loaders/MTLLoader'),
          use: 'exports-loader?THREE.MTLLoader'
        },
        {
          test: require.resolve('three/examples/js/loaders/OBJLoader'),
          use: 'exports-loader?THREE.OBJLoader'
        },
        {
          test: require.resolve('three/examples/js/objects/Sky'),
          use: 'exports-loader?THREE.Sky'
        },
        {
          test: require.resolve('three/examples/js/objects/Water'),
          use: 'exports-loader?THREE.Water'
        },
        {
          test: require.resolve('three/examples/js/WebGL'),
          use: 'exports-loader?WEBGL'
        }
      ]
    },
    externals: {
      'AMap': 'AMap', // 使用高德地图必不可少的配置
      'Loca': 'Loca' // 使用高德地图可视化组件时必加
    }
  },
  // rem配置
  /* css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 100
            })
          ]
        }
      }
  }, */
  // webpack-dev-server 相关配置
  outputDir: process.env.outputDir,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://yapi.demo.qunar.com/mock/15030/wechat/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }, // 设置代理
    // before: app => {}
    overlay: {
      warnings: false, // 警告不会阻塞页面的执行
      errors: true
    }
  }
}
